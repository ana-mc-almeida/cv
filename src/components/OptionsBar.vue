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
import html2pdf from 'html2pdf.js'

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
      // FIXME: text should be selectable
      const element = this.cvContainer

      const options = {
        margin: 0,
        filename: 'Curriculum_Vitae.pdf',
        image: { type: 'jpeg', quality: 0.98 },
        html2canvas: { scale: 2, useCORS: true },
        jsPDF: { unit: 'mm', format: 'a4', orientation: 'portrait' },
        enableLinks: true,
      }

      html2pdf().set(options).from(element).save()
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
