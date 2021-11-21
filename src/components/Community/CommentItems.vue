<template>
  <!-- comment items -->
  <div class="comments">
    <h4 v-show="messageInfo.length">{{ messageInfo.length }} Comments</h4>

    <div class="cmt-item" v-for="(data, index) in messageInfo" :key="index">
      <!-- <img src="images/uploads/author.png" alt=""> -->
      <div class="author-infor">
        <div class="flex-it2">
          <h6><a href="#">{{ data.author }}</a></h6> <span class="time"> - 27 Mar 2017</span>
        </div>
        <p style="white-space:pre;">{{ data.message }}</p>
        <p><a class="rep-btn" href="#">+ Reply</a></p>
      </div>
    </div>

    <!-- <div class="cmt-item flex-it">
      <img src="images/uploads/author.png" alt="">
      <div class="author-infor">
        <div class="flex-it2">
          <h6><a href="#">Steve Perry</a></h6> <span class="time"> - 27 Mar 2017</span>
        </div>
        <p>Even though Journey's classic vocalist Steve Perry didn’t reunite with the band during their Rock Hall performance (to the dismay of hopeful fans), he did offer up a touching speech.</p>
        <p><a class="rep-btn" href="#">+ Reply</a></p>
      </div>
    </div> -->


    <!-- <div class="cmt-item flex-it reply">
      <img src="images/uploads/author2.png" alt="">
      <div class="author-infor">
        <div class="flex-it2">
          <h6><a href="#">Joss Whedon</a></h6> <span class="time"> - 27 Mar 2017</span>
        </div>
        <p>Prince died not long after the 2016 Rock Hall ceremony, so this year's edition featured Lenny Kravitz and a full gospel choir performing a swamp-funk take on When Doves Cry.</p>
      </div>
    </div>


    <div class="cmt-item flex-it reply">
      <img src="images/uploads/author3.png" alt="">
      <div class="author-infor">
        <div class="flex-it2">
          <h6><a href="#">Dave McNary</a></h6> <span class="time"> - 27 Mar 2017</span>
        </div>
        <p>Blue Sky Studios is one of the world’s leading digital animation movie studios and we are proud of their commitment to stay and grow in Connecticut.</p>
      </div>
    </div> -->


    <!-- <div class="cmt-item flex-it">
      <img src="images/uploads/author4.png" alt="">
      <div class="author-infor">
        <div class="flex-it2">
          <h6><a href="#">Margot Robbie</a></h6> <span class="time"> - 27 Mar 2017</span>
        </div>
        <p>Joan Baez was the sharpest of the Rock Hall inductees, singing about deportees and talking social activism as well as joking about her age and the likelihood that a good portion of the Barclays. </p>
        <p><a class="rep-btn" href="#">+ Reply</a></p>
      </div>
    </div> -->
    <h4 v-show="!messageInfo.length">작성된 댓글이 없습니다.</h4>

  </div>
</template>

<script>
export default {
  name: 'CommentItems',
  props: {
    messageInfo: Array
  },
  methods: {
    addComment () {

    }
  },
  watch: {
    messageInfo () {
      
    }
  }
}
</script>

<style>

</style>