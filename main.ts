input.onButtonPressed(Button.A, function () {
    Lunar_module.change(LedSpriteProperty.X, -1)
})
input.onButtonPressed(Button.B, function () {
    Lunar_module.change(LedSpriteProperty.X, 1)
})
let Lunar_module: game.LedSprite = null
Lunar_module = game.createSprite(2, 4)
Mission.playGame(2)
