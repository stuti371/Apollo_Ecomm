const Category = require('../../db').Category
const route = require('express').Router()

route.get('/', (req, res) => {
    //We want to send an array of all Categories
    //From our database here

    Category.findAll()
            .then((category) => {
                res.status(200).send(category)
            })
            .catch((err) => {
                res.status(500).send({
                    error: "Could not retrive category"
                })

            })

})

route.post('/', (req, res) =>{

    Category.create({
        cat_name: req.body.cat_name,
        cat_image: req.body.cat_image,
        cat_description: req.body.cat_description,
    }).then((category) =>{
        res.status(201).send(category)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new category"
        })
    })

})

exports = module.exports = route