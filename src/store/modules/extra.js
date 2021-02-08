import db from './../dexiedb'
//import {helper} from './../../helpers/Helpers'

export default {
    state: {
       
    },
    actions: {
        async searchSimulation({rootState}) {

            //deleta todas as bases de dados existentes
            await db.deleteAll();
            let relation = {}
            //Chamar método que vai criar instância com a Simulação
            switch (rootState.form.idSystem) {
                case 70: //Modelo de Sistema1
                    //Insere os dados fictícios da Simulação
                    db.insertSimulation(sim70)
                    //Busca a lista de relações no Servidor
                    //relation = await helper.getrelation(sim70.idSystem)
                    break
                case 72: //Modelo de Sistema2
                    db.insertSimulation(sim72)
                    //relation = await helper.getrelation(sim72.idSystem)
                    break
                case 75: //Modelo de Sistema3
                    db.insertSimulation(sim75)
                    //relation = await helper.getrelation(sim75.idSystem)
                    break
                default:
                    console.log("Erro na seleção da Simulação")
            }
            console.log(relation)
            //Chamar método que busca no Servidor tabela de relações para o sistema escolhido
            // for (var i = 0; i < relation.length; i++) {
            //     db.insertRelationAll(relation[i])
            // }

            return true;

        }
    }
}

