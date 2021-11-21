<template>
<div class="slider movie-items">
	<div class="container">
		<div class="row">
			<div class="social-link">
				<p>Follow us: </p>
				<a href="#"><i class="ion-social-facebook"></i></a>
				<a href="#"><i class="ion-social-twitter"></i></a>
				<a href="#"><i class="ion-social-googleplus"></i></a>
				<a href="#"><i class="ion-social-youtube"></i></a>
			</div>
	    	<!-- <div  class="slick-multiItemSlider"> -->
					<!-- <slider-movie-item 
						:movieItem="movieItem"
					></slider-movie-item> -->
					<carousel-3d :autoplay="true" :autoplay-timeout="5000" :display="20" :controlsVisible="true" :width="350" :height="490">
						<slide v-for="(slide, i) in slides" :index="i" :key="i">      
							<template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
								<div class="movie-item" style="width: 100%;">
									<img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="`https://image.tmdb.org/t/p/original${slide.poster_path}`" style="height: 490px;">
									<div class="hvr-inner">
										<a @click.prevent="$router.push({ path: `detail-${slide.id}` })" href="moviesingle.html"> Read more <i class="ion-android-arrow-dropright"></i> </a>
									</div>
								
									<div class="title-in">
										<div class="cate">
											<span class="blue"><a href="#">Sci-fi</a></span>
										</div>
										<h6><a href="#">Interstellar</a></h6>
										<p><i class="ion-android-star"></i><span>7.4</span> /10</p>
									</div>            
								</div>
							</template>
						</slide>
					</carousel-3d>
	    		
	    	<!-- </div> -->
	    </div>
	</div>
</div>
</template>

<script>
import axios from 'axios'
import { Carousel3d, Slide } from 'vue-carousel-3d';

// import SliderMovieItem from './SliderMovieItem.vue'
export default {
  components: { 
		// SliderMovieItem 
		Carousel3d,
		Slide
		},
  name: 'SliderMovieItems',
	data () {
    return {
      movieItems: null,
			slides: 20,
    }
  },
  created () {
    const API_KEY = 'e856b3ac18eec7abd7cf6099f977bbff'
    axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=1`
    })
      .then(res => {
        this.slides = res.data.results
        // console.log(this.movieItems)
      })
  },
}
</script>

<style>

</style>