<template>
  <v-container fluid>
    <v-row>
      <v-col md="12">
        <v-card class="card-drop-shadow">
          <div class="d-flex align-baseline flex-row header blue darken-2">
            <div>
              <h2 class="header-title">Patients Table</h2>
            </div>
            <div>
              <v-btn
                color="green lighten-1"
                to="/create-patient"
                class="white--text"
              >
                <v-icon left>mdi-plus-circle-outline</v-icon>
                Add new
              </v-btn>

              <slot></slot>
            </div>
          </div>
          <v-row class="pa-3">
            <v-col md="6">
              <v-select
                v-model="townshipId"
                item-text="name"
                item-value="id"
                @change="getPatientByTownshipId"
                :items="townships"
                label="choose patient from township..."
                solo
              ></v-select>
            </v-col>
            <v-col md="6">
              <v-text-field
                v-model="search"
                append-icon="mdi-magnify"
                placeholder="search by any column name"
                label="Search"
                single-line
                hide-details
              ></v-text-field>
            </v-col>
          </v-row>

          <v-data-table
            :headers="headers"
            :loading="loading"
            :search="search"
            :items="patients"
            :items-per-page="10"
          >
            <template v-slot:item.actions="{ item }">
              <v-icon
                color="yellow darken-2"
                class="mr-2"
                @click="editPatient(item)"
              >
                mdi-pencil-outline
              </v-icon>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>

<script>
import { mapState } from "vuex";
export default {
  data() {
    return {
      search: "",
      townshipId: null,
      headers: [
        { text: "Name", value: "name", align: "center" },
        { text: "Phone No", value: "phone", align: "center" },
        { text: "gender", value: "gender", align: "center" },
        { text: "Township", value: "township.name", align: "center" },
        { text: "Action", value: "actions", align: "center" },
      ],
    };
  },
  computed: {
    ...mapState("Patients", ["patients"]),
    ...mapState("Townships", ["townships"]),
    ...mapState("Loading", ["loading"]),
  },
  methods: {
    editPatient(patient) {
      this.$router.push({
        name: "EditPatient",
        params: { id: patient.id },
      });
    },
    getPatientByTownshipId(townshipId) {
      this.$store.dispatch("Patients/getPatientsByTownshipId", townshipId);
    },
  },
  components: {},
  created() {
    this.$store.dispatch("Patients/getPatients");

    this.$store.dispatch("Townships/getTownships");
  },
};
</script>

<style scoped>
.header {
  padding: 10px 0px;
}
.header-title {
  letter-spacing: 2px;
  font-weight: 300;
  font-size: 18px;
  margin: 0px 10px;
  color: #fff;
  text-transform: uppercase;
}
</style>
