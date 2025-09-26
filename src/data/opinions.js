// Patient opinions and testimonials data
export const patientOpinions = [
  {
    id: 'maria-lopez',
    name: 'Mariona Morales',
    description: 'La mejor fisioterapeuta que he encontrado en mucho tiempo, en una única sesión ha entendido mi problema! La mejor manera de describir a Jess: manos mágicas.',
    stars: 5,
    date: '2024-02-15'
  },
  {
    id: 'anna-garcia',
    name: 'Anna Valverde',
    description: 'Por fin he encontrado lo que buscaba, Jess es una gran profesional y también una experta en toda la complejidad de la fisiolología femenina. Os la recomiendo mucho.',
    stars: 5,
    date: '2024-01-28'
  },
  {
    id: 'laura-martinez',
    name: 'Judith Marqués',
    description: 'Jess es muy buena fisioterapeuta en Girona, que me está ayudando con la endometriosis ya trabajar el suelo pélvico. ¡Muy contenta con el trato y con los resultados!',
    stars: 5,
    date: '2024-03-10'
  },
  {
    id: 'sofia-rodriguez',
    name: 'Sofia Rodríguez',
    description: 'Molt professional i atenta. Ha resolt el meu problema de tensions cervicals amb exercicis molt efectius.',
    stars: 5,
    date: '2024-02-22'
  },
  {
    id: 'carmen-fernandez',
    name: 'Carmen Fernández',
    description: 'Excepcional atenció i resultats molt satisfactoris. L\'ambient de la consulta és molt relaxant i acollidor.',
    stars: 5,
    date: '2024-03-05'
  }
];

// Helper function to get opinions by language (if needed for filtering)
export const getOpinionsByLanguage = (lang) => {
  // For now, return all opinions
  // In the future, you could filter by language or have separate opinion sets
  return patientOpinions;
};

// Helper function to get a specific opinion by ID
export const getOpinionById = (id) => {
  return patientOpinions.find(opinion => opinion.id === id);
};

// Helper function to get random opinions for sampling
export const getRandomOpinions = (count = 3) => {
  const shuffled = [...patientOpinions].sort(() => 0.5 - Math.random());
  return shuffled.slice(0, count);
};

export default {
  patientOpinions,
  getOpinionsByLanguage,
  getOpinionById,
  getRandomOpinions
};