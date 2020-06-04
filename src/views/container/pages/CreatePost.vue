

<template>
  <v-container>
    <v-file-input label="File input" filled prepend-icon="mdi-camera" @change="changeImagen"></v-file-input>
    <v-form ref="form" v-model="valid" lazy-validation>
      <img v-if="imageURL" :src="imageURL" width="100%" height="50%" />
      <v-text-field v-model="post.title" :counter="40" label="Titulo" required></v-text-field>

      <v-text-field v-model="post.description" label="Descripción" required></v-text-field>

      <v-btn :disabled="!valid" color="secondary" class="mr-4" small @click="validate">Cargar</v-btn>

      <v-btn color="error" class="mr-4" small @click="reset">Limpiar</v-btn>

      <v-btn color="warning" small @click="resetValidation">Salir</v-btn>
    </v-form>
  </v-container>
</template>

<script>
export default {
  data: () => ({
    valid: true,
    post: {
      title: "",
      description: "",
      image: ""
    },
    imageURL: ""
  }),

  methods: {
    validate() {
      this.$refs.form.validate();
    },
    reset() {
      this.$refs.form.reset();
      this.imageURL = "";
    },
    resetValidation() {
      this.$refs.form.resetValidation();
    },
    changeImagen(event) {
      this.imageURL = URL.createObjectURL(event);
    }
  }
};
</script>