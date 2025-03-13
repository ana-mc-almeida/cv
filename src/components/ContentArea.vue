<template>
  <div class="content-area">
    <h1 style="margin: 0">Ana Margarida Almeida</h1>
    <h3 style="margin: 0">Engenharia Informática e de Computadores</h3>
    <!-- <SectionContainer title="Perfil" style="text-align: justify">
      <SectionEntry
        description="Sou uma estudante de Engenharia Informática apaixonada por desenvolvimento de software e
      inovação tecnológica."
      />
    </SectionContainer> -->
    <SectionContainer title="Experiência Profissional">
      <SectionEntry
        mainTitle="Full Stack Developer"
        subTitle="Instituto Superior Técnico"
        startDate="15-01-2023"
        description="Desenvolvimento de funcionalidades para as aplicações administrativas e acadêmicas dentro do universo IST, como 'Scholar', 'Cologne', 'Shuttle', 'Link-Shortener', etc. Utilização de tecnologias como Node.js, Vue.js, MongoDB, Elasticsearch, etc."
        :icons="['nodedotjs', 'vuedotjs', 'mongodb', 'elasticsearch', 'gitlab', 'scss']"
      />
      <SectionEntry
        mainTitle="Software Engineer"
        subTitle="Ambidata"
        startDate="01-07-2020"
        endDate="01-04-2021"
        description="Desenvolvimento de software e apoio à equipa de desenvolvimento. Utilização de softwares e plataformas digitais, como Postman e AzureDevOps."
      />
    </SectionContainer>
    <SectionContainer title="Projetos">
      <SectionEntry
        mainTitle="ExpoCIC Virtual - Project Manager | Full Stack Developer"
        subTitle="Colégio Internato dos Carvalhos"
        startDate="31-10-2020"
        endDate="01-10-2021"
        description="ExpoCIC interactiva e online, criada com o intuito de substituir a ExpoCIC presencial, uma vez que esta não foi possível realizar
devido à pandemia do COVID-19."
        :icons="['php', 'mysql', 'javascript', 'html5', 'css']"
      />
      <SectionEntry
        mainTitle="Projeto de Aptidão Profissional"
        subTitle="Ambidata"
        startDate="06-01-2021"
        endDate="22-04-2021"
        description="Após a Formação em Contexto de Trabalho na Ambidata, fui convidada a criar uma nova versão de uma aplicação da mesma empresa. Programei em C#, tendo adquirido conhecimentos relacionados com o funcionamento do Visual Studio Code, ClickOnce e também da framework DevExpress."
        :icons="['c#', 'visualstudiocode', 'devExpress']"
      />
      <SectionEntry
        mainTitle="(De)Pressure"
        subTitle="Finalista TecStorm'22"
        startDate="01-01-2022"
        endDate="01-03-2022"
        description="A (De)Pressure é uma aplicação criada para ajudar as pessoas a gerenciar sua saúde mental por meio de um espaço seguro e personalizável, acompanhando a jornada do utilizador ao longo do tempo."
        :icons="['figma']"
      />
    </SectionContainer>
    <SectionContainer title="Voluntariado">
      <LinkEntry text="MIUP 2021" iconSize="2xs" type="regular" color="#1e3a5f" />
      <LinkEntry text="JN Solidário" iconSize="2xs" type="regular" color="#1e3a5f" />
      <!-- <LinkEntry
        text="Distribuição de comida e roupa aos sem-abrigo"
        iconSize="2xs"
        type="regular"
        color="#1e3a5f"
      /> -->
      <LinkEntry
        text="Banco Alimentar contra a Fome"
        iconSize="2xs"
        type="regular"
        color="#1e3a5f"
      />
    </SectionContainer>
  </div>
</template>

<script>
import SectionContainer from './SectionContainer.vue'
import SectionEntry from './SectionEntry.vue'
import LinkEntry from './LinkEntry.vue'

export default {
  components: {
    SectionContainer,
    SectionEntry,
    LinkEntry,
  },
}
</script>

<style lang="scss">
@use '@/assets/styles/_variables.scss' as *;

.content-area {
  background: $primary-color;
  color: $secondary-color;
  padding: 0 2rem;
  text-align: center;
  display: flex;
  flex-direction: column;
  align-items: center;
  flex: 1;
}
</style>
