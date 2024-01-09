const getUsers = "SELECT * from accounts";
const getUserById = "SELECT * FROM accounts WHERE user_id = $1";
const checkEmailExists = "SELECT s FROM accounts s WHERE s.email = $1";
const addUser =
  "INSERT INTO accounts (username, password, email) VALUES ($1, $2, $3)";
const deleteUser = "DELETE FROM accounts WHERE user_id = $1";

module.exports = {
  getUsers,
  getUserById,
  checkEmailExists,
  addUser,
  deleteUser,
};
