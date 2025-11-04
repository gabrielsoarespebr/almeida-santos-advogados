export const authorList: Author[] = [
  {
    name: 'Obd-Edon',
    descriptionHtml:
      '<p>Advogado Especialista em Concurso Público, com mais de 5 anos de experiência e mais de 2.500 clientes atendidos em todo o Brasil.</p><p>Pós-graduado em Direito e Processo Civil pela Escola Superior de Advocacia de Pernambuco (ESA/PE) e em Direito Público pela Faculdade Maurício de Nassau.</p><p>Autor de artigos jurídicos e atuante na defesa dos direitos de candidatos em concursos públicos.</p>',
    imageUrl: '../../../assets/images/blogAuthorObdEdon.png',
  },
  {
    name: 'Outro',
    descriptionHtml: '<p>Autor de artigos jurídicos.</p>',
    imageUrl: '../../../assets/images/avatar.jpg',
  },
];

export type Author = {
  name: string;
  descriptionHtml: string;
  imageUrl: string;
};
