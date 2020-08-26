<template>
  <div class="contents">
    <h2>Ask</h2>
    <ul v-if="data.length!=0">
      <li
        v-for="(item, index) in data"
        :key="index"
      >
        <dl>
          <dt :data-id="item.id">{{item.title}}</dt>
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
  </div>
</template>

<script>
import Error from "./Error";
import { mapState, mapActions } from 'vuex';

export default {
  components: {
    Error,
  },
  computed: {       
    ...mapState(['data'])
  },
  mounted () {
    this.loadDataFetch({item:'ask'})
  },
  methods: {
    ...mapActions(['loadDataFetch']),    
  },
}
</script>

<style>
  
</style>