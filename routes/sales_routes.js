// AUTHOR : CORY CLEMENS
// DATE : 06/02/2020
// DESCRIPTION : This module is intended to define the API for getting 
//               data from the DB regarding MY SOLD ITEMS on grailed.com

module.exports = function (app, db) {

    app.get('/sold-data', (req, res) => {

        db.collection('sales').find({}).toArray((err, items) => {
            if (err) {
                res.send({ 'error': 'An error has occurred' })
            }
            else {
                console.log(items);
                console.log("SERVER HIT AT API /sold-data");
                res.send(items);
            }
        })
    })

    app.post('/sold-data', (req, res) => {
        // Create a JSON object repping the sale to pass to DB
        const sale =
        {
            id: req.body.id,
            desc: req.body.desc,
            grailed: req.body.grailed,
            paypal: req.body.paypal,
            shipping: req.body.shipping,
            shipdate: req.body.shipdate,
            tracking: req.body.tracking
        }

        // Create instance of the database, then drill into collection, and insert JSON record
        db.collection('sales').insertOne(sale, (err, result) => {
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
    })

    app.post('/sold-data/delete', (req, res) => {

        //See if ID is in DB
        // db.collection('sales').find({ "id": req.body.id });
        console.log(req)

        // if (!hasID) {
        //     return res.status(404).json({
        //         error: 'Transaction Not Found'
        //     })
        // }

        // Create instance of the database, then drill into collection, and delete JSON record
        db.collection('sales').deleteOne({ "id": parseInt(req.body.id) }, (err, result) => {
            if (err) {
                //Send JSON error back
                res.status(404).send({ 'error': 'An error has occurred' });
            }
            else {
                // Send the object back to client
                res.status(200).send({ result: result });
                console.log("Record deleted\n");
            }
        });
    })
}
