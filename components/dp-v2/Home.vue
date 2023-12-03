<template>
  <div class="container">
    <v-row class="row-container" no-gutters>
      <v-col cols="3" class="first-col"></v-col>
      <v-col cols="9" class="second-col">
        <div class="content d-flex align-center">
          <div class="outer-border">
            <div class="img-container">
              <img
                class="rounded-image"
                src="~/assets/img/p-img-2-circle.png"
                alt="Rounded Image"
                width="280"
              />
            </div>
          </div>
          <div class="home-description">
            <div class="text-h2">John Doe</div>
            <div class="mt-4 text-h5">Web Developer</div>
            <div class="text-h5 cv-btn">
              <v-btn
                :color="'#7071e8'"
                width="230"
                height="45"
                variant="elevated"
                rounded="0"
              >
                Download Resume
              </v-btn>
            </div>
          </div>
        </div>
        <div class="bottom-div"></div>
      </v-col>
    </v-row>
  </div>
</template>

<script setup lang="ts"></script>

<style scoped lang="scss">
.img-container {
  background-color: #ffffff;
  width: 368px;
  height: 370px;
  border-radius: 100%; /* Adjust the value to change the level of rounding */
  display: grid;
  place-content: center;
}
.outer-border {
  border: 10px solid $dev-bg-1; /* Adjust the color and size of the outer border */
  border-radius: 100%; /* Adjust the value to change the level of rounding */
  width: 390px;
  height: 390px;
  margin-top: 20px;
}

.rounded-image {
  border-radius: 100%;
  border: 10px solid $dev-bg-1; /* Adjust the color and size of the outer border */
}

.container {
  height: 90vh;
  .row-container {
    height: 100%;
  }
  .first-col {
    background-color: $dev-bg-1;
  }
  .second-col {
    flex: 1; /* Allow the container to grow and take the available space */
    display: flex;
    flex-direction: column;
  }
  .content {
    padding: 5rem 12rem 12rem 12rem;
    height: 100%;
    margin-left: -25rem;
  }
  .cv-btn {
    margin-top: 3rem;
  }
  .bottom-div {
    margin-top: auto; /* Push the div to the bottom by using auto margin on top */
    background-color: $dev-bg-1;
    padding: 5px;
  }

  .home-description {
    margin-left: 7rem;
  }
}
</style>
