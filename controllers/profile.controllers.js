const user = require("./../models/user.model");

exports.updateProfile = async (req, res) => {
  console.log(req.body);
  try {
    await user
      .update({ email: req.body.user }, { $set: { profile: req.body.profile } })
      .then(data => {
        res.send({ response: data });
      })
      .catch(err => {
        throw err;
      });
  } catch (err) {
    res.send({ error: err });
  }
};
