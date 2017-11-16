const mongoose = require('mongoose');

const ContactSchema = new mongoose.Schema({
  nom:        {type: String, required: true},
  prenom:     {type: String, required: true},
  titre:      {type: String, required: false},
  entreprise: {type: String, required: false},
  email:      {type: String, required: true},
  adresse:    {type: String, required: true},
  telephone:  {
    mobile:   {type: Number, required: false},
    work:     {type: Number, required: false},
  },
})

module.exports = mongoose.model('Contact', ContactSchema, 'contacts');
