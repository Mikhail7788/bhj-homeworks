const chatClick = e => {
  document
    .getElementsByClassName("chat-widget")[0]
    .classList.add("chat-widget_active");
    
  botSend = [
    "Кто тут?",
    "У нас все хорошо, а у тебя?",
    "Совесть? Что это?",
    "У нас ничего нет",
    "К сожалению, все операторы сейчас заняты. Напишите через год и да нам плевать!"
  ];

  const messages = document.querySelector(".chat-widget__messages");
  const input = document.querySelector(".chat-widget__input");

  const sendMessage = (msg, client) => {
    let date = new Date();
    let localTime = date.toLocaleTimeString("ru-RU", { timeStyle: "short" });
    messages.innerHTML += `
            <div class="message ${client ? "message_client" : ""}">
              <div class="message__time">${localTime}</div>
              <div class="message__text">
                ${msg}
              </div>
            </div>
          `;
    if (client) input.value = "";

    messages.parentElement.scrollTo({top: 10000000, behavior: 'smooth'});
  };

  const RandomBot = () => {
    setTimeout(() => {
      let randomIndex = Math.round(Math.random() * (botSend.length - 1));
      sendMessage(botSend[randomIndex]);
    }, 2000);
  }

  let timer = 0;
  
  const inputOnKeyPressed = e => {
    if (timer) clearTimeout(timer);
    if (e.keyCode == 13) {
      if (!input.value == "") {
        sendMessage(input.value, true);
        RandomBot();
      }
    }
    timer = setTimeout(() => {sendMessage("Чего молчишь? Уснул?")} , 10000);
  };
  
  setTimeout(() => {sendMessage("Кого нелегкая принесла?")} , 1000);

  input.addEventListener("keydown", inputOnKeyPressed, false);
};

document
  .getElementsByClassName("chat-widget__side")[0]
  .addEventListener("click", chatClick, false);