const number = document.getElementById("number")

number.oninput = () => {
    numberValue = number.value
    input = parseInt(number.value)
    calculateConversion()
}

const calculateConversion = () => {
    const metresInFoot = 3.28084
    const feetInMetres = 0.3048
    const litresInGallons = 0.219969
    const gallonsInLitres = 4.54609
    const kilosInPounds = 2.20462
    const poundInKilos = 0.453592
    const mToFt = input * metresInFoot
    const ftToM = input * feetInMetres
    const litresToGallons = input * litresInGallons
    const gallonsToLitres = input * gallonsInLitres
    const kilosToPounds = input * kilosInPounds
    const poundsToKilos = input * poundInKilos
    
    const length = document.getElementById("length")
    const volume = document.getElementById("volume")
    const mass = document.getElementById("mass")
    length.textContent = `${input} metres = ${mToFt.toFixed(3)} feet | ${input} feet = ${ftToM.toFixed(3)} metres`
    volume.textContent = `${input} litres = ${litresToGallons.toFixed(3)} gallons | ${input} gallons = ${gallonsToLitres.toFixed(3)} litres`
    mass.textContent = `${input} kilos = ${kilosToPounds.toFixed(3)} pounds | ${input} pounds = ${poundsToKilos.toFixed(3)} kilos`
}
