'use strict';

exports.seed = function(knex, Promise) {
  // Deletes ALL existing entries
  return knex('TableOne').del()
    .then(function () {
      // Inserts seed entries
      return Promise.all([
        knex('TableOne')
          .insert({
            id: 1,
            ColumnOne: 'row1Value1',
            ColumnTwo: 'row1Value2'
          }),
        knex('TableOne')
          .insert({
            id: 2,
            ColumnOne: 'row2Value1',
            ColumnTwo: 'row2Value2'
          })
      ]);
    });
};
