import CardLocal from '@/components/CardLocal';

export default function Home() {
  return (
    <main className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
      <CardLocal nombre="Boliche A" imagen="/file.svg" />
      <CardLocal nombre="Boliche B" imagen="/globe.svg" />
    </main>
  );
}
