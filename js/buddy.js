const buddy = () => {
    fetch('https://randomuser.me/api/?results=500')
        .then(response => response.json())
        .then(data => getBuddies(data))
}
buddy()
const getBuddies = data => {
    const buddiesContainer = document.getElementById('buddies-container')
    buddiesContainer.style.display = 'flex'
    buddiesContainer.style.flexWrap = 'wrap'
    buddiesContainer.style.border = '2px solid gray'


    const buddie = data.results
    console.log(buddie);
    for (const buddies of buddie) {

        const create = document.createElement('div')
        const create2 = document.createElement('h5')

        create.style.textAlign = 'center'
        create.style.border = '3px solid gray'
        create.style.padding = '8px '
        create.style.margin = '5px '
        create2.style.textAlign = 'center'
        create.innerHTML = `
        <img src=" ${buddies.picture.large} " alt="image--">   
        
        `
        create2.innerText = `
        Name : ${buddies.name.title} ${buddies.name.first} ${buddies.name.last} 
        Date of Brith : ${buddies.dob.date}
        Age : ${buddies.dob.age}
        Phone : ${buddies.cell}
        Email : ${buddies.email}
        Gender : ${buddies.gender}
        ID : ${buddies.id.name} , ${buddies.id.value}
        Loacation : ${buddies.location.city} , ${buddies.location.state}, ${buddies.location.country}
        `
        buddiesContainer.appendChild(create)
        create.appendChild(create2)
    }
}