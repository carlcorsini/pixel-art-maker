var squaresClass = document.getElementsByClassName("squares")[0].classList;
  console.log(squaresClass)
let button = document.querySelector('button')
console.log(button)
let squares = document.getElementsByClassName('squares')[0];
let palette = document.getElementsByClassName('palette')[0];
let indicator = document.getElementsByClassName('indicator')[0];
let color = 'white';
let colorPalette = ['blue', 'red', 'green', 'orange', 'yellow', 'pink', 'purple', 'violet', 'indigo', 'grey', 'beige', 'MediumSlateBlue', 'NavajoWhite', 'PaleGoldenRod']


// square loop
for (var i = 0; i < 1215; i++) {
  let divSquare = document.createElement('div');
  divSquare.classList.add('square');
  squares.appendChild(divSquare);
}


// palette loop
for (var i = 0; i < colorPalette.length; i++) {
  let divCircle = document.createElement('div');
  divCircle.classList.add('circle');
  divCircle.style.backgroundColor = colorPalette[i]
  palette.appendChild(divCircle);
}

button.addEventListener('click', event => {
  for (var i = 0; i < 1215; i++) {
  document.getElementsByClassName('square')[i].style.backgroundColor = 'white';
  }
  })


//   let drag = document.getElementsByClassName('hey')[0]
//   drag.addEventListener('mouseover', event => {
//     event.target.style.backgroundColor = color
// });

  squares.addEventListener('click', event => {
    event.target.style.backgroundColor = color;
  })

  palette.addEventListener('click', event => {
      color = event.target.style.backgroundColor;
      indicator.style.backgroundColor = color
  })


//   var onMouseMove = function(event) {
//
//     beard.style.top = event.clientY + "px";
//     beard.style.left = event.clientX + "px";
//
// };
