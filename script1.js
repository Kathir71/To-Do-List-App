const inputForm = document.querySelector("#input-form");
const ip = document.querySelector("#itemip");
const list = document.querySelector(".list-container");
const popup = document.querySelector("#popup");
let isInEditMode = false;
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = ip.value;
  const newDiv = appendListItem(ip.value);
  ip.value = "";
  let updateBtn = newDiv.querySelector("#update-btn");
  let endTaskBtn = newDiv.querySelector("#end-btn");
  newDiv.addEventListener("mouseenter", () => {
    if(!isInEditMode){
    updateBtn.classList.remove("btn-hide");
    updateBtn.classList.add("btn-show");
    endTaskBtn.classList.remove("btn-hide");
    endTaskBtn.classList.add("btn-show");
    }
  });
  newDiv.addEventListener("mouseleave", () => {
    if(!isInEditMode){
    updateBtn.classList.add("btn-hide");
    endTaskBtn.classList.add("btn-hide");
    updateBtn.classList.remove("btn-show");
    endTaskBtn.classList.remove("btn-show");
    }
  });
  endTaskBtn.addEventListener("click", (e) => {
    endTaskEvent(e);
  });
  updateBtn.addEventListener("click", (e) => {
    updateTaskEvent(e);
  });
});
function appendListItem(value) {
  let newDiv = document.createElement("div");
  let para = document.createElement("p");
  para.innerText = value;
  let updateInput = document.createElement("input");
  updateInput.setAttribute("type", "text");
  updateInput.classList.add("textbox-hide");
  updateInput.setAttribute("id", "utext");
  newDiv.appendChild(updateInput);
  newDiv.appendChild(para);
  let updateBtn = document.createElement("button");
  updateBtn.innerText = "Edit task";
  updateBtn.setAttribute("id", "update-btn");
  updateBtn.classList.add("btn-hide");
  let endTaskBtn = document.createElement("button");
  endTaskBtn.innerText = "End task";
  endTaskBtn.setAttribute("id", "end-btn");
  endTaskBtn.classList.add("btn-hide");
  newDiv.appendChild(updateBtn);
  newDiv.appendChild(endTaskBtn);
  newDiv.classList.add("list-item");
  let confirmUpdateBtn = document.createElement("button");
  confirmUpdateBtn.classList.add("btn-hide");
  confirmUpdateBtn.innerText = "Confirm Edit";
  confirmUpdateBtn.setAttribute("id", "confirm-update-btn");
  newDiv.appendChild(confirmUpdateBtn);
  list.appendChild(newDiv);
  return newDiv;
}
function endTaskEvent(e) {
  e.target.disabled = true;
  popup.classList.remove("popup-hide");
  popup.classList.add("popup-show");
  let interval = timer();
  let isUndoClicked = false;
  let undo = popup.querySelector(".undo");
  undo.addEventListener("click", () => {
    isUndoClicked = true;
    e.target.disabled = false;
    popup.classList.remove("popup-show");
    popup.classList.add("popup-hide");
    clearTimeout(hideTimeout);
    clearInterval(interval);
  });

  const hideTimeout = setTimeout(() => {
    popup.classList.remove("popup-show");
    popup.classList.add("popup-hide");
    e.target.disabled = false;
    if (!isUndoClicked) list.removeChild(e.target.parentElement);
  }, 5000);
}
function timer() {
  let timer = document.querySelector(".timer");
  let seconds = 5;
  timer.innerText = seconds;
  seconds--;
  let myInterval = setInterval(() => {
    if (seconds < 0) clearInterval(myInterval);
    timer.innerText = seconds;
    seconds--;
  }, 1000);
  return myInterval;
}
function updateTaskEvent(e) {
  isInEditMode = true;
  let listItem = e.target.parentElement;
  let textBox = listItem.querySelector("#utext");
  let paragraph = listItem.querySelector("p");
  let endBtn = listItem.querySelector("#end-btn");
  let updateBtn = listItem.querySelector("#update-btn");
  let confirmUpdateBtn = listItem.querySelector("#confirm-update-btn");
  textBox.classList.remove("textbox-hide");
  textBox.classList.add("textbox-show");
  textBox.value = paragraph.innerText;
  textBox.focus();
  paragraph.style.display = "none";
  endBtn.classList.remove("btn-show");
  endBtn.classList.add("btn-hide");
  updateBtn.classList.remove("btn-show");
  updateBtn.classList.add("btn-hide");
  confirmUpdateBtn.classList.add("btn-show");
  confirmUpdateBtn.classList.remove("btn-hide");
  confirmUpdateBtn.addEventListener("click", () => {
    let newVal = textBox.value;
    paragraph.innerText = newVal;
    paragraph.style.display = "block";
    endBtn.classList.add("btn-show");
    endBtn.classList.remove("btn-hide");
    updateBtn.classList.add("btn-show");
    updateBtn.classList.remove("btn-hide");
    confirmUpdateBtn.classList.remove("btn-show");
    confirmUpdateBtn.classList.add("btn-hide");
    textBox.classList.add("textbox-hide");
    textBox.classList.remove("textbox-show");
    isInEditMode = false;
  });
}
