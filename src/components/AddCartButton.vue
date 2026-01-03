<script src="@/scripts/add-cart" lang="ts" />

<template>
  <form @submit.prevent="addCartItem">
    <button :class="class" type="submit">
      <slot />
    </button>
  </form>
</template>
