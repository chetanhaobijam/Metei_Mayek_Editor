const keyboard = document.querySelector(".keyboard");
const qube = document.querySelector("#qube");
const tip = document.querySelector(".tip");
const lowerCaseLetters = document.querySelectorAll(".lowercase");
const upperCaseLetters = document.querySelectorAll(".uppercase");
const form = document.querySelector("form");
// New Keys
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
const exclam = document.querySelector("#exclam");
const atTheRate = document.querySelector("#at-the-rate");
const hash = document.querySelector("#hash");
const dollar = document.querySelector("#dollar");
const percentage = document.querySelector("#percentage");
const upSign = document.querySelector("#up-sign");
const and = document.querySelector("#and");
const star = document.querySelector("#star");
const lbracket = document.querySelector("#lbracket");
const rbracket = document.querySelector("#rbracket");
const underscore = document.querySelector("#underscore");
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
const Q = document.querySelector("#Q");
const E = document.querySelector("#E");
const T = document.querySelector("#T");
const U = document.querySelector("#U");
const I = document.querySelector("#I");
const O = document.querySelector("#O");
const P = document.querySelector("#P");
const pipe = document.querySelector("#pipe");
const a = document.querySelector("#a");
const s = document.querySelector("#s");
const d = document.querySelector("#d");
const f = document.querySelector("#f");
const g = document.querySelector("#g");
const h = document.querySelector("#h");
const j = document.querySelector("#j");
const k = document.querySelector("#k");
const l = document.querySelector("#l");
const A = document.querySelector("#A");
const S = document.querySelector("#S");
const D = document.querySelector("#D");
const F = document.querySelector("#F");
const G = document.querySelector("#G");
const H = document.querySelector("#H");
const J = document.querySelector("#J");
const K = document.querySelector("#K");
const L = document.querySelector("#L");
const z = document.querySelector("#z");
const x = document.querySelector("#x");
const c = document.querySelector("#c");
const v = document.querySelector("#v");
const b = document.querySelector("#b");
const n = document.querySelector("#n");
const m = document.querySelector("#m");
const comma = document.querySelector("#comma");
const fullStop = document.querySelector("#full-stop");
const slash = document.querySelector("#slash");
const Z = document.querySelector("#Z");
const N = document.querySelector("#N");
const M = document.querySelector("#M");
const langle = document.querySelector("#langle");
const rangle = document.querySelector("#rangle");
const question = document.querySelector("#question");
const shift = document.querySelector("#shift");
const backspace = document.querySelector("#backspace");
const spacebar = document.querySelector("#spacebar");
const enter = document.querySelector("#enter");
const shiftImage = document.querySelector(".shift-image");
const unshiftImage = document.querySelector(".unshift-image");

// Letters Object
const letters = {
  one: "꯱",
  two:  "꯲",
  three: "꯳",
  four: "꯴",
  five: "꯵",
  six:  "꯶",
  seven:  "꯷",
  eight:  "꯸",
  nine: "꯹",
  zero: "꯰",
  hyphen: "-",
  exclam: "!",
  atTheRate: "@",
  hash : "#",
  dollar: "$",
  percentage: "%",
  upSign: "^",
  and: "&",
  star: "*",
  lbracket: "(",
  rbracket: ")",
  underscore: "꯭",
  q :  "ꯪ",
  w :  "ꯋ",
  e :  "ꯦ",
  r :  "ꯔ",
  t :  "ꯇ",
  y :  "ꯌ",
  u :  "ꯨ",
  i :  "ꯤ",
  o :  "ꯣ",
  p :  "ꯄ",
  bslash :  "\\",
  Q : "ꯈ",
  E : "ꯩ",
  T : "ꯠ",
  U : "ꯎ",
  I : "ꯏ",
  O : "ꯧ",
  P : "ꯞ",
  pipe : "꯫",
  a : "ꯥ",
  s : "ꯁ",
  d : "ꯗ",
  f : "ꯐ",
  g : "ꯒ",
  h : "ꯍ",
  j : "ꯖ",
  k : "ꯀ",
  l : "ꯂ",
  A : "ꯑ",
  D : "ꯙ",
  G : "ꯘ",
  J : "ꯓ",
  K : "ꯛ",
  L : "ꯜ",
  z : "ꯉ",
  x : "ꯊ",
  c : "ꯆ",
  v : "ꯚ",
  b : "ꯕ",
  n : "ꯅ",
  m : "ꯃ",
  comma : ",",
  fullStop : ".",
  slash : "/",
  Z : "ꯡ",
  N : "ꯟ",
  M : "ꯝ",
  langle : "<",
  rangle : ">",
  question : "?",
  spacebar : " ",
  enter : "\n"
}

