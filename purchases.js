const purchases = require('../../db').purchases
const route = require('express').Router()

route.get('/', (req, res) => {
    //We want to send an array of all Categories
    //From our database here

    purchases.findAll()
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
    if(isNAn(req.body.purchase_quantity)){
        return res.status(403).send({
            error: "Quantitiy is not valid number"
        })
    }
    if(isNAn(req.body.purchase_cost_price)){
            return res.status(403).send({
                error: "Quantity is not valid number"
        })
    }
    if(isNAn(req.body.purchase_sale_price)){
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }
    if(isNAn(req.body.purchase_advance)){
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }
    if(isNAn(req.body.purchase_total)){
        return res.status(403).send({
            error: "Quantity is not valid number"
        })
    }
    if(isNAn(req.body.purchase_balance)){
        return res.status(403).send({
            error: "Price is not valid number"
        })
    }


    prurchases.create({
        purchase_quantity: parseInt(req.body.purchase_quantity),
        purchase_cost_price: parseFloat(req.body.purchase_cost_price),
        purchase_sale_price: parseFloat(req.body.prd_image),
        purchase_date: req.body.purchase_date,
        purchase_advance: parseInt(req.body.purchase_advance),
        purchase_total: parseInt(req.body.purchase_total),
        purchase_balance: parseFloat(req.body.purchase_balance)
    }).then((prd_details) =>{
        res.status(201).send(prd_details)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new product"
        })
    })

})

exports = module.exports = route