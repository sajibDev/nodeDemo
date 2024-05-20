const service = require("../service/StudentService");

async function studentController(req, res) {
    
    await service.getStudents(req, res);
  
}

module.exports = studentController;
