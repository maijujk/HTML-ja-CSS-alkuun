function sendMsg(event) {
  event.preventDefault(); // Estää sivun latauksen ja URL-muutoksen

  // Haetaan arvot kentistä id:n perusteella
  var n = document.getElementById("name").value;
  var e = document.getElementById("email").value;
  var m = document.getElementById("msg").value;

  // Tarkistaa ettei ole tyhjä
  if (n === "" || e === "" || m === "") {
    return;
  }

  console.log({ nimi: n, email: e, viesti: m });

  // Viesti pop-up ikkunaan
  alert("Hei " + n + "!" + "\nKiitos viestistäsi.");

  // Tyhjennetään kentät
  document.getElementById("name").value = "";
  document.getElementById("email").value = "";
  document.getElementById("msg").value = "";
}
