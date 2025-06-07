export function generateRandomFirstName() {
  const firstNames = [
    'Ana', 'Bruno', 'Carla', 'Daniel', 'Eduarda', 'Felipe', 'Gabriela', 'Heitor',
    'Isabela', 'João', 'Karen', 'Luiz', 'Mariana', 'Nicolas', 'Olívia', 'Pedro',
    'Quésia', 'Rafael', 'Sofia', 'Thiago', 'Ursula', 'Victor', 'Wanessa', 'Xavier',
    'Yasmin', 'Zeca', 'Alice', 'Bernardo', 'Cecília', 'Davi', 'Elôá', 'Enzo',
    'Helena', 'Laura', 'Lorenzo', 'Manuela', 'Miguel', 'Maria', 'Noah', 'Valentina'
  ];

  return firstNames[Math.floor(Math.random() * firstNames.length)];
}

export function generateRandomLastName() {
  const lastNames = [
    'Silva', 'Santos', 'Oliveira', 'Souza', 'Rodrigues', 'Almeida', 'Pereira',
    'Lima', 'Costa', 'Martins', 'Ferreira', 'Gomes', 'Carvalho', 'Ribeiro',
    'Machado', 'Barbosa', 'Cruz', 'Melo', 'Dias', 'Fernandes', 'Moreira', 'Nunes',
    'Gonçalves', 'Freitas', 'Garcia', 'Pinto', 'Castro', 'Mendes', 'Rocha', 'Barros',
    'Pires', 'Duarte', 'Teixeira', 'Reis', 'Monteiro', 'Nascimento', 'Vasconcelos'
  ];

  return lastNames[Math.floor(Math.random() * lastNames.length)];
}
