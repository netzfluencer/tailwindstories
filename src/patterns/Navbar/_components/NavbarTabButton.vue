<template>
  <button class="p-2 rounded bg-ci hover:bg-ci-light" @click="e => $emit('click', e)"><slot /></button>
</template>
