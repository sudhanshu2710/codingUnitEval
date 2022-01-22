const btn = document.querySelector(".btn");
var arr = [
  {
    id: 1,
    title: "new",
    status: false,
  },
];

btn.addEventListener("click", function (e) {
  e.preventDefault();
  var input = document.querySelector(".input").value;
  var check = document.querySelector(".check");
  var s = check.checked == true;

  console.log(input);
  var new_task = {
    title: input,
    status: s,
  };
  var cart = JSON.parse(localStorage.getItem("cart"));

  if (cart === null) {
    cart = [];
  }
  cart.push(new_task);
  console.log(cart);
  localStorage.setItem("cart", JSON.stringify(cart));
  display();
});
function display() {
  data = JSON.parse(localStorage.getItem("cart"));
  container.innerHTML = "";
  data.forEach(function (data) {
    var task = document.createElement("div");
    task.innerHTML = data.title;
    task.classList.add("tasks");
    if (data.status == true) task.classList.add("done");
    else task.classList.add("notdone");
    var container = document.querySelector("#container");
    container.append(task);
  });
}
