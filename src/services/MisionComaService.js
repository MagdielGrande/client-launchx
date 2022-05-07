import http from "../http-common";

class MisionComaService {
  getAll() {
    return http.get("/misioncomanders");
  }
  get(id) {
    return http.get(`/misioncomanders/${id}`);
  }
  create(data) {
    return http.post("/misioncomanders", data);
  }
  update(id, data) {
    return http.put(`/misioncomanders/${id}`, data);
  }
  delete(id) {
    return http.delete(`/misioncomanders/${id}`);
  }
}

export default new MisionComaService();
