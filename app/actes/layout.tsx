import { Metadata } from 'next';

export const metadata: Metadata = {
  title: 'Soins de Médecine Esthétique à Toulouse - Dr Nadine Baron | Villa Esthétique',
  description: 'Découvrez tous les soins de médecine esthétique du Dr Nadine Baron à Toulouse : injections acide hyaluronique, épilation laser, Morpheus 8, HydraFacial, peelings médicaux.',
  keywords: 'médecine esthétique Toulouse, injections acide hyaluronique, épilation laser Toulouse, Morpheus 8, HydraFacial, peelings médicaux, Dr Nadine Baron'
};

export default function ActesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}