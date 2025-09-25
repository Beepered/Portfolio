<!-- https://www.youtube.com/watch?v=CfTvye31Ad0&ab_channel=JustinBrooks -->

<template>
  <div id="nav">
    <router-link to="/">Home</router-link> |
    <router-link to="/About">About Me</router-link> |
    <div class="dropdown">
      <button class="dropbtn">Games</button>
      <div class="dropdown-content">
        <router-link to="/CtC">Cash the Cache</router-link>
        <router-link to="/Fight">Fight Game</router-link>
      </div>
    </div>
  </div>
</template>

<style>
/* nav */
#nav {
  background-color: #e7e7e7;
  padding-top: 0.4em;
  padding-bottom: 0.4em;
  z-index: 1;
  width: 100vw;
  left: 0;
  top: 0;
}

#nav a {
  font-weight: bold;
  font-size: 1.4em;
  color: rgb(24, 44, 180);
}

#nav a:hover {
  filter: drop-shadow(0 0 1.2em #3f3f3faa);
  color: rgb(19, 29, 94);
}

#nav a.router-link-exact-active {
  /* nav selected */
  font-size: 1.6em;
  color: rgb(56, 189, 255);
  text-shadow: 2px 2px #ababab;
}

/**** drop down ****/
.dropbtn {
  background-color: rgb(210, 210, 210);
  color: #273d53;
  padding: 12%;
  font-size: 1.5em;
  font-weight: bold;
  border: none;
}

.dropdown {
  position: relative;
  display: inline-block;
}

.dropdown-content {
  display: none;
  position: absolute;
  background-color: #f1f1f1;
  min-width: 175px;
  box-shadow: 0px 8px 16px 0px rgba(0, 0, 0, 0.2);
  z-index: 1;
  border-radius: 4px;
}

.dropdown-content a {
  color: black;
  padding: 8px 8px;
  text-decoration: none;
  display: block;
}

.dropdown-content a:hover {
  background-color: #ddd;
}

.dropdown:hover .dropdown-content {
  display: block;
  font-size: 0.9em;
}

.dropdown:hover .dropbtn {
  /* hover over dropdown menu button */
  background-color: #9d9d9d;
}
</style>