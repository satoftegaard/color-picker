let hue = 360
let saturation = 100
let light = 50
let alpha = 1

// hsla(360, 100%, 50%, 1)
const getHSL = () => {
  return `hsla(${hue}, ${saturation}%, ${light}%, ${alpha})`
}
const main = () => {
  const swatch = document.querySelector('.box')

  const hueInput = document.querySelector('input[name=hue]')
  hueInput.addEventListener('input', () => {
    hue = hueInput.value
    swatch.style.backgroundColor = getHSL()
    document.querySelector('p').textContent = getHSL()
  })

  const satInput = document.querySelector('input[name=saturation]')
  satInput.addEventListener('input', () => {
    saturation = satInput.value
    swatch.style.backgroundColor = getHSL()
    document.querySelector('p').textContent = getHSL()
  })

  const lightInput = document.querySelector('input[name=light]')
  lightInput.addEventListener('input', () => {
    light = lightInput.value
    swatch.style.backgroundColor = getHSL()
    document.querySelector('p').textContent = getHSL()
  })

  const alphaInput = document.querySelector('input[name=alpha]')
  alphaInput.addEventListener('input', () => {
    alpha = alphaInput.value
    swatch.style.backgroundColor = getHSL()
    document.querySelector('p').textContent = getHSL()
  })
}
document.addEventListener('DOMContentLoaded', main)
