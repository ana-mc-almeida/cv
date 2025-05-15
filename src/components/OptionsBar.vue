<template>
  <div class="options-bar">
    <button class="button primary-button" @click="exportToPDF">
      {{ $t('actions.export-to-pdf') }}
    </button>
    <button class="button primary-button" @click="changeLanguage">
      {{ otherLanguageString }}
    </button>
  </div>
</template>

<script>
export default {
  props: {
    cvContainer: {
      type: Object,
    },
  },
  data() {
    return {
      languge: 'pt',
    }
  },
  computed: {
    otherLanguage() {
      return this.$i18n.locale === 'pt' ? 'en' : 'pt'
    },
    otherLanguageString() {
      return this.$i18n.locale === 'pt' ? 'English' : 'Português'
    },
  },
  methods: {
    exportToPDF() {
      const optionsBar = document.querySelector('.options-bar')
      optionsBar.style.display = 'none'

      const page = document.querySelector('.page')
      const pageMargin = page.style.margin
      page.style.margin = '0 auto'

      window.print()

      optionsBar.style.display = 'flex'
      page.style.margin = pageMargin
    },
    changeLanguage() {
      this.$i18n.locale = this.otherLanguage
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/styles/_variables.scss' as *;

.options-bar {
  margin: 1rem;
  display: flex;
}

.button {
  display: block;
  margin: 20px auto;
  padding: 10px 20px;
  font-size: 16px;
  cursor: pointer;
  text-align: center;
}

.primary-button {
  // TODO: improve button style
  color: $text-color;
  background: $primary-color;
  border: 1px solid transparent;
}
.primary-button:hover {
  background: $secondary-color;
  color: $primary-color;
  border: 1px solid $primary-color;
}
</style>
