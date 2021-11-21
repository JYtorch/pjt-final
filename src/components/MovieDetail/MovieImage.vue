<template>
  
  <div class="movie-img sticky-sb">
    <img :src="`https://image.tmdb.org/t/p/original${movie.poster_path}`" alt=""> 
    
    <div class="movie-btn">	
      <div class="btn-transform transform-vertical red">
        <div><a href="#" class="item item-1 redbtn"> <i class="ion-play"></i> Watch Trailer</a></div>
        <div><a href="https://www.youtube.com/embed/o-0hcF97wy0" class="item item-2 redbtn fancybox-media hvr-grow"><i class="ion-play"></i></a></div>
      </div>
      <div class="btn-transform transform-vertical">
        <div><a href="#" class="item item-1 yellowbtn"> <i class="ion-card"></i> Buy ticket</a></div>
        <div><a href="#" class="item item-2 yellowbtn"><i class="ion-card"></i></a></div>
      </div>
    </div>
  </div>
  
</template>

<script>
export default {
  name: 'MovieImage',
  props: {
    movie: Object
  },
  data () {
    return {      
    }
  },  
}
</script>

<style>

</style>