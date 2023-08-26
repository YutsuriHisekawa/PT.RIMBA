<script setup>
import { ref } from 'vue';

const karyawanData = ref({
  OnSite: 61,
  Wfh: 29,
  Cuti: 10
});
const totalKaryawan = karyawanData.value.OnSite + karyawanData.value.Wfh + karyawanData.value.Cuti;
const karyawanCuti = totalKaryawan - karyawanData.value.Cuti;



window.addEventListener("load", function() {
  const getChartOptions = () => {
      return {
        series: [karyawanData.value.Wfh, karyawanData.value.OnSite, karyawanData.value.Cuti],
        colors: ["#ff9900", "#ff4400", "#4a2517"],
          chart: {
            height: 420,
            width: "100%",
            type: "pie",
          },
          stroke: {
            colors: ["white"],
            lineCap: "",
          },
          plotOptions: {
            pie: {
              labels: {
                show: true,
              },
              size: "100%",
              dataLabels: {
                offset: -25
              }
            },
          },
          labels: [
  `WFH: ${karyawanData.value.Wfh} orang`,
  `OnSite: ${karyawanData.value.OnSite} orang`,
  `Cuti: ${karyawanData.value.Cuti} orang`
],  
          dataLabels: {
            enabled: true,
            style: {
              fontFamily: "Inter, sans-serif",
              fontWeight: "bold"
              
            },
          },
          legend: {
            position: "bottom",
            fontFamily: "Inter, sans-serif",
            fontWeight: "bold"
          },
          yaxis: {
            labels: {
              formatter: function (value) {
                return value + "%"
              },
            },
          },
          xaxis: {
            labels: {
              formatter: function (value) {
                return value  + "%"
              },
            },
            axisTicks: {
              show: false,
            },
            axisBorder: {
              show: false,
            },
          },
        }
      }

      if (document.getElementById("pie-chart") && typeof ApexCharts !== 'undefined') {
    const chart = new ApexCharts(document.getElementById("pie-chart"), getChartOptions());
    chart.render();
  }
  });




</script>

<template>
  <div class="py-6" id="pie-chart"></div>
  </template>










