<template>
  <div class="content-area">
    <h1 style="margin: 0">Ana Margarida Almeida</h1>
    <h3 style="margin: 0">Engenharia Informática e de Computadores</h3>
    <SectionContainer title="Perfil" style="text-align: justify">
      <SectionEntry
        description="Sou uma estudante de Engenharia Informática apaixonada por desenvolvimento de software e
      inovação tecnológica."
      />
    </SectionContainer>
    <SectionContainer title="Experiência Profissional">
      <SectionEntry
        mainTitle="Full Stack Developer"
        subTitle="Instituto Superior Técnico"
        startDate="15-01-2023"
        description="Development of features for the administrative and academic applications within the IST universe.Development of features for the administrative and academic applications within the IST universe."
      />
      <SectionEntry
        mainTitle="Software Engineer"
        subTitle="Ambidata Group"
        startDate="01-07-2020"
        endDate="01-04-2021"
        description="Software development and support for the development team.
        Use of Software and Digital Platforms, such as Postman and AzureDevOps."
      />
    </SectionContainer>
    <SectionContainer title="Educação">
      <SectionEntry
        mainTitle="Licenciatura em Engenharia Informática e de Computadores"
        subTitle="Instituto Superior Técnico"
        startDate="04-10-2021"
        endDate="31-07-2024"
      />
      <SectionEntry
        mainTitle="Nível 4 - Ensino Secundário (12º Ano)"
        subTitle="Colégio Internato dos Carvalhos"
        startDate="13-09-2018"
        endDate="13-07-2021"
      />
    </SectionContainer>
    <SectionContainer title="Projetos">
      <SectionEntry
        mainTitle="ExpoCIC Virtual - Project Manager | Full Stack Developer"
        subTitle="CIC"
        startDate="31-10-2020"
        description="ExpoCIC interactiva e online, criada com o intuito de substituir a ExpoCIC presencial, uma vez que esta não foi possível realizar
devido à pandemia do COVID-19."
      />
      <SectionEntry
        mainTitle="Projeto de Aptidão Profissional"
        subTitle="Ambidata, Digital Innovation Solutions & Consulting"
        startDate="06-01-2021"
        endDate="22-04-2021"
        description="Desta forma, programei em C#, tendo obtido conhecimentos relacionados com o funcionamento do Visual Studio Code,
ClickOnce e ainda da framework DevExpress."
      />
    </SectionContainer>
  </div>
</template>

<script>
import SectionContainer from './SectionContainer.vue'
import SectionEntry from './SectionEntry.vue'

export default {
  components: {
    SectionContainer,
    SectionEntry,
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

img {
  width: 120px;
  border-radius: 50%;
  margin-bottom: 15px;
}
</style>
