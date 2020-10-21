const ord_details = require('../../db').ord_details
const route = require('express').Router()

route.get('/', (req, res) => {
    //We want to send an array of all Categories
    //From our database here

    ord_details.findAll()
            .then((order) => {
                res.status(200).send(ordrer)
            })
            .catch((err) => {
                res.status(500).send({
                    error: "Could not retrive orders"
                })

            })

})

route.post('/', (req, res) =>{
    //Validate the values
    if(isNAn(req.body.ord_quantity)){
        return res.status(403).send({
            error: "Quantity is not valid number"
        })
    }
    if(isNAn(req.body.ord_price)){
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }
    ord_details.create({
        ord_quantity: parseInt(req.body.ord_quantity),
        ord_price: parseFloat(req.body.ord_price),
    }).then((purchase_return) =>{
        res.status(201).send(purchase_return)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new ord_details"
        })
    })

})

exports = module.exports = route