import {
  createElement,
  createHeader,
} from '../../script/layout'

const page = document.querySelector('.page')

//------------------------------------------------

const header = createHeader()
page.append(header)

//------------------------------------------------

const title = createElement('h1', 'title', `Ком'юніті`)
page.append(title)

//------------------------------------------------

const main = createElement('main', 'main')

//------------------------------------------------

const TAB_LIST = [
  {
    text: `База знань`,
    isActive: true,
    href: `https://www.google.com`,
  },
  {
    text: `Інформація`,
    isActive: false,
    href: `https://www.google.com`,
  },
]

const createTabGroup = () => {
  const tabList = createElement('div', 'tab__list')

  TAB_LIST.forEach((params) => {
    let active = null
    if (params.isActive) {
      active = `tab--active`
    } else null

    const tab = createElement(
      'a',
      `tab ${active}`,
      params.text,
    )
    tab.href = params.href

    tabList.append(tab)
  })

  return tabList
}

const tabList = createTabGroup()

main.append(tabList)

//------------------------------------------------

const image = createElement('img', 'cover-img')
image.src = '/img/cover-img.png'
main.append(image)

//------------------------------------------------

const infoField = createElement('div', 'info')

const infoTitle = createElement(
  'h2',
  'info__title',
  `Що таке база знань?`,
)

const infoContent = createElement(
  'p',
  'info__content',
  `Ба́за зна́нь, БЗ — це особливого роду база даних, розроблена для управління знаннями, тобто збором, зберіганням, пошуком і видачею знань. Розділ штучного інтелекту, що вивчає бази даних і методи роботи із знаннями, називається інженерією знань.`,
)

infoField.append(infoTitle, infoContent)
main.append(infoField)

//------------------------------------------------

const button = createElement(
  'a',
  'button button--big',
  `Перейти у ком'юніті у Телеграм`,
)
button.href = '/page01'

main.append(button)

//------------------------------------------------

page.append(main)
