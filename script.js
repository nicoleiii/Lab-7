document.getElementById('add').addEventListener('click', addTask);

function addTask() {
    const inputBox = document.getElementById('task');
    const listContainer = document.getElementById('list');

    let li = document.createElement("li");
    li.textContent = inputBox.value;
    listContainer.appendChild(li);

    let span = document.createElement("span")
    span.innerHTML = "\u00d7";
    span.classList.add('delete-btn');

  li.appendChild(span);
    span.addEventListener('click', () => {
        li.remove();
    });
}