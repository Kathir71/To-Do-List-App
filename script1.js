const inputForm = document.querySelector('#input-form');
const ip = document.querySelector('#itemip');
inputForm.addEventListener('submit', e => {
    e.preventDefault();
    const inputVal = ip.value;
    const newDiv = appendListItem(ip.value);
    ip.value = '';
    newDiv.addEventListener('click', () => {
        let updateBtn = newDiv.querySelector('#update-btn');
        let endTaskBtn = newDiv.querySelector('#end-btn')
        // updateBtn.style.display = 'block';
        // endTaskBtn.style.display = 'block';
        updateBtn.classList.toggle('update-btn-bl');
        updateBtn.classList.toggle('update-btn');
        endTaskBtn.classList.toggle('end-btn-bl');
        endTaskBtn.classList.toggle('end-btn');
    });
}
);
function appendListItem(value) {
    let newDiv = document.createElement('div');
    newDiv.innerText = value;
    let updateBtn = document.createElement('button');
    updateBtn.innerText = 'Update task';
    updateBtn.setAttribute('id','update-btn')
    updateBtn.classList.add('update-btn');
    let endTaskBtn = document.createElement('button');
    endTaskBtn.innerText = 'End task';
    endTaskBtn.setAttribute('id','end-btn')
    endTaskBtn.classList.add('end-btn');
    newDiv.appendChild(updateBtn);
    newDiv.appendChild(endTaskBtn);
    newDiv.classList.add('list-item');
    const list = document.querySelector('.list-container');
    list.appendChild(newDiv);
    return newDiv;

}
function showBtns(listItem) {
}