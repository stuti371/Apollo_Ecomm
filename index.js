const route = require('express').Router()

route.use('/Customer', require('./Customer'))
route.use('/employee', require('./employee'))
route.use('/Category', require('./Category'))
route.use('/nav', require('./nav'))
route.use('/product', require('./product'))
route.use('/prd_details', require('./prd_details'))
route.use('/purchases', require('./purchases'))
route.use('/purchase_return', require('./purchase_return'))
route.use('/orders', require('./orders'))
route.use('/ord_details', require('./ord_details'))
route.use('/sales', require('./sales'))
route.use('/sale_return', require('./sale_return'))

exports = module.exports = {
    route 
}