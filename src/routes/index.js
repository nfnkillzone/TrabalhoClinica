const express = require('express')
const controllerPacientes = require('../controllers/controllerPacientes');
const controllerPsicologos = require('../controllers/controllerPsicologos');
const controllerAtendimentos = require('../controllers/controllerAtendimentos');
const authController = require('../controllers/authController');
const auth = require('../middlewares/auth');
const createValidation = require('../validations/cadastroPsicologo/create');
const loginValidation = require('../validations/loginPsicologo/login')
const routes = express.Router()


routes.get("/atendimento", controllerAtendimentos.listarAtendimento);
routes.get("/atendimento/:id", controllerAtendimentos.listarAtendimento);
routes.post("/atendimento",auth,controllerAtendimentos.cadastrarAtendimento);

routes.get("/paciente", controllerPacientes.listarPaciente);
routes.get("/paciente/:id", controllerPacientes.listarPaciente);
routes.post("/paciente", controllerPacientes.cadastrarPaciente);
routes.delete("/paciente/:id", controllerPacientes.deletarPaciente);
routes.put("/paciente/:id", controllerPacientes.atualizarPaciente);

routes.get("/psicologo", controllerPsicologos.listarPsicologo);
routes.get("/psicologo/:id", controllerPsicologos.listarPsicologo);
routes.post("/psicologo", createValidation, controllerPsicologos.cadastrarPsicologo);
routes.post('/login',loginValidation,authController.login);
routes.delete("/psicologo/:id", controllerPsicologos.deletarPsicologo);
routes.put("/psicologo/:id", controllerPsicologos.atualizarPsicologo);

module.exports = routes;