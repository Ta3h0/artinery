<script setup>
defineProps({ star: Number })
</script>
<template>
  <span>
    <template v-for="n in 5">
      <svg v-if="n <= Math.floor(star)" width="18" height="18" fill="#FFC107" viewBox="0 0 24 24"
        style="vertical-align: middle;">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      <svg v-else-if="n - star < 1" width="18" height="18" fill="#FFC107" viewBox="0 0 24 24"
        style="vertical-align: middle;">
        <defs>
          <linearGradient id="half">
            <stop offset="50%" stop-color="#FFC107" />
            <stop offset="50%" stop-color="#E0E0E0" />
          </linearGradient>
        </defs>
        <path fill="url(#half)"
          d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
      <svg v-else width="18" height="18" fill="#E0E0E0" viewBox="0 0 24 24" style="vertical-align: middle;">
        <path d="M12 17.27L18.18 21l-1.64-7.03L22 9.24l-7.19-.61L12 2 9.19 8.63 2 9.24l5.46 4.73L5.82 21z" />
      </svg>
    </template>
  </span>
</template>
