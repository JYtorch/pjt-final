<template>
  <carousel-3d responsive disable3d="true" :space="370" :autoplay="true" :autoplay-timeout="5000" :display="20" :controlsVisible="true">
    <slide v-for="(slide, i) in slides" :index="i" :key="i">
      <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
        <img 
          :data-index="index" 
          :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }"
          :src="posterImg"
          
        >    
      </template>
    </slide>
  </carousel-3d>
</template>

<script>

export default {
  name: 'TheaterMovieItem',
  props:{
    movieItem: Object
  },
  computed: {
    posterImg () {
      return `https://image.tmdb.org/t/p/original${this.movieItem.poster_path}`
    }
  }
}
</script>

<style>

</style>