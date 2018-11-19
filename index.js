const getRandomPixelPosition = () => {
  return {
    x: Math.floor(Math.random() * window.innerWidth) + 'px',
    y: Math.floor(Math.random() * window.innerHeight) + 'px'
  }
}

const demoUrls = [
  'https://i.imgur.com/frFzz7e.gif',
  'https://ubisafe.org/images/gif-transparent-1.gif'
]

const Steve = () => {
  let $steve = document.createElement('img')
  const search = window.location.search.split('?urls=')[1]
  const urls = search ? search.split(',') : demoUrls
  $steve.src = urls[Math.floor(Math.random() * urls.length)]
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