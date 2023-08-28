<script setup>
import { ref } from 'vue';
import { useRouter } from 'vue-router';
const username = ref('');
const password = ref('');
const errorMessage = ref('');
const router = useRouter();

const generateRandomToken = () => {
  return `${Date.now()}-${Math.random().toString(36).substr(2, 16)}`;
};

const login = async () => {
  errorMessage.value = '';

  // Lokal Akun
  if (username.value === 'Fahrizal' && password.value === 'fahrizal') {
    console.log('Welcome, fahrizal!');
    const token = generateRandomToken();
    localStorage.setItem('userToken', token);
    localStorage.setItem('loggedInUsername', username.value);
    router.push({ name: 'Home' });
    if (!localStorage.getItem('hasReloaded')) {
        localStorage.setItem('hasReloaded', 'true');
        location.reload();
    }
    return;
}

  if (!username.value || !password.value) {
    errorMessage.value = 'Username dan password harus di isi';
    return;
  }

  try {
    const response = await fetch('https://dummyjson.com/auth/login', {
      method: 'POST',
      headers: { 'Content-Type': 'application/json' },
      body: JSON.stringify({
        username: username.value,
        password: password.value,
      }),
    });

    const data = await response.json();

    if (!data.token) {
      errorMessage.value = 'Username atau password salah';
      return;
    }

    localStorage.setItem('userToken', data.token);
    
    // Store the API's username into local storage
    if (data.username) {
      localStorage.setItem('loggedInUsername', data.username);
    } else {
      // If the response does not contain a username, use the provided one
      localStorage.setItem('loggedInUsername', username.value);
    }

    router.push({ name: 'Home' });
    location.reload();
    
} catch (error) {
    console.error('Error during login:', error);
    errorMessage.value = 'Error ';
}
};

</script>

<template>
  <main
    class="mx-auto flex min-h-screen w-full items-center justify-center bg-white text-black px-10">
    <section class="flex w-[30rem] flex-col space-y-10">
      <div class="grid justify-items-center">
        <img
          src="../../assets/rimba.png"
          class="h-[300px] flex items-center"
          alt="Pt.Rimba" />
      </div>

      <div
        class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
        <label
          for="username"
          class="sr-only"
          >Email or Username</label
        >
        <input
          id="username"
          type="text"
          v-model="username"
          placeholder="Email or Username"
          class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
      </div>

      <div
        class="w-full transform border-b-2 bg-transparent text-lg duration-300 focus-within:border-indigo-500">
        <label
          for="password"
          class="sr-only"
          >Password</label
        >
        <input
          id="password"
          type="password"
          v-model="password"
          placeholder="Password"
          class="w-full border-none bg-transparent outline-none placeholder:italic focus:outline-none" />
      </div>

      <p
        v-if="errorMessage"
        class="text-red-600 text-center">
        {{ errorMessage }}
      </p>

      <button
        @click="login"
        class="transform rounded-sm bg-black py-2 font-bold duration-300 hover:bg-gray-700 text-white">
        LOG IN
      </button>
    </section>
  </main>
</template>
