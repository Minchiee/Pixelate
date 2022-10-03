// Your code here
const table =  document.getElementsByTagName('table')[0]
const button = document.getElementsById('add-row')

function makeRow(){
    const tr = document.createElement('tr')
    for (let i = 0; i < 20; i++){
        const td = document.createElement('td')
        tr.appendChild(td)
    }
    table.appendChild(tr)
}

button.addEventListener('click', makeRow())
