const tree_container = document.createElement("pre")
const main_container = document.querySelector(".main-container")

const createTree = (size) =>{
    for (let i = 0; i < size; i++){
        const span_element = document.createElement("span")
        const branch = i ===0 || i=== size-1 ? "*\n": `${"*".repeat(i*2)}\n`
        span_element.textContent = branch;
        tree_container.appendChild(span_element)
    }
    main_container.appendChild(tree_container) 
     
}

const randomValue = (max, min = 1) => {
    return Math.floor(Math.random() * max) +1
}

const createSnow = (density) => {
    for (let i = 0; i < density; i++) {
        const snow_flake = document.createElement("span")
        const random_horizontal = `${randomValue(100)}%`
        const random_delay = `${randomValue(100)}s`
        const random_duration = `${randomValue(20,5)}s`
        const random_size = `${randomValue(7,1)}px`
        const random_opacity = Math.random().toFixed(2)

        snow_flake.classList.add("snow")
        snow_flake.style.width = random_size
        snow_flake.style.height = random_size
        snow_flake.style.opacity = random_opacity
        snow_flake.style.animation = `fall ${random_duration} ${random_delay} linear  infinite`;
        snow_flake.style.right = random_horizontal
        main_container.appendChild(snow_flake)
        }
    }
    
createTree(12)
createSnow(300)