<script setup>
import { ref, onMounted, computed } from 'vue'

import DataTableHeaders from './dataTableHeaders'
import Layout from '../../components/layout/Layout.vue'
import { UserStore } from '../../stores/user.store'

const listUsers = computed(() => UserStore.users)
const headers = DataTableHeaders
onMounted(() => {
  UserStore.getByPage(0)
})
</script>

<template>
  <Layout>
    <v-row class="pa-4">
      <v-col cols="12">
        <v-card>
          <v-card-title>
            <v-toolbar class="bg-white">
              <v-title>Users</v-title>
              <v-divider
                class="mx-2"
                vertical
                opacity="0"
              ></v-divider>
              <v-btn class="bg-blue text-white">New</v-btn>
            </v-toolbar>
          </v-card-title>
          <v-data-table
            :headers="headers"
            :items="listUsers"
            hide-default-footer
          >
            <template v-slot:[`item.name`]="{ item }">
              <strong>
                <RouterLink
                  class="link"
                  :to="'/cms/user/' + item._id"
                >
                  {{ item.name }}
                </RouterLink>
              </strong>
            </template>
          </v-data-table>
        </v-card>
      </v-col>
    </v-row>
  </Layout>
</template>
