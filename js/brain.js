const divs = document.querySelectorAll(".child");
const board = document.getElementById('board');
const inner_board = document.getElementById('inner-board')
const dice = document.getElementById('dice')

/**
 * Blue tickets
 */
const blue_token_one = document.getElementById('blue-ticket-1')
const blue_token_two = document.getElementById('blue-ticket-2')
const blue_token_three = document.getElementById('blue-ticket-3')
const blue_token_four = document.getElementById('blue-ticket-4')

/**
 * Yellow Tickets
 */
 const yellow_token_one = document.getElementById('yellow-ticket-1')
 const yellow_token_two = document.getElementById('yellow-ticket-2')
 const yellow_token_three = document.getElementById('yellow-ticket-3')
 const yellow_token_four = document.getElementById('yellow-ticket-4')


/**
 * Green Tickets
 */
 const green_token_one = document.getElementById('green-ticket-1')
 const green_token_two = document.getElementById('green-ticket-2')
 const green_token_three = document.getElementById('green-ticket-3')
 const green_token_four = document.getElementById('green-ticket-4')

/**
 * Red Tickets
 */
 const red_token_one = document.getElementById('red-ticket-1')
 const red_token_two = document.getElementById('red-ticket-2')
 const red_token_three = document.getElementById('red-ticket-3')
 const red_token_four = document.getElementById('red-ticket-4')

//  const R1 = document.getElementById('red-ticket-1')
//  const R2 = document.getElementById('red-ticket-2')
//  const R3 = document.getElementById('red-ticket-3')
//  const R4 = document.getElementById('red-ticket-4')

 /**
  * These are the variables that will used to create the ludo board
  */

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
 let red_tokens = [{e: red_token_one, p: red_paths, t: 'R1', i: 0}, {e: red_token_two, p: red_paths, t: 'R2', i: 0}, {e: red_token_three, p: red_paths, t: 'R3', i: 0}, {e: red_token_four, p: red_paths, t: 'R4', i: 0}]
 let blue_tokens = [{e: blue_token_one, p: blue_paths, t: 'B1', i: 0}, {e: blue_token_two, p: blue_paths, t: 'B2', i: 0}, {e: blue_token_three, p: blue_paths, t: 'B3', i: 0}, {e: blue_token_four, p: blue_paths, t: 'B4', i: 0}]
 let yellow_tokens = [{e: yellow_token_one, p: yellow_paths, t: 'Y1', i: 0}, {e: yellow_token_two, p: yellow_paths, t: 'Y2', i: 0}, {e: yellow_token_three, p: yellow_paths, t: 'Y3', i: 0}, {e: yellow_token_four, p: yellow_paths, t: 'Y4', i: 0}]
 let green_tokens = [{e: green_token_one, p: green_paths, t: 'G1', i: 0}, {e: green_token_two, p: green_paths, t: 'G2', i: 0}, {e: green_token_three, p: green_paths, t: 'G3', i: 0}, {e: green_token_four, p: green_paths, t: 'G4', i: 0}]


 /**
  * ---------------------------------------------------------------------------
  * These are the global variables that will used to handle the move
  * ---------------------------------------------------------------------------
  */
 let t = null   // Where t represents the ticket reference that the player want to move
 let n = 6      // Where n represents the number that the player got by rolling a dice
 let p = null   // Where p represents the player who roll the dice
 let start_position = 0     // Where start_position represents the position from where the ticket start to move
 let end_position = 0;      // Where end_position represents the position where the ticket will stop moving
 let temp_position = 0;     // Where temp_position represents the current moving position of ticket
 let isMoving = false
 let token = null          // Where ticket represents the ticket that the player want to move
 let paths_arr = null

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
    blue_token_one.style.gridColumnStart = 11
    blue_token_one.style.gridRowStart = 11

    blue_token_one.style.gridColumnEnd = 13
    blue_token_one.style.gridRowEnd = 13
    // blue_ticket_one.style.backgroundColor = "red"

    blue_token_two.style.gridColumnStart = 13
    blue_token_two.style.gridRowStart = 11

    blue_token_two.style.gridColumnEnd = 15
    blue_token_two.style.gridRowEnd = 13
    // blue_ticket_two.style.backgroundColor = "yellow"

    blue_token_three.style.gridColumnStart = 11
    blue_token_three.style.gridRowStart = 13

    blue_token_three.style.gridColumnEnd = 13
    blue_token_three.style.gridRowEnd = 15
    // blue_ticket_three.style.backgroundColor = "yellow"

    blue_token_four.style.gridColumnStart = 13
    blue_token_four.style.gridRowStart = 13

    blue_token_four.style.gridColumnEnd = 15
    blue_token_four.style.gridRowEnd = 15
    // blue_ticket_four.style.backgroundColor = "red"
}


