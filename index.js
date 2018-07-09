const getRandomPixelPosition = () => {
  return {
    x: Math.floor(Math.random() * window.innerWidth) + 'px',
    y: Math.floor(Math.random() * window.innerHeight) + 'px'
  }
}

const Steve = () => {
  let $steve = document.createElement('img')
  $steve.src = './steve.gif'
  $steve.classList.add('steve')
  const {x, y} = getRandomPixelPosition()
  $steve.style.left = x
  $steve.style.top = y
  document.body.appendChild($steve)
  $steve.addEventListener('animationend', () => {
    document.body.removeChild($steve)
  })
}

const go = () => {
  setInterval(Steve, 200)
}

go()