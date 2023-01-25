import capa_manutencao from '../images/img-services-details/manutencao/capa.webp';
import capa_bombeiro from '../images/img-services-details/bombeiro/capa.webp';
import capa_resgate from '../images/img-services-details/resgate/capa.webp';
import capa_arboricultura from '../images/img-services-details/arboricultura/capa.webp';
import capa_treinamento from '../images/img-services-details/treinamentos/capa.webp';
import capa_alpinismo from '../images/img-services-details/alpinismo/capa.webp';

import { FaCog } from "react-icons/fa";
import { FaFireExtinguisher } from "react-icons/fa";
import { FaHandHoldingMedical } from "react-icons/fa";
import { FaTree } from "react-icons/fa";
import { FaHardHat } from "react-icons/fa";
import { GiMountainClimbing } from "react-icons/gi";

const img_manutencao = require.context('../images/img-services-details/manutencao/fotos', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const img_brigada = require.context('../images/img-services-details/bombeiro/fotos', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const img_resgate = require.context('../images/img-services-details/resgate/fotos', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const img_arboricultura = require.context('../images/img-services-details/arboricultura/fotos', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const img_treinamentos = require.context('../images/img-services-details/treinamentos/fotos', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);
const img_alpinismo = require.context('../images/img-services-details/alpinismo/fotos', true, /\.(png|jpg|jpeg|gif|svg|webp)$/);


const servicesDetails = [
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
    descriptImg: img_manutencao,
  },
  {
    id: 1,
    pathName: 'brigada',
    service: 'Brigada',
    icon: <FaFireExtinguisher/>,
    cover: capa_bombeiro,
    title: 'Brigada de Emergência e Gestão de Riscos.',
    text: 'A Brigada de Emergência é uma equipe de trabalhadores treinados para lidar com situações de emergência e garantir a segurança dos funcionários e do local de trabalho. Também oferecemos a terceirização de Bombeiro Civil para gestão completa de segurança de planta da fábrica. Nossos serviços incluem:',
    listServ: ['Inspeção dos Equipamentos de Proteção Coletiva', 'Inspeção da gestão e equipamentos de Proteção Contra Incêndios', 'Relatórios periódicos das Inspeções e reuniões semanais para planejamento de adequações', 'Treinamento: oferecemos treinamento para os membros da brigada de emergência para que eles estejam preparados para lidar com situações de emergência, como incêndios, vazamentos de produtos químicos, acidentes com máquinas e evacuações.', 'Plano de Emergência: elaboramos planos de emergência para garantir que a equipe esteja preparada para lidar com situações de emergência e que os procedimentos sejam seguidos.', 'Simulações de emergência: realizamos simulações de emergência para testar a eficácia dos planos e equipamentos e garantir que a equipe esteja preparada para lidar com situações reais.', 'Acompanhamento e avaliação: acompanhamos e avaliamos regularmente a equipe e o plano de emergência para garantir que estejam sempre atualizados e eficazes.', 'Atendimento a emergências: a equipe esta preparada para atender e lidar com emergências que possam ocorrer no local de trabalho, garantindo a segurança dos envolvidos e minimizando danos.'],
    images: img_brigada.keys(),
    descriptImg: img_brigada,
  },
  {
    id: 2,
    pathName: 'resgate',
    service: 'Resgate',
    icon: <FaHandHoldingMedical/>,
    cover: capa_resgate,
    title: 'Resgatista de Plantão para Serviços de Risco',
    text: 'Nosso setor de resgate para altura, espaços confinados e acompanhamento de serviços de riscos oferece uma variedade de serviços para garantir a segurança e a saúde dos trabalhadores em situações de risco. Os serviços incluem:',
    listServ: ['Resgatista de Plantão para Atividades de Risco', 'Resgatista completo com Kit Resgate para Altura', 'Resgatista completo com Kit Resgate para Espaços Confinados', 'Consultoria para Serviços de Risco'],
    images: img_resgate.keys(),
    descriptImg: img_resgate,
  },
  {
    id: 3,
    pathName: 'arboricultura',
    service: 'Arboricultura',
    icon: <FaTree/>,
    cover: capa_arboricultura,
    title: 'Mão de obra qualificada para Poda Especializada.',
    text: 'Nosso setor de arboricultura oferece uma variedade de serviços para manter a saúde e a segurança de árvores em propriedades comerciais e residenciais. Os serviços incluem:',
    listServ: ['Poda de árvores: podamos as árvores para remover galhos secos, danificados ou mal posicionados para promover a saúde e a segurança da árvore.', 'Abate de árvores: removemos árvores que ameaçam a segurança das pessoas ou das propriedades.', 'Estudos de perigo: realizamos estudos de perigo para identificar quaisquer ameaças potenciais à segurança das árvores e propriedades.', 'Cabling e fixação: usamos cabos e fixações para fortalecer árvores fracas ou com risco de queda.'],
    images: img_arboricultura.keys(),
    descriptImg: img_arboricultura,
  },
  {
    id: 4,
    pathName: 'treinamentos',
    service: 'Treinamentos',
    icon: <FaHardHat/>,
    cover: capa_treinamento,
    title: 'Treinamentos para Atividades em Altura e Espaços Confinados.',
    text: 'Nossa empresa oferece treinamentos de segurança do trabalho para garantir a saúde e a segurança de nossos funcionários e clientes. Possúimos um Centro de Treinamento Próprio equipado para abrangir todas as técnicas e instruções de segurança necessárias as atividades na indústria, equipamentos e estrutura moderna onde você poderá vivenciar todo o conhecimento que adquirimos ao estar diáriamente trabalhando em ambientes de risco, com zer oacidentes em nosso histórico impecável! Nossos treinamentos abrangem uma variedade de tópicos, incluindo prevenção de acidentes, primeiros socorros, procedimentos de emergência, uso de equipamentos de proteção individual e conformidade com regulamentos e normas de segurança. Além disso, oferecemos treinamentos personalizados de acordo com as necessidades específicas de nossos clientes. Todos os nossos treinamentos são ministrados por instrutores qualificados e experientes, e incluem avaliações para garantir a compreensão e aplicação dos conceitos ensinados.',
    listServ: ['CT Próprio Localizado as margens da BR101 no Cabo de ST Agostinho', 'Trabalho em Altura NR-35', 'Trabalhador em Espaços Confinados NR-33', 'Supervisor em Altura NR-35', 'Supervisor para trabalhos em Espaços Confinados NR-33', 'Resgate Técnico Industrial RTI', 'Instalador Qualificado para Linha de Vida Temporária', 'Atendimento Pré-Hospitalar APH', 'Formação de Brigada de Emergência', 'Treinamentos Personalizados para Suas Necessidades'],
    images: img_treinamentos.keys(),
    descriptImg: img_treinamentos,
  },
  {
    id: 5,
    pathName: 'alpinismo-industrial',
    service: 'Alpinismo Industrial',
    icon: <GiMountainClimbing/>,
    cover: capa_alpinismo,
    title: 'Com nossa equipe de Apinismo Industrial chegamos onde Você Precisa!',
    text: 'Alpinismo industrial é uma técnica utilizada para realizar trabalhos em altura em estruturas industriais, como prédios, torres, ponte e chimneys. Nossa equipe altamente treinada e experiente oferece serviços de alta qualidade e segurança para garantir que o trabalho seja realizado de maneira eficiente e segura. Nós garantimos que todos os nossos trabalhos serão realizados de acordo com as normas e regulamentos de segurança aplicáveis. Entre em contato conosco hoje para saber mais sobre como podemos ajudá-lo com suas necessidades de alpinismo industrial.',
    listServ: ["Limpeza de fachadas e janelas", "Instalação e manutenção de antenas e equipamentos de telecomunicações",    "Manutenção de estruturas de aço e concreto",    "Reparos e pintura",    "Instalação e manutenção de sistemas de iluminação",    "Inspeções e relatórios de segurança",    "Resgate e salvamento em altura"],
    images: img_alpinismo.keys(),
    descriptImg: img_alpinismo,
  },
];

export default servicesDetails;
