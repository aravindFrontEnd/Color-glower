const container = document.getElementById('container')

const colors = [
  '#8c0e34',
  '#77d2f6',
  '#6137aa',
  '#d0eb43',
  '#660668',
  '#01e3b7',
  '#f947e7',
]

const SQUARES = 500

for (let i = 0; i < SQUARES; i++) {
  const box = document.createElement('div')
  box.classList.add('box')

  box.addEventListener('mouseenter', () => fillColors(box))
  box.addEventListener('mouseleave', () => emptyColors(box))

  container.appendChild(box)
}

const fillColors = (element) => {
  element.style.background = `${randomColors()}`
//   element.style.boxShadow = `0 0 2px ${randomColors()} `
}

const emptyColors = (element) => {
  element.style.background = `#1d1d1d`;
   element.style.boxShadow = `0 0 2px #000;`
}

const randomColors = () => {
  return colors[Math.floor(Math.random() * colors.length)]
}
