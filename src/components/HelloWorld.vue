<template>
  <div>
    <div class="row mt-4">
      <div class="col">
        <table class="table table-striped">
          <tr>
            <td>MONEDA</td>
            <td>PRECIO</td>
          </tr>
                    <tr v-for="item in this.bitCointData" v-bind:key="item">
                        <td>{{ item.code }} </td>
                        <td>{{ item.rate }} 
                        <span v-if="item.code == 'USD'">
                        $
                        </span>
                        <span v-else-if="item.code == 'GBP'">
                        £
                        </span>
                        <span v-else-if="item.code == 'EUR'">
                        €
                        </span>
                    </td>
                    </tr>
                </table>
            </div>
    </div>
    <section class="mt-4">
            <h5>
                <p>
                    CoinDesk proporciona una API simple para que sus datos del Índice de precios de Bitcoin (BPI) estén disponibles programáticamente para otros. 
                    Puede utilizar esta API para incluir nuestros datos en cualquier aplicación o sitio web como mejor le parezca, siempre que cada página o aplicación que la use incluya el texto "Powered by CoinDesk ", que se vincula a nuestra página de precios . Los datos de CoinDesk están disponibles a través de una serie de recursos HTTP, 
                    y los datos se devuelven en formato JSON. Por favor no abuse de nuestro servicio.
                </p> 
                <code>&lt;https://api.coindesk.com/v1/bpi/currentprice.json&gt;</code>.    
            </h5>
            <div class="row text-center">
                <div class="col col-md-2">
                    <h5 style="margin-top: 60%;">
                        <strong><em>Documentación:</em></strong>
                    </h5>
                </div>
                <div class="col col-md-10">
                    <ul class="list-group mt-4 col-md-10">                        
                        <li class="list-group-item"><a href="https://vuejs.org/" target="_blanck" class="btn btn-primary btn-block">Vue.js</a></li>
                        <li class="list-group-item"><a href="https://github.com/axios/axios" target="_blanck" class="btn btn-secondary btn-block">Axios</a></li>
                        <li class="list-group-item"><a href="https://momentjs.com/" target="_blanck" class="btn btn-secondary btn-success btn-block">Moments.js</a></li>
                        <li class="list-group-item"><a href="https://www.coindesk.com/coindesk-api" target="_blanck" class="btn btn-info btn-block">Coindesk</a></li>   
                      </ul>
                </div>
            </div>
    </section>
  </div>
</template>

<script>
import axios from "axios";
export default {
  name: "HelloWorld",
  props: {
    bitCointData: {},
    symbol: null,
  },
  created(){
    console.log('created');
    console.log(this.fechaMoment);
    axios.get('https://api.coindesk.com/v1/bpi/currentprice.json')
        .then((response) => {
            this.bitCointData = response.data.bpi;
            console.log(this.bitCointData );
    })
    .catch(function (error) {
        // handle error
        console.log(error);
    })
    .then(function () {
        // always executed
    });
  }
};
</script>
