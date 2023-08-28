<script>
export default {
  data() {
    return {
      users: [],
      currentPage: 1,
      itemsPerPage: 10,
      sortDirection: 'asc' // Default: ascending
    };
  },
  computed: {
    paginatedUsers() {
      const start = (this.currentPage - 1) * this.itemsPerPage;
      const end = this.currentPage * this.itemsPerPage;
      return this.sortedUsers.slice(start, end);
    },
    totalPages() {
      return Math.ceil(this.users.length / this.itemsPerPage);
    },
    pages() {
      return Array.from({ length: this.totalPages }, (_, i) => i + 1);
    },
    sortedUsers() {
      return [...this.users].sort((a, b) => {
        const nameA = a.firstName.toLowerCase();
        const nameB = b.firstName.toLowerCase();

        if (this.sortDirection === 'asc') {
          return nameA.localeCompare(nameB);
        } else {
          return nameB.localeCompare(nameA);
        }
      });
    }
  },
  methods: {
    async fetchUsers() {
      const response = await fetch("https://dummyjson.com/users");
      const data = await response.json();
      this.users = data.users;
    },
    nextPage() {
      if (this.currentPage < this.totalPages) {
        this.currentPage++;
      }
    },
    previousPage() {
      if (this.currentPage > 1) {
        this.currentPage--;
      }
    },
    goToPage(page) {
      this.currentPage = page;
    },
    toggleSort() {
      this.sortDirection = this.sortDirection === 'asc' ? 'desc' : 'asc';
    }
  },
  created() {
    this.fetchUsers();
  }
};
</script>

<template>

<div class="mt-2 mb-4 flex justify-between items-center">
          <button @click="toggleSort" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded">
            {{ sortDirection === 'asc' ? 'Sort Z - A' : 'Sort A - Z' }}
          </button>
      </div>
      
  <div class="relative overflow-x-auto">
      <table class="w-full text-sm text-left text-black " id="myTable">
          <thead class="text-xs text-black uppercase bg-gray-50 ">
              <tr>
                  <th scope="col" class="px-6 py-3">Name</th>
                  <th scope="col" class="px-6 py-3">Gender</th>
                  <th scope="col" class="px-6 py-3">Address</th>
                  <th scope="col" class="px-6 py-3">Email</th>
              </tr>
          </thead>
          <tbody>
              <tr v-for="user in paginatedUsers" :key="user.id" class="bg-white border-b ">
                  <td class="px-6 py-4 text-black">{{ user.firstName }} {{ user.lastName }}</td>
                  <td class="px-6 py-4 text-black">{{ user.gender }}</td>
                  <td class="px-6 py-4 text-black">{{ user.address.address }}</td>
                  <td class="px-6 py-4 text-black">{{ user.email }}</td>
              </tr>
          </tbody>
      </table>



      <div class="mt-4 flex justify-between items-center"> 
          <button  @click="previousPage" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-l">
            Previous
          </button>

          <div class="flex">
            <button 
              v-for="page in pages" 
              :key="page" 
              @click="goToPage(page)" 
              :class="{
                'rounded-full' : true,
                'bg-indigo-600 text-black': currentPage === page,
                'hover:bg-indigo-500': currentPage !== page,
                'border': true,
                'border-gray-400': true,
                'px-3': true,
                'py-1': true,
                'mx-1': true
              }"
            >
              {{ page }}
            </button>
          </div>

          <button  @click="nextPage" class="bg-gray-200 hover:bg-gray-300 text-gray-800 font-bold py-2 px-4 rounded-r">
            Next
          </button>
      </div>
  </div>
</template>

