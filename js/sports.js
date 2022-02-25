const playersList = () => {
    const inputFeild = document.getElementById('inputFeild');
    const input = inputFeild.value;
    inputFeild.value = '';
    console.log(input);
    document.getElementById('spinner').style.display = 'block';
    const url = (`https://www.thesportsdb.com/api/v1/json/2/searchplayers.php?p=${input}`)
    console.log(url);
    fetch(url)
        .then(res => res.json())
        .then(data => playerInfo(data.player[0]))
    // console.log(playerInfo(data.player))
}
// playersList()

const playerInfo = players => {
    const playerContainer = document.getElementById('players-container')
    playerContainer.innerHTML = ''
    document.getElementById('spinner').style.display = 'none';
    const div = document.createElement('div')
    div.className = 'col';
    const slice = players.strDescriptionEN;
    div.innerHTML = `
        <div class="card h-100">
        <img src="${players.strCutout}" class="card-img-top" alt="...">
        <div class="card-body">
            <h5 class="card-title"> ${players.strPlayer}</h5>
          <p class="card-text">${slice.slice(0, 599)}.</p>
          <p class="card-text"><b>Country:</b> ${players.strNationality}</small></p>
          <h4> Position: ${players.strPosition}</h4>
          <h4> CLub : ${players.strTeam}</h4>
        </div>
    </div>

        `
    playerContainer.appendChild(div)

}