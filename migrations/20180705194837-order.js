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

  db.createTable('order', {
    orderId: {
      type: 'int',
      primaryKey: true,
      autoIncrement: true
    },

    shelterId: {
      type: 'int',
      unsigned: true,
      length: 50,
      notNull: true,
      foreignKey: {
        name: 'shelterId_fk2',
        table: 'shelter',
        rules: {
          onDelete: 'CASCADE',
          onUpdate: 'RESTRICT'
        },
        mapping: 'shelterId'
      },

      userId: {
        type: 'int',
        unsigned: true,
        length: 50,
        notNull: true,
        foreignKey: {
          name: 'userId_fk2',
          table: 'user',
          rules: {
            onDelete: 'CASCADE',
            onUpdate: 'RESTRICT'
          },
          mapping: 'userId'
        },

        amazonWishlistId: {
          type: 'int',
          unsigned: true,
          length: 50,
          notNull: true,
          foreignKey: {
            name: 'amazonId_fk',
            table: 'shelter',
            rules: {
              onDelete: 'CASCADE',
              onUpdate: 'RESTRICT'
            },
            mapping: 'amazonWishlistId'
          },

          date: {
            type: 'int'
          }
        }
      }


    }



  }, callback);

};

exports.down = function (db, callback) {

  db.dropTable('order', function (err) {
    if (err) return callback(err);

    return callback();
  });

};

exports._meta = {
  "version": 1
};
