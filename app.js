const searchsongs= () =>{
    const searchbox= document.getElementById('searchbox').value;
    const url=(`https://api.lyrics.ovh/suggest/${searchbox}`)
    console.log(url)
    fetch(url)
    .then(res => res.json())
    .then(data => console.log(data))
}