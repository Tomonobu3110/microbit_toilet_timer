function minutes () {
    return convertToText(Math.trunc(elapsed / 60))
}
function _2digit_second () {
    i = elapsed % 60
    if (i < 10) {
        return "0" + convertToText(i)
    } else {
        return convertToText(i)
    }
}
function elapsed_to_text () {
    return "" + minutes() + ":" + _2digit_second()
}
input.onButtonPressed(Button.B, function () {
    elapsed = 0
})
let using = 0
let i = 0
let elapsed = 0
elapsed = 0
loops.everyInterval(1000, function () {
    elapsed += 1
})
basic.forever(function () {
    if (3 < input.lightLevel()) {
        if (0 == using) {
            using = 1
            elapsed = 0
            led.setBrightness(255)
        }
        basic.showString("" + (elapsed_to_text()))
    } else {
        using = 0
        led.setBrightness(10)
        basic.showIcon(IconNames.No)
    }
})
