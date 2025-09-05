<script setup>
import { useRouter } from 'vue-router'
import { ref, onMounted, computed } from 'vue'
import { UserStore } from '../../stores/user.store'
const router = useRouter()
const userImage = computed(() => UserStore.image)
const userName = computed(() => UserStore.name)
const userEmail = computed(() => UserStore.email)
onMounted(() => {
  if (!UserStore.isLogged()) {
    router.push('/login')
  }
})
</script>

<template>
  <v-layout class="h-100">
    <v-navigation-drawer permanent>
      <v-list nav>
        <v-list-item
          :prepend-avatar="userImage"
          :subtitle="userEmail"
          :title="userName"
          append-icon="mdi-chevron-down"
          value="account"
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

    <v-main class="bg-blue-lighten-5 fill-height">
      <slot></slot>
    </v-main>
  </v-layout>
</template>
