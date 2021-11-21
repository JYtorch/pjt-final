<template>

<div class="col-md-12">
	<div class="title-hd">
		<h2>인기작</h2>
		<a @click.prevent="$router.push({name: 'MovieList'})" href="#" class="viewall">View all <i class="ion-ios-arrow-right"></i></a>
	</div>
	<div class="row">
		<carousel-3d disable3d="true" :space="395" :autoplay="true" :autoplay-timeout="5000" :display="20" :controlsVisible="true" :height="510" :clickable="false">
			<slide v-for="(slide, i) in popularMovies" :index="i" :key="i">
				<template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">												
          <div class="movie-item" style="width: 100%;">
            <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="`https://image.tmdb.org/t/p/original${slide.poster_path}`">
            <div class="hvr-inner">
              <a @click.prevent="$router.push({ path: `detail-${slide.id}` })" href="moviesingle.html"> Read more <i class="ion-android-arrow-dropright"></i> </a>
            </div>
          
            <div class="title-in" style="margin-bottom: 40px;">    
              <h6><a href="#">Interstellar</a></h6>
              <p><i class="ion-android-star"></i><span>7.4</span> /10</p>
            </div>
          </div>
				</template>
			</slide>
		</carousel-3d>
	</div>
	<hr>
	<br>
</div>
		

</template>

<script>
import axios from 'axios'
import { Carousel3d, Slide } from 'vue-carousel-3d';
// import TheaterMovieItem from './TheaterMovieItem.vue'


export default {
  components: {
    // TheaterMovieItem 
		Carousel3d,
    Slide
  },
  name: 'MovieItems',
  data () {
    return {
      popularMovies: 20,
			
    }
  },
  created () {
    const API_KEY = 'e856b3ac18eec7abd7cf6099f977bbff'
    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`
    })
      .then(res => {
        this.popularMovies = res.data.results
        // console.log(this.movieItems)
      })
  },
}
</script>

<style>

</style>