const prd_details = require('../../db').prd_details
const route = require('express').Router()

route.get('/', (req, res) => {
    //We want to send an array of all Categories
    //From our database here

    prd_details.findAll()
            .then((details) => {
                res.status(200).send(details)
            })
            .catch((err) => {
                res.status(500).send({
                    error: "Could not retrive product_details"
                })

            })

})

route.post('/', (req, res) =>{
    //Validate the values
    if(isNAn(req.body.prd_price)){
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }
    if(isNAn(req.body.prd_quantity)){
            return res.status(403).send({
                error: "Quantity is not valid number"
        })
    }


    prd_details.create({
        prd_name: req.body.prd_name,
        prd_price: parseFloat(req.body.prd_price),
        prd_image: req.body.prd_image,
        prd_description: req.body.prd_description,
        prd_quantity: parseInt(req.body.prd_quantity),
        prd_date: req.body.prd_date
    }).then((prd_details) =>{
        res.status(201).send(prd_details)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new product"
        })
    })

})

exports = module.exports = route