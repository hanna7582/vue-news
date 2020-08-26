<template>
  <div>
    <div v-if="errorCode==500">{{errorCode}} Internal Server Error</div>
    <div v-else>...</div>  
  </div>
</template>

<script>
import { mapState } from 'vuex';

export default {
  computed: {       
    ...mapState(['errorCode'])
  }
}
</script>

<style>
  
</style>