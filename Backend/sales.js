const sales = require('../../db').sales
const route = require('express').Router()

route.get('/', (req, res) => {
    //We want to send an array of all Sales
    //From our database here

    sales.findAll()
            .then((Sale) => {
                res.status(200).send(Sale)
            })
            .catch((err) => {
                res.status(500).send({
                    error: "Could not retrive orders"
                })

            })

})

route.post('/', (req, res) =>{
    //Validate the values
    
    sales.create({
        sale_mode_payement: req.body.sale_mode_payement,
    }).then((sales) =>{
        res.status(201).send(sales)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add Sale product"
        })
    })

})

exports = module.exports = route