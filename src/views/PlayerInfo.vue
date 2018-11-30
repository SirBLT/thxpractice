<template>
  <div>
    <h1 style="font-size: 3em; text-align: center;">{{ this.player }}</h1>
    <br>
    <v-layout row>
      <v-flex xs6>
        <h1>Criminal Offense</h1>
      </v-flex>
      <v-flex xs6>
        <h1>Arrests for <em>THIS</em> Offense </h1>
      </v-flex>
    </v-layout>
    <v-container v-for="guy in players" :key="guy.category" fluid class="vcon">
      <v-layout row>
        <v-flex xs6>
          <v-list>
            <v-list-title>{{ guy.category }}</v-list-title>
          </v-list>
        </v-flex>
        <v-flex xs6>
          <v-list>
           <v-list-title>{{ guy.arrest_count }}</v-list-title>
          </v-list>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>

<script>
export default {
  name: 'playerInfo',
  data() {
    return {
      player: this.$route.params.Name,
      players: []
    }
  },
  created() {
    this.$http.get("http://nflarrest.com/api/v1/player/topCrimes/" + this.player)
    .then(function(info){
      console.log(info);
      this.players = info.body
    })
  }
}
</script>
<style>
.vcon {
  font-size: 1.5em;
}
</style>
