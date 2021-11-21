<template>
		<div class="buster-light">

  <div class="hero user-hero">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="hero-ct">
					<h1>Edward kennedy’s profile</h1>
					<ul class="breadcumb">
						<li class="active"><a href="#">Home</a></li>
						<li> <span class="ion-ios-arrow-right"></span>Profile</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="page-single">
	<div class="container">
		<div class="row ipad-width">
			<div class="col-md-3 col-sm-12 col-xs-12">
				<div class="user-information">
					<div class="user-img">
						<a href="#"><img src="images/uploads/user-img.png" alt=""><br></a>
						<a href="#" class="redbtn">Change avatar</a>
					</div>
					<div class="user-fav">
						<p>Account Details</p>
						<ul>
              <li v-for="(tab, index) in accountsDetail" :key="index" :class="{ active: currentTab === index }">
                <a @click.prevent="currentTab = index " href="#">{{ tab }}</a>
              </li>
							<!-- <li  class="active"><a href="userprofile.html">Profile</a></li>
							<li><a href="userfavoritelist.html">Favorite movies</a></li>
							<li><a href="userrate.html">Rated movies</a></li> -->
						</ul>
					</div>
					<div class="user-fav">
						<p>Others</p>
						<ul>
							<li :class="{ active: currentTab === 3}"><a @click.prevent="currentTab = 3" href="#">Change information</a></li>
							<li><a href="#">Log out</a></li>
						</ul>
					</div>
				</div>
			</div>
			<div class="col-md-9 col-sm-12 col-xs-12">
        <user-profile-detail v-if="currentTab == 0"></user-profile-detail>
        <user-favorite-movies v-if="currentTab == 1"></user-favorite-movies>
        <user-rated-movies v-if="currentTab == 2"></user-rated-movies>
				<user-change-form v-if="currentTab == 3"></user-change-form>
			</div>
		</div>
	</div>
</div>
		</div>
</template>

<script>
import UserChangeForm from '../components/Profile/UserChangeForm.vue'
import UserFavoriteMovies from '../components/Profile/UserFavoriteMovies.vue'
import UserProfileDetail from '../components/Profile/UserProfileDetail.vue'
import UserRatedMovies from '../components/Profile/UserRatedMovies.vue'
export default {
  name: 'UserProfile',
  components: {
    UserChangeForm,
    UserFavoriteMovies,
    UserRatedMovies,
    UserProfileDetail
  },
  data () {
    return {
      currentTab: 0,      
      accountsDetail: ['Profile', 'Favorite Movies', 'Rated Movies']
    }
  }
}
</script>

<style>

</style>