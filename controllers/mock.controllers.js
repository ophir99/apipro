const mock = require("./../models/mock.model");

exports.createTweet = async (req, res) => {
  const tweet = new mock({
    title: req.body.title,
    text: req.body.text,
    date: new Date()
  });
  try {
    await tweet
      .save()
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

exports.deleteTweet = async (req, res) => {
  mock
    .deleteOne({ _id: req.params.id })
    .then(data => {
      res.send({ response: data });
    })
    .catch(error => {
      res.send({ error: error });
    });
};

exports.updateTweet = async (req, res) => {
  console.log(req.params.id);
  mock
    .update(
      { _id: req.params.id },
      { $set: { title: req.body.title, text: req.body.text } }
    )
    .then(data => {
      res.send({ response: data });
    })
    .catch(error => {
      res.send({ error: error });
    });
};

exports.getTweets = async (req, res) => {
  mock
    .find()
    .then(data => {
      res.send({ response: data });
    })
    .catch(error => {
      res.send({ error: error });
    });
};

exports.getTweet = async (req, res) => {
  mock
    .find({ _id: req.query.id })
    .then(data => {
      res.send({ response: data });
    })
    .catch(error => {
      res.send({ error: error });
    });
};
