let birak = 0
DFRobotMaqueenPlus.I2CInit()
DFRobotMaqueenPlus.clearDistance(Motors.ALL)
basic.forever(function () {
    basic.showNumber(parseFloat(DFRobotMaqueenPlus.readeDistance(Motors1.M1)))
})
basic.forever(function () {
    birak = parseFloat(DFRobotMaqueenPlus.readeDistance(Motors1.M1))
    if (birak < 6.2) {
        DFRobotMaqueenPlus.mototRun(Motors.ALL, Dir.CW, 60)
    } else {
        DFRobotMaqueenPlus.mototStop(Motors.ALL)
    }
})
