<template>
  <div class="home">
    <div class="row mt-4 .padding-0">
      <div class="col col-md-1 .nopadding">
                <img src="../assets/btc.jpg" class="img-fluid" alt="" style="max-width: 85px; max-height: 85px; padding: 5px; padding-top: 10px;">
            </div>
            <div class="col col-md-8">
                <h1>Bitcoin </h1>
            </div>
    </div>
    <HelloWorld msg="Welcome to Your Vue.js App" />
  </div>
</template>

<script>
// @ is an alias to /src
import HelloWorld from "@/components/HelloWorld.vue";

export default {
  name: "Home",
  data() {
    return {
      lista: ['Arbol', 'Perro', 'Caballo']
    };
  },
  components: {
    HelloWorld
  }
};
</script>
