<template>
  <div class="flex items-stretch justify-between gap-6 max-w-screen-lg">
    <div
      class="flex flex-col flex-initial shrink-0 grow-0 border-2 border-gray-0 px-6 py-3 rounded-md bg-white shadow-xl"
    >
      <div class="flex-col border-b py-5 border-gray-0 flex gap-3 items-center justify-center">
        <TheMapIcon class="w-12 h-12 text-hard-primary" />
        <p class="text-gray-9 text-center w-2/3">2715 Ash Dr. San Jose, South Dakota 83475</p>
      </div>
      <div class="flex-col border-b py-5 border-gray-0 flex gap-3 items-center justify-center">
        <TheEnvelopeIcon class="w-12 h-12 text-hard-primary" />
        <p class="text-gray-9 text-center w-2/3">Proxy@gmail.com Help.proxy@gmail.com</p>
      </div>
      <div class="flex-col py-5 flex items-center justify-center gap-3">
        <ThePhoneIcon class="w-12 h-12 text-hard-primary" />
        <p class="text-gray-9 text-center w-2/3">(219) 555-0114 (164) 333-0487</p>
      </div>
    </div>
    <div
      class="flex flex-col flex-1 gap-4 px-6 py-6 border-2 border-gray-0 rounded-md bg-white shadow-xl"
    >
      <h3 class="text-xl font-semibold">Just Say Hello!</h3>
      <p class="text-gray-5">
        Do you fancy saying hi to me or you want to get started with your <br />
        project and you need my help? Feel free to contact me.
      </p>
      <div class="flex items-center justify-between gap-4">
        <input
          type="text"
          class="h-10 placeholder:text-gray-4 w-full text-base hover:border-primary block border-2 rounded-md border-gray-0 transition duration-500 px-4 outline-none focus:border-primary"
          placeholder="Your email address"
        />
        <input
          type="text"
          class="h-10 w-full placeholder:text-gray-4 text-base hover:border-primary block border-2 rounded-md border-gray-0 transition duration-500 px-4 outline-none focus:border-primary"
          placeholder="Your email address"
        />
      </div>
      <div>
        <input
          type="text"
          class="h-10 w-full placeholder:text-gray-4 text-base hover:border-primary block border-2 rounded-md border-gray-0 transition duration-500 px-4 outline-none focus:border-primary"
          placeholder="Text letter"
        />
      </div>
      <div>
        <textarea
          class="h-24 w-full resize-none placeholder:text-gray-4 text-base hover:border-primary block border-2 rounded-md border-gray-0 transition duration-500 px-4 outline-none focus:border-primary"
          placeholder="Subjects"
          cols="30"
          rows="10"
        ></textarea>
      </div>
      <button
        type="submit"
        class="text-center w-fit text-base hover:opacity-65 transition duration-500 h-14 rounded-3xl bg-primary text-gray-0 py-3 px-10"
      >
        Send Message
      </button>
    </div>
  </div>
</template>

<script setup>
import TheEnvelopeIcon from '@/components/icons/TheEnvelopeIcon.vue'
import TheMapIcon from '@/components/icons/TheMapIcon.vue'
import ThePhoneIcon from '@/components/icons/ThePhoneIcon.vue'
</script>

<style lang="scss" scoped></style>
