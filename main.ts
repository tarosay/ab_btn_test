basic.forever(function () {
    if (input.buttonIsPressed(Button.AB)) {
        basic.showString("0")
    } else if (input.buttonIsPressed(Button.A)) {
        basic.showString("1")
    } else if (input.buttonIsPressed(Button.B)) {
        basic.showString("2")
    } else {
        basic.showString("3")
    }
})
