interface CardLocalProps {
  nombre: string;
  imagen: string;
}

export default function CardLocal({ nombre, imagen }: CardLocalProps) {
  return (
    <div className="border p-4 rounded-lg shadow-lg">
      <img
        src={imagen}
        alt={nombre}
        className="w-full h-32 object-cover rounded-t-lg"
      />
      <h3 className="mt-2 text-xl font-bold">{nombre}</h3>
    </div>
  );
}
