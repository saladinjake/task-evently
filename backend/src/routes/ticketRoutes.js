const express = require('express');
const router = express.Router();
const { registerTicket, getUserTickets } = require('../controllers/ticketController');

router.route('/').post(registerTicket);
router.route('/user/:user_id').get(getUserTickets);

module.exports = router;
