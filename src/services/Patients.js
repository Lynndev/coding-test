import Request from "./Request";

export default {
  getPatients() {
    const url = "patients/get";

    return Request.get_data(url);
  },
  createPatient(payload) {
    const url = "patient/add";
    return Request.post_data(url, payload);
  },
  editPatient(payload) {
    const url = "patient/edit";
    return Request.post_data(url, payload);
  },
  getPatientsByTownshipId(townshipId) {
    const params = { township_id: townshipId };
    const url = "patients/get?";

    return Request.get_data(url, params);
  },
  getPatientById(id) {
    const params = { id: id };
    const url = "patients/get?";

    return Request.get_data(url, params);
  },
};
