'use strict';
// Identidade da loja. Para replicar o site para outra loja, troque este arquivo e as logos em public/img/.
module.exports = {
  name: 'Bahia Autos',
  slogan: 'A Certeza de um Bom Negócio!',
  slug: 'bahia-autos',
  tagline: 'Seminovos selecionados',
  heroTitle: 'O seu próximo carro<br><em>está aqui.</em>',
  about: 'A Bahia Autos trabalha com seminovos selecionados, com procedência garantida, financiamento facilitado e avaliação justa do seu usado na troca. A certeza de um bom negócio!',
  email: '',
  // Cores do site (preto e branco da logo, com vermelho de destaque)
  colors: {
    dark: '#111111',      // títulos, cabeçalhos escuros
    primary: '#262626',   // botões principais, barras
    primary2: '#3a3a3a',
    accent: '#d62828',    // destaque (botões de ação, selos)
    accent2: '#b01f1f',
    accentSoft: '#ff9d9d',
    accentBright: '#ff4d4d',
    hero1: '#050505', hero2: '#1a1a1a', hero3: '#2a2a2a', heroGlow: '#3d3d3d',
    footer: '#0a0a0a',
    onDarkMuted: '#cfcfcf'
  },
  // Lojas iniciais (podem ser editadas, adicionadas ou removidas no painel)
  units: [
    { name: 'Bahia Autos', address: 'BR-230, sentido Cabedelo', neighborhood: '', city: 'João Pessoa - PB', phone: '(83) 98201-1688', whatsapp: '5583982011688', hours_json: [...Array(5)].map(() => ({ open: '08:00', close: '18:00' })).concat([{ open: '08:00', close: '12:00' }, null]) }
  ]
};
