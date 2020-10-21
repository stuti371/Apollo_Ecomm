const sales_return = require('../../db').sales_return
const route = require('express').Router()

route.get('/', (req, res) => {
    //We want to send an array of all Categories
    //From our database here

    sales_return.findAll()
            .then((sale) => {
                res.status(200).send(sale)
            })
            .catch((err) => {
                res.status(500).send({
                    error: "Could not retrive return sale"
                })

            })

})

route.post('/', (req, res) =>{
    //Validate the values
    if(isNAn(req.body.sale_return_quantity)){
        return res.status(403).send({
            error: "Quantity is not valid number"
        })
    }
    sales_return.create({
        sale_return_quantity: parseInt(req.body.sale_return_quantity),
        sale_return_date: req.body.sale_return_date,
        sale_cause_return: req.body.sale_cause_return
    }).then((sales_return) =>{
        res.status(201).send(sales_return)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new sales_return"
        })
    })

})

exports = module.exports = route