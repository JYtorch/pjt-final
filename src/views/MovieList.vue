<template>
  <div class="buster-light">
<div class="hero common-hero">
	<div class="container">
		<div class="row">
			<div class="col-md-12">
				<div class="hero-ct">
					<h1>Movie Listing</h1>
					<ul class="breadcumb">
						<li @click.prevent="$router.push({name: 'Home'})" class="active"><a href="#">Home</a></li>
						<li> <span class="ion-ios-arrow-right"></span> movie listing</li>
					</ul>
				</div>
			</div>
		</div>
	</div>
</div>
<div class="page-single">
	<div class="container">
		<div class="row">
			<div class="col-md-12 col-sm-12 col-xs-12">
				<div class="topbar-filter fw">
					<p>Found <span>1,608 movies</span> in total</p>
					<label>Sort by:</label>
					<select>
						<option value="popularity">Popularity Descending</option>
						<option value="popularity">Popularity Ascending</option>
						<option value="rating">Rating Descending</option>
						<option value="rating">Rating Ascending</option>
						<option value="date">Release date Descending</option>
						<option value="date">Release date Ascending</option>
					</select>
					<a href="movielist.html" class="list"><i class="ion-ios-list-outline "></i></a>
					<a href="moviegridfw.html" class="grid"><i class="ion-grid active"></i></a>
				</div>
				<div class="flex-wrap-movielist mv-grid-fw">
            <movie-list-item v-for="movie in movies" :key="movie.id" :movie="movie"></movie-list-item>									
				</div>
        

				<div class="topbar-filter">
          
					<label>Movies per page:</label>
					<select>
						<option value="range">20 Movies</option>
						<option value="saab">10 Movies</option>
					</select>
					
					<div class="pagination2">
						<span>Page 1 of 2:</span>
						<a class="active" href="#">1</a>
						<a href="#">2</a>
						<a href="#">3</a>
						<a href="#">...</a>
						<a href="#">78</a>
						<a href="#">79</a>
						<a href="#"><i class="ion-arrow-right-b"></i></a>
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
import MovieListItem from '../components/MovieList/MovieListItem.vue'
export default {
  components: { MovieListItem },
  name: 'MovieList',
  data () {
    return {
      movies: [],
      page: 1
    }
  },
  methods: {
    getMovies () {      
      const API_KEY = 'e856b3ac18eec7abd7cf6099f977bbff'
      axios({
      method: 'get',
      url: `https://api.themoviedb.org/3/movie/now_playing?api_key=${API_KEY}&language=ko-KR&page=${this.page}`
    })
      .then(res => {
        this.page += 1
        this.movies.push(...res.data.results)
      })
    }
  },
  created () {    
    this.getMovies()
      
       
  },
  watch: {
    page () {
      if (this.page < 5) {        
        this.getMovies()
      }
    }
  }
}
</script>

<style>

</style>