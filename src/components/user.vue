<script>
import { ref, onMounted } from "vue";

export default {
  setup() {
    const users = ref([]);

    onMounted(async () => {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      users.value = data.users;

      setTimeout(() => {
    new DataTable('#myTable', {
      pagingType: 'full_numbers',
      pageLength: 10  // Untuk menampilkan maksimal 10 entri per halaman
    });
  }, 0);
    });

    return {
      users
    };
  }
};
</script>

<template>
    <div class="relative overflow-x-auto">
        <table class="w-full text-sm text-left text-gray-500 dark:text-gray-400" id="myTable">
            <thead class="text-xs text-gray-700 uppercase bg-gray-50 dark:bg-gray-700 dark:text-gray-400">
                <tr>
                    <th scope="col" class="px-6 py-3">Name</th>
                    <th scope="col" class="px-6 py-3">Gender</th>
                    <th scope="col" class="px-6 py-3">Address</th>
                    <th scope="col" class="px-6 py-3">Email</th>
                </tr>
            </thead>
            <tbody>
                <tr v-for="user in users" :key="user.id" class="bg-white border-b dark:bg-gray-800 dark:border-gray-700">
                    <td class="px-6 py-4">{{ user.firstName }} {{ user.lastName }}</td>
                    <td class="px-6 py-4">{{ user.gender }}</td>
                    <td class="px-6 py-4">{{ user.address.address }}</td>
                    <td class="px-6 py-4">{{ user.email }}</td>
                </tr>
            </tbody>
        </table>
    </div>
</template>