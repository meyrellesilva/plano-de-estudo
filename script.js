// seleciona os elementos da página
const dataInput = document.getElementById('data');
const temaInput = document.getElementById('tema');
const disciplinaInput = document.getElementById('disciplina');
const nomeInput = document.getElementById('nome');
const adicionarButton = document.getElementById('adicionar');
const planoEstudosList = document.getElementById('plano-estudos');
const revisarButton = document.getElementById('revisar');

// cria uma lista vazia para armazenar as matérias adicionadas
let planoEstudos = [];

// adiciona um evento de clique ao botão de adicionar matéria
adicionarButton.addEventListener('click', function() {
  // obtém as informações do formulário
  const data = dataInput.value;
  const tema = temaInput.value;
  const disciplina = disciplinaInput.value;
  const nome = nomeInput.value;

  // cria um objeto com as informações da matéria
  const materia = {
    data: data,
    tema: tema,
    disciplina: disciplina,
    nome: nome,
    concluido: false
  };

  // adiciona o objeto à lista de matérias
  planoEstudos.push(materia);

  // exibe a lista de matérias
  exibirPlanoEstudos();
});

// adiciona um evento de clique a lista de matérias para marcar como concluído
planoEstudosList.addEventListener('click', function(event) {
  if (event.target.tagName === 'INPUT') {
    const checkbox = event.target;
    const li = checkbox.parentNode;
    const index = li.dataset.index;
    planoEstudos[index].concluido = checkbox.checked;
    exibirPlanoEstudos();
  }
});

// adiciona um evento de clique ao botão de revisar
revisarButton.addEventListener('click', function() {
  const tarefasConcluidas = planoEstudos.filter(materia => materia.concluido);
  if (tarefasConcluidas.length === 0) {
    alert('Você ainda não concluiu nenhuma tarefa!');
  } else {
    const mensagem = tarefasConcluidas.map(materia => `- ${materia.nome}`).join('\n');
    alert(`Tarefas concluídas:\n${mensagem}`);
  }
});

// função para exibir a lista de matérias
function exibirPlanoEstudos() {
  // limpa a lista de matérias
  planoEstudosList.innerHTML = '';

  // itera sobre a lista de matérias e cria um item de lista para cada uma
  for (let i = 0; i < planoEstudos.length; i++) {
    const materia = planoEstudos[i];
    const itemLista = document.createElement('li');
    itemLista.dataset.index = i;

    const checkbox = document.createElement('input');
    checkbox.type = 'checkbox';
    checkbox.checked = materia.concluido;
    checkbox.addEventListener('click', function(event) {
      const li = event.target.parentNode;
      li.classList.toggle('concluido');
    });

    const textoMateria = document.createElement('span');
    textoMateria.innerText = `${materia.data} - ${materia.tema} - ${materia.disciplina} - ${materia.nome}`;

    itemLista.appendChild(checkbox);
    itemLista.appendChild(textoMateria);

    planoEstudosList.appendChild(itemLista);

    if (materia.concluido) {
      itemLista.classList.add('concluido');
    }
  }
  // seleciona o botão de revisar
const revisarButton = document.querySelector('.revisar-button');

// adiciona um ouvinte de eventos ao botão de revisar
revisarButton.addEventListener('click', function() {
  const tarefasConcluidas = planoEstudos.filter(materia => materia.concluido);
  if (tarefasConcluidas.length === 0) {
    alert("Você ainda não concluiu nenhuma tarefa!");
  } else {
    const mensagem = tarefasConcluidas.map(materia => `- {materia.nome}`).join('\n');
    alert("Tarefas concluídas:\n ");

  }
});

}
