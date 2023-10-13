import './style.css'
import { data, carImages } from './data.ts'

let carMake:string[] = data.map(car => car.carMake)

carMake.filter((item, index) => carMake.indexOf(item) === index)
    .forEach((brand:string) => {
        document.querySelector<HTMLDivElement>("#brand")!.innerHTML += `
            <p>${brand}</p>
        `

    })

let bodyType:string[] = data.map(car => car.bodyType)

bodyType.filter((item, index) => bodyType.indexOf(item) === index)
    .forEach((type:string) => {
        document.querySelector<HTMLDivElement>("#type")!.innerHTML += `
            <p>${type}</p>
        `

    })

for (const x in data) {
    let product = data[x]

    document.querySelector<HTMLDivElement>('.product-list')!.innerHTML += `
    <div class="card">
        <img src=${carImages[x]["Link"]}>
        <h2>${product["carMake"]} ${product["carModel"]}</h2>
        <p class="price">$${product["price"]}</p>
        <p>${product["colorOptions"]}</p>
    </div>
    `
} 



