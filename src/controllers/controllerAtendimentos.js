const moment = require("moment/moment");
const Atendimentos = require("../models/Atendimentos");
const { format } = require('date-fns');
const { id } = require("date-fns/locale");

const controllerAtendimentos = {
    listarAtendimento: async (req, res) => {
      const atendimentoId = req.params.id; 
      if (atendimentoId) {
        
        try {
          const atendimento = await Atendimentos.findOne({ where: { id: atendimentoId } });
  
          if (atendimento) {
            res.json(atendimento); 
          } else {
            res.status(404).json({ error: 'Atendimento não encontrado' }); 
          }
        } catch (error) {
          res.status(500).json({ error: 'Erro ao buscar atendimento' }); 
        }
      } else {
       
        try {
          const atendimentos = await Atendimentos.findAll();
          res.json(atendimentos);
        } catch (error) {
          res.status(500).json({ error: 'Erro ao buscar atendimento' });
        }
      }
    },
  

    async cadastrarAtendimento(req, res) {
        const { paciente_id, data_atendimento, observacao, } = req.body;

        const novoAtendimento = await Atendimentos.create({
            paciente_id,
            data_atendimento,
            observacao
        });
    
        res.json(novoAtendimento)
    }
};


    module.exports = controllerAtendimentos;