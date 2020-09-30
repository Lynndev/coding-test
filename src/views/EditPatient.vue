<template>
  <v-container fluid>
    <v-row justify="center">
      <v-col md="6">
        <v-card>
          <h2 class="form-title pa-3">Create Patient</h2>
          <v-divider></v-divider>
          <v-card-text>
            <v-row>
              <v-col md="12">
                <label>Name</label>
                <v-text-field
                  v-model="patient.name"
                  :error-messages="nameErrors"
                  outlined
                  clearable
                  dense
                >
                </v-text-field>
                <label>Phone</label>
                <v-text-field
                  v-model="patient.phone"
                  :error-messages="phoneErrors"
                  outlined
                  clearable
                  dense
                >
                </v-text-field>
                <v-select
                  :items="townships"
                  v-model="patient.township_id"
                  item-text="name"
                  item-value="id"
                  label="choose Township..."
                  solo
                >
                </v-select>
                <v-row>
                  <v-checkbox
                    :value="patient.gender == 'male'"
                    v-model="male"
                    label="Male"
                    color="blue"
                  ></v-checkbox>
                  <v-checkbox
                    :value="patient.gender == 'female'"
                    v-model="female"
                    label="Female"
                    color="red"
                  ></v-checkbox>
                </v-row>
              </v-col>
            </v-row>
          </v-card-text>
          <v-card-actions>
            <v-spacer></v-spacer>
            <v-btn type="submit" @click="editPatient" class="submit-btn">
              <v-icon small left>mdi-checkbox-marked-circle-outline</v-icon
              >Update
            </v-btn>
          </v-card-actions>
        </v-card>
      </v-col>
    </v-row>
  </v-container>
</template>
<script>
import { required } from "vuelidate/lib/validators";
import { mapState } from "vuex";
import { ValidationMixin } from "./../mixins/ValidationMixin";

export default {
  mixins: [ValidationMixin],
  data: () => ({
    male: null,
    female: null,
  }),
  validations: {
    patient: {
      name: {
        required,
      },
      phone: {
        required,
      },
      township_id: {
        required,
      },
    },
  },
  components: {},
  computed: {
    ...mapState("Townships", ["townships"]),
    ...mapState("Patients", ["patient"]),
    ...mapState("Loading", ["loading"]),
    //form validation
    nameErrors() {
      return this.handleFieldErrors(this.$v.patient.name);
    },
    phoneErrors() {
      return this.handleFieldErrors(this.$v.patient.phone);
    },
    townshipIdErrors() {
      return this.handleFieldErrors(this.$v.patient.township_id);
    },
  },
  methods: {
    editPatient() {
      this.$v.$touch();
      if (!this.$v.$invalid) {
        let gender = null;
        if (this.patient.gender) {
          gender = this.patient.gender;
        } else if (this.male) {
          gender = "Male";
        } else if (this.female) {
          gender = "Female";
        }
        let data = {
          id: this.patient.id,
          name: this.patient.name,
          phone: this.patient.phone,
          gender: gender,
          township_id: this.patient.township_id,
        };

        console.log(data);
        this.$store.dispatch("Patients/editPatient", data);
      }
    },
  },
  created() {
    this.$store.dispatch("Townships/getTownships");

    this.$store.dispatch("Patients/getPatientsById", this.$route.params.id);
  },
};
</script>

<style scoped></style>
