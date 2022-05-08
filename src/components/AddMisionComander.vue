<template>
  <div class="submit-form">
    <div v-if="!submitted">
    <h3>Nuevo Mision Comander</h3>
      <div class="form-group">
        <label for="title">Nombre </label>
        <input
          type="text"
          class="form-control"
          id="title"
          required
          v-model="missionCommander.name"
          name="title"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input
          type="text"
          class="form-control"
          id="username"
          required
          v-model="missionCommander.username"
          name="username"
        />
      </div>
      <div class="form-group">
        <label for="title">Main Stack</label>
        <input
          type="text"
          class="form-control"
          id="mainStack"
          required
          v-model="missionCommander.mainStack"
          name="mainStack"
        />
      </div>
      <button @click="saveMisionComander" class="btn btn-success">Agregar</button>
    </div>
    <div v-else>
      <h4> Mision Comander creado exitosamente. </h4>
      <button class="btn btn-success" @click="newMisionComander">Add</button>
    </div>
  </div>
</template>

<script>
import MisionComaService from "../services/MisionComaService";

export default {
  name: "add-misioncomander",
  data() {
    return {
        missionCommander: {
        id: null,
        name: "",
        username: "",
        mainStack: ""
      },
      submitted: false
    };
  },
  methods: {
    saveMisionComander() {
      var data = {
        name: this.missionCommander.name,
        username: this.missionCommander.username,
        mainStack: this.missionCommander.mainStack
      };
      MisionComaService.create(data)
        .then(response => {
          this.missionCommander.id = response.data.id;
          this.submitted = true;
        })
        .catch(e => {
          console.log(e);
        });
    },
    newMisionComander() {
      this.submitted = false;
      this.missionCommander = {};
    }
  }
};
</script>