<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { UserStore } from '../../stores/user.store'
const router = useRouter()
const userImage = computed(() => UserStore.logged.image)
const userName = computed(() => UserStore.logged.name)
const userEmail = computed(() => UserStore.logged.email)
onMounted(() => {
  if (!UserStore.isLogged()) {
    router.push('/login')
  }
})
</script>

<template>
  <v-layout>
    <v-navigation-drawer permanent>
      <v-list nav>
        <v-list-item
          :prepend-avatar="userImage"
          :subtitle="userEmail"
          :title="userName"
          append-icon="mdi-chevron-down"
          value="account"
          class="user-menu"
        ></v-list-item>
      </v-list>

      <v-list
        density="compact"
        nav
      >
        <v-list-item
          to="/cms/posts"
          active-class="bg-blue text-white"
          prepend-icon="mdi-list-box"
          title="Posts"
          value="shared"
        ></v-list-item>
        <v-list-item
          to="/cms/users"
          active-class="bg-blue text-white"
          prepend-icon="mdi-account"
          title="Users"
          value="users"
        ></v-list-item>
      </v-list>
    </v-navigation-drawer>

    <v-main class="bg-blue-lighten-5">
      <slot></slot>
    </v-main>
  </v-layout>
</template>
