<template>
  <div class="contact-item">
    <!-- TODO: this should include alt text -->
    <!-- FIXME: this should only have hover style if link not null -->
    <a :href="link" target="_blank" class="contact-link" :style="{ color: color }">
      <!-- Ícones do FontAwesome -->
      <FontAwesomeIcon
        v-if="iconSource === 'fontAwesome' && faIcon"
        :icon="faIcon"
        class="contact-icon"
        :size="iconSize"
        :style="{ color: color }"
      />

      <!-- Ícones do Simple Icons -->
      <svg
        v-else-if="iconSimple"
        class="contact-icon"
        :style="{ width: iconSizeComputed + 'px', height: iconSizeComputed + 'px', color: color }"
        :viewBox="iconSimple.viewBox"
        xmlns="http://www.w3.org/2000/svg"
      >
        <path :d="iconSimple.path" fill="currentColor" />
      </svg>
      {{ text }}
    </a>
  </div>
</template>

<script>
import { FontAwesomeIcon } from '@fortawesome/vue-fontawesome'
import { library } from '@fortawesome/fontawesome-svg-core'

import * as solidIcons from '@fortawesome/free-solid-svg-icons'
import * as regularIcons from '@fortawesome/free-regular-svg-icons'
import * as brandIcons from '@fortawesome/free-brands-svg-icons'
import * as simpleIcons from 'simple-icons'

export default {
  components: { FontAwesomeIcon },
  props: {
    icon: {
      type: String,
      default: 'circle',
    },
    color: {
      type: String,
      default: 'white',
    },
    text: {
      type: String,
      default: null,
    },
    link: {
      type: String,
      default: null,
    },
    type: {
      type: String,
      default: 'fas',
    },
    iconSize: {
      type: String,
      default: null,
      validator(value) {
        if (!value) return true
        const validSizes = ['2xs', 'xs', 'sm', 'lg', 'xl', '2xl']
        return validSizes.includes(value)
      },
    },
    iconSource: {
      type: String,
      default: 'fontAwesome',
      validator(value) {
        var validValues = ['fontAwesome', 'simpleIcons']
        return validValues.includes(value)
      },
    },
  },
  computed: {
    faIcon() {
      const iconPack =
        this.type === 'fab' ? brandIcons : this.type === 'regular' ? regularIcons : solidIcons
      const icon = iconPack[`fa${this.capitalize(this.icon)}`]

      if (icon) {
        library.add(icon)
        return [this.type, this.icon]
      }
      return null
    },
    /**
     * Busca ícone no Simple Icons
     */
    iconSimple() {
      // Formatamos o nome para corresponder ao formato do Simple Icons
      const formattedIcon = `si${this.capitalize(this.icon.replace(/\./g, 'dot').replace(/-/g, ''))}`

      if (simpleIcons[formattedIcon]) {
        return {
          path: simpleIcons[formattedIcon].path,
          viewBox: '0 0 24 24',
        }
      }

      console.warn(`Ícone não encontrado: ${formattedIcon}`)
      return null
    },

    /**
     * Define tamanho fixo para Simple Icons
     */
    iconSizeComputed() {
      const sizeMap = {
        '2xs': '10',
        xs: '12',
        sm: '14',
        lg: '20',
        xl: '24',
        '2xl': '32',
      }
      return sizeMap[this.iconSize] || '16' // Default: 16px
    },
  },
  methods: {
    capitalize(str) {
      return str.charAt(0).toUpperCase() + str.slice(1)
    },
  },
}
</script>

<style lang="scss">
@use '@/assets/styles/_variables.scss' as *;

.contact-item {
  display: flex;
  align-items: center;
  gap: 8px;
  font-size: 16px;
  margin-bottom: 8px;
}

.contact-icon {
  // color: $primary-color;
  width: 1em;
  height: 1em;
  display: inline-block;
  vertical-align: middle;
}

.contact-link {
  text-decoration: none;
  // color: $primary-color;
  transition: color 0.3s;
  display: flex;
  align-items: center;
  gap: 8px;
}

.contact-link:hover {
  color: $light-blue;
}

// .contact-icon path {
//   width: 100%;
//   height: 100%;
// }
</style>
