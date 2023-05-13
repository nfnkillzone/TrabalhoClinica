const db = require("../database")
const { DataTypes } = require('sequelize')

const Atendimentos = db.define(
    "Atendimentos",
    {
       paciente_id:{
        type: DataTypes.INTEGER,
       },
       data_atendimento:{
        type: DataTypes.DATE,
       },
       observacao:{
        type: DataTypes.STRING,
       },
       createdAt: {
        type: DataTypes.DATE,
     },
       updatedAt: {
        type: DataTypes.DATE,
     },
    },
    {
        tableName: "atendimentos"
    } 
    );

    module.exports = Atendimentos;