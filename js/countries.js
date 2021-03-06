const loadCountry = () => {
    fetch('https://restcountries.com/v2/all')
        .then(res => res.json())
        .then(data => getCountry(data))
}
loadCountry();

const getCountry = (country) => {
    const countriesContainer = document.getElementById('countries')
    countriesContainer.style.display = 'flex'
    countriesContainer.style.flexWrap = 'wrap'
    countriesContainer.style.textAlign = 'center'
    country.forEach(countries => {
        // console.log(countries);
        const div = document.createElement('div')
        div.style.alignItems = 'center'
        div.style.textAlign = 'center'
        div.style.border = '2px solid gray'
        div.style.borderRadius = '10px'
        div.style.paddingTop = '5px'
        div.style.margin = '10px'

        const img = document.createElement('span');
        // img.style.width = '230px'
        // img.style.height = '210px'
        img.style.padding = '10px'
        const h3 = document.createElement('h3');
        const h4 = document.createElement('h4');
        const button = document.createElement('span');
        const p = document.createElement('p');
        button.innerHTML = ` <button onclick= "details('${countries.name}')"> See Details</button>`
        img.innerHTML = ` <img src="${countries.flags.png}" alt=""> `
        h3.innerText = ` Country Name : ${countries.name}`
        h4.innerText = ` Capital Name : ${countries.capital} `
        // p.innerText = ` 
        // AltSpellings :  ${countries.altSpellings}
        // NativeName :  ${countries.nativeName}
        // Area :  ${countries.area} 
        // Borders :  ${countries.borders}
        // numericCode :  ${countries.numericCode} 
        // population :  ${countries.population}
        // region :  ${countries.region}
        // languages :  ${countries.languages[0].name},${countries.languages[0].nativeName}
        // Time ZOne :  ${countries.timezones[0]}


        // `
        div.appendChild(img)
        div.appendChild(h3)
        div.appendChild(h4)
        div.appendChild(button)
        div.appendChild(p)
        countriesContainer.appendChild(div)
    });
}
const details = name => {
    const url = `https://restcountries.com/v2/name/${name}`;
    fetch(`https://restcountries.com/v2/name/${name}`)
        .then(res => res.json())
        .then(data => countryDetails(data[0]))
}

const countryDetails = country => {

    const countryDetail = document.getElementById('country-details');
    countryDetail.innerHTML = `
        <h3>Country Name : ${country.name} </h3>
        <h4> Capital Name : ${country.capital}</h4>
        <p> 
        AltSpellings :  ${country.altSpellings}  </p>
        <p>   NativeName :  ${country.nativeName}  </p>
        <p>  Area :  ${country.area}  </p>
        <p>  Borders :  ${country.borders}  </p>
        <p> numericCode :  ${country.numericCode}  </p>
        <p> population :  ${country.population} </p>
        <p> region :  ${country.region} </p>
        <p> languages :  ${country.languages.name},${country.languages.nativeName}  </p>
        <p> Time ZOne :  ${country.timezones}  </p>
       
        
        `
}