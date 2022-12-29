import ManutencaoCapa from '../images/img-services-details/manutencao/manutencao-capa.png';

const imageList = ['1', '2', '3', '4', '5', '6', '7', '8', '9', '10'];

const getImagePath = (image) => {
  return `../images/img-services-details/manutencao/${image}.png`
}

const servicesDetails = [
  {
    id: 0,
    icon: <VscTools className="icon_serv"/>,
    service: 'Manutenção',
    title: 'Equipes especializadas para atendimentos 24h',
    text: 'Realizamos processos de manutenção industrial que inclui: Manutenção, instalação, substituições, impermeabilização de telhados de diversos tipos e seus componentes.',
    images: [
      
    ],
    listServ: ['Manutenção em Altura e Espaços Confinados', 'Limpeza de Telhados, Calhas e Componentes', 'Limpeza e Higienização de Reservatórios e Silos', 'Pintura e recuperação de Fachadas e Componentes', 'Arboricultura, poda de árvores e capinação'],
  },
  
];

export default servicesDetails;
