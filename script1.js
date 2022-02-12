const inputForm = document.querySelector("#input-form");
const ip = document.querySelector("#itemip");
const list = document.querySelector(".list-container");
const popup = document.querySelector(".popup");
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
    console.log(endTaskBtn);
    endTaskBtn.addEventListener("click", () => {
      popup.innerText = "Sure you want to delete this task ?";
      setTimeout(() => {
        popup.innerText = "";
      }, 5000);
    });
  });
  newDiv.addEventListener("mouseleave", () => {
    updateBtn.classList.add("btn-hide");
    endTaskBtn.classList.add("btn-hide");
    updateBtn.classList.remove("btn-show");
    endTaskBtn.classList.remove("btn-show");
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
