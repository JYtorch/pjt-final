<template>
  <div class="sidebar">
    <div class="sb-search sb-it">
      <h4 class="sb-title">Search</h4>
      <input type="text" placeholder="Enter keywords">
    </div>
    <div class="sb-cate sb-it">
      <h4 class="sb-title">Categories</h4>
      <ul>
        <li><a href="#">전체 (50)</a></li>
        <li><a href="#">영화 리뷰 (38)</a></li>
        <li><a href="#">토론 (5)</a></li>
        <li><a href="#">자유 (7)</a></li>
        <!-- <li><a href="#"> (06)</a></li> -->
      </ul>
    </div>
    <div class="sb-recentpost sb-it">
      <h4 class="sb-title">most popular review</h4>
      <div class="recent-item">
        <span>01</span><h6><a href="#">Korea Box Office: Beauty and the Beast Wins Fourth</a></h6>
      </div>
      <div class="recent-item">
        <span>02</span><h6><a href="#">Homeland Finale Includes Shocking Death </a></h6>
      </div>
      <div class="recent-item">
        <span>03</span><h6><a href="#">Fate of the Furious Reviews What the Critics Saying</a></h6>
      </div>
    </div>
    <!-- <div class="sb-tags sb-it">
      <h4 class="sb-title">tags</h4>
      <ul class="tag-items">
        <li><a href="#">Batman</a></li>
        <li><a href="#">film</a></li>
        <li><a href="#">homeland</a></li>
        <li><a href="#">Fast & Furious</a></li>
        <li><a href="#">Dead Walker</a></li>
        <li><a href="#">King</a></li>
        <li><a href="#">Beauty</a></li>
      </ul>
    </div>
    <div class="ads">
      <img src="images/uploads/ads1.png" alt="">
    </div> -->
  </div>
</template>

<script>
export default {
  name: 'CommunitySidebar'
}
</script>

<style>

</style>