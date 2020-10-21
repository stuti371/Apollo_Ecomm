const orders = require('../../db').orders
const route = require('express').Router()

route.get('/', (req, res) => {
    //We want to send an array of all Categories
    //From our database here

    orders.findAll()
            .then((Order) => {
                res.status(200).send(Ordrer)
            })
            .catch((err) => {
                res.status(500).send({
                    error: "Could not retrive orders"
                })

            })

})

route.post('/', (req, res) =>{
    //Validate the values
    
    orders.create({
        ord_date: req.body.ord_date,
        ord_status: req.body.ord_status
    }).then((ordrers) =>{
        res.status(201).send(orders)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new orders"
        })
    })

})

exports = module.exports = route