import manutencao from '../images/img-services/3.webp'
import bombeiro from '../images/img-services/1.webp'
import difAcesso from '../images/img-services/2.webp'
import terceirizacao from '../images/img-services/4.webp'
import treinamento from '../images/img-services/5.webp'

import { VscTools } from "react-icons/vsc";
import { MdOutlineEmergency } from "react-icons/md";
import { GiMountainClimbing } from "react-icons/gi";
import { HiOutlineUserGroup } from "react-icons/hi2";
import { GiTeacher } from "react-icons/gi";

const services = [
  {
    id: 0,
    icon: <VscTools className="icon_serv"/>,
    service: 'Manutenção',
    title: 'Equipes especializadas para atendimentos 24h',
    text: 'Realizamos processos de manutenção industrial que inclui: Manutenção, instalação, substituições, impermeabilização de telhados de diversos tipos e seus componentes.',
    image: manutencao,
    listServ: ['Manutenção em Altura e Espaços Confinados', 'Limpeza de Telhados, Calhas e Componentes', 'Limpeza e Higienização de Reservatórios e Silos', 'Pintura e recuperação de Fachadas e Componentes', 'Arboricultura, poda de árvores e capinação'],
  },
  {
    id: 1,
    icon: <MdOutlineEmergency className="icon_serv"/>,
    service: 'Bombeiro',
    title: 'Profissionais para Emergência',
    text: 'Atuar como parceiro de forma responsável na prevenção de acidentes com participação contínua na segurança do trabalho. Nosso profissional trabalha nas mais diversas atividades (de campo a administrativo): Resgatista para a Planta (Atividades em Altura e Espaços Confinados); Acompanhar/ Inspecionar Atividades de Risco; Inspeção de Equipamentos de Proteção Contra Quedas; Emissão e Revisão de Check-lists; Treinamentos Brigada (Primeiros Socorros/ Combate a Incêndios); Realizar Simulados de Emergência; Prestar Primeiros Socorros; Montagem de Linha de Vida Temporária.',
    image: bombeiro,
    listServ: [],
  },
  {
    id: 2,
    icon: <GiMountainClimbing className="icon_serv"/>,
    service: 'Difícil Acesso',
    title: 'Chegamos onde você precisa!',
    text: 'As áreas onde não é possível montar andaimes, onde os riscos envolvidos são grandes, são nossa especialidade. Trabalhamos de forma contínua na qualificação de nossos profissionais. Temos equipes qualificadas para Acesso por Corda e até conquista de vias de acesso de acordo com a necessidade do cliente.',
    image: difAcesso,
    listServ: ['Acesso por Corda', 'Alpinismo Industrial', 'Conquista de Vias', 'Serviços de Plano Inclinado', 'Acessos Limitados', 'Atividades em Espaços Confinados', 'Áreas de Risco'],
  },
  {
    id: 3,
    icon: <HiOutlineUserGroup className="icon_serv"/>,
    service: 'Terceirização',
    title: 'A mão-de-obra certa para a sua Empresa',
    text: 'Terceirização de Mão de Obra especializada para os mais diversos setores de manutenção, resgate à segurança do trabalho. trabalhamos de forma preventiva ou corretiva atuando em contrados fixos ou esporádicos para atividades de: Impermeabilização de Telhados, estruturas prediais e Componentes; Troca, instalações ou Correções manutentivas de peças e equipamentos em locais de difícil acesso; Bombeiro e Resgatista para acompanhamento de obras de risco e/ou inspeções diárias periódicas de equipamentos ou atividades que envolvam segurança do trabalho.',
    image: terceirizacao,
    listServ: ['Equipe fixa de manutenção predial', ' Resgate de Prontidão e Salvamento', 'Bombeiro Civil', 'Técnica de segurança do trabalho', 'Supervisão de atividades de risco'],
  },
  {
    id: 4,
    icon: <GiTeacher className="icon_serv"/>,
    service: 'Treinamentos',
    title: 'Capacite sua equipe com quem vive a segurança',
    text: 'A Work Safe Brasil, dispõe de um centro de treinamento com uma das mais modernas estruturas de capacitação profissional na área de segurança, emergência e Resgate técnico. Nossos Cursos: NR35 - Supervisor e trabalhador; NR33 - Supervisor, Trabalhador e Vigia; Reciclagem de Brigada de Emergência; RTI - Resgate Técnico Industrial; APH - Atendimento Pré-Hospitalar; Içamento de Cargas.',
    image: treinamento,
    listServ: ['NR35 Trabalho em Altura - 08H', 'NR35 Supervisor de Trabalho em Altura - 40H', 'NR33 Trabalhador Autorizado e Vigia - 16H ', 'NR33 Supervisor de Entrada em Espaços Confinados - 40H'],
  },
];

export default services;
