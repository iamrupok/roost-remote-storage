var User = require('../models/user');
var hat = require('hat');

// Create endpoint /api/users for POST
exports.postUsers = function(req, res) {
  var user = new User({
    username: req.body.username,
    password: req.body.password,
    apiKey: hat()
  });

  user.save(function(err) {
    if (err)
      res.send(err);

    res.json(user);
  });
};

exports.deleteUser = function(req, res) {
  // Use the Device model to find a specific device and remove it
  Device.findByIdAndRemove(req.params.user_id, function(err) {
    if (err)
      res.send(err);

    res.json({ message: 'User deleted!' });
  });
};