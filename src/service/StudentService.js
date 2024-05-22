import pkg from "pg";
import { postgresConfig } from "../../utils/DatabaseUtil.js";
import * as studentRepo from "../repository/StudentRepository.js";

async function getStudents(req, res) {
  const { Pool } = pkg;
  const pool = new Pool(postgresConfig);
  const students = await studentRepo.fetchStudents(pool);
  res.send(students);
  await pool.end();
}
export { getStudents };
