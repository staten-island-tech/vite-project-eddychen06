import './style.css'
import { data } from './data.ts'

let carMake:string[] = data.map(car => car.carMake).sort()

carMake.filter((item, index) => carMake.indexOf(item) === index)
    .forEach((brand:string) => {
        document.querySelector<HTMLDivElement>("#brand")!.innerHTML += `
            <label>
                <input type="checkbox" class="filter-checkbox" value="make ${brand.toLowerCase()}"> ${brand}
            </label>
        `
    })

let bodyType:string[] = data.map(car => car.bodyType)

bodyType.filter((item, index) => bodyType.indexOf(item) === index)
    .forEach((type:string) => {
        document.querySelector<HTMLDivElement>("#body-type")!.innerHTML += `
            <label>
                <input type="checkbox" class="filter-checkbox" value="type ${type.toLowerCase()}"> ${type}
            </label>
        `

    })

for (const x in data) {
    let product = data[x]

    document.querySelector<HTMLDivElement>('#product-list')!.innerHTML += `
    <div class="product-card">
        <img id="product-img" src="https://www.bentleymotors.com/content/dam/bentley/Master/Homestage%20Tiles/Bentayga%20Extended%20Wheelbase%20Azure_Bentayga%20EWB%20First%20Edition%20-%20Rear%203-4%201024x512.jpg/_jcr_content/renditions/original.image_file.700.350.file/Bentayga%20Extended%20Wheelbase%20Azure_Bentayga%20EWB%20First%20Edition%20-%20Rear%203-4%201024x512.jpg">
        <h2 class="product-name">${product["carMake"]} ${product["carModel"]}</h2>
        <p class="price">$${product["price"]}</p>
    </div>
    `
} 

let isDarkMode:boolean = false

let button = document.getElementById("toggle-btn")?.addEventListener("click", function toggleDarkMode() {
    if (isDarkMode === false) {
        document.documentElement.setAttribute("data-theme", "dark");
        isDarkMode = true
    } else {
        document.documentElement.setAttribute("data-theme", "light")
        isDarkMode = false
    }
})
