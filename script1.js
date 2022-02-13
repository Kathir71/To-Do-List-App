const inputForm = document.querySelector("#input-form");
const ip = document.querySelector("#itemip");
const list = document.querySelector(".list-container");
const popup = document.querySelector("#popup");
inputForm.addEventListener("submit", (e) => {
  e.preventDefault();
  const inputVal = ip.value;
  const newDiv = appendListItem(ip.value);
  ip.value = "";
  let updateBtn = newDiv.querySelector("#update-btn");
  let endTaskBtn = newDiv.querySelector("#end-btn");
  newDiv.addEventListener("mouseenter", () => {
    updateBtn.classList.remove("btn-hide");
    updateBtn.classList.add("btn-show");
    endTaskBtn.classList.remove("btn-hide");
    endTaskBtn.classList.add("btn-show");
  });
  newDiv.addEventListener("mouseleave", () => {
    updateBtn.classList.add("btn-hide");
    endTaskBtn.classList.add("btn-hide");
    updateBtn.classList.remove("btn-show");
    endTaskBtn.classList.remove("btn-show");
  });
  endTaskBtn.addEventListener("click", (e) => {
    endTaskEvent(e.target.parentElement);
  });
});
function appendListItem(value) {
  let newDiv = document.createElement("div");
  let para = document.createElement("p");
  para.innerText = value;
  newDiv.appendChild(para);
  let updateBtn = document.createElement("button");
  updateBtn.innerText = "Update task";
  updateBtn.setAttribute("id", "update-btn");
  updateBtn.classList.add("btn-hide");
  let endTaskBtn = document.createElement("button");
  endTaskBtn.innerText = "End task";
  endTaskBtn.setAttribute("id", "end-btn");
  endTaskBtn.classList.add("btn-hide");
  newDiv.appendChild(updateBtn);
  newDiv.appendChild(endTaskBtn);
  newDiv.classList.add("list-item");
  list.appendChild(newDiv);
  return newDiv;
}
function endTaskEvent(parentElement) {
  popup.classList.remove("popup-hide");
  popup.classList.add("popup-show");
  timer();
  let isUndoTrue = false;
  let undo = popup.querySelector('.undo');
  undo.addEventListener("click" , () => {
    isUndoTrue = true;
    popup.classList.remove("popup-show");
    popup.classList.add("popup-hide");
    clearTimeout(hideTimeout);
  })

  const hideTimeout = setTimeout(() => {
    popup.classList.remove("popup-show");
    popup.classList.add("popup-hide");
    if (!isUndoTrue) 
    list.removeChild(parentElement);
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
}
