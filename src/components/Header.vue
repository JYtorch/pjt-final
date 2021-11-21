<template>
<header class="ht-header">
	<div class="container">
		<nav class="navbar navbar-default navbar-custom">
      <!-- Brand and toggle get grouped for better mobile display -->
				<div class="navbar-header logo">
          <div class="navbar-toggle" data-toggle="collapse" data-target="#bs-example-navbar-collapse-1">
            <span class="sr-only">Toggle navigation</span>
            <div id="nav-icon1">
            <span></span>
            <span></span>
            <span></span>
          </div>
          </div>
          <a @click.prevent="$router.push({name: 'Home'})" href="index_light.html"><img class="logo" src="images/logo1.png" alt="" width="119" height="58"></a>
        </div>
				<!-- Collect the nav links, forms, and other content for toggling -->
				<div class="collapse navbar-collapse flex-parent" id="bs-example-navbar-collapse-1">
					<ul class="nav navbar-nav flex-child-menu menu-left">
						<li class="hidden">
							<a href="#page-top"></a>
						</li>
						<li class="dropdown first">
							<a @click.prevent="$router.push({name: 'Home'})" class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown">
							Home</a>
							
						</li>
						<li class="dropdown first">
							<a @click.prevent="$router.push({name: 'MovieList'})" class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							movies</a>
							
						</li>
						<li class="dropdown first">
							<a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							celebrities</a>
							
						</li>
						<li class="dropdown first">
							<a @click.prevent="$router.push({name: 'Community'})" class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							Community</a>
							
						</li>
						<li @click.prevent="$router.push({name: 'UserProfile'})" class="dropdown first">
							<a class="btn btn-default dropdown-toggle lv1" data-toggle="dropdown" data-hover="dropdown">
							User Profile</a>
	
						</li>
					</ul>
					<ul class="nav navbar-nav flex-child-menu menu-right">
	
						<li class="loginLink"><a href="#">LOG In</a></li>
						<li class="btn signupLink"><a href="#">sign up</a></li>
					</ul>
				</div>
			<!-- /.navbar-collapse -->
    </nav>
    <top-search-form></top-search-form>
    
	</div>
</header>
<!-- END | Header -->
</template>

<script>
import TopSearchForm from './Header/TopSearchForm.vue'
export default {
  components: { TopSearchForm },
  name: 'Header'
}
</script>

<style>

</style>