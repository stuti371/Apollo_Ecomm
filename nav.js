const nav = require('../../db').nav
const route = require('express').Router()

route.get('/', (req, res) => {
    //We want to send an array of all Categories
    //From our database here

    nav.findAll()
            .then((Nav) => {
                res.status(200).send(Nav)
            })
            .catch((err) => {
                res.status(500).send({
                    error: "Could not retrive nav"
                })

            })

})

route.post('/', (req, res) =>{

    nav.create({
        nav_title: req.body.nav_title,
        nav_status: req.body.nav_status,
        nav_link: req.body.nav_link,
        nav_description: req.body.description
    }).then((nav) =>{
        res.status(201).send(nav)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new nav"
        })
    })

})

exports = module.exports = route