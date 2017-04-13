// Index controller
exports.show = function(req, res) {
// Show index content
  res.render('index', {
    title: 'Express'
  });
};
