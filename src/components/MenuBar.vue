<template>
  <div>
    <button
      v-for="item in menu" 
      :key="item"
      :class="activeMenu(item)"
      @click="changeCurrentMenu({item})"
    >
      {{item}}
    </button>
  </div>
</template>

<script>
import { mapState, mapMutations } from 'vuex';
export default {
  data() {
    return {
      menu:['news','ask','jobs'],
    }
  },
  computed: {       
    ...mapState(['currentMenu'])
  },
  mounted() {      
    var path=window.location.pathname.replace('/','');  
    console.log(path);
    if(path==''){
      this.changeCurrentMenu({item:'news'})
    }else{
      this.changeCurrentMenu({item:path})
    }
    this.activeMenu(path);         
  },
  methods: {
    ...mapMutations(['changeCurrentMenu']),
    activeMenu(item){
      return this.currentMenu==item?'active':'';
    }
  },
}
</script>

<style>

</style>