const pool = require("./database");
const queries = require("./queries");

const getUsers = (req, res) => {
  pool.query(queries.getUsers, (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const addUser = (req, res) => {
  const { username, password, email } = req.body;

  //check if email exists
  pool.query(queries.checkEmailExists, [email], (error, results) => {
    if (results.rows.length) {
      res.send("Email already exists!");
    } else {
      //add user to databse
      pool.query(
        queries.addUser,
        [username, password, email],
        (error, results) => {
          if (error) throw error;
          res.status(201).send("Account created successfully!");
        }
      );
    }
  });
};

const getUserById = (req, res) => {
  const id = parseInt(req.params.id);
  pool.query(queries.getUserById, [id], (error, results) => {
    if (error) throw error;
    res.status(200).json(results.rows);
  });
};

const deleteUser = (req, res) => {
  const id = parseInt(req.params.id);

  pool.query(queries.getUserById, [id], (error, results) => {
    const noUserFound = !results.rows.length;
    if (noUserFound) {
      res.send("User does not exist in the database.");
    } else {
      pool.query(queries.deleteUser, [id], (error, results) => {
        if (error) throw error;
        res.status(200).send("User removed successfully!");
      });
    }
  });
};

module.exports = {
  getUsers,
  getUserById,
  addUser,
  deleteUser,
};
