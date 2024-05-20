
async function fetchStudents(pool) {
  const sql = "select * from student";
  const result = await pool.query(sql);
  return result.rows;
}

const repository = {
  fetchStudents,
};

module.exports = repository;
