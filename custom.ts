//% weight=100 color=#0fbc11 icon=""
namespace Mission {
    //% block
    export function playGame(wininningScore: number): void {
        let asteroid2: game.LedSprite = null
        let asteroid1: game.LedSprite = null
        game.setScore(0)
        
        for (let index = 0; index <= 30; index++) {
            asteroid1 = game.createSprite(randint(0, 4), 0)
            asteroid2 = game.createSprite(randint(0, 4), 0)
            for (let index2 = 0; index2 < 4; index2++) {
                basic.pause(1000 - 70 * index)
                asteroid1.change(LedSpriteProperty.Y, 1)
                asteroid2.change(LedSpriteProperty.Y, 1)
            }
            if (Lunar_module.isTouching(asteroid1) || Lunar_module.isTouching(asteroid2)) {
                if (game.score() >= wininningScore) {
                    basic.showIcon(IconNames.Happy)
                } else {
                    basic.showIcon(IconNames.Sad)
                }
                game.gameOver()
            } else {
                game.addScore(1)
            }
            asteroid1.delete()
            asteroid2.delete()
        }
    }
}
