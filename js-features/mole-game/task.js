const dead = document.getElementById("dead");
const lost = document.getElementById("lost");

function getHole(index) {
    return document.getElementById(`hole${index}`);
}

for (let index = 1; index < 9; index++) {
    let mole = getHole(index);

    mole.onclick = function() {
      if (dead.textContent < 10 & lost.textContent < 5) {
        if (this.className == "hole hole_has-mole") {
          dead.textContent++ + 1;
        } else {
          lost.textContent++ + 1;
        }
      } else if (dead.textContent >= 10) {
        alert('Вы выйграли');
        dead.textContent = 0;
        lost.textContent = 0;
      } else if (lost.textContent >= 5){
        alert('Вы проиграли');
        dead.textContent = 0;
        lost.textContent = 0;
       }
    }
}
