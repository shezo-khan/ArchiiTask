<template>
  <div id="sender-app">
    <div>
      <h2>Sender</h2>
      <input placeholder="Please input" v-model="text" />
      <button @click="sender">send event</button>

    </div>
  </div>
</template>

<script>
  export default {
    name: 'sender-app',
    data () {
      return {
        text: '',
        receiveText: ''
      }
    },
    created() {
      this.$eventBus.$on('message', this.onReceive);
    },
    methods: {
      sender() {
        this.$eventBus.$emit('message', this.text);
        this.text = '';
        var input = document.getElementsByTagName('input')[0];
        input.focus();
      },
      onReceive(text) {
        var self = this;
        this.receiveText = text;
        setTimeout(function() {
          self.receiveText = '';
        }, 1500);
      }
    }
  }
</script>

<style>
  #sender-app {
    border:1px solid #BBBBBB;
    border-radius: 10px;
    padding:20px;
  }
</style>
