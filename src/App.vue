<template>
  <div id="app">
    <transition :name="transitionName">
      <router-view class="child-view"/>
    </transition>
    <tabLink></tabLink>
  </div>
</template>

<script>
import tabLink from '@/components/tabLink'
export default {
  name: 'App',
  data(){
    return{
      case:new Set([])
    }
  },
  components:{tabLink},
  watch: {
    '$route' (to, from) {
      this.case.add(from.path);
      let results = this.switch(to.path,this.case);
      if(results){
        this.transitionName = 'slide-right'
        this.case.delete(from.path)
      }else{
        this.transitionName = 'slide-left'

      }
    }
  },
  methods:{
    switch: function (to,cases) {
      return cases.has(to)
    }
  }
}
</script>

<style>
#app {
  font-family: "Helvetica Neue",Helvetica,Roboto,Arial,sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
</style>
