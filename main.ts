input.onGesture(Gesture.EightG, function () {
    Metros = Passos * 65
    Metros = Metros / 100
    basic.showNumber(Metros)
    basic.showString("M")
    basic.clearScreen()
    basic.pause(500)
    KM += Metros / 1000
    basic.showNumber(KM)
    basic.showString("km")
    basic.clearScreen()
    basic.pause(500)
    Kcal += Passos * 0.05
    basic.showNumber(Kcal)
    basic.showString("Kcal")
})
input.onGesture(Gesture.ScreenUp, function () {
    Tempo = "" + Horas + (":" + Minutos)
    basic.showString(Tempo)
})
input.onGesture(Gesture.Shake, function () {
    Passos += 2
})
let Cronômetro_T_Final = 0
let Segundos = 0
let Cronômetro = 0
let Cronômetro_T_inicial = 0
let Kcal = 0
let KM = 0
let Passos = 0
let Metros = 0
let Minutos = 0
let Horas = 0
let Tempo = ""
let Config = 2
Tempo = ""
Horas = 0
Minutos = 0
basic.forever(function () {
    basic.pause(1000 * 60 * 2)
    Config = 0
})
basic.forever(function () {
    if (Horas == 0) {
        Passos = 0
    }
})
basic.forever(function () {
    if (Config == 0 && input.buttonIsPressed(Button.A)) {
        Cronômetro_T_inicial = input.runningTime()
        while (Cronômetro == 0) {
            basic.showLeds(`
                . . . . .
                . . . . .
                . . # . .
                . . . . .
                . . . . .
                `)
            basic.clearScreen()
            basic.pause(1000)
        }
    }
})
basic.forever(function () {
    Segundos += 1
    basic.pause(1000)
})
basic.forever(function () {
    if (Config > 0 && input.buttonIsPressed(Button.A)) {
        basic.pause(200)
        if (Horas < 23) {
            Horas += 1
        } else {
            Horas = 0
        }
    }
})
basic.forever(function () {
    if (Segundos == 60) {
        Segundos = 0
        Minutos += 1
    }
})
basic.forever(function () {
    if (Minutos == 60) {
        Minutos = 0
        Horas += 1
    }
})
basic.forever(function () {
    if (Config == 0 && input.buttonIsPressed(Button.B)) {
        Cronômetro_T_Final = input.runningTime()
        Cronômetro = Cronômetro_T_Final - Cronômetro_T_inicial
        Cronômetro = Cronômetro / 1000
        basic.showNumber(Cronômetro)
        basic.showString("S")
        basic.pause(1000)
        Cronômetro = 0
        Cronômetro_T_inicial = 0
        Cronômetro_T_Final = 0
        basic.clearScreen()
    }
})
basic.forever(function () {
    if (Config > 0 && input.buttonIsPressed(Button.B)) {
        basic.pause(200)
        if (Minutos < 59) {
            Minutos += 1
        } else {
            Minutos = 0
        }
    }
})
basic.forever(function () {
    if (Horas == 24) {
        Horas = 0
    }
})
