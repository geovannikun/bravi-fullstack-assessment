PRAGMA foreign_keys=ON;
BEGIN TRANSACTION;

CREATE TABLE person(
    id INTEGER PRIMARY KEY,
    name VARCHAR(255) NOT NULL,
    phone VARCHAR(20),
    email VARCHAR(255),
    whatsapp VARCHAR(20),
    person_contact INTEGER REFERENCES person(id)
);

COMMIT;
