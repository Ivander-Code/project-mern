/** Dependencies */
import axios from "axios";
/** Axios Configuration */
import axios_config from "./config/axios";
/** Core Api */
class ApiWS {
  constructor() {
    this.api = axios.create(axios_config);
  }

  async getData(url) {
    let result = await this.api.get(url);
    return result.data;
  }

  async storeData(url, values) {
    let result = await this.api.post(url, values);
    return result.data;
  }

  async deleteDataById(url, value) {
    let result = await this.api.delete(url + "/" + value._id);
    return result.data;
  }

  async updateDataById(url, values) {
    let result = await this.api.put(url, values);
    return result.data;
  }
}

export default new ApiWS();
