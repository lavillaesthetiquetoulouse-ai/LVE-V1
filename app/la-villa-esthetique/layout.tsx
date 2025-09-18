import { Metadata } from 'next';
import { villaMetadata } from '@/lib/metadata';

export const metadata: Metadata = villaMetadata;

export default function LaVillaEsthetiqueLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}