const express = require('express')
const routes = express.Router()

routes.get('/', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM bsale_test.product', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)
        })
    })
})

routes.get('/category', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM bsale_test.category', (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)


        })


    })
})

routes.get('/category/:id', (req, res) => {
    req.getConnection((err, conn) => {
        if (err) return res.send(err)

        conn.query('SELECT * FROM bsale_test.product WHERE category= ?', [req.params.id], (err, rows) => {
            if (err) return res.send(err)

            res.json(rows)

        })
    })
})




module.exports = routes

