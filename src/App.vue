<template>
  <div id="app">
    <Header msg="Header" />
    <main>
      <Card />
    </main>
  </div>
</template>

<script>
import Header from './components/Header.vue'
import Card from './components/Card.vue'

export default {
  name: 'App',
  components: {
    Header,
    Card
  }
}
</script>

<style>
#app{
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    justify-content: center;

}

* {
    padding: 0;
    margin: 0;
    box-sizing: border-box;
}

body {
   font-size: 0.875rem;
    font-family: Roboto, Oxygen, Ubuntu, Cantarell, 'Open Sans', 'Helvetica Neue', sans-serif,sans-serif !important;
    min-height: 100vh;
}

p, label {
    line-height: 25px
}

main {
  margin: auto;
  padding: 1rem;
  display: flex;
  flex-direction: column;
  align-items: center;
}
main a {
  margin-top: 1rem;
  color: #0099FF;
}

</style>