/**
 * Placing blue tickets in the board
 */
 const placeYellowTickets = () => {
    yellow_token_one.style.gridColumnStart = 2
    yellow_token_one.style.gridRowStart = 11

    yellow_token_one.style.gridColumnEnd = 4
    yellow_token_one.style.gridRowEnd = 13
    // blue_ticket_one.style.backgroundColor = "red"

    yellow_token_two.style.gridColumnStart = 4
    yellow_token_two.style.gridRowStart = 11

    yellow_token_two.style.gridColumnEnd = 6
    yellow_token_two.style.gridRowEnd = 13
    // blue_ticket_two.style.backgroundColor = "yellow"

    yellow_token_three.style.gridColumnStart = 2
    yellow_token_three.style.gridRowStart = 13

    yellow_token_three.style.gridColumnEnd = 4
    yellow_token_three.style.gridRowEnd = 15
    // blue_ticket_three.style.backgroundColor = "yellow"

    yellow_token_four.style.gridColumnStart = 4
    yellow_token_four.style.gridRowStart = 13

    yellow_token_four.style.gridColumnEnd = 6
    yellow_token_four.style.gridRowEnd = 15
    // blue_ticket_four.style.backgroundColor = "red"
}


/**
 * Placing blue tickets in the board
 */
 const placeGreenTickets = () => {
    green_token_one.style.gridColumnStart = 2
    green_token_one.style.gridRowStart = 2

    green_token_one.style.gridColumnEnd = 4
    green_token_one.style.gridRowEnd = 4
    // blue_ticket_one.style.backgroundColor = "red"

    green_token_two.style.gridColumnStart = 4
    green_token_two.style.gridRowStart = 2

    green_token_two.style.gridColumnEnd = 6
    green_token_two.style.gridRowEnd = 4
    // blue_ticket_two.style.backgroundColor = "yellow"

    green_token_three.style.gridColumnStart = 2
    green_token_three.style.gridRowStart = 4

    green_token_three.style.gridColumnEnd = 4
    green_token_three.style.gridRowEnd = 6
    // blue_ticket_three.style.backgroundColor = "yellow"

    green_token_four.style.gridColumnStart = 4
    green_token_four.style.gridRowStart = 4

    green_token_four.style.gridColumnEnd = 6
    green_token_four.style.gridRowEnd = 6
    // blue_ticket_four.style.backgroundColor = "red"
}


/**
 * Placing blue tickets in the board
 */
 const placeRedTickets = () => {
    red_token_one.style.gridColumnStart = 11
    red_token_one.style.gridRowStart = 2

    red_token_one.style.gridColumnEnd = 13
    red_token_one.style.gridRowEnd = 4
    // blue_ticket_one.style.backgroundColor = "red"

    red_token_two.style.gridColumnStart = 13
    red_token_two.style.gridRowStart = 2

    red_token_two.style.gridColumnEnd = 15
    red_token_two.style.gridRowEnd = 4
    // blue_ticket_two.style.backgroundColor = "yellow"

    red_token_three.style.gridColumnStart = 11
    red_token_three.style.gridRowStart = 4

    red_token_three.style.gridColumnEnd = 13
    red_token_three.style.gridRowEnd = 6
    // blue_ticket_three.style.backgroundColor = "yellow"

    red_token_four.style.gridColumnStart = 13
    red_token_four.style.gridRowStart = 4

    red_token_four.style.gridColumnEnd = 15
    red_token_four.style.gridRowEnd = 6
    // blue_ticket_four.style.backgroundColor = "red"
}



/**
 * Adding click event listener on the ludo tickets
 */
const addClickEventListenerOnTickets = () => {
    /**
 * Blue tickets
 */
blue_token_one.addEventListener('click', e => handleTicketClick(e))
blue_token_two.addEventListener('click', e => handleTicketClick(e))
blue_token_three.addEventListener('click', e => handleTicketClick(e))
blue_token_four.addEventListener('click', e => handleTicketClick(e))

/**
 * Yellow Tickets
 */
 yellow_token_one.addEventListener('click', e => handleTicketClick(e))
 yellow_token_two.addEventListener('click', e => handleTicketClick(e))
 yellow_token_three.addEventListener('click', e => handleTicketClick(e))
 yellow_token_four.addEventListener('click', e => handleTicketClick(e))


/**
 * Green Tickets
 */
 green_token_one.addEventListener('click', e => handleTicketClick(e))
 green_token_two.addEventListener('click', e => handleTicketClick(e))
 green_token_three.addEventListener('click', e => handleTicketClick(e))
 green_token_four.addEventListener('click', e => handleTicketClick(e))

/**
 * Red Tickets
 */
 red_token_one.addEventListener('click', e => handleTicketClick(e))
 red_token_two.addEventListener('click', e => handleTicketClick(e))
 red_token_three.addEventListener('click', e => handleTicketClick(e))
 red_token_four.addEventListener('click', e => handleTicketClick(e))
}



