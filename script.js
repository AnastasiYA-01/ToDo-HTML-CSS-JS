
const inputEl = (document.getElementsByClassName('app__controls-input'))[0]
const btnEl = (document.getElementsByClassName('app__controls-button'))[0]
const listEl = (document.getElementsByClassName('app__list'))[0]


function createTask(someText) {
    const root = document.createElement('div')
    root.classList.add('app__list-item')


    const input = document.createElement('input')
    input.classList.add('app__list-checkbox')

    input.type = 'checkbox'

    const txt = document.createElement('p')
    txt.classList.add('app__list-item-text')
    txt.innerText = someText

    const btn = document.createElement('button')
    btn.classList.add('app__list-btn')

    const img = document.createElement('img')
    img.src = './12.png'
    img.alt = 'trash'
    img.width = 20

    btn.appendChild(img)

    root.appendChild(input)
    root.appendChild(txt)
    root.appendChild(btn)
    return root
}

btnEl.addEventListener('click', () => {
    const textValue = inputEl.value
    const taskEl = createTask(textValue)
    listEl.appendChild(taskEl)
    inputEl.value = ''
})

