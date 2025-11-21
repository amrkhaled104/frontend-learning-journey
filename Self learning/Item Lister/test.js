// ========== Select Elements ==========
const form = document.querySelector("#addForm");
const input = document.querySelector("#item");
const itemsList = document.querySelector("#items");
const filter = document.querySelector("#filter");

// ========== Add Item ==========
form.addEventListener("submit", function (e) {
  e.preventDefault();

  if (input.value.trim() === "") return;

  // Create li
  const li = document.createElement("li");
  li.className = "list-group-item";
  li.textContent = input.value;

  // Create delete button
  const btn = document.createElement("button");
  btn.className = "btn btn-danger btn-sm float-right delete";
  btn.textContent = "X";

  // Append
  li.appendChild(btn);
  itemsList.appendChild(li);

  // Clear input
  input.value = "";
});

// ========== Delete Item (Event Delegation) ==========
itemsList.addEventListener("click", function (e) {
  if (e.target.classList.contains("delete")) {
    if (confirm("Are you sure?")) {
      e.target.parentElement.remove();
    }
  }
});
// ========== Filter Items ==========
filter.addEventListener("input", (e) => {
  const text = e.target.value.toLowerCase();
  console.log(text)
  Array.from(itemsList.children).forEach((e) => {
    const itemname = e.firstChild.textContent;
    if (itemname.toLowerCase().indexOf(text) != -1) {
      e.style.display = "block";
    }
    else {
      e.style.display = "none";
    }
  })
})