const sim70 = {
    "idSimulation": "68ca096d-4702-496e-8284-fc5f827ecc8f",
    "idSystem": 70,
    "idModel": 18,
    "simulationData": {
        "ARROBA": 15,
        "graph": {
            "nodes": {
                "n_1_VeBg_Venda de bois gordos.": {
                    "formula": "CONFINAMENTO+INICIO_AGUAS",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "n_2_TeBm_Terminação em confinamento de bois magros.-n_1_VeBg_Venda de bois gordos."
                    ],
                    "duration": 200,
                    "type": "terminal_saida_producao"
                },
                "n_2_TeBm_Terminação em confinamento de bois magros.": {
                    "formula": "CONFINAMENTO",
                    "stages": [
                        "Confinamento"
                    ],
                    "flows": [
                        "n_2_TeBm_Terminação em confinamento de bois magros.-n_1_VeBg_Venda de bois gordos.",
                        "n_3_AgBo_Recria nas águas de bezerros.-n_2_TeBm_Terminação em confinamento de bois magros."
                    ],
                    "duration": 110,
                    "type": "est_producao"
                },
                "n_3_AgBo_Recria nas águas de bezerros.": {
                    "formula": "AGUAS",
                    "stages": [
                        "Recria nas águas"
                    ],
                    "flows": [
                        "n_3_AgBo_Recria nas águas de bezerros.-n_2_TeBm_Terminação em confinamento de bois magros.",
                        "n_8_SeBo_Recria na seca de bezerros.-n_3_AgBo_Recria nas águas de bezerros."
                    ],
                    "duration": 212,
                    "type": "est_producao"
                },
                "n_8_SeBo_Recria na seca de bezerros.": {
                    "formula": "SECA",
                    "stages": [
                        "Recria na seca"
                    ],
                    "flows": [
                        "n_8_SeBo_Recria na seca de bezerros.-n_3_AgBo_Recria nas águas de bezerros.",
                        "b_12_1_Bo_Balanço de bezerros desmamados.-n_8_SeBo_Recria na seca de bezerros."
                    ],
                    "duration": 153,
                    "type": "est_producao"
                },
                "b_12_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "0",
                    "stages": [
                        "Balanço"
                    ],
                    "flows": [
                        "b_12_1_Bo_Balanço de bezerros desmamados.-n_8_SeBo_Recria na seca de bezerros.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-b_12_1_Bo_Balanço de bezerros desmamados.",
                        "s_53_1_Bo_Balanço de bezerros desmamados.-b_12_1_Bo_Balanço de bezerros desmamados.",
                        "b_12_1_Bo_Balanço de bezerros desmamados.-n_90_VeBo_Venda de bezerros desmamados."
                    ],
                    "duration": 0,
                    "type": "est_reuso"
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Aleitamento"
                    ],
                    "flows": [
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-b_12_1_Bo_Balanço de bezerros desmamados.",
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-n_16_AlMp_Aleitamento de multíparas prenhes.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-n_18_ReMs_Reserva na seca de multíparas.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_20_10_GeMs_Gestação na seca de multíparas solteiras.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_21_4_EnMs_Engorda na seca de multíparas."
                    ],
                    "duration": 31,
                    "type": "est_producao"
                },
                "n_17_DiMp_Diagnose de prenhez de multíparas paridas.": {
                    "formula": "DIAGNOSE",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-n_16_AlMp_Aleitamento de multíparas prenhes.",
                        "n_25_MoMp_Monta de multíparas paridas.-n_17_DiMp_Diagnose de prenhez de multíparas paridas.",
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras.",
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas."
                    ],
                    "duration": 59,
                    "type": "est_producao"
                },
                "n_25_MoMp_Monta de multíparas paridas.": {
                    "formula": "MONTA",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "n_25_MoMp_Monta de multíparas paridas.-n_17_DiMp_Diagnose de prenhez de multíparas paridas.",
                        "n_35_PuMp_Puerpério de multíparas.-n_25_MoMp_Monta de multíparas paridas.",
                        "n_25_MoMp_Monta de multíparas paridas.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras."
                    ],
                    "duration": 92,
                    "type": "est_producao"
                },
                "n_35_PuMp_Puerpério de multíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Puerpério"
                    ],
                    "flows": [
                        "n_35_PuMp_Puerpério de multíparas.-n_25_MoMp_Monta de multíparas paridas.",
                        "b_42_3_Mp_Balanço de multíparas paridas.-n_35_PuMp_Puerpério de multíparas.",
                        "n_35_PuMp_Puerpério de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras.",
                        "n_35_PuMp_Puerpério de multíparas.-n_44_AlMv_Aleitamento de multíparas vazias."
                    ],
                    "duration": 30,
                    "type": "est_producao"
                },
                "b_42_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "0",
                    "stages": [
                        "Balanço"
                    ],
                    "flows": [
                        "b_42_3_Mp_Balanço de multíparas paridas.-n_35_PuMp_Puerpério de multíparas.",
                        "n_48_GePs_Gestação na seca de primíparas solteiras.-b_42_3_Mp_Balanço de multíparas paridas.",
                        "b_42_3_Mp_Balanço de multíparas paridas.-n_208_VeMp_Venda de multíparas paridas excedentes.",
                        "s_92_3_Mp_Balanço de multíparas paridas.-b_42_3_Mp_Balanço de multíparas paridas."
                    ],
                    "duration": 0,
                    "type": "est_reuso"
                },
                "n_48_GePs_Gestação na seca de primíparas solteiras.": {
                    "formula": "SECA",
                    "stages": [
                        "Gestação na seca"
                    ],
                    "flows": [
                        "n_48_GePs_Gestação na seca de primíparas solteiras.-b_42_3_Mp_Balanço de multíparas paridas.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-n_48_GePs_Gestação na seca de primíparas solteiras.",
                        "n_48_GePs_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento."
                    ],
                    "duration": 153,
                    "type": "est_producao"
                },
                "n_59_AlPp_Aleitamento de primíparas prenhes.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Aleitamento"
                    ],
                    "flows": [
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-n_48_GePs_Gestação na seca de primíparas solteiras.",
                        "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-n_59_AlPp_Aleitamento de primíparas prenhes.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_53_1_Bo_Balanço de bezerros desmamados.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_72_14_RePs_Reserva na seca de primíparas falhadas."
                    ],
                    "duration": 31,
                    "type": "est_producao"
                },
                "n_69_DiPp_Diagnose de prenhez de primíparas paridas.": {
                    "formula": "DIAGNOSE",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-n_59_AlPp_Aleitamento de primíparas prenhes.",
                        "n_85_MoPp_Monta de primíparas paridas.-n_69_DiPp_Diagnose de prenhez de primíparas paridas.",
                        "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras."
                    ],
                    "duration": 59,
                    "type": "est_producao"
                },
                "n_85_MoPp_Monta de primíparas paridas.": {
                    "formula": "MONTA",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "n_85_MoPp_Monta de primíparas paridas.-n_69_DiPp_Diagnose de prenhez de primíparas paridas.",
                        "n_101_PuPp_Puerpério de primíparas.-n_85_MoPp_Monta de primíparas paridas.",
                        "n_85_MoPp_Monta de primíparas paridas.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras."
                    ],
                    "duration": 92,
                    "type": "est_producao"
                },
                "n_101_PuPp_Puerpério de primíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Puerpério"
                    ],
                    "flows": [
                        "n_101_PuPp_Puerpério de primíparas.-n_85_MoPp_Monta de primíparas paridas.",
                        "n_112_GeNu_Gestação na seca de nulíparas.-n_101_PuPp_Puerpério de primíparas.",
                        "n_101_PuPp_Puerpério de primíparas.-s_169_12_MoPs_Monta de primíparas solteiras."
                    ],
                    "duration": 30,
                    "type": "est_producao"
                },
                "n_112_GeNu_Gestação na seca de nulíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Gestação na seca"
                    ],
                    "flows": [
                        "n_112_GeNu_Gestação na seca de nulíparas.-n_101_PuPp_Puerpério de primíparas.",
                        "n_112_GaNu_Gestação nas águas de nulíparas.-n_112_GeNu_Gestação na seca de nulíparas.",
                        "n_112_GeNu_Gestação na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas."
                    ],
                    "duration": 153,
                    "type": "est_producao"
                },
                "n_112_GaNu_Gestação nas águas de nulíparas.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Gestação na seca"
                    ],
                    "flows": [
                        "n_112_GaNu_Gestação nas águas de nulíparas.-n_112_GeNu_Gestação na seca de nulíparas.",
                        "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_112_GaNu_Gestação nas águas de nulíparas.",
                        "n_112_GaNu_Gestação nas águas de nulíparas.-s_118_13_EnNu_Engorda na seca de nulíparas."
                    ],
                    "duration": 31,
                    "type": "est_producao"
                },
                "n_117_DiNu_Diagnose de prenhez de nulíparas.": {
                    "formula": "DIAGNOSE",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_112_GaNu_Gestação nas águas de nulíparas.",
                        "n_128_MoNu_Monta de nulíparas.-n_117_DiNu_Diagnose de prenhez de nulíparas.",
                        "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_129_EaNu1_Engorda nas águas de nulíparas falhadas."
                    ],
                    "duration": 59,
                    "type": "est_producao"
                },
                "n_128_MoNu_Monta de nulíparas.": {
                    "formula": "MONTA",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "n_128_MoNu_Monta de nulíparas.-n_117_DiNu_Diagnose de prenhez de nulíparas.",
                        "n_138_AgNu_Recria nas águas de nulíparas.-n_128_MoNu_Monta de nulíparas."
                    ],
                    "duration": 92,
                    "type": "est_producao"
                },
                "n_138_AgNu_Recria nas águas de nulíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Recria nas águas"
                    ],
                    "flows": [
                        "n_138_AgNu_Recria nas águas de nulíparas.-n_128_MoNu_Monta de nulíparas.",
                        "n_156_SeNu_Recria na seca de nulíparas.-n_138_AgNu_Recria nas águas de nulíparas."
                    ],
                    "duration": 30,
                    "type": "est_producao"
                },
                "n_156_SeNu_Recria na seca de nulíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Recria na seca"
                    ],
                    "flows": [
                        "n_156_SeNu_Recria na seca de nulíparas.-n_138_AgNu_Recria nas águas de nulíparas.",
                        "n_173_AgBa_Recria nas águas de bezerras.-n_156_SeNu_Recria na seca de nulíparas."
                    ],
                    "duration": 153,
                    "type": "est_producao"
                },
                "n_173_AgBa_Recria nas águas de bezerras.": {
                    "formula": "AGUAS",
                    "stages": [
                        "Recria nas águas"
                    ],
                    "flows": [
                        "n_173_AgBa_Recria nas águas de bezerras.-n_156_SeNu_Recria na seca de nulíparas.",
                        "n_185_SeBa_Recria na seca de bezerras.-n_173_AgBa_Recria nas águas de bezerras."
                    ],
                    "duration": 212,
                    "type": "est_producao"
                },
                "n_185_SeBa_Recria na seca de bezerras.": {
                    "formula": "SECA",
                    "stages": [
                        "Recria na seca"
                    ],
                    "flows": [
                        "n_185_SeBa_Recria na seca de bezerras.-n_173_AgBa_Recria nas águas de bezerras.",
                        "b_71_2_Ba_Balanço de bezerras desmamadas.-n_185_SeBa_Recria na seca de bezerras."
                    ],
                    "duration": 153,
                    "type": "est_producao"
                },
                "b_71_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "b_71_2_Ba_Balanço de bezerras desmamadas.-n_185_SeBa_Recria na seca de bezerras.",
                        "n_207_CoBa_Compra de bezerras desmamadas-b_71_2_Ba_Balanço de bezerras desmamadas.",
                        "b_71_2_Ba_Balanço de bezerras desmamadas.-n_91_VeBa_Venda de bezerras desmamadas.",
                        "s_19_2_Ba_Balanço de bezerras desmamadas.-b_71_2_Ba_Balanço de bezerras desmamadas."
                    ],
                    "duration": 0,
                    "type": "est_reuso"
                },
                "n_207_CoBa_Compra de bezerras desmamadas": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_207_CoBa_Compra de bezerras desmamadas-b_71_2_Ba_Balanço de bezerras desmamadas."
                    ],
                    "duration": 0,
                    "type": "est_producao"
                },
                "n_129_EaNu1_Engorda nas águas de nulíparas falhadas.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Engorda nas águas"
                    ],
                    "flows": [
                        "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_129_EaNu1_Engorda nas águas de nulíparas falhadas.",
                        "n_129_EaNu1_Engorda nas águas de nulíparas falhadas.-s_118_13_EnNu_Engorda na seca de nulíparas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "s_118_13_EnNu_Engorda na seca de nulíparas.": {
                    "formula": "0",
                    "stages": [
                        "Engorda na seca"
                    ],
                    "flows": [
                        "n_129_EaNu1_Engorda nas águas de nulíparas falhadas.-s_118_13_EnNu_Engorda na seca de nulíparas.",
                        "s_118_13_EnNu_Engorda na seca de nulíparas.-n_144_EnNu_Engorda na seca de nulíparas.",
                        "n_112_GaNu_Gestação nas águas de nulíparas.-s_118_13_EnNu_Engorda na seca de nulíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_144_EnNu_Engorda na seca de nulíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Engorda na seca"
                    ],
                    "flows": [
                        "s_118_13_EnNu_Engorda na seca de nulíparas.-n_144_EnNu_Engorda na seca de nulíparas.",
                        "n_144_EnNu_Engorda na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "s_118_13_EaNu2_Engorda nas águas de nulíparas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_144_EnNu_Engorda na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas.",
                        "s_118_13_EaNu2_Engorda nas águas de nulíparas.-n_144_EnNu2_Engorda nas águas de nulíparas.",
                        "n_112_GeNu_Gestação na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_144_EnNu2_Engorda nas águas de nulíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Engorda nas águas"
                    ],
                    "flows": [
                        "s_118_13_EaNu2_Engorda nas águas de nulíparas.-n_144_EnNu2_Engorda nas águas de nulíparas.",
                        "n_144_EnNu2_Engorda nas águas de nulíparas.-n_162_VeNg_Venda de nulíparas gordas."
                    ],
                    "duration": 30,
                    "type": "est_tratamento"
                },
                "n_162_VeNg_Venda de nulíparas gordas.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "n_144_EnNu2_Engorda nas águas de nulíparas.-n_162_VeNg_Venda de nulíparas gordas."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                },
                "s_169_12_MoPs_Monta de primíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_101_PuPp_Puerpério de primíparas.-s_169_12_MoPs_Monta de primíparas solteiras.",
                        "s_169_12_MoPs_Monta de primíparas solteiras.-n_113_MoPs_Monta de primíparas solteiras.",
                        "n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.-s_169_12_MoPs_Monta de primíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_113_MoPs_Monta de primíparas solteiras.": {
                    "formula": "MONTA",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "s_169_12_MoPs_Monta de primíparas solteiras.-n_113_MoPs_Monta de primíparas solteiras.",
                        "n_113_MoPs_Monta de primíparas solteiras.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras."
                    ],
                    "duration": 92,
                    "type": "est_tratamento"
                },
                "s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "n_113_MoPs_Monta de primíparas solteiras.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.",
                        "s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.-n_122_DiPs_Diagnose de prenhez de primíparas solteiras.",
                        "n_85_MoPp_Monta de primíparas paridas.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.": {
                    "formula": "DIAGNOSE",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.-n_122_DiPs_Diagnose de prenhez de primíparas solteiras.",
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras.",
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_134_RaPs1_Reserva nas águas de primíparas falhadas.",
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_190_EaPs1_Engorda nas águas de primíparas falhadas."
                    ],
                    "duration": 59,
                    "type": "est_tratamento"
                },
                "s_86_11_GaPs_Gestação nas águas de primíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "Gestação nas águas"
                    ],
                    "flows": [
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras.",
                        "s_86_11_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GaPs_Gestação nas águas de primíparas solteiras.",
                        "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_133_GaPs_Gestação nas águas de primíparas solteiras.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Gestação nas águas"
                    ],
                    "flows": [
                        "s_86_11_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GaPs_Gestação nas águas de primíparas solteiras.",
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GePs1_Gestação na seca de primíparas solteiras.",
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_72_14_RePs_Reserva na seca de primíparas falhadas.",
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_199_17_EnPs_Engorda na seca de primíparas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "n_133_GePs1_Gestação na seca de primíparas solteiras.": {
                    "formula": "SECA",
                    "stages": [
                        "Gestação nas águas"
                    ],
                    "flows": [
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GePs1_Gestação na seca de primíparas solteiras.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_199_17_EaPs2_Engorda nas águas de primíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "n_134_RaPs1_Reserva nas águas de primíparas falhadas.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Reserva nas águas"
                    ],
                    "flows": [
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_134_RaPs1_Reserva nas águas de primíparas falhadas.",
                        "n_134_RaPs1_Reserva nas águas de primíparas falhadas.-s_72_14_RePs_Reserva na seca de primíparas falhadas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "s_72_14_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_134_RaPs1_Reserva nas águas de primíparas falhadas.-s_72_14_RePs_Reserva na seca de primíparas falhadas.",
                        "s_72_14_RePs_Reserva na seca de primíparas falhadas.-n_152_RePs_Reserva na seca de primíparas falhadas.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_72_14_RePs_Reserva na seca de primíparas falhadas.",
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_72_14_RePs_Reserva na seca de primíparas falhadas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_152_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "SECA",
                    "stages": [
                        "Reserva na seca"
                    ],
                    "flows": [
                        "s_72_14_RePs_Reserva na seca de primíparas falhadas.-n_152_RePs_Reserva na seca de primíparas falhadas.",
                        "n_152_RePs_Reserva na seca de primíparas falhadas.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_152_RePs_Reserva na seca de primíparas falhadas.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.",
                        "s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.-n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.",
                        "n_48_GePs_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Reserva nas águas"
                    ],
                    "flows": [
                        "s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.-n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.",
                        "n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.-s_169_12_MoPs_Monta de primíparas solteiras."
                    ],
                    "duration": 30,
                    "type": "est_tratamento"
                },
                "n_190_EaPs1_Engorda nas águas de primíparas falhadas.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Engorda nas águas"
                    ],
                    "flows": [
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_190_EaPs1_Engorda nas águas de primíparas falhadas.",
                        "n_190_EaPs1_Engorda nas águas de primíparas falhadas.-s_199_17_EnPs_Engorda na seca de primíparas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "s_199_17_EnPs_Engorda na seca de primíparas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_190_EaPs1_Engorda nas águas de primíparas falhadas.-s_199_17_EnPs_Engorda na seca de primíparas.",
                        "s_199_17_EnPs_Engorda na seca de primíparas.-n_203_EnPs_Engorda na seca de primíparas.",
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_199_17_EnPs_Engorda na seca de primíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_203_EnPs_Engorda na seca de primíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Engorda na seca"
                    ],
                    "flows": [
                        "s_199_17_EnPs_Engorda na seca de primíparas.-n_203_EnPs_Engorda na seca de primíparas.",
                        "n_203_EnPs_Engorda na seca de primíparas.-s_199_17_EaPs2_Engorda nas águas de primíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "s_199_17_EaPs2_Engorda nas águas de primíparas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_203_EnPs_Engorda na seca de primíparas.-s_199_17_EaPs2_Engorda nas águas de primíparas.",
                        "s_199_17_EaPs2_Engorda nas águas de primíparas.-n_203_EaPs2_Engorda nas águas de primíparas.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_199_17_EaPs2_Engorda nas águas de primíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_203_EaPs2_Engorda nas águas de primíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Engorda na seca"
                    ],
                    "flows": [
                        "s_199_17_EaPs2_Engorda nas águas de primíparas.-n_203_EaPs2_Engorda nas águas de primíparas.",
                        "n_203_EaPs2_Engorda nas águas de primíparas.-n_209_VePg_Venda de primíparas solteiras vazias gordas."
                    ],
                    "duration": 30,
                    "type": "est_tratamento"
                },
                "n_209_VePg_Venda de primíparas solteiras vazias gordas.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "n_203_EaPs2_Engorda nas águas de primíparas.-n_209_VePg_Venda de primíparas solteiras vazias gordas."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                },
                "n_44_AlMv_Aleitamento de multíparas vazias.": {
                    "formula": "AGUAS-PUERPERIO",
                    "stages": [
                        "Aleitamento"
                    ],
                    "flows": [
                        "n_35_PuMp_Puerpério de multíparas.-n_44_AlMv_Aleitamento de multíparas vazias.",
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_53_1_Bo_Balanço de bezerros desmamados.",
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_19_2_Ba_Balanço de bezerras desmamadas.",
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_21_4_EnMs_Engorda na seca de multíparas."
                    ],
                    "duration": 182,
                    "type": "est_tratamento"
                },
                "s_31_7_MoMs_Monta de multíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "n_35_PuMp_Puerpério de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras.",
                        "s_31_7_MoMs_Monta de multíparas solteiras.-n_43_MoMs_Monta de multíparas solteiras.",
                        "n_18_RaMs_Reserva nas águas de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_43_MoMs_Monta de multíparas solteiras.": {
                    "formula": "MONTA",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "s_31_7_MoMs_Monta de multíparas solteiras.-n_43_MoMs_Monta de multíparas solteiras.",
                        "n_43_MoMs_Monta de multíparas solteiras.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras."
                    ],
                    "duration": 92,
                    "type": "est_tratamento"
                },
                "s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "n_43_MoMs_Monta de multíparas solteiras.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.",
                        "s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.-n_49_DiMs_Diagnose de prenhez de multíparas solteiras.",
                        "n_25_MoMp_Monta de multíparas paridas.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "est_tratamento"
                },
                "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.": {
                    "formula": "DIAGNOSE",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.-n_49_DiMs_Diagnose de prenhez de multíparas solteiras.",
                        "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras.",
                        "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas."
                    ],
                    "duration": 59,
                    "type": "est_tratamento"
                },
                "s_26_9_GaMs_Gestação nas águas de multíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras.",
                        "s_26_9_GaMs_Gestação nas águas de multíparas solteiras.-n_64_GaMs_Gestação nas águas de multíparas solteiras.",
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_64_GaMs_Gestação nas águas de multíparas solteiras.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Gestação nas águas"
                    ],
                    "flows": [
                        "s_26_9_GaMs_Gestação nas águas de multíparas solteiras.-n_64_GaMs_Gestação nas águas de multíparas solteiras.",
                        "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_20_10_GeMs_Gestação na seca de multíparas solteiras.",
                        "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_21_4_EnMs_Engorda na seca de multíparas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "s_20_10_GeMs_Gestação na seca de multíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "Gestação na seca"
                    ],
                    "flows": [
                        "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_20_10_GeMs_Gestação na seca de multíparas solteiras.",
                        "s_20_10_GeMs_Gestação na seca de multíparas solteiras.-n_76_GeMs_Gestação na seca de multíparas solteiras.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_20_10_GeMs_Gestação na seca de multíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_76_GeMs_Gestação na seca de multíparas solteiras.": {
                    "formula": "SECA",
                    "stages": [
                        "Gestação na seca"
                    ],
                    "flows": [
                        "s_20_10_GeMs_Gestação na seca de multíparas solteiras.-n_76_GeMs_Gestação na seca de multíparas solteiras.",
                        "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas.",
                        "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_93_5_EaMs2_Engorda nas águas de multíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.",
                        "s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.-n_65_EaMs1_Engorda nas águas de multíparas falhadas.",
                        "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_65_EaMs1_Engorda nas águas de multíparas falhadas.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Engorda nas águas"
                    ],
                    "flows": [
                        "s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.-n_65_EaMs1_Engorda nas águas de multíparas falhadas.",
                        "n_65_EaMs1_Engorda nas águas de multíparas falhadas.-s_21_4_EnMs_Engorda na seca de multíparas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "s_21_4_EnMs_Engorda na seca de multíparas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_65_EaMs1_Engorda nas águas de multíparas falhadas.-s_21_4_EnMs_Engorda na seca de multíparas.",
                        "s_21_4_EnMs_Engorda na seca de multíparas.-n_81_EnMs_Engorda na seca de multíparas.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_21_4_EnMs_Engorda na seca de multíparas.",
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_21_4_EnMs_Engorda na seca de multíparas.",
                        "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_21_4_EnMs_Engorda na seca de multíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_81_EnMs_Engorda na seca de multíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Engorda na seca"
                    ],
                    "flows": [
                        "s_21_4_EnMs_Engorda na seca de multíparas.-n_81_EnMs_Engorda na seca de multíparas.",
                        "n_81_EnMs_Engorda na seca de multíparas.-s_93_5_EaMs2_Engorda nas águas de multíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "s_93_5_EaMs2_Engorda nas águas de multíparas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_81_EnMs_Engorda na seca de multíparas.-s_93_5_EaMs2_Engorda nas águas de multíparas.",
                        "s_93_5_EaMs2_Engorda nas águas de multíparas.-n_97_EaMs2_Engorda nas águas de multíparas.",
                        "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_93_5_EaMs2_Engorda nas águas de multíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_97_EaMs2_Engorda nas águas de multíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Engorda nas águas"
                    ],
                    "flows": [
                        "s_93_5_EaMs2_Engorda nas águas de multíparas.-n_97_EaMs2_Engorda nas águas de multíparas.",
                        "n_97_EaMs2_Engorda nas águas de multíparas.-n_108_VeMg_Venda de multíparas solteiras vazias gordas."
                    ],
                    "duration": 30,
                    "type": "est_tratamento"
                },
                "n_108_VeMg_Venda de multíparas solteiras vazias gordas.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "n_97_EaMs2_Engorda nas águas de multíparas.-n_108_VeMg_Venda de multíparas solteiras vazias gordas."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                },
                "n_18_ReMs_Reserva na seca de multíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Reserva na seca"
                    ],
                    "flows": [
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-n_18_ReMs_Reserva na seca de multíparas.",
                        "n_18_ReMs_Reserva na seca de multíparas.-n_18_RaMs_Reserva nas águas de multíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "n_18_RaMs_Reserva nas águas de multíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Reserva nas águas"
                    ],
                    "flows": [
                        "n_18_ReMs_Reserva na seca de multíparas.-n_18_RaMs_Reserva nas águas de multíparas.",
                        "n_18_RaMs_Reserva nas águas de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras."
                    ],
                    "duration": 30,
                    "type": "est_tratamento"
                },
                "s_53_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_53_1_Bo_Balanço de bezerros desmamados.",
                        "s_53_1_Bo_Balanço de bezerros desmamados.-b_12_1_Bo_Balanço de bezerros desmamados.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_53_1_Bo_Balanço de bezerros desmamados."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_90_VeBo_Venda de bezerros desmamados.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "b_12_1_Bo_Balanço de bezerros desmamados.-n_90_VeBo_Venda de bezerros desmamados."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                },
                "s_19_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.",
                        "s_19_2_Ba_Balanço de bezerras desmamadas.-b_71_2_Ba_Balanço de bezerras desmamadas.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.",
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_19_2_Ba_Balanço de bezerras desmamadas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_91_VeBa_Venda de bezerras desmamadas.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "b_71_2_Ba_Balanço de bezerras desmamadas.-n_91_VeBa_Venda de bezerras desmamadas."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                },
                "s_92_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas.",
                        "s_92_3_Mp_Balanço de multíparas paridas.-b_42_3_Mp_Balanço de multíparas paridas.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_208_VeMp_Venda de multíparas paridas excedentes.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "b_42_3_Mp_Balanço de multíparas paridas.-n_208_VeMp_Venda de multíparas paridas excedentes."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                }
            },
            "flows": {
                "n_2_TeBm_Terminação em confinamento de bois magros.-n_1_VeBg_Venda de bois gordos.": {
                    "formula": "PRODUCAO",
                    "resource": {
                        "name": "Bois gordos",
                        "unit": "cab",
                        "category": "BOVINOS"
                    },
                    "type": "Produção",
                    "factor": 438,
                    "day": 200,
                    "qty": 438
                },
                "n_3_AgBo_Recria nas águas de bezerros.-n_2_TeBm_Terminação em confinamento de bois magros.": {
                    "formula": "1/(1-PERDAS)^(CONFINAMENTO/CICLO)",
                    "resource": {
                        "name": "Bezerros recriados nas águas",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Produção",
                    "factor": 1.0030,
                    "day": 90,
                    "qty": 439.33
                },
                "n_8_SeBo_Recria na seca de bezerros.-n_3_AgBo_Recria nas águas de bezerros.": {
                    "formula": "1/(1-PERDAS)^(AGUAS/CICLO)",
                    "resource": {
                        "name": "Bezerros recriados na seca",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Produção",
                    "factor": 1.0059,
                    "day": -122,
                    "qty": 441.90
                },
                "b_12_1_Bo_Balanço de bezerros desmamados.-n_8_SeBo_Recria na seca de bezerros.": {
                    "formula": "1/(1-PERDAS)^(SECA/CICLO)",
                    "resource": {
                        "name": "Bezerros desmamados",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Produção",
                    "factor": 1.0042,
                    "day": -275,
                    "qty": 443.77
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.-b_12_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerros desmamados",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -275,
                    "qty": 443.77
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.-n_18_ReMs_Reserva na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas reservadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 443.77
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 443.77
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.-s_20_10_GeMs_Gestação na seca de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 443.77
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.-s_21_4_EnMs_Engorda na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 443.77
                },
                "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-n_16_AlMp_Aleitamento de multíparas prenhes.": {
                    "formula": "1/(PARTO_MACHO*(1-PERDAS_CRIA)^((AGUAS-PUERPERIO)/CICLO))",
                    "resource": {
                        "name": "Multíparas paridas prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Produção",
                    "factor": 2.0411,
                    "day": -306,
                    "qty": 905.78
                },
                "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 905.78
                },
                "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 905.78
                },
                "n_25_MoMp_Monta de multíparas paridas.-n_17_DiMp_Diagnose de prenhez de multíparas paridas.": {
                    "formula": "1/(PRENHEZ*(1-PERDAS)^(DIAGNOSE/CICLO))",
                    "resource": {
                        "name": "Multíparas paridas após a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1.1129,
                    "day": -365,
                    "qty": 1008.06
                },
                "n_25_MoMp_Monta de multíparas paridas.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras após a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -365,
                    "qty": 1008.06
                },
                "n_35_PuMp_Puerpério de multíparas.-n_25_MoMp_Monta de multíparas paridas.": {
                    "formula": "1/(1-PERDAS)^(MONTA/CICLO)",
                    "resource": {
                        "name": "Multíparas paridas para a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1.0025,
                    "day": -457,
                    "qty": 1010.62
                },
                "n_35_PuMp_Puerpério de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -457,
                    "qty": 1010.62
                },
                "n_35_PuMp_Puerpério de multíparas.-n_44_AlMv_Aleitamento de multíparas vazias.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas para a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -457,
                    "qty": 1010.62
                },
                "b_42_3_Mp_Balanço de multíparas paridas.-n_35_PuMp_Puerpério de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1.0008,
                    "day": -487,
                    "qty": 1011.45
                },
                "s_92_3_Mp_Balanço de multíparas paridas.-b_42_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -122,
                    "qty": 1011.45
                },
                "n_48_GePs_Gestação na seca de primíparas solteiras.-b_42_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -487,
                    "qty": 1011.45
                },
                "n_18_ReMs_Reserva na seca de multíparas.-n_18_RaMs_Reserva nas águas de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas reservadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -122,
                    "qty": 1010.62
                },
                "n_18_RaMs_Reserva nas águas de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -92,
                    "qty": 1010.62
                },
                "s_31_7_MoMs_Monta de multíparas solteiras.-n_43_MoMs_Monta de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -457,
                    "qty": 1010.62
                },
                "s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.-n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas reservadas.",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_43_MoMs_Monta de multíparas solteiras.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras após a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -365,
                    "qty": 1010.62
                },
                "n_44_AlMv_Aleitamento de multíparas vazias.-s_53_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerros desmamados",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_44_AlMv_Aleitamento de multíparas vazias.-s_19_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_44_AlMv_Aleitamento de multíparas vazias.-s_21_4_EnMs_Engorda na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "s_53_1_Bo_Balanço de bezerros desmamados.-b_12_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerros desmamados.",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_59_AlPp_Aleitamento de primíparas prenhes.-n_48_GePs_Gestação na seca de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.-n_49_DiMs_Diagnose de prenhez de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 1010.62
                },
                "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 1010.62
                },
                "s_26_9_GaMs_Gestação nas águas de multíparas solteiras.-n_64_GaMs_Gestação nas águas de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 1010.62
                },
                "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 1010.62
                },
                "s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.-n_65_EaMs1_Engorda nas águas de multíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 1010.62
                },
                "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-n_59_AlPp_Aleitamento de primíparas prenhes.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas paridas prenhes",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "n_59_AlPp_Aleitamento de primíparas prenhes.-s_53_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerros desmamados",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "s_19_2_Ba_Balanço de bezerras desmamadas.-b_71_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_59_AlPp_Aleitamento de primíparas prenhes.-s_72_14_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_20_10_GeMs_Gestação na seca de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "s_20_10_GeMs_Gestação na seca de multíparas solteiras.-n_76_GeMs_Gestação na seca de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_21_4_EnMs_Engorda na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_65_EaMs1_Engorda nas águas de multíparas falhadas.-s_21_4_EnMs_Engorda na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "s_21_4_EnMs_Engorda na seca de multíparas.-n_81_EnMs_Engorda na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_85_MoPp_Monta de primíparas paridas.-n_69_DiPp_Diagnose de prenhez de primíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas paridas após a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -730,
                    "qty": 1010.62
                },
                "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "b_12_1_Bo_Balanço de bezerros desmamados.-n_90_VeBo_Venda de bezerros desmamados.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerros desmamados",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "b_71_2_Ba_Balanço de bezerras desmamadas.-n_91_VeBa_Venda de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_59_AlPp_Aleitamento de primíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -122,
                    "qty": 1010.62
                },
                "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_93_5_EaMs2_Engorda nas águas de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -122,
                    "qty": 1010.62
                },
                "n_81_EnMs_Engorda na seca de multíparas.-s_93_5_EaMs2_Engorda nas águas de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "s_93_5_EaMs2_Engorda nas águas de multíparas.-n_97_EaMs2_Engorda nas águas de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.-s_169_12_MoPs_Monta de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -822,
                    "qty": 1010.62
                },
                "n_101_PuPp_Puerpério de primíparas.-s_169_12_MoPs_Monta de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -822,
                    "qty": 1010.62
                },
                "n_101_PuPp_Puerpério de primíparas.-n_85_MoPp_Monta de primíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas paridas para a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -822,
                    "qty": 1010.62
                },
                "s_169_12_MoPs_Monta de primíparas solteiras.-n_113_MoPs_Monta de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -822,
                    "qty": 1010.62
                },
                "n_85_MoPp_Monta de primíparas paridas.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas paridas após a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -730,
                    "qty": 1010.62
                },
                "n_97_EaMs2_Engorda nas águas de multíparas.-n_108_VeMg_Venda de multíparas solteiras vazias gordas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas gordas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -92,
                    "qty": 1010.62
                },
                "n_112_GeNu_Gestação na seca de nulíparas.-n_101_PuPp_Puerpério de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas paridas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_112_GaNu_Gestação nas águas de nulíparas.-s_118_13_EnNu_Engorda na seca de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas prenhes",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1005,
                    "qty": 1010.62
                },
                "n_112_GaNu_Gestação nas águas de nulíparas.-n_112_GeNu_Gestação na seca de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas prenhes",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1005,
                    "qty": 1010.62
                },
                "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_112_GaNu_Gestação nas águas de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas prenhes",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1036,
                    "qty": 1010.62
                },
                "n_129_EaNu1_Engorda nas águas de nulíparas falhadas.-s_118_13_EnNu_Engorda na seca de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1005,
                    "qty": 1010.62
                },
                "n_112_GeNu_Gestação na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_113_MoPs_Monta de primíparas solteiras.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras após a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": 1096,
                    "qty": 1010.62
                },
                "n_128_MoNu_Monta de nulíparas.-n_117_DiNu_Diagnose de prenhez de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas após a monta",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1095,
                    "qty": 1010.62
                },
                "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_129_EaNu1_Engorda nas águas de nulíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1036,
                    "qty": 1010.62
                },
                "s_86_11_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GaPs_Gestação nas águas de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.-n_122_DiPs_Diagnose de prenhez de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras após a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_134_RaPs1_Reserva nas águas de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_190_EaPs1_Engorda nas águas de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "n_138_AgNu_Recria nas águas de nulíparas.-n_128_MoNu_Monta de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas para a monta",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1187,
                    "qty": 1010.62
                },
                "s_118_13_EnNu_Engorda na seca de nulíparas.-n_144_EnNu_Engorda na seca de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_133_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GePs1_Gestação na seca de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes.",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_72_14_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes.",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_199_17_EnPs_Engorda na seca de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes.",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas reservadas.",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_199_17_EaPs2_Engorda nas águas de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas.",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_134_RaPs1_Reserva nas águas de primíparas falhadas.-s_72_14_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "s_72_14_RePs_Reserva na seca de primíparas falhadas.-n_152_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_156_SeNu_Recria na seca de nulíparas.-n_138_AgNu_Recria nas águas de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas recriadas na seca",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1217,
                    "qty": 1010.62
                },
                "n_144_EnNu_Engorda na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "s_118_13_EaNu2_Engorda nas águas de nulíparas.-n_144_EnNu2_Engorda nas águas de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_144_EnNu2_Engorda nas águas de nulíparas.-n_162_VeNg_Venda de nulíparas gordas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas gordas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -822,
                    "qty": 1010.62
                },
                "n_48_GePs_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_152_RePs_Reserva na seca de primíparas falhadas.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_173_AgBa_Recria nas águas de bezerras.-n_156_SeNu_Recria na seca de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras recriadas nas águas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1370,
                    "qty": 1010.62
                },
                "n_185_SeBa_Recria na seca de bezerras.-n_173_AgBa_Recria nas águas de bezerras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras recriadas na seca",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1582,
                    "qty": 1010.62
                },
                "b_71_2_Ba_Balanço de bezerras desmamadas.-n_185_SeBa_Recria na seca de bezerras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1735,
                    "qty": 1010.62
                },
                "n_190_EaPs1_Engorda nas águas de primíparas falhadas.-s_199_17_EnPs_Engorda na seca de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas descartadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "s_199_17_EnPs_Engorda na seca de primíparas.-n_203_EnPs_Engorda na seca de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas descartadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_207_CoBa_Compra de bezerras desmamadas-b_71_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1735,
                    "qty": 1010.62
                },
                "b_42_3_Mp_Balanço de multíparas paridas.-n_208_VeMp_Venda de multíparas paridas excedentes.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_203_EnPs_Engorda na seca de primíparas.-s_199_17_EaPs2_Engorda nas águas de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas gordas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "s_199_17_EaPs2_Engorda nas águas de primíparas.-n_203_EaPs2_Engorda nas águas de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas descartadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_203_EaPs2_Engorda nas águas de primíparas.-n_209_VePg_Venda de primíparas solteiras vazias gordas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas gordas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -457,
                    "qty": 1010.62
                }
            },
            "idModel": 18,
            "root": "n_1_VeBg_Venda de bois gordos.",
            "nodeOne": "n_2_TeBm_Terminação em confinamento de bois magros."
        },
        "parameters": {
            "AGUAS": 212,
            "CICLO": 365,
            "CONFINAMENTO": 110,
            "DIAGNOSE": 59,
            "INICIO_AGUAS": 90,
            "MONTA": 92,
            "NATALIDADE": 0.80,
            "PARTO_MACHO": 0.50,
            "PERDAS": 0.01,
            "PERDAS_CRIA": 0.03,
            "PRENHEZ": 0.90,
            "PRODUCAO": 438,
            "PUERPERIO": 30
        },
        "systemParameters": {
            "AGUAS": { "min": 210, "std": 215, "max": 225 },
            "CICLO": { "min": 320, "std": 340, "max": 365 },
            "CONFINAMENTO": { "min": 103, "std": 110, "max": 129 },
            "INICIO_AGUAS": { "min": 80, "std": 90, "max": 100 },
            "DIAGNOSE": { "min": 30, "std": 60, "max": 90 },
            "PARTO_MACHO": { "min": 0.4, "std": 0.5, "max": 0.9 },
            "MONTA": { "min": 60, "std": 90, "max": 120 },
            "NATALIDADE": { "min": 0.50, "std": 0.80, "max": 1.00 },
            "PERDAS": { "min": 0.0, "std": 0.01, "max": 0.05 },
            "PERDAS_CRIA": { "min": 0.0, "std": 0.03, "max": 0.10 },
            "PRENHEZ": { "min": 0.50, "std": 0.80, "max": 1.00 },
            "PRODUCAO": { "min": 300, "std": 400, "max": 500 },
            "PUERPERIO": { "min": 25, "std": 30, "max": 40 }
        },
        "calculatedParameters": {
            "FIM_AGUAS": "AGUAS-DIAGNOSE-MONTA-PUERPERIO",
            "SECA": "CICLO-AGUAS"
        },
        "formulas": {
            "nodes": [
                "AGUAS",
                "AGUAS-PUERPERIO",
                "CONFINAMENTO",
                "CONFINAMENTO+INICIO_AGUAS",
                "DIAGNOSE",
                "MONTA",
                "PUERPERIO",
                "SECA"
            ],
            "flows": [
                "1",
                "PRODUCAO",
                "1/(1-PERDAS)^(AGUAS/CICLO)",
                "1/(1-PERDAS)^(CONFINAMENTO/CICLO)",
                "1/(1-PERDAS)^(MONTA/CICLO)",
                "1/(1-PERDAS)^(SECA/CICLO)",
                "1/(PARTO_MACHO*(1-PERDAS_CRIA)^((AGUAS-PUERPERIO)/CICLO))",
                "1/(PRENHEZ*(1-PERDAS)^(DIAGNOSE/CICLO))"
            ]
        },
        "resources": {
            "Bezerras desmamadas": {
                "unit": "cab",
                "category": "BEZERRAS"
            },
            "Bezerras recriadas nas águas": {
                "unit": "cab",
                "category": "BEZERRAS"
            },
            "Bezerras recriadas na seca": {
                "unit": "cab",
                "category": "BEZERRAS"
            },

            "Bezerros desmamados": {
                "unit": "cab",
                "category": "BEZERROS"
            },
            "Bezerros recriados nas águas": {
                "unit": "cab",
                "category": "BEZERROS"
            },
            "Bezerros recriados na seca": {
                "unit": "cab",
                "category": "BEZERROS"
            },

            "Bois gordos": {
                "unit": "cab",
                "category": "MACHOS"
            },

            "Multíparas descartadas": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas gordas": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas paridas": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas paridas após a monta": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas paridas para a monta": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas paridas prenhes": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas reservadas": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas solteiras após a monta": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas solteiras para a monta": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas solteiras prenhes": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },

            "Nulíparas após a monta": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas descartadas": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas gordas": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas para a monta": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas prenhes": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas recriadas na seca": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas recriadas nas águas": {
                "unit": "cab",
                "category": "NULIPARAS"
            },

            "Primíparas descartadas": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas gordas": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas paridas": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas paridas após a monta": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas paridas para a monta": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas paridas prenhes": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas reservadas": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas solteiras após a monta": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas solteiras para a monta": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas solteiras prenhes": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            }
        },
        "stagesHierarchy": {
            "(nenhuma)": {
                "color": "white",
                "label": null
            },
            "Aleitamento": {
                "color": "powderblue",
                "label": "Al"
            },
            "Balanço": {
                "color": "black",
                "label": null
            },
            "Compra": {
                "color": "lightgrey",
                "label": "Ve"
            },
            "Diagnose": {
                "color": "gold",
                "label": "Di"
            },
            "Engorda na seca": {
                "color": "moccasin",
                "label": "En"
            },
            "Engorda nas águas": {
                "color": "beige",
                "label": "Ea"
            },
            "Gestação na seca": {
                "color": "burlywood",
                "label": "Ge"
            },
            "Gestação nas águas": {
                "color": "deeppink",
                "label": "Ge"
            },
            "Monta": {
                "color": "magenta",
                "label": "Mo"
            },
            "Puerpério": {
                "color": "yellow",
                "label": "Pu"
            },
            "Recria na seca": {
                "color": "khaki",
                "label": "Se"
            },
            "Recria nas águas": {
                "color": "darkkhaki",
                "label": "Ag"
            },
            "Reserva na seca": {
                "color": "aquamarine",
                "label": "Re"
            },
            "Reserva nas águas": {
                "color": "mediumaquamarine",
                "label": "Re"
            },
            "Confinamento": {
                "color": "cyan",
                "label": "Te"
            },
            "Venda": {
                "color": "salmon",
                "label": "Ve"
            }
        },
        "stock": null,
        "categoriesResourceHierarchy": {
            "BEZERRAS": "FEMEAS",
            "BEZERROS": "MACHOS",
            "MULTIPARAS": "MATRIZES",
            "PRIMIPARAS": "MATRIZES",
            "NULIPARAS": "MATRIZES",
            "MATRIZES": "FEMEAS",
            "FEMEAS": "BOVINOS",
            "MACHOS": "BOVINOS"
        },
        "calculatedIndicators": null,
        "indicatorsToCalculate": null,
        "indicatorParameters": {	
            "Lucratividade (R$/ha/ano)": 
            {
                "default" : [
                    "PRENHEZ"
                ],
                "other" : [
                    "CICLO",	
                    "CONFINAMENTO",
                    "DIAGNOSE",
                    "INICIO_AGUAS",
                    "PARTO_MACHO",
                ],
                    
            },
            "Receita Líquida Anual":
            {
                "other" : [
                    "INICIO_AGUAS",
                    "PARTO_MACHO",
                    "PRENHEZ"
                ],
                "default" : [
                    "NATALIDADE",
                    "CICLO",	
                    "DIAGNOSE"
                ]
            
            },
            "Toneladas de Carne Produzidas por Ano": 
            {
                "other" : [
                    "CONFINAMENTO",	
                    "DIAGNOSE",
                    "INICIO_AGUAS",
                    "MONTA",
                    "AGUAS"
                    ],
                "default" : [
                    "CICLO",
                    "NATALIDADE",
                    "PARTO_MACHO"
                ]
            }
        }
    },
    "resultQuery": null,

}

