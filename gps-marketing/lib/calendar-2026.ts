export interface CalendarEvent {
  date: string;
  title: string;
  type: 'campanha' | 'data_comemorativa' | 'feriado';
}

export interface MonthData {
  name: string;
  campaigns: string[];
  events: CalendarEvent[];
}

export const calendar2026: Record<string, MonthData> = {
  janeiro: {
    name: "Janeiro",
    campaigns: [
      "Janeiro Branco – Saúde Mental",
      "Janeiro Roxo – Hanseníase"
    ],
    events: [
      { date: "02", title: "Dia do Sanitarista", type: "data_comemorativa" },
      { date: "04", title: "Dia do Hemofílico", type: "data_comemorativa" },
      { date: "04", title: "Dia Mundial do Braille", type: "data_comemorativa" },
      { date: "19", title: "Dia Mundial do Terapeuta Ocupacional", type: "data_comemorativa" },
      { date: "20", title: "Dia do Farmacêutico", type: "data_comemorativa" },
      { date: "21", title: "Dia Nacional de Combate à Intolerância Religiosa", type: "data_comemorativa" },
      { date: "24", title: "Dia Internacional da Educação", type: "data_comemorativa" },
      { date: "25", title: "Dia do Carteiro", type: "data_comemorativa" },
      { date: "26", title: "Dia Nacional de Combate e Prevenção da Hanseníase", type: "data_comemorativa" },
      { date: "27", title: "Dia em Memória às Vítimas do Holocausto", type: "data_comemorativa" },
      { date: "28", title: "Dia Nacional de Combate ao Trabalho Escravo", type: "data_comemorativa" },
      { date: "29", title: "Dia Nacional da Visibilidade Trans", type: "data_comemorativa" },
      { date: "30", title: "Dia Mundial da Não Violência e da Cultura da Paz", type: "data_comemorativa" },
      { date: "31", title: "Dia Mundial do Mágico", type: "data_comemorativa" }
    ]
  },
  fevereiro: {
    name: "Fevereiro",
    campaigns: [
      "Fevereiro Roxo – Lúpus, Fibromialgia e Mal de Alzheimer",
      "Fevereiro Laranja – Leucemia"
    ],
    events: [
      { date: "01", title: "Semana Nacional de Prevenção da Gravidez na Adolescência", type: "data_comemorativa" },
      { date: "01", title: "Dia do Publicitário", type: "data_comemorativa" },
      { date: "04", title: "Dia Mundial de Combate ao Câncer", type: "data_comemorativa" },
      { date: "05", title: "Dia Nacional da Mamografia", type: "data_comemorativa" },
      { date: "07", title: "Dia Nacional de Luta dos Povos Indígenas", type: "data_comemorativa" },
      { date: "10", title: "Dia do Atleta Profissional", type: "data_comemorativa" },
      { date: "11", title: "Dia Internacional da Internet Segura", type: "data_comemorativa" },
      { date: "11", title: "Dia Internacional das Mulheres e Meninas na Ciência", type: "data_comemorativa" },
      { date: "11", title: "Dia Mundial do Enfermo", type: "data_comemorativa" },
      { date: "13", title: "Dia Mundial do Rádio", type: "data_comemorativa" },
      { date: "15", title: "Dia Internacional de Luta contra o Câncer na Infância", type: "data_comemorativa" },
      { date: "18", title: "Dia Nacional de Combate ao Alcoolismo", type: "data_comemorativa" },
      { date: "20", title: "Dia Mundial da Justiça Social", type: "data_comemorativa" },
      { date: "20", title: "Dia Nacional de Combate às Drogas e ao Alcoolismo", type: "data_comemorativa" },
      { date: "24", title: "Dia da conquista do voto feminino no Brasil", type: "data_comemorativa" },
      { date: "27", title: "Dia Nacional do Livro Didático", type: "data_comemorativa" },
      { date: "28", title: "Dia Mundial das Doenças Raras", type: "data_comemorativa" }
    ]
  },
  marco: {
    name: "Março",
    campaigns: [
      "Março Azul – Conscientização ao câncer colorretal",
      "Março Lilás – Conscientização e Combate ao Câncer de colo de útero",
      "Semana escolar de combate a violência contra as mulheres"
    ],
    events: [
      { date: "01", title: "Dia Mundial de Zero Discriminação", type: "data_comemorativa" },
      { date: "04", title: "Carnaval 2025", type: "feriado" },
      { date: "08", title: "Dia Internacional de luta das Mulheres", type: "data_comemorativa" },
      { date: "13", title: "Dia Mundial do RIM", type: "data_comemorativa" },
      { date: "15", title: "Dia da Escola", type: "data_comemorativa" },
      { date: "16", title: "Dia de Conscientização das Mudanças Climáticas", type: "data_comemorativa" },
      { date: "20", title: "Dia Mundial da Saúde Bucal", type: "data_comemorativa" },
      { date: "21", title: "Dia Internacional de Eliminação da Discriminação Racial", type: "data_comemorativa" },
      { date: "21", title: "Dia internacional da Síndrome de Down", type: "data_comemorativa" },
      { date: "21", title: "Dia mundial da infância", type: "data_comemorativa" },
      { date: "24", title: "Dia Internacional para o Direito à Verdade para as Vítimas de Graves Violações dos Direitos Humanos", type: "data_comemorativa" },
      { date: "24", title: "Dia Mundial de Combate à Tuberculose", type: "data_comemorativa" },
      { date: "25", title: "Dia Internacional em Memória das Vítimas da Escravidão", type: "data_comemorativa" },
      { date: "26", title: "Dia Mundial de Conscientização Sobre a Epilepsia", type: "data_comemorativa" },
      { date: "30", title: "Dia Mundial da Juventude", type: "data_comemorativa" },
      { date: "30", title: "Dia Mundial do Transtorno Bipolar", type: "data_comemorativa" },
      { date: "31", title: "Dia da Saúde e Nutrição", type: "data_comemorativa" },
      { date: "31", title: "Dia Internacional da Visibilidade de Pessoas Trans e Travestis", type: "data_comemorativa" }
    ]
  },
  abril: {
    name: "Abril",
    campaigns: [
      "Abril Verde – Saúde e segurança no trabalho",
      "Abril Azul – Autismo"
    ],
    events: [
      { date: "01", title: "Dia da Abolição da Escravidão dos povos Indígenas", type: "data_comemorativa" },
      { date: "02", title: "Dia Mundial de Conscientização do Autismo", type: "data_comemorativa" },
      { date: "02", title: "Dia Internacional do Livro Infantil", type: "data_comemorativa" },
      { date: "04", title: "Dia Nacional do Parkinsoniano", type: "data_comemorativa" },
      { date: "06", title: "Aniversário da Política Nacional de Saúde Mental", type: "data_comemorativa" },
      { date: "06", title: "Dia Mundial da Atividade Física", type: "data_comemorativa" },
      { date: "06", title: "Dia Nacional de Mobilização pela Promoção da Saúde", type: "data_comemorativa" },
      { date: "07", title: "Dia Nacional de Combate ao Bullying e à Violência nas Escolas", type: "data_comemorativa" },
      { date: "07", title: "Dia Mundial da Saúde", type: "data_comemorativa" },
      { date: "07", title: "Dia do Jornalista", type: "data_comemorativa" },
      { date: "08", title: "Dia Mundial do Combate ao Câncer", type: "data_comemorativa" },
      { date: "08", title: "Dia Nacional do Sistema Braille", type: "data_comemorativa" },
      { date: "09", title: "Dia Nacional da Biblioteca", type: "data_comemorativa" },
      { date: "11", title: "Dia Mundial de Conscientização da Doença de Parkinson", type: "data_comemorativa" },
      { date: "11", title: "Dia do Infectologista", type: "data_comemorativa" },
      { date: "12", title: "Dia do obstetra", type: "data_comemorativa" },
      { date: "13", title: "Dia do Hino Nacional Brasileiro", type: "data_comemorativa" },
      { date: "14", title: "Dia Nacional de Luta pela Educação Inclusiva", type: "data_comemorativa" },
      { date: "14", title: "Dia Nacional de Prevenção ao Afogamento Infantil", type: "data_comemorativa" },
      { date: "14", title: "Dia mundial doença de Chagas", type: "data_comemorativa" },
      { date: "15", title: "Dia da Latinidade", type: "data_comemorativa" },
      { date: "16", title: "Dia Nacional da Lembrança do Holocausto", type: "data_comemorativa" },
      { date: "17", title: "Dia internacional da luta dos trabalhadores do campo", type: "data_comemorativa" },
      { date: "17", title: "Dia Nacional de Luta pela Reforma Agrária", type: "data_comemorativa" },
      { date: "17", title: "Dia mundial da Hemofilia", type: "data_comemorativa" },
      { date: "18", title: "Paixão de Cristo (2025)", type: "feriado" },
      { date: "19", title: "Dia dos povos Indígenas", type: "data_comemorativa" },
      { date: "20", title: "Páscoa (2025)", type: "feriado" },
      { date: "21", title: "Dia de Tiradentes", type: "feriado" },
      { date: "21", title: "Dia do Policial Civil e Militar", type: "data_comemorativa" },
      { date: "22", title: "Dia do Descobrimento no Brasil", type: "data_comemorativa" },
      { date: "22", title: "Dia da comunidade luso-brasileira", type: "data_comemorativa" },
      { date: "23", title: "Dia Nacional da Educação de Surdos", type: "data_comemorativa" },
      { date: "23", title: "Dia Mundial do Livro", type: "data_comemorativa" },
      { date: "24", title: "Dia Nacional da Língua Brasileira de Sinais (Libras)", type: "data_comemorativa" },
      { date: "24", title: "Dia Nacional da Família na Escola", type: "data_comemorativa" },
      { date: "24", title: "Dia Mundial de Combate à Meningite", type: "data_comemorativa" },
      { date: "25", title: "Dia internacional de combate à Alienação Parental", type: "data_comemorativa" },
      { date: "26", title: "Dia de Prevenção e Combate à Hipertensão Arterial", type: "data_comemorativa" },
      { date: "27", title: "Dia da Empregada Doméstica", type: "data_comemorativa" },
      { date: "28", title: "Dia Internacional da Educação", type: "data_comemorativa" },
      { date: "28", title: "Dia Nacional da Conscientização sobre a Doença de Fabry", type: "data_comemorativa" },
      { date: "28", title: "Dia Mundial da Segurança e Saúde no Trabalho", type: "data_comemorativa" },
      { date: "30", title: "Dia Nacional da Mulher", type: "data_comemorativa" }
    ]
  },
  maio: {
    name: "Maio",
    campaigns: [
      "Maio Laranja – Abuso e Exploração Sexual de Crianças e Adolescentes",
      "Maio Vermelho – Câncer Bucal",
      "Maio Vermelho – Hepatites Virais",
      "Maio Amarelo – Acidentes de trânsito",
      "Maio Verde – Doença Celíaca",
      "Maio Roxo – Doenças inflamatórias intestinais"
    ],
    events: [
      { date: "01", title: "Dia Internacional do/a Trabalhador/a", type: "feriado" },
      { date: "02", title: "Dia Nacional de Combate ao Assédio Moral", type: "data_comemorativa" },
      { date: "07", title: "Dia internacional da Luta contra a Endometriose", type: "data_comemorativa" },
      { date: "10", title: "Dia Mundial do Lúpus", type: "data_comemorativa" },
      { date: "11", title: "Dia das Mães", type: "data_comemorativa" },
      { date: "13", title: "Dia de Luta contra a Discriminação Racial", type: "data_comemorativa" },
      { date: "15", title: "Dia da/o Assistente Social", type: "data_comemorativa" },
      { date: "15", title: "Dia Internacional da Família", type: "data_comemorativa" },
      { date: "17", title: "Dia Internacional de Combate a LGBT Fobia", type: "data_comemorativa" },
      { date: "18", title: "Dia internacional da Luta Antimanicomial", type: "data_comemorativa" },
      { date: "18", title: "Dia Nacional de Enfrentamento ao Abuso e Exploração Sexual Infanto-Juvenil", type: "data_comemorativa" },
      { date: "24", title: "Dia Mundial da Pessoa com Esquizofrenia", type: "data_comemorativa" },
      { date: "25", title: "Dia da Trabalhadora/Trabalhador Rural", type: "data_comemorativa" },
      { date: "28", title: "Dia internacional de Luta Pela Saúde da Mulher", type: "data_comemorativa" },
      { date: "28", title: "Dia Nacional de Redução da Mortalidade Materna", type: "data_comemorativa" }
    ]
  },
  junho: {
    name: "Junho",
    campaigns: [
      "Junho Violeta – Alerta para os tipos de violência contra pessoas idosas",
      "Junho Vermelho – Incentivo à doação de sangue",
      "Junho Laranja – Conscientização sobre anemia e leucemia",
      "Mês da Festa Junina"
    ],
    events: [
      { date: "03", title: "Dia da Conscientização Contra a Obesidade Mórbida Infantil", type: "data_comemorativa" },
      { date: "04", title: "Dia Internacional das Crianças Vítimas de Agressão", type: "data_comemorativa" },
      { date: "05", title: "Dia Mundial do Meio Ambiente", type: "data_comemorativa" },
      { date: "07", title: "Aniversário da Lei que regulamenta a profissão de Assistente Social", type: "data_comemorativa" },
      { date: "07", title: "Dia Mundial da Síndrome de Tourette", type: "data_comemorativa" },
      { date: "08", title: "Dia de Corpus Christi", type: "feriado" },
      { date: "12", title: "Dia Mundial de Combate ao Trabalho Infantil", type: "data_comemorativa" },
      { date: "13", title: "Dia Internacional de Atenção ao Albinismo", type: "data_comemorativa" },
      { date: "14", title: "Dia Mundial do Doador de Sangue", type: "data_comemorativa" },
      { date: "15", title: "Dia Mundial de Conscientização sobre a Violência contra a Pessoa Idosa", type: "data_comemorativa" },
      { date: "18", title: "Dia do Orgulho Autista", type: "data_comemorativa" },
      { date: "20", title: "Dia Mundial do Refugiado", type: "data_comemorativa" },
      { date: "26", title: "Dia Internacional de Luta Contra o Abuso e o Tráfico de Drogas", type: "data_comemorativa" },
      { date: "27", title: "Dia Internacional da Pessoa Surdocega", type: "data_comemorativa" },
      { date: "28", title: "Dia Internacional do Orgulho LGBTQIA+", type: "data_comemorativa" }
    ]
  },
  julho: {
    name: "Julho",
    campaigns: [
      "Julho Amarelo – Luta Contra as Hepatites Virais",
      "Julho Amarelo – Conscientização sobre o câncer ósseo",
      "Julho Verde – Prevenção do Câncer de Cabeça e Pescoço"
    ],
    events: [
      { date: "02", title: "Dia do Hospital", type: "data_comemorativa" },
      { date: "03", title: "Dia Nacional de Combate à Discriminação Racial", type: "data_comemorativa" },
      { date: "05", title: "Dia Mundial da Capoeira", type: "data_comemorativa" },
      { date: "13", title: "Aniversário do Estatuto da Criança e do Adolescente", type: "data_comemorativa" },
      { date: "13", title: "Dia Mundial do TDAH", type: "data_comemorativa" },
      { date: "16", title: "Dia do Comerciante", type: "data_comemorativa" },
      { date: "18", title: "Dia Internacional de Nelson Mandela", type: "data_comemorativa" },
      { date: "19", title: "Dia Nacional do Futebol", type: "data_comemorativa" },
      { date: "25", title: "Dia Internacional da Mulher Negra Latino-Americana e Caribenha", type: "data_comemorativa" },
      { date: "27", title: "Dia Nacional da Prevenção de Acidentes do Trabalho", type: "data_comemorativa" },
      { date: "28", title: "Dia do Agricultor", type: "data_comemorativa" },
      { date: "28", title: "Dia Mundial de Luta Contra as Hepatites Virais", type: "data_comemorativa" },
      { date: "30", title: "Dia Mundial Contra o Tráfico de Pessoas", type: "data_comemorativa" }
    ]
  },
  agosto: {
    name: "Agosto",
    campaigns: [
      "Agosto Lilás – Conscientização pelo fim da violência contra a mulher",
      "Agosto Dourado – Aleitamento Materno",
      "Agosto Verde – Mês da Primeira Infância"
    ],
    events: [
      { date: "01", title: "Dia Mundial do Câncer de Pulmão", type: "data_comemorativa" },
      { date: "01", title: "Dia do Poeta de Literatura de Cordel", type: "data_comemorativa" },
      { date: "01", title: "Dia Nacional do Maracatu", type: "data_comemorativa" },
      { date: "03", title: "Dia do Capoeirista", type: "data_comemorativa" },
      { date: "05", title: "Dia Nacional da Saúde", type: "data_comemorativa" },
      { date: "05", title: "Dia da Farmácia", type: "data_comemorativa" },
      { date: "06", title: "Dia Nacional dos Profissionais da Educação", type: "data_comemorativa" },
      { date: "07", title: "Aniversário da Lei Maria da Penha", type: "data_comemorativa" },
      { date: "08", title: "Dia Nacional de Combate ao Colesterol", type: "data_comemorativa" },
      { date: "09", title: "Dia Internacional de Luta dos Povos Indígenas", type: "data_comemorativa" },
      { date: "10", title: "Dia dos Pais", type: "data_comemorativa" },
      { date: "10", title: "Dia da Enfermeira", type: "data_comemorativa" },
      { date: "11", title: "Dia do Advogado", type: "data_comemorativa" },
      { date: "11", title: "Dia Nacional do/a Estudante", type: "data_comemorativa" },
      { date: "12", title: "Dia Nacional dos Direitos Humanos", type: "data_comemorativa" },
      { date: "12", title: "Dia Internacional da Juventude", type: "data_comemorativa" },
      { date: "13", title: "Dia do Médico Psiquiatra", type: "data_comemorativa" },
      { date: "14", title: "Dia do Cardiologista", type: "data_comemorativa" },
      { date: "15", title: "Dia da Gestante", type: "data_comemorativa" },
      { date: "15", title: "Dia do Cirurgião Vascular", type: "data_comemorativa" },
      { date: "16", title: "Dia do Filósofo", type: "data_comemorativa" },
      { date: "18", title: "Dia do Estagiário", type: "data_comemorativa" },
      { date: "19", title: "Dia de Luta do Movimento Nacional da População em Situação de Rua", type: "data_comemorativa" },
      { date: "19", title: "Dia Mundial da Fotografia", type: "data_comemorativa" },
      { date: "19", title: "Dia do Historiador", type: "data_comemorativa" },
      { date: "21", title: "Semana Nacional da Pessoa com Deficiência Intelectual e Múltipla", type: "data_comemorativa" },
      { date: "22", title: "Dia do Folclore", type: "data_comemorativa" },
      { date: "22", title: "Dia do Supervisor Escolar", type: "data_comemorativa" },
      { date: "22", title: "Dia do Coordenador Pedagógico", type: "data_comemorativa" },
      { date: "22", title: "Dia da Pessoa com Deficiência Intelectual", type: "data_comemorativa" },
      { date: "23", title: "Dia Internacional para Relembrar o Tráfico de Escravos e sua Abolição", type: "data_comemorativa" },
      { date: "24", title: "Dia da Infância", type: "data_comemorativa" },
      { date: "25", title: "Dia Nacional da Educação Infantil", type: "data_comemorativa" },
      { date: "27", title: "Dia do Psicólogo", type: "data_comemorativa" },
      { date: "28", title: "Dia Nacional de Combate e Prevenção ao Escalpelamento", type: "data_comemorativa" },
      { date: "28", title: "Dia Nacional do Voluntariado", type: "data_comemorativa" },
      { date: "29", title: "Dia Nacional da Visibilidade Lésbica", type: "data_comemorativa" },
      { date: "29", title: "Dia Nacional de Combate ao Fumo", type: "data_comemorativa" },
      { date: "30", title: "Dia Nacional de Conscientização sobre a Esclerose Múltipla", type: "data_comemorativa" },
      { date: "31", title: "Dia do Nutricionista", type: "data_comemorativa" }
    ]
  },
  setembro: {
    name: "Setembro",
    campaigns: [
      "Setembro Amarelo – Prevenção do Suicídio",
      "Setembro Verde – Conscientização sobre Pessoa com Deficiência",
      "Setembro Verde – Conscientização sobre Doação de Órgãos",
      "Setembro Azul – Conscientização sobre Dia Mundial do Surdo"
    ],
    events: [
      { date: "01", title: "Dia do Profissional de Educação Física", type: "data_comemorativa" },
      { date: "01", title: "Dia da Bailarina", type: "data_comemorativa" },
      { date: "02", title: "Dia do Repórter Fotográfico", type: "data_comemorativa" },
      { date: "03", title: "Dia do Biólogo", type: "data_comemorativa" },
      { date: "03", title: "Dia do Guarda Civil", type: "data_comemorativa" },
      { date: "05", title: "Dia Nacional de Conscientização e Divulgação da Fibrose Cística", type: "data_comemorativa" },
      { date: "07", title: "Independência do Brasil", type: "feriado" },
      { date: "08", title: "Dia Mundial da Fisioterapia", type: "data_comemorativa" },
      { date: "08", title: "Dia Mundial da Alfabetização", type: "data_comemorativa" },
      { date: "08", title: "Dia Nacional de Luta por Medicamento", type: "data_comemorativa" },
      { date: "09", title: "Dia do Administrador", type: "data_comemorativa" },
      { date: "10", title: "Dia do Médico Veterinário", type: "data_comemorativa" },
      { date: "10", title: "Dia Mundial de prevenção ao suicídio", type: "data_comemorativa" },
      { date: "11", title: "Dia Nacional do Cerrado", type: "data_comemorativa" },
      { date: "15", title: "Dia Mundial de Conscientização sobre Linfomas", type: "data_comemorativa" },
      { date: "15", title: "Dia Internacional da Democracia", type: "data_comemorativa" },
      { date: "17", title: "Dia Nacional de Conscientização sobre a Distrofia Muscular", type: "data_comemorativa" },
      { date: "18", title: "Dia dos Símbolos Nacionais", type: "data_comemorativa" },
      { date: "19", title: "Dia do Teatro", type: "data_comemorativa" },
      { date: "19", title: "Dia do Ortopedista", type: "data_comemorativa" },
      { date: "19", title: "Aniversário do SUS", type: "data_comemorativa" },
      { date: "21", title: "Dia Mundial do Doador de Medula Óssea", type: "data_comemorativa" },
      { date: "21", title: "Dia Nacional de Luta das Pessoas com Deficiência", type: "data_comemorativa" },
      { date: "21", title: "Dia Mundial e Nacional de Conscientização do Alzheimer", type: "data_comemorativa" },
      { date: "21", title: "Dia da Árvore", type: "data_comemorativa" },
      { date: "22", title: "Dia do Contador", type: "data_comemorativa" },
      { date: "23", title: "Dia Internacional das Línguas de Sinais", type: "data_comemorativa" },
      { date: "23", title: "Dia Mundial do Combate ao Estresse", type: "data_comemorativa" },
      { date: "24", title: "Dia Mundial do Surdo / Dia Nacional do Surdo", type: "data_comemorativa" },
      { date: "25", title: "Dia Internacional do Farmacêutico", type: "data_comemorativa" },
      { date: "26", title: "Dia Nacional dos Surdos", type: "data_comemorativa" },
      { date: "27", title: "Dia Nacional da Doação de Órgãos", type: "data_comemorativa" },
      { date: "29", title: "Dia Mundial do Coração", type: "data_comemorativa" }
    ]
  },
  outubro: {
    name: "Outubro",
    campaigns: [
      "Outubro Rosa – Conscientização Sobre o Câncer de Mama"
    ],
    events: [
      { date: "01", title: "Aniversário do Estatuto da Pessoa Idosa", type: "data_comemorativa" },
      { date: "01", title: "Dia Nacional da Terceira Idade", type: "data_comemorativa" },
      { date: "01", title: "Dia Mundial do Idoso", type: "data_comemorativa" },
      { date: "02", title: "Dia Internacional da Não Violência", type: "data_comemorativa" },
      { date: "03", title: "Dia Mundial do Dentista", type: "data_comemorativa" },
      { date: "04", title: "Dia dos Médicos e Médicas do Trabalho", type: "data_comemorativa" },
      { date: "04", title: "Dia do Agente Comunitário de Saúde", type: "data_comemorativa" },
      { date: "05", title: "Dia Mundial dos Professores", type: "data_comemorativa" },
      { date: "05", title: "Aniversário da Constituição Federal do Brasil (1988)", type: "data_comemorativa" },
      { date: "06", title: "Dia Mundial da Paralisia Cerebral", type: "data_comemorativa" },
      { date: "09", title: "Dia do Atletismo", type: "data_comemorativa" },
      { date: "10", title: "Dia Nacional de Luta Contra a Violência à Mulher", type: "data_comemorativa" },
      { date: "10", title: "Dia Mundial da Saúde Mental", type: "data_comemorativa" },
      { date: "10", title: "Dia Mundial da Visão", type: "data_comemorativa" },
      { date: "11", title: "Dia Nacional da Pessoa com Deficiência Física", type: "data_comemorativa" },
      { date: "11", title: "Dia Nacional de Prevenção da Obesidade", type: "data_comemorativa" },
      { date: "12", title: "Dia Nacional de Combate à Sífilis e à Sífilis Congênita", type: "data_comemorativa" },
      { date: "12", title: "Dia das Crianças", type: "data_comemorativa" },
      { date: "12", title: "Dia de Nossa Senhora Aparecida", type: "feriado" },
      { date: "12", title: "Dia Mundial da Artrite Reumatoide", type: "data_comemorativa" },
      { date: "13", title: "Dia Mundial da Trombose", type: "data_comemorativa" },
      { date: "13", title: "Dia Nacional do Fisioterapeuta", type: "data_comemorativa" },
      { date: "13", title: "Dia do Terapeuta Ocupacional", type: "data_comemorativa" },
      { date: "15", title: "Dia do/a Professor/a", type: "data_comemorativa" },
      { date: "15", title: "Dia Internacional das Mulheres Rurais", type: "data_comemorativa" },
      { date: "16", title: "Dia Mundial da Alimentação", type: "data_comemorativa" },
      { date: "16", title: "Dia do Anestesiologista", type: "data_comemorativa" },
      { date: "17", title: "Dia dos Idosos", type: "data_comemorativa" },
      { date: "17", title: "Dia Mundial para Erradicação da Pobreza", type: "data_comemorativa" },
      { date: "17", title: "Dia Nacional da Vacinação", type: "data_comemorativa" },
      { date: "17", title: "Dia da Música Popular Brasileira", type: "data_comemorativa" },
      { date: "18", title: "Dia do Médico", type: "data_comemorativa" },
      { date: "19", title: "Dia do Profissional de TI", type: "data_comemorativa" },
      { date: "20", title: "Dia Mundial e Nacional da Osteoporose", type: "data_comemorativa" },
      { date: "20", title: "Dia Nacional da Paralisia Cerebral", type: "data_comemorativa" },
      { date: "20", title: "Dia Mundial do Combate ao Bullying", type: "data_comemorativa" },
      { date: "21", title: "Dia Nacional da Alimentação nas Escolas", type: "data_comemorativa" },
      { date: "22", title: "Dia Internacional de Atenção à Gagueira", type: "data_comemorativa" },
      { date: "25", title: "Dia Nacional da Saúde Bucal", type: "data_comemorativa" },
      { date: "25", title: "Dia do Cirurgião Dentista", type: "data_comemorativa" },
      { date: "25", title: "Dia do Engenheiro Civil", type: "data_comemorativa" },
      { date: "26", title: "Dia de Combate ao Preconceito ao Nanismo", type: "data_comemorativa" },
      { date: "27", title: "Dia Nacional de Mobilização Pró-Saúde da População Negra", type: "data_comemorativa" },
      { date: "28", title: "Dia do Servidor Público", type: "data_comemorativa" },
      { date: "29", title: "Dia Nacional de Prevenção ao AVC", type: "data_comemorativa" },
      { date: "29", title: "Dia Mundial da Psoríase", type: "data_comemorativa" },
      { date: "29", title: "Dia Nacional do Livro", type: "data_comemorativa" },
      { date: "30", title: "Dia Nacional de Luta contra o Reumatismo", type: "data_comemorativa" },
      { date: "31", title: "Dia das Bruxas (Halloween)", type: "data_comemorativa" },
      { date: "31", title: "Dia do Saci", type: "data_comemorativa" }
    ]
  },
  novembro: {
    name: "Novembro",
    campaigns: [
      "Novembro Azul – Conscientização sobre a saúde do homem",
      "Novembro Dourado – Combate ao Câncer Infantojuvenil"
    ],
    events: [
      { date: "02", title: "Finados", type: "feriado" },
      { date: "06", title: "Dia Mundial Internacional para a Prevenção da Exploração do Ambiente em tempo de Guerra", type: "data_comemorativa" },
      { date: "08", title: "Dia do Médico Radiologista", type: "data_comemorativa" },
      { date: "08", title: "Dia Internacional da Radiologia", type: "data_comemorativa" },
      { date: "10", title: "Dia Nacional de Prevenção e Combate à Surdez", type: "data_comemorativa" },
      { date: "12", title: "Dia do Diretor Escolar", type: "data_comemorativa" },
      { date: "14", title: "Dia Mundial do Diabetes", type: "data_comemorativa" },
      { date: "15", title: "Proclamação da República", type: "feriado" },
      { date: "16", title: "Dia Nacional dos Ostomizados", type: "data_comemorativa" },
      { date: "17", title: "Dia Mundial em Memória das Vítimas de Trânsito", type: "data_comemorativa" },
      { date: "17", title: "Dia Mundial da Prematuridade", type: "data_comemorativa" },
      { date: "17", title: "Dia Nacional de Combate à Tuberculose", type: "data_comemorativa" },
      { date: "18", title: "Dia do Conselho Tutelar", type: "data_comemorativa" },
      { date: "19", title: "Dia do Rei Pelé", type: "data_comemorativa" },
      { date: "20", title: "Dia Nacional da Consciência Negra", type: "feriado" },
      { date: "20", title: "Início dos 21 dias de ativismo pelo fim da violência contra mulher", type: "data_comemorativa" },
      { date: "20", title: "Dia Nacional do Biomédico", type: "data_comemorativa" },
      { date: "21", title: "Dia Nacional da Homeopatia", type: "data_comemorativa" },
      { date: "23", title: "Dia Nacional de Combate ao Câncer Infantojuvenil", type: "data_comemorativa" },
      { date: "25", title: "Dia Nacional do Doador de Sangue", type: "data_comemorativa" },
      { date: "25", title: "Dia Internacional de luta contra a Violência contra a Mulher", type: "data_comemorativa" },
      { date: "27", title: "Dia Nacional de Combate ao Câncer", type: "data_comemorativa" },
      { date: "27", title: "Dia do Técnico de Segurança do Trabalho", type: "data_comemorativa" },
      { date: "27", title: "Dia Nacional de Luta contra o Câncer de Mama", type: "data_comemorativa" }
    ]
  },
  dezembro: {
    name: "Dezembro",
    campaigns: [
      "Dezembro Vermelho – Campanha Nacional de Prevenção ao HIV/Aids e outras ISTs",
      "Dezembro Laranja – Prevenção e detecção precoce do câncer de pele"
    ],
    events: [
      { date: "01", title: "Dia Mundial de Luta contra a Aids", type: "data_comemorativa" },
      { date: "01", title: "Dia do Imigrante", type: "data_comemorativa" },
      { date: "02", title: "Dia Nacional do Samba", type: "data_comemorativa" },
      { date: "02", title: "Dia da Astronomia", type: "data_comemorativa" },
      { date: "02", title: "Dia Internacional para a Abolição da Escravatura", type: "data_comemorativa" },
      { date: "03", title: "Dia Internacional da Pessoa com Deficiência", type: "data_comemorativa" },
      { date: "04", title: "Dia do Orientador Educacional", type: "data_comemorativa" },
      { date: "04", title: "Dia Nacional do Policial Penal", type: "data_comemorativa" },
      { date: "05", title: "Dia Nacional da Acessibilidade", type: "data_comemorativa" },
      { date: "05", title: "Dia Nacional do Médico de Família e Comunidade", type: "data_comemorativa" },
      { date: "06", title: "Dia Nacional de Mobilização dos Homens pelo Fim da Violência contra as Mulheres", type: "data_comemorativa" },
      { date: "07", title: "Aniversário da Lei Orgânica de Assistência Social", type: "data_comemorativa" },
      { date: "07", title: "Dia Nacional da Assistência Social", type: "data_comemorativa" },
      { date: "08", title: "Dia Nacional da Família", type: "data_comemorativa" },
      { date: "08", title: "Dia da Justiça", type: "data_comemorativa" },
      { date: "09", title: "Dia do Fonoaudiólogo", type: "data_comemorativa" },
      { date: "09", title: "Dia da Criança com Deficiência", type: "data_comemorativa" },
      { date: "10", title: "Dia Internacional dos Povos Indígenas", type: "data_comemorativa" },
      { date: "10", title: "Dia Internacional dos Direitos Humanos", type: "data_comemorativa" },
      { date: "10", title: "Fim dos 21 dias de ativismo contra a violência contra a mulher", type: "data_comemorativa" },
      { date: "10", title: "Dia da Inclusão Social", type: "data_comemorativa" },
      { date: "10", title: "Dia Nacional de Conscientização sobre as Doenças Crônicas", type: "data_comemorativa" },
      { date: "11", title: "Dia Nacional das APAEs", type: "data_comemorativa" },
      { date: "12", title: "Dia do Plano Nacional de Educação", type: "data_comemorativa" },
      { date: "12", title: "Dia da Cobertura Universal de Saúde", type: "data_comemorativa" },
      { date: "12", title: "Dia Pan-Americano de Saúde", type: "data_comemorativa" },
      { date: "13", title: "Dia Nacional da Pessoa com Deficiência Visual", type: "data_comemorativa" },
      { date: "13", title: "Dia Nacional do Forró", type: "data_comemorativa" },
      { date: "18", title: "Dia Internacional dos Migrantes", type: "data_comemorativa" },
      { date: "20", title: "Dia Internacional da Solidariedade Humana", type: "data_comemorativa" },
      { date: "21", title: "Dia do Atleta", type: "data_comemorativa" },
      { date: "25", title: "Natal", type: "feriado" },
      { date: "27", title: "Dia Internacional de Preparação Epidemiológica", type: "data_comemorativa" },
      { date: "31", title: "Réveillon (Véspera do Ano-novo)", type: "feriado" }
    ]
  }
};

