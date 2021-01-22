const DB_NAME = 'Simulation'
const STORAGE_NAME = 'Simulation'
const DB_VERSION = 1
let DB

export default {

  async getDb() {
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
        db.createObjectStore(STORAGE_NAME, { keyPath: 'id', autoIncrement: true })
      }
    })
  },

  async getIndicators() {
    let db = await this.getDb()

    return new Promise(resolve => {
      let trans = db.transaction([STORAGE_NAME], 'readonly')
      trans.oncomplete = () => {
        resolve(indicators)
      }

      const store = trans.objectStore(STORAGE_NAME)
      const indicators = []

      store.openCursor().onsuccess = e => {
        const cursor = e.target.result
        if (cursor) {
          let teste = cursor.value.relationship
          for (var [key] of Object.entries(teste)) {
            indicators.push(key)
          }
          cursor.continue()
        }
      }
    })
  },
  async getParametersIndicator(indicador) {
    let db = await this.getDb()
    //
    return new Promise(resolve => {
      let trans = db.transaction([STORAGE_NAME], 'readonly')
      trans.oncomplete = () => {
        resolve(parameters)
      }

      const store = trans.objectStore(STORAGE_NAME)
      const parameters = []

      store.openCursor().onsuccess = e => {
        const cursor = e.target.result
        if (cursor) {
          let teste = cursor.value.relationship
          for (var [key] of Object.entries(teste)) {

            if (key === indicador) {
              if (cursor.value.relationship[indicador].defaultParameters != "(nenhum)") {
                cursor.value.relationship[indicador].defaultParameters.forEach(function (p) {
                  parameters.push(p);
                });
                cursor.value.relationship[indicador].otherParameters.forEach(function (p) {
                  parameters.push(p);
                });
              } else {
                cursor.value.relationship[indicador].otherParameters.forEach(function (p) {
                  parameters.push(p);
                });
              }
              parameters.sort();
            }
          }
          cursor.continue();

        }
      }
    })
  },
  async getSimulation(id) {
    let db = await this.getDb()

    return new Promise(resolve => {
      let trans = db.transaction([STORAGE_NAME], 'readonly')
      trans.oncomplete = () => {
        resolve(simulation)
      }

      const store = trans.objectStore(STORAGE_NAME)
      const simulation = {}

      store.openCursor().onsuccess = e => {

        const cursor = e.target.result
        if (cursor) {
          if (id === cursor.value.idSimulation) {
            Object.assign(simulation, cursor.value)
          }
          cursor.continue();

        }
      }
    })
  },
  async getParamsDefault(indicador) {
    let db = await this.getDb()
    //
    return new Promise(resolve => {
      let trans = db.transaction([STORAGE_NAME], 'readonly')
      trans.oncomplete = () => {
        resolve(parameters)
      }

      const store = trans.objectStore(STORAGE_NAME)
      const parameters = []

      store.openCursor().onsuccess = e => {

        const cursor = e.target.result
        if (cursor) {
          let teste = cursor.value.relationship
          for (var [key] of Object.entries(teste)) {
            //encontrou o indicador
            if (key === indicador) {
              if (cursor.value.relationship[indicador].defaultParameters != "(nenhum)") {
                cursor.value.relationship[indicador].defaultParameters.forEach(function (p) {
                  parameters.push(p);
                });
              }
              parameters.sort();
            }
          }
          cursor.continue();

        }
      }
    })
  }
}
