<script setup>
import { useRoute } from 'vue-router'
import { onMounted } from 'vue'
import Layout from '../../components/layout/Layout.vue'
import { UserStore } from '../../stores/user.store'
const route = useRoute()
const statusOptions = [
  {
    id: 'active',
    name: 'Active',
  },
  {
    id: 'inactive',
    name: 'Inactive',
  },
  {
    id: 'deleted',
    name: 'Deleted',
  },
]

const roleOptions = [
  {
    id: 'admin',
    name: 'Admin',
  },
  {
    id: 'moderator',
    name: 'Moderator',
  },
  {
    id: 'user',
    name: 'User',
  },
]

const SaveUser = () => {}
onMounted(() => {
  const id = route.params.id
  if (id) UserStore.getById(id)
  if (!id || id === '') UserStore.clear()
})
</script>
<template>
  <Layout>
    <v-row class="fill-height">
      <v-col class="fill-height">
        <v-card class="ma-4 fill-height">
          <v-row class="fill-height ma-0">
            <v-col>
              <h2>Edit User</h2>

              <v-row class="my-1">
                <v-col cols="6">
                  <v-btn
                    class="bg-blue text-white"
                    @click="SaveUser"
                  >
                    Save
                  </v-btn>

                  <a
                    target="_blank"
                    href="/preview/"
                  >
                    <v-btn
                      variant="outlined"
                      class="bg-white"
                    >
                      Ver
                    </v-btn>
                  </a>
                </v-col>
              </v-row>
              <v-row>
                <v-col cols="4">
                  <v-text-field
                    :model-value="UserStore.form.image"
                    prepend-inner-icon="mdi-image"
                    title="Image"
                    class="mb-3"
                    label="Image"
                    placeholder="URL"
                    density="compact"
                    hide-details
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="4">
                  <v-text-field
                    :model-value="UserStore.form.name"
                    prepend-inner-icon="mdi-account"
                    title="Name"
                    class="mb-3"
                    label="Name"
                    placeholder="Name"
                    density="compact"
                    hide-details
                    variant="outlined"
                  />
                  <v-text-field
                    :model-value="UserStore.form.email"
                    prepend-inner-icon="mdi-email-outline"
                    title="Email"
                    class="mb-3"
                    label="Email"
                    placeholder="Email"
                    density="compact"
                    hide-details
                    variant="outlined"
                  />
                </v-col>
                <v-col cols="4">
                  <v-select
                    v-model="UserStore.form.status"
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
                    v-model="UserStore.form.role_id"
                    prepend-inner-icon="mdi-shield-lock-outline"
                    :items="roleOptions"
                    variant="outlined"
                    label="Role"
                    item-title="name"
                    item-value="_id"
                    density="compact"
                    hide-details
                    class="mb-3"
                  ></v-select>
                </v-col>
              </v-row>
            </v-col>
          </v-row>
        </v-card>
      </v-col>
    </v-row>
  </Layout>
</template>
