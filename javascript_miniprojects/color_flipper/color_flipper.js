const body=document.getElementsByTagName("body")[0]

function red(){
    body.style.backgroundColor="red"
}

function green(){
    body.style.backgroundColor="green"
}

function blue(){
    body.style.backgroundColor="blue"
}

function randomrgb(){
    const red=Math.round(Math.random()*255)
    const blue=Math.round(Math.random()*255)
    const green=Math.round(Math.random()*255)

    return `rgb(${red},${green},${blue})`

}

function random(){
    body.style.backgroundColor=randomrgb()
}