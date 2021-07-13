<template>
<v-app id="login" class="primary">
<v-snackbar color="secondary" v-model="snackbar" :top="'top'">
{{msg}}
<v-btn class="error" fab x-small text @click="snackbar = false">
X
</v-btn>
</v-snackbar>
<v-main>
<v-container  fluid fill-height>
<v-layout  align-center justify-center>
<v-flex xs12 sm8 md4 lg4>
<v-card class="elevation-10 pa-3">
<v-card-text>
<div class="layout column align-center">

<!-- Generator: Adobe Illustrator 25.2.3, SVG Export Plug-In . SVG Version: 6.00 Build 0)  -->


<!-- <img src="/logo.png" alt="ssep login" style="width:400px"> -->
<!-- <h1 class="flex my-2 secondary--text">SSEP LOGIN</h1> -->
</div>
<v-form>
<v-text-field label="Email" type="text"
v-model="email"></v-text-field>
<v-text-field autocomplete name="password" label="Password" id="password" type="password"
v-model="password"></v-text-field>
</v-form>
</v-card-text>
<v-card-actions>
<v-btn small block color="primary" @click="login" :loading="loading">Login</v-btn>
</v-card-actions>

</v-card>
</v-flex>
</v-layout>
</v-container>
</v-main>
</v-app>
</template>

<script>

export default {
layout:'login',
data:() => ({
loading:false,
snackbar:false,
email:'',
password:'',
msg:''
}),
methods:{

login () {

let credentials = { email: this.email, password: this.password };

try {
this.$auth.loginWith('local',{ data:credentials })
.catch((e) => {
 this.$swal.fire({
  icon: 'error',
  title: e.response.data.error,
  showConfirmButton: false,
  timer: 1500
 })
})
}
catch{ console.log('error') }

}

}

}
</script>
<style scoped lang="css">
#login {
height: 50%;
width: 100%;
position: absolute;
top: 0;
left: 0;
content: "";
z-index: 0;
}
</style>
