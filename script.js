const roles = ["Back-End Developer", "Full Stack Developer", "Freelancer"];
let i = 0, j = 0, current = "", isDeleting = false;

function typeEffect() {
  const typing = document.getElementById("typing");

  if (!typing) return;

  if (!isDeleting && j < roles[i].length) {
    current += roles[i].charAt(j);
    j++;
  } else if (isDeleting && j > 0) {
    current = current.substring(0, j - 1);
    j--;
  }

  typing.textContent = current;

  let speed = isDeleting ? 60 : 120;

  if (j === roles[i].length && !isDeleting) {
    isDeleting = true;
    speed = 1000;
  } else if (j === 0 && isDeleting) {
    isDeleting = false;
    i = (i + 1) % roles.length;
    speed = 300;
  }

  setTimeout(typeEffect, speed);
}

typeEffect();
