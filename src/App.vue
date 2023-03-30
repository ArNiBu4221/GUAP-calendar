<template>
  <nav>
    <router-link to="/">Home</router-link> |
    <router-link to="/about">ToDo</router-link>
  </nav>
  <router-view />
</template>

<style>
nav {
  text-align: center;
  margin: 1.5% auto;
}
</style>
