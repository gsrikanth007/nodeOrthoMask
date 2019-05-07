var dicmConfig = require('../shared/common-config.js');
var router = dicmConfig.router;

router.get('/patients', (req, res) => {
    dicmConfig.client.patients.getAll().then(data => {
        res.send(data);
        }, err => {
            console.log(err);
        });
});

module.exports = router;