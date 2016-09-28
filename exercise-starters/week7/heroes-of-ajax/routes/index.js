var heroCtrl = require('./heroes.js');

module.exports = (app) => {

    // home route
    app.get('/', (req, res) =>{
        res.send("Heroes of AJAX");
    });

    // get all heroes
    app.get('/api/heroes', heroCtrl.get);
    app.post('/api/heroes', heroCtrl.upsert);
}