export const monthsList = [
  { key: "janeiro", name: "Janeiro", abbr: "JAN" },
  { key: "fevereiro", name: "Fevereiro", abbr: "FEV" },
  { key: "marco", name: "Março", abbr: "MAR" },
  { key: "abril", name: "Abril", abbr: "ABR" },
  { key: "maio", name: "Maio", abbr: "MAI" },
  { key: "junho", name: "Junho", abbr: "JUN" },
  { key: "julho", name: "Julho", abbr: "JUL" },
  { key: "agosto", name: "Agosto", abbr: "AGO" },
  { key: "setembro", name: "Setembro", abbr: "SET" },
  { key: "outubro", name: "Outubro", abbr: "OUT" },
  { key: "novembro", name: "Novembro", abbr: "NOV" },
  { key: "dezembro", name: "Dezembro", abbr: "DEZ" }
];

export function getMonthData(month: string): MonthData | null {
  return calendar2026[month.toLowerCase()] || null;
}

export function formatCalendarForPrompt(month: string): string {
  const data = getMonthData(month);
  if (!data) return "";

  let result = `\n=== ${data.name.toUpperCase()} 2026 ===\n\n`;
  
  if (data.campaigns.length > 0) {
    result += "CAMPANHAS DO MÊS:\n";
    data.campaigns.forEach(c => {
      result += `• ${c}\n`;
    });
    result += "\n";
  }

  result += "DATAS IMPORTANTES:\n";
  data.events.forEach(e => {
    const typeLabel = e.type === 'feriado' ? '🎉 FERIADO' : '📅';
    result += `${e.date}/${data.name.substring(0, 3).toUpperCase()} - ${typeLabel} ${e.title}\n`;
  });

  return result;
}


