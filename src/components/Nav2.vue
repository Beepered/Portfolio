<template>
    <nav class="navbar">
        <div class="container">
            <div class="logo">
                <router-link to="/">MyLogo</router-link>
            </div>
            <div class="menu-icon" @click="toggleMenu">
                <i :class="isOpen ? 'fas fa-times' : 'fas fa-bars'"></i>
            </div>
            <ul :class="{ 'nav-links': true, 'open': isOpen }">
                <li><router-link to="/" @click="closeMenu">Home</router-link></li>
                <li><router-link to="/about" @click="closeMenu">About</router-link></li>
                <li><router-link to="/services" @click="closeMenu">Services</router-link></li>
                <li><router-link to="/contact" @click="closeMenu">Contact</router-link></li>
            </ul>
        </div>
    </nav>
</template>

<script>
export default {
    name: 'Navbar',
    data() {
        return {
            isOpen: false,
        }
    },
    methods: {
        toggleMenu() {
            this.isOpen = !this.isOpen
        },
        closeMenu() {
            this.isOpen = false
        }
    }
}
</script>

<style>
/* Basic Styles */
.navbar {
    width: 100%;
    background-color: #333;
    padding: 1rem;
    color: white;
}

.container {
    display: flex;
    justify-content: space-between;
    align-items: center;
}

/* Logo */
.logo a {
    color: white;
    text-decoration: none;
    font-size: 1.5rem;
    font-weight: bold;
}

/* Navigation Links */
.nav-links {
    display: flex;
    list-style: none;
    gap: 1rem;
}

.nav-links li a {
    color: white;
    text-decoration: none;
    font-size: 1rem;
    transition: color 0.3s ease;
}

.nav-links li a:hover {
    color: #1e90ff;
}

/* Hamburger Menu */
.menu-icon {
    display: none;
    font-size: 1.5rem;
    cursor: pointer;
}
</style>