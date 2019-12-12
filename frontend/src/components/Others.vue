<template>
  <div>

    <p>其他内容在此显示</p>
    <p>获取的随机数是:{{ randomNumber}}</p>
    <button @click="getRandom">New Random Number</button>
  </div>
</template>

<script>
import axios from 'axios'

export default {
  name: "Others",
  data () {
    return { randomNumber: 0 }
  },
  methods: {
    getRandomInt (min, max) {
      min = Math.ceil(min)
      max = Math.floor(max)
      return Math.floor(Math.random() * (max - min + 1)) + min
    },
    getRandom () {
      this.getRandomFromBackend()
    },
    getRandomFromBackend () {
      const path = `http://localhost:5000/api/random`
      axios.get('/api/getNumber')
        .then(response => {
          this.randomNumber = response.data.randomNumber
        })
        .catch(error => {
          console.log(error)
        })
    }
  },
  created () {
    this.getRandom()
  }
}
</script>
