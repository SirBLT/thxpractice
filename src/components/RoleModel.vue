<template>
  <div style="height: 160px; background-color: black;">
    <img class="first" src="http://www.bltwebsite.com/maxMugShot.jpg">
    <img class="second" src="http://www.bltwebsite.com/maxMugShot.jpg">
	<h2 style="color: white; font-size: 3.5em;">NFL Role Models</h2>
    <br>
    <input type="text" class="searchBar" v-model="search" placeholder="Search for your son's role model!!" />

  </div>
</template>
<script>
    export default {
        name: 'roleModel',
        data() {
            return {
               search: ''
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
  width: 20%;
  font-size: 1em;
  text-align: center;
  font-family: cursive;
}
</style>
