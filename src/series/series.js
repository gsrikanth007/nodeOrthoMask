var dicmConfig = require('../shared/common-config.js');
var router = dicmConfig.router;

router.get('/serieses', (req, res) => {
    dicmConfig.client.series.getAll().then(data => {
        res.send(data);
        }, err => {
            console.log(err);
        });
});

module.exports = router;