/**
 * Step -1
 * Create Ludo Board
 */
createLudoBoard()

/**
 * Step -2
 * Place Ludo Tickets on the board
 */
placeBlueTickets()
placeYellowTickets()
placeGreenTickets()
placeRedTickets()

/**
 * Step - 3
 * Setting Click Listener for ludo tickets
 */
addClickEventListenerOnTickets()



let lastTime = 0;
let index = 0;
const main = (ctime) => {
    if (index != red_paths.length) {
        window.requestAnimationFrame(main)
    }

    if (((ctime - lastTime)/1000) < 0.2) {
        // lastTime = ctime
        return
    }

    // inner_board.innerHTML = ""

    // const cell = document.createElement("div");
    red_ticket_one.style.gridColumnStart = red_paths[index].y
    red_ticket_one.style.gridRowStart = red_paths[index].x

    red_ticket_one.style.gridColumnEnd = red_paths[index].y + 1
    red_ticket_one.style.gridRowEnd = red_paths[index].x + 1


    blue_ticket_one.style.gridColumnStart = blue_paths[index].y
    blue_ticket_one.style.gridRowStart = blue_paths[index].x

    blue_ticket_one.style.gridColumnEnd = blue_paths[index].y + 1
    blue_ticket_one.style.gridRowEnd = blue_paths[index].x + 1


    yellow_ticket_one.style.gridColumnStart = yellow_paths[index].y
    yellow_ticket_one.style.gridRowStart = yellow_paths[index].x

    yellow_ticket_one.style.gridColumnEnd = yellow_paths[index].y + 1
    yellow_ticket_one.style.gridRowEnd = yellow_paths[index].x + 1


    green_ticket_one.style.gridColumnStart = green_paths[index].y
    green_ticket_one.style.gridRowStart = green_paths[index].x

    green_ticket_one.style.gridColumnEnd = green_paths[index].y + 1
    green_ticket_one.style.gridRowEnd = green_paths[index].x + 1


    // cell.classList.add('board-cell-1x1')

    // cell.innerHTML = "<img src='assets/red.svg' alt=''>"
    // inner_board.appendChild(cell)

    // cell.innerHTML += "<img src='assets/yellow.svg' alt=''>"
    

    index ++;
    lastTime = ctime

// window.requestAnimationFrame(main)
    console.log(ctime)
// window.requestAnimationFrame(main)
}

window.requestAnimationFrame(main)
