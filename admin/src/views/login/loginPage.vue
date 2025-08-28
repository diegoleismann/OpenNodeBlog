<script setup>
import { computed, ref } from 'vue'
import { useRouter } from 'vue-router'
import { UserStore } from '../../stores/user.store'
const email = ref('')
const password = ref('')
const router = useRouter()
async function login() {
  try {
    const user = await UserStore.auth(email.value, password.value)
    if (user.error) {
      alert('Erro de Autenticação')
      return
    }
    if (user._id) {
      router.push('/dashboard')
    }
  } catch (error) {
    console.log(error)
  }
}
</script>

<template>
  <v-layout class="h-100">
    <v-main
      class="background-blue fill-height d-flex justify-center align-center"
    >
      <v-card class="login-container pa-5 rounded-lg">
        <v-row>
          <v-col>
            <h2 class="mb-3 text-center">Login</h2>

            <v-text-field
              icon-color="#0bf"
              title="E-mail"
              v-model="email"
              prepend-inner-icon="mdi-email-outline"
              class="mb-3"
              label=""
              placeholder="E-mail"
              density="compact"
              hide-details
              variant="outlined"
            />

            <v-text-field
              icon-color="#0bf"
              title="Senha"
              v-model="password"
              prepend-inner-icon="mdi-lock-outline"
              class="mb-3"
              label=""
              type="password"
              density="compact"
              placeholder="Senha"
              hide-details
              variant="outlined"
              active-color="blue"
            />

            <a
              href="/reset-password"
              class="link d-block text-center mb-3"
            >
              Esqueceu a senha?
            </a>

            <v-btn
              class="bg-blue text-white"
              elevation="1"
              block
              @click="login()"
            >
              Entrar
            </v-btn>
          </v-col>
        </v-row>
      </v-card>
    </v-main>
  </v-layout>
</template>

<style scoped>
.background-blue {
  background: #00bbff;
  background: linear-gradient(0deg, #00bbff 0%, #aaffff 100%);
}

.login-container {
  width: 320px;
}
</style>
