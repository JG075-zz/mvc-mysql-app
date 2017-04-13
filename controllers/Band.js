var models = require('../models/index');
var Band = require('../models/band');

// Create Users
exports.create = function(req, res) {
  // create an instance of the Bands model with request body
  models.Band.create(req.body).then(function(band) {
    //res.json(band)
    res.redirect('/bands');
  });
};

// List Bands
exports.list = function(req, res) {
  // List all bands and sort by Date
  models.Band.findAll({
    // Order: latest created
    order: 'createdAt DESC'
  }).then(function(bands) {
    // res.json(bands)
    // Render result
    res.render('list', {
      title: 'List bands',
      bands: bands
    });
  });
};

// Get by band id
exports.byId = function(req, res) {
  models.Band.find({
    where: {
      id: req.params.id
    }
  }).then(function(band) {
    res.json(band);
  });
};

// Update by id
exports.update = function(req, res) {
  models.Band.find({
    where: {
      id: req.params.id
    }
  }).then(function(band) {
    if(band) {
      band.updateAttributes({
        name: req.body.name,
        description: req.body.description,
        album: req.body.album,
        year: req.body.year,
        UserId: req.body.user_id
      }).then(function(band) {
        res.send(band);
      });
    }
  });
};

// Delete by id
exports.delete = function(req, res) {
  models.Band.destroy({
    where : {
      id: req.params.id
    }
  }).then(function(band) {
    res.json(band);
  });
};
