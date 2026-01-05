<script src="@/scripts/shopping-cart" lang="ts" />

<template>
  <span
    v-if="isMounted && cartItems.length > 0"
    class="bg-malachite-400 absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full text-xs text-white"
  >
    {{ cartItemCount }}
  </span>
</template>
