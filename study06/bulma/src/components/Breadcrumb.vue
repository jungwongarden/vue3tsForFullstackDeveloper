<template>
  <div class="full-screen">
    <nav class="breadcrumb has-background-light" aria-label="breadcrumbs" style="padding-left: 80px">
      <ul>
        <li><a href="#">Home</a></li>
        <li><a :href="href" id="group">{{ group }}</a></li>
        <li class="is-active"><a href="#" aria-current="page" id="current">{{ current }}</a></li>
      </ul>
    </nav>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Breadcrumb',
  props: {
    group: {
      type: String,
      required: true
    },
    current: {
      type: String,
      required: true
    },
    href: {
      type: String,
      required: true
    }
  }
});
</script>

<style scoped>
.full-screen {
  margin: 0;
  padding: 0;
  width: 100%;
  padding-top: 0.8em;
  background-color: #ececec;
}

.breadcrumb {
  height: 40px;
  line-height: 40px;
}

.breadcrumb a {
  text-decoration: none;
}
</style>