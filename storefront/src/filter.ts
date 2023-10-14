import { data } from "./data"

let checkboxes = document.querySelectorAll<HTMLInputElement>('input[type="checkbox"]')

checkboxes.forEach(checkbox => {
    checkbox.addEventListener('change', function() {
        if (this.checked) {
          addFilter(checkbox.value)
        } else {
          removeFilter(checkbox.value)
        }
      });
});

let filters:string[] = []

function addFilter(filter:string) {
  filters.push(filter)
  return applyFilter()
}

function removeFilter(filter:string) {
  filters = filters.filter(item => item !== filter)
  return applyFilter()
}


function applyFilter() {

  if (filters.length === 0) {
    return updateDisplay(data)
  }

  let makes:string[] = []
  let filterMakes:any[] = []
  let types:string[] = []
  let filterTypes:any[] = []


  for (const x in filters) {
    if (filters[x].includes("make")) {
      makes.push(filters[x].replace('make ',''))
    } else {
      console.log(filters[x])
      types.push(filters[x].replace('type ',''))
    }
  }

  for (const x in makes) {
    data.filter(car => {
      if (car["carMake"].toUpperCase() == makes[x].toUpperCase()) {
        filterMakes.push(car)
      }
    })
  }

  for (const x in types) {
    data.filter(car => {
      if (car["bodyType"].toUpperCase() == types[x].toUpperCase()) {
        filterTypes.push(car)
      }
    })
  }

  if (makes.length > 0 && types.length === 0) {
    updateDisplay(filterMakes)
  } else if (makes.length === 0 && types.length > 0) {
    updateDisplay(filterTypes)
  } else if (makes.length > 0 && types.length > 0) {
    let bothArr:any[] = []

    for (const x in filterMakes) {
      bothArr.push(filterMakes[x])
    }

    for (const x in filterTypes) {
      bothArr.push(filterTypes[x])
    }
    
    const sharedArr = bothArr.filter((item, index) => bothArr.indexOf(item) !== index); 
    
    updateDisplay(Array.from(new Set(sharedArr)))
  } else {
    return
  }
}

function updateDisplay(cars:any[]) {
  if (cars.length === 0) {
    return document.querySelector<HTMLDivElement>('#product-list')!.innerHTML = `
      <h1 id="error-msg">No cars found.</h1>
    `
  }
  document.querySelector<HTMLDivElement>('#product-list')!.innerHTML = ``
  for (const x in cars) {
    document.querySelector<HTMLDivElement>('#product-list')!.innerHTML += `
    <div class="product-card">
        <img id="product-img" src="https://www.bentleymotors.com/content/dam/bentley/Master/Homestage%20Tiles/Bentayga%20Extended%20Wheelbase%20Azure_Bentayga%20EWB%20First%20Edition%20-%20Rear%203-4%201024x512.jpg/_jcr_content/renditions/original.image_file.700.350.file/Bentayga%20Extended%20Wheelbase%20Azure_Bentayga%20EWB%20First%20Edition%20-%20Rear%203-4%201024x512.jpg">
        <h2>${cars[x]["carMake"]} ${cars[x]["carModel"]}</h2>
        <p class="price">$${cars[x]["price"]}</p>
    </div>
    `
  }
}
