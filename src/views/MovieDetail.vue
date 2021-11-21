<template>

  <div class="buster-light">
	<!-- <link rel="stylesheet" href="css/plugins.css?ver=ver=<?php echo G5_CSS_VER; ?>"> -->
  <!-- <link rel="stylesheet" href="css/style.css?ver=ver=<?php echo G5_CSS_VER; ?>"> -->
<div class="hero mv-single-hero">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<!-- <h1> movie listing - list</h1>
				<ul class="breadcumb">
					<li class="active"><a href="#">Home</a></li>
					<li> <span class="ion-ios-arrow-right"></span> movie listing</li>
				</ul> -->
			</div>
		</div>
	</div>
</div>

<div class="page-single movie-single movie_single">
	<div class="container">
		<div class="row ipad-width2">

			<!-- MovieDetail Image -->
			<div class="col-md-4 col-sm-12 col-xs-12">
				<movie-image :movie="movie"></movie-image>
			</div>


			<div class="col-md-8 col-sm-12 col-xs-12">
				
				<movie-content :movie="movie"></movie-content>


						<div class="movie-tabs">
							<div class="tabs">
								<ul class="tab-links tabs-mv">
									<li class="active"><a href="#overview">Overview</a></li>
									<li><a href="#reviews"> Reviews</a></li>
									<li><a href="#cast">  Cast & Crew </a></li>
									<li><a href="#media"> Media</a></li> 
									<li><a href="#moviesrelated"> Related Movies</a></li>                     
								</ul>
									<div class="tab-content">
										<!-- <router-view></router-view> -->
										<div id="overview" class="tab active">
											<movie-overview></movie-overview>
										</div>
										
										<div id="reviews" class="tab review">
											<movie-review></movie-review>		
										</div>
										
										<div id="cast" class="tab">
											<movie-cast></movie-cast>
										</div>
									
										<div id="media" class="tab">
											<movie-media></movie-media>
										</div>
										
										<div id="moviesrelated" class="tab">					       	 			
											<related-movie></related-movie>
										</div>
									</div>
							</div>
						</div>

				
			</div>
		</div>
	</div>
</div>
		</div>
</template>

<script>
import axios from 'axios'

import MovieContent from '../components/MovieDetail/MovieContent.vue'
import MovieImage from '../components/MovieDetail/MovieImage.vue'
import MovieOverview from '../components/MovieDetail/MovieOverview.vue'
import MovieCast from '../components/MovieDetail/MovieCast.vue'
import MovieMedia from '../components/MovieDetail/MovieMedia.vue'
import MovieReview from '../components/MovieDetail/MovieReview.vue'
import RelatedMovie from '../components/MovieDetail/RelatedMovie.vue'
export default {
  components: { 
		MovieImage,
    MovieContent,
    MovieOverview, 
		RelatedMovie, 
		MovieCast, 
		MovieReview,
    MovieMedia 
	},
  name: 'MovieDetail',
	data () {
		return {
			movie: null,
		}
	},
	created () {
		const id = this.$route.params.movieId
		const API_KEY = 'e856b3ac18eec7abd7cf6099f977bbff'
		
    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/${id}?api_key=${API_KEY}&language=ko&KR`
    })
      .then(res => {
        this.movie = res.data        
				console.log(this.movie)
      })
	},
}

</script>

<style>
/* @import '../assets/css/style.css'; */

</style>