const columns = document.querySelectorAll('.column')

document.addEventListener('keydown', (event) => {
    event.preventDefault(  )
if (event.code.toLowerCase() === 'space') {
    setColor()
}
})

document.addEventListener('click', event => {
    const type = event.target.dataset.type
    if (type === 'lock') {
        const node = event.target.tagName.toLowerCase() === 'i'
        ? event.target
        : event.target.children[0]

        node.classList.toggle('fa-lock-open')
        node.classList.toggle('fa-lock')
    } else if (type === 'copy') {
        copyToClipboard(event.target.textContent)
    }
})

// generate random color
function generateRandomColor() {
const hexCodes = '0123456789ABCDEF'
let color = ''
for (i=0; i<6; i++) {
    color += hexCodes[Math.floor(Math.random() * hexCodes.length)]
}
return '#' + color
}

// copy color to clipboard
function copyToClipboard(text) {
    return navigator.clipboard.writeText(text)
}


// set random color for each column and write name of color in h2
function setColor() {
    const colors = []
    columns.forEach(column => {
        const isLocked = column.querySelector('i').classList.contains('fa-lock')
        if (isLocked) {
            colors.push()
            return
        }

        const color = generateRandomColor()  

        const colorHexName = column.querySelector('h2')
        const lockIcon = column.querySelector('button')

        colorHexName.textContent = color
        column.style.backgroundColor = color

        setTextColor(colorHexName, color)
        setTextColor(lockIcon, color)
});
}


// change color of h2 (if color of column dark - text color white, if color of column light - text color black)
function setTextColor(text, color) {
const luminance = chroma(color).luminance()
text.style.color = luminance > 0.5 ? 'black' : 'white'
}


setColor()