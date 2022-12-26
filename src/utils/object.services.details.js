import ManutencaoCapa from '../images/img-services-details/manutencao/manutencao-capa.png';





import { VscTools } from "react-icons/vsc";
import { MdOutlineEmergency } from "react-icons/md";
import { GiMountainClimbing } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GiTeacher } from "react-icons/gi";

const servicesDetails = [
  {
    id: 0,
    icon: <VscTools className="icon_serv"/>,
    service: 'Manutenção',
    title: 'Equipes especializadas para atendimentos 24h',
    text: 'Realizamos processos de manutenção industrial que inclui: Manutenção, instalação, substituições, impermeabilização de telhados de diversos tipos e seus componentes.',
    image: manutencao,
    listServ: ['Manutenção em Altura e Espaços Confinados', 'Limpeza de Telhados, Calhas e Componentes', 'Limpeza e Higienização de Reservatórios e Silos', 'Pintura e recuperação de Fachadas e Componentes', 'Arboricultura, poda de árvores e capinação'],
  },
  
];

export default servicesDetails;
