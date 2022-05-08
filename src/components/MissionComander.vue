<template>
<h4>Mision Comander</h4>
  <div v-if="currentMisionComander" class="edit-form">
    <form>
      <div class="form-group">
        <label for="title">Nombre</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentMisionComander.name"
        />
      </div>
      <div class="form-group">
        <label for="title">Username</label>
        <input type="text" disabled class="form-control" id="title"
          v-model="currentMisionComander.username"
        />
      </div>
      <div class="form-group">
        <label for="title">Main Stack</label>
        <input type="text" class="form-control" id="title"
          v-model="currentMisionComander.mainStack"
        />
      </div>
    </form>
    <button class="btn btn-danger mr-2" @click="deleteMisionComander">
      Eliminar Mision Comander
    </button>
    <button type="submit" class="btn btn-info mr-2" @click="updateMisionComander">
      Actualizar
    </button>
    <p>{{ message }}</p>
  </div>
  <div v-else>
    <br />
    <p> Selecciona un Mision Comander. </p>
  </div>
</template>
<script>
import MisionComaService from "../services/MisionComaService";
export default {
  name: "misionComander",
  data() {
    return {
      currentMisionComander: null,
      message: ''
    };
  },
  methods: {
    getMisionComander(id) {
      MisionComaService.get(id)
        .then(response => {
          this.currentMisionComander= response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    deleteMisionComander() {
      MisionComaService.delete(this.currentMisionComander.id)
      .then(response => {
        console.log(response.data);
        this.$router.push({ name: "misioncomanders" });
      })
      .catch(e => {
          console.log(e);
      });
    },
    updateMisionComander() {
      MisionComaService.update(this.currentMisionComander.id, this.currentMisionComander)
        .then(response => {
          console.log(response.data);
          this.message = 'Se actualizó correctamente';
        })
        .catch(e => {
          console.log(e);
        });
    }
  },
  mounted() {
    this.message = '';
    this.getMisionComander(this.$route.params.id);
  }
};
</script>

<style>
.edit-form {
  max-width: 300px;
  margin: auto;
}
</style>