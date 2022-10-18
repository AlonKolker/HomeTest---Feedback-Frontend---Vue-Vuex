<template>
    <section class="login-wrapper main-layout full">
      <div class="login-wrapper__inner">
        <form @submit.prevent="login" class="login__form">
          <h2>Log in</h2>
          <input v-model="credentials.username" placeholder="Username" autofocus />
          <input v-model="credentials.password" type="password" placeholder="Password" show-password />
          <button class="login__btn">
            <span>Login</span>
          </button>
        </form>
        <p @click="this.$router.push('/signup')">Don't have an account?</p>
      </div>
  </section>
</template>
<script>
import { userService } from '../services/user.service.js'
export default {
  name: 'login',
  data() {
    return {
      credentials: {
        username: '',
        password: '',
      },
    }
  },
  created() {
    const user = userService.getLoggedinUser()
    if (user) {
      this.$store.commit({ type: 'setUser', user })
      this.$router.push('/list')
    }
  },
  methods: {
    async login() {
      try {
        const credentials = JSON.parse(JSON.stringify(this.credentials))
        const user = await this.$store.dispatch({ type: 'login', credentials })

        if (user) {
          this.$router.push('/list')
        }
      } catch (err) {
        console.log(err)
      }
    },
  },
}
</script>
