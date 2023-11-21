<template>
    <div>
      <v-carousel
        height="480"
        hide-delimiter-background
        direction="vertical"
        :show-arrows="false"
        vertical-delimiters="right"
      >
        <v-carousel-item v-for="(slide, i) in slides" :key="i">
          <v-sheet :color="'transparent'" height="100%">
            <div class="d-flex fill-height justify-center align-center">
              <div class="text-h2">{{ slide }} Slide</div>
            </div>
          </v-sheet>
        </v-carousel-item>
      </v-carousel>
    </div>
  </template>
  
  <script setup lang="ts">
  const colors = ref([
    "indigo",
    "warning",
    "pink darken-2",
    "red lighten-1",
    "deep-purple accent-4",
  ]);
  const slides = ref(["First", "Second", "Third", "Fourth", "Fifth"]);
  </script>
  
  <style scoped></style>
  