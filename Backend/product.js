const product = require('../../db').product
const route = require('express').Router()

route.get('/', (req, res) => {
    //We want to send an array of all Categories
    //From our database here

    product.findAll()
            .then((products) => {
                res.status(200).send(products)
            })
            .catch((err) => {
                res.status(500).send({
                    error: "Could not retrive product"
                })

            })

})

route.post('/', (req, res) =>{

    product.create({
        prd_name: req.body.prd_name,
        prd_status: req.body.prd_status,
    }).then((product) =>{
        res.status(201).send(product)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new product"
        })
    })

})

exports = module.exports = route