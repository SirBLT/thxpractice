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
    <v-container v-for="team in teams" :key="team.Team" fluid class="vcon">
      <v-layout row>
        <v-flex xs6>
          <v-list>
            <router-link :to="'/EachTeam/' + team.Team + '/' + team.Team_name" class="nodecor"><v-list-title>{{ team.Team_name }}</v-list-title></router-link>
          </v-list>
        </v-flex>
        <v-flex xs6>
          <v-list>
            <v-list-title>{{ team.arrest_count }}</v-list-title>
          </v-list>
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