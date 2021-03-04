import Dexie from 'dexie'

//INFORMAÇÕES SOBRE A BASE DE DADOS
const db_name = "Teste"

//tabelas padrões IDB
const db_name1 = "IndicatorParameter"
const db_name2 = "Simulation"

const db_version = 1

export default {

    connect(idDB) {
        //instacia uma variável com nome do banco que deseja utilizar
        let db
        switch (idDB) {
            case 0:
                db = new Dexie(db_name); //BD de testes
                db.version(db_version).stores({
                    teste_quatro: '++id, idSystem, valueindicator, [indicator+parameter+valueParameter]'
                });
                break;
            case 1:
                db = new Dexie(db_name1); //Cálculos de Indicador x Parâmetro
                db.version(db_version).stores({
                    System: '++id, idSystem, valueindicator, [indicator+parameter+valueParameter]',
                    Simulation: '++id, idSystem, valueindicator, [indicator+parameter+valueParameter]'
                });

                break;
            case 2:
                db = new Dexie(db_name2); //JSON do Sistema Analisado
                db.version(db_version).stores({
                    Simulation: '++id, idModel, idSimulation, idSystem, resultQuery, simulationData'
                })
                break;

        }
        
        db.open().catch(function (err) {
            console.error('Failed to open db: ' + (err.stack || err));
        });

        if (db)
            return db

    },  


    async deleteAll() {
        await Dexie.getDatabaseNames(function (names) {
            names.forEach(async function (name) {
              var db = new Dexie(name);
              await db.delete()
            });
          });
    },

    //funções relacionadas a persistencia dos calculos
    async insertData(data, type) {
        let db = this.connect(1)
        if (type == "system") {
            await db.transaction('rw', db.System, function () {
                return db.System.add(data);
            }).catch(function (e) {
                console.error("Erro na transação " + e.stack);
            });
        } else {
            await db.transaction('rw', db.Simulation, function () {
                return db.Simulation.add(data);
            }).catch(function (e) {
                console.error("Erro na transação " + e.stack);
            });
        }
    },

    async searchData(data, type) {
        let db = this.connect(1)

        if (type == "system") {
            const valor = await db.transaction('r', db.System, function () {
                return db.System.where({
                    indicator: data.indicator,
                    parameter: data.parameter,
                    valueParameter: data.valueParameter
                }).first()
            }).catch(function (e) {
                console.error("Erro na transação " + e.stack);
            });
            return valor
        } else {
            const valor = await db.transaction('r', db.Simulation, function () {
                return db.Simulation.where({
                    indicator: data.indicator,
                    parameter: data.parameter,
                    valueParameter: data.valueParameter
                }).first()
            }).catch(function (e) {
                console.error("Erro na transação " + e.stack);
            });
            return valor
        }

    },

    //funções relacionadas à relação indicador x parametros default
    async insertRelation(data) {
        let db = this.connect(3)
        await db.transaction('rw', db.Relationship, function () {
            return db.Relationship.add(data);
        }).catch(function (e) {
            console.error("Erro na transação " + e.stack);
        });
    },

    async insertRelationAll(relation) {
        for (var i = 0; i < relation.relationship.length; i++) {
            await this.insertRelation({ idSystem: relation.idSystem, name: relation.relationship[i].indicator, parameters: relation.relationship[i].parameters })
        }
    },

    async searchIndicators(System) {

        let db = this.connect(2)
        let v = await db.transaction('r', db.Simulation, function () {
            return db.Simulation.where({
                idSystem: System
            }).first()
        }).catch(function (e) {
            console.error("Erro na transação " + e.stack);
        });

        return v

    },

    //funções relacionadas à Simulação
    async insertSimulation(data) {
        let db = this.connect(2)
        await db.transaction('rw', db.Simulation, function () {
            return db.Simulation.add(data);
        }).catch(function (e) {
            console.error("Erro na transação " + e.stack);
        });
    },

    async searchSimulation(System) {
        let db = this.connect(2)

        const valor = await db.transaction('r', db.Simulation, function () {
            return db.Simulation.where({
                idSystem: System
            }).first()
        }).catch(function (e) {
            console.error("Erro na transação " + e.stack);
        });
        return valor
    },

}