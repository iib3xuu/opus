interface CommandProps {
  name: string;
  description: string;
  usage: string;
}

export function Command({ name, description, usage }: CommandProps) {
  return (
    <div className="border border-gray-700 rounded-lg p-6 mb-4 hover:border-[#7289DA] transition-colors">
      <h3 className="text-xl font-semibold mb-2">{name}</h3>
      <p className="text-gray-400 mb-4">{description}</p>
      <div className="bg-gray-800 p-4 rounded-md">
        <code className="text-[#7289DA]">{usage}</code>
      </div>
    </div>
  );
}