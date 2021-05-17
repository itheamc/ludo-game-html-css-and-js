const divs = document.querySelectorAll(".child");
const board = document.getElementById("board");
let r = 23
let y = 128
let g = 107
let b = 114
let cells_4_right_bottom_border = [7, 8, 9, 22, 23, 24, 37, 38, 39, 52, 53, 54, 67, 68, 69, 82, 83, 84, 91, 92, 93, 94, 95, 96, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 130, 131, 132, 133, 134, 135, 142, 143, 144, 157, 158, 159, 172, 173, 174, 187, 188, 189, 202, 203, 204, 217, 218, 219]
let cells_4_right_border = [6, 21, 36, 51, 66, 81, 114, 141, 156, 171, 186, 201, 216]
let cells_4_bottom_border = [76, 77, 78, 79, 80, 81, 85, 86, 87, 88, 89, 90, 128]
// console.log(divs)

divs.forEach(element => {
    console.log(element.x)
    element.addEventListener('click', (e) => {
        console.log(e)
    })
});

// Creating the plus sign of the quad color
for (let i = 1; i <= (15 * 15); i++) {
    const cell = document.createElement("div");
    // cell.innerText = i
    if (i === r && i < 113) {
        r = r + 15
        cell.classList.add('red')
    } else if (i === y && i < 218) {
        y = y + 15
        cell.classList.add('yellow')
    } else if (i === g && i < 113) {
        g = g + 1
        cell.classList.add('green')
    } else if (i === b && i < 120) {
        b = b + 1
        cell.classList.add('skyblue')
    } else {
        if ((i >= 1 && i < 7) || (i >= 76 && i < 82) || i === 16 || i === 31 || i === 46 || i === 61 || i === 92 || i === 21 || i === 36 || i === 51 || i === 66) {
        cell.classList.add('green')
        } else if ((i > 9 && i <= 15) || (i > 84 && i <= 90) || i === 24 || i === 25 || i === 40 || i === 55 || i === 70 || i === 30 || i === 45 || i === 60 || i === 75) {
            cell.classList.add('red')
        } else if ((i > 144 && i <= 150) || (i > 219 && i <= 225) || i === 160 || i === 175 || i === 190 || i === 205 || i === 134 || i === 165 || i === 180 || i === 195 || i === 210) {
            cell.classList.add('skyblue')
        } else if ((i >= 136 && i < 142) || (i >= 211 && i < 217) || i === 151 || i === 166 || i === 181 || i === 196 || i === 202 || i === 156 || i === 171 || i === 186 || i === 201) {
            cell.classList.add('yellow')
        } else if (i === 113) {
            cell.classList.add('center')
        } else if (i === 97) {
            cell.classList.add('red-green')
        } else if (i === 99) {
            cell.classList.add('red-skyblue')
        } else if (i === 127) {
            cell.classList.add('green-yellow')
        } else if (i === 129) {
            cell.classList.add('yellow-skyblue')
        } else {
            cell.classList.add('child')
        }
    }


    if (cells_4_right_bottom_border.includes(i)) {
        cell.style.borderRight = '0.5px solid lightblue'
        cell.style.borderBottom = '0.5px solid lightblue'

    }

    if (cells_4_right_border.includes(i)) {
        cell.style.borderRight = '0.5px solid lightblue'
    }

    if (cells_4_bottom_border.includes(i)) {
        cell.style.borderBottom = '0.5px solid lightblue'
    }

    
    board.appendChild(cell)
}

const main = (ctime) => {
// window.requestAnimationFrame(main)
    console.log(ctime)
// window.requestAnimationFrame(main)
}

window.requestAnimationFrame(main)
