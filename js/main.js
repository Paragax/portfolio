console.log("Hello World");

const tpl = document.getElementById("socials-template");

["socials-header", "socials-footer"].forEach((id) => {
  document.getElementById(id).appendChild(tpl.content.cloneNode(true));
});
