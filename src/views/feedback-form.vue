<template>
  <section @click.prevent type="submit" class="feedback-form flex flex-column">
    <input class="form-input" v-model="feedback.email" type="email" placeholder="Email" />
    <textarea class="form-input" rows="4" cols="50" v-model="feedback.comment" type="text" placeholder="Message"> </textarea>
    <div>
      <button class="form-btn" @click="onSubmitMsg()">submit</button>
    </div>
  </section>
</template>

<script>
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
