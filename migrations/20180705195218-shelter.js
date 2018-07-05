'use strict';

var dbm;
var type;
var seed;

/**
  * We receive the dbmigrate dependency from dbmigrate initially.
  * This enables us to not have to rely on NODE_PATH.
  */
exports.setup = function (options, seedLink) {
  dbm = options.dbmigrate;
  type = dbm.dataType;
  seed = seedLink;
};

exports.up = function (db, callback) {

  db.createTable('shelter', {
    shelterId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },

    address: {
      type: 'string',
    },

    amazonWishlistId: {
      type: 'int',
      length: 50,
    },

    name: {
      type: 'string'
    },

    address: {
      type: 'string'
    },

    description: {
      type: 'string'
    }




  }, callback);

};

exports.down = function (db, callback) {

  db.dropTable('shelter', function (err) {
    if (err) return callback(err);

    return callback();
  });

};

exports._meta = {
  "version": 1
};
