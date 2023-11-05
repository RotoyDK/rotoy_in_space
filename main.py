def on_button_pressed_a():
    pass
input.on_button_pressed(Button.A, on_button_pressed_a)

def on_button_pressed_b():
    pass
input.on_button_pressed(Button.B, on_button_pressed_b)

game.set_score(0)
Lunar_module = game.create_sprite(2, 4)
for index in range(31):
    asteroid1 = game.create_sprite(randint(0, 4), 0)
    asteroid2 = game.create_sprite(randint(0, 4), 0)
    for index2 in range(4):
        basic.pause(1000 - 70 * index)
        asteroid1.change(LedSpriteProperty.Y, 1)
        asteroid2.change(LedSpriteProperty.Y, 1)
    if Lunar_module.is_touching(asteroid1) or Lunar_module.is_touching(asteroid2):
        if game.score() >= 15:
            basic.show_icon(IconNames.HAPPY)
        else:
            basic.show_icon(IconNames.SAD)
        game.game_over()
    else:
        game.add_score(1)
    asteroid1.delete()
    asteroid2.delete()