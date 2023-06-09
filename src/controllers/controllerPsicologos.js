const moment = require("moment/moment");
const Psicologos = require("../models/Psicologos");
const { format } = require('date-fns');
const { id } = require("date-fns/locale");
const bcrypt = require('bcryptjs');

const controllerPsicologos = {
    listarPsicologo: async (req, res) => {
      const psicologoId = req.params.id; 
      if (psicologoId) {
        
        try {
          const psicologo = await Psicologos.findOne({ where: { id: psicologoId } });
  
          if (psicologo) {
            res.status(200).json(psicologo); 
          } else {
            res.status(404).json({ error: 'ID não encontrado' }); 
          }
        } catch (error) {
          res.status(500).json({ error: 'Erro ao buscar o psicologo' }); 
        }
      } else {
       
        try {
          const psicologos = await Psicologos.findAll();
          res.status(200).json(psicologos);
        } catch (error) {
          res.status(500).json({ error: 'Erro ao buscar os psicologos' });
        }
      }
    },
  
         async cadastrarPsicologo(req, res){
          const { nome, email, senha, apresentacao } = req.body;
  
          const newSenha = bcrypt.hashSync(senha, 10);
  
          const newPsicologo = await Psicologos.create({ nome, email, senha: newSenha, apresentacao });
          
          return res.status(201).json(newPsicologo);
      },

    async deletarPsicologo(req, res) {
        const { id } = req.params;

        try {
            const psicologo = await Psicologos.findOne({ where: { id } });
        
            if (psicologo) {
              await Psicologos.destroy({
                where: {
                  id,
                },
              });
        
              res.json("Psicologo excluído com sucesso");
            } else {
              res.status(404).json("ID não encontrado");
            }
          } catch (error) {
            res.status(500).json("Erro ao excluir o psicologo");
          }
        },

    async atualizarPsicologo(req, res) {
       const { id } = req.params;
       const {nome, email, senha, apresentacao} = req.body;

       const psicologoAtualizado = await Psicologos.update(
        {
        nome,
        email,
        senha,
        apresentacao
       },{
        where: {
            id,
        },
       }
    );
    
       res.json("Cadastro Atualizado");
    }
};


module.exports = controllerPsicologos;