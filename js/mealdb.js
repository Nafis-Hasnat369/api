const searchFood = _ => {
    const searchField = document.getElementById("search-field");
    const searchText = searchField.value;
    // clear data
    searchField.value = "";
    // search result
    if (searchText == "") {
        const searchResult = document.getElementById("search-result");
        searchResult.innerHTML = "";
        const div = document.createElement('div');
        div.classList.add("mx-auto");
        div.innerHTML = "<h5>Write something to search...</h5>";
        searchResult.appendChild(div);
    }
    else {
        // load data
        const url = `https://www.themealdb.com/api/json/v1/1/search.php?s=${searchText}`;
        fetch(url)
            .then(res => res.json())
            .then(data => displaySearchResult(data.meals));
    }
}
const displaySearchResult = meals => {
    const searchResult = document.getElementById("search-result");
    searchResult.innerHTML = "";
    if (meals == null) {
        const div = document.createElement('div');
        div.classList.add("mx-auto");
        div.innerHTML = "<h5>No results found!</h5>";
        searchResult.appendChild(div);
    }
    else {
        meals.forEach(meal => {
            const div = document.createElement('div');
            div.classList.add("col");
            div.innerHTML = `
            <div onclick="mealDetail(${meal.idMeal})" class="card h-100">
                    <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
                <div class="card-body">
                    <h5 class="card-title">${meal.strMeal}</h5>
                    <p class="card-text">${meal.strInstructions.slice(0, 200)}</p>
                </div>
            </div>
            `;
            searchResult.appendChild(div);
        })
    }
};
const mealDetail = (mealId => {
    const url = `https://www.themealdb.com/api/json/v1/1/lookup.php?i=${mealId}`;
    fetch(url)
        .then(res => res.json())
        .then(data => displayMealDetail(data.meals[0]));
});
const displayMealDetail = meal => {
    const mealDetails = document.getElementById("meal-details");
    const div = document.createElement('div');
    div.classList.add("card");
    div.innerHTML = `
    <div class="card">
        <img src="${meal.strMealThumb}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title">${meal.strMeal}</h5>
            <p class="card-text">${meal.strInstructions.slice(0, 150)}</p>
            <a href="${meal.strYoutube}" target ="_blank" class="btn btn-primary">Go somewhere</a>
        </div>
    </div>`;
    mealDetails.appendChild(div);
};