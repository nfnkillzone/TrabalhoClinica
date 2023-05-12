const express = require('express')
const controllerPacientes = require('../controllers/controllerPacientes')
const controllerPsicologos = require('../controllers/controllerPsicologos')
const routes = express.Router()

routes.get("/paciente/lista", controllerPacientes.listarPaciente)
routes.get("/paciente/:id/lista", controllerPacientes.listarPaciente);
routes.post("/paciente/criar", controllerPacientes.cadastrarPaciente);
routes.delete("/paciente/:id/deletar", controllerPacientes.deletarPaciente);
routes.put("/paciente/:id/atualizar", controllerPacientes.atualizarPaciente);

routes.get("/psicologo/lista", controllerPsicologos.listarPsicologo)
routes.get("/psicologo/:id/lista", controllerPsicologos.listarPsicologo);
routes.post("/psicologo/criar", controllerPsicologos.cadastrarPsicologo);
routes.delete("/psicologo/:id/deletar", controllerPsicologos.deletarPsicologo);
routes.put("/psicologo/:id/atualizar", controllerPsicologos.atualizarPsicologo);

module.exports = routes;