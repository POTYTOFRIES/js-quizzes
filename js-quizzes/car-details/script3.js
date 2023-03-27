const picture = document.createElement("img")
picture.setAttribute("src","jeep.jpg")

const vehicle = document.getElementById("vehicle")
vehicle.appendChild(picture)

document.getElementById("manufacturer").innerHTML = "Manufacturer: Jeep"
document.getElementById("model").innerHTML = "Make and Model: Wrangler"
document.getElementById("engine").innerHTML = "Engine: 2.0l Turbo with ESS"
document.getElementById("bodyType").innerHTML = "Body Style: Jeep"