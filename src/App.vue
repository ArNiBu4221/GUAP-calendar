<template>
  <div class="column">
    <nav
      class="navbar is-primary is-spaced"
      role="navigation"
      aria-label="main navigation"
    >
      <div class="navbar-menu">
        <div class="navbar-start">
          <router-link to="/" class="navbar-item">Home</router-link>
          <div class="navbar-item">|</div>
          <router-link to="/about" class="navbar-item">ToDo</router-link>
          <div class="navbar-item">|</div>
          <router-link to="/parser" class="navbar-item">Parser</router-link>
          <div class="navbar-item">|</div>
          <router-link to="/calendar" class="navbar-item">Calendar</router-link>
        </div>
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
