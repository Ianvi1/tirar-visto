// data/packagesData.ts
import Package1 from '../assets/Package1.png';
import Package2 from '../assets/Package2.png';
import Package3 from '../assets/Package3.png';

import type { PackageData } from '../types/packages';

export const packages: PackageData[] = [
  {
    image: Package1,
    subtitle: "Passaporte",
    features: [
      { label: "Atendimento", value: "On-line" },
      { label: "Tempo", value: "45 dias" },
    ],
    price: "R$ 890,00",
    cta: "Contratar",
  },
  {
    image: Package2,
    subtitle: "Passaporte + Visto",
    features: [
      { label: "Atendimento", value: "On-line + Presencial" },
      { label: "Tempo", value: "25 dias" },
    ],
    price: "R$ 1.290,00",
    cta: "Contratar",
  },
  {
    image: Package3,
    subtitle: "Consultoria Completa",
    features: [
      { label: "Atendimento", value: "Presencial Completo" },
      { label: "Duration", value: "10 dias" },
    ],
    price: "R$ 1.890,00",
    cta: "Contratar",
  },
];