const sim72 = {
    "idSimulation": "68ca096d-4702-496e-8284-fc5f827ecc7f",
    "idSystem": 72,
    "idModel": 18,
    "simulationData": {
        "ARROBA": 15,
        "graph": {
            "nodes": {
                "n_1_VeBg_Venda de bois gordos.": {
                    "formula": "CONFINAMENTO+INICIO_AGUAS",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "n_2_TeBm_Terminação em confinamento de bois magros.-n_1_VeBg_Venda de bois gordos."
                    ],
                    "duration": 200,
                    "type": "terminal_saida_producao"
                },
                "n_2_TeBm_Terminação em confinamento de bois magros.": {
                    "formula": "CONFINAMENTO",
                    "stages": [
                        "Confinamento"
                    ],
                    "flows": [
                        "n_2_TeBm_Terminação em confinamento de bois magros.-n_1_VeBg_Venda de bois gordos.",
                        "n_3_AgBo_Recria nas águas de bezerros.-n_2_TeBm_Terminação em confinamento de bois magros."
                    ],
                    "duration": 110,
                    "type": "est_producao"
                },
                "n_3_AgBo_Recria nas águas de bezerros.": {
                    "formula": "AGUAS",
                    "stages": [
                        "Recria nas águas"
                    ],
                    "flows": [
                        "n_3_AgBo_Recria nas águas de bezerros.-n_2_TeBm_Terminação em confinamento de bois magros.",
                        "n_8_SeBo_Recria na seca de bezerros.-n_3_AgBo_Recria nas águas de bezerros."
                    ],
                    "duration": 212,
                    "type": "est_producao"
                },
                "n_8_SeBo_Recria na seca de bezerros.": {
                    "formula": "SECA",
                    "stages": [
                        "Recria na seca"
                    ],
                    "flows": [
                        "n_8_SeBo_Recria na seca de bezerros.-n_3_AgBo_Recria nas águas de bezerros.",
                        "b_12_1_Bo_Balanço de bezerros desmamados.-n_8_SeBo_Recria na seca de bezerros."
                    ],
                    "duration": 153,
                    "type": "est_producao"
                },
                "b_12_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "0",
                    "stages": [
                        "Balanço"
                    ],
                    "flows": [
                        "b_12_1_Bo_Balanço de bezerros desmamados.-n_8_SeBo_Recria na seca de bezerros.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-b_12_1_Bo_Balanço de bezerros desmamados.",
                        "s_53_1_Bo_Balanço de bezerros desmamados.-b_12_1_Bo_Balanço de bezerros desmamados.",
                        "b_12_1_Bo_Balanço de bezerros desmamados.-n_90_VeBo_Venda de bezerros desmamados."
                    ],
                    "duration": 0,
                    "type": "est_reuso"
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Aleitamento"
                    ],
                    "flows": [
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-b_12_1_Bo_Balanço de bezerros desmamados.",
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-n_16_AlMp_Aleitamento de multíparas prenhes.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-n_18_ReMs_Reserva na seca de multíparas.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_20_10_GeMs_Gestação na seca de multíparas solteiras.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_21_4_EnMs_Engorda na seca de multíparas."
                    ],
                    "duration": 31,
                    "type": "est_producao"
                },
                "n_17_DiMp_Diagnose de prenhez de multíparas paridas.": {
                    "formula": "DIAGNOSE",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-n_16_AlMp_Aleitamento de multíparas prenhes.",
                        "n_25_MoMp_Monta de multíparas paridas.-n_17_DiMp_Diagnose de prenhez de multíparas paridas.",
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras.",
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas."
                    ],
                    "duration": 59,
                    "type": "est_producao"
                },
                "n_25_MoMp_Monta de multíparas paridas.": {
                    "formula": "MONTA",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "n_25_MoMp_Monta de multíparas paridas.-n_17_DiMp_Diagnose de prenhez de multíparas paridas.",
                        "n_35_PuMp_Puerpério de multíparas.-n_25_MoMp_Monta de multíparas paridas.",
                        "n_25_MoMp_Monta de multíparas paridas.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras."
                    ],
                    "duration": 92,
                    "type": "est_producao"
                },
                "n_35_PuMp_Puerpério de multíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Puerpério"
                    ],
                    "flows": [
                        "n_35_PuMp_Puerpério de multíparas.-n_25_MoMp_Monta de multíparas paridas.",
                        "b_42_3_Mp_Balanço de multíparas paridas.-n_35_PuMp_Puerpério de multíparas.",
                        "n_35_PuMp_Puerpério de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras.",
                        "n_35_PuMp_Puerpério de multíparas.-n_44_AlMv_Aleitamento de multíparas vazias."
                    ],
                    "duration": 30,
                    "type": "est_producao"
                },
                "b_42_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "0",
                    "stages": [
                        "Balanço"
                    ],
                    "flows": [
                        "b_42_3_Mp_Balanço de multíparas paridas.-n_35_PuMp_Puerpério de multíparas.",
                        "n_48_GePs_Gestação na seca de primíparas solteiras.-b_42_3_Mp_Balanço de multíparas paridas.",
                        "b_42_3_Mp_Balanço de multíparas paridas.-n_208_VeMp_Venda de multíparas paridas excedentes.",
                        "s_92_3_Mp_Balanço de multíparas paridas.-b_42_3_Mp_Balanço de multíparas paridas."
                    ],
                    "duration": 0,
                    "type": "est_reuso"
                },
                "n_48_GePs_Gestação na seca de primíparas solteiras.": {
                    "formula": "SECA",
                    "stages": [
                        "Gestação na seca"
                    ],
                    "flows": [
                        "n_48_GePs_Gestação na seca de primíparas solteiras.-b_42_3_Mp_Balanço de multíparas paridas.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-n_48_GePs_Gestação na seca de primíparas solteiras.",
                        "n_48_GePs_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento."
                    ],
                    "duration": 153,
                    "type": "est_producao"
                },
                "n_59_AlPp_Aleitamento de primíparas prenhes.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Aleitamento"
                    ],
                    "flows": [
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-n_48_GePs_Gestação na seca de primíparas solteiras.",
                        "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-n_59_AlPp_Aleitamento de primíparas prenhes.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_53_1_Bo_Balanço de bezerros desmamados.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_72_14_RePs_Reserva na seca de primíparas falhadas."
                    ],
                    "duration": 31,
                    "type": "est_producao"
                },
                "n_69_DiPp_Diagnose de prenhez de primíparas paridas.": {
                    "formula": "DIAGNOSE",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-n_59_AlPp_Aleitamento de primíparas prenhes.",
                        "n_85_MoPp_Monta de primíparas paridas.-n_69_DiPp_Diagnose de prenhez de primíparas paridas.",
                        "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras."
                    ],
                    "duration": 59,
                    "type": "est_producao"
                },
                "n_85_MoPp_Monta de primíparas paridas.": {
                    "formula": "MONTA",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "n_85_MoPp_Monta de primíparas paridas.-n_69_DiPp_Diagnose de prenhez de primíparas paridas.",
                        "n_101_PuPp_Puerpério de primíparas.-n_85_MoPp_Monta de primíparas paridas.",
                        "n_85_MoPp_Monta de primíparas paridas.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras."
                    ],
                    "duration": 92,
                    "type": "est_producao"
                },
                "n_101_PuPp_Puerpério de primíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Puerpério"
                    ],
                    "flows": [
                        "n_101_PuPp_Puerpério de primíparas.-n_85_MoPp_Monta de primíparas paridas.",
                        "n_112_GeNu_Gestação na seca de nulíparas.-n_101_PuPp_Puerpério de primíparas.",
                        "n_101_PuPp_Puerpério de primíparas.-s_169_12_MoPs_Monta de primíparas solteiras."
                    ],
                    "duration": 30,
                    "type": "est_producao"
                },
                "n_112_GeNu_Gestação na seca de nulíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Gestação na seca"
                    ],
                    "flows": [
                        "n_112_GeNu_Gestação na seca de nulíparas.-n_101_PuPp_Puerpério de primíparas.",
                        "n_112_GaNu_Gestação nas águas de nulíparas.-n_112_GeNu_Gestação na seca de nulíparas.",
                        "n_112_GeNu_Gestação na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas."
                    ],
                    "duration": 153,
                    "type": "est_producao"
                },
                "n_112_GaNu_Gestação nas águas de nulíparas.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Gestação na seca"
                    ],
                    "flows": [
                        "n_112_GaNu_Gestação nas águas de nulíparas.-n_112_GeNu_Gestação na seca de nulíparas.",
                        "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_112_GaNu_Gestação nas águas de nulíparas.",
                        "n_112_GaNu_Gestação nas águas de nulíparas.-s_118_13_EnNu_Engorda na seca de nulíparas."
                    ],
                    "duration": 31,
                    "type": "est_producao"
                },
                "n_117_DiNu_Diagnose de prenhez de nulíparas.": {
                    "formula": "DIAGNOSE",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_112_GaNu_Gestação nas águas de nulíparas.",
                        "n_128_MoNu_Monta de nulíparas.-n_117_DiNu_Diagnose de prenhez de nulíparas.",
                        "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_129_EaNu1_Engorda nas águas de nulíparas falhadas."
                    ],
                    "duration": 59,
                    "type": "est_producao"
                },
                "n_128_MoNu_Monta de nulíparas.": {
                    "formula": "MONTA",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "n_128_MoNu_Monta de nulíparas.-n_117_DiNu_Diagnose de prenhez de nulíparas.",
                        "n_138_AgNu_Recria nas águas de nulíparas.-n_128_MoNu_Monta de nulíparas."
                    ],
                    "duration": 92,
                    "type": "est_producao"
                },
                "n_138_AgNu_Recria nas águas de nulíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Recria nas águas"
                    ],
                    "flows": [
                        "n_138_AgNu_Recria nas águas de nulíparas.-n_128_MoNu_Monta de nulíparas.",
                        "n_156_SeNu_Recria na seca de nulíparas.-n_138_AgNu_Recria nas águas de nulíparas."
                    ],
                    "duration": 30,
                    "type": "est_producao"
                },
                "n_156_SeNu_Recria na seca de nulíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Recria na seca"
                    ],
                    "flows": [
                        "n_156_SeNu_Recria na seca de nulíparas.-n_138_AgNu_Recria nas águas de nulíparas.",
                        "n_173_AgBa_Recria nas águas de bezerras.-n_156_SeNu_Recria na seca de nulíparas."
                    ],
                    "duration": 153,
                    "type": "est_producao"
                },
                "n_173_AgBa_Recria nas águas de bezerras.": {
                    "formula": "AGUAS",
                    "stages": [
                        "Recria nas águas"
                    ],
                    "flows": [
                        "n_173_AgBa_Recria nas águas de bezerras.-n_156_SeNu_Recria na seca de nulíparas.",
                        "n_185_SeBa_Recria na seca de bezerras.-n_173_AgBa_Recria nas águas de bezerras."
                    ],
                    "duration": 212,
                    "type": "est_producao"
                },
                "n_185_SeBa_Recria na seca de bezerras.": {
                    "formula": "SECA",
                    "stages": [
                        "Recria na seca"
                    ],
                    "flows": [
                        "n_185_SeBa_Recria na seca de bezerras.-n_173_AgBa_Recria nas águas de bezerras.",
                        "b_71_2_Ba_Balanço de bezerras desmamadas.-n_185_SeBa_Recria na seca de bezerras."
                    ],
                    "duration": 153,
                    "type": "est_producao"
                },
                "b_71_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "b_71_2_Ba_Balanço de bezerras desmamadas.-n_185_SeBa_Recria na seca de bezerras.",
                        "n_207_CoBa_Compra de bezerras desmamadas-b_71_2_Ba_Balanço de bezerras desmamadas.",
                        "b_71_2_Ba_Balanço de bezerras desmamadas.-n_91_VeBa_Venda de bezerras desmamadas.",
                        "s_19_2_Ba_Balanço de bezerras desmamadas.-b_71_2_Ba_Balanço de bezerras desmamadas."
                    ],
                    "duration": 0,
                    "type": "est_reuso"
                },
                "n_207_CoBa_Compra de bezerras desmamadas": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_207_CoBa_Compra de bezerras desmamadas-b_71_2_Ba_Balanço de bezerras desmamadas."
                    ],
                    "duration": 0,
                    "type": "est_producao"
                },
                "n_129_EaNu1_Engorda nas águas de nulíparas falhadas.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Engorda nas águas"
                    ],
                    "flows": [
                        "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_129_EaNu1_Engorda nas águas de nulíparas falhadas.",
                        "n_129_EaNu1_Engorda nas águas de nulíparas falhadas.-s_118_13_EnNu_Engorda na seca de nulíparas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "s_118_13_EnNu_Engorda na seca de nulíparas.": {
                    "formula": "0",
                    "stages": [
                        "Engorda na seca"
                    ],
                    "flows": [
                        "n_129_EaNu1_Engorda nas águas de nulíparas falhadas.-s_118_13_EnNu_Engorda na seca de nulíparas.",
                        "s_118_13_EnNu_Engorda na seca de nulíparas.-n_144_EnNu_Engorda na seca de nulíparas.",
                        "n_112_GaNu_Gestação nas águas de nulíparas.-s_118_13_EnNu_Engorda na seca de nulíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_144_EnNu_Engorda na seca de nulíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Engorda na seca"
                    ],
                    "flows": [
                        "s_118_13_EnNu_Engorda na seca de nulíparas.-n_144_EnNu_Engorda na seca de nulíparas.",
                        "n_144_EnNu_Engorda na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "s_118_13_EaNu2_Engorda nas águas de nulíparas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_144_EnNu_Engorda na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas.",
                        "s_118_13_EaNu2_Engorda nas águas de nulíparas.-n_144_EnNu2_Engorda nas águas de nulíparas.",
                        "n_112_GeNu_Gestação na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_144_EnNu2_Engorda nas águas de nulíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Engorda nas águas"
                    ],
                    "flows": [
                        "s_118_13_EaNu2_Engorda nas águas de nulíparas.-n_144_EnNu2_Engorda nas águas de nulíparas.",
                        "n_144_EnNu2_Engorda nas águas de nulíparas.-n_162_VeNg_Venda de nulíparas gordas."
                    ],
                    "duration": 30,
                    "type": "est_tratamento"
                },
                "n_162_VeNg_Venda de nulíparas gordas.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "n_144_EnNu2_Engorda nas águas de nulíparas.-n_162_VeNg_Venda de nulíparas gordas."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                },
                "s_169_12_MoPs_Monta de primíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_101_PuPp_Puerpério de primíparas.-s_169_12_MoPs_Monta de primíparas solteiras.",
                        "s_169_12_MoPs_Monta de primíparas solteiras.-n_113_MoPs_Monta de primíparas solteiras.",
                        "n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.-s_169_12_MoPs_Monta de primíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_113_MoPs_Monta de primíparas solteiras.": {
                    "formula": "MONTA",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "s_169_12_MoPs_Monta de primíparas solteiras.-n_113_MoPs_Monta de primíparas solteiras.",
                        "n_113_MoPs_Monta de primíparas solteiras.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras."
                    ],
                    "duration": 92,
                    "type": "est_tratamento"
                },
                "s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "n_113_MoPs_Monta de primíparas solteiras.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.",
                        "s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.-n_122_DiPs_Diagnose de prenhez de primíparas solteiras.",
                        "n_85_MoPp_Monta de primíparas paridas.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.": {
                    "formula": "DIAGNOSE",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.-n_122_DiPs_Diagnose de prenhez de primíparas solteiras.",
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras.",
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_134_RaPs1_Reserva nas águas de primíparas falhadas.",
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_190_EaPs1_Engorda nas águas de primíparas falhadas."
                    ],
                    "duration": 59,
                    "type": "est_tratamento"
                },
                "s_86_11_GaPs_Gestação nas águas de primíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "Gestação nas águas"
                    ],
                    "flows": [
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras.",
                        "s_86_11_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GaPs_Gestação nas águas de primíparas solteiras.",
                        "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_133_GaPs_Gestação nas águas de primíparas solteiras.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Gestação nas águas"
                    ],
                    "flows": [
                        "s_86_11_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GaPs_Gestação nas águas de primíparas solteiras.",
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GePs1_Gestação na seca de primíparas solteiras.",
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_72_14_RePs_Reserva na seca de primíparas falhadas.",
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_199_17_EnPs_Engorda na seca de primíparas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "n_133_GePs1_Gestação na seca de primíparas solteiras.": {
                    "formula": "SECA",
                    "stages": [
                        "Gestação nas águas"
                    ],
                    "flows": [
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GePs1_Gestação na seca de primíparas solteiras.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_199_17_EaPs2_Engorda nas águas de primíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "n_134_RaPs1_Reserva nas águas de primíparas falhadas.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Reserva nas águas"
                    ],
                    "flows": [
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_134_RaPs1_Reserva nas águas de primíparas falhadas.",
                        "n_134_RaPs1_Reserva nas águas de primíparas falhadas.-s_72_14_RePs_Reserva na seca de primíparas falhadas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "s_72_14_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_134_RaPs1_Reserva nas águas de primíparas falhadas.-s_72_14_RePs_Reserva na seca de primíparas falhadas.",
                        "s_72_14_RePs_Reserva na seca de primíparas falhadas.-n_152_RePs_Reserva na seca de primíparas falhadas.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_72_14_RePs_Reserva na seca de primíparas falhadas.",
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_72_14_RePs_Reserva na seca de primíparas falhadas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_152_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "SECA",
                    "stages": [
                        "Reserva na seca"
                    ],
                    "flows": [
                        "s_72_14_RePs_Reserva na seca de primíparas falhadas.-n_152_RePs_Reserva na seca de primíparas falhadas.",
                        "n_152_RePs_Reserva na seca de primíparas falhadas.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_152_RePs_Reserva na seca de primíparas falhadas.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.",
                        "s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.-n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.",
                        "n_48_GePs_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Reserva nas águas"
                    ],
                    "flows": [
                        "s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.-n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.",
                        "n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.-s_169_12_MoPs_Monta de primíparas solteiras."
                    ],
                    "duration": 30,
                    "type": "est_tratamento"
                },
                "n_190_EaPs1_Engorda nas águas de primíparas falhadas.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Engorda nas águas"
                    ],
                    "flows": [
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_190_EaPs1_Engorda nas águas de primíparas falhadas.",
                        "n_190_EaPs1_Engorda nas águas de primíparas falhadas.-s_199_17_EnPs_Engorda na seca de primíparas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "s_199_17_EnPs_Engorda na seca de primíparas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_190_EaPs1_Engorda nas águas de primíparas falhadas.-s_199_17_EnPs_Engorda na seca de primíparas.",
                        "s_199_17_EnPs_Engorda na seca de primíparas.-n_203_EnPs_Engorda na seca de primíparas.",
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_199_17_EnPs_Engorda na seca de primíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_203_EnPs_Engorda na seca de primíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Engorda na seca"
                    ],
                    "flows": [
                        "s_199_17_EnPs_Engorda na seca de primíparas.-n_203_EnPs_Engorda na seca de primíparas.",
                        "n_203_EnPs_Engorda na seca de primíparas.-s_199_17_EaPs2_Engorda nas águas de primíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "s_199_17_EaPs2_Engorda nas águas de primíparas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_203_EnPs_Engorda na seca de primíparas.-s_199_17_EaPs2_Engorda nas águas de primíparas.",
                        "s_199_17_EaPs2_Engorda nas águas de primíparas.-n_203_EaPs2_Engorda nas águas de primíparas.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_199_17_EaPs2_Engorda nas águas de primíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_203_EaPs2_Engorda nas águas de primíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Engorda na seca"
                    ],
                    "flows": [
                        "s_199_17_EaPs2_Engorda nas águas de primíparas.-n_203_EaPs2_Engorda nas águas de primíparas.",
                        "n_203_EaPs2_Engorda nas águas de primíparas.-n_209_VePg_Venda de primíparas solteiras vazias gordas."
                    ],
                    "duration": 30,
                    "type": "est_tratamento"
                },
                "n_209_VePg_Venda de primíparas solteiras vazias gordas.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "n_203_EaPs2_Engorda nas águas de primíparas.-n_209_VePg_Venda de primíparas solteiras vazias gordas."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                },
                "n_44_AlMv_Aleitamento de multíparas vazias.": {
                    "formula": "AGUAS-PUERPERIO",
                    "stages": [
                        "Aleitamento"
                    ],
                    "flows": [
                        "n_35_PuMp_Puerpério de multíparas.-n_44_AlMv_Aleitamento de multíparas vazias.",
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_53_1_Bo_Balanço de bezerros desmamados.",
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_19_2_Ba_Balanço de bezerras desmamadas.",
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_21_4_EnMs_Engorda na seca de multíparas."
                    ],
                    "duration": 182,
                    "type": "est_tratamento"
                },
                "s_31_7_MoMs_Monta de multíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "n_35_PuMp_Puerpério de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras.",
                        "s_31_7_MoMs_Monta de multíparas solteiras.-n_43_MoMs_Monta de multíparas solteiras.",
                        "n_18_RaMs_Reserva nas águas de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_43_MoMs_Monta de multíparas solteiras.": {
                    "formula": "MONTA",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "s_31_7_MoMs_Monta de multíparas solteiras.-n_43_MoMs_Monta de multíparas solteiras.",
                        "n_43_MoMs_Monta de multíparas solteiras.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras."
                    ],
                    "duration": 92,
                    "type": "est_tratamento"
                },
                "s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "n_43_MoMs_Monta de multíparas solteiras.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.",
                        "s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.-n_49_DiMs_Diagnose de prenhez de multíparas solteiras.",
                        "n_25_MoMp_Monta de multíparas paridas.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "est_tratamento"
                },
                "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.": {
                    "formula": "DIAGNOSE",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.-n_49_DiMs_Diagnose de prenhez de multíparas solteiras.",
                        "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras.",
                        "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas."
                    ],
                    "duration": 59,
                    "type": "est_tratamento"
                },
                "s_26_9_GaMs_Gestação nas águas de multíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras.",
                        "s_26_9_GaMs_Gestação nas águas de multíparas solteiras.-n_64_GaMs_Gestação nas águas de multíparas solteiras.",
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_64_GaMs_Gestação nas águas de multíparas solteiras.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Gestação nas águas"
                    ],
                    "flows": [
                        "s_26_9_GaMs_Gestação nas águas de multíparas solteiras.-n_64_GaMs_Gestação nas águas de multíparas solteiras.",
                        "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_20_10_GeMs_Gestação na seca de multíparas solteiras.",
                        "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_21_4_EnMs_Engorda na seca de multíparas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "s_20_10_GeMs_Gestação na seca de multíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "Gestação na seca"
                    ],
                    "flows": [
                        "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_20_10_GeMs_Gestação na seca de multíparas solteiras.",
                        "s_20_10_GeMs_Gestação na seca de multíparas solteiras.-n_76_GeMs_Gestação na seca de multíparas solteiras.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_20_10_GeMs_Gestação na seca de multíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_76_GeMs_Gestação na seca de multíparas solteiras.": {
                    "formula": "SECA",
                    "stages": [
                        "Gestação na seca"
                    ],
                    "flows": [
                        "s_20_10_GeMs_Gestação na seca de multíparas solteiras.-n_76_GeMs_Gestação na seca de multíparas solteiras.",
                        "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas.",
                        "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_93_5_EaMs2_Engorda nas águas de multíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.",
                        "s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.-n_65_EaMs1_Engorda nas águas de multíparas falhadas.",
                        "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_65_EaMs1_Engorda nas águas de multíparas falhadas.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Engorda nas águas"
                    ],
                    "flows": [
                        "s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.-n_65_EaMs1_Engorda nas águas de multíparas falhadas.",
                        "n_65_EaMs1_Engorda nas águas de multíparas falhadas.-s_21_4_EnMs_Engorda na seca de multíparas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "s_21_4_EnMs_Engorda na seca de multíparas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_65_EaMs1_Engorda nas águas de multíparas falhadas.-s_21_4_EnMs_Engorda na seca de multíparas.",
                        "s_21_4_EnMs_Engorda na seca de multíparas.-n_81_EnMs_Engorda na seca de multíparas.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_21_4_EnMs_Engorda na seca de multíparas.",
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_21_4_EnMs_Engorda na seca de multíparas.",
                        "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_21_4_EnMs_Engorda na seca de multíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_81_EnMs_Engorda na seca de multíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Engorda na seca"
                    ],
                    "flows": [
                        "s_21_4_EnMs_Engorda na seca de multíparas.-n_81_EnMs_Engorda na seca de multíparas.",
                        "n_81_EnMs_Engorda na seca de multíparas.-s_93_5_EaMs2_Engorda nas águas de multíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "s_93_5_EaMs2_Engorda nas águas de multíparas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_81_EnMs_Engorda na seca de multíparas.-s_93_5_EaMs2_Engorda nas águas de multíparas.",
                        "s_93_5_EaMs2_Engorda nas águas de multíparas.-n_97_EaMs2_Engorda nas águas de multíparas.",
                        "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_93_5_EaMs2_Engorda nas águas de multíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_97_EaMs2_Engorda nas águas de multíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Engorda nas águas"
                    ],
                    "flows": [
                        "s_93_5_EaMs2_Engorda nas águas de multíparas.-n_97_EaMs2_Engorda nas águas de multíparas.",
                        "n_97_EaMs2_Engorda nas águas de multíparas.-n_108_VeMg_Venda de multíparas solteiras vazias gordas."
                    ],
                    "duration": 30,
                    "type": "est_tratamento"
                },
                "n_108_VeMg_Venda de multíparas solteiras vazias gordas.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "n_97_EaMs2_Engorda nas águas de multíparas.-n_108_VeMg_Venda de multíparas solteiras vazias gordas."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                },
                "n_18_ReMs_Reserva na seca de multíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Reserva na seca"
                    ],
                    "flows": [
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-n_18_ReMs_Reserva na seca de multíparas.",
                        "n_18_ReMs_Reserva na seca de multíparas.-n_18_RaMs_Reserva nas águas de multíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "n_18_RaMs_Reserva nas águas de multíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Reserva nas águas"
                    ],
                    "flows": [
                        "n_18_ReMs_Reserva na seca de multíparas.-n_18_RaMs_Reserva nas águas de multíparas.",
                        "n_18_RaMs_Reserva nas águas de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras."
                    ],
                    "duration": 30,
                    "type": "est_tratamento"
                },
                "s_53_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_53_1_Bo_Balanço de bezerros desmamados.",
                        "s_53_1_Bo_Balanço de bezerros desmamados.-b_12_1_Bo_Balanço de bezerros desmamados.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_53_1_Bo_Balanço de bezerros desmamados."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_90_VeBo_Venda de bezerros desmamados.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "b_12_1_Bo_Balanço de bezerros desmamados.-n_90_VeBo_Venda de bezerros desmamados."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                },
                "s_19_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.",
                        "s_19_2_Ba_Balanço de bezerras desmamadas.-b_71_2_Ba_Balanço de bezerras desmamadas.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.",
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_19_2_Ba_Balanço de bezerras desmamadas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_91_VeBa_Venda de bezerras desmamadas.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "b_71_2_Ba_Balanço de bezerras desmamadas.-n_91_VeBa_Venda de bezerras desmamadas."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                },
                "s_92_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas.",
                        "s_92_3_Mp_Balanço de multíparas paridas.-b_42_3_Mp_Balanço de multíparas paridas.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_208_VeMp_Venda de multíparas paridas excedentes.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "b_42_3_Mp_Balanço de multíparas paridas.-n_208_VeMp_Venda de multíparas paridas excedentes."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                }
            },
            "flows": {
                "n_2_TeBm_Terminação em confinamento de bois magros.-n_1_VeBg_Venda de bois gordos.": {
                    "formula": "PRODUCAO",
                    "resource": {
                        "name": "Bois gordos",
                        "unit": "cab",
                        "category": "BOVINOS"
                    },
                    "type": "Produção",
                    "factor": 438,
                    "day": 200,
                    "qty": 438
                },
                "n_3_AgBo_Recria nas águas de bezerros.-n_2_TeBm_Terminação em confinamento de bois magros.": {
                    "formula": "1/(1-PERDAS)^(CONFINAMENTO/CICLO)",
                    "resource": {
                        "name": "Bezerros recriados nas águas",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Produção",
                    "factor": 1.0030,
                    "day": 90,
                    "qty": 439.33
                },
                "n_8_SeBo_Recria na seca de bezerros.-n_3_AgBo_Recria nas águas de bezerros.": {
                    "formula": "1/(1-PERDAS)^(AGUAS/CICLO)",
                    "resource": {
                        "name": "Bezerros recriados na seca",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Produção",
                    "factor": 1.0059,
                    "day": -122,
                    "qty": 441.90
                },
                "b_12_1_Bo_Balanço de bezerros desmamados.-n_8_SeBo_Recria na seca de bezerros.": {
                    "formula": "1/(1-PERDAS)^(SECA/CICLO)",
                    "resource": {
                        "name": "Bezerros desmamados",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Produção",
                    "factor": 1.0042,
                    "day": -275,
                    "qty": 443.77
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.-b_12_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerros desmamados",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -275,
                    "qty": 443.77
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.-n_18_ReMs_Reserva na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas reservadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 443.77
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 443.77
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.-s_20_10_GeMs_Gestação na seca de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 443.77
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.-s_21_4_EnMs_Engorda na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 443.77
                },
                "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-n_16_AlMp_Aleitamento de multíparas prenhes.": {
                    "formula": "1/(PARTO_MACHO*(1-PERDAS_CRIA)^((AGUAS-PUERPERIO)/CICLO))",
                    "resource": {
                        "name": "Multíparas paridas prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Produção",
                    "factor": 2.0411,
                    "day": -306,
                    "qty": 905.78
                },
                "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 905.78
                },
                "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 905.78
                },
                "n_25_MoMp_Monta de multíparas paridas.-n_17_DiMp_Diagnose de prenhez de multíparas paridas.": {
                    "formula": "1/(PRENHEZ*(1-PERDAS)^(DIAGNOSE/CICLO))",
                    "resource": {
                        "name": "Multíparas paridas após a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1.1129,
                    "day": -365,
                    "qty": 1008.06
                },
                "n_25_MoMp_Monta de multíparas paridas.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras após a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -365,
                    "qty": 1008.06
                },
                "n_35_PuMp_Puerpério de multíparas.-n_25_MoMp_Monta de multíparas paridas.": {
                    "formula": "1/(1-PERDAS)^(MONTA/CICLO)",
                    "resource": {
                        "name": "Multíparas paridas para a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1.0025,
                    "day": -457,
                    "qty": 1010.62
                },
                "n_35_PuMp_Puerpério de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -457,
                    "qty": 1010.62
                },
                "n_35_PuMp_Puerpério de multíparas.-n_44_AlMv_Aleitamento de multíparas vazias.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas para a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -457,
                    "qty": 1010.62
                },
                "b_42_3_Mp_Balanço de multíparas paridas.-n_35_PuMp_Puerpério de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1.0008,
                    "day": -487,
                    "qty": 1011.45
                },
                "s_92_3_Mp_Balanço de multíparas paridas.-b_42_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -122,
                    "qty": 1011.45
                },
                "n_48_GePs_Gestação na seca de primíparas solteiras.-b_42_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -487,
                    "qty": 1011.45
                },
                "n_18_ReMs_Reserva na seca de multíparas.-n_18_RaMs_Reserva nas águas de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas reservadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -122,
                    "qty": 1010.62
                },
                "n_18_RaMs_Reserva nas águas de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -92,
                    "qty": 1010.62
                },
                "s_31_7_MoMs_Monta de multíparas solteiras.-n_43_MoMs_Monta de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -457,
                    "qty": 1010.62
                },
                "s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.-n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas reservadas.",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_43_MoMs_Monta de multíparas solteiras.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras após a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -365,
                    "qty": 1010.62
                },
                "n_44_AlMv_Aleitamento de multíparas vazias.-s_53_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerros desmamados",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_44_AlMv_Aleitamento de multíparas vazias.-s_19_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_44_AlMv_Aleitamento de multíparas vazias.-s_21_4_EnMs_Engorda na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "s_53_1_Bo_Balanço de bezerros desmamados.-b_12_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerros desmamados.",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_59_AlPp_Aleitamento de primíparas prenhes.-n_48_GePs_Gestação na seca de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.-n_49_DiMs_Diagnose de prenhez de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 1010.62
                },
                "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 1010.62
                },
                "s_26_9_GaMs_Gestação nas águas de multíparas solteiras.-n_64_GaMs_Gestação nas águas de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 1010.62
                },
                "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 1010.62
                },
                "s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.-n_65_EaMs1_Engorda nas águas de multíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 1010.62
                },
                "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-n_59_AlPp_Aleitamento de primíparas prenhes.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas paridas prenhes",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "n_59_AlPp_Aleitamento de primíparas prenhes.-s_53_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerros desmamados",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "s_19_2_Ba_Balanço de bezerras desmamadas.-b_71_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_59_AlPp_Aleitamento de primíparas prenhes.-s_72_14_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_20_10_GeMs_Gestação na seca de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "s_20_10_GeMs_Gestação na seca de multíparas solteiras.-n_76_GeMs_Gestação na seca de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_21_4_EnMs_Engorda na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_65_EaMs1_Engorda nas águas de multíparas falhadas.-s_21_4_EnMs_Engorda na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "s_21_4_EnMs_Engorda na seca de multíparas.-n_81_EnMs_Engorda na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_85_MoPp_Monta de primíparas paridas.-n_69_DiPp_Diagnose de prenhez de primíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas paridas após a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -730,
                    "qty": 1010.62
                },
                "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "b_12_1_Bo_Balanço de bezerros desmamados.-n_90_VeBo_Venda de bezerros desmamados.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerros desmamados",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "b_71_2_Ba_Balanço de bezerras desmamadas.-n_91_VeBa_Venda de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_59_AlPp_Aleitamento de primíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -122,
                    "qty": 1010.62
                },
                "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_93_5_EaMs2_Engorda nas águas de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -122,
                    "qty": 1010.62
                },
                "n_81_EnMs_Engorda na seca de multíparas.-s_93_5_EaMs2_Engorda nas águas de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "s_93_5_EaMs2_Engorda nas águas de multíparas.-n_97_EaMs2_Engorda nas águas de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.-s_169_12_MoPs_Monta de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -822,
                    "qty": 1010.62
                },
                "n_101_PuPp_Puerpério de primíparas.-s_169_12_MoPs_Monta de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -822,
                    "qty": 1010.62
                },
                "n_101_PuPp_Puerpério de primíparas.-n_85_MoPp_Monta de primíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas paridas para a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -822,
                    "qty": 1010.62
                },
                "s_169_12_MoPs_Monta de primíparas solteiras.-n_113_MoPs_Monta de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -822,
                    "qty": 1010.62
                },
                "n_85_MoPp_Monta de primíparas paridas.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas paridas após a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -730,
                    "qty": 1010.62
                },
                "n_97_EaMs2_Engorda nas águas de multíparas.-n_108_VeMg_Venda de multíparas solteiras vazias gordas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas gordas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -92,
                    "qty": 1010.62
                },
                "n_112_GeNu_Gestação na seca de nulíparas.-n_101_PuPp_Puerpério de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas paridas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_112_GaNu_Gestação nas águas de nulíparas.-s_118_13_EnNu_Engorda na seca de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas prenhes",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1005,
                    "qty": 1010.62
                },
                "n_112_GaNu_Gestação nas águas de nulíparas.-n_112_GeNu_Gestação na seca de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas prenhes",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1005,
                    "qty": 1010.62
                },
                "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_112_GaNu_Gestação nas águas de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas prenhes",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1036,
                    "qty": 1010.62
                },
                "n_129_EaNu1_Engorda nas águas de nulíparas falhadas.-s_118_13_EnNu_Engorda na seca de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1005,
                    "qty": 1010.62
                },
                "n_112_GeNu_Gestação na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_113_MoPs_Monta de primíparas solteiras.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras após a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": 1096,
                    "qty": 1010.62
                },
                "n_128_MoNu_Monta de nulíparas.-n_117_DiNu_Diagnose de prenhez de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas após a monta",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1095,
                    "qty": 1010.62
                },
                "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_129_EaNu1_Engorda nas águas de nulíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1036,
                    "qty": 1010.62
                },
                "s_86_11_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GaPs_Gestação nas águas de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.-n_122_DiPs_Diagnose de prenhez de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras após a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_134_RaPs1_Reserva nas águas de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_190_EaPs1_Engorda nas águas de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "n_138_AgNu_Recria nas águas de nulíparas.-n_128_MoNu_Monta de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas para a monta",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1187,
                    "qty": 1010.62
                },
                "s_118_13_EnNu_Engorda na seca de nulíparas.-n_144_EnNu_Engorda na seca de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_133_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GePs1_Gestação na seca de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes.",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_72_14_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes.",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_199_17_EnPs_Engorda na seca de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes.",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas reservadas.",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_199_17_EaPs2_Engorda nas águas de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas.",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_134_RaPs1_Reserva nas águas de primíparas falhadas.-s_72_14_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "s_72_14_RePs_Reserva na seca de primíparas falhadas.-n_152_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_156_SeNu_Recria na seca de nulíparas.-n_138_AgNu_Recria nas águas de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas recriadas na seca",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1217,
                    "qty": 1010.62
                },
                "n_144_EnNu_Engorda na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "s_118_13_EaNu2_Engorda nas águas de nulíparas.-n_144_EnNu2_Engorda nas águas de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_144_EnNu2_Engorda nas águas de nulíparas.-n_162_VeNg_Venda de nulíparas gordas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas gordas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -822,
                    "qty": 1010.62
                },
                "n_48_GePs_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_152_RePs_Reserva na seca de primíparas falhadas.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_173_AgBa_Recria nas águas de bezerras.-n_156_SeNu_Recria na seca de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras recriadas nas águas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1370,
                    "qty": 1010.62
                },
                "n_185_SeBa_Recria na seca de bezerras.-n_173_AgBa_Recria nas águas de bezerras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras recriadas na seca",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1582,
                    "qty": 1010.62
                },
                "b_71_2_Ba_Balanço de bezerras desmamadas.-n_185_SeBa_Recria na seca de bezerras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1735,
                    "qty": 1010.62
                },
                "n_190_EaPs1_Engorda nas águas de primíparas falhadas.-s_199_17_EnPs_Engorda na seca de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas descartadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "s_199_17_EnPs_Engorda na seca de primíparas.-n_203_EnPs_Engorda na seca de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas descartadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_207_CoBa_Compra de bezerras desmamadas-b_71_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1735,
                    "qty": 1010.62
                },
                "b_42_3_Mp_Balanço de multíparas paridas.-n_208_VeMp_Venda de multíparas paridas excedentes.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_203_EnPs_Engorda na seca de primíparas.-s_199_17_EaPs2_Engorda nas águas de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas gordas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "s_199_17_EaPs2_Engorda nas águas de primíparas.-n_203_EaPs2_Engorda nas águas de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas descartadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_203_EaPs2_Engorda nas águas de primíparas.-n_209_VePg_Venda de primíparas solteiras vazias gordas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas gordas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -457,
                    "qty": 1010.62
                }
            },
            "idModel": 18,
            "root": "n_1_VeBg_Venda de bois gordos.",
            "nodeOne": "n_2_TeBm_Terminação em confinamento de bois magros."
        },
        "parameters": {
            "AGUAS": 212,
            "CICLO": 365,
            "CONFINAMENTO": 110,
            "DIAGNOSE": 59,
            "INICIO_AGUAS": 90,
            "MONTA": 92,
            "NATALIDADE": 0.80,
            "PARTO_MACHO": 0.50,
            "PERDAS": 0.01,
            "PERDAS_CRIA": 0.03,
            "PRENHEZ": 0.90,
            "PRODUCAO": 438,
            "PUERPERIO": 30
        },
        "systemParameters": {
            "AGUAS": { "min": 200, "std": 210, "max": 220 },
            "CICLO": { "min": 300, "std": 330, "max": 365 },
            "CONFINAMENTO": { "min": 100, "std": 110, "max": 120 },
            "INICIO_AGUAS": { "min": 80, "std": 90, "max": 100 },
            "DIAGNOSE": { "min": 30, "std": 60, "max": 90 },
            "PARTO_MACHO": { "min": 0.4, "std": 0.5, "max": 0.9 },
            "MONTA": { "min": 60, "std": 90, "max": 120 },
            "NATALIDADE": { "min": 0.50, "std": 0.80, "max": 1.00 },
            "PERDAS": { "min": 0.0, "std": 0.01, "max": 0.05 },
            "PERDAS_CRIA": { "min": 0.0, "std": 0.03, "max": 0.10 },
            "PRENHEZ": { "min": 0.50, "std": 0.80, "max": 1.00 },
            "PRODUCAO": { "min": 300, "std": 400, "max": 500 },
            "PUERPERIO": { "min": 25, "std": 30, "max": 40 }
        },
        "calculatedParameters": {
            "FIM_AGUAS": "AGUAS-DIAGNOSE-MONTA-PUERPERIO",
            "SECA": "CICLO-AGUAS"
        },
        "formulas": {
            "nodes": [
                "AGUAS",
                "AGUAS-PUERPERIO",
                "CONFINAMENTO",
                "CONFINAMENTO+INICIO_AGUAS",
                "DIAGNOSE",
                "MONTA",
                "PUERPERIO",
                "SECA"
            ],
            "flows": [
                "1",
                "PRODUCAO",
                "1/(1-PERDAS)^(AGUAS/CICLO)",
                "1/(1-PERDAS)^(CONFINAMENTO/CICLO)",
                "1/(1-PERDAS)^(MONTA/CICLO)",
                "1/(1-PERDAS)^(SECA/CICLO)",
                "1/(PARTO_MACHO*(1-PERDAS_CRIA)^((AGUAS-PUERPERIO)/CICLO))",
                "1/(PRENHEZ*(1-PERDAS)^(DIAGNOSE/CICLO))"
            ]
        },
        "resources": {
            "Bezerras desmamadas": {
                "unit": "cab",
                "category": "BEZERRAS"
            },
            "Bezerras recriadas nas águas": {
                "unit": "cab",
                "category": "BEZERRAS"
            },
            "Bezerras recriadas na seca": {
                "unit": "cab",
                "category": "BEZERRAS"
            },

            "Bezerros desmamados": {
                "unit": "cab",
                "category": "BEZERROS"
            },
            "Bezerros recriados nas águas": {
                "unit": "cab",
                "category": "BEZERROS"
            },
            "Bezerros recriados na seca": {
                "unit": "cab",
                "category": "BEZERROS"
            },

            "Bois gordos": {
                "unit": "cab",
                "category": "MACHOS"
            },

            "Multíparas descartadas": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas gordas": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas paridas": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas paridas após a monta": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas paridas para a monta": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas paridas prenhes": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas reservadas": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas solteiras após a monta": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas solteiras para a monta": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas solteiras prenhes": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },

            "Nulíparas após a monta": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas descartadas": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas gordas": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas para a monta": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas prenhes": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas recriadas na seca": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas recriadas nas águas": {
                "unit": "cab",
                "category": "NULIPARAS"
            },

            "Primíparas descartadas": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas gordas": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas paridas": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas paridas após a monta": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas paridas para a monta": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas paridas prenhes": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas reservadas": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas solteiras após a monta": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas solteiras para a monta": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas solteiras prenhes": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            }
        },
        "stagesHierarchy": {
            "(nenhuma)": {
                "color": "white",
                "label": null
            },
            "Aleitamento": {
                "color": "powderblue",
                "label": "Al"
            },
            "Balanço": {
                "color": "black",
                "label": null
            },
            "Compra": {
                "color": "lightgrey",
                "label": "Ve"
            },
            "Diagnose": {
                "color": "gold",
                "label": "Di"
            },
            "Engorda na seca": {
                "color": "moccasin",
                "label": "En"
            },
            "Engorda nas águas": {
                "color": "beige",
                "label": "Ea"
            },
            "Gestação na seca": {
                "color": "burlywood",
                "label": "Ge"
            },
            "Gestação nas águas": {
                "color": "deeppink",
                "label": "Ge"
            },
            "Monta": {
                "color": "magenta",
                "label": "Mo"
            },
            "Puerpério": {
                "color": "yellow",
                "label": "Pu"
            },
            "Recria na seca": {
                "color": "khaki",
                "label": "Se"
            },
            "Recria nas águas": {
                "color": "darkkhaki",
                "label": "Ag"
            },
            "Reserva na seca": {
                "color": "aquamarine",
                "label": "Re"
            },
            "Reserva nas águas": {
                "color": "mediumaquamarine",
                "label": "Re"
            },
            "Confinamento": {
                "color": "cyan",
                "label": "Te"
            },
            "Venda": {
                "color": "salmon",
                "label": "Ve"
            }
        },
        "stock": null,
        "categoriesResourceHierarchy": {
            "BEZERRAS": "FEMEAS",
            "BEZERROS": "MACHOS",
            "MULTIPARAS": "MATRIZES",
            "PRIMIPARAS": "MATRIZES",
            "NULIPARAS": "MATRIZES",
            "MATRIZES": "FEMEAS",
            "FEMEAS": "BOVINOS",
            "MACHOS": "BOVINOS"
        },
        "calculatedIndicators": null,
        "indicatorsToCalculate": null,
        "indicatorParameters" : {	
            "Lucratividade (R$/ha/ano)": 
            {
                "default" : [
                        "PARTO_MACHO",
                        "PRENHEZ"
                ],
                "other" : [
                    "CICLO",	
                    "CONFINAMENTO",
                    "DIAGNOSE",
                    "INICIO_AGUAS"
                ],
                    
            },
            "Receita Líquida Anual":
            {
                "other" : [
                    "CICLO",	
                    "DIAGNOSE",
                    "INICIO_AGUAS",
                    "PARTO_MACHO",
                    "PRENHEZ"
                ],
                "default" : [
                    "NATALIDADE",
                ]
            
            },
            "Toneladas de Carne Produzidas por Ano": 
            {
                "other" : [
                    "CONFINAMENTO",	
                    "DIAGNOSE",
                    "INICIO_AGUAS",
                    "MONTA"
                    ],
                "default" : [
                    "CICLO",
                    "NATALIDADE",
                    "PARTO_MACHO",
                    "AGUAS"
                ]
            }
        }
    },
    "resultQuery": null,

}

