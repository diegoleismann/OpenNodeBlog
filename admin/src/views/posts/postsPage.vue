<script setup>
import { DateFormat } from '../../helper/date'
import { computed, onMounted } from 'vue'
import Layout from '../../components/layout/Layout.vue'
import { PostStore } from '../../stores/post.store'
import DataTableHeaders from './DataTableHeaders'
const loading = computed(() => PostStore.loading)
const listPosts = computed(() => PostStore.posts)
onMounted(() => {
  PostStore.getByPage()
})

const headers = DataTableHeaders
</script>
<template>
  <Layout>
    <v-row class="pa-4">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-toolbar class="bg-white">
              <v-title>Posts</v-title>
              <v-divider
                class="mx-2"
                vertical
                opacity="0"
              ></v-divider>
              <v-btn class="bg-blue text-white">Novo</v-btn>
            </v-toolbar>
          </v-card-title>
          <v-loading v-if="loading"></v-loading>
          <v-data-table
            :headers="headers"
            :items="listPosts"
            hide-default-footer
          >
            <template v-slot:[`item.created_at`]="{ item }">
              {{ DateFormat(item.created_at) }}
            </template>
            <template v-slot:[`item.title`]="{ item }">
              <strong>
                <RouterLink
                  class="link"
                  :to="'/cms/post/' + item._id"
                >
                  {{ item.title }}
                </RouterLink>
              </strong>
            </template>
            <template v-slot:[`item.url`]="{ item }">
              <strong>
                <RouterLink
                  class="link"
                  :to="'/post/' + item.url"
                >
                  /{{ item.url }}
                </RouterLink>
              </strong>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </Layout>
</template>