// Function to toggle the display of Keyboard using F2 and F4
window.addEventListener("keydown", (e) => {
  if(e.key === "F2") {
    keyboard.classList.add("bottom-animation");
    qube.style.height = "18em";
  } else if(e.key === "F4") {
    keyboard.classList.remove("bottom-animation");
    qube.style.height = "5em";
  }
})

// Shift Key Events
window.addEventListener("keydown", (e) => {
  if(e.key === "Shift") {
    lowerCaseLetters.forEach(letter => {
      letter.classList.add("hide");
    })
    upperCaseLetters.forEach(letter => {
      letter.classList.remove("hide");
    })
  }
})

window.addEventListener("keyup", (e) => {
  if(e.key === "Shift") {
    lowerCaseLetters.forEach(letter => {
      letter.classList.remove("hide");
    })
    upperCaseLetters.forEach(letter => {
      letter.classList.add("hide");
    })
  }
})

shift.addEventListener("click", () => {
  lowerCaseLetters.forEach(letter => {
    letter.classList.toggle("hide");
  })
  upperCaseLetters.forEach(letter => {
    letter.classList.toggle("hide");
  })
  shiftImage.classList.toggle("hide");
  unshiftImage.classList.toggle("hide");
})
// KeyPress Events

// Function to append the letter when the key is pressed
const appendLetter = (key, letter) => {
  key.addEventListener("click", () => {
    qube.value += letter;
    qube.scrollTop = qube.scrollHeight;
  })
}

appendLetter(one, letters.one);
appendLetter(two, letters.two);
appendLetter(three, letters.three);
appendLetter(four, letters.four);
appendLetter(five, letters.five);
appendLetter(six, letters.six);
appendLetter(seven, letters.seven);
appendLetter(eight,  letters.eight);
appendLetter(nine,  letters.nine);
appendLetter(zero,  letters.zero);
appendLetter(hyphen,  letters.hyphen);
appendLetter(exclam,  letters.exclam);
appendLetter(atTheRate,  letters.atTheRate);
appendLetter(hash,  letters.hash);
appendLetter(dollar,  letters.dollar);
appendLetter(percentage,  letters.percentage);
appendLetter(upSign,  letters.upSign);
appendLetter(and,  letters.and);
appendLetter(star,  letters.star);
appendLetter(lbracket,  letters.lbracket);
appendLetter(rbracket,  letters.rbracket);
appendLetter(underscore,  letters.underscore);
appendLetter(q,  letters.q);
appendLetter(w,  letters.w);
appendLetter(e,  letters.e);
appendLetter(r,  letters.r);
appendLetter(t,  letters.t);
appendLetter(y,  letters.y);
appendLetter(u,  letters.u);
appendLetter(i,  letters.i);
appendLetter(o,  letters.o);
appendLetter(p,  letters.p);
appendLetter(bslash,  letters.bslash);
appendLetter(Q,  letters.Q);
appendLetter(E,  letters.E);
appendLetter(T,  letters.T);
appendLetter(U,  letters.U);
appendLetter(I,  letters.I);
appendLetter(O,  letters.O);
appendLetter(P,  letters.P);
appendLetter(pipe,  letters.pipe);
appendLetter(a,  letters.a);
appendLetter(s,  letters.s);
appendLetter(d,  letters.d);
appendLetter(f,  letters.f);
appendLetter(g,  letters.g);
appendLetter(h,  letters.h);
appendLetter(j,  letters.j);
appendLetter(k,  letters.k);
appendLetter(l,  letters.l);
appendLetter(A,  letters.A);
appendLetter(D,  letters.D);
appendLetter(G,  letters.G);
appendLetter(J,  letters.J);
appendLetter(K,  letters.K);
appendLetter(L,  letters.L);
appendLetter(z,  letters.z);
appendLetter(x,  letters.x);
appendLetter(c,  letters.c);
appendLetter(v,  letters.v);
appendLetter(b,  letters.b);
appendLetter(n,  letters.n);
appendLetter(m,  letters.m);
appendLetter(comma,  letters.comma);
appendLetter(fullStop,  letters.fullStop);
appendLetter(slash,  letters.slash);
appendLetter(Z,  letters.Z);
appendLetter(N,  letters.N);
appendLetter(M,  letters.M);
appendLetter(langle,  letters.langle);
appendLetter(rangle,  letters.rangle);
appendLetter(question,  letters.question);
appendLetter(spacebar,  letters.spacebar);
appendLetter(enter,  letters.enter);

function backspaceFn()
{
  qube.value = qube.value.slice(0, qube.value.length -1)
}

backspace.addEventListener("click", () => {
  backspaceFn();
})

form.scrollTop = form.scrollHeight - form.clientHeight;