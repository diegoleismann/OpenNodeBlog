<script setup>
import { useRoute } from 'vue-router'
import Layout from '../../components/layout/Layout.vue'
import { onMounted, watch } from 'vue'
import { PostStore } from '../../stores/post.store'

const route = useRoute()
const statusOptions = [
  { id: 'public', name: 'Public' },
  { id: 'draft', name: 'Draft' },
  { id: 'deleted', name: 'Deleted' },
]
const authorOptions = [{ id: 'diego', name: 'Diego' }]

onMounted(() => {
  PostStore.getById(route.params.id)
})
</script>

<template>
  <layout>
    <v-row class="fill-height">
      <v-col class="fill-height">
        <v-card class="ma-4 fill-height">
          <v-row class="fill-height ma-0">
            <v-col cols="3">
              <h2>Edit Post</h2>
              <v-row class="my-1">
                <v-col cols="6"
                  ><v-btn
                    block
                    class="bg-blue text-white"
                    >Salvar</v-btn
                  ></v-col
                >
                <v-col cols="6">
                  <a
                    target="_blank"
                    href="/preview/"
                  >
                    <v-btn
                      block
                      variant="outlined"
                      class="bg-white"
                      >Ver</v-btn
                    >
                  </a>
                </v-col>
              </v-row>
              <v-text-field
                prepend-inner-icon="mdi-calendar"
                title="Created At"
                v-model="PostStore.created_at"
                class="mb-3"
                label="Created At"
                placeholder="Created At"
                density="compact"
                hide-details
                variant="outlined"
              />
              <v-text-field
                prepend-inner-icon="mdi-text"
                title="Title"
                v-model="PostStore.title"
                class="mb-3"
                label="title"
                placeholder="title"
                density="compact"
                hide-details
                variant="outlined"
              />
              <v-text-field
                prepend-inner-icon="mdi-link"
                title="URL"
                v-model="PostStore.url"
                class="mb-3"
                label="URL"
                placeholder="URL"
                density="compact"
                hide-details
                variant="outlined"
              />
              <v-select
                v-model="PostStore.status"
                prepend-inner-icon="mdi-pencil"
                :items="statusOptions"
                variant="outlined"
                label="Status"
                item-title="name"
                item-value="id"
                return-object
                density="compact"
                hide-details
                class="mb-3"
              ></v-select>
              <v-select
                v-model="PostStore.author_id"
                prepend-inner-icon="mdi-account"
                :items="authorOptions"
                variant="outlined"
                label="Author"
                item-title="name"
                item-value="id"
                return-object
                density="compact"
                hide-details
                class="mb-3"
              ></v-select>
            </v-col>
            <v-col
              cols="9"
              class="fill-height"
            >
              <div class="fill-height">
                <quill-editor theme="snow"></quill-editor>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </layout>
</template>
