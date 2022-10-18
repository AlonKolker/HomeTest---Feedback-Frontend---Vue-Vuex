<template>
  <section class="app-conteiner">
    <feedback-form />
    <feedback />
  </section>
</template>

<script>
import feedback from "./views/feedback.vue"
import feedbackForm from "./views/feedback-form.vue"

export default {
  name: "app",
  components: {
    feedback,
    feedbackForm,
  },
  created() {
    this.$store.dispatch({ type: "loadFeedbacks" })
  },
}
</script>
