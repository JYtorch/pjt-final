<template>
  <div id="app">
  <!-- <link rel="stylesheet" href="css/plugins.css?ver=ver=<?php echo G5_CSS_VER; ?>"> -->
  <link rel="stylesheet" href="css/style.css?ver=ver=<?php echo G5_CSS_VER; ?>">
    <!--preloading-->
    <!-- <div id="preloader">
        <img class="logo" src="images/logo1.png" alt="" width="119" height="58">
        <div id="status">
            <span></span>
            <span></span>
        </div>
    </div> -->
    <!--end of preloading-->
    <login-form></login-form>
    <signup-form></signup-form>
    <Header/>
    <router-view/>
    <Footer/>
  </div>
</template>

<script src="js/jquery.js"></script>
<script src="js/plugins.js"></script>
<script src="js/plugins2.js"></script>
<script src="js/custom.js"></script>  
<script>
import LoginForm from './components/Account/LoginForm.vue'
import SignupForm from './components/Account/SignupForm.vue'
import Footer from './components/Footer.vue'
import Header from './components/Header.vue'
export default {
  components: { 
    Header, 
    SignupForm, 
    LoginForm, 
    Footer 
    },
  
}

</script>

<style>
@import 'http://fonts.googleapis.com/css?family=Dosis:400,700,500|Nunito:300,400,600';
@import './assets/css/style.css';
/* @import './assets/css/plugins.css'; */


</style>
