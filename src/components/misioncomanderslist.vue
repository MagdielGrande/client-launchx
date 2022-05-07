<template>
  <div class="list row">
    <div class="col-md-6">
      <h4> Misión Comander </h4>
      <ul class="list-group">
        <li class="list-group-item"
          :class="{ active: index == currentIndex }"
          v-for="(misioncomander, index) in misioncomanders"
          :key="index"
          @click="setActiveMisionComander(misioncomander, index)"
        >
          {{ misioncomander.username }}
        </li>

      </ul>
    </div>
    <div class="col-md-6">
      <div v-if="currentMisionComander">
        <h4>Misión Comander</h4>
        <div>
          <br><label><strong>Nombre:</strong></label> {{ currentMisionComander.name}}
          <br><label><strong>Username:</strong></label> {{ currentMisionComander.username}}
          <br><label><strong>Main Stack:</strong></label> {{ currentMisionComander.mainStack}}
        </div>
        <router-link :to="'/misioncomanders/' + currentMisionComander.id" class="btn btn-info"> Editar</router-link>
      </div>
      <div v-else>
        <br />
        <p> Selecciona un Mision Comander.</p>
      </div>
    </div>
  </div>
</template>
<script>

import MisionComaService from "../services/MisionComaService";

export default {
  name: "misionComa-list",
  data() {
    return {
      tutorials: [],
      misioncomanders: [],
      currentTutorial: null,
      currentMisionComander: null,
      currentIndex: -1,
      title: "",
      misioncomanderId:""
    };
  },
  methods: {
    getAllMissionComanders(){
      MisionComaService.getAll()
        .then(response => {
          this.misioncomanders = response.data;
        })
        .catch(e => {
          console.log(e);
        });
    },
    setActiveMisionComander(misiocomander, index) {
      this.currentMisionComander= misiocomander;
      this.currentIndex = misiocomander? index : -1;
    }
  },
  mounted() {
    this.getAllMissionComanders();
  }
};
</script>
