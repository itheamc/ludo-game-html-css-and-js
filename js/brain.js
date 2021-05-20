const divs = document.querySelectorAll(".child");
const board = document.getElementById('board');
const inner_board = document.getElementById('inner-board')

/**
 * Blue tickets
 */
const blue_ticket_one = document.getElementById('blue-ticket-1')
const blue_ticket_two = document.getElementById('blue-ticket-2')
const blue_ticket_three = document.getElementById('blue-ticket-3')
const blue_ticket_four = document.getElementById('blue-ticket-4')

/**
 * Yellow Tickets
 */
 const yellow_ticket_one = document.getElementById('yellow-ticket-1')
 const yellow_ticket_two = document.getElementById('yellow-ticket-2')
 const yellow_ticket_three = document.getElementById('yellow-ticket-3')
 const yellow_ticket_four = document.getElementById('yellow-ticket-4')


/**
 * Green Tickets
 */
 const green_ticket_one = document.getElementById('green-ticket-1')
 const green_ticket_two = document.getElementById('green-ticket-2')
 const green_ticket_three = document.getElementById('green-ticket-3')
 const green_ticket_four = document.getElementById('green-ticket-4')

/**
 * Red Tickets
 */
 const red_ticket_one = document.getElementById('red-ticket-1')
 const red_ticket_two = document.getElementById('red-ticket-2')
 const red_ticket_three = document.getElementById('red-ticket-3')
 const red_ticket_four = document.getElementById('red-ticket-4')

let r = 23
let y = 128
let g = 107
let b = 114
let cells_4_right_bottom_border = [7, 8, 9, 22, 23, 24, 37, 38, 39, 52, 53, 54, 67, 68, 69, 82, 83, 84, 91, 92, 93, 94, 95, 96, 100, 101, 102, 103, 104, 105, 106, 107, 108, 109, 110, 111, 115, 116, 117, 118, 119, 120, 121, 122, 123, 124, 125, 126, 130, 131, 132, 133, 134, 135, 142, 143, 144, 157, 158, 159, 172, 173, 174, 187, 188, 189, 202, 203, 204, 217, 218, 219]
let cells_4_right_border = [6, 21, 36, 51, 66, 81, 114, 141, 156, 171, 186, 201, 216]
let cells_4_bottom_border = [76, 77, 78, 79, 80, 81, 85, 86, 87, 88, 89, 90, 128]
// console.log(divs)

