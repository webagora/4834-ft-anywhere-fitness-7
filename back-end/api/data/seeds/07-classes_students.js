
exports.seed = function(knex, Promise) {
  return knex('classes_students').insert([   
    { student_id: 3, class_id: 1},
    { student_id: 4, class_id: 2},
    { student_id: 2, class_id: 3},
    { student_id: 1, class_id: 4},
    { student_id: 4, class_id: 1},
    { student_id: 3, class_id: 3},
  ]);
};