/**
 * This is a looper function which will move of the ticket
 * It will loop again and again until the ticket move to the drawn number of times
 */
 let lastTime = 0;
 const moveLooper = (ctime) => {
    if (temp_position <= end_position) {
        window.requestAnimationFrame(moveLooper)
    }
 
     if (((ctime - lastTime)/1000) < 0.3) {
         // lastTime = ctime
         return
     }

    //  isAnyTokenThere()

     token.style.gridColumnStart = paths_arr[temp_position].y 
     token.style.gridRowStart = paths_arr[temp_position].x
    
     token.style.gridColumnEnd = paths_arr[temp_position].y + 1
     token.style.gridRowEnd = paths_arr[temp_position].x + 1
 
     temp_position ++;
     lastTime = ctime

     if (temp_position > end_position) {
         isMoving = false
    }
 
 // window.requestAnimationFrame(main)
     console.log(ctime)
 // window.requestAnimationFrame(main)
 }
 


/**
 * This is a looper function which will move of the ticket
 * It will loop again and again until the ticket move to the drawn number of times
 */
 let lt = 0;    // lt stands for short form of last time
 const handleTicketThrown = (ctime) => {

     if (temp_position <= end_position) {
         window.requestAnimationFrame(handleMove)
     }
 
     if (((ctime - lt)/1000) < 0.3) {
         // lastTime = ctime
         return
     }


    //  ticekt.style.gridColumnStart = paths_arr[temp_position].y 
    //  ticekt.style.gridRowStart = paths_arr[temp_position].x
    
    //  ticekt.style.gridColumnEnd = paths_arr[temp_position].y + 1
    //  ticekt.style.gridRowEnd = paths_arr[temp_position].x + 1

     
     temp_position ++;
     lt = ctime

     if (temp_position === end_position) {
         isMoving = false
         lt = 0
    }
 
 // window.requestAnimationFrame(main)
     console.log(ctime)
 // window.requestAnimationFrame(main)
 }


 

/**
 * ----------------------------------------------------------------------------
 * Function to check whether there is a token (goti) or not
 * ----------------------------------------------------------------------------
 */
const isAnyTokenThere = () => {
    

}


/**
 * ----------------------------------------------------------------------------
 * Function to handle the move
 * ----------------------------------------------------------------------------
 */
const handleTicketClick = (e) => {
    if (isMoving) {
        return
    }
    let isMovable = false
    t = (e.target.alt).toString()
    
    if (t.startsWith('R')) {
        red_tokens.forEach((element, index) => {
            if (t === element.t) {
                if (element.i + n < red_paths.length) {
                    start_position = element.i
                    end_position = start_position + n
                    temp_position = start_position
                    red_tokens[index].i = end_position
                    token = element.e
                    paths_arr = element.p
                    isMovable = true
                }
            }
        });
        
    } else if (t.startsWith('G')) {
        green_tokens.forEach((element, index) => {
            if (t === element.t) {
                if (element.i + n < green_paths.length) {
                    start_position = element.i
                    end_position = start_position + n
                    temp_position = start_position
                    green_tokens[index].i = end_position
                    token = element.e
                    paths_arr = element.p
                    isMovable = true
                }
            }
        });
        
    } else if (t.startsWith('B')) {
        blue_tokens.forEach((element, index) => {
            if (t === element.t) {
                if (element.i + n < blue_paths.length) {
                    start_position = element.i
                    end_position = start_position + n
                    temp_position = start_position
                    blue_tokens[index].i = end_position
                    token = element.e
                    paths_arr = element.p
                    isMovable = true
                }
            }
        });
        
   } else {
        yellow_tokens.forEach((element, index) => {
            if (t === element.t) {
                if (element.i + n < yellow_paths.length) {
                    start_position = element.i
                    end_position = start_position + n
                    temp_position = start_position
                    yellow_tokens[index].i = end_position
                    token = element.e
                    paths_arr = element.p
                    isMovable = true
                }
            }
        });

   }

   if (isMovable === true) {
       isMoving = true
       window.requestAnimationFrame(moveLooper)
   }
}


/**
 * ------------------------------------------------------------------
 * Function to get random roll number
 * ------------------------------------------------------------------
 */
const rollTheDice = () => {
    n = Math.floor(Math.random() * (7 - 1) + 1)     // Number between 1 and 7 where 1 is included and 7 is excluded
    dice.innerText = n
}

dice.addEventListener('click', rollTheDice)