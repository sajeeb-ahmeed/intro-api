const serachFood = () => {
    const SearchInput = document.getElementById('SearchInput')
    const searchValue = SearchInput.value;
    SearchInput.value = searchValue;
    SearchInput.value = '';
    if (searchValue == '' || searchValue < 0 || searchValue > 0) {
        const alert = document.getElementById('alert')
        alert.innerHTML = `
        <h4 class="text-center text-danger">! Please Enter A Food Name </h4>
        `
        return alert;
    } else {
        console.log(searchValue);
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchValue}`
        // console.log(url);
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals))
        console.log(url);

    }

}

// meal search result 
const displaySearchResult = meals => {
    const searchResult = document.getElementById('search-container');
    const alert = document.getElementById('alert')
    alert.innerHTML = ''
    searchResult.innerHTML = '';
    meals.forEach(meal => {

        const section = document.createElement('div');
        section.className = "col"
        const slice = meal.strInstructions;

        section.innerHTML = `
      
        <div onclick="mealDetails( ${meal.idMeal})" class="card h-100">
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
       
        `;

        searchResult.appendChild(section)

    });
}

// singel details 
const mealDetails = mealId => {
    console.log(mealId);
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`
    fetch(url)
        .then(res => res.json())
        .then(data => mealSingleDetails(data.meals))
}

const mealSingleDetails = meal => {
    const detailsMeal = document.getElementById('mealDetails')
    meal.forEach(meal => {
        const newDiv = document.createElement('div');
        newDiv.classList.add = 'card';
        newDiv.innerHTML = `
                <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                <h5 class="card-title"> ${meal.strMeal}</h5>
                <h6> IdMeal: ${meal.idMeal} <br>
                   StrArea: ${meal.strArea} <br>
                   StrCategory: ${meal.strCategory}  <br>
                 
                   </h6>
                   <h5> ${meal.strInstructions}</h5>
                    <a href="https://youtu.be/SkrfKXdCPIM" class="btn btn-primary">Go & Watch </a>
                </div>
        
        `;
        detailsMeal.appendChild(newDiv)
    })
}