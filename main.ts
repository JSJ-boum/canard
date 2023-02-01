radio.onReceivedNumber(function (receivedNumber) {
    basic.showIcon(IconNames.Duck)
})
input.onGesture(Gesture.Shake, function () {
    basic.clearScreen()
    radio.sendString("DUCK")
})
radio.setGroup(23)
basic.forever(function () {
	
})
