// AUTHOR : CORY CLEMENS
// DATE : 05/30/2020
// DESCRIPTION : This module is intended to define the API for getting 
//               data from the scraped data CSV's for ( SOLD-SUPREME-TOPS ) 

module.exports = function (app, db) {

    // POST TO SOLD TOPS
    app.post('/sold-tops', (req, res) => {

        // Create a JSON object repping the top to pass to DB
        const top = { design: req.body.design, title: req.body.title, cat: req.body.cat, size: req.body.size, price: req.body.price, date: req.body.date }

        // Create instance of the database, then drill into collection, and insert JSON record
        db.collection('sold_tops').insertOne(top, (err, result) => {
            if (err) {

                //Send JSON error back
                res.send({ 'error': 'An error has occurred' });
            }
            else {

                // Send the object back to client
                res.send((result.ops[0]));
                console.log("Top JSON record inserted\n");
            }
        });
    });

    // POST TO REMOVE COLLECTION COLLECTION
    app.post('/sold-tops/clear', (req, res) => {

        // Create instance of the database, then drill into collection, and drop the whole collection
        db.collection('sold_tops').drop((err, result) => {
            if (err) {

                //Send JSON error back
                res.send({ 'error': 'An error has occurred' });
            }
            else {
                // Send the object back to client
                res.send({
                    'response': 'Collection Deleted',
                    'collection': 'sold_tops'
                });
                console.log("Collection deleted....\n");
            }
        });
    });

    // GET TO REQUEST ALL SOLD TOPS DATA
    app.get('/sold-tops', (req, res) => {

        db.collection('sold_tops').find({}).toArray((err, items) => {
            if (err) {
                res.send({ 'Error': 'Error GET /sold-tops' });
            }
            else {
                res.send(items);
            }
        });
    });
};