const loadCountries = async () => {
    const url = `https://restcountries.com/v2/all`
    const res = await fetch(url);
    let data = await res.json();
    // console.log(data);
    data = displayCountries(data)
}

const displayCountries = (countries) => {
    console.log(countries);
    const showCountries = countries.map(country => displayHTML(country));
    console.log(showCountries[2]);
    const container = document.getElementById('countries-container');
    container.innerHTML = showCountries.join(' ');
}

const displayHTML = country => {
    return `
    <div>
            <h2> ${country.name}</h2>
            <img class="border-secondary bg-primary rounded-2 m-4 " src="${country.flags.png}" alt="">
    </div>
    
    `

}

loadCountries()