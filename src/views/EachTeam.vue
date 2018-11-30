<template>
  <div>
    <h1 style="font-size: 3em; text-align: center;">{{ this.teamName }}</h1>
    <br>
    <v-layout row>
      <v-flex xs6>
        <h1>Player Name</h1>
      </v-flex>
      <v-flex xs6>
        <h1>Different Crimes Committed</h1>
      </v-flex>
    </v-layout>
    <v-container v-for="guy in players" :key="guy.Name" fluid class="vcon">
      <v-layout row>
        <v-flex xs6>
          <v-card>
            <router-link :to="'/PlayerInfo/' + guy.Name" class="nodecor"><v-card-text>{{ guy.Name }}</v-card-text></router-link>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card>
           <v-card-text>{{ guy.arrest_count }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default {
    name: 'eachTeam',
    data() {
      return {
        teamName: this.$route.params.Team_name,
        team: this.$route.params.Team,
        players: []
      }
    },
    created() {
    this.$http.get("http://nflarrest.com/api/v1/team/topPlayers/" + this.team)
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
.nodecor {
  text-decoration: none;
  color: black;
}
</style>
