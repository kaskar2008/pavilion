window.app = new Component({
  data() {
    return {
      isChecked: true,
      text: 'Hey there!',
      counter: 0,
      static: 'not a number',
      interval: null,
      some: {
        test: 'how',
        nested: {
          value: 1,
        },
      },
    };
  },
  // template: '#tpl-app',
  el: '#app',
  created() {
    console.log('Created');

    this.data.interval = setInterval(this.updateSomeData, 1000);
  },
  mounted() {
    console.log('Mounted');
  },
  updated(key, value, target) {
    console.log('Data has been updated!', key, value, target);
  },
  methods: {
    updateSomeData() {
      this.data.counter++;

      if (this.data.counter >= 3) {
        clearInterval(this.data.interval);
      }
    },
    onBlur() {
      console.log('on blur');
    },
    onInput(event) {
      console.log('on input');
    },
    onButtonClick(event) {
      this.data.counter++;
    },
  },
  watch: {
    text(newVal) {
      console.log(`Text has been changed to ${newVal}`);
    },
    'some.nested.value'(newVal) {
      console.log(`Nested value has been changed to ${newVal}`);
    }
  },
})

window.app2 = new Component({
  data() {
    return {
      title: 'I am the hunter, I am the great unknown',
    };
  },
  template: '#tpl-app2',
  el: '#app2',
  created() {
    console.log('App2 Created');
  },
  mounted() {
    console.log('App2 Mounted');
  },
})
