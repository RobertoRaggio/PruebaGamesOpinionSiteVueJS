<template>
  <div id="app">
    <b-navbar toggleable="lg" type="dark" variant="dark">
      <b-navbar-brand href="/"
        ><i class="fas fa-headphones"></i>Games Opinion</b-navbar-brand
      >
      <b-navbar-toggle target="nav-collapse"></b-navbar-toggle>
      <b-collapse id="nav-collapse" is-nav>
        <b-navbar-nav class="move-right">
          <b-nav-item href="/"><i class="fas fa-home"></i>Home</b-nav-item>
          <b-nav-item href="/opinions"
            ><i class="fas fa-comments"></i>Opiniones</b-nav-item
          >
          <b-nav-item href="/admin"
            ><i class="fas fa-users-cog"></i>Administracion</b-nav-item
          >
        </b-navbar-nav>
      </b-collapse>
    </b-navbar>
  </div>
</template>

<style>
#app {
  font-family: Avenir, Helvetica, Arial, sans-serif;
  -webkit-font-smoothing: antialiased;
  -moz-osx-font-smoothing: grayscale;
  text-align: center;
  color: #2c3e50;
}

.move-right {
  position: absolute;
  right: 0;
  background-color: #212529;
}
</style>
