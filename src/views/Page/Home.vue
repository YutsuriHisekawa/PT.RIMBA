<script setup>
  import pie from '../../components/pie.vue'
  import pendapatan from '../../components/area.vue'
  import tableUser from '../../components/user.vue'
</script>

<template>
  <div class="p-4 sm:ml-64 px-10">
    <div class="p-4  ">
      <div class="flex-1 flex flex-wrap">
        <div class="flex-1 p-4 w-full md:w-1/2">
            <div class="relative max-w-md w-full">
                <div class="absolute top-1 left-2 inline-flex items-center p-2">
                    <i class="fas fa-search text-gray-400"></i>
                </div>
                <input class="w-full h-10 pl-10 pr-4 py-1 text-base placeholder-gray-500 border rounded-full focus:shadow-outline" type="search" placeholder="Search...">
            </div>

                 <!-- Grafik -->
            <div class="mt-8 flex flex-wrap space-x-0 space-y-2 md:space-x-4 md:space-y-0">
                <div class="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                    <h2 class="text-black text-lg font-semibold pb-1">Grafik Table Karyawan</h2>
                    <div class="my-1"></div> 
                    <div class="bg-gradient-to-r from-lime-300 to-lime-500 h-px mb-6"></div> 
                <pie></pie>
                
                </div>
                <div class="flex-1 bg-white p-4 shadow rounded-lg md:w-1/2">
                    <h2 class="text-black text-lg font-semibold pb-1">Income Perusahaan</h2>
                    <div class="my-1"></div> 
                    <div class="bg-gradient-to-r from-lime-300 to-lime-500 h-px mb-6"></div> 
                    <pendapatan></pendapatan>
                
                </div>
            </div>
            <div class="mt-8 bg-white p-4 shadow rounded-lg">
                <h2 class="text-gray-500 text-lg font-semibold pb-4">User Pegawai</h2>
                <div class="my-1"></div> 
                <div class="bg-gradient-to-r from-cyan-300 to-cyan-500 h-px mb-6"></div> 
                <tableUser></tableUser>

            </div>




        </div>
    </div>
    </div>
  </div>
</template>
