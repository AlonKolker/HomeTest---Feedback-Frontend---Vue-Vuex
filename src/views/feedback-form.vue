<template>
  <section @click.prevent type="submit" class="feedback-form">
    <input v-model="feedback.email" type="email" placeholder="Email" />
    <input v-model="feedback.comment" type="text" placeholder="Message" />

    <button @click="onSubmitMsg()">submit</button>
  </section>
</template>

<script>
// import { itemService } from "../services/item.service"
// import { showErrorMsg } from "../services/event-bus.service"
export default {
  name: "feedback-form",
  data() {
    return {
      feedback: {
        email: "",
        comment: "",
        imgSrc: "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg",
      },
    }
  },
  methods: {
    onSubmitMsg() {
      if (
        !String(this.feedback.email)
          .toLowerCase()
          .match(
            /^(([^<>()[\]\\.,;:\s@"]+(\.[^<>()[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/
          )
      )
        return

      console.log(this.feedback)
      const feedback = JSON.parse(JSON.stringify(this.feedback))
      this.$store.dispatch({ type: "saveMsg", feedback })
      this.feedback = {
        email: "",
        comment: "",
        imgSrc: "https://variety.com/wp-content/uploads/2021/04/Avatar.jpg",
      }
    },
  },
  computed: {},

  components: {},
}
</script>
