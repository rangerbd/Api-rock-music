
const searchSongs = () => {
    const searchText =document.getElementById('searchText').value;
    console.log(searchText);

    const url=`https://api.lyrics.ovh/suggest/${searchText}`
    fetch(url)
    
    .then(res => res.json())
    .then(data => displaySongs(data.data));
}
const displaySongs= songs =>{
    console.log(songs)
    const res =document.getElementById('res');
    

    for (let i = 0; i < songs.length; i++) {
        const song = songs[i];
        const div =document.createElement('div');
        div.className='single-result row align-items-center my-3 p-3'
        div.innerHTML=`
        <div class="single-result row align-items-center my-3 p-3">
        <div class="col-md-9">
            <h3 class="lyrics-name">${song.title}</h3>
            <p class="author lead">Album by <span>${song.artist.name}</span></p>
        </div>
        <div class="col-md-3 text-md-right text-center">
            <button class="btn btn-success">Get Lyrics</button>
        </div>
        `
        res.appendChild(div)
        
    }
    
}







// https://api.lyrics.ovh/v1/:artist/:title