import './style.css'
import { data } from './data.ts'

let carMake:string[] = []

for (const x in data) {
    carMake.push(data[x]["carMake"])
}

carMake = carMake.filter((item, 
    index) => carMake.indexOf(item) === index).sort()

for (const x in carMake) {
    document.querySelector<HTMLDivElement>("#sidebar")!.innerHTML += `
        <p>${carMake[x]}</p>
    `
}


for (const x in data) {
    let product = data[x]


    document.querySelector<HTMLDivElement>('#app')!.innerHTML += `
    <div class="card">
        <img src="https://www.lamborghini.com/sites/it-en/files/DAM/lamborghini/facelift_2019/model_detail/menu/09_09/menu_asterion.png">
        <h1>${product["carMake"]} ${product["carModel"]}</h1>
        <p class="price">$${product["price"]}</p>
        <p>${product["colorOptions"]}</p>
    </div>
    `
} 



