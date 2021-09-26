const Event = require('../models/Event');

// @desc  Get all events
// @route GET /api/events
const getEvents = async (req, res) => {
  try {
    const events = await Event.find({}).populate('organizer', ['name']);
    res.json(events);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc  Create an event
// @route POST /api/events
const createEvent = async (req, res) => {
  try {
    const { title, description, location, date, price, category, organizer, capacity } = req.body;
    const event = new Event({ title, description, location, date, price, category, organizer, capacity });
    const createdEvent = await event.save();
    res.status(201).json(createdEvent);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc  Get event by ID
// @route GET /api/events/:id
const getEventById = async (req, res) => {
  try {
    const event = await Event.findById(req.params.id).populate('organizer', ['name']);
    if (!event) return res.status(404).json({ message: 'Event not found' });
    res.json(event);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { getEvents, createEvent, getEventById };
