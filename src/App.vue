<template>
  <div id="app">
    <menu-bar></menu-bar>    
    <router-view />
  </div>
</template>

<script>
// 해당 파일에만 eslint 비활성화 
// /* eslint-disable */ 
import MenuBar from "./components/MenuBar";
export default {
  components: {
    MenuBar,
  },  
}
</script>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  color: #2c3e50;
  margin-top: 60px;
}
.active{
  color:blue;
}
li{
   list-style: none;   
}
.contents{
  animation: cloak-in 1s;
}
.contents[v-cloak]{
    opacity: 0;
}
@keyframes cloak-in {
    0%{opacity: 0;}
}
</style>
