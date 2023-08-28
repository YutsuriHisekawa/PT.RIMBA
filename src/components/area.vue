<script setup>

let initialData = 150000000;
let latestData = 170000000;

let kenaikanuang = ((latestData - initialData) / initialData) * 100;

  window.addEventListener("load", function() {
    let options = {
      chart: {
        height: "100%",
        maxWidth: "100%",
        type: "area",
        fontFamily: "Inter, sans-serif",
        dropShadow: {
          enabled: false,
        },
        toolbar: {
          show: false,
        },
      },
      tooltip: {
        enabled: true,
        x: {
          show: false,
        },
      },
      fill: {
        type: "gradient",
        gradient: {
          opacityFrom: 0.55,
          opacityTo: 0,
          shade: "#1C64F2",
          gradientToColors: ["#1C64F2"],
        },
      },
      dataLabels: {
        enabled: false,
      },
      stroke: {
        width: 6,
      },
      grid: {
        show: false,
        strokeDashArray: 4,
        padding: {
          left: 2,
          right: 2,
          top: 0
        },
      },
      series: [
  {
    name: "Pendapatan",
    data: [150000000, 210000000, 180000000, 220000000, 170000000, 240000000], 
    color: "#1A56DB",
  },
],
      xaxis: {
        categories: ['01 February', '02 Maret', '03 April', '04 Mei', '05 Juni', '06 Juli', '07 Agustus'],
        labels: {
          show: false,
        },
        axisBorder: {
          show: false,
        },
        axisTicks: {
          show: false,
        },
      },
      yaxis: {
    show: true,
  labels: {
    formatter: function(value) {
      return 'Rp. ' + value.toLocaleString('id-ID');    
    }
  }
}
    }

    if (document.getElementById("area-chart") && typeof ApexCharts !== 'undefined') {
      const chart = new ApexCharts(document.getElementById("area-chart"), options);
      chart.render();
    }
  });
</script>

<template>

    <div id="area-chart"></div>
  <div class="flex justify-between">
    <div>
      <h5 class=" text-3xl font-bold text-gray-900 dark:text-white pb-2">Rp.240.000.000</h5>
      <p class="text-base font-normal text-gray-500 dark:text-gray-400">Pendapatan</p>
    </div>
    <div
  class="flex items-center  py-0.5 text-base font-semibold text-green-500 dark:text-green-500 text-center">
  {{ kenaikanuang.toFixed(2) }}%
  <svg class="w-3 h-3 ml-1" aria-hidden="true" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 10 14">
    <path stroke="currentColor" stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M5 13V1m0 0L1 5m4-4 4 4"/>
  </svg>
</div>
  </div>


</template>