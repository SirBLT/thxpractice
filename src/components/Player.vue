<template>
<div>
  <v-layout row>
    <v-flex xs4>
      <h1>Player Name</h1>
    </v-flex>
    <v-flex xs4>
      <h1>Proud Team</h1>
    </v-flex>
    <v-flex xs4 >
      <h1>Trips to the Clink</h1>
    </v-flex>
  </v-layout>
  <br>
<div style="font-weight: bold; font-size: 1.5em;">
    <v-container v-for="player in players" fluid >
    <v-layout row>
    <v-flex xs4 >
      <v-card>
        <v-card-text>{{ player.Name }}</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs4 >
      <v-card>
        <v-card-text>{{ player.Team_name }}</v-card-text>
      </v-card>
    </v-flex>
    <v-flex xs4 >
      <v-card>
        <v-card-text>{{ player.arrest_count }}</v-card-text>
      </v-card>
    </v-flex>
    </v-layout>
    </v-container>
</div>  
</div>
</template>

<script>
  export default {
        name: 'player',
        data() {
            return {
                players: []
                
            }
        },
        created() {
          this.$http.get("http://www.NflArrest.com/api/v1/player").then(function(info){
            console.log(info);
            this.players = info.body
          })
        }
    }
</script>
<style>
h1 {
  text-decoration: underline;
}
</style>