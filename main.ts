function 消灯 () {
    pins.analogWritePin(AnalogPin.P0, 0)
    pins.analogWritePin(AnalogPin.P1, 0)
    pins.analogWritePin(AnalogPin.P2, 0)
}
function 青 () {
    pins.analogWritePin(AnalogPin.P0, 255)
}
function 黄 () {
    pins.analogWritePin(AnalogPin.P1, 255)
}
function 赤 () {
    pins.analogWritePin(AnalogPin.P2, 255)
}
消灯()
basic.forever(function () {
    青()
    basic.pause(1000)
    消灯()
    黄()
    basic.pause(1000)
    消灯()
    赤()
    basic.pause(1000)
    消灯()
})
