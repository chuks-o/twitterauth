<template>
    <div class="cont">
        <nav class="navbar navbar-inverse navbar-fixed-top">
        <div class="container">
            <div class="navbar-header">
            <button type="button" class="navbar-toggle" data-toggle="collapse" data-target="#myNavbar">
                <span class="icon-bar"></span>
                <span class="icon-bar"></span>
                <span class="icon-bar"></span> 
            </button>
            <a class="navbar-brand" href="#">{{ title }}</a>
            </div>
            <div class="collapse navbar-collapse" id="myNavbar">
            <ul class="nav navbar-nav navbar-right">
                <li v-if="! user">
                    <router-link to="/">
                        <span class="fa fa-sign-in"></span> SignIn
                    </router-link>
                </li>
                <li v-else>
                    <button class="btn btn-success btn-sm"
                        @click="logout">
                        <span class="fa fa-sign-out"></span> Logout
                    </button>
                </li>
            </ul>
            </div>
        </div>
        </nav>
    </div>
</template>

<script>
export default {
  data() {
    return {
      title: "TweetAuth"
    };
  },
  computed: {
    user() {
      return this.$store.getters.user;
    }
  },
  watch: {
    user(value) {
        if (!value) 
        this.$router.push('/')
    }
  },
  methods: {
    logout() {
      this.$store.dispatch('logout')
    }
  }
}
</script>

<style>
.cont {
  margin-bottom: 70px;
}
</style>


