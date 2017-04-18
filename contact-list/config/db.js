'use strict;'

var sqlite = require('sqlite-sync');
sqlite.connect('database/contact-list.db');

module.exports = sqlite;