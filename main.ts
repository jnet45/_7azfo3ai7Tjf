input.onButtonPressed(Button.A, function () {
    aa = 1
})
input.onButtonPressed(Button.B, function () {
    aa = 0
})
let aa = 0
basic.showLeds(`
    # # # # #
    # . . . #
    # . . . #
    # . # . #
    # # # # #
    `)
aa = 0
basic.forever(function () {
    if (aa == 1) {
        if (pins.analogReadPin(AnalogPin.P0) < 100) {
            pins.analogWritePin(AnalogPin.P8, 20)
            pins.analogWritePin(AnalogPin.P16, 180)
        } else {
            pins.analogWritePin(AnalogPin.P8, 180)
            pins.analogWritePin(AnalogPin.P16, 180)
        }
    } else {
        pins.analogWritePin(AnalogPin.P8, 0)
        pins.analogWritePin(AnalogPin.P16, 0)
    }
})
