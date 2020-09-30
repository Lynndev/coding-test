import Request from "./Request";

export default {
  getTownshipByStateId(stateId) {
    const params = { state_id: stateId };

    const url = "township/get?";

    return Request.get_data(url, params);
  },
  getTownships() {
    const url = "townships/get";

    return Request.get_data(url);
  },
  getTownshipById(idObj) {
    const params = { column: Object.keys(idObj), value: idObj.id };

    const url = "township/getEach?";

    return Request.get_data(url, params);
  },
};
