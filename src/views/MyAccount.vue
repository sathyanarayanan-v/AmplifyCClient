<template>
  <router-view />
</template>

<script>
import { Component } from 'vue-property-decorator'
import { VueStrong } from '../typedVue'

@Component
export default class MyAccount extends VueStrong {}
</script>

<style></style>
