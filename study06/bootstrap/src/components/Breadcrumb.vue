<template>
    <div class="full-screen">
        <nav aria-label="breadcrumb" class="container" >
            <ol class="breadcrumb">
                <li class="breadcrumb-item"><a href="#">Home</a></li>
                <li class="breadcrumb-item"><a :href="href" id="group">{{ group }}</a></li>
                <li class="breadcrumb-item active" aria-current="page" id="current">{{ current }}</li>
            </ol>
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

<style>
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