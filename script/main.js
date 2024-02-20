let count = 1
const parent = document.querySelectorAll(".element")
setInterval( () => {
    const current = document.querySelector(".current")

    count++

    current.classList.remove('current')
    if( count > parent.length){
        parent[0].classList.add("current")
        count = 1
    }else{

        current.nextElementSibling.classList.add('current')
    }

},2000)