/**
 * -------------------------------------------------------------------------------
 * These are the arrays that contains the paths
 * -------------------------------------------------------------------------------
 */
 const green_paths = [{x: 7, y: 2}, {x: 7, y: 3}, {x: 7, y: 4}, {x: 7, y: 5}, {x: 7, y: 6}, {x: 6, y: 7}, {x: 5, y: 7}, {x: 4, y: 7}, {x: 3, y: 7}, {x: 2, y: 7}, {x: 1, y: 7}, {x: 1, y: 8}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, {x: 5, y: 9}, {x: 6, y: 9}, {x: 7, y: 10}, {x: 7, y: 11}, {x: 7, y: 12}, {x: 7, y: 13}, {x: 7, y: 14}, {x: 7, y: 15}, {x: 8, y: 15}, {x: 9, y: 15}, {x: 9, y: 14}, {x: 9, y: 13}, {x: 9, y: 12}, {x: 9, y: 11}, {x: 9, y: 10}, {x: 10, y: 9}, {x: 11, y: 9}, {x: 12, y: 9}, {x: 13, y: 9}, {x: 14, y: 9}, {x: 15, y: 9}, {x: 15, y: 8}, {x: 15, y: 7}, {x: 14, y: 7}, {x: 13, y: 7}, {x: 12, y: 7}, {x: 11, y: 7}, {x: 10, y: 7}, {x: 9, y: 6}, {x: 9, y: 5}, {x: 9, y: 4}, {x: 9, y: 3}, {x: 9, y: 2}, {x: 9, y: 1}, {x: 8, y: 1}, {x: 8, y: 2}, {x: 8, y: 3}, {x: 8, y: 4}, {x: 8, y: 5}, {x: 8, y: 6}, {x: 8, y: 7}]
 const red_paths = [{x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, {x: 5, y: 9}, {x: 6, y: 9}, {x: 7, y: 10}, {x: 7, y: 11}, {x: 7, y: 12}, {x: 7, y: 13}, {x: 7, y: 14}, {x: 7, y: 15}, {x: 8, y: 15}, {x: 9, y: 15}, {x: 9, y: 14}, {x: 9, y: 13}, {x: 9, y: 12}, {x: 9, y: 11}, {x: 9, y: 10}, {x: 10, y: 9}, {x: 11, y: 9}, {x: 12, y: 9}, {x: 13, y: 9}, {x: 14, y: 9}, {x: 15, y: 9}, {x: 15, y: 8}, {x: 15, y: 7}, {x: 14, y: 7}, {x: 13, y: 7}, {x: 12, y: 7}, {x: 11, y: 7}, {x: 10, y: 7}, {x: 9, y: 6}, {x: 9, y: 5}, {x: 9, y: 4}, {x: 9, y: 3}, {x: 9, y: 2}, {x: 9, y: 1}, {x: 8, y: 1}, {x: 7, y: 1}, {x: 7, y: 2}, {x: 7, y: 3}, {x: 7, y: 4}, {x: 7, y: 5}, {x: 7, y: 6}, {x: 6, y: 7}, {x: 5, y: 7}, {x: 4, y: 7}, {x: 3, y: 7}, {x: 2, y: 7}, {x: 1, y: 7}, {x: 1, y: 8}, {x: 2, y: 8}, {x: 3, y: 8}, {x: 4, y: 8}, {x: 5, y: 8}, {x: 6, y: 8}, {x: 7, y: 8}]
 const blue_paths = [{x: 9, y: 14}, {x: 9, y: 13}, {x: 9, y: 12}, {x: 9, y: 11}, {x: 9, y: 10}, {x: 10, y: 9}, {x: 11, y: 9}, {x: 12, y: 9}, {x: 13, y: 9}, {x: 14, y: 9}, {x: 15, y: 9}, {x: 15, y: 8}, {x: 15, y: 7}, {x: 14, y: 7}, {x: 13, y: 7}, {x: 12, y: 7}, {x: 11, y: 7}, {x: 10, y: 7}, {x: 9, y: 6}, {x: 9, y: 5}, {x: 9, y: 4}, {x: 9, y: 3}, {x: 9, y: 2}, {x: 9, y: 1}, {x: 8, y: 1}, {x: 7, y: 1}, {x: 7, y: 2}, {x: 7, y: 3}, {x: 7, y: 4}, {x: 7, y: 5}, {x: 7, y: 6}, {x: 6, y: 7}, {x: 5, y: 7}, {x: 4, y: 7}, {x: 3, y: 7}, {x: 2, y: 7}, {x: 1, y: 7}, {x: 1, y: 8}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, {x: 5, y: 9}, {x: 6, y: 9}, {x: 7, y: 10}, {x: 7, y: 11}, {x: 7, y: 12}, {x: 7, y: 13}, {x: 7, y: 14}, {x: 7, y: 15}, {x: 8, y: 15}, {x: 8, y: 14}, {x: 8, y: 13}, {x: 8, y: 12}, {x: 8, y: 11}, {x: 8, y: 10}, {x: 8, y: 9}]
 const yellow_paths = [{x: 14, y: 7}, {x: 13, y: 7}, {x: 12, y: 7}, {x: 11, y: 7}, {x: 10, y: 7}, {x: 9, y: 6}, {x: 9, y: 5}, {x: 9, y: 4}, {x: 9, y: 3}, {x: 9, y: 2}, {x: 9, y: 1}, {x: 8, y: 1}, {x: 7, y: 1}, {x: 7, y: 2}, {x: 7, y: 3}, {x: 7, y: 4}, {x: 7, y: 5}, {x: 7, y: 6}, {x: 6, y: 7}, {x: 5, y: 7}, {x: 4, y: 7}, {x: 3, y: 7}, {x: 2, y: 7}, {x: 1, y: 7}, {x: 1, y: 8}, {x: 1, y: 9}, {x: 2, y: 9}, {x: 3, y: 9}, {x: 4, y: 9}, {x: 5, y: 9}, {x: 6, y: 9}, {x: 7, y: 10}, {x: 7, y: 11}, {x: 7, y: 12}, {x: 7, y: 13}, {x: 7, y: 14}, {x: 7, y: 15}, {x: 8, y: 15}, {x: 9, y: 15}, {x: 9, y: 14}, {x: 9, y: 13}, {x: 9, y: 12}, {x: 9, y: 11}, {x: 9, y: 10}, {x: 10, y: 9}, {x: 11, y: 9}, {x: 12, y: 9}, {x: 13, y: 9}, {x: 14, y: 9}, {x: 15, y: 9}, {x: 15, y: 8}, {x: 14, y: 8}, {x: 13, y: 8}, {x: 12, y: 8}, {x: 11, y: 8}, {x: 10, y: 8}, {x: 9, y: 8}]

 /**
  * -------------------------------------------------------------------------------
  * Arrays containing each tokens position on the board and index of path
  * -------------------------------------------------------------------------------
  */
 let red_tokens_position = [{i: 0, x: 10, y: 15}, {i: 0, x: 10, y: 15}, {i: 0, x: 10, y: 15}, {i: 0, x: 10, y: 15}]
 let blue_tokens_position = [{i: 0, x: 10, y: 15}, {i: 0, x: 10, y: 15}, {i: 0, x: 10, y: 15}, {i: 0, x: 10, y: 15}]
 let yellow_tokens_position = [{i: 0, x: 10, y: 15}, {i: 0, x: 10, y: 15}, {i: 0, x: 10, y: 15}, {i: 0, x: 10, y: 15}]
 let green_tokens_position = [{i: 0, x: 10, y: 15}, {i: 0, x: 10, y: 15}, {i: 0, x: 10, y: 15}, {i: 0, x: 10, y: 15}]

/**
 * --------------------------------------------------------------------------
 * Function to create the ludo board programatically
 * --------------------------------------------------------------------------
 */
function createLudoBoard() {
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
            } else if (i === 37 || i === 103 ||  i === 189 || i === 123) {
                cell.classList.add('child')
                cell.innerHTML = "<img width = '50%' src='assets/star.svg' alt=''></img>"
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

}


/**
 * Placing blue tickets in the board
 */
const placeBlueTickets = () => {
    blue_ticket_one.style.gridColumnStart = 11
    blue_ticket_one.style.gridRowStart = 11

    blue_ticket_one.style.gridColumnEnd = 13
    blue_ticket_one.style.gridRowEnd = 13
    // blue_ticket_one.style.backgroundColor = "red"

    blue_ticket_two.style.gridColumnStart = 13
    blue_ticket_two.style.gridRowStart = 11

    blue_ticket_two.style.gridColumnEnd = 15
    blue_ticket_two.style.gridRowEnd = 13
    // blue_ticket_two.style.backgroundColor = "yellow"

    blue_ticket_three.style.gridColumnStart = 11
    blue_ticket_three.style.gridRowStart = 13

    blue_ticket_three.style.gridColumnEnd = 13
    blue_ticket_three.style.gridRowEnd = 15
    // blue_ticket_three.style.backgroundColor = "yellow"

    blue_ticket_four.style.gridColumnStart = 13
    blue_ticket_four.style.gridRowStart = 13

    blue_ticket_four.style.gridColumnEnd = 15
    blue_ticket_four.style.gridRowEnd = 15
    // blue_ticket_four.style.backgroundColor = "red"
}


/**
 * Placing blue tickets in the board
 */
 const placeYellowTickets = () => {
    yellow_ticket_one.style.gridColumnStart = 2
    yellow_ticket_one.style.gridRowStart = 11

    yellow_ticket_one.style.gridColumnEnd = 4
    yellow_ticket_one.style.gridRowEnd = 13
    // blue_ticket_one.style.backgroundColor = "red"

    yellow_ticket_two.style.gridColumnStart = 4
    yellow_ticket_two.style.gridRowStart = 11

    yellow_ticket_two.style.gridColumnEnd = 6
    yellow_ticket_two.style.gridRowEnd = 13
    // blue_ticket_two.style.backgroundColor = "yellow"

    yellow_ticket_three.style.gridColumnStart = 2
    yellow_ticket_three.style.gridRowStart = 13

    yellow_ticket_three.style.gridColumnEnd = 4
    yellow_ticket_three.style.gridRowEnd = 15
    // blue_ticket_three.style.backgroundColor = "yellow"

    yellow_ticket_four.style.gridColumnStart = 4
    yellow_ticket_four.style.gridRowStart = 13

    yellow_ticket_four.style.gridColumnEnd = 6
    yellow_ticket_four.style.gridRowEnd = 15
    // blue_ticket_four.style.backgroundColor = "red"
}


/**
 * Placing blue tickets in the board
 */
 const placeGreenTickets = () => {
    green_ticket_one.style.gridColumnStart = 2
    green_ticket_one.style.gridRowStart = 2

    green_ticket_one.style.gridColumnEnd = 4
    green_ticket_one.style.gridRowEnd = 4
    // blue_ticket_one.style.backgroundColor = "red"

    green_ticket_two.style.gridColumnStart = 4
    green_ticket_two.style.gridRowStart = 2

    green_ticket_two.style.gridColumnEnd = 6
    green_ticket_two.style.gridRowEnd = 4
    // blue_ticket_two.style.backgroundColor = "yellow"

    green_ticket_three.style.gridColumnStart = 2
    green_ticket_three.style.gridRowStart = 4

    green_ticket_three.style.gridColumnEnd = 4
    green_ticket_three.style.gridRowEnd = 6
    // blue_ticket_three.style.backgroundColor = "yellow"

    green_ticket_four.style.gridColumnStart = 4
    green_ticket_four.style.gridRowStart = 4

    green_ticket_four.style.gridColumnEnd = 6
    green_ticket_four.style.gridRowEnd = 6
    // blue_ticket_four.style.backgroundColor = "red"
}


/**
 * Placing blue tickets in the board
 */
 const placeRedTickets = () => {
    red_ticket_one.style.gridColumnStart = 11
    red_ticket_one.style.gridRowStart = 2

    red_ticket_one.style.gridColumnEnd = 13
    red_ticket_one.style.gridRowEnd = 4
    // blue_ticket_one.style.backgroundColor = "red"

    red_ticket_two.style.gridColumnStart = 13
    red_ticket_two.style.gridRowStart = 2

    red_ticket_two.style.gridColumnEnd = 15
    red_ticket_two.style.gridRowEnd = 4
    // blue_ticket_two.style.backgroundColor = "yellow"

    red_ticket_three.style.gridColumnStart = 11
    red_ticket_three.style.gridRowStart = 4

    red_ticket_three.style.gridColumnEnd = 13
    red_ticket_three.style.gridRowEnd = 6
    // blue_ticket_three.style.backgroundColor = "yellow"

    red_ticket_four.style.gridColumnStart = 13
    red_ticket_four.style.gridRowStart = 4

    red_ticket_four.style.gridColumnEnd = 15
    red_ticket_four.style.gridRowEnd = 6
    // blue_ticket_four.style.backgroundColor = "red"
}



/**
 * Adding click event listener on the ludo tickets
 */
const addClickEventListenerOnTickets = () => {
    /**
 * Blue tickets
 */
blue_ticket_one.addEventListener('click', e => handleMove(e))
blue_ticket_two.addEventListener('click', e => handleMove(e))
blue_ticket_three.addEventListener('click', e => handleMove(e))
blue_ticket_four.addEventListener('click', e => handleMove(e))

/**
 * Yellow Tickets
 */
 yellow_ticket_one.addEventListener('click', e => handleMove(e))
 yellow_ticket_two.addEventListener('click', e => handleMove(e))
 yellow_ticket_three.addEventListener('click', e => handleMove(e))
 yellow_ticket_four.addEventListener('click', e => handleMove(e))


/**
 * Green Tickets
 */
 green_ticket_one.addEventListener('click', e => handleMove(e))
 green_ticket_two.addEventListener('click', e => handleMove(e))
 green_ticket_three.addEventListener('click', e => handleMove(e))
 green_ticket_four.addEventListener('click', e => handleMove(e))

/**
 * Red Tickets
 */
 red_ticket_one.addEventListener('click', e => handleMove(e))
 red_ticket_two.addEventListener('click', e => handleMove(e))
 red_ticket_three.addEventListener('click', e => handleMove(e))
 red_ticket_four.addEventListener('click', e => handleMove(e))
}


/**
 * ----------------------------------------------------------------------------
 * Function to check whether there is a token (goti) or not
 * ----------------------------------------------------------------------------
 */
const isAnyTokenThere = () => {
    if (condition) {
        
    }
}


/**
 * ----------------------------------------------------------------------------
 * Function to handle the move
 * ----------------------------------------------------------------------------
 */
const handleMove = (e) => {
    console.log(e)
}
