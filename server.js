const {res, req} = require('express')
const express = require('express');
const app = express();

const estados = require ("./data/estados-cidades.json")


app.get("/", (req, res) => {
    res.status(200).send("Teste")
})

app.get("/estados", (req, res) => {
    res.status(200).send(estados)
})

app.get("/estados/sigla", (req, res) => {
    const siglareq = req.params.sigla
    console.log(siglareq)

    res.status(200).send(estados.find(estados=>estados.sigla == siglareq))
})


app.listen(3000, () => {
    console.log("Porta 3000");

})