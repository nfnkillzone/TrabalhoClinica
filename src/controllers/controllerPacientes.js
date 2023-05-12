const moment = require("moment/moment");
const Pacientes = require("../models/Pacientes");
const { format } = require('date-fns');
const { id } = require("date-fns/locale");

const controllerPacientes = {
    listarPaciente: async (req, res) => {
      const pacienteId = req.params.id; 
      if (pacienteId) {
        
        try {
          const paciente = await Pacientes.findOne({ where: { id: pacienteId } });
  
          if (paciente) {
            res.json(paciente); 
          } else {
            res.status(404).json({ error: 'Paciente não encontrado' }); 
          }
        } catch (error) {
          res.status(500).json({ error: 'Erro ao buscar o paciente' }); 
        }
      } else {
       
        try {
          const pacientes = await Pacientes.findAll();
          res.json(pacientes);
        } catch (error) {
          res.status(500).json({ error: 'Erro ao buscar os pacientes' });
        }
      }
    },
  

    async cadastrarPaciente(req, res) {
        const { nome, email, idade } = req.body;

        const [dia, mes, ano] = idade.split("/");
        const dataNascimento = new Date(`${ano}-${mes}-${dia}`);
    
        const novoPaciente = await Pacientes.create({
            nome,
            email,
            idade: dataNascimento,
        });
        const formattedIdade = format(dataNascimento, 'dd/MM/yyyy');
        novoPaciente.idade = formattedIdade;
        
        res.json(novoPaciente)
    },

    async deletarPaciente(req, res) {
        const { id } = req.params;

        try {
            const paciente = await Pacientes.findOne({ where: { id } });
        
            if (paciente) {
              await Pacientes.destroy({
                where: {
                  id,
                },
              });
        
              res.json("Paciente excluído com sucesso");
            } else {
              res.status(404).json("ID não encontrado");
            }
          } catch (error) {
            res.status(500).json("Erro ao excluir o paciente");
          }
        },

    async atualizarPaciente(req, res) {
       const { id } = req.params;
       const {nome, email, idade} = req.body;

       const pacienteAtualizado = await Pacientes.update(
        {
        nome,
        email,
        idade
       },{
        where: {
            id,
        },
       }
    );
    
       res.json("Cadastro Atualizado");
    }
};


module.exports = controllerPacientes;