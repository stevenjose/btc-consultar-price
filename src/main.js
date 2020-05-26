import Vue from "vue";
import App from "./App.vue";
import router from "./router";
import axios from "axios";
import moment from "moment";
Vue.config.productionTip = false;

new Vue({
  router,
  render: h => h(App),
  data: {
    message: "Hola Mundo!",
    bitCointData: {},
    time: moment().format('h:mm:ss a'),
    fechaMoment: moment().format('MMMM Do YYYY'),
    symbol: null,
  },
  mounted() {
    console.log('created');
    console.log(this.fechaMoment);
    axios
      .get("https://api.coindesk.com/v1/bpi/currentprice.json")
      .then(response => {
        this.bitCointData = response.data.bpi;
        console.log(this.bitCointData);
      })
      .catch(function(error) {
        // handle error
        console.log(error);
    })
      .then(function() {
        // always executed
    });
  }
}).$mount("#app");
