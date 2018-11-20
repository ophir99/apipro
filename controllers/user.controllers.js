const user = require("./../models/user.model");
const axios = require("axios");
const chalk = require("chalk");
exports.linkedin = (req, res) => {
  console.log(chalk.red("Calling..."));
  console.log(req.body.code);
  try {
    axios
      .post(
        "https://www.linkedin.com/oauth/v2/accessToken?grant_type=authorization_code&code=" +
          req.body.code +
          "&redirect_uri=http://uiproductionenv.s3-website.us-east-2.amazonaws.com&client_id=81d483npdmnqhy&client_secret=bJDR1thqQ5OxNtHV"
        // "&redirect_uri=http://localhost:4200&client_id=81d483npdmnqhy&client_secret=bJDR1thqQ5OxNtHV"
      )
      .then(function(data) {
        console.log("data==", data.data);
        return axios.get(
          "https://api.linkedin.com/v1/people/~:(id,firstName,lastName,headline,site-standard-profile-request,email-address)?format=json",
          {
            headers: {
              Authorization: "Bearer " + data.data.access_token
            }
          }
        );
      })
      .then(function(data) {
        console.log("success", data);
        res.send({ data: data.data });
      })
      .catch(function(err) {
        throw err;
      });
  } catch (err) {
    console.log(chalk.red("Error", err));
    res.send({ error: err });
  }
};

exports.create = async (req, res) => {
  console.log(chalk.green("", req.body));
  const User = new user({
    email: req.body.email,
    password: req.body.password
  });
  try {
    await User.save()
      .then(data => {
        console.log(data);
        res.send({ response: data });
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  } catch (err) {
    res.send({ error: err });
  }
};

exports.login = async (req, res) => {
  try {
    await user
      .find({ email: req.body.email, password: req.body.password })
      .then(data => {
        console.log(data);
        if (data.length > 0) {
          res.send({ response: data });
        } else {
          throw new Error("Invalid user. Try Again");
        }
      })
      .catch(err => {
        console.log(err);
        throw err;
      });
  } catch (err) {
    console.log(err);
    res.send({ error: err });
  }
};
