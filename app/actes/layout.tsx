import { Metadata } from 'next';
import { servicesMetadata } from '@/lib/metadata';

export const metadata: Metadata = servicesMetadata;

export default function ActesLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return children;
}