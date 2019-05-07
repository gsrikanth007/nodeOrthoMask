var dicmConfig = require('../shared/common-config.js');
var router = dicmConfig.router;

router.get('/instance', (req, res) => {
    dicmConfig.client.instances.getAll().then(data => {
        res.send(data);
        }, err => {
            console.log(err);
        });
});

module.exports = router;