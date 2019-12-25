<template>
  <div>
  <p> 其他内容在此显示 </p>
  <p> 获取的随机数是: {{ randomNumber   }}  </p>
  <button @click = "getRandom" > New Random Number </button> </div>
  </template>

<script>
import axios from 'axios'

export default {
  name: "Others",
  data() {
    return {
      randomNumber: 0
    }
  },
  methods: {
    getRandom() {
      axios.get('/api/getNumber')
        .then(response => {
          // console.log(response)
          this.randomNumber = response.data.randomNumber
        })
        .catch(error => {
          console.log('出错了', error)
        })
    }
  },
  created() {
    this.getRandom()
  }
}
</script>
