'use strict';

module.exports = {
  up: async (queryInterface, Sequelize) => {
    await queryInterface.bulkInsert(
      'Admins', 
      [{
         name: 'Admin',
         email : 'admin@gmail.com',
         password : '$2b$11$Mc4UCydh3pQBuxVREOp60.1jca9J7grZuvrbGUsoZo/393tzWPTMm', //adminadmin
         isAdmin : true,
         createdAt : new Date(),
         updatedAt : new Date()
       },
       {
         name: 'Admin2',
         email : 'user@gmail.com',
         password : '$2b$11$m9rT4L5ZN/B8sLKa.VR5AuhMgmStN8yqqwF9guXMTZ1PuCyD/eHZq', //usertamu
         isAdmin : false,
         createdAt : new Date(),
         updatedAt : new Date()
       },
     
     ], 
     {})
  },

  down: async (queryInterface, Sequelize) => {
    /**
     * Add commands to revert seed here.
     *
     * Example:
     * await queryInterface.bulkDelete('People', null, {});
     */
  }
};
