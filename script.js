const sendBtn = document.getElementById("sendBtn");
const input = document.getElementById("userInput");

sendBtn.addEventListener("click", () => {
  if (!input.value.trim()) return;

  console.log("Пользователь написал:", input.value);
  input.value = "";
});
