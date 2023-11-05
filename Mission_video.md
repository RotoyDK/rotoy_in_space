# Mission_video

```template
input.onButtonPressed(Button.A, function () {
})
```

```package
maqueen=github:dfrobot/pxt-maqueen#v1.7.2
```

# Day 3

## Introduction @showdialog

Let's learn how to make Rotoy move!

## Step 1

Rotoy has 2 wheels and also 2 motors (left and right). Each wheel is controlled separately so we need to know how to turn them on.
All the necessary blocks are in ``||maqueen:Maqueen||`` tab in your toolbox (Maqueen is the name of the board that Rotoy is built from).

## Step 2 @showhint

To move one of the wheels you need to turn them on, use ``||maqueen:motor [] move [] at speed []||``.
For example, we can set both wheels (``||maqueen:all||``) to move forward (``||maqueen:Forward||``), so that Rotoy goes straight. We also need to say how fast the wheels should sping, with 0 being stopped and 255 going really fast!

Check out this block - it makes Rotoy go straight at a speed 100.

```block
maqueen.motorRun(maqueen.Motors.All, maqueen.Dir.CW, 100)
```

## Step 3

Awesome! Now, once you turn on the wheels, they will spin forever (or until Rotoy's batteries die). So we need to remember to turn them off. To do that, we use ``||maqueen:motor [] stop||``, and we can stop left, right or both wheels.

```block
maqueen.motorStop(maqueen.Motors.All)
```

## Step 4

Now, we need to tell Rotoy when it should start moving or stop. To do that we will use buttons! Rotoy has 2 main buttons - A and B. You can find them in the purple category ``||input:Input||``.

You can see that block for button A is already in the workspace. Now add the second one for button B. You can check how it should look in the hint!

```blocks
input.onButtonPressed(Button.A, function () {
})
input.onButtonPressed(Button.B, function () {
})
```

## Step 5

So now you can place anything inside the button.

Make Rotoy go straight when you press button A, and make it stop when button B is pressed!

## Step 6

Once you are ready to test, click ``|Download|`` to move your code to micro:bit! Now go back to the chapter!