<template>
    <div class="container-fluid">
        <div class="row">
            <div class="col-md-6">
                <h3>Sign In with Twitter</h3>
                <button class="btn btn-primary"
                    @click="signIn">
                    <i class="fa fa-twitter"></i>
                    SignIn with Twitter
                </button>
            </div>
        </div>
    </div>
</template>


<script>
export default {
    methods: {
        signIn () {
            this.$store.dispatch('signIn')
        } 
    }
}
</script>

<style scoped>
h3 {
    font-weight: 700;
}
button {
    background-color: #1dcaff;
    border: 1px solid  #1dcaff;
}
div button:hover {
    background-color: #00aced;
    border: 1px solid  #00aced;
}

</style>
