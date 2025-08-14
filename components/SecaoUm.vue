<template>
  <v-container fluid
    class="container-secao-um">
    <v-row class=" !tw-m-0 !tw-py-32 md:tw-py-8 lg:!tw-py-24 xl:!tw-py-32 xl:!tw-pb-[300px]">
      <v-col cols="12"
        md="7"
        class="tw-flex tw-flex-col">
        <v-img class="tw-mt-16 md:tw-mt-32"
          src="~/assets/images/logo-eddas-brasil.png"
          width="141"
          max-height="80" />
        <h1 class="tw-text-[44px] tw-text-white">Soluções para uma <b>educação de qualidade</b></h1>
        <p class="tw-pb-24 tw-text-white tw-text-2xl">Projetos educacionais que transformam realidades em toda a
          <b>região Nordeste.</b>
        </p>
      </v-col>
    </v-row>
  </v-container>
  <v-container>
    <v-row>
      <v-col cols="12">
        <h1 class="tw-text-[#2A4986] tw-text-[40px] tw-text-center">Quem somos?</h1>
        <p class="tw-text-center tw-mt-[40px] tw-text-[#6C6C6D] tw-text-xl tw-max-w-[950px] tw-mx-auto">A EDDAS Brasil é
          uma distribuidora e editora com sede em João Pessoa, Paraíba. Atuamos em todos os estados da Região Nordeste,
          oferecendo soluções educacionais completas, personalizadas e inovadoras para escolas públicas e privadas.</p>
      </v-col>
    </v-row>
    <v-row class="!tw-mt-8">
      <v-col cols="12"
        sm="4"
        v-for="(item, index) in valores"
        :key="index"
        class="tw-text-center tw-flex tw-flex-col tw-items-center tw-justify-end">
        <img :src="item.icone"
          alt="Ícone"
          class="tw-mx-auto tw-mb-4"
          :max-height="item.height" />
        <h3 class="tw-font-bold tw-text-lg">{{ item.titulo }}</h3>
        <p class="tw-text-[#6C6C6D] tw-mt-2 tw-max-w-[240px]">{{ item.descricao }}</p>
      </v-col>
    </v-row>
    <v-row class="!tw-mt-32">
      <v-col cols="12">
        <h1 class="tw-text-[#2A4986] tw-text-[40px] tw-text-center">o que oferecemos?</h1>
        <p class="tw-text-center tw-mt-[40px] tw-text-[#6C6C6D] tw-text-xl tw-max-w-[750px] tw-mx-auto">Tudo que sua
          instituição precisa para oferecer uma educação <b>moderna, significativa e alinhada às diretrizes
            nacionais.</b></p>
      </v-col>
    </v-row>

    <v-row class="!tw-mt-16 !tw-max-w-[850px] !tw-mx-auto">
      <v-col cols="12"
        sm="6"
        v-for="(item, index) in recursos"
        :key="index"
        class="!tw-mt-8 tw-text-center tw-flex tw-flex-col tw-items-center tw-justify-end">
        <div
          class="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-flex-col tw-text-center cards-shadow tw-rounded-md tw-p-8 tw-pt-12 tw-relative">
          <div
            class="tw-rounded-full tw-h-16 tw-w-16 tw-flex tw-items-center tw-justify-center tw-bg-[#2EB370] tw-absolute tw-top-[-2rem] tw-right-[calc(50%-2rem)]">
            <img :src="item.icone"
              alt=""
              class="tw-h-8 tw-w-8">
          </div>
          <h3 class="tw-font-bold tw-text-lg">{{ item.titulo }}</h3>
          <p class="tw-text-[#6C6C6D] tw-mt-2 tw-mx-8">{{ item.descricao }}</p>
        </div>
      </v-col>
    </v-row>

    <v-row class="!tw-mt-20">
      <v-col cols="12"
        sm="6">
        <v-img src="~/assets/images/brasil.png"
          width="100%"></v-img>
      </v-col>
      <v-col cols="12"
        sm="6">
        <h1 class="tw-text-[#2A4986] tw-text-[40px] tw-font-bold">Campo de atuação</h1>
        <p class="tw-mt-4 tw-text-[#6C6C6D] tw-text-xl tw-max-w-[750px] tw-mx-auto">Com sede em João Pessoa, Paraíba,
          atuamos em <b>todos os estados da Região Nordeste.</b> Realizamos visitas periódicas para acompanhar o
          desenvolvimento dos projetos adotados e atender às necessidades que surgem ao longo do ano letivo.</p>
        <div class="tw-mt-4 tw-bg-[#2A4986] tw-w-6 tw-h-[2px] tw-rounded-full"></div>
        <p class="tw-mt-4 tw-text-[#6C6C6D] tw-text-xl tw-max-w-[750px] tw-mx-auto">Estamos expandindo nosso campo de
          atuação cada vez mais!</p>
        <v-btn class="tw-mt-8 !tw-normal-case tw-text-black !tw-font-bold"
          rounded
          color="#F8AF3E">Saber mais</v-btn>
      </v-col>
    </v-row>

    <v-row class="!tw-mt-20">
      <v-col cols="12"
        sm="6">
        <h1 class="tw-text-[#2A4986] tw-text-[40px] tw-font-bold">Projetos que transformam</h1>
        <p class="tw-mt-4 tw-text-[#6C6C6D] tw-text-xl tw-max-w-[750px] tw-mx-auto">Soluções pedagógicas com
          <b>propósito claro e resultados reais</b> na aprendizagem.</p>
        <div class="tw-mt-4 tw-bg-[#2A4986] tw-w-6 tw-h-[2px] tw-rounded-full"></div>
        <p class="tw-mt-4 tw-text-[#6C6C6D] tw-text-xl tw-max-w-[750px] tw-mx-auto">Personalizamos cada projeto de
          acordo com as necessidades e objetivos da sua escola, promovendo uma formação completa e significativa.</p>
        <v-btn class="tw-mt-8 !tw-normal-case tw-text-black !tw-font-bold"
          rounded
          color="#F8AF3E">Catálogo EDDAS</v-btn>
      </v-col>
      <v-col cols="12"
        sm="6">
        <v-img src="~/assets/images/sala-aula.png"
          width="100%"></v-img>
      </v-col>
    </v-row>

    <v-row class="!tw-mt-20">
      <v-col cols="12">
        <h1 class="tw-text-[#2A4986] tw-text-[40px] tw-text-center tw-font-bold">Formação cidadã e ativa</h1>
        <p class="tw-mt-4 tw-text-[#6C6C6D] tw-text-xl tw-max-w-[750px] tw-mx-auto">Oferecemos projetos educacionais que
          desenvolvem competências essenciais, promovem inclusão e <b>fortalecem o protagonismo dos alunos na
            sociedade.</b></p>
      </v-col>
      <v-col cols="12"
        sm="6"
        md="4"
        v-for="(tema, index) in temasEducacionais"
        :key="index">
        <div
          class="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-flex-col tw-text-center cards-shadow tw-rounded-md tw-p-6 ">
          <v-img width="140"
            max-height="140"
            :src="tema.imagem"></v-img>
          <div class="tw-flex tw-flex-col tw-justify-between tw-h-full tw-items-center">
            <div class="tw-flex tw-flex-col tw-justify-start">
              <h3 class="tw-font-bold tw-text-lg">{{ tema.titulo }}</h3>
              <p class="tw-text-[#6C6C6D] tw-mt-2 tw-mb-4">{{ tema.descricao }}</p>
            </div>
            <v-btn class="!tw-normal-case tw-text-black !tw-font-bold"
              rounded
              color="#F8AF3E">Conhecer</v-btn>
          </div>
        </div>
      </v-col>
    </v-row>

    <v-row class="!tw-mt-20">
      <v-col cols="12">
        <h1 class="tw-text-[#2A4986] tw-text-[40px] tw-text-center tw-font-bold"> Compromisso comprovado em números</h1>
        <p class="tw-mt-4 tw-mb-8 tw-text-[#6C6C6D] tw-text-xl tw-max-w-[750px] tw-mx-auto tw-text-center">A atuação da
          <b>EDDAS Brasil</b> é marcada por resultados reais, alcançados por meio de projetos consistentes e
          personalizados.</p>
      </v-col>
      <v-col cols="12"
        sm="6"
        md="3"
        v-for="(compromisso, index) in compromissos"
        :key="index">
        <div
          class="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-flex-col tw-text-center tw-shadow tw-rounded-t-md tw-p-6 tw-border-solid tw-border-b-[2px] tw-border-[1px] tw-border-b-[#364F92] tw-border-[#E2E8F0]">
          <p class="tw-text-4xl tw-text-[#364F92] tw-font-bold">{{ compromisso.numeros }}</p>
          <p v-html="compromisso.descricao"
            class="tw-text-[#4A5568]"></p>
        </div>
      </v-col>
    </v-row>

    <v-row class="!tw-mt-20">
      <v-col cols="12" id="blog">
        <h1 class="tw-text-[#2A4986] tw-text-[40px] tw-text-center tw-font-bold">Blog EDDAS – Educação em Movimento</h1>
        <p class="tw-mt-4 tw-mb-8 tw-text-[#6C6C6D] tw-text-xl tw-max-w-[750px] tw-mx-auto tw-text-center">Acompanhe
          nossos artigos sobre temas atuais da educação, experiências em sala de aula, projetos desenvolvidos com
          escolas e ideias para fortalecer uma formação cidadã.</p>
      </v-col>
      <v-col cols="12"
        sm="6"
        md="4"
        v-for="(post, index) in blogPosts"
        :key="index">
        <div
          class="tw-w-full tw-h-full tw-flex tw-items-center tw-justify-center tw-flex-col cards-shadow tw-rounded-xl tw-p-2">
          <v-img :src="post.imagem"
            width="100%"></v-img>
          <div class="tw-mx-2">
            <p class="tw-text-lg tw-font-bold">{{ post.titulo }}</p>
            <p class="tw-text-[#6C6C6D]">{{ post.descricao }}</p>
            <div class="tw-flex tw-items-center tw-justify-between">
              <p class="tw-mt-4 tw-text-[#6C6C6D] tw-font-light">{{ post.data }}</p>
              <v-btn class="!tw-normal-case tw-text-black !tw-font-bold"
                rounded
                color="#F8AF3E"
                size="small">Ler mais</v-btn>
            </div>
          </div>
        </div>
      </v-col>
      <v-col cols="12"
        class="tw-flex tw-justify-end">
        <v-btn class="!tw-ml-auto !tw-normal-case tw-text-black !tw-font-bold"
          rounded
          variant="text">Ver todos <img src="~/assets/images/ArrowRight.svg"
            class="tw-w-4 tw-mt-[2px]"></v-btn>
      </v-col>
    </v-row>

    <v-row class="!tw-mt-20">
      <v-col cols="12">
        <h1 class="tw-text-[#2A4986] tw-text-[40px] tw-text-center tw-font-bold">Transforme a educação com a gente</h1>
        <p class="tw-mt-4 tw-mb-8 tw-text-[#6C6C6D] tw-text-xl tw-max-w-[750px] tw-mx-auto tw-text-center">Cadastre-se e
          receba <b>conteúdos, novidades e práticas inspiradoras</b> da EDDAS.</p>
      </v-col>
      <v-col
        id="contato"
        cols="12"
        sm="8"
        offset-sm="2"
        md="6"
        offset-md="3">
        <v-text-field placeholder="Seu e-mail"
          variant="outlined"
          rounded=""
          class="!tw-p-0 !tw-rounded-full text-field-inscrever">
          <template #append-inner><v-btn
              class="!tw-normal-case tw-text-black !tw-font-bold !tw-h-full tw-relative !tw--right-3 tw-z-10 !tw-px-8 !tw-rounded-full"
              rounded
              color="#F8AF3E">Inscrever-se</v-btn></template>
        </v-text-field>
      </v-col>
    </v-row>
  </v-container>
