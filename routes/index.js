// AUTHOR : CORY CLEMENS
// DATE : 05/30/2020
// DESCRIPTION : This module is intended to collect and export all API 
//               modules created in ./app/routes directory. One easy exoprt.

// All of the imports for the created API's
const shirt_Routes = require('./top_routes');
const sales_Routes = require('./sales_routes');

module.exports = function (app, db) {

    // Export all API's from this single module... SICK!
    shirt_Routes(app, db)
    sales_Routes(app, db)
}