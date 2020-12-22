import { update as updateSnake, draw as drawSnake, SNAKE_SPEED, getSnakeHead, snakeIntersection} from './Snake.js'
import { update as updateFood, draw as drawFood } from './Food.js'
import { outsideGrid } from "./Grid.js";

let lastRenderTime = 0
let gameOver = false
const gameBoard = document.getElementById('game-board');

window.requestAnimationFrame(main)



/**
 *
 * @param currentTime
 */

function main(currentTime) {
    if(gameOver){
        if(confirm("Game Over,Cliquez sur ok pour recommencer")){
            window.location = '/'
        }
        return
    }

    window.requestAnimationFrame(main)
    const secondsSinceLastRender = (currentTime - lastRenderTime)/ 1000
    if(secondsSinceLastRender < 1 / SNAKE_SPEED ) return

    lastRenderTime = currentTime;

    update()
    draw()
}

function update() {
    updateSnake()
    updateFood()
    checkDeath()
}

function draw() {
    gameBoard.innerHTML=''
    drawSnake(gameBoard)
    drawFood(gameBoard)
}
function checkDeath() {
    gameOver = outsideGrid(getSnakeHead()) || snakeIntersection()
}