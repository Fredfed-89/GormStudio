const text = document.querySelector('.circle__text-btn');
    text.innerHTML = text.innerText.split("").map(
      (char, i) =>
      `<span style="transform: rotate(${i * 23}deg)">${char}</span>`
    ).join("")
