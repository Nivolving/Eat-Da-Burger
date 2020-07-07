const express = require("express");

const router = express.Router();

const burger = require("../models/burger");

router.get("/",(req,res) => 
{ 
    burger.all("*", (results) =>
    {
        res.render( "index", {
            burgers : results
        });

    });
});

router.post("/api/burgers",(req,res) => 
{ 
    burger.create(req.body, ( result ) => {

        res.json( {id: result.insertId} );

    });
});

router.put("/api/burgers/:id", (req, res) => {

    burger.update( req.body, req.params.id, (result) => {
        res.end();
    })

});



module.exports = router;