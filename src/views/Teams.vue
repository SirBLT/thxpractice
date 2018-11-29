<template>
  <div>
    <h1 style="font-size: 3em; text-align: center;">All Teams</h1>
    <br>
    <br>
    <v-layout row>
      <v-flex xs6>
        <h1>Team Name</h1>
      </v-flex>
      <v-flex xs6>
        <h1>Arrest Count</h1>
      </v-flex>
    </v-layout>
    <v-container v-for="team in teams" fluid class="vcon">
      <v-layout row>
        <v-flex xs6>
          <v-card>
            <router-link :to="'/EachTeam/' + team.Team + '/' + team.Team_name" class="nodecor"><v-card-text>{{ team.Team_name }}</v-card-text></router-link>
          </v-card>
        </v-flex>
        <v-flex xs6>
          <v-card>
            <v-card-text>{{ team.arrest_count }}</v-card-text>
          </v-card>
        </v-flex>
      </v-layout>
    </v-container>
  </div>
</template>
<script>
  export default {
    name: 'Teams',
    data() {
      return {
        teams: []
      }
    },
    created() {
      this.$http.get("http://nflarrest.com/api/v1/team")
      .then(function(info){
        console.log(info);
        this.teams = info.body
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