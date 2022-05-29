basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . . . #
    # # # # #
    `)
basic.forever(function () {
    if (pins.analogReadPin(AnalogPin.P0) < 100) {
        pins.analogWritePin(AnalogPin.P12, 512)
        pins.analogWritePin(AnalogPin.P16, 0)
    } else {
        pins.analogWritePin(AnalogPin.P12, 512)
        pins.analogWritePin(AnalogPin.P16, 512)
    }
})
