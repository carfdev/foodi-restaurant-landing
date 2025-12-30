<script src="@/scripts/shopping-cart" lang="ts" />

<template>
  <a
    href="/cart"
    class="flex items-center rounded-md p-2 hover:bg-gray-100 hover:shadow"
    aria-label="Cart"
  >
    <div class="relative">
      <svg xmlns="http://www.w3.org/2000/svg" width="24" height="24" viewBox="0 0 24 24">
        <path
          fill="currentColor"
          d="M21 6h-3A6 6 0 1 0 6 6H3a3 3 0 0 0-3 3v10a5.006 5.006 0 0 0 5 5h14a5.006 5.006 0 0 0 5-5V9a3 3 0 0 0-3-3m-9-4a4 4 0 0 1 4 4H8a4 4 0 0 1 4-4m10 17a3 3 0 0 1-3 3H5a3 3 0 0 1-3-3V9a1 1 0 0 1 1-1h3v2a1 1 0 1 0 2 0V8h8v2a1 1 0 0 0 2 0V8h3a1 1 0 0 1 1 1z"
        ></path>
      </svg>
      <span
        v-if="isMounted && cartItems.length > 0"
        class="bg-primary absolute -top-1 -right-1 flex size-4 items-center justify-center rounded-full text-xs text-white"
      >
        {{ cartItems.length }}
      </span>
    </div>
  </a>
</template>
