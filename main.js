const message = document.getElementById("opMsg");
const inputMsg = document.getElementById("inputMsg");
const sendMsg = document.getElementById("sendMsg");
const form = document.getElementById("form");

const messages = () => {
  const mainDiv = document.createElement("div");
  mainDiv.className = "flex float-left items-center";
  message.appendChild(mainDiv);
  const imgDiv = document.createElement("div");
  mainDiv.appendChild(imgDiv);
  const img = document.createElement("img");
  img.className = "mr-3 bg-white rounded-xl flex item-center";
  img.src = "/user.png";
  imgDiv.appendChild(img);
  const div = document.createElement("div");
  mainDiv.appendChild(div);
  const h3 = document.createElement("h3");
  h3.className = "text-base font-semibold";
  h3.innerText = "User 1";
  div.appendChild(h3);
  const p = document.createElement("p");
  p.className = "w-11/12 ";
  p.textContent = inputMsg.value;
  console.log(inputMsg.value);
  div.appendChild(p);
};

sendMsg.addEventListener("click", () => {
  messages();
  inputMsg.value = "";
});

form.onsubmit = (e) => {
  e.preventDefault();
  messages();
  inputMsg.value = "";
};
