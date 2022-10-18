<template>
  <section class="feedback-preview-conteiner flex">
    <img class="user-img" v-if="feedback" :src="feedback.imgSrc" alt="" />
    <div class="feedback-preview-box">

      <div class="feedback-email">{{ feedback.email }}</div>
      <div class="feedback-msg">{{ shortBodyMsg }}</div>
    </div>
  </section>
</template>

<script>
export default {
  name: "feedback-preview",
  props: { feedback: Object },
  created() {},
  methods: {},
  computed: {
    shortBodyMsg() {
      if (this.feedback.comment.length > 45) return this.feedback.comment.substr(0, 45) + "..."
      return this.feedback.comment
    },
  },
  emits: [],
}
</script>
