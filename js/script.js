const form = document.querySelector("#form"),
      input = document.querySelector("#add"),
      // tasks = document.querySelector(".tasks"),
      mainSection = document.querySelector(".main-section"),
      wrap = document.querySelector('.wrap');

form.addEventListener("submit", (e) => {
  e.preventDefault();

  const inputValue = input.value;

  if(!inputValue) {
    alert("Please fill out the task")
    return;
  } 

  const tasks = document.createElement("div");
  tasks.classList.add("task");
  wrap.appendChild(tasks)

  const wrapper = document.createElement("div");
  wrapper.classList.add('wrapper')
  tasks.appendChild(wrapper);
  const content = document.createElement('div');
  content.classList.add("content");

  wrapper.appendChild(content);

  const inputSecond = document.createElement("input");
  inputSecond.type = 'text';
  inputSecond.value = inputValue;
  inputSecond.setAttribute('readonly', 'readonly');
  content.appendChild(inputSecond);
  inputSecond.classList.add("inp")


  const actions = document.createElement("div");
  actions.classList.add("actions")
  wrapper.appendChild(actions)

  
  const editBtn = document.createElement('button');
  editBtn.innerText = 'Edit'
  editBtn.classList.add("editButton")
  actions.appendChild(editBtn);

  const deleteBtn = document.createElement("button");
  deleteBtn.innerText = 'Delete';
  deleteBtn.classList.add("delete");

  actions.appendChild(deleteBtn);

 
  input.value = ''
  const divider = document.createElement("div");
  divider.classList.add("divider");
  tasks.appendChild(divider);

  editBtn.addEventListener("click", () => {
    if(editBtn.innerText.toUpperCase() == 'EDIT') {
      editBtn.innerText = 'Save';
      inputSecond.removeAttribute("readonly")
      inputSecond.style.outline = 'auto';
      inputSecond.focus();
    } else {
      editBtn.innerText = 'EDIT';
      inputSecond.style.outline = 'none';
      inputSecond.setAttribute('readonly', 'readonly');
    }
  });
  deleteBtn.addEventListener("click", () => {
    wrap.removeChild(tasks)
  });
});