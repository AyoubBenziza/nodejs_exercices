<script setup>
import { ref } from 'vue';
import axios from 'axios';
import router from '@/router/index.js';

const product = ref({
  name: '',
  price: '',
  quantity: ''
})


const submitForm = () => {
  axios.post('http://localhost:3000/product', product.value).then((res) => {
    router.push('/')
  })
}

</script>

<template>

  <form action="">

    <label for="name">Product Name</label>
    <input type="text" id="name" v-model="product.name">

    <label for="price">Price</label>
    <input type="number" id="price" v-model="product.price">

    <label for="quantity">Quantity</label>
    <input type="number" id="quantity" v-model="product.quantity">

    <input @click.prevent="submitForm" type="submit" value="Submit">


  </form>

</template>