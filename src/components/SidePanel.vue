<template>
  <div class="side-panel">
    <!-- TODO: make img container prettier -->
    <img :src="picturePath" :alt="$t('my-name')" />
    <SectionContainer title="Contactos">
      <LinkEntry icon="house" text="Vila Nova de Gaia, Portugal" iconSize="lg" />
      <LinkEntry
        icon="envelope"
        link="mailto:ana.margarida2004@gmail.com"
        text="ana.margarida2004@gmail.com"
        iconSize="lg"
      />
      <LinkEntry icon="phone" text="(+351) 915860113" iconSize="lg" />
      <LinkEntry
        icon="github"
        link="https://github.com/ana-mc-almeida"
        text="ana-mc-almeida"
        type="fab"
        iconSize="lg"
      />
      <LinkEntry
        icon="linkedin"
        link="https://www.linkedin.com/in/ana-mc-almeida/"
        text="ana-mc-almeida"
        type="fab"
        iconSize="lg"
      />
      <!-- TODO: add link to website -->
    </SectionContainer>
    <!-- <SectionContainer title="Linguagens">
      <div style="display: flex; gap: 0.5rem">
        <LinkEntry icon="html5" type="fab" iconSize="2xl" />
        <LinkEntry icon="css" type="fab" iconSize="2xl" />
        <LinkEntry icon="python" type="fab" iconSize="2xl" />
        <LinkEntry icon="java" type="fab" iconSize="2xl" />
        <LinkEntry icon="javascript" type="fab" iconSize="2xl" />
      </div>
    </SectionContainer>
    -->
    <!-- <SectionContainer title="Tools">
      <div style="display: flex; gap: 0.5rem">
        <LinkEntry icon="vuedotjs" type="fab" iconSize="2xl" />
        <LinkEntry icon="nodedotjs" type="fab" iconSize="2xl" />
        <LinkEntry icon="postman" type="fab" iconSize="2xl" />
        <LinkEntry icon="godotengine" type="fab" iconSize="2xl" />
      </div>
    </SectionContainer> -->
    <!-- <SectionContainer title="Voluntariado">
      <SectionEntry subTitle="MIUP 2021" startDate="16-10-2021" endDate="16-10-2021" />
      <SectionEntry
        subTitle="JN Solidário"
        startDate="14-04-2021"
        endDate="05-05-2021"
        :showTotalTime="false"
      />
      <SectionEntry
        subTitle="Legião da Boa Vontade"
        description="Distribuição de comida e roupa aos sem-abrigo, no Porto, através da associação Legião da Boa Vontade"
      />
      <SectionEntry subTitle="Banco Alimentar contra a Fome" />
    </SectionContainer> -->
    <!-- <SectionContainer title="Interests">
      <div style="display: flex; gap: 1rem">
        <LinkEntry icon="futbol" iconSize="2xl" />
        <LinkEntry icon="film" iconSize="2xl" />
        <LinkEntry icon="suitcase" iconSize="2xl" />
      </div>
    </SectionContainer> -->
    <SectionContainer :title="$t('projects.title')">
      <SectionEntry
        :mainTitle="$t('projects.expocic.title')"
        :subTitle="$t('cic')"
        startDate="31-10-2020"
        endDate="01-05-2021"
      >
        <template #description>
          <p>{{ $t('projects.expocic.description') }}</p>
          <p>{{ $t('projects.expocic.technologies') }}</p>
        </template>
      </SectionEntry>
      <SectionEntry
        :mainTitle="$t('projects.pap.title')"
        :subTitle="$t('ambidata')"
        startDate="06-01-2021"
        endDate="22-04-2021"
      >
        <template #description>
          <p>{{ $t('projects.pap.description') }}</p>
          <p>{{ $t('projects.pap.technologies') }}</p>
        </template>
      </SectionEntry>
      <SectionEntry
        :mainTitle="$t('projects.depressure.title')"
        subTitle="Finalista TecStorm'22"
        startDate="01-01-2022"
        endDate="01-03-2022"
        :description="
          $t('projects.depressure.description') + ' ' + $t('projects.depressure.technologies')
        "
      />
      <SectionEntry mainTitle="Other Projects">
        <template #description>
          <LinkEntry
            icon="osi"
            link="https://github.com/oppia/oppia"
            type="fab"
            text="Oppia Plataform"
          />
          <LinkEntry
            icon="cube"
            link="https://github.com/TiagoFar78/PrisonEscape/"
            text="Minecraft PlugIn"
          />
          <LinkEntry icon="godotengine" text="Game Jams" />
        </template>
      </SectionEntry>
    </SectionContainer>
  </div>
</template>

<script>
import LinkEntry from './LinkEntry.vue'
import SectionContainer from './SectionContainer.vue'
import SectionEntry from './SectionEntry.vue'

export default {
  components: {
    LinkEntry,
    SectionContainer,
    SectionEntry,
  },
  data() {
    return {
      picturePath: new URL('@/assets/profile_picture_1_1.jpg', import.meta.url).href,
    }
  },
}
</script>

<style lang="scss">
@use '@/assets/styles/_variables.scss' as *;

.side-panel {
  background: $secondary-color;
  color: $primary-color;
  padding: 0 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

img {
  width: 150px;
  border-radius: 50%;
  margin: 2rem 0 0rem 0;
}

li {
  font-size: 14px;
  margin: 0;
  margin-top: 5px;
  text-align: justify;
}
ul {
  margin: 0;
  padding-inline-start: 20px;
}
</style>
