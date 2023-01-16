function elapsed_to_text () {
    return "" + convertToText(Math.trunc(elapsed / 60)) + ":" + _2digit_second()
}
function _2digit_second () {
    i = elapsed % 60
    if (i < 10) {
        return "0" + convertToText(i)
    } else {
        return convertToText(i)
    }
}
let i = 0
let elapsed = 0
let using = 0
elapsed = 0
loops.everyInterval(1000, function () {
    elapsed += 1
})
basic.forever(function () {
    if (10 < input.lightLevel()) {
        if (0 == using) {
            using = 1
            elapsed = 0
        }
        basic.showString("" + (elapsed_to_text()))
    } else {
        using = 0
        basic.showIcon(IconNames.No)
    }
})
