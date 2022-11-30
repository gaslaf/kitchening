const express = require('express');
const router = express.Router();
const {search,detail,add,store,edit,update,destroy} = require('../controllers/productsController');

const imageProducts = require('../middlewares/productImage')
const validationProducts = require('../validations/productsAdd')

router.get('/list',search);
router.get('/detail/:id',detail)

router.get('/add',add);
router.post('/add',imageProducts.single('imagen'),validationProducts,store);


router.get('/edit/:id',edit);
router.put('/edit/:id',update);

router.delete('/delete/:id',destroy);

module.exports = router