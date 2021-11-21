<template>
  <carousel-3d :autoplay="true" :autoplay-timeout="5000" :display="20" :controlsVisible="true" :height="510">
    <slide v-for="(slide, i) in slides" :index="i" :key="i">      
      <template slot-scope="{ index, isCurrent, leftIndex, rightIndex }">
        <img :data-index="index" :class="{ current: isCurrent, onLeft: (leftIndex >= 0), onRight: (rightIndex >= 0) }" :src="`https://image.tmdb.org/t/p/original${slide.poster_path}`">
        {{ slide.poster_path }}            
      </template>
    </slide>
  </carousel-3d>
</template>

<script>
import { Carousel3d, Slide } from 'vue-carousel-3d';
export default {
  name: 'SliderMovieItem',
  components: {
    Carousel3d,
		Slide
  },
  data () {
    return {
      slides: 20
    }
  },
  props: {
    movieItems: Array
  },
  created () {
    this.slides = this.movieItems
  }
}
</script>

<style>

</style>