const { Pool } = require("pg");
const { postgresConfig } = require("../../utils/DatabaseUtil");
const repository = require("../repository/StudentRepository");

async function getStudents(req, res) {
  const pool = new Pool(postgresConfig);
  const students = await repository.fetchStudents(pool);
  res.send(students);
  await pool.end();
}

const service = {
  getStudents,
};

module.exports = service;
