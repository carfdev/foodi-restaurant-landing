<script src="@/scripts/counter" lang="ts" />

<template>
  <div class="mt-10 flex flex-col items-center gap-4">
    <p class="text-2xl">Count: {{ count }}</p>
    <button @click="count++" class="cursor-pointer rounded bg-blue-500 px-4 py-2 text-white">
      Increment
    </button>
  </div>
</template>