const sim75 = {
    "idSimulation": "68ca096d-4702-496e-8284-fc5f827ecc9f",
    "idSystem": 75,
    "idModel": 18,
    "simulationData": {
        "ARROBA": 15,
        "graph": {
            "nodes": {
                "n_1_VeBg_Venda de bois gordos.": {
                    "formula": "CONFINAMENTO+INICIO_AGUAS",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "n_2_TeBm_Terminação em confinamento de bois magros.-n_1_VeBg_Venda de bois gordos."
                    ],
                    "duration": 200,
                    "type": "terminal_saida_producao"
                },
                "n_2_TeBm_Terminação em confinamento de bois magros.": {
                    "formula": "CONFINAMENTO",
                    "stages": [
                        "Confinamento"
                    ],
                    "flows": [
                        "n_2_TeBm_Terminação em confinamento de bois magros.-n_1_VeBg_Venda de bois gordos.",
                        "n_3_AgBo_Recria nas águas de bezerros.-n_2_TeBm_Terminação em confinamento de bois magros."
                    ],
                    "duration": 110,
                    "type": "est_producao"
                },
                "n_3_AgBo_Recria nas águas de bezerros.": {
                    "formula": "AGUAS",
                    "stages": [
                        "Recria nas águas"
                    ],
                    "flows": [
                        "n_3_AgBo_Recria nas águas de bezerros.-n_2_TeBm_Terminação em confinamento de bois magros.",
                        "n_8_SeBo_Recria na seca de bezerros.-n_3_AgBo_Recria nas águas de bezerros."
                    ],
                    "duration": 212,
                    "type": "est_producao"
                },
                "n_8_SeBo_Recria na seca de bezerros.": {
                    "formula": "SECA",
                    "stages": [
                        "Recria na seca"
                    ],
                    "flows": [
                        "n_8_SeBo_Recria na seca de bezerros.-n_3_AgBo_Recria nas águas de bezerros.",
                        "b_12_1_Bo_Balanço de bezerros desmamados.-n_8_SeBo_Recria na seca de bezerros."
                    ],
                    "duration": 153,
                    "type": "est_producao"
                },
                "b_12_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "0",
                    "stages": [
                        "Balanço"
                    ],
                    "flows": [
                        "b_12_1_Bo_Balanço de bezerros desmamados.-n_8_SeBo_Recria na seca de bezerros.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-b_12_1_Bo_Balanço de bezerros desmamados.",
                        "s_53_1_Bo_Balanço de bezerros desmamados.-b_12_1_Bo_Balanço de bezerros desmamados.",
                        "b_12_1_Bo_Balanço de bezerros desmamados.-n_90_VeBo_Venda de bezerros desmamados."
                    ],
                    "duration": 0,
                    "type": "est_reuso"
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Aleitamento"
                    ],
                    "flows": [
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-b_12_1_Bo_Balanço de bezerros desmamados.",
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-n_16_AlMp_Aleitamento de multíparas prenhes.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-n_18_ReMs_Reserva na seca de multíparas.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_20_10_GeMs_Gestação na seca de multíparas solteiras.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_21_4_EnMs_Engorda na seca de multíparas."
                    ],
                    "duration": 31,
                    "type": "est_producao"
                },
                "n_17_DiMp_Diagnose de prenhez de multíparas paridas.": {
                    "formula": "DIAGNOSE",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-n_16_AlMp_Aleitamento de multíparas prenhes.",
                        "n_25_MoMp_Monta de multíparas paridas.-n_17_DiMp_Diagnose de prenhez de multíparas paridas.",
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras.",
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas."
                    ],
                    "duration": 59,
                    "type": "est_producao"
                },
                "n_25_MoMp_Monta de multíparas paridas.": {
                    "formula": "MONTA",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "n_25_MoMp_Monta de multíparas paridas.-n_17_DiMp_Diagnose de prenhez de multíparas paridas.",
                        "n_35_PuMp_Puerpério de multíparas.-n_25_MoMp_Monta de multíparas paridas.",
                        "n_25_MoMp_Monta de multíparas paridas.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras."
                    ],
                    "duration": 92,
                    "type": "est_producao"
                },
                "n_35_PuMp_Puerpério de multíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Puerpério"
                    ],
                    "flows": [
                        "n_35_PuMp_Puerpério de multíparas.-n_25_MoMp_Monta de multíparas paridas.",
                        "b_42_3_Mp_Balanço de multíparas paridas.-n_35_PuMp_Puerpério de multíparas.",
                        "n_35_PuMp_Puerpério de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras.",
                        "n_35_PuMp_Puerpério de multíparas.-n_44_AlMv_Aleitamento de multíparas vazias."
                    ],
                    "duration": 30,
                    "type": "est_producao"
                },
                "b_42_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "0",
                    "stages": [
                        "Balanço"
                    ],
                    "flows": [
                        "b_42_3_Mp_Balanço de multíparas paridas.-n_35_PuMp_Puerpério de multíparas.",
                        "n_48_GePs_Gestação na seca de primíparas solteiras.-b_42_3_Mp_Balanço de multíparas paridas.",
                        "b_42_3_Mp_Balanço de multíparas paridas.-n_208_VeMp_Venda de multíparas paridas excedentes.",
                        "s_92_3_Mp_Balanço de multíparas paridas.-b_42_3_Mp_Balanço de multíparas paridas."
                    ],
                    "duration": 0,
                    "type": "est_reuso"
                },
                "n_48_GePs_Gestação na seca de primíparas solteiras.": {
                    "formula": "SECA",
                    "stages": [
                        "Gestação na seca"
                    ],
                    "flows": [
                        "n_48_GePs_Gestação na seca de primíparas solteiras.-b_42_3_Mp_Balanço de multíparas paridas.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-n_48_GePs_Gestação na seca de primíparas solteiras.",
                        "n_48_GePs_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento."
                    ],
                    "duration": 153,
                    "type": "est_producao"
                },
                "n_59_AlPp_Aleitamento de primíparas prenhes.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Aleitamento"
                    ],
                    "flows": [
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-n_48_GePs_Gestação na seca de primíparas solteiras.",
                        "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-n_59_AlPp_Aleitamento de primíparas prenhes.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_53_1_Bo_Balanço de bezerros desmamados.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_72_14_RePs_Reserva na seca de primíparas falhadas."
                    ],
                    "duration": 31,
                    "type": "est_producao"
                },
                "n_69_DiPp_Diagnose de prenhez de primíparas paridas.": {
                    "formula": "DIAGNOSE",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-n_59_AlPp_Aleitamento de primíparas prenhes.",
                        "n_85_MoPp_Monta de primíparas paridas.-n_69_DiPp_Diagnose de prenhez de primíparas paridas.",
                        "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras."
                    ],
                    "duration": 59,
                    "type": "est_producao"
                },
                "n_85_MoPp_Monta de primíparas paridas.": {
                    "formula": "MONTA",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "n_85_MoPp_Monta de primíparas paridas.-n_69_DiPp_Diagnose de prenhez de primíparas paridas.",
                        "n_101_PuPp_Puerpério de primíparas.-n_85_MoPp_Monta de primíparas paridas.",
                        "n_85_MoPp_Monta de primíparas paridas.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras."
                    ],
                    "duration": 92,
                    "type": "est_producao"
                },
                "n_101_PuPp_Puerpério de primíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Puerpério"
                    ],
                    "flows": [
                        "n_101_PuPp_Puerpério de primíparas.-n_85_MoPp_Monta de primíparas paridas.",
                        "n_112_GeNu_Gestação na seca de nulíparas.-n_101_PuPp_Puerpério de primíparas.",
                        "n_101_PuPp_Puerpério de primíparas.-s_169_12_MoPs_Monta de primíparas solteiras."
                    ],
                    "duration": 30,
                    "type": "est_producao"
                },
                "n_112_GeNu_Gestação na seca de nulíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Gestação na seca"
                    ],
                    "flows": [
                        "n_112_GeNu_Gestação na seca de nulíparas.-n_101_PuPp_Puerpério de primíparas.",
                        "n_112_GaNu_Gestação nas águas de nulíparas.-n_112_GeNu_Gestação na seca de nulíparas.",
                        "n_112_GeNu_Gestação na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas."
                    ],
                    "duration": 153,
                    "type": "est_producao"
                },
                "n_112_GaNu_Gestação nas águas de nulíparas.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Gestação na seca"
                    ],
                    "flows": [
                        "n_112_GaNu_Gestação nas águas de nulíparas.-n_112_GeNu_Gestação na seca de nulíparas.",
                        "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_112_GaNu_Gestação nas águas de nulíparas.",
                        "n_112_GaNu_Gestação nas águas de nulíparas.-s_118_13_EnNu_Engorda na seca de nulíparas."
                    ],
                    "duration": 31,
                    "type": "est_producao"
                },
                "n_117_DiNu_Diagnose de prenhez de nulíparas.": {
                    "formula": "DIAGNOSE",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_112_GaNu_Gestação nas águas de nulíparas.",
                        "n_128_MoNu_Monta de nulíparas.-n_117_DiNu_Diagnose de prenhez de nulíparas.",
                        "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_129_EaNu1_Engorda nas águas de nulíparas falhadas."
                    ],
                    "duration": 59,
                    "type": "est_producao"
                },
                "n_128_MoNu_Monta de nulíparas.": {
                    "formula": "MONTA",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "n_128_MoNu_Monta de nulíparas.-n_117_DiNu_Diagnose de prenhez de nulíparas.",
                        "n_138_AgNu_Recria nas águas de nulíparas.-n_128_MoNu_Monta de nulíparas."
                    ],
                    "duration": 92,
                    "type": "est_producao"
                },
                "n_138_AgNu_Recria nas águas de nulíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Recria nas águas"
                    ],
                    "flows": [
                        "n_138_AgNu_Recria nas águas de nulíparas.-n_128_MoNu_Monta de nulíparas.",
                        "n_156_SeNu_Recria na seca de nulíparas.-n_138_AgNu_Recria nas águas de nulíparas."
                    ],
                    "duration": 30,
                    "type": "est_producao"
                },
                "n_156_SeNu_Recria na seca de nulíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Recria na seca"
                    ],
                    "flows": [
                        "n_156_SeNu_Recria na seca de nulíparas.-n_138_AgNu_Recria nas águas de nulíparas.",
                        "n_173_AgBa_Recria nas águas de bezerras.-n_156_SeNu_Recria na seca de nulíparas."
                    ],
                    "duration": 153,
                    "type": "est_producao"
                },
                "n_173_AgBa_Recria nas águas de bezerras.": {
                    "formula": "AGUAS",
                    "stages": [
                        "Recria nas águas"
                    ],
                    "flows": [
                        "n_173_AgBa_Recria nas águas de bezerras.-n_156_SeNu_Recria na seca de nulíparas.",
                        "n_185_SeBa_Recria na seca de bezerras.-n_173_AgBa_Recria nas águas de bezerras."
                    ],
                    "duration": 212,
                    "type": "est_producao"
                },
                "n_185_SeBa_Recria na seca de bezerras.": {
                    "formula": "SECA",
                    "stages": [
                        "Recria na seca"
                    ],
                    "flows": [
                        "n_185_SeBa_Recria na seca de bezerras.-n_173_AgBa_Recria nas águas de bezerras.",
                        "b_71_2_Ba_Balanço de bezerras desmamadas.-n_185_SeBa_Recria na seca de bezerras."
                    ],
                    "duration": 153,
                    "type": "est_producao"
                },
                "b_71_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "b_71_2_Ba_Balanço de bezerras desmamadas.-n_185_SeBa_Recria na seca de bezerras.",
                        "n_207_CoBa_Compra de bezerras desmamadas-b_71_2_Ba_Balanço de bezerras desmamadas.",
                        "b_71_2_Ba_Balanço de bezerras desmamadas.-n_91_VeBa_Venda de bezerras desmamadas.",
                        "s_19_2_Ba_Balanço de bezerras desmamadas.-b_71_2_Ba_Balanço de bezerras desmamadas."
                    ],
                    "duration": 0,
                    "type": "est_reuso"
                },
                "n_207_CoBa_Compra de bezerras desmamadas": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_207_CoBa_Compra de bezerras desmamadas-b_71_2_Ba_Balanço de bezerras desmamadas."
                    ],
                    "duration": 0,
                    "type": "est_producao"
                },
                "n_129_EaNu1_Engorda nas águas de nulíparas falhadas.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Engorda nas águas"
                    ],
                    "flows": [
                        "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_129_EaNu1_Engorda nas águas de nulíparas falhadas.",
                        "n_129_EaNu1_Engorda nas águas de nulíparas falhadas.-s_118_13_EnNu_Engorda na seca de nulíparas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "s_118_13_EnNu_Engorda na seca de nulíparas.": {
                    "formula": "0",
                    "stages": [
                        "Engorda na seca"
                    ],
                    "flows": [
                        "n_129_EaNu1_Engorda nas águas de nulíparas falhadas.-s_118_13_EnNu_Engorda na seca de nulíparas.",
                        "s_118_13_EnNu_Engorda na seca de nulíparas.-n_144_EnNu_Engorda na seca de nulíparas.",
                        "n_112_GaNu_Gestação nas águas de nulíparas.-s_118_13_EnNu_Engorda na seca de nulíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_144_EnNu_Engorda na seca de nulíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Engorda na seca"
                    ],
                    "flows": [
                        "s_118_13_EnNu_Engorda na seca de nulíparas.-n_144_EnNu_Engorda na seca de nulíparas.",
                        "n_144_EnNu_Engorda na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "s_118_13_EaNu2_Engorda nas águas de nulíparas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_144_EnNu_Engorda na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas.",
                        "s_118_13_EaNu2_Engorda nas águas de nulíparas.-n_144_EnNu2_Engorda nas águas de nulíparas.",
                        "n_112_GeNu_Gestação na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_144_EnNu2_Engorda nas águas de nulíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Engorda nas águas"
                    ],
                    "flows": [
                        "s_118_13_EaNu2_Engorda nas águas de nulíparas.-n_144_EnNu2_Engorda nas águas de nulíparas.",
                        "n_144_EnNu2_Engorda nas águas de nulíparas.-n_162_VeNg_Venda de nulíparas gordas."
                    ],
                    "duration": 30,
                    "type": "est_tratamento"
                },
                "n_162_VeNg_Venda de nulíparas gordas.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "n_144_EnNu2_Engorda nas águas de nulíparas.-n_162_VeNg_Venda de nulíparas gordas."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                },
                "s_169_12_MoPs_Monta de primíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_101_PuPp_Puerpério de primíparas.-s_169_12_MoPs_Monta de primíparas solteiras.",
                        "s_169_12_MoPs_Monta de primíparas solteiras.-n_113_MoPs_Monta de primíparas solteiras.",
                        "n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.-s_169_12_MoPs_Monta de primíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_113_MoPs_Monta de primíparas solteiras.": {
                    "formula": "MONTA",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "s_169_12_MoPs_Monta de primíparas solteiras.-n_113_MoPs_Monta de primíparas solteiras.",
                        "n_113_MoPs_Monta de primíparas solteiras.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras."
                    ],
                    "duration": 92,
                    "type": "est_tratamento"
                },
                "s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "n_113_MoPs_Monta de primíparas solteiras.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.",
                        "s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.-n_122_DiPs_Diagnose de prenhez de primíparas solteiras.",
                        "n_85_MoPp_Monta de primíparas paridas.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.": {
                    "formula": "DIAGNOSE",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.-n_122_DiPs_Diagnose de prenhez de primíparas solteiras.",
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras.",
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_134_RaPs1_Reserva nas águas de primíparas falhadas.",
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_190_EaPs1_Engorda nas águas de primíparas falhadas."
                    ],
                    "duration": 59,
                    "type": "est_tratamento"
                },
                "s_86_11_GaPs_Gestação nas águas de primíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "Gestação nas águas"
                    ],
                    "flows": [
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras.",
                        "s_86_11_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GaPs_Gestação nas águas de primíparas solteiras.",
                        "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_133_GaPs_Gestação nas águas de primíparas solteiras.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Gestação nas águas"
                    ],
                    "flows": [
                        "s_86_11_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GaPs_Gestação nas águas de primíparas solteiras.",
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GePs1_Gestação na seca de primíparas solteiras.",
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_72_14_RePs_Reserva na seca de primíparas falhadas.",
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_199_17_EnPs_Engorda na seca de primíparas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "n_133_GePs1_Gestação na seca de primíparas solteiras.": {
                    "formula": "SECA",
                    "stages": [
                        "Gestação nas águas"
                    ],
                    "flows": [
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GePs1_Gestação na seca de primíparas solteiras.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_199_17_EaPs2_Engorda nas águas de primíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "n_134_RaPs1_Reserva nas águas de primíparas falhadas.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Reserva nas águas"
                    ],
                    "flows": [
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_134_RaPs1_Reserva nas águas de primíparas falhadas.",
                        "n_134_RaPs1_Reserva nas águas de primíparas falhadas.-s_72_14_RePs_Reserva na seca de primíparas falhadas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "s_72_14_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_134_RaPs1_Reserva nas águas de primíparas falhadas.-s_72_14_RePs_Reserva na seca de primíparas falhadas.",
                        "s_72_14_RePs_Reserva na seca de primíparas falhadas.-n_152_RePs_Reserva na seca de primíparas falhadas.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_72_14_RePs_Reserva na seca de primíparas falhadas.",
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_72_14_RePs_Reserva na seca de primíparas falhadas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_152_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "SECA",
                    "stages": [
                        "Reserva na seca"
                    ],
                    "flows": [
                        "s_72_14_RePs_Reserva na seca de primíparas falhadas.-n_152_RePs_Reserva na seca de primíparas falhadas.",
                        "n_152_RePs_Reserva na seca de primíparas falhadas.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_152_RePs_Reserva na seca de primíparas falhadas.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.",
                        "s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.-n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.",
                        "n_48_GePs_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Reserva nas águas"
                    ],
                    "flows": [
                        "s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.-n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.",
                        "n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.-s_169_12_MoPs_Monta de primíparas solteiras."
                    ],
                    "duration": 30,
                    "type": "est_tratamento"
                },
                "n_190_EaPs1_Engorda nas águas de primíparas falhadas.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Engorda nas águas"
                    ],
                    "flows": [
                        "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_190_EaPs1_Engorda nas águas de primíparas falhadas.",
                        "n_190_EaPs1_Engorda nas águas de primíparas falhadas.-s_199_17_EnPs_Engorda na seca de primíparas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "s_199_17_EnPs_Engorda na seca de primíparas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_190_EaPs1_Engorda nas águas de primíparas falhadas.-s_199_17_EnPs_Engorda na seca de primíparas.",
                        "s_199_17_EnPs_Engorda na seca de primíparas.-n_203_EnPs_Engorda na seca de primíparas.",
                        "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_199_17_EnPs_Engorda na seca de primíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_203_EnPs_Engorda na seca de primíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Engorda na seca"
                    ],
                    "flows": [
                        "s_199_17_EnPs_Engorda na seca de primíparas.-n_203_EnPs_Engorda na seca de primíparas.",
                        "n_203_EnPs_Engorda na seca de primíparas.-s_199_17_EaPs2_Engorda nas águas de primíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "s_199_17_EaPs2_Engorda nas águas de primíparas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_203_EnPs_Engorda na seca de primíparas.-s_199_17_EaPs2_Engorda nas águas de primíparas.",
                        "s_199_17_EaPs2_Engorda nas águas de primíparas.-n_203_EaPs2_Engorda nas águas de primíparas.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_199_17_EaPs2_Engorda nas águas de primíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_203_EaPs2_Engorda nas águas de primíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Engorda na seca"
                    ],
                    "flows": [
                        "s_199_17_EaPs2_Engorda nas águas de primíparas.-n_203_EaPs2_Engorda nas águas de primíparas.",
                        "n_203_EaPs2_Engorda nas águas de primíparas.-n_209_VePg_Venda de primíparas solteiras vazias gordas."
                    ],
                    "duration": 30,
                    "type": "est_tratamento"
                },
                "n_209_VePg_Venda de primíparas solteiras vazias gordas.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "n_203_EaPs2_Engorda nas águas de primíparas.-n_209_VePg_Venda de primíparas solteiras vazias gordas."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                },
                "n_44_AlMv_Aleitamento de multíparas vazias.": {
                    "formula": "AGUAS-PUERPERIO",
                    "stages": [
                        "Aleitamento"
                    ],
                    "flows": [
                        "n_35_PuMp_Puerpério de multíparas.-n_44_AlMv_Aleitamento de multíparas vazias.",
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_53_1_Bo_Balanço de bezerros desmamados.",
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_19_2_Ba_Balanço de bezerras desmamadas.",
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_21_4_EnMs_Engorda na seca de multíparas."
                    ],
                    "duration": 182,
                    "type": "est_tratamento"
                },
                "s_31_7_MoMs_Monta de multíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "n_35_PuMp_Puerpério de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras.",
                        "s_31_7_MoMs_Monta de multíparas solteiras.-n_43_MoMs_Monta de multíparas solteiras.",
                        "n_18_RaMs_Reserva nas águas de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_43_MoMs_Monta de multíparas solteiras.": {
                    "formula": "MONTA",
                    "stages": [
                        "Monta"
                    ],
                    "flows": [
                        "s_31_7_MoMs_Monta de multíparas solteiras.-n_43_MoMs_Monta de multíparas solteiras.",
                        "n_43_MoMs_Monta de multíparas solteiras.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras."
                    ],
                    "duration": 92,
                    "type": "est_tratamento"
                },
                "s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "n_43_MoMs_Monta de multíparas solteiras.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.",
                        "s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.-n_49_DiMs_Diagnose de prenhez de multíparas solteiras.",
                        "n_25_MoMp_Monta de multíparas paridas.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "est_tratamento"
                },
                "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.": {
                    "formula": "DIAGNOSE",
                    "stages": [
                        "Diagnose"
                    ],
                    "flows": [
                        "s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.-n_49_DiMs_Diagnose de prenhez de multíparas solteiras.",
                        "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras.",
                        "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas."
                    ],
                    "duration": 59,
                    "type": "est_tratamento"
                },
                "s_26_9_GaMs_Gestação nas águas de multíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras.",
                        "s_26_9_GaMs_Gestação nas águas de multíparas solteiras.-n_64_GaMs_Gestação nas águas de multíparas solteiras.",
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_64_GaMs_Gestação nas águas de multíparas solteiras.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Gestação nas águas"
                    ],
                    "flows": [
                        "s_26_9_GaMs_Gestação nas águas de multíparas solteiras.-n_64_GaMs_Gestação nas águas de multíparas solteiras.",
                        "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_20_10_GeMs_Gestação na seca de multíparas solteiras.",
                        "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_21_4_EnMs_Engorda na seca de multíparas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "s_20_10_GeMs_Gestação na seca de multíparas solteiras.": {
                    "formula": "0",
                    "stages": [
                        "Gestação na seca"
                    ],
                    "flows": [
                        "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_20_10_GeMs_Gestação na seca de multíparas solteiras.",
                        "s_20_10_GeMs_Gestação na seca de multíparas solteiras.-n_76_GeMs_Gestação na seca de multíparas solteiras.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_20_10_GeMs_Gestação na seca de multíparas solteiras."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_76_GeMs_Gestação na seca de multíparas solteiras.": {
                    "formula": "SECA",
                    "stages": [
                        "Gestação na seca"
                    ],
                    "flows": [
                        "s_20_10_GeMs_Gestação na seca de multíparas solteiras.-n_76_GeMs_Gestação na seca de multíparas solteiras.",
                        "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas.",
                        "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_93_5_EaMs2_Engorda nas águas de multíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.",
                        "s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.-n_65_EaMs1_Engorda nas águas de multíparas falhadas.",
                        "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_65_EaMs1_Engorda nas águas de multíparas falhadas.": {
                    "formula": "FIM_AGUAS",
                    "stages": [
                        "Engorda nas águas"
                    ],
                    "flows": [
                        "s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.-n_65_EaMs1_Engorda nas águas de multíparas falhadas.",
                        "n_65_EaMs1_Engorda nas águas de multíparas falhadas.-s_21_4_EnMs_Engorda na seca de multíparas."
                    ],
                    "duration": 31,
                    "type": "est_tratamento"
                },
                "s_21_4_EnMs_Engorda na seca de multíparas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_65_EaMs1_Engorda nas águas de multíparas falhadas.-s_21_4_EnMs_Engorda na seca de multíparas.",
                        "s_21_4_EnMs_Engorda na seca de multíparas.-n_81_EnMs_Engorda na seca de multíparas.",
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_21_4_EnMs_Engorda na seca de multíparas.",
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_21_4_EnMs_Engorda na seca de multíparas.",
                        "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_21_4_EnMs_Engorda na seca de multíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_81_EnMs_Engorda na seca de multíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Engorda na seca"
                    ],
                    "flows": [
                        "s_21_4_EnMs_Engorda na seca de multíparas.-n_81_EnMs_Engorda na seca de multíparas.",
                        "n_81_EnMs_Engorda na seca de multíparas.-s_93_5_EaMs2_Engorda nas águas de multíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "s_93_5_EaMs2_Engorda nas águas de multíparas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_81_EnMs_Engorda na seca de multíparas.-s_93_5_EaMs2_Engorda nas águas de multíparas.",
                        "s_93_5_EaMs2_Engorda nas águas de multíparas.-n_97_EaMs2_Engorda nas águas de multíparas.",
                        "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_93_5_EaMs2_Engorda nas águas de multíparas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_97_EaMs2_Engorda nas águas de multíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Engorda nas águas"
                    ],
                    "flows": [
                        "s_93_5_EaMs2_Engorda nas águas de multíparas.-n_97_EaMs2_Engorda nas águas de multíparas.",
                        "n_97_EaMs2_Engorda nas águas de multíparas.-n_108_VeMg_Venda de multíparas solteiras vazias gordas."
                    ],
                    "duration": 30,
                    "type": "est_tratamento"
                },
                "n_108_VeMg_Venda de multíparas solteiras vazias gordas.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "n_97_EaMs2_Engorda nas águas de multíparas.-n_108_VeMg_Venda de multíparas solteiras vazias gordas."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                },
                "n_18_ReMs_Reserva na seca de multíparas.": {
                    "formula": "SECA",
                    "stages": [
                        "Reserva na seca"
                    ],
                    "flows": [
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-n_18_ReMs_Reserva na seca de multíparas.",
                        "n_18_ReMs_Reserva na seca de multíparas.-n_18_RaMs_Reserva nas águas de multíparas."
                    ],
                    "duration": 153,
                    "type": "est_tratamento"
                },
                "n_18_RaMs_Reserva nas águas de multíparas.": {
                    "formula": "PUERPERIO",
                    "stages": [
                        "Reserva nas águas"
                    ],
                    "flows": [
                        "n_18_ReMs_Reserva na seca de multíparas.-n_18_RaMs_Reserva nas águas de multíparas.",
                        "n_18_RaMs_Reserva nas águas de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras."
                    ],
                    "duration": 30,
                    "type": "est_tratamento"
                },
                "s_53_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_53_1_Bo_Balanço de bezerros desmamados.",
                        "s_53_1_Bo_Balanço de bezerros desmamados.-b_12_1_Bo_Balanço de bezerros desmamados.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_53_1_Bo_Balanço de bezerros desmamados."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_90_VeBo_Venda de bezerros desmamados.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "b_12_1_Bo_Balanço de bezerros desmamados.-n_90_VeBo_Venda de bezerros desmamados."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                },
                "s_19_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_16_AlMp_Aleitamento de multíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.",
                        "s_19_2_Ba_Balanço de bezerras desmamadas.-b_71_2_Ba_Balanço de bezerras desmamadas.",
                        "n_59_AlPp_Aleitamento de primíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.",
                        "n_44_AlMv_Aleitamento de multíparas vazias.-s_19_2_Ba_Balanço de bezerras desmamadas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_91_VeBa_Venda de bezerras desmamadas.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "b_71_2_Ba_Balanço de bezerras desmamadas.-n_91_VeBa_Venda de bezerras desmamadas."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                },
                "s_92_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "0",
                    "stages": [
                        "(nenhuma)"
                    ],
                    "flows": [
                        "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas.",
                        "s_92_3_Mp_Balanço de multíparas paridas.-b_42_3_Mp_Balanço de multíparas paridas.",
                        "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas."
                    ],
                    "duration": 0,
                    "type": "soma_tratamento"
                },
                "n_208_VeMp_Venda de multíparas paridas excedentes.": {
                    "formula": "0",
                    "stages": [
                        "Venda"
                    ],
                    "flows": [
                        "b_42_3_Mp_Balanço de multíparas paridas.-n_208_VeMp_Venda de multíparas paridas excedentes."
                    ],
                    "duration": 0,
                    "type": "terminal_saida_tratamento"
                }
            },
            "flows": {
                "n_2_TeBm_Terminação em confinamento de bois magros.-n_1_VeBg_Venda de bois gordos.": {
                    "formula": "PRODUCAO",
                    "resource": {
                        "name": "Bois gordos",
                        "unit": "cab",
                        "category": "BOVINOS"
                    },
                    "type": "Produção",
                    "factor": 438,
                    "day": 200,
                    "qty": 438
                },
                "n_3_AgBo_Recria nas águas de bezerros.-n_2_TeBm_Terminação em confinamento de bois magros.": {
                    "formula": "1/(1-PERDAS)^(CONFINAMENTO/CICLO)",
                    "resource": {
                        "name": "Bezerros recriados nas águas",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Produção",
                    "factor": 1.0030,
                    "day": 90,
                    "qty": 439.33
                },
                "n_8_SeBo_Recria na seca de bezerros.-n_3_AgBo_Recria nas águas de bezerros.": {
                    "formula": "1/(1-PERDAS)^(AGUAS/CICLO)",
                    "resource": {
                        "name": "Bezerros recriados na seca",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Produção",
                    "factor": 1.0059,
                    "day": -122,
                    "qty": 441.90
                },
                "b_12_1_Bo_Balanço de bezerros desmamados.-n_8_SeBo_Recria na seca de bezerros.": {
                    "formula": "1/(1-PERDAS)^(SECA/CICLO)",
                    "resource": {
                        "name": "Bezerros desmamados",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Produção",
                    "factor": 1.0042,
                    "day": -275,
                    "qty": 443.77
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.-b_12_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerros desmamados",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -275,
                    "qty": 443.77
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.-n_18_ReMs_Reserva na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas reservadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 443.77
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 443.77
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.-s_20_10_GeMs_Gestação na seca de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 443.77
                },
                "n_16_AlMp_Aleitamento de multíparas prenhes.-s_21_4_EnMs_Engorda na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 443.77
                },
                "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-n_16_AlMp_Aleitamento de multíparas prenhes.": {
                    "formula": "1/(PARTO_MACHO*(1-PERDAS_CRIA)^((AGUAS-PUERPERIO)/CICLO))",
                    "resource": {
                        "name": "Multíparas paridas prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Produção",
                    "factor": 2.0411,
                    "day": -306,
                    "qty": 905.78
                },
                "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 905.78
                },
                "n_17_DiMp_Diagnose de prenhez de multíparas paridas.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 905.78
                },
                "n_25_MoMp_Monta de multíparas paridas.-n_17_DiMp_Diagnose de prenhez de multíparas paridas.": {
                    "formula": "1/(PRENHEZ*(1-PERDAS)^(DIAGNOSE/CICLO))",
                    "resource": {
                        "name": "Multíparas paridas após a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1.1129,
                    "day": -365,
                    "qty": 1008.06
                },
                "n_25_MoMp_Monta de multíparas paridas.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras após a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -365,
                    "qty": 1008.06
                },
                "n_35_PuMp_Puerpério de multíparas.-n_25_MoMp_Monta de multíparas paridas.": {
                    "formula": "1/(1-PERDAS)^(MONTA/CICLO)",
                    "resource": {
                        "name": "Multíparas paridas para a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1.0025,
                    "day": -457,
                    "qty": 1010.62
                },
                "n_35_PuMp_Puerpério de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -457,
                    "qty": 1010.62
                },
                "n_35_PuMp_Puerpério de multíparas.-n_44_AlMv_Aleitamento de multíparas vazias.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas para a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -457,
                    "qty": 1010.62
                },
                "b_42_3_Mp_Balanço de multíparas paridas.-n_35_PuMp_Puerpério de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1.0008,
                    "day": -487,
                    "qty": 1011.45
                },
                "s_92_3_Mp_Balanço de multíparas paridas.-b_42_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -122,
                    "qty": 1011.45
                },
                "n_48_GePs_Gestação na seca de primíparas solteiras.-b_42_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -487,
                    "qty": 1011.45
                },
                "n_18_ReMs_Reserva na seca de multíparas.-n_18_RaMs_Reserva nas águas de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas reservadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -122,
                    "qty": 1010.62
                },
                "n_18_RaMs_Reserva nas águas de multíparas.-s_31_7_MoMs_Monta de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -92,
                    "qty": 1010.62
                },
                "s_31_7_MoMs_Monta de multíparas solteiras.-n_43_MoMs_Monta de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -457,
                    "qty": 1010.62
                },
                "s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.-n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas reservadas.",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_43_MoMs_Monta de multíparas solteiras.-s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras após a monta",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -365,
                    "qty": 1010.62
                },
                "n_44_AlMv_Aleitamento de multíparas vazias.-s_53_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerros desmamados",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_44_AlMv_Aleitamento de multíparas vazias.-s_19_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_44_AlMv_Aleitamento de multíparas vazias.-s_21_4_EnMs_Engorda na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "s_53_1_Bo_Balanço de bezerros desmamados.-b_12_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerros desmamados.",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_59_AlPp_Aleitamento de primíparas prenhes.-n_48_GePs_Gestação na seca de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "s_36_8_DiMs_Diagnose de prenhez de multíparas solteiras.-n_49_DiMs_Diagnose de prenhez de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 1010.62
                },
                "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_26_9_GaMs_Gestação nas águas de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 1010.62
                },
                "s_26_9_GaMs_Gestação nas águas de multíparas solteiras.-n_64_GaMs_Gestação nas águas de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 1010.62
                },
                "n_49_DiMs_Diagnose de prenhez de multíparas solteiras.-s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 1010.62
                },
                "s_27_6_EaMs1_Engorda nas águas de multíparas falhadas.-n_65_EaMs1_Engorda nas águas de multíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -306,
                    "qty": 1010.62
                },
                "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-n_59_AlPp_Aleitamento de primíparas prenhes.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas paridas prenhes",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "n_59_AlPp_Aleitamento de primíparas prenhes.-s_53_1_Bo_Balanço de bezerros desmamados.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerros desmamados",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "s_19_2_Ba_Balanço de bezerras desmamadas.-b_71_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_59_AlPp_Aleitamento de primíparas prenhes.-s_72_14_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_20_10_GeMs_Gestação na seca de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "s_20_10_GeMs_Gestação na seca de multíparas solteiras.-n_76_GeMs_Gestação na seca de multíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_64_GaMs_Gestação nas águas de multíparas solteiras.-s_21_4_EnMs_Engorda na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_65_EaMs1_Engorda nas águas de multíparas falhadas.-s_21_4_EnMs_Engorda na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "s_21_4_EnMs_Engorda na seca de multíparas.-n_81_EnMs_Engorda na seca de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_85_MoPp_Monta de primíparas paridas.-n_69_DiPp_Diagnose de prenhez de primíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas paridas após a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -730,
                    "qty": 1010.62
                },
                "n_69_DiPp_Diagnose de prenhez de primíparas paridas.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "b_12_1_Bo_Balanço de bezerros desmamados.-n_90_VeBo_Venda de bezerros desmamados.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerros desmamados",
                        "unit": "cab",
                        "category": "BEZERROS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "b_71_2_Ba_Balanço de bezerras desmamadas.-n_91_VeBa_Venda de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -275,
                    "qty": 1010.62
                },
                "n_59_AlPp_Aleitamento de primíparas prenhes.-s_19_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -122,
                    "qty": 1010.62
                },
                "n_76_GeMs_Gestação na seca de multíparas solteiras.-s_93_5_EaMs2_Engorda nas águas de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -122,
                    "qty": 1010.62
                },
                "n_81_EnMs_Engorda na seca de multíparas.-s_93_5_EaMs2_Engorda nas águas de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "s_93_5_EaMs2_Engorda nas águas de multíparas.-n_97_EaMs2_Engorda nas águas de multíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_152_RaPs2_Reserva nas águas de primíparas após aleitamento.-s_169_12_MoPs_Monta de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -822,
                    "qty": 1010.62
                },
                "n_101_PuPp_Puerpério de primíparas.-s_169_12_MoPs_Monta de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -822,
                    "qty": 1010.62
                },
                "n_101_PuPp_Puerpério de primíparas.-n_85_MoPp_Monta de primíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas paridas para a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -822,
                    "qty": 1010.62
                },
                "s_169_12_MoPs_Monta de primíparas solteiras.-n_113_MoPs_Monta de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras para a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -822,
                    "qty": 1010.62
                },
                "n_85_MoPp_Monta de primíparas paridas.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas paridas após a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -730,
                    "qty": 1010.62
                },
                "n_97_EaMs2_Engorda nas águas de multíparas.-n_108_VeMg_Venda de multíparas solteiras vazias gordas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas gordas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -92,
                    "qty": 1010.62
                },
                "n_112_GeNu_Gestação na seca de nulíparas.-n_101_PuPp_Puerpério de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas paridas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_112_GaNu_Gestação nas águas de nulíparas.-s_118_13_EnNu_Engorda na seca de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas prenhes",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1005,
                    "qty": 1010.62
                },
                "n_112_GaNu_Gestação nas águas de nulíparas.-n_112_GeNu_Gestação na seca de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas prenhes",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1005,
                    "qty": 1010.62
                },
                "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_112_GaNu_Gestação nas águas de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas prenhes",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1036,
                    "qty": 1010.62
                },
                "n_129_EaNu1_Engorda nas águas de nulíparas falhadas.-s_118_13_EnNu_Engorda na seca de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1005,
                    "qty": 1010.62
                },
                "n_112_GeNu_Gestação na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_113_MoPs_Monta de primíparas solteiras.-s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras após a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": 1096,
                    "qty": 1010.62
                },
                "n_128_MoNu_Monta de nulíparas.-n_117_DiNu_Diagnose de prenhez de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas após a monta",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1095,
                    "qty": 1010.62
                },
                "n_117_DiNu_Diagnose de prenhez de nulíparas.-n_129_EaNu1_Engorda nas águas de nulíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1036,
                    "qty": 1010.62
                },
                "s_86_11_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GaPs_Gestação nas águas de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "s_102_16_DiPs_Diagnose de prenhez de primíparas solteiras.-n_122_DiPs_Diagnose de prenhez de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras após a monta",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-s_86_11_GaPs_Gestação nas águas de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_134_RaPs1_Reserva nas águas de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "n_122_DiPs_Diagnose de prenhez de primíparas solteiras.-n_190_EaPs1_Engorda nas águas de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -671,
                    "qty": 1010.62
                },
                "n_138_AgNu_Recria nas águas de nulíparas.-n_128_MoNu_Monta de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas para a monta",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1187,
                    "qty": 1010.62
                },
                "s_118_13_EnNu_Engorda na seca de nulíparas.-n_144_EnNu_Engorda na seca de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_133_GaPs_Gestação nas águas de primíparas solteiras.-n_133_GePs1_Gestação na seca de primíparas solteiras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes.",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_72_14_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes.",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_133_GaPs_Gestação nas águas de primíparas solteiras.-s_199_17_EnPs_Engorda na seca de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas solteiras prenhes.",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_92_3_Mp_Balanço de multíparas paridas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas reservadas.",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_133_GePs1_Gestação na seca de primíparas solteiras.-s_199_17_EaPs2_Engorda nas águas de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas descartadas.",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_134_RaPs1_Reserva nas águas de primíparas falhadas.-s_72_14_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "s_72_14_RePs_Reserva na seca de primíparas falhadas.-n_152_RePs_Reserva na seca de primíparas falhadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_156_SeNu_Recria na seca de nulíparas.-n_138_AgNu_Recria nas águas de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas recriadas na seca",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1217,
                    "qty": 1010.62
                },
                "n_144_EnNu_Engorda na seca de nulíparas.-s_118_13_EaNu2_Engorda nas águas de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "s_118_13_EaNu2_Engorda nas águas de nulíparas.-n_144_EnNu2_Engorda nas águas de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas descartadas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -852,
                    "qty": 1010.62
                },
                "n_144_EnNu2_Engorda nas águas de nulíparas.-n_162_VeNg_Venda de nulíparas gordas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Nulíparas gordas",
                        "unit": "cab",
                        "category": "NULIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -822,
                    "qty": 1010.62
                },
                "n_48_GePs_Gestação na seca de primíparas solteiras.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_152_RePs_Reserva na seca de primíparas falhadas.-s_72_14_RaPs2_Reserva nas águas de primíparas após aleitamento.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas reservadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_173_AgBa_Recria nas águas de bezerras.-n_156_SeNu_Recria na seca de nulíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras recriadas nas águas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1370,
                    "qty": 1010.62
                },
                "n_185_SeBa_Recria na seca de bezerras.-n_173_AgBa_Recria nas águas de bezerras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras recriadas na seca",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1582,
                    "qty": 1010.62
                },
                "b_71_2_Ba_Balanço de bezerras desmamadas.-n_185_SeBa_Recria na seca de bezerras.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -1735,
                    "qty": 1010.62
                },
                "n_190_EaPs1_Engorda nas águas de primíparas falhadas.-s_199_17_EnPs_Engorda na seca de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas descartadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "s_199_17_EnPs_Engorda na seca de primíparas.-n_203_EnPs_Engorda na seca de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas descartadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -640,
                    "qty": 1010.62
                },
                "n_207_CoBa_Compra de bezerras desmamadas-b_71_2_Ba_Balanço de bezerras desmamadas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Bezerras desmamadas",
                        "unit": "cab",
                        "category": "BEZERRAS"
                    },
                    "type": "Produção",
                    "factor": 1,
                    "day": -1735,
                    "qty": 1010.62
                },
                "b_42_3_Mp_Balanço de multíparas paridas.-n_208_VeMp_Venda de multíparas paridas excedentes.": {
                    "formula": "1",
                    "resource": {
                        "name": "Multíparas paridas",
                        "unit": "cab",
                        "category": "MULTIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_203_EnPs_Engorda na seca de primíparas.-s_199_17_EaPs2_Engorda nas águas de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas gordas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "s_199_17_EaPs2_Engorda nas águas de primíparas.-n_203_EaPs2_Engorda nas águas de primíparas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas descartadas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -487,
                    "qty": 1010.62
                },
                "n_203_EaPs2_Engorda nas águas de primíparas.-n_209_VePg_Venda de primíparas solteiras vazias gordas.": {
                    "formula": "1",
                    "resource": {
                        "name": "Primíparas gordas",
                        "unit": "cab",
                        "category": "PRIMIPARAS"
                    },
                    "type": "Tratamento",
                    "factor": 1,
                    "day": -457,
                    "qty": 1010.62
                }
            },
            "idModel": 18,
            "root": "n_1_VeBg_Venda de bois gordos.",
            "nodeOne": "n_2_TeBm_Terminação em confinamento de bois magros."
        },
        "parameters": {
            "AGUAS": 212,
            "CICLO": 365,
            "CONFINAMENTO": 110,
            "DIAGNOSE": 59,
            "INICIO_AGUAS": 90,
            "MONTA": 92,
            "NATALIDADE": 0.80,
            "PARTO_MACHO": 0.50,
            "PERDAS": 0.01,
            "PERDAS_CRIA": 0.03,
            "PRENHEZ": 0.90,
            "PRODUCAO": 438,
            "PUERPERIO": 30
        },
        "systemParameters": {
            "AGUAS": { "min": 200, "std": 210, "max": 220 },
            "CICLO": { "min": 300, "std": 330, "max": 365 },
            "CONFINAMENTO": { "min": 100, "std": 110, "max": 120 },
            "INICIO_AGUAS": { "min": 80, "std": 90, "max": 100 },
            "DIAGNOSE": { "min": 30, "std": 60, "max": 90 },
            "PARTO_MACHO": { "min": 0.4, "std": 0.5, "max": 0.9 },
            "MONTA": { "min": 60, "std": 90, "max": 120 },
            "NATALIDADE": { "min": 0.50, "std": 0.80, "max": 1.00 },
            "PERDAS": { "min": 0.0, "std": 0.01, "max": 0.05 },
            "PERDAS_CRIA": { "min": 0.0, "std": 0.03, "max": 0.10 },
            "PRENHEZ": { "min": 0.50, "std": 0.80, "max": 1.00 },
            "PRODUCAO": { "min": 300, "std": 400, "max": 500 },
            "PUERPERIO": { "min": 25, "std": 30, "max": 40 }
        },
        "calculatedParameters": {
            "FIM_AGUAS": "AGUAS-DIAGNOSE-MONTA-PUERPERIO",
            "SECA": "CICLO-AGUAS"
        },
        "formulas": {
            "nodes": [
                "AGUAS",
                "AGUAS-PUERPERIO",
                "CONFINAMENTO",
                "CONFINAMENTO+INICIO_AGUAS",
                "DIAGNOSE",
                "MONTA",
                "PUERPERIO",
                "SECA"
            ],
            "flows": [
                "1",
                "PRODUCAO",
                "1/(1-PERDAS)^(AGUAS/CICLO)",
                "1/(1-PERDAS)^(CONFINAMENTO/CICLO)",
                "1/(1-PERDAS)^(MONTA/CICLO)",
                "1/(1-PERDAS)^(SECA/CICLO)",
                "1/(PARTO_MACHO*(1-PERDAS_CRIA)^((AGUAS-PUERPERIO)/CICLO))",
                "1/(PRENHEZ*(1-PERDAS)^(DIAGNOSE/CICLO))"
            ]
        },
        "resources": {
            "Bezerras desmamadas": {
                "unit": "cab",
                "category": "BEZERRAS"
            },
            "Bezerras recriadas nas águas": {
                "unit": "cab",
                "category": "BEZERRAS"
            },
            "Bezerras recriadas na seca": {
                "unit": "cab",
                "category": "BEZERRAS"
            },

            "Bezerros desmamados": {
                "unit": "cab",
                "category": "BEZERROS"
            },
            "Bezerros recriados nas águas": {
                "unit": "cab",
                "category": "BEZERROS"
            },
            "Bezerros recriados na seca": {
                "unit": "cab",
                "category": "BEZERROS"
            },

            "Bois gordos": {
                "unit": "cab",
                "category": "MACHOS"
            },

            "Multíparas descartadas": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas gordas": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas paridas": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas paridas após a monta": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas paridas para a monta": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas paridas prenhes": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas reservadas": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas solteiras após a monta": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas solteiras para a monta": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },
            "Multíparas solteiras prenhes": {
                "unit": "cab",
                "category": "MULTIPARAS"
            },

            "Nulíparas após a monta": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas descartadas": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas gordas": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas para a monta": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas prenhes": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas recriadas na seca": {
                "unit": "cab",
                "category": "NULIPARAS"
            },
            "Nulíparas recriadas nas águas": {
                "unit": "cab",
                "category": "NULIPARAS"
            },

            "Primíparas descartadas": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas gordas": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas paridas": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas paridas após a monta": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas paridas para a monta": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas paridas prenhes": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas reservadas": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas solteiras após a monta": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas solteiras para a monta": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            },
            "Primíparas solteiras prenhes": {
                "unit": "cab",
                "category": "PRIMIPARAS"
            }
        },
        "stagesHierarchy": {
            "(nenhuma)": {
                "color": "white",
                "label": null
            },
            "Aleitamento": {
                "color": "powderblue",
                "label": "Al"
            },
            "Balanço": {
                "color": "black",
                "label": null
            },
            "Compra": {
                "color": "lightgrey",
                "label": "Ve"
            },
            "Diagnose": {
                "color": "gold",
                "label": "Di"
            },
            "Engorda na seca": {
                "color": "moccasin",
                "label": "En"
            },
            "Engorda nas águas": {
                "color": "beige",
                "label": "Ea"
            },
            "Gestação na seca": {
                "color": "burlywood",
                "label": "Ge"
            },
            "Gestação nas águas": {
                "color": "deeppink",
                "label": "Ge"
            },
            "Monta": {
                "color": "magenta",
                "label": "Mo"
            },
            "Puerpério": {
                "color": "yellow",
                "label": "Pu"
            },
            "Recria na seca": {
                "color": "khaki",
                "label": "Se"
            },
            "Recria nas águas": {
                "color": "darkkhaki",
                "label": "Ag"
            },
            "Reserva na seca": {
                "color": "aquamarine",
                "label": "Re"
            },
            "Reserva nas águas": {
                "color": "mediumaquamarine",
                "label": "Re"
            },
            "Confinamento": {
                "color": "cyan",
                "label": "Te"
            },
            "Venda": {
                "color": "salmon",
                "label": "Ve"
            }
        },
        "stock": null,
        "categoriesResourceHierarchy": {
            "BEZERRAS": "FEMEAS",
            "BEZERROS": "MACHOS",
            "MULTIPARAS": "MATRIZES",
            "PRIMIPARAS": "MATRIZES",
            "NULIPARAS": "MATRIZES",
            "MATRIZES": "FEMEAS",
            "FEMEAS": "BOVINOS",
            "MACHOS": "BOVINOS"
        },
        "calculatedIndicators": null,
        "indicatorsToCalculate": null,
        "indicatorParameters" : {	
            "Lucratividade (R$/ha/ano)": 
            {
                "default" : [
                    "PARTO_MACHO",
                    "PRENHEZ"
                ],
                "other" : [
                    "CICLO",	
                    "CONFINAMENTO",
                    "DIAGNOSE",
                    "INICIO_AGUAS"
                ],
                    
            },
            "Receita Líquida Anual":
            {
                "other" : [
                    "CICLO",	
                    "DIAGNOSE",
                    "INICIO_AGUAS",
                    "PARTO_MACHO",
                    "PRENHEZ",
                    "NATALIDADE",
                ],
                "default" : [                    
                ]
            
            },
            "Toneladas de Carne Produzidas por Ano": 
            {
                "other" : [
                    "CONFINAMENTO",	
                    "DIAGNOSE",
                    "INICIO_AGUAS",
                    "MONTA",
                    "CICLO",
                    "NATALIDADE",
                    ],
                "default" : [
                    "PARTO_MACHO",
                    "AGUAS"
                ]
            }
        }
    },
    "resultQuery": null,

}