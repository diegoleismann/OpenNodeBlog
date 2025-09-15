<script setup>
import { useRoute } from 'vue-router'
import Layout from '../../components/layout/Layout.vue'
import { onMounted, computed } from 'vue'
import { PostStore } from '../../stores/post.store'
import { UserStore } from '../../stores/user.store'
import { DateISOFormat, DateFormat } from '../../helper/date'
import { Normalize } from '../../helper/string'

const route = useRoute()
const statusOptions = [
  { id: 'public', name: 'Public' },
  { id: 'draft', name: 'Draft' },
  { id: 'deleted', name: 'Deleted' },
]
const authorOptions = computed(() => UserStore.users)
const updateCreatedAt = (text) => {
  PostStore.created_at = DateFormat(DateISOFormat(text))
  PostStore.created_at_ISOFormat = DateISOFormat(text)
}
const updateTitle = (text) => {
  PostStore.title = text
  PostStore.url = Normalize(text)
}
const SavePost = async () => {
  if (!PostStore._id) {
    PostStore.create()
  } else {
    PostStore.update()
  }
}
onMounted(() => {
  UserStore.getBySearch()
  if (route.params.id) PostStore.getById(route.params.id)
  if (!route.params.id || route.params.id === '') PostStore.clear()
  if (!PostStore.author_id) {
    const user = UserStore.get()
    PostStore.author_id = user._id
  }
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
                <v-col cols="6">
                  <v-btn
                    block
                    class="bg-blue text-white"
                    @click="SavePost"
                  >
                    Save
                  </v-btn>
                </v-col>
                <v-col cols="6">
                  <a
                    target="_blank"
                    href="/preview/"
                  >
                    <v-btn
                      block
                      variant="outlined"
                      class="bg-white"
                    >
                      Ver
                    </v-btn>
                  </a>
                </v-col>
              </v-row>

              <v-text-field
                :model-value="PostStore.created_at"
                @blur="updateCreatedAt($event.target.value)"
                prepend-inner-icon="mdi-calendar"
                title="Created At"
                class="mb-3"
                label="Created At"
                placeholder="Created At"
                density="compact"
                hide-details
                variant="outlined"
              />
              <v-text-field
                :model-value="PostStore.title"
                @update:model-value="updateTitle($event)"
                prepend-inner-icon="mdi-text"
                title="Title"
                class="mb-3"
                label="Title"
                placeholder="title"
                density="compact"
                hide-details
                variant="outlined"
              />
              <v-text-field
                :model-value="PostStore.url"
                @update:model-value="PostStore.url = $event"
                prepend-inner-icon="mdi-link"
                title="URL"
                class="mb-3"
                label="URL"
                placeholder="URL"
                density="compact"
                hide-details
                variant="outlined"
              />
              <v-select
                v-model="PostStore.status"
                @update:model-value="PostStore.status = $event"
                prepend-inner-icon="mdi-pencil"
                :items="statusOptions"
                variant="outlined"
                label="Status"
                item-title="name"
                item-value="id"
                density="compact"
                hide-details
                class="mb-3"
              ></v-select>
              <v-select
                v-model="PostStore.author_id"
                @update:model-value="PostStore.author_id = $event"
                prepend-inner-icon="mdi-account"
                :items="authorOptions"
                variant="outlined"
                label="Author"
                item-title="name"
                item-value="_id"
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
                <quill-editor
                  v-model:content="PostStore.content"
                  @update:model-value="PostStore.content = $event"
                  contentType="html"
                  theme="snow"
                >
                </quill-editor>
              </div>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </layout>
</template>
