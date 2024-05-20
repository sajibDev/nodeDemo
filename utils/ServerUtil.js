const studentController = require("../src/controller/StudentController");

const port = 8080;

const getRequest = {
  "/": (req, res) => res.send("Welcome to my serverrrrr!"),

  "/students": studentController
};

function initializeServer(app) {
  for ([key, value] of Object.entries(getRequest)) app.get(key, value);

  app.listen(port, () => {
    console.log(`Server is running on port ${port}`);
  });
}

module.exports = initializeServer;
