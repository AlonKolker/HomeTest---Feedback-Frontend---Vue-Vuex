<template>
  <section v-if="feedbacks">
    <feedbackPreview v-for="feedback in feedbacks" :feedback="feedback" :key="feedback._id" />
  </section>
</template>

<script>
import feedbackPreview from "../cmps/feedback-preview.vue"
export default {
  name: "feedback-list",
  props: {},
  data() {
    return {
    }
  },
  created() {},
  methods: {
    // crudReq(funcType) { this.$emit('crudReq', { type: funcType, itemId: this.item._id }) },
  },
  computed: {
    // shortBody() { return this.item.body.substr(0, 97) + '...' },
    feedbacks() {
      return this.$store.getters.feedbacks
    },
  },
  emits: [""],
  components: {
    feedbackPreview,
  },
}
</script>