</template>
<script setup>
  import Punho from "~/assets/images/punho.svg"
  import Alvo from "~/assets/images/alvo.svg"
  import aviaoPapel from "~/assets/images/aviao-papel.svg"
  import Books from "~/assets/images/Books.svg";
  import BooksOpenText from "~/assets/images/BookOpenText.svg";
  import Desktop from "~/assets/images/Desktop.svg";
  import RocketLaunch from "~/assets/images/RocketLaunch.svg";
  import Foto1 from "~/assets/images/formacao/foto-1.png";
  import Foto2 from "~/assets/images/formacao/foto-2.png";
  import Foto3 from "~/assets/images/formacao/foto-3.png";
  import Foto4 from "~/assets/images/formacao/foto-4.png";
  import Foto5 from "~/assets/images/formacao/foto-5.png";
  import Foto6 from "~/assets/images/formacao/foto-6.png";
  import Foto7 from "~/assets/images/formacao/foto-7.png";
  import Foto8 from "~/assets/images/formacao/foto-8.png";
  import Blog1 from "~/assets/images/blog-1.png";
  import Blog2 from "~/assets/images/blog-2.png";
  import Blog3 from "~/assets/images/blog-3.png";

  const valores = [
    {
      icone: aviaoPapel,
      titulo: 'Impacto real',
      descricao: 'Soluções que fazem a diferença no dia a dia escolar.',
      height: 30
    },
    {
      icone: Punho,
      titulo: 'Parcerias humanizadas',
      descricao: 'Relacionamento próximo com cada escola e equipe.',
    },
    {
      icone: Alvo,
      titulo: 'Educação com propósito',
      descricao:
        'Foco no futuro dos estudantes e no desenvolvimento social.',
    },
  ];
  const recursos = [
    {
      icone: Books,
      titulo: 'Livros didáticos',
      descricao:
        'Propostas alinhadas à BNCC e adaptadas às necessidades de cada escola, com foco em qualidade e contextualização.',
    },
    {
      icone: BooksOpenText,
      titulo: 'Plataforma digital',
      descricao:
        'Ambiente virtual com recursos multimídia, atividades interativas e suporte pedagógico para alunos, professores e gestores.',
    },
    {
      icone: Desktop,
      titulo: 'Biblioteca literária',
      descricao:
        'Acervo cuidadosamente selecionado para estimular a leitura, o pensamento crítico e o diálogo cultural entre os estudantes.',
    },
    {
      icone: RocketLaunch,
      titulo: 'Formação continuada',
      descricao:
        'Capacitações presenciais e online para educadores, com foco em práticas pedagógicas eficazes e desenvolvimento profissional contínuo.',
    },
  ];
  const temasEducacionais = [
    {
      imagem: Foto1,
      titulo: 'Educação Antirracista',
      descricao: 'Valorização da história e da cultura afro-brasileira, promovendo respeito à diversidade.',
    },
    {
      imagem: Foto2,
      titulo: 'Educação Ambiental',
      descricao: 'Conscientização sobre o consumo responsável e cuidado com o meio ambiente.',
    },
    {
      imagem: Foto3,
      titulo: 'Reposição de Aprendizagem',
      descricao: 'Identificação e superação de lacunas no conhecimento dos estudantes.',
    },
    {
      imagem: Foto4,
      titulo: 'Educação Financeira',
      descricao: 'Ensino de habilidades para lidar com dinheiro de maneira consciente, responsável e estratégica.',
    },
    {
      imagem: Foto5,
      titulo: 'Educação Inclusiva',
      descricao: 'Promoção de um ambiente acolhedor e acessível para todos os alunos.',
    },
    {
      imagem: Foto6,
      titulo: 'Educação Socioemocional',
      descricao: 'Desenvolvimento de empatia, autoconhecimento e gestão de emoções.',
    },
    {
      imagem: Foto7,
      titulo: 'Preparatório para o Enem',
      descricao: 'Revisão de conteúdos e estratégias focadas na prova do ENEM.',
    },
    {
      imagem: Foto8,
      titulo: 'Jovens e Adultos',
      descricao: 'Oportunidade de escolarização para quem não teve acesso à educação básica na idade ideal.',
    },
  ];
  const compromissos = [
    {
      numeros: 10,
      descricao: 'Municípios <br> atendidos'
    },
    {
      numeros: 10,
      descricao: 'projetos educacionais implementados'
    },
    {
      numeros: 10,
      descricao: 'alunos impactados diretamente'
    },
    {
      numeros: 10,
      descricao: 'educadores formados e acompanhados'
    },
  ];
  const blogPosts = [
    {
      imagem: Blog1,
      titulo: 'Educação Antirracista na Prática Escolar',
      descricao: 'A educação antirracista vai além de conteúdos pontuais: ela deve estar presente nas escolhas pedagógicas...',
      data: '21/08/2025',
    },
    {
      imagem: Blog2,
      titulo: 'Como Engajar Educadores em Temas de Diversidade',
      descricao: 'Formar educadores conscientes e engajados com os temas da diversidade exige escuta, formação...',
      data: '21/08/2025',
    },
    {
      imagem: Blog3,
      titulo: 'Plataformas Digitais a Serviço da Inclusão',
      descricao: 'Formar educadores conscientes e engajados com os temas da diversidade exige escuta, formação...',
      data: '21/08/2025',
    },
  ]
</script>
<style scoped>
.container-secao-um {
  background: url('~/assets/images/fundo-mobile.png') no-repeat right top;
  background-size: cover;
}
@media (min-width: 962px) {
  .container-secao-um {
    background-image: url('~/assets/images/background-top.png');
  }
}

.cards-shadow {
  box-shadow: 10px 4px 40px rgba(0, 0, 0, 0.1);
}

.text-field-inscrever :deep(.v-field) {
  border-radius: 100px;
}
</style>