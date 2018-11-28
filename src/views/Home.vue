<template>
<div>
  <RoleModel />
  <br>
  <Player />
  </div>
</template>

<script>
// @ is an alias to /src
import RoleModel from '@/components/RoleModel.vue'
import Player from '@/components/Player.vue'

export default {
  name: 'home',
  components: {
    RoleModel,
    Player
  }
}
</script>
