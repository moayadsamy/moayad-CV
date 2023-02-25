let icon = document.getElementById("icon");
let btn = document.getElementsByClassName("btn");

// btn.onclick = function () {
//   <iframe
//     src="https://1drv.ms/b/s!AizLwzYbYp_uhGLJDzepynS7S6I8?e=N6MJwK"
//     frameborder="0"
//   ></iframe>;
// };

if (localStorage.getItem("theme") == null) {
  localStorage.setItem("theme", "light");
}

let localData = localStorage.getItem("theme");
if (localData == "light") {
  icon.src = "images/moon.png";
  document.body.classList.remove("dark-theme");
} else if (localData == "dark") {
  icon.src = "images/sun.png";
  document.body.classList.add("dark-theme");
}

icon.onclick = function () {
  document.body.classList.toggle("dark-theme");
  if (document.body.classList.contains("dark-theme")) {
    icon.src = "images/sun.png";
    localStorage.setItem("theme", "dark");
  } else {
    icon.src = "images/moon.png";
    localStorage.setItem("theme", "light");
  }
};
