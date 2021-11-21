<template>
  <div class="home">
    <section>
      <slider-movie-items></slider-movie-items>
    </section>
    <div class="buster-light">
      <div class="movie-items">
        <div class="container">
          <div class="row ipad-width">
            <section>
              <popular-movies></popular-movies>
            </section>    
            <section>
              <recommended-movies></recommended-movies>
            </section>
            <section>
              <playlist-movies></playlist-movies>
            </section>
          </div>
        </div>
      </div>
    </div>
    
  </div>
</template>

<script>
import PlaylistMovies from '../components/Home/PlaylistMovies.vue'
import popularMovies from '../components/Home/PopularMovies.vue'
import RecommendedMovies from '../components/Home/RecommendedMovies.vue'
import SliderMovieItems from '../components/Home/SliderMovieItems.vue'
// @ is an alias to /src


export default {
  name: 'Home',
  components: {

    SliderMovieItems,
    popularMovies,
    RecommendedMovies,
    PlaylistMovies
    
  }
}
</script>

<style scoped>
body {
  overflow-y: scroll;
  scroll-behavior: smooth;
  scroll-snap-type: y mandatory;
}

section {
  scroll-snap-align: center;
}

</style>