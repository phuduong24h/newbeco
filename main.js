function toast({ title = "", message = "", type = "info", duration = 3000 }) {
  const main = document.getElementById("toast");
  if (main) {
    const toast = document.createElement("div");
    const autoRemove = setTimeout(function () {
      main.removeChild(toast);
    }, duration + 1000);
    toast.onclick = function (e) {
      if (e.target.closest(".toast__close")) {
        main.removeChild(toast);
        clearTimeout(autoRemove);
      }
    };

    const icons = {
      success: "fas fa-check-circle",
      info: "fas fa-info-circle",
      warning: "fas fa-exclamation-circle",
    };
    const icon = icons[type];
    const delay = (duration / 1000).toFixed(2);
    toast.classList.add("toast", "toast--" + type);
    toast.style.animation = `slideInLeft ease 0.3s, fadeOut linear 1s ${delay}s forwards`;
    toast.innerHTML = `
        <div class="toast--icon">
          <i class="${icon}"></i>
        </div>
        <div class="toast__body">
          <h3 class="toast__title">${title}</h3>
          <p class="toast__msg">${message}</p>
        </div>
        <div class="toast__close">
          <i class="fas fa-times-circle"></i>
        </div>
      `;
    main.appendChild(toast);
  }
}

function showsuccess() {
  toast({
    title: "success",
    message: "may vi tính kết nối internet",
    type: "success",
    duration: 3000,
  });
}
function showinfo() {
  toast({
    title: "info",
    message: "a mun hun e",
    type: "info",
    duration: 3000,
  });
}
function showwarning() {
  toast({
    title: "warning",
    message: "don sút up",
    type: "warning",
    duration: 3000,
  });
}
/* prompt("pumamay");
setTimeout(function () {
  alert("a yeu e");
}, 10000); */
/* var myfuntion = function () {
  alert("helll0");
};
myfuntion(); */
/* var fname = {
  name: " phu duong",
  age: 20,
  adress: "tiền giang",
};
console.log(fname);
var a = 1;
var b = 2;
var result = "a" && NaN;
if (result) {
  console.log("dung");
} else {
  console.log("sai");
} */
/* var inno = "avalid station";
console.log(inno.slice(4, 6));
 */
/* var language = ["javascip", "duong hoang phu", "a yeu e"];
/* for (let index = 0; index < language.length; index++) {
  console.log(language[index]);
} */
/* var trings;
var language2 = ["hihi", "hehe"];
function showtime(hehe) {
  trings = " ";
  for (var mena of arguments) {
    trings += `${mena} - `;
  }
  console.log(trings);
}
showtime("matday", "cailonma", "kì dị");
console.log(typeof trings); */
/* function User(firstName, lastName, avatar) {
  this.firstName = firstName;
  this.lastName = lastName;
  this.avatar = avatar;
  this.fullName = function () {
    return `${this.firstName} ${this.lastName}`;
  };
}
User.prototype.ClassName = "dương phú";
var author = new User("Dương", "Hoàng Phú", "iuuu e");
var User = new User("bé iuuu", "hehe", "haha");
console.log(author.fullName());
console.log(author.ClassName); */
/* const a = {
  name: "dương hoàng phú",
  age: 21,
  adress: "tiền giang",
}; */
// main.js
/* import { name1 } from "./script.js";
console.log(name1); */
/* var date = new Date();
date = date.getDay();
date == 2;
console.log(Boolean(date)); */
/* console.log(date.getFullYear()); */
/* if (date == 1) {
  console.log("hôm nay là thứ 2");
} else if (date == 2) {
  console.log("hôm nay là thứ 3");
} else if (date == 3) {
  console.log("hôm nay là thứ 4");
} else if (date == 4) {
  console.log("hôm nay là thứ 5");
} else if (date == 5) {
  console.log("hôm nay là thứ 6");
} else if (date == 6) {
  console.log("hôm nay là thứ 7");
} else {
  console.log("hôm nay là thứ Cn");
} */
/* switch (date) {
  case 1:
    console.log("hôm nay là thứ 2");
    break;
  case 2:
    console.log("hôm nay là thứ 3");
    break;
  case 3:
    console.log("hôm nay là thứ 4");
    break;
  case 4:
    console.log("hôm nay là thứ 5");
    break;
  case 5:
    console.log("hôm nay là thứ 6");
    break;
  case 6:
    console.log("hôm nay là thứ 7");
    break;
  default:
    console.log("hôm nay là CN");
} */
var course = {
  name: "duong hoang phu",
  coin: 200,
};
/* 
if (course.coin > 0) {
  console.log(`${course.coin} coin`);
} else {
  console.log("Free");
} */
var result = course.coin > 0 ? `${course.coin} coin` : "Free";
console.log(result);
var a = 1;
var b = 2;
var c = a > b ? a : b;
console.log(c);
for (let index = 0; index <= 100; index++) {
  console.log("anh xin lỗi e 'Ngọc Nhi' " + index);
}
