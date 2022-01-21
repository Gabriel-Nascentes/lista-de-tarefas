/* eslint-disable no-console */
/* eslint-disable linebreak-style */
// Variáveis:
const enterButton = document.getElementById('enter');
const input = document.getElementById('user-input');
const ul = document.getElementById('ul');

// Função para contar a quantidade de caractere
function inputLength() {
  return input.value.length;
}

// Criar a lista
function createListElement() {
  const li = document.createElement('li');
  li.appendChild(document.createTextNode(input.value));
  ul.appendChild(li);
  input.value = '';
  function crossOut() {
    li.classList.toggle('done');
  }
  li.addEventListener('click', crossOut);
  const dBtn = document.createElement('button');
  dBtn.appendChild(document.createTextNode('X'));
  li.appendChild(dBtn);
  // Função para deletar item:
  dBtn.addEventListener('click', () => {
    li.classList.add('delete');
  });
}
// Função para add evento > 0 length
function addListAfterClick() {
  if (inputLength() > 0) {
    createListElement();
  }
}
// Função para add evento com enter
function addListAfterKey() {
  if (inputLength() > 0 && event.keyCode === 13) {
    createListElement();
  }
}
enterButton.addEventListener('click', addListAfterClick);
input.addEventListener('keypress', addListAfterKey);
