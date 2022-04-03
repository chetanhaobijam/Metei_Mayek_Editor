const keyboard = document.querySelector(".keyboard");
const qube = document.querySelector("#qube");
const tip = document.querySelector(".tip");
const one = document.querySelector("#one");
const two = document.querySelector("#two");
const three = document.querySelector("#three");
const four = document.querySelector("#four");
const five = document.querySelector("#five");
const six = document.querySelector("#six");
const seven = document.querySelector("#seven");
const eight = document.querySelector("#eight");
const nine = document.querySelector("#nine");
const zero = document.querySelector("#zero");
const hyphen = document.querySelector("#hyphen");
const q = document.querySelector("#q");
const w = document.querySelector("#w");
const e = document.querySelector("#e");
const r = document.querySelector("#r");
const t = document.querySelector("#t");
const y = document.querySelector("#y");
const u = document.querySelector("#u");
const i = document.querySelector("#i");
const o = document.querySelector("#o");
const p = document.querySelector("#p");
const bslash = document.querySelector("#bslash");
const a = document.querySelector("#a");
const s = document.querySelector("#s");
const d = document.querySelector("#d");
const f = document.querySelector("#f");
const g = document.querySelector("#g");
const h = document.querySelector("#h");
const j = document.querySelector("#j");
const k = document.querySelector("#k");
const l = document.querySelector("#l");
const z = document.querySelector("#z");
const x = document.querySelector("#x");
const c = document.querySelector("#c");
const v = document.querySelector("#v");
const b = document.querySelector("#b");
const n = document.querySelector("#n");
const m = document.querySelector("#m");
const comma = document.querySelector("#comma");
const fullStop = document.querySelector("#full-stop");
const question = document.querySelector("#question");

// Function to toggle the display of Keyboard using F2 and F4
window.addEventListener("keydown", (e) => {
  if(e.key === "F2") {
    keyboard.classList.add("hide");
    qube.rows = "10";
    tip.classList.remove("hide");
  } else if(e.key === "F4") {
    keyboard.classList.remove("hide");
    qube.rows = "6";
    tip.classList.add("hide");
  }
})

// Function to change to lower case letters
const lowerCase = () => {
  // 1st row
  one.innerText = "꯱";
  two.innerText = "꯲";
  three.innerText = "꯳";
  four.innerText = "꯱";
  five.innerText = "꯵";
  six.innerText = "꯶";
  seven.innerText = "꯷";
  eight.innerText = "꯸";
  nine.innerText = "꯹";
  zero.innerText = "꯰";
  hyphen.innerText = "-";
  // 2nd Row
  q.innerText = "ꯪ";
  w.innerText = "ꯋ";
  e.innerText = "ꯦ";
  r.innerText = "ꯔ";
  t.innerText = "ꯇ";
  y.innerText = "ꯌ";
  u.innerText = "ꯨ";
  i.innerText = "ꯤ";
  o.innerText = "ꯣ";
  p.innerText = "ꯄ";
  bslash.innerText = "\\";
  // 3rd Row
  a.innerText = "ꯥ";
  s.innerText = "ꯁ";
  d.innerText = "ꯗ";
  f.innerText = "ꯐ";
  g.innerText = "ꯒ";
  h.innerText = "ꯍ";
  j.innerText = "ꯖ";
  k.innerText = "ꯀ";
  l.innerText = "ꯂ";
  // 4th Row
  z.innerText = "ꯉ";
  x.innerText = "ꯊ";
  c.innerText = "ꯆ";
  v.innerText = "ꯚ";
  b.innerText = "ꯕ";
  n.innerText = "ꯅ";
  m.innerText = "ꯃ";
  comma.innerText = ",";
  fullStop.innerText = ".";
  question.innerText = "/";
}

// Function to change to upper case letters
const upperCase = () => {
  one.innerText = "!";
  two.innerText = "@";
  three.innerText = "#";
  four.innerText = "$";
  five.innerText = "%";
  six.innerText = "^";
  seven.innerText = "&";
  eight.innerText = "*";
  nine.innerText = "(";
  zero.innerText = ")";
  hyphen.innerText = "__";
  q.innerText = "ꯈ";
  w.innerText = "";
  e.innerText = "ꯩ";
  r.innerText = "";
  t.innerText = "ꯠ";
  y.innerText = "";
  u.innerText = "ꯎ";
  i.innerText = "ꯏ";
  o.innerText = "ꯧ";
  p.innerText = "ꯞ";
  bslash.innerText = "꯫";
  // 3rd Row
  a.innerText = "ꯑ";
  s.innerText = "";
  d.innerText = "ꯙ";
  f.innerText = "";
  g.innerText = "ꯘ";
  h.innerText = "";
  j.innerText = "ꯓ";
  k.innerText = "ꯛ";
  l.innerText = "ꯜ";
  // 4th Row
  z.innerText = "ꯡ";
  x.innerText = "";
  c.innerText = "";
  v.innerText = "";
  b.innerText = "";
  n.innerText = "ꯟ";
  m.innerText = "ꯝ";
  comma.innerText = "<";
  fullStop.innerText = ">";
  question.innerText = "?";
}

lowerCase();

// Shift Key Events
window.addEventListener("keydown", (e) => {
  if(e.key === "Shift") {
    upperCase();
  }
})

window.addEventListener("keyup", (e) => {
  if(e.key === "Shift") {
    lowerCase();
  }
})