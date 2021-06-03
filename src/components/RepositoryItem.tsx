interface RepositoryItemProps {
  repository: {
    name: string;
    description: string;
    url: string;
  };
}

export default function RepositoryItem({ repository }: RepositoryItemProps) {
  return (
    <li>
      <strong>{repository.name}</strong>
      <p>{repository.description}</p>

      <a href={repository.url}>Acessar Repositório</a>
    </li>
  );
}
