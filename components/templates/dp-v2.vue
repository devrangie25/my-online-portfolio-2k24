<template>
  <div class="dp-v2-container">
    <v2-home />
    <v2-about />
  </div>
</template>

<script setup lang="ts">
const scrollY = ref(0);
const nuxtApp = useNuxtApp()

onMounted(() => {
  console.log('nuxt', nuxtApp);
  // window.addEventListener("scroll", handleScroll);
});

onUnmounted(() => {
  // window.removeEventListener("scroll", handleScroll);
});

const handleScroll = () => {
  scrollY.value = window.scrollY;
};

const onNavigateTo = (to: any) => {
  nuxtApp.hook("page:finish", () => {
    window.scrollTo(0, 0)
  })
  // $vuetify.goTo(`#${to}`, {
  //   duration: 700,
  //   offset: 0,
  //   easing: "easeInOutCubic"
  // });
}
</script>

<style scoped>
.dp-v2-container {
  height: 100vh;
}
</style>
