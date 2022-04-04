const keyboard = document.querySelector(".keyboard");
const qube = document.querySelector("#qube");
const tip = document.querySelector(".tip");
const lowerCaseLetters = document.querySelectorAll(".lowerCase");
const upperCaseLetters = document.querySelectorAll(".upperCase");
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
// Old Keys
const oldOne = document.querySelector("#old-one");
const oldTwo = document.querySelector("#old-two");
const oldThree = document.querySelector("#old-three");
const oldFour = document.querySelector("#old-four");
const oldFive = document.querySelector("#old-five");
const oldSix = document.querySelector("#old-six");
const oldSeven = document.querySelector("#old-seven");
const oldEight = document.querySelector("#old-eight");
const oldNine = document.querySelector("#old-nine");
const oldZero = document.querySelector("#old-zero");
const oldHyphen = document.querySelector("#old-hyphen");
const oldExclam = document.querySelector("#old-exclam");
const oldAtTheRate = document.querySelector("#old-at-the-rate");
const oldHash = document.querySelector("#old-hash");
const oldDollar = document.querySelector("#old-dollar");
const oldPercentage = document.querySelector("#old-percentage");
const oldUpSign = document.querySelector("#old-up-sign");
const oldAnd = document.querySelector("#old-and");
const oldStar = document.querySelector("#old-star");
const oldLbracket = document.querySelector("#old-lbracket");
const oldRbracket = document.querySelector("#old-rbracket");
const oldUnderscore = document.querySelector("#old-underscore");
const  oldq= document.querySelector("#old-q");
const  oldw= document.querySelector("#old-w");
const  olde= document.querySelector("#old-e");
const  oldr= document.querySelector("#old-r");
const  oldt= document.querySelector("#old-t");
const  oldy= document.querySelector("#old-y");
const  oldu= document.querySelector("#old-u");
const  oldi= document.querySelector("#old-i");
const  oldo= document.querySelector("#old-o");
const  oldp= document.querySelector("#old-p");
const  oldBslash= document.querySelector("#old-bslash");
const  oldQ= document.querySelector("#old-Q");
const  oldW= document.querySelector("#old-W");
const  oldE= document.querySelector("#old-E");
const  oldR= document.querySelector("#old-R");
const  oldT= document.querySelector("#old-T");
const  oldY= document.querySelector("#old-Y");
const  oldU= document.querySelector("#old-U");
const  oldI= document.querySelector("#old-I");
const  oldO= document.querySelector("#old-O");
const  oldP= document.querySelector("#old-P");
const  oldPipe= document.querySelector("#old-pipe");
const olda = document.querySelector("#old-a");
const olds = document.querySelector("#old-s");
const oldd = document.querySelector("#old-d");
const oldf = document.querySelector("#old-f");
const oldg = document.querySelector("#old-g");
const oldh = document.querySelector("#old-h");
const oldj = document.querySelector("#old-j");
const oldk = document.querySelector("#old-k");
const oldl = document.querySelector("#old-l");
const oldA = document.querySelector("#old-A");
const oldS = document.querySelector("#old-S");
const oldD = document.querySelector("#old-D");
const oldF = document.querySelector("#old-F");
const oldG = document.querySelector("#old-G");
const oldH = document.querySelector("#old-H");
const oldJ = document.querySelector("#old-J");
const oldz = document.querySelector("#old-z");
const oldx = document.querySelector("#old-x");
const oldc = document.querySelector("#old-c");
const oldv = document.querySelector("#old-v");
const oldb = document.querySelector("#old-b");
const oldn = document.querySelector("#old-n");
const oldm = document.querySelector("#old-m");
const oldComma = document.querySelector("#old-comma");
const oldFullStop = document.querySelector("#old-full-stop");
const oldSlash = document.querySelector("#old-slash");
const oldLangle = document.querySelector("#old-langle");
const oldRangle = document.querySelector("#old-rangle");
const oldQuestion = document.querySelector("#old-question");

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
}

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
  // New Keyboard
  one.innerText = letters.one;
  two.innerText = letters.two;
  three.innerText = letters.three
  four.innerText = letters.four;
  five.innerText = letters.five;
  six.innerText = letters.six;
  seven.innerText = letters.seven;
  eight.innerText = letters.eight;
  nine.innerText = letters.nine;
  zero.innerText = letters.zero;
  hyphen.innerText = letters.hyphen;
  exclam.innerText = letters.exclam;
  atTheRate.innerText = letters.atTheRate;
  hash.innerText = letters.hash;
  dollar.innerText = letters.dollar;
  percentage.innerText = letters.percentage;
  upSign.innerText = letters.upSign;
  and.innerText = letters.and;
  star.innerText = letters.star;
  lbracket.innerText = letters.lbracket;
  rbracket.innerText = letters.rbracket;
  underscore.innerText = letters.underscore;

  // Old Keyboard
  oldOne.innerText = letters.one;
  oldTwo.innerText = letters.two;
  oldThree.innerText = letters.three
  oldFour.innerText = letters.four;
  oldFive.innerText = letters.five;
  oldSix.innerText = letters.six;
  oldSeven.innerText = letters.seven;
  oldEight.innerText = letters.eight;
  oldNine.innerText = letters.nine;
  oldZero.innerText = letters.zero;
  oldHyphen.innerText = letters.hyphen;
  oldExclam.innerText = letters.exclam;
  oldAtTheRate.innerText = letters.atTheRate;
  oldHash.innerText = letters.hash;
  oldDollar.innerText = letters.dollar;
  oldPercentage.innerText = letters.percentage;
  oldUpSign.innerText = letters.upSign;
  oldAnd.innerText = letters.and;
  oldStar.innerText = letters.star;
  oldLbracket.innerText = letters.lbracket;
  oldRbracket.innerText = letters.rbracket;
  oldUnderscore.innerText = letters.underscore;

  // 2nd Row
  // New Keyboard
  q.innerText = letters.q;
  w.innerText = letters.w;
  e.innerText = letters.e;
  r.innerText = letters.r;
  t.innerText = letters.t;
  y.innerText = letters.y;
  u.innerText = letters.u;
  i.innerText = letters.i;
  o.innerText = letters.o;
  p.innerText = letters.p;
  bslash.innerText = letters.bslash;
  Q.innerText = letters.Q;
  E.innerText = letters.E;
  T.innerText = letters.T;
  U.innerText = letters.U;
  I.innerText = letters.I;
  O.innerText = letters.O;
  P.innerText = letters.P;
  pipe.innerText = letters.pipe;

  // Old Keyboard
  oldq.innerText = letters.k;
  oldw.innerText = letters.s;
  olde.innerText = letters.l;
  oldr.innerText = letters.m;
  oldt.innerText = letters.p;
  oldy.innerText = letters.n;
  oldu.innerText = letters.c;
  oldi.innerText = letters.t;
  oldo.innerText = letters.Q;
  oldp.innerText = letters.z;
  oldBslash.innerText = letters.bslash;
  oldQ.innerText = letters.v;
  oldW.innerText = letters.K;
  oldE.innerText = letters.L;
  oldR.innerText = letters.M;
  oldT.innerText = letters.P;
  oldY.innerText = letters.N;
  oldU.innerText = letters.T;
  oldI.innerText = letters.Z;
  oldO.innerText = letters.I;
  oldP.innerText = letters.a;
  oldPipe.innerText = letters.pipe;
  
  // 3rd Row
  // New Keyboard
  a.innerText = letters.a;
  s.innerText = letters.s;
  d.innerText = letters.d;
  f.innerText = letters.f;
  g.innerText = letters.g;
  h.innerText = letters.h;
  j.innerText = letters.j;
  k.innerText = letters.k;
  l.innerText = letters.l;
  A.innerText = letters.A;
  D.innerText = letters.D;
  G.innerText = letters.G;
  J.innerText = letters.J;
  K.innerText = letters.K;
  L.innerText = letters.L;

  // Old Keyboard
  olda.innerText = letters.x;
  olds.innerText = letters.w;
  oldd.innerText = letters.y;
  oldf.innerText = letters.h;
  oldg.innerText = letters.U;
  oldh.innerText = letters.I;
  oldj.innerText = letters.f;
  oldk.innerText = letters.A;
  oldl.innerText = letters.g;
  oldA.innerText = letters.i;
  oldS.innerText = letters.u;
  oldD.innerText = letters.e;
  oldF.innerText = letters.E;
  oldG.innerText = letters.o;
  oldH.innerText = letters.O;
  oldJ.innerText = letters.q;

  // 4th Row
  // New Keyboard
  z.innerText = letters.z;
  x.innerText = letters.x;
  c.innerText = letters.c;
  v.innerText = letters.v;
  b.innerText = letters.b;
  n.innerText = letters.n;
  m.innerText = letters.m;
  comma.innerText = letters.comma;
  fullStop.innerText = letters.fullStop;
  slash.innerText = letters.slash;
  Z.innerText = letters.Z;
  N.innerText = letters.N;
  M.innerText = letters.M;
  langle.innerText = letters.langle;
  rangle.innerText = letters.rangle;
  question.innerText = letters.question;

  // Old Keyboard
  oldz.innerText = letters.J;
  oldx.innerText = letters.r;
  oldc.innerText = letters.b;
  oldv.innerText = letters.j;
  oldb.innerText = letters.d;
  oldn.innerText = letters.G;
  oldm.innerText = letters.d;
  oldComma.innerText = letters.comma;
  oldFullStop.innerText = letters.fullStop;
  oldSlash.innerText = letters.slash;
  oldLangle.innerText = letters.langle;
  oldRangle.innerText = letters.rangle;
  oldQuestion.innerText = letters.question;
}

lowerCase();

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
// KeyPress Events

// Function to append the letter when the key is pressed
const appendLetter = (key, letter) => {
  key.addEventListener("click", () => {
    qube.value += letter;
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