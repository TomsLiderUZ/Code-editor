function createNumberEncryptor() {
  const chars =
    "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";

  function toBase62(num) {
    let res = "";
    while (num > 0) {
      res = chars[num % 62] + res;
      num = Math.floor(num / 62);
    }
    return res || "0";
  }

  function fromBase62(str) {
    let num = 0;
    for (let c of str) {
      num = num * 62 + chars.indexOf(c);
    }
    return num;
  }

  function encrypt(text) {
    return [...text]
      .map((c) => {
        const code = c.codePointAt(0);
        const salt = Math.floor(Math.random() * 62);
        return toBase62(salt) + toBase62(code + salt);
      })
      .join("-");
  }

  function decrypt(encrypted) {
    return encrypted
      .split("-")
      .map((s) => {
        const salt = fromBase62(s[0]);
        const code = fromBase62(s.slice(1)) - salt;
        return String.fromCodePoint(code);
      })
      .join("");
  }

  return { encrypt, decrypt };
}

//USE
const encryptor = createNumberEncryptor();
// const encrypted = encryptor.encrypt();
// const decrypted = encryptor.decrypt();

const params = new URLSearchParams(window.location.search);

document.addEventListener("DOMContentLoaded", () => {
  // O'chirilishi kerak bo'lgan src lar
  const removeList = ["./conector.js", "./encryptor.js"];

  // Barcha <script> larni tekshirish
  document.querySelectorAll("script").forEach(script => {
    if (removeList.includes(script.getAttribute("src"))) {
      script.remove();

    }
  });
});


function ensureTitle() {
  if (!document.title) {
    const titleEl = document.createElement("title");

    const date = new Date();

    // Formatlash
    const day = String(date.getDate()).padStart(2, "0");
    const month = String(date.getMonth() + 1).padStart(2, "0"); // oy 0 dan boshlanadi
    const year = date.getFullYear();
    const hours = String(date.getHours()).padStart(2, "0");
    const minutes = String(date.getMinutes()).padStart(2, "0");
    const seconds = String(date.getSeconds()).padStart(2, "0");
    const formattedDate = `${day}/${month}/${year} | ${hours}:${minutes}:${seconds}`;
    // Title text
    titleEl.textContent = `${formattedDate} - Document`;
    document.head.appendChild(titleEl);
  }
}

if (params.has("key") && params.get("key")) {
  const encrypted = params.get("key");
  const decrypted = encryptor.decrypt(encrypted);
  document.write(decrypted);
  ensureTitle();
} else if (params.has("code") && params.get("code")) {
  const code = params.get("code");
  document.write(code);
  ensureTitle();
} else {
  document.write(`
    <html>
      <head>
        <title>600 Result Error</title>
        <style>
          body {
            background-color: #000;
            color: #fff;
            font-size: 50px;
            margin: 0;
            padding: 0;
            width: 100%;
            height: 100vh;
            display: flex;
            justify-content: center;
            align-items: center;
            text-align: center;
            line-height: 1.6;
            font-family: sans-serif;
          }
        </style>
      </head>
      <body><p>600 Result Error</p></body>
    </html>
  `);
}
