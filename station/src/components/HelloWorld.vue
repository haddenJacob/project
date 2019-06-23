<template>
  <div class="hello">
	<tag type="primary">Tag Primary</tag>
	<tag type="info">Tag Info</tag>
	<tag type="success">Tag Success</tag>
	<tag type="danger">Tag Danger</tag>
	<tag type="warning">Tag Warning</tag>
	<tag type="primary" color="#f50" :closable="true">Tag Color</tag>
  </div>
</template>

<script>
export default {
  name: 'HelloWorld',
  data () {
    return {
      msg: 'Welcome to Your Vue.js App'
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
