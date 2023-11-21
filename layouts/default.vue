<template>
  <v-app>
    <div class="layout-container">
      <v-card class="mx-auto card-container pa-6" elevation="10" width="100%" height="100%">
        <v-layout>
          <v-app-bar color="transparent" flat>
            <template v-slot:prepend>
              <v-app-bar-nav-icon></v-app-bar-nav-icon>
            </template>
            
            <v-app-bar-title v-if="false" class="d-flex justify-center font-weight-black">I'm a Software Developer</v-app-bar-title>

            <template v-slot:append>
              <v-btn icon="mdi-menu-down"></v-btn>
            </template>
          </v-app-bar>

          <v-main>
            <NuxtPage />
          </v-main>
        </v-layout>
      </v-card>
    </div>
  </v-app>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.layout-container {
  @include water_design;
}
</style>
