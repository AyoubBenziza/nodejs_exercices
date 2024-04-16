<script setup>
import axios from 'axios'
import { ref, onMounted } from 'vue';

const products = ref({})

onMounted(() => {
  axios.get('http://localhost:3000/product').then((res) => {
    products.value = res.data
  })
})

const deleteProduct = (id) => {
  axios.delete(`http://localhost:3000/product/${id}`).then((res) => {
    products.value = products.value.filter((product) => product.id !== id)
  })
}
</script>

<template>
  <table>
    <thead>
      <tr>
        <th>Product Name</th>
        <th>Price</th>
        <th>Quantity</th>
        <th>Action</th>
      </tr>
    </thead>
    <tbody>
      <tr v-for="product in products" :key="product.id">
        <td>{{ product.name }}</td>
        <td>{{ product.price }}</td>
        <td>{{ product.quantity }}</td>
        <td>
          <router-link :to="'/edit/' + product.id">Edit</router-link>
          <button @click="deleteProduct(product.id)">Delete</button>
        </td>
      </tr>
    </tbody>
  </table>



</template>