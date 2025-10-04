const items = document.querySelectorAll("#theMatrix li");
const button = document.getElementById("themeToggle");
let theme = "light";

console.log("Initial theme:", theme);

for (let i = 0; i < items.length; i++) {
  items[i].style.backgroundColor = i % 2 === 0 ? "#f0f0f0" : "#d0d0d0";
  console.log(
    `Item ${i + 1} background set to`,
    items[i].style.backgroundColor
  );
}

let index = 0;
while (index < 3) {
  items[index].style.border = "2px solid #39FF14";
  console.log(`Item ${index + 1} highlighted with border #39FF14`);
  index++;
}

items.forEach((item, i) => {
  item.style.fontSize = "20px";
  console.log(`Item ${i + 1} font size set to`, item.style.fontSize);
});

button.addEventListener("click", () => {
  theme = theme === "light" ? "dark" : "light";
  console.log("Theme switched to:", theme);

  document.body.style.backgroundColor = theme === "dark" ? "#222" : "#fff";
  document.body.style.color = theme === "dark" ? "#eee" : "#000";
  console.log("Body background and text color updated.");

  items.forEach((item, i) => {
    item.style.color = theme === "dark" ? "#fff" : "#000";
    item.style.backgroundColor = theme === "dark" ? "#444" : "#e0e0e0";
    console.log(
      `Item ${i + 1} updated for ${theme} theme:`,
      item.style.cssText
    );
  });
});
