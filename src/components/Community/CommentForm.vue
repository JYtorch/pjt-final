<template>
  <div class="comment-form">
    <h4>Leave a comment</h4>
    <form action="#">
      <div class="row">
        <div class="col-md-4">
          <input v-model.trim="author" type="text" placeholder="Your name">
        </div>
        <!-- <div class="col-md-4">
          <input type="text" placeholder="Your email">
        </div> -->
        <!-- <div class="col-md-4">
          <input type="text" placeholder="Website">
        </div> -->
      </div>
      <div class="row">
        <div class="col-md-12">
          <textarea v-model.trim="message" name="message" id="" placeholder="Message"></textarea>
        </div>
      </div>
      <input @click.prevent="leaveComment" class="submit" type="submit" placeholder="submit">
    </form>
  </div>
</template>

<script>
export default {
  name: 'CommentForm',
  data () {
    return {
      author: null,
      message: null,
    }
  },
  methods: {
    leaveComment () {
      if (this.author && this.message) {
        this.$emit('get-message', {author: this.author, message: this.message})
        this.author = null
        this.message = null
      }

    }
  }
}
</script>

<style>

</style>