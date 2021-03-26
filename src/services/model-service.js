export default class ModelService {

  constructor() {
    this.url_base = 'http://172.17.52.6:5000';
  }

  async getData() {
    const response = await fetch(`${this.url_base}/simulation`, {mode: "cors",})
    const json = await response.json()
    return json
  }

  async startSimulation(model_name) {
    const response = await fetch(`${this.url_base}/simulation/start/${model_name}`, {method: "PUT"})
    const json = await response.text()
    console.log(json)
  }

  async stopSimulation(model_name) {
    const response = await fetch(`${this.url_base}/simulation/stop`, {method: "PUT"})
    const json = await response.text()
    console.log(json)
  }

  async startModel() {
    const response = await fetch(`${this.url_base}/simulation/model/start`, {method: "PUT"})
    const json = await response.text()
    console.log(json)
  }

  async stopModel() {
    const response = await fetch(`${this.url_base}/simulation/model/stop`, {method: "PUT"})
    const json = await response.text()
    console.log(json)
  }

  async pauseModel() {
    const response = await fetch(`${this.url_base}/simulation/model/pause`, {method: "PUT"})
    const json = await response.text()
    console.log(json)
  }

}
