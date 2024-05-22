async function fetchStudents(pool) {

  const sql = "select id,email from student";
  const result = await pool.query(sql);
  return result.rows;
  
}

export {fetchStudents}
