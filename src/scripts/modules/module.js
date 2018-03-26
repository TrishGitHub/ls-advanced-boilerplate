import Vue from 'vue'

Vue.component('crcl', {
  template: '#circle',
  props: {
    percents: String,
    title: String
  },
  methods: {
    handleClick: function () {
      console.log('hello!');
    }
  },
  mounted() {
    const block = this.$refs.title;

    block.style.color = 'red';
  }
});

new Vue({
  template: "#circle-list",
  el: "#wrapper",
  data: {
    items: [
      {title: 'Frontend', percents: '50%'},
      {title: 'Backend', percents: '70%'},
      {title: 'Workflow', percents: '20%'}
    ]
  }
});

