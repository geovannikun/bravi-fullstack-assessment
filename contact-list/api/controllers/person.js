'use strict';

var db = require('../../config/db');

module.exports = {getPeople, addPerson, getPerson, editPerson, delPerson};

//GET /person
function getPeople(req, res, next) {
    res.json({
        people: db.run('SELECT * FROM person')
    });
}
//POST /person
function addPerson(req, res, next) {
    var person = req.swagger.params.person.value;
    db.insert(
        "person", {
            name: person.name,
            phone: person.phone,
            email: person.email,
            whatsapp: person.whatsapp
        }, (inserted_id) => {
            res.json({
                success: inserted_id ? 1 : 0,
                description: inserted_id ? "Person added to the list" : "Error to add person to list"
            });
        }
    );
}
//GET /person/{person_id}
function getPerson(req, res, next) {
    var person_id = req.swagger.params.person_id.value;
    var person = db.run(`SELECT * FROM person WHERE id = ${person_id}`)[0];
    if(person){
        res.json(person);
    }else{
        res.json({
            success: 0,
            description: "Person dont exist"
        });
    }
}
//PUT /person/{person_id}
function editPerson(req, res, next) {
    var person = req.swagger.params.person.value;
    var person_id = req.swagger.params.person_id.value;

    if(db.run(`SELECT * FROM person WHERE id = ${person_id}`)[0]){
        db.update(
            "person", 
            person, {
                id: person_id
            }, (modified_rows) => {
                res.json({
                    success: 1,
                    description: "Person updated"
                });
            }
        );
    }else{
        res.json({
            success: 0,
            description: "Person dont exist"
        });
    }
}
//DELETE /person/{person_id}
function delPerson(req, res, next) {
    var person_id = req.swagger.params.person_id.value;
    
    if(db.run(`SELECT * FROM person WHERE id = ${person_id}`)[0]){
        db.delete(
            "person", {
                id: person_id
            }, (modified_rows) => {
                res.json({
                    success: 1,
                    description: "Person deleted"
                });
            }
        );
    }else{
        res.json({
            success: 0,
            description: "Person dont exist"
        });
    }
}