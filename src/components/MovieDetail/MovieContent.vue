<template>
  <div class="movie-single-ct main-content">
    <h1 class="bd-hd">{{ movie.title }} <span>{{ movie.release_date.slice(0,4) }}</span></h1>
    <div class="social-btn">
      <a href="#" class="parent-btn"><i class="ion-heart"></i> Add to Favorite</a>
      <div class="hover-bnt">
        <a href="#" class="parent-btn"><i class="ion-android-share-alt"></i>share</a>
        <div class="hvr-item">
          <a href="#" class="hvr-grow"><i class="ion-social-facebook"></i></a>
          <a href="#" class="hvr-grow"><i class="ion-social-twitter"></i></a>
          <a href="#" class="hvr-grow"><i class="ion-social-googleplus"></i></a>
          <a href="#" class="hvr-grow"><i class="ion-social-youtube"></i></a>
        </div>
      </div>		
    </div>
    <div class="movie-rate">
      <div class="rate">
        <i class="ion-android-star"></i>
        <p><span>{{ movie.vote_average }}</span> /10<br>
          <span class="rv">56 Reviews</span>
        </p>
      </div>
      <div class="rate-star">
        <p>Rate This Movie:  </p>
        <i class="ion-ios-star"></i>
        <i class="ion-ios-star"></i>
        <i class="ion-ios-star"></i>
        <i class="ion-ios-star"></i>
        <i class="ion-ios-star"></i>
        <i class="ion-ios-star"></i>
        <i class="ion-ios-star"></i>
        <i class="ion-ios-star"></i>
        <i class="ion-ios-star-outline"></i>
      </div>
    </div>
  </div>
</template>

<script>
export default {
  name: 'MovieContent',
  props: {
    movie: Object
  }
}
</script>

<style>

</style>