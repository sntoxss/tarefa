const tasks = [
  {title: "Comprar comida para o gato", type: "Urgente"},
  {title: "Consertar Computador", type: "Importante"},
  {title: "Beber água", type: "Normal"},
  {title: "Enviar relatório trimestral", type: "Importante"},
  {title: "Fazer exercícios físicos", type: "Normal"},
  {title: "Agendar consulta médica", type: "Urgente"},
  {title: "Ler pelo menos um capítulo de um livro", type: "Normal"},
  {title: "Limpar a despensa", type: "Importante"},
  {title: "Pagar a conta de energia", type: "Urgente"},
  {title: "Assistir a um documentário interessante", type: "Normal"},
];

function renderElements(array){
  const ulContainer = document.querySelector("ul");
  ulContainer.innerHTML = "";

  for( let i = 0; i < array.length ; i++ ){
    const arr = array[i]
    const arrItem = createTaskItem(arr.title, arr.type);
    ulContainer.appendChild(arrItem)
  }
}

function createTaskItem(title, type){
  const liItem = document.createElement('li');
  const divItem = document.createElement("div");
  const spanItem = document.createElement("span");
  const pItem = document.createElement("p")
  const buttonItem = document.createElement("button")

  liItem.classList.add("task__item");
  divItem.classList.add("task-info__container");
  spanItem.classList.add("task-type");
  buttonItem.classList.add("task__button--remove-task")
  pItem.innerText = title

  divItem.appendChild(spanItem)
  divItem.appendChild(pItem)
  liItem.appendChild(divItem)
  liItem.appendChild(buttonItem)

  let typeMin = type.toLowerCase()

  if (typeMin === "urgente") {
    spanItem.classList.add("span-urgent");
  } else if (typeMin === "importante") {
    spanItem.classList.add("span-important");
  } else if (typeMin === "normal") {
    spanItem.classList.add("span-normal");
  } else {
    alert("valor inexistente");
  }

  buttonItem.addEventListener('click', function(){
    for(let i = 0 ; i < tasks.length ; i++) {
      const arrObject = tasks[i];
      if(arrObject.title === title && arrObject.type === type){
        tasks.splice(i, 1);
        renderElements(tasks);
        break
      }
    }
  });

  return liItem
}

document.querySelector(".form__container .form__button--add-task").addEventListener("click", function(event){
  event.preventDefault();
  const arrTitle = document.getElementById('input_title').value
  const arrType = document.querySelector(".form__input--priority").value

  if(arrTitle && arrType){
    const newItem = {title: arrTitle, type: arrType };
    tasks.push(newItem);
    renderElements(tasks);

    document.getElementById('input_title').value = "";
    document.querySelector(".form__input--priority").value = ""
  } else{
    alert("Por favor, preencha todos os campos.")
  }
});

renderElements(tasks);