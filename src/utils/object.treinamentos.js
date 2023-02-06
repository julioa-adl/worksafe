import { GrUserWorker } from "react-icons/gr";
import { GrCompliance } from "react-icons/gr";
import { GrValidate } from "react-icons/gr";

const trabalhador = <GrUserWorker className="icon-category-course"/>
const supervisor = <GrCompliance className="icon-category-course"/>
const reciclagem = <GrValidate className="icon-category-course"/>

const courses = [
  {
    id: 0,
    icon: trabalhador,
    course: 'NR 35 - Trabalho em Altura',
    category: 'Trabalhador',
    descricao: 'Curso destinado a profissionais que precisam trabalhar em altura. Aborda legislação de segurança, técnicas e equipamentos necessários. Oferece treinamento prático para aplicação das técnicas aprendidas. ',
    horas: '08 horas',
    valor: 'R$ 150,00'
  },
  {
    id: 1,
    icon: supervisor,
    course: 'NR 35 - Trabalho em Altura',
    category: 'Liberador',
    descricao: 'Curso que ensina sobre legislação e requisitos de segurança para trabalhos em altura. Técnicas e equipamentos para realizar atividades com segurança. Capacita o aluno a liberar trabalhos em altura de forma consciente. ',
    horas: '08 horas',
    valor: 'R$ 300,00'
  },
  {
    id: 2,
    icon: supervisor,
    course: 'NR 35 - Trabalho em Altura',
    category: 'Supervisor',
    descricao: 'Curso de 40 horas para aqueles que desejam liderar equipes de trabalho em altura. Aborda legislação, requisitos de segurança, técnicas para garantir segurança dos trabalhadores. Ensina habilidades para gerenciar equipes de forma eficiente.',
    horas: '40 horas',
    valor: 'R$ 500,00'
  },
  {
    id: 3,
    icon: trabalhador,
    course: 'NR 33 - Trabalho em Espaços Confinados',
    category: 'Trabalhador e Vigia',
    descricao: 'Curso sobre legislação e requisitos de segurança para espaços confinados. Ensina técnicas e equipamentos necessários para realizar atividades com segurança. Oferece treinamento prático para aplicação das técnicas aprendidas.',
    horas: '16 horas',
    valor: 'R$ 300,00'
  },
  {
    id: 4,
    icon: supervisor,
    course: 'NR 33 - Trabalho em Espaços Confinados',
    category: 'Supervisor',
    descricao: 'Curso para liderar equipes de trabalho em espaços confinados. Aborda legislação, requisitos de segurança. Ensina habilidades para gerenciar equipes de forma eficiente. Prepara o aluno para liderar equipes em espaços confinados de forma segura.',
    horas: '40 horas',
    valor: 'R$ 450,00'
  },
  {
    id: 5,
    icon: reciclagem,
    course: 'NR 33 - Trabalho em Espaços Confinados',
    category: 'Reciclagem',
    descricao: 'Legislações específicas, requisitos de segurança e técnicas para trabalho em espaços confinados. Atualizações na legislação e práticas relacionadas.',
    horas: '08 horas',
    valor: 'R$ 150,00'
  },
  {
    id: 6,
    icon: reciclagem,
    course: 'NR 35 - Trabalho em Altura',
    category: 'Reciclagem',
    descricao: 'Legislações específicas, requisitos de segurança e técnicas para trabalho em altura. Atualizações na legislação e práticas relacionadas.',
    horas: '08 horas',
    valor: 'R$ 150,00'
  },
  {
    id: 7,
    icon: trabalhador,
    course: 'NR 18 - Montagem de Andaime',
    category: 'Trabalhador',
    descricao: 'Durante o curso, os participantes irão adquirir conhecimentos teóricos e práticos sobre os procedimentos corretos de montagem, uso e desmontagem de andaimes.',
    horas: '08 horas',
    valor: 'R$ 150,00'
  },
];

export default courses;
