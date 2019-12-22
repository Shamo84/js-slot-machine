var slot1;
var slot2;
var slot3;
var tentativi = 0;
document.getElementById('gioca').addEventListener('click',
  function() {
  slot1 = Math.floor(Math.random() * 6 + 1);
  slot2 = Math.floor(Math.random() * 6 + 1);
  slot3 = Math.floor(Math.random() * 6 + 1);
  if (slot1 == 1) {
    document.getElementById('ciliegia').classList.add("display");
    document.getElementById('banana').classList.remove("display");
    document.getElementById('mela').classList.remove("display");
    document.getElementById('ananas').classList.remove("display");
    document.getElementById('anguria').classList.remove("display");
    document.getElementById('limone').classList.remove("display");
  } else if (slot1 == 2) {
    document.getElementById('ciliegia').classList.remove("display");
    document.getElementById('banana').classList.add("display");
    document.getElementById('mela').classList.remove("display");
    document.getElementById('ananas').classList.remove("display");
    document.getElementById('anguria').classList.remove("display");
    document.getElementById('limone').classList.remove("display");
  } else if (slot1 == 3) {
    document.getElementById('ciliegia').classList.remove("display");
    document.getElementById('banana').classList.remove("display");
    document.getElementById('mela').classList.add("display");
    document.getElementById('ananas').classList.remove("display");
    document.getElementById('anguria').classList.remove("display");
    document.getElementById('limone').classList.remove("display");
  } else if (slot1 == 4) {
    document.getElementById('ciliegia').classList.remove("display");
    document.getElementById('banana').classList.remove("display");
    document.getElementById('mela').classList.remove("display");
    document.getElementById('ananas').classList.add("display");
    document.getElementById('anguria').classList.remove("display");
    document.getElementById('limone').classList.remove("display");
  } else if (slot1 == 5) {
    document.getElementById('ciliegia').classList.remove("display");
    document.getElementById('banana').classList.remove("display");
    document.getElementById('mela').classList.remove("display");
    document.getElementById('ananas').classList.remove("display");
    document.getElementById('anguria').classList.add("display");
    document.getElementById('limone').classList.remove("display");
  } else {
    document.getElementById('ciliegia').classList.remove("display");
    document.getElementById('banana').classList.remove("display");
    document.getElementById('mela').classList.remove("display");
    document.getElementById('ananas').classList.remove("display");
    document.getElementById('anguria').classList.remove("display");
    document.getElementById('limone').classList.add("display");
  }
  if (slot2 == 1) {
    document.getElementById('ciliegia2').classList.add("display");
    document.getElementById('banana2').classList.remove("display");
    document.getElementById('mela2').classList.remove("display");
    document.getElementById('ananas2').classList.remove("display");
    document.getElementById('anguria2').classList.remove("display");
    document.getElementById('limone2').classList.remove("display");
  } else if (slot2 == 2) {
    document.getElementById('ciliegia2').classList.remove("display");
    document.getElementById('banana2').classList.add("display");
    document.getElementById('mela2').classList.remove("display");
    document.getElementById('ananas2').classList.remove("display");
    document.getElementById('anguria2').classList.remove("display");
    document.getElementById('limone2').classList.remove("display");
  } else if (slot2 == 3) {
    document.getElementById('ciliegia2').classList.remove("display");
    document.getElementById('banana2').classList.remove("display");
    document.getElementById('mela2').classList.add("display");
    document.getElementById('ananas2').classList.remove("display");
    document.getElementById('anguria2').classList.remove("display");
    document.getElementById('limone2').classList.remove("display");
  } else if (slot2 == 4) {
    document.getElementById('ciliegia2').classList.remove("display");
    document.getElementById('banana2').classList.remove("display");
    document.getElementById('mela2').classList.remove("display");
    document.getElementById('ananas2').classList.add("display");
    document.getElementById('anguria2').classList.remove("display");
    document.getElementById('limone2').classList.remove("display");
  } else if (slot2 == 5) {
    document.getElementById('ciliegia2').classList.remove("display");
    document.getElementById('banana2').classList.remove("display");
    document.getElementById('mela2').classList.remove("display");
    document.getElementById('ananas2').classList.remove("display");
    document.getElementById('anguria2').classList.add("display");
    document.getElementById('limone2').classList.remove("display");
  } else {
    document.getElementById('ciliegia2').classList.remove("display");
    document.getElementById('banana2').classList.remove("display");
    document.getElementById('mela2').classList.remove("display");
    document.getElementById('ananas2').classList.remove("display");
    document.getElementById('anguria2').classList.remove("display");
    document.getElementById('limone2').classList.add("display");
  }
  if (slot3 == 1) {
    document.getElementById('ciliegia3').classList.add("display");
    document.getElementById('banana3').classList.remove("display");
    document.getElementById('mela3').classList.remove("display");
    document.getElementById('ananas3').classList.remove("display");
    document.getElementById('anguria3').classList.remove("display");
    document.getElementById('limone3').classList.remove("display");
  } else if (slot3 == 2) {
    document.getElementById('ciliegia3').classList.remove("display");
    document.getElementById('banana3').classList.add("display");
    document.getElementById('mela3').classList.remove("display");
    document.getElementById('ananas3').classList.remove("display");
    document.getElementById('anguria3').classList.remove("display");
    document.getElementById('limone3').classList.remove("display");
  } else if (slot3 == 3) {
    document.getElementById('ciliegia3').classList.remove("display");
    document.getElementById('banana3').classList.remove("display");
    document.getElementById('mela3').classList.add("display");
    document.getElementById('ananas3').classList.remove("display");
    document.getElementById('anguria3').classList.remove("display");
    document.getElementById('limone3').classList.remove("display");
  } else if (slot3 == 4) {
    document.getElementById('ciliegia3').classList.remove("display");
    document.getElementById('banana3').classList.remove("display");
    document.getElementById('mela3').classList.remove("display");
    document.getElementById('ananas3').classList.add("display");
    document.getElementById('anguria3').classList.remove("display");
    document.getElementById('limone3').classList.remove("display");
  } else if (slot3 == 5) {
    document.getElementById('ciliegia3').classList.remove("display");
    document.getElementById('banana3').classList.remove("display");
    document.getElementById('mela3').classList.remove("display");
    document.getElementById('ananas3').classList.remove("display");
    document.getElementById('anguria3').classList.add("display");
    document.getElementById('limone3').classList.remove("display");
  } else {
    document.getElementById('ciliegia3').classList.remove("display");
    document.getElementById('banana3').classList.remove("display");
    document.getElementById('mela3').classList.remove("display");
    document.getElementById('ananas3').classList.remove("display");
    document.getElementById('anguria3').classList.remove("display");
    document.getElementById('limone3').classList.add("display");
  }
  if (slot1 == slot2 && slot2 == slot3) {
    document.getElementById('hai-vinto').classList.add("display");
    document.getElementById('ritenta').classList.remove("display");
    tentativi = 0;
    document.getElementById('tentativi').classList.add("hidden");

  } else {
    document.getElementById('hai-vinto').classList.remove("display");
    document.getElementById('ritenta').classList.add("display");
    tentativi += 1;
    document.getElementById('tentativi').innerHTML = tentativi;
    document.getElementById('tentativi').classList.remove("hidden");


  }
});
