<template>
    <div container-fluid>
        <div>
            <h2>Welcome {{ user.userDetails[0].displayName }} 
                
            </h2>
            <p>You are logged in</p>
            <img :src="user.userDetails[0].photoURL" alt="" 
                class="img-circle" height="100px" width="100px"
            >
        </div>
    </div>
</template>


<script>
export default {
    data () {
        return {

        }
    },
    computed: {
       user () {
           return this.$store.getters.user
       } 
       
    }
  
}
</script>

<style scoped>
h2 {
    font-weight: 700
}

</style>
