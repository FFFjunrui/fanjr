<template>
  <div class="hello">
    <div v-for="item in msg" :key="item">
      <h2><router-link :to='item.path'>{{item.name}}</router-link></h2>
    </div>
  </div>
</template>

<script>
export default {
  name: 'list',
  data () {
    return {
      msg: [{
        name:'welcome',
        path:'/hello'
      },
      {
        name:'wel',
        path: '/hello'
      }
      ]
    }
  }
}
</script>

<!-- Add "scoped" attribute to limit CSS to this component only -->
<style scoped>
h1, h2 {
  font-weight: normal;
}
ul {
  list-style-type: none;
  padding: 0;
}
li {
  display: inline-block;
  margin: 0 10px;
}
a {
  color: #42b983;
}
</style>
