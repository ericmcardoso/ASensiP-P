const DB_NAME = 'IndicatorParameter'
const STORAGE_NAME1 = 'System'
const STORAGE_NAME2 = 'Simulation'

const DB_VERSION = 2
let DB


export default {

  async getDb(type) {

    return new Promise((resolve, reject) => {
      if (DB) {
        return resolve(DB)
      }
      const request = window.indexedDB.open(DB_NAME, DB_VERSION)

      request.onerror = e => {
        console.log('Error opening db', e)
        // eslint-disable-next-line prefer-promise-reject-errors
        reject('Error')
      }

      request.onsuccess = e => {
        DB = e.target.result
        resolve(DB)
      }

      request.onupgradeneeded = e => {
        let db = e.target.result
        if (type == "system") { //GRÁFICO DE SISTEMA
          db.createObjectStore(STORAGE_NAME1, { keyPath: 'id', autoIncrement: true })
          //console.log("Seleção Simples - Tabela Indicador x Parametro")
        } else if (type == "simulation"){ //GRÁFICO DE SIMULAÇÃO
          db.createObjectStore(STORAGE_NAME2, { keyPath: 'id', autoIncrement: true })
          //console.log("Tabela Indicador x Parametro")
        }


      }
    })
  },
  
  async getIndicatorParam(indicator, parameter, value, bd) {
    //selecionando a Base de Dados

    let db = await this.getDb(bd)
    //console.log("Comecei a pesquisa")
    return new Promise(resolve => {

      if(bd == "system"){
        var STORAGE = STORAGE_NAME1
      }else{
        STORAGE = STORAGE_NAME2
        console.log("Simulation")
      }
      let trans = db.transaction([STORAGE], 'readonly')
      trans.oncomplete = () => {
        resolve(valueInd)
      }

      const store = trans.objectStore(STORAGE)
      const valueInd = {}
      //var keyValue = ;
      store.openCursor().onsuccess = e => {
        const cursor = e.target.result

        if (cursor) {
           if (cursor.value.valueParameter === value && cursor.value.indicator === indicator && cursor.value.parameter === parameter) {
            Object.assign(valueInd, cursor.value)
          }else{
            cursor.continue()
          }
          
        }
      }
    })
  },

  async saveIndicatorParam(data, bd) {
    let db = await this.getDb(bd)
    //console.log("Entrei aqui");
    return new Promise(resolve => {
      if(bd == "system"){
        var STORAGE = STORAGE_NAME1
      }else{
        STORAGE = STORAGE_NAME2
      }
      let trans = db.transaction([STORAGE], 'readwrite')
      trans.oncomplete = () => {
        resolve()
      }
      //console.log("Cheguei aqui")
      let store = trans.objectStore(STORAGE)
      //store.delete()
      store.put(data)
    })
  },

}
