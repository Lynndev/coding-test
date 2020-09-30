export const ValidationMixin = {
  methods: {
    handleFieldErrors(field) {
      const errors = [];
      if (!field.$dirty) return errors;

      if (!field.required) errors.push("this field is required");

      return errors;
    },
  },
};
