// Your code here
const table =  document.getElementsByTagName('table')[0]
const button = document.getElementById('add-row')
const select = document.getElementsByTagName('select')[0]
let defaultColor = 'red'

function makeRow(){
    const tr = document.createElement('tr')
    for (let i = 0; i < 20; i++){
        const td = document.createElement('td')
        tr.appendChild(td)
    }
    table.appendChild(tr)
}

function colorize(event){
    let target = event.target
    if(target.className.length){
        target.className = ''
    }else{
        target.className = defaultColor
    }
}


button.addEventListener('click', makeRow)

table.addEventListener('click', colorize)

select.addEventListener("change", (event) =>{
    defaultColor = event.target.value
})