const serachFood = () => {
    const SearchInput = document.getElementById('SearchInput')
    const searchValue = SearchInput.value;
    SearchInput.value = searchValue;
    SearchInput.value = '';
    console.log(searchValue);
    const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
    // console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => displaySearchResult(data.meals))
    console.log(url);
}
const displaySearchResult = meals => {
    SearchInput.value = '';
    console.log(meals);
    const searchResult = document.getElementById('search-container');
    meals.forEach(meal => {

        const section = document.createElement('div');
        section.className = "col"
        const slice = meal.strInstructions;

        section.innerHTML = `
      
        <div class="card h-100">
        <img src="${meal.strMealThumb}" class="card-img-top img-fulid" alt="...">
        <div class="card-body">
            <h5 class="card-title"> ${meal.strMeal}</h5>
            <h6> IdMeal: ${meal.idMeal} <br>
               StrArea: ${meal.strArea} <br>
               StrCategory: ${meal.strCategory}  <br>
             
               </h6>
              
              <small> strInstructions: ${slice.slice(0 , 303 )} <a target="_blank" href="${meal.strSource}">[ Read more...]</a> </small>   <br>
        </div>
    </div>
       
        `

        searchResult.appendChild(section)
        // section.innerHTML = ''
    });
}