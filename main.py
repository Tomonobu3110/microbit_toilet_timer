def elapsed_to_text():
    return "" + convert_to_text(int(elapsed / 60)) + ":" + _2digit_second()

def on_button_pressed_b():
    global elapsed
    elapsed = 0
input.on_button_pressed(Button.B, on_button_pressed_b)

def _2digit_second():
    global i
    i = elapsed % 60
    if i < 10:
        return "0" + convert_to_text(i)
    else:
        return convert_to_text(i)
i = 0
elapsed = 0
using = 0
elapsed = 0

def on_every_interval():
    global elapsed
    elapsed += 1
loops.every_interval(1000, on_every_interval)

def on_forever():
    global using, elapsed
    if 3 < input.light_level():
        if 0 == using:
            using = 1
            elapsed = 0
        basic.show_string("" + (elapsed_to_text()))
    else:
        using = 0
        basic.show_icon(IconNames.NO)
basic.forever(on_forever)
