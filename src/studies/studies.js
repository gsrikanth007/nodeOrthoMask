var dicmConfig = require('../shared/common-config.js');
var router = dicmConfig.router;

router.get('/studies', (req, res) => {
    dicmConfig.client.studies.getAll().then(data => {
        res.send(data);
        }, err => {
            console.log(err);
        });
});

module.exports = router;