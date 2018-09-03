<template>
  <div id="app">
    <div id="nav">
      <router-link to="/">Home</router-link> |
      <router-link to="/about">About</router-link> |
      <template v-if="!currentUser">
        <router-link to="/signup"> Sign up</router-link>|
        <router-link to="/signin"> Sign in</router-link>
      </template>
      <template v-else>
        <a @click="signOut"> Sign Out</a>
      </template>

    </div>
    <router-view/>
  </div>
</template>

<script>
import database from '@/services/database';
export default {
  computed: {
    currentUser() {
      return this.$store.state.currentUser;
    }
  },
  methods: {
    async signOut(){
      await database.signOut();
      this.$router.push('/signin');
    }
  }
}
</script>

<style>
@import '~bulma/css/bulma.css';
#app {
  font-family: 'Avenir', Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}
#nav {
  padding: 30px;
}

#nav a {
  font-weight: bold;
  color: #2c3e50;
}

#nav a.router-link-exact-active {
  color: #42b983;
}
</style>
