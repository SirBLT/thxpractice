<template>
  <div>
    <h1 style="font-size: 3em; text-align: center;">{{</h1>
  </div>
</template>

<script>
export default {
  name: playerInfo,
  data() {
    return {

    }
  },
  created() {
    this.$http.get("http://nflarrest.com/api/v1/player/topCrimes/") + player
    .then(function(info){
      console.log(info);
      this.players = info.body
    })
}
</script>
