input.onButtonPressed(Button.A, function () {
    radio.sendNumber(10)
    joystickbit.Vibration_Motor(100)
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P12, joystickbit.ButtonType.down, function () {
    radio.sendNumber(5)
    music.playTone(262, music.beat(BeatFraction.Whole))
})
joystickbit.onButtonEvent(joystickbit.JoystickBitPin.P15, joystickbit.ButtonType.down, function () {
    radio.sendNumber(6)
    music.playTone(698, music.beat(BeatFraction.Whole))
})
input.onButtonPressed(Button.B, function () {
    radio.sendNumber(11)
    joystickbit.Vibration_Motor(100)
})
joystickbit.initJoystickBit()
radio.setGroup(0)
basic.forever(function () {
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) < 250 && (joystickbit.getRockerValue(joystickbit.rockerType.X) > 400 && joystickbit.getRockerValue(joystickbit.rockerType.X) < 600)) {
        radio.sendNumber(1)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 750 && (joystickbit.getRockerValue(joystickbit.rockerType.X) > 400 && joystickbit.getRockerValue(joystickbit.rockerType.X) < 600)) {
        radio.sendNumber(2)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) > 750 && (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 400 && joystickbit.getRockerValue(joystickbit.rockerType.Y) < 600)) {
        radio.sendNumber(3)
    }
    if (joystickbit.getRockerValue(joystickbit.rockerType.X) < 250 && (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 400 && joystickbit.getRockerValue(joystickbit.rockerType.Y) < 600)) {
        radio.sendNumber(4)
    }
    if (!(joystickbit.getButton(joystickbit.JoystickBitPin.P12)) && !(joystickbit.getButton(joystickbit.JoystickBitPin.P15))) {
        if (joystickbit.getRockerValue(joystickbit.rockerType.Y) > 400 && joystickbit.getRockerValue(joystickbit.rockerType.Y) < 600 && (joystickbit.getRockerValue(joystickbit.rockerType.X) > 400 && joystickbit.getRockerValue(joystickbit.rockerType.X) < 600)) {
            radio.sendNumber(0)
        }
    }
})
