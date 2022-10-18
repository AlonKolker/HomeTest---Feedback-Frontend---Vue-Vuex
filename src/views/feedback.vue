<template>
  <section class="feedback-conteiner">
    <filterCmp @onChangeFilter="onFilterChange" />
    <feedbackList />
  </section>
</template>

<script>
import feedbackList from "../cmps/feedback-list.vue"
import filterCmp from "../cmps/filter.vue"
export default {
  name: "feedback-conteiner",
  computed: {},
  methods: {
    onFilterChange(text) {
      this.$store.dispatch({ type: "setFilter", text })
    },
  },
  components: { feedbackList, filterCmp },
}
</script>
