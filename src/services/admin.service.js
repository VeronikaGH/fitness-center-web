import axios from 'axios';
const API_URL = "http://localhost:8080/";

class AdminService {

  
    create(data) {
      return API_URL.post("/createuser", data);
    }
  
    createTicket(name, description, deadline, price) {
        return axios.post(API_URL + "createticket", {
          name,
          description,
          deadline,
          price
        });
    }
  }
  
  export default new AdminService();