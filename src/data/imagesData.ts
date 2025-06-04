import BallIndo from '../assets/Ball.png';
import NYUsa from '../assets/NovaYork.png';
import SantoGre from '../assets/Santorini.png';
import ParisFra from '../assets/Paris.png';
import CaboAfs from '../assets/Cabo.png';
import MumbaiInd from '../assets/Mumbai.png';

import type { ImageData } from '../types/images';

export const images: ImageData[] = [
  { src: BallIndo, alt: 'Ilha Ballindo' },
  { src: NYUsa, alt: 'Nova York, EUA', destaque: true },
  { src: SantoGre, alt: 'Santorini, Grécia' },
  { src: ParisFra, alt: 'Paris, França' },
  { src: CaboAfs, alt: 'Cabo, África do Sul', destaque: true },
  { src: MumbaiInd, alt: 'Mumbai, Índia' },
];
