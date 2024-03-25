const wrapper = document.querySelector(".wrapper");
const question = document.querySelector(".question");
const gif = document.querySelector(".gif");
const yesBtn = document.querySelector(".yes-btn");
const noBtn = document.querySelector(".no-btn");
const questionPrompt = document.querySelector(".question-prompt"); // Thêm đoạn này

yesBtn.addEventListener("click", () => {
  question.innerHTML = "Anh đúng là đồ tòyyyyyyy 🥺<br>dỗiiii x10000000";
  gif.src =
    "https://media.giphy.com/media/vvc1dJPLEU2QOw9cXy/giphy.gif";

  // Ẩn cả hai nút Yes và No
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  questionPrompt.style.display = "none"; // Ẩn dòng chữ khi người dùng nhấn vào nút Yes
});
noBtn.addEventListener("click", () => {
  question.innerHTML = "Em cũng yêu anhhhh 🥺<br> tymmmm x10000000";
  gif.src =
    "https://media3.giphy.com/media/v1.Y2lkPTc5MGI3NjExZnRiOXl5Ym4xaGFrbDg3b2QyZTdndjU2emdodGM4cmhpOXp4YTg0ZCZlcD12MV9pbnRlcm5hbF9naWZfYnlfaWQmY3Q9Zw/25688FI5AUUVf04upZ/giphy.gif";

  // Ẩn cả hai nút Yes và No
  yesBtn.style.display = "none";
  noBtn.style.display = "none";
  questionPrompt.style.display = "none"; // Ẩn dòng chữ khi người dùng nhấn vào nút Yes
});
yesBtn.addEventListener("mouseover", () => {
  const yesBtnRect = yesBtn.getBoundingClientRect();
  const maxX = window.innerWidth - yesBtnRect.width;
  const maxY = window.innerHeight - yesBtnRect.height;

  const randomX = Math.floor(Math.random() * maxX);
  const randomY = Math.floor(Math.random() * maxY);

  yesBtn.style.left = randomX + "px";
  yesBtn.style.top = randomY + "px";
});
