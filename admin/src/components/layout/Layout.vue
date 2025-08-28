<script setup>
import { ref } from 'vue'
</script>

<template>
  <v-layout class="h-100">
    <v-navigation-drawer permanent>
      <v-list nav>
        <v-list-item
          prepend-avatar="https://randomuser.me/api/portraits/men/61.jpg"
          subtitle="Admin"
          title="Fulano"
          append-icon="mdi-chevron-down"
          value="account"
        ></v-list-item>
      </v-list>

      <v-list
        density="compact"
        nav
      >
        <v-list-item
          active-class="bg-blue text-white"
          prepend-icon="mdi-view-grid"
          title="Dashboard"
          value="dashboard"
        ></v-list-item>
        <v-list-item
          active-class="bg-blue text-white"
          prepend-icon="mdi-list-box"
          title="Posts"
          value="shared"
        ></v-list-item>
        <v-list-item
          active-class="bg-blue text-white"
          prepend-icon="mdi-account"
          title="Users"
          value="users"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-blue-lighten-5 fill-height">
      <slot></slot>
    </v-main>
  </v-layout>
</template>
