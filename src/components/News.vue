<template>
  <div class="contents">
    <h2>{{currentMenu}}</h2>
    <ul v-if="data.length!=0">
      <li
        v-for="(item, index) in data"
        :key="index"
      >
        <dl>
          <dt :data-id="item.id">{{item.title}}</dt>
          <dd>{{item.domain}}</dd>
          <dd>{{item.points}}</dd>
          <dd>{{item.comments_count}}</dd>
          <dd>{{item.user}}</dd>
          <dd>{{item.time}}</dd>
          <dd>{{item.time_ago}}</dd>
          <dd><a :href="item.url">link</a></dd>
        </dl>
      </li>
    </ul>
    <Error />
    <!-- <div class="no-list" v-else>      
      <div v-if="errorCode==500">{{errorCode}} Internal Server Error</div>
      <div v-else>...</div>      
    </div> -->
  </div>
</template>

<script>
import Error from "./Error";
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    Error,
  },
  // data() {
  //   return {
  //     news:[]
  //   }
  // },
  computed: {       
    ...mapState(['data','currentMenu'])
  },
  mounted () {
    // this.loadFetch();
    this.loadDataFetch({item:'news'})
  },
  methods: {
    ...mapActions(['loadDataFetch']),    
    // loadFetch() {
    //   this.$axios.get('https://api.hnpwa.com/v0/news/1.json')
    //   .then( res => {
    //     this.news=res.data;       
    //   })
    // }
  },
}
</script>

<style>
  
</style>