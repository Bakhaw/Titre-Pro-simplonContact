const express = require('express');
const Contact = require('../model/Contact');

const router = express.Router();

// #POST method
router.post('/add', (req, res) => {
  const newContact = new Contact(req.body);

  newContact.save((err, contact) => {
    if (err) res.send(err)
    res.json({message: `${contact.nom} à bien été crée`})
  })
})

// #GET method
router.get('/', (req, res) => {
  Contact.find((err, contacts) => {
    if (err) res.send(err)
    res.json(contacts)
  })
})

// #Get byId method
router.get('/:id', (req, res) => {
  Contact.findById(req.params.id, (err, contact) => {
    if (err) res.send(err)
    res.json(contact)
  })
})

// #PUT method
router.post('/:id/update', (req, res) => {
  Contact.findByIdAndUpdate(req.params.id, req.body, (err, contact) => {
    if (err) res.send(err)
    res.json({message: 'le contact à bien été modifié'})
  })
})

// #DELETE method
router.get('/:id/delete', (req, res) => {
  Contact.findByIdAndRemove(req.params.id, (err, contact) => {
    if (err) res.send(err)
    res.json({message: 'le contact à bien été supprimé'})
  })
})

module.exports = router;
