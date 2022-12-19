const express = require("express")
const accountRoutes = express.Router();
const fs = require('fs');

const dataPath = './urls.json' // path to our JSON file

const saveAccountData = (data) => {
  const stringifyData = JSON.stringify(data)
  fs.writeFileSync(dataPath, stringifyData)
}
const getAccountData = () => {
  const jsonData = fs.readFileSync(dataPath)
  return JSON.parse(jsonData)   
}
accountRoutes.post('/api/shorturl', (req, res) => {
 
    var existAccounts = getAccountData()
    const newUrlId = Object.keys(existAccounts).length
    
  if (/^https?:\/\/[\w\-]+(\.[\w\-]+)+[/#?]?.*$/.test(req.body.url)) {
    existAccounts[newUrlId] = req.body
    
     
    console.log(req.body.url);
    saveAccountData(existAccounts);
    res.send({"original_url":req.body.url,"short_url":newUrlId})
    
  }else{
    res.send({"error":"Invalid URL"})

  }
    
})

accountRoutes.get('/api/shorturl/:id', (req, res) => {
  const id=Number(req.params.id)
    const accounts = getAccountData()
    console.log(id)
    res.send(accounts[id].url)
  })

module.exports = accountRoutes