const employee = require('../../db').employee
const route = require('express').Router()

route.get('/', (req, res) => {
    //We want to send an array of all Customer
    //From our database here

    employee.findAll()
            .then((employee) => {
                res.status(200).send(employee)
            })
            .catch((err) => {
                res.status(500).send({
                    error: "Could not retrive employee"
                })

            })

})

route.post('/', (req, res) =>{
    //Validate the values
    if(isNAn(req.body.emp_contact)){
        return res.status(403).send({
            error: "Contact is not valid number"
        })
    }
    if(isNAn(req.body.emp_salary)){
            return res.status(403).send({
                error: "Salary is not valid number"
            })  
    }

    employee.create({
        emp_name: req.body.emp_name,
        emp_email: req.body.emp_email,
        emp_address: req.body.emp_address,
        emp_designation: req.body.emp_designation,
        emp_contact: parseInt(req.body.emp_contact),
        emp_salary: parseFloat(req.body.emp_salary),
        emp_doj: req.body.emp_doj
    }).then((employee) =>{
        res.status(201).send(employee)
    }).catch((err) => {
        res.status(501).send({
            error: "Could not add new customer"
        })
    })

})

exports = module.exports = route