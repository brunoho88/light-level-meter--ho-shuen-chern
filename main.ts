let rading = 0
basic.forever(function () {
    rading = input.lightLevel()
    led.plotBarGraph(
    rading,
    255
    )
    if (input.buttonIsPressed(Button.A)) {
        rading = input.lightLevel()
        if (rading > input.temperature()) {
            basic.showNumber(0)
            music.playMelody("C5 C B E A F G F ", 292)
        } else {
            basic.showLeds(`
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                # # # # #
                `)
            basic.showNumber(rading)
        }
    }
})
