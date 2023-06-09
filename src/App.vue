<template>
  <div class="column">
    <nav
      class="navbar is-primary is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-menu">
        <router-link to="/" class="navbar-item has-text-light">Дом</router-link>
        <div class="navbar-item has-text-light">|</div>
        <router-link to="/todo" class="navbar-item has-text-light"
          >Задачник</router-link
        >
        <div class="navbar-item has-text-light">|</div>
        <router-link to="/parser" class="navbar-item has-text-light"
          >Календарь</router-link
        >
        <div class="navbar-item has-text-light">|</div>
        <router-link to="/asTrello" class="navbar-item has-text-light"
          >Trello</router-link
        >
      </div>
    </nav>
  </div>
  <router-view />
</template>

<style>
@import "../node_modules/bulma/css/bulma.min.css";
nav {
  border-radius: 20px;
}
</style>
