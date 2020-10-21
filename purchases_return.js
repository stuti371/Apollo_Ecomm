const purchase_return = require('../../db').purchase_return
const route = require('express').Router()

route.get('/', (req, res) => {
    //We want to send an array of all Categories
    //From our database here

    purchase_return.findAll()
            .then((purchase) => {
                res.status(200).send(purchase)
            })
            .catch((err) => {
                res.status(500).send({
                    error: "Could not retrive purchase_return"
                })

            })

})

route.post('/', (req, res) =>{
    //Validate the values
    if(isNAn(req.body.purchase_quantity)){
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }
    purchase_return.create({
        purchase_quantity: parseInt(req.body.purchase_quantity),
        purchase_date: req.body.purchase_date,
        purchase_description: req.body.purchase_description,
    }).then((purchase_return) =>{
        res.status(201).send(purchase_return)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new purchase_return"
        })
    })

})

exports = module.exports = route