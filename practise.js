const loadquote = () => {
    fetch('https://api.kanye.rest/')
        .then(res => res.json())
        .then(data => displayquote(data))
}
const displayquote = quote => {
    const blockcode = document.getElementById('quote');
    blockcode.innerText = quote.quote;

}

// practise 
const loaduser = () => {
    fetch('https://randomuser.me/api/?results=10')
        .then(res => res.json())
        .then(data => displayuser(data.results))

}
const displayuser = users => {
    const usercontainer = document.getElementById('user-continer');
    for (const user of users) {
        const div = document.createElement('div');
        div.classList.add('post1');
        div.innerHTML = `
        <h3> User Name  </h3>
        <p> ID: ${user.id.name} </p>
        <p> Name: ${user.name.title} ${user.name.first} ${user.name.last}  </p>
        <p> Gender: ${user.gender}   </p>
        <p> Age: ${user.dob.age}  </p>
        <p> date of Birth: ${user.dob.date}  </p>
        <p> Email: ${user.email}  </p>
        <p> Phone: ${user.phone}  </p>
        <p> Cell: ${user.cell}  </p>
        <p> Location : ${user.location.street.number},   ${user.location.street.name},   ${user.location.city},   ${user.location.country}. </p>
       

        `;
        usercontainer.appendChild(div);
    }
}
loaduser();

// country 
const loadcountry = () => {
    fetch('https://restcountries.com/v3.1/all')
        .then(res => res.json())
        .then(data => displycountry(data))

}
const displycountry = countries => {
    const countrycontainer = document.getElementById('country-continer');
    countries.forEach(country => {
        const div = document.createElement('div');
        div.classList.add('post1');
        console.log(country);
        div.innerHTML = `
        <h3> Country Name  </h3>
        <h3>  Name : ${country.name.common}  </h3>
        <p> Official Nmae: ${country.name.official}</p>
        <p> Capital : ${country.capital[0]}  </p>
        <p> Status: ${country.independent === true ? 'Independent' : 'Dependent'}</p>
        <p> Status: ${country.landlocked === true ? 'landlocked' : ' No landlocked'}</p>
        <button onclick="loadcountyrdetails('${country.cca2}')"> Details</button>
        `;
        countrycontainer.appendChild(div);
    });

}
const loadcountyrdetails = (code) => {
    const url = `https://restcountries.com/v3.1/alpha/${code}`
    fetch(url)
        .then(res => res.json())
        .then(data => displycountrydetails(data[0]))
}
const displycountrydetails = (country => {
    const countrydetail = document.getElementById('country-detail');
    countrydetail.innerHTML = `
    <h2> Details : ${country.name.common}</h2>
    <img src="${country.flags.png}">
    `;
})
loadcountry();

