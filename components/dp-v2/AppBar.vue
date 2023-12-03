<template>
  <v-app-bar color="white" scroll-behavior="elevate">
    <v-row no-gutters class="app-bar-row">
      <v-col cols="3">
        <v-card
          class="d-flex align-center"
          height="100%"
          width="100%"
          variant="flat"
          :color="scrollY > 0 ? 'transparent' : '#7071E8'"
          rounded="0"
        >
          <v-app-bar-title class="ml-8">Dev</v-app-bar-title>
        </v-card>
      </v-col>

      <v-col cols="9" class="d-flex align-center">
        <v-spacer />
        <v-spacer />
        <v-btn width="200" height="45"> Home </v-btn>

        <v-btn width="200" height="45"> About Me </v-btn>

        <v-btn width="200" height="45"> Portfolio </v-btn>

        <v-btn
          width="200"
          height="45"
          color="#7071E8"
          variant="elevated"
          rounded="0"
        >
          Contact Me
        </v-btn>
        <v-spacer />
        <v-btn icon="mdi-white-balance-sunny"></v-btn>
        <v-spacer />
      </v-col>
    </v-row>
  </v-app-bar>
</template>

<script setup lang="ts">
const scrollY = ref(0);

onMounted(() => {
  window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  scrollY.value = window.scrollY;
};
</script>

<style scoped>
.app-bar-row {
  height: 100%;
}
</style>
