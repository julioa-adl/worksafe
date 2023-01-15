import capa_manutencao from '../images/img-services-details/manutencao/capa.png';
import capa_bombeiro from '../images/img-services-details/bombeiro/capa.png';
import capa_resgate from '../images/img-services-details/resgate/capa.png';
import capa_arboricultura from '../images/img-services-details/arboricultura/capa.png';
import capa_treinamento from '../images/img-services-details/treinamentos/capa.png';

import { FaCog } from "react-icons/fa";
import { FaFireExtinguisher } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaTree } from "react-icons/fa";
import { FaHardHat } from "react-icons/fa";

export const img_manutencao = require.context('../images/img-services-details/manutencao/fotos', true, /\.(png|jpg|jpeg|gif|svg)$/);


export const servicesDetails = [
  {
    id: 0,
    pathName: 'manutencao',
    service: 'Manutenção',
    icon: <FaCog/>,
    cover: capa_manutencao,
    title: 'Equipes especializadas para Serviços de Risco.',
    text: 'Realizamos serviços de Manutenção Predial Industrial para altura e espaços confinados, também como serviços de Alpinismo Industrial e manutenção preventiva. Oferecemos serviços de manutenção e reparação em estruturas e equipamentos em altura ou em espaços confinados. Esses serviços incluem:',
    listServ: ['Limpeza de calhas, rufos e dutos: remoção de sujeira, folhas e outros detritos que podem causar obstruções e danos à estrutura.', 'Inspeção de telhados: verificação de vazamentos, danos e desgaste para identificar problemas potenciais antes que eles causem danos significativos.', 'Reparos de telhados: reparação de danos causados por ventos fortes, chuvas intensas e outros fatores climáticos.', 'Instalação e manutenção de sistemas de ancoragem: instalação de sistemas de ancoragem para garantir a segurança dos trabalhadores em altura.', 'Montagem e manutenção de andaimes: montagem e manutenção de andaimes para permitir o acesso seguro a áreas de trabalho em altura.', 'Instalação e manutenção de sistemas de proteção contra quedas: instalação e manutenção de sistemas de proteção contra quedas, como cintos de segurança e linhas de vida, para garantir a segurança dos trabalhadores em altura.'],
    images: img_manutencao.keys(),
  },
  {
    id: 1,
    pathName: 'brigada',
    service: 'Brigada',
    icon: <FaFireExtinguisher/>,
    cover: capa_bombeiro,
    title: 'Brigada de Emergência e Gestão de Riscos.',
    text: 'Realizamos serviços de Manutenção Predial Industrial para altura e espaços confinados, também como serviços de Alpinismo Industrial e manutenção preventiva. Oferecemos serviços de manutenção e reparação em estruturas e equipamentos em altura ou em espaços confinados. Esses serviços incluem:',
    listServ: ['Limpeza de calhas, rufos e dutos: remoção de sujeira, folhas e outros detritos que podem causar obstruções e danos à estrutura.', 'Inspeção de telhados: verificação de vazamentos, danos e desgaste para identificar problemas potenciais antes que eles causem danos significativos.', 'Reparos de telhados: reparação de danos causados por ventos fortes, chuvas intensas e outros fatores climáticos.', 'Instalação e manutenção de sistemas de ancoragem: instalação de sistemas de ancoragem para garantir a segurança dos trabalhadores em altura.', 'Montagem e manutenção de andaimes: montagem e manutenção de andaimes para permitir o acesso seguro a áreas de trabalho em altura.', 'Instalação e manutenção de sistemas de proteção contra quedas: instalação e manutenção de sistemas de proteção contra quedas, como cintos de segurança e linhas de vida, para garantir a segurança dos trabalhadores em altura.'],
    images: img_manutencao.keys(),
  },
  {
    id: 2,
    pathName: 'resgate',
    service: 'Resgate',
    icon: <FaHandHoldingMedical/>,
    cover: capa_resgate,
    title: 'Resgatista de Plantão para Serviços de Risco',
    text: 'Realizamos serviços de Manutenção Predial Industrial para altura e espaços confinados, também como serviços de Alpinismo Industrial e manutenção preventiva. Oferecemos serviços de manutenção e reparação em estruturas e equipamentos em altura ou em espaços confinados. Esses serviços incluem:',
    listServ: ['Limpeza de calhas, rufos e dutos: remoção de sujeira, folhas e outros detritos que podem causar obstruções e danos à estrutura.', 'Inspeção de telhados: verificação de vazamentos, danos e desgaste para identificar problemas potenciais antes que eles causem danos significativos.', 'Reparos de telhados: reparação de danos causados por ventos fortes, chuvas intensas e outros fatores climáticos.', 'Instalação e manutenção de sistemas de ancoragem: instalação de sistemas de ancoragem para garantir a segurança dos trabalhadores em altura.', 'Montagem e manutenção de andaimes: montagem e manutenção de andaimes para permitir o acesso seguro a áreas de trabalho em altura.', 'Instalação e manutenção de sistemas de proteção contra quedas: instalação e manutenção de sistemas de proteção contra quedas, como cintos de segurança e linhas de vida, para garantir a segurança dos trabalhadores em altura.'],
    images: img_manutencao.keys(),
  },
  {
    id: 3,
    pathName: 'arboricultura',
    service: 'Arboricultura',
    icon: <FaTree/>,
    cover: capa_arboricultura,
    title: 'Mão de obra qualificada para Poda Especializada.',
    text: 'Realizamos serviços de Manutenção Predial Industrial para altura e espaços confinados, também como serviços de Alpinismo Industrial e manutenção preventiva. Oferecemos serviços de manutenção e reparação em estruturas e equipamentos em altura ou em espaços confinados. Esses serviços incluem:',
    listServ: ['Limpeza de calhas, rufos e dutos: remoção de sujeira, folhas e outros detritos que podem causar obstruções e danos à estrutura.', 'Inspeção de telhados: verificação de vazamentos, danos e desgaste para identificar problemas potenciais antes que eles causem danos significativos.', 'Reparos de telhados: reparação de danos causados por ventos fortes, chuvas intensas e outros fatores climáticos.', 'Instalação e manutenção de sistemas de ancoragem: instalação de sistemas de ancoragem para garantir a segurança dos trabalhadores em altura.', 'Montagem e manutenção de andaimes: montagem e manutenção de andaimes para permitir o acesso seguro a áreas de trabalho em altura.', 'Instalação e manutenção de sistemas de proteção contra quedas: instalação e manutenção de sistemas de proteção contra quedas, como cintos de segurança e linhas de vida, para garantir a segurança dos trabalhadores em altura.'],
    images: img_manutencao.keys(),
  },
  {
    id: 4,
    pathName: 'treinamentos',
    service: 'Treinamentos',
    icon: <FaHardHat/>,
    cover: capa_treinamento,
    title: 'Treinamentos para Atividades em Altura e Espaços Confinados.',
    text: 'Realizamos serviços de Manutenção Predial Industrial para altura e espaços confinados, também como serviços de Alpinismo Industrial e manutenção preventiva. Oferecemos serviços de manutenção e reparação em estruturas e equipamentos em altura ou em espaços confinados. Esses serviços incluem:',
    listServ: ['Limpeza de calhas, rufos e dutos: remoção de sujeira, folhas e outros detritos que podem causar obstruções e danos à estrutura.', 'Inspeção de telhados: verificação de vazamentos, danos e desgaste para identificar problemas potenciais antes que eles causem danos significativos.', 'Reparos de telhados: reparação de danos causados por ventos fortes, chuvas intensas e outros fatores climáticos.', 'Instalação e manutenção de sistemas de ancoragem: instalação de sistemas de ancoragem para garantir a segurança dos trabalhadores em altura.', 'Montagem e manutenção de andaimes: montagem e manutenção de andaimes para permitir o acesso seguro a áreas de trabalho em altura.', 'Instalação e manutenção de sistemas de proteção contra quedas: instalação e manutenção de sistemas de proteção contra quedas, como cintos de segurança e linhas de vida, para garantir a segurança dos trabalhadores em altura.'],
    images: img_manutencao.keys(),
  },
];
