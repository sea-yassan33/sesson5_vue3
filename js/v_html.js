const app3 = Vue.createApp({
  data: () => ({
    message: 'Hello <span style="color:red;">Vue.js!</span>'
  })
})
app3.mount('#app3')