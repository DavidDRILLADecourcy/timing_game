let display = 0
let targetposition = 0
let position = 0
let haloDisplay = kitronik_halo_hd.createZIPHaloDisplay(60)
let loop = 1
let spinnerposition = 1
if (loop == 1) {
    position = randint(1, 60)
    targetposition = position
}
basic.forever(function () {
    spinnerposition = spinnerposition + 1
    if (spinnerposition == 60) {
        spinnerposition = 1
    }
    haloDisplay.setZipLedColor(0, kitronik_halo_hd.colors(ZipLedColors.Green))
    haloDisplay.show()
    display = 0
    basic.pause(50)
    haloDisplay.clear()
})
loops.everyInterval(100, function () {
	
})
