export const PROJECTS = [
  {
    id: 'kodlar',
    name: 'Kodlarni ishlatish',
    description: 'Dasturlash tillarini o\'rganish va kodlarni onlayn ishlatib ko\'rish uchun mo\'ljallangan kuchli platforma.',
    stack: ['React', 'Node.js', 'MongoDB', 'Compiler API'],
    link: 'https://kodlar.netlify.app/',
    color: 'from-blue-600/40 to-cyan-400/40'
  },
  {
    id: 'barber',
    name: 'Bar ber',
    description: 'Sartaroshxonalar uchun qulay onlayn navbat olish tizimi, mijozlar va vaqtni boshqarishni osonlashtiradi.',
    stack: ['React', 'Express', 'Node.js', 'Tailwind CSS'],
    link: 'https://barberuchun.netlify.app/',
    color: 'from-purple-600/40 to-pink-400/40'
  },
  {
    id: 'sarvia',
    name: 'Sarvia',
    description: 'Restoranlar uchun premium veb-sayt: raqamli menyu, onlayn buyurtma va zamonaviy dizayn.',
    stack: ['React', 'Framer Motion', 'Tailwind CSS'],
    link: 'https://sarvia.netlify.app/',
    color: 'from-amber-600/40 to-orange-400/40'
  }
];

export const SERVICES = [
  {
    title: 'Frontend Dasturlash',
    description: 'React va zamonaviy CSS texnologiyalari yordamida tezkor va moslashuvchan foydalanuvchi interfeyslarini yaratish.',
    skills: ['HTML', 'CSS', 'JS', 'React'],
    icon: 'Layout'
  },
  {
    title: 'Backend Dasturlash',
    description: 'Node.js va MongoDB yordamida mustahkam server qismi va kengayuvchan ma\'lumotlar bazasini ishlab chiqish.',
    skills: ['Node.js', 'Express', 'MongoDB'],
    icon: 'Server'
  },
  {
    title: 'Deployment va CI/CD',
    description: 'Avtomatlashtirilgan deployment va bulutli hosting xizmatlarini sozlash (Netlify, Vercel, Render).',
    skills: ['Netlify', 'Render', 'Vercel'],
    icon: 'Cloud'
  }
];

export const SKILLS = [
  { name: 'HTML (Semantik)', category: 'Frontend' },
  { name: 'CSS (Grid, Flex)', category: 'Frontend' },
  { name: 'JavaScript (ES6+)', category: 'Frontend' },
  { name: 'React / Next.js', category: 'Frontend' },
  { name: 'Tailwind CSS', category: 'Dizayn' },
  { name: 'Framer Motion', category: 'Animatsiya' },
  { name: 'Node.js', category: 'Backend' },
  { name: 'Express.js', category: 'Backend' },
  { name: 'MongoDB', category: 'Bazalar' },
  { name: 'TypeScript', category: 'Til' },
];

export const STATS = [
  { label: 'Tugallangan Loyihalar', value: 50, suffix: '+' },
  { label: 'Mamnun Mijozlar', value: 30, suffix: '+' },
  { label: 'Yillik Tajriba', value: 3, suffix: '+' },
];

export const FAQS = [
  {
    question: 'Xizmat narxi qancha?',
    answer: 'Narxlar loyihaning murakkabligi va unga sarflanadigan vaqtga qarab belgilanadi.'
  },
  {
    question: 'Loyiha qancha vaqtda tayyor bo\'ladi?',
    answer: 'Odatda loyihalar talablarga qarab 1 haftadan 4 haftagacha bo\'lgan vaqt ichida yakunlanadi.'
  },
  {
    question: 'Texnik yordam ko\'rsatiladimi?',
    answer: 'Ha, loyiha topshirilgandan so\'ng ham 24/7 rejimida texnik yordam va xavfsizlik nazorati ta\'minlanadi.'
  }
];

export const WORK_PROCESS = [
  {
    title: 'Analiz',
    description: 'Loyihaning maqsadlari va talablarini batafsil o\'rganish.'
  },
  {
    title: 'Dizayn',
    description: 'Figma orqali zamonaviy va qulay UI/UX dizayn yaratish.'
  },
  {
    title: 'Kodlash',
    description: 'Eng so\'nggi texnologiyalar bilan loyihani ishlab chiqish.'
  },
  {
    title: 'Topshirish',
    description: 'Loyihani test qilish va serverga joylashtirish.'
  }
];
