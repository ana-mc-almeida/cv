<template>
  <div class="side-panel">
    <!-- TODO: make img container prettier -->
    <img src="@/assets/profile_picture.jpg" alt="Ana Margarida" />
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
    </SectionContainer>
    <SectionContainer title="Línguas">
      <!-- TODO: improve this to include levels -->
      <LinkEntry text="Português" iconSize="2xs" />
      <LinkEntry text="Inglês" iconSize="2xs" />
      <LinkEntry text="Espanhol" iconSize="2xs" />
    </SectionContainer>
    <SectionContainer title="Linguagens">
      <!-- TODO: Missing a lot of stuff -->
      <div style="display: flex; gap: 0.5rem">
        <LinkEntry icon="html5" type="fab" iconSize="2xl" />
        <LinkEntry icon="css" type="fab" iconSize="2xl" />
        <LinkEntry icon="python" type="fab" iconSize="2xl" />
        <LinkEntry icon="java" type="fab" iconSize="2xl" />
        <LinkEntry icon="javascript" type="fab" iconSize="2xl" />
      </div>
    </SectionContainer>
    <SectionContainer title="Tools">
      <!-- TODO: Missing a lot of stuff -->
      <div style="display: flex; gap: 0.5rem">
        <LinkEntry icon="vuedotjs" type="fab" iconSize="2xl" />
        <LinkEntry icon="nodedotjs" type="fab" iconSize="2xl" />
        <LinkEntry icon="postman" type="fab" iconSize="2xl" />
        <LinkEntry icon="godotengine" type="fab" iconSize="2xl" />
      </div>
    </SectionContainer>
    <SectionContainer title="Voluntariado">
      <SectionEntry subTitle="MIUP 2021" startDate="16-10-2021" endDate="16-10-2021" />
      <SectionEntry subTitle="JN Solidário" startDate="14-04-2021" endDate="05-05-2021" />
      <SectionEntry
        subTitle="Legião da Boa Vontade"
        description="Distribuição de comida e roupa aos sem-abrigo, no Porto, através da associação Legião da Boa Vontade"
      />
      <SectionEntry subTitle="Banco Alimentar contra a Fome" />
    </SectionContainer>
    <!-- <SectionContainer title="Interests">
      <div style="display: flex; gap: 1rem">
        <LinkEntry icon="futbol" iconSize="2xl" />
        <LinkEntry icon="film" iconSize="2xl" />
        <LinkEntry icon="suitcase" iconSize="2xl" />
      </div>
    </SectionContainer> -->
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
      picturePath: '@/assets/profile_picture.jpg',
    }
  },
}
</script>

<style lang="scss">
@use '@/assets/styles/_variables.scss' as *;

.side-panel {
  background: $secondary-color;
  color: $primary-color;
  padding: 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}

img {
  width: 120px;
  border-radius: 50%;
  margin-bottom: 15px;
}
</style>
