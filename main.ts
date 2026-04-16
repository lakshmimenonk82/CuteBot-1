let sonar_distance = 0
basic.forever(function () {
    sonar_distance = cuteBot.ultrasonic(cuteBot.SonarUnit.Centimeters)
    if (sonar_distance < 15) {
        cuteBot.stopcar()
        for (let index = 0; index < 4; index++) {
            cuteBot.colorLight(cuteBot.RGBLights.ALL, 0xff0000)
            basic.pause(1000)
            music.play(music.tonePlayable(262, music.beat(BeatFraction.Whole)), music.PlaybackMode.UntilDone)
        }
        cuteBot.motors(50, 0)
        basic.pause(500)
        cuteBot.motors(0, 0)
        basic.pause(500)
    } else {
        cuteBot.motors(50, 50)
    }
})
