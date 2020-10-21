const Customer = require('../../db').Customer
const route = require('express').Router()

route.get('/', (req, res) => {
    //We want to send an array of all Customer
    //From our database here

    Customer.findAll()
            .then((customers) => {
                res.status(200).send(customers)
            })
            .catch((err) => {
                res.status(500).send({
                    error: "Could not retrive customers"
                })

            })

})

route.post('/', (req, res) =>{
    //Validate the values
    if(isNAn(req.body.cust_contact)){
        return res.status(403).send({
            error: "Contact is not valid number"
        })
    }

    Customer.create({
        cust_name: req.body.cust_name,
        cust_email: req.body.cust_email,
        cust_password: req.body.cust_password,
        cust_address: req.body.cust_address,
        cust_contact: parseInt(req.body.cust_contact)
    }).then((customer) =>{
        res.status(201).send(customer)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new customer"
        })
    })

})

exports = module.exports = route