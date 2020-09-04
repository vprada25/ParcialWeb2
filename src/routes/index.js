const { Router } = require('express');
const router = Router();


const controller = require('../controller/admin.controller');


router.get('/', (req, res) => {
    res.render('../views/index.hbs')
})
router.get('/admin', (req, res) => {
    res.render('../views/layouts/admin/admin.hbs')
})


router.get('/getDate', controller.getDate)

router.post('/save', controller.save);




module.exports = router;