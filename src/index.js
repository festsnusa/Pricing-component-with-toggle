import './fonts/fonts.scss'
import './main.scss'
import './components/toggle/toggle.scss'
import './components/card/card.scss'

const annuallyPrices = [199.99, 249.99, 399.99],
  monthlyPrices = [19.99, 24.99, 39.99]

let toggle = document.querySelector('.toggle__input'),
 prices = document.querySelectorAll('.card__price')

toggle.addEventListener('click', () => {

  prices.forEach((element, i) => {
    element.innerText = (toggle.checked) ? monthlyPrices[i] : annuallyPrices[i]
  })

})