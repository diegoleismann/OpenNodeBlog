<template>
  <Layout>
    <v-row class="pa-4">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-toolbar class="bg-white">
              <v-title>Posts</v-title>
              <v-divider class="mx-2" vertical opacity="0"></v-divider>
              <v-btn class="bg-blue text-white">Novo</v-btn>
            </v-toolbar>
          </v-card-title>
          <v-data-table :items="listPosts">

          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </Layout>
</template>
<script setup>
import { ref } from 'vue';
import Layout from '../../components/layout/Layout.vue';
const listPosts = ref([
  {
    'created_at': '10/12/2030 10:15',
    'title': 'title',
    'url': '/post/title'
  },
  {
    'created_at': '10/12/2030 10:15',
    'title': 'title',
    'url': '/post/title'
  },
  {
    'created_at': '10/12/2030 10:15',
    'title': 'title',
    'url': '/post/title'
  },
  {
    'created_at': '10/12/2030 10:15',
    'title': 'title',
    'url': '/post/title'
  },

])
</script>