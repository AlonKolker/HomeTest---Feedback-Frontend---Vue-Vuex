<template>
  <section class="feedback-preview">
    <pre>{{feedback.imgSrc}}</pre>
    <img v-if="feedback" :src="feedback.imgSrc" alt="" />
    <div>{{ feedback.email }}</div>
    <div>{{ feedback.comment }}</div>
  </section>
</template>

<script>

export default {
  name: "feedback-preview",
  props: { feedback: Object },
  created() {
  },
  methods: {

  },
  computed: {
    // shortBody() {
    //   return this.item.body.substr(0, 97) + "..."
    // },
    
  },
  emits: [],
}
</script>
