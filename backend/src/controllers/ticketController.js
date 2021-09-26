const Ticket = require('../models/Ticket');
const Event = require('../models/Event');

// @desc  Register for an event
// @route POST /api/tickets
const registerTicket = async (req, res) => {
  try {
    const { event, user } = req.body;
    
    const eventObj = await Event.findById(event);
    if (!eventObj) return res.status(404).json({ message: 'Event not found' });
    
    if (eventObj.ticketsSold >= eventObj.capacity) {
      return res.status(400).json({ message: 'Event is sold out' });
    }
    
    const ticket = new Ticket({ event, user });
    const createdTicket = await ticket.save();
    
    // Update tickets sold count
    eventObj.ticketsSold += 1;
    await eventObj.save();
    
    res.status(201).json(createdTicket);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

// @desc  Get user tickets
// @route GET /api/tickets/user/:user_id
const getUserTickets = async (req, res) => {
  try {
    const tickets = await Ticket.find({ user: req.params.user_id }).populate('event');
    res.json(tickets);
  } catch (error) {
    res.status(500).json({ message: 'Server Error' });
  }
};

module.exports = { registerTicket, getUserTickets };
