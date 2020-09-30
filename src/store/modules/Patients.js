import Patients from "./../../services/Patients";
import router from "../../router/index";

const state = {
  patients: [],
  patient: {},
};
const getters = {};
const mutations = {
  SET_PATIENTS(state, patients) {
    state.patients = patients.data;
    console.log(state.patients);
  },
  SET_PATIENT(state, patient) {
    state.patient = patient.data[0];
    console.log(state.patient);
  },
};

const actions = {
  createPatient({ dispatch }, payload) {
    Patients.createPatient(payload).then((response) => {
      console.log(response);

      const notification = {
        type: "success",
        status: true,
        message: "create patient success",
      };

      dispatch("Notification/add", notification, { root: true });
      dispatch("getPatients");
      router.push("/", () => {});
    });
  },
  editPatient({ dispatch }, payload) {
    Patients.editPatient(payload).then((response) => {
      console.log(response);

      const notification = {
        type: "success",
        status: true,
        message: "edit patient success",
      };

      dispatch("Notification/add", notification, { root: true });
      dispatch("getPatients");
      router.push("/", () => {});
    });
  },
  getPatients({ commit }) {
    Patients.getPatients().then((patients) => {
      commit("SET_PATIENTS", patients);
      console.log(patients);
    });
  },
  getPatientsById({ commit }, id) {
    Patients.getPatientById(id).then((patient) => {
      commit("SET_PATIENT", patient);
      console.log(patient);
    });
  },
  getPatientsByTownshipId({ commit }, townshipId) {
    Patients.getPatientsByTownshipId(townshipId).then((patients) => {
      commit("SET_PATIENTS", patients);
      console.log(patients);
    });
  },
};

export default {
  namespaced: true,
  state,
  getters,
  mutations,
  actions,
};
