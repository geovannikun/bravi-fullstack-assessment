'use strict';

var db = require('../../config/db');

module.exports = {getContacts, addContact, getContact, editContact, delContact};

//GET /person/{person_id}/contact
function getContacts(req, res, next) {
    var person_id = req.swagger.params.person_id.value;
    res.json({
        people: db.run(`SELECT * FROM person where person_contact = ${person_id}`)
    });
}
//POST /person/{person_id}/contact
function addContact(req, res, next) {
    var person_id = req.swagger.params.person_id.value;
    var contact = req.swagger.params.contact.value;
    db.insert(
        "person", {
            name: contact.name,
            phone: contact.phone,
            email: contact.email,
            whatsapp: contact.whatsapp,
            person_contact: person_id
        }, (inserted_id) => {
            res.json({
                success: inserted_id ? 1 : 0,
                description: inserted_id ? "Contact added to the list" : "Error to add contact to list"
            });
        }
    );
}
//GET /person/{person_id}/contact/{contact_id}
function getContact(req, res, next) {
    var contact_id = req.swagger.params.contact_id.value;
    var person_id = req.swagger.params.person_id.value;
    var person = db.run(`SELECT * FROM person WHERE id = ${contact_id} and person_contact = ${person_id}`)[0];
    if(person){
        res.json(person);
    }else{
        res.json({
            success: 0,
            description: "Contact dont exist"
        });
    }
}
//PUT /person/{person_id}/contact/{contact_id}
function editContact(req, res, next) {
    var contact = req.swagger.params.contact.value;
    var contact_id = req.swagger.params.contact_id.value;
    var person_id = req.swagger.params.person_id.value;

    if(db.run(`SELECT * FROM person WHERE id = ${contact_id} and person_contact = ${person_id}`)[0]){
        db.update(
            "person", 
            contact, {
                id: contact_id,
                person_contact: person_id
            }, (modified_rows) => {
                res.json({
                    success: 1,
                    description: "Contact updated"
                });
            }
        );
    }else{
        res.json({
            success: 0,
            description: "Contact dont exist"
        });
    }
}
//DELETE /person/{person_id}/contact/{contact_id}
function delContact(req, res, next) {
    var contact_id = req.swagger.params.contact_id.value;
    var person_id = req.swagger.params.person_id.value;
    
    if(db.run(`SELECT * FROM person WHERE id = ${contact_id} and person_contact = ${person_id}`)[0]){
        db.delete(
            "person", {
                id: contact_id,
                person_contact: person_id
            }, (modified_rows) => {
                res.json({
                    success: 1,
                    description: "Contact deleted"
                });
            }
        );
    }else{
        res.json({
            success: 0,
            description: "Contact dont exist"
        });
    }
}