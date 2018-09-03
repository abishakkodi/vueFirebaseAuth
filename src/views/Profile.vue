<template>
  <div>
    <h1> Profile </h1>
    <div v-if="currentUser">
      <p>{{currentUser.email}}</p>
    </div>
  </div>


</template>


<script>
export default {
  name: 'profile',
  computed: {
    currentUser() {
      return this.$store.state.currentUser
    }
  }
}


</script>