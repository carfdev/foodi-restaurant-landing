<script src="@/scripts/mobile-menu" lang="ts" />

<template>
  <div>
    <button
      class="rounded-md p-2 hover:bg-gray-100 hover:shadow lg:hidden"
      aria-label="Open menu"
      type="button"
      aria-haspopup="dialog"
      :aria-expanded="open"
      :data-state="open ? 'open' : 'closed'"
      @click="open = !open"
    >
      <svg
        xmlns="http://www.w3.org/2000/svg"
        width="24"
        height="24"
        viewBox="0 0 24 24"
        fill="none"
        stroke="currentColor"
        stroke-width="2"
        stroke-linecap="round"
        stroke-linejoin="round"
        class="size-6"
        aria-hidden="true"
      >
        <path d="M4 5h16"></path>
        <path d="M4 12h16"></path>
        <path d="M4 19h16"></path>
      </svg>
    </button>
    <Teleport to="body" v-if="mounted">
      <Transition
        enter-active-class="animate-in fade-in-0 duration-300"
        leave-active-class="animate-out fade-out-0 duration-300"
      >
        <div
          v-if="open"
          class="fixed inset-0 z-50 bg-black/50"
          style="pointer-events: auto"
          :aria-hidden="open ? 'false' : 'true'"
          @click="open = false"
        ></div>
      </Transition>
      <Transition
        enter-active-class="animate-in slide-in-from-right duration-500"
        leave-active-class="animate-out slide-out-to-right duration-300"
      >
        <div
          v-if="open"
          role="dialog"
          class="fixed inset-y-0 right-0 z-50 flex h-full w-3/4 flex-col justify-between border-l border-gray-200 bg-gray-50 px-4 py-12 shadow-lg sm:max-w-sm"
          :tabindex="open ? undefined : -1"
          style="pointer-events: auto"
        >
          <nav class="mt-40 flex flex-col items-center justify-center gap-6">
            <ul>
              <li v-for="(item, idx) in items" :key="`mobile-nav-${idx}`" class="py-2 text-center">
                <a
                  @click="open = false"
                  :href="item.href"
                  :ref="
                    (el) => {
                      if (idx === 0) setFirstLink(el);
                    }
                  "
                  data-slot="button"
                  class="hover:text-malachite-400 text-2xl font-medium transition-colors"
                  >{{ item.text }}</a
                >
              </li>
            </ul>
          </nav>
          <a
            href="/contact"
            class="bg-malachite-400 hover:shadow-malachite-200 flex items-center justify-center gap-2 rounded-full px-6 py-2 text-white transition-colors hover:shadow-lg"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              fill="none"
              viewBox="0 0 24 24"
              {...props}
            >
              <path
                fill="currentColor"
                d="M12.96 1a1 1 0 0 1 1-1 10.01 10.01 0 0 1 10 10 1 1 0 1 1-2 0 8.01 8.01 0 0 0-8-8 1 1 0 0 1-1-1m1 5a4 4 0 0 1 4 4 1 1 0 1 0 2 0 6.006 6.006 0 0 0-6-6 1 1 0 1 0 0 2m9.094 10.74a3.1 3.1 0 0 1 0 4.377l-.91 1.05c-8.19 7.84-28.12-12.085-20.4-20.3l1.15-1a3.08 3.08 0 0 1 4.327.04c.03.03 1.884 2.437 1.884 2.437a3.1 3.1 0 0 1-.007 4.282L7.94 9.082a12.78 12.78 0 0 0 6.93 6.945l1.466-1.165a3.1 3.1 0 0 1 4.28-.006s2.407 1.852 2.438 1.883m-1.376 1.453s-2.393-1.84-2.424-1.872a1.1 1.1 0 0 0-1.55 0c-.026.028-2.043 1.635-2.043 1.635a1 1 0 0 1-.98.152A15 15 0 0 1 5.862 9.3a1 1 0 0 1 .145-1S7.613 6.282 7.64 6.256a1.1 1.1 0 0 0 0-1.549 504 504 0 0 1-1.872-2.425 1.1 1.1 0 0 0-1.51.04l-1.15 1C-2.534 10.104 14.737 26.417 20.682 20.8l.91-1.05a1.12 1.12 0 0 0 .086-1.557"
              ></path>
            </svg>
            Contact
          </a>
          <button
            type="button"
            @click="open = false"
            class="absolute top-4 right-4 rounded-xs opacity-70 transition-opacity hover:opacity-100 focus:ring-2 focus:ring-offset-2 focus:outline-hidden disabled:pointer-events-none"
          >
            <svg
              xmlns="http://www.w3.org/2000/svg"
              width="24"
              height="24"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              stroke-width="2"
              stroke-linecap="round"
              stroke-linejoin="round"
              class="size-4"
              aria-hidden="true"
            >
              <path d="M18 6 6 18"></path>
              <path d="m6 6 12 12"></path></svg
            ><span class="sr-only">Close</span>
          </button>
        </div>
      </Transition>
    </Teleport>
  </div>
</template>
