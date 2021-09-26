const mongoose = require('mongoose');

const eventSchema = new mongoose.Schema({
  title: { type: String, required: true },
  description: { type: String, required: true },
  location: { type: String, required: true },
  date: { type: Date, required: true },
  price: { type: Number, required: true, default: 0 },
  category: { type: String, required: true },
  organizer: {
    type: mongoose.Schema.Types.ObjectId,
    ref: 'User',
    required: true
  },
  capacity: { type: Number, required: true },
  ticketsSold: { type: Number, default: 0 },
  image: { type: String }
}, { timestamps: true });

module.exports = mongoose.model('Event', eventSchema);
