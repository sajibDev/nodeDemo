import * as service from "../service/StudentService.js";

async function studentController(req, res) {

    await service.getStudents(req, res);
  
}

export default studentController;
