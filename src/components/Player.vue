<template>
<div>
  <div style="height: 160px; background-color: black;">
    <img class="first" src="http://www.bltwebsite.com/maxMugShot.jpg">
    <img class="second" src="http://www.bltwebsite.com/maxMugShot.jpg">
	<h2 style="color: white; font-size: 3.5em;">NFL Role Models</h2>
    <br>
    <input type="text" class="searchBar" v-model="search" placeholder="Search for your son's role model!!" />

  </div>
  <v-layout row>
    <v-flex xs4>
      <h1>Player Name</h1>
    </v-flex>
    <v-flex xs4>
      <router-link :to="'/Teams'" class="nodecor"><h1>Proud Team</h1></router-link>
    </v-flex>
    <v-flex xs4 >
      <h1>Different Offenses</h1>
    </v-flex>
  </v-layout>
  <br>
<div style="font-weight: bold; font-size: 1.5em;">
    <v-container v-for="player in filteredPlayers" :key="player.Name" fluid >
    <v-layout row>
    <v-flex xs4 >
      <v-list>
        <router-link :to="'/PlayerInfo/' + player.Name" class="nodecor"><v-list-title>{{ player.Name }}</v-list-title></router-link>
      </v-list>
    </v-flex>
    <v-flex xs4 >
      <v-list>
        <router-link :to="'/EachTeam/' + player.Team + '/' + player.Team_name" class="nodecor"><v-list-title>{{ player.Team_name }}</v-list-title></router-link>
      </v-list>
    </v-flex>
    <v-flex xs4 >
      <v-list>
        <router-link :to="'/PlayerInfo/' + player.Name" class="nodecor"><v-list-title>{{ player.arrest_count }}</v-list-title></router-link>
      </v-list>
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
              players: [],
              search: ''
            }
        },
        created() {
          this.$http.get("http://www.NflArrest.com/api/v1/player").then(function(info){
            console.log(info);
            this.players = info.body
          })
        },
        computed: {
            filteredPlayers: function() {
                return this.players.filter(player => {
                    return player.Name.match(this.search)
                })
            }
        }
    }
</script>
<style>
.first {
	position: absolute;
	left: 0;
	height: 160px;
	width: 160px;
    animation: rTl 5s;
}
@keyframes rTl {
    0% {
        left: 100%
    }
    100% {
        left: 0%;
    }
}
.second {
	position: absolute;
	right: 0;
	height: 160px;
	width: 160px;
    animation: lTr 5s;
}
@keyframes lTr {
    0% {
        right: 100%;
    }
    100% {
        right: 0%;
    }
}
.searchBar {
  background-color: white;
  width: 20%;
  font-size: 1em;
  text-align: center;
  font-family: cursive;
}
h1 {
  
  text-decoration: underline;
}
.nodecor {
  text-decoration: none;
  color: black;
}
</style>