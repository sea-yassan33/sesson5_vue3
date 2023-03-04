const app1 = Vue.createApp({
  data: () => ({
    message: 'Hello Vue.js!'
  }),
  methods: {
    clickHandler: function(event) {
      this.message = this.message.split('').reverse().join('') //文字列の反転
    }
  }
})
app1.mount('#app1')