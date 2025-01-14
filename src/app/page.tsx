import Letter from '@/components/Letter';
import PrintButton from '@/components/PrintButton';

export default function Home() {
  return (
    <main className="min-h-screen bg-gray-100 py-12">
      <Letter />
      <PrintButton />
    </main>
  );
}