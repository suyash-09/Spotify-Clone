console.log("Welcome to Spotify");

//Initializing the variables
let songIndex = 0;
let audioElement = new Audio('songs/1.mp3');
let masterPlay = document.getElementById('masterPlay');
let myprogressbar = document.getElementById('myprogressbar');
let gif = document.getElementById('gif');
let masterSongName = document.getElementById('masterSongName');
let songItems = Array.from(document.getElementsByClassName('songItem'));

let songs = [
    {songName:"Avicii - Wake Me Up", filePath:"songs/1.mp3", coverPath:"covers/1.png"},
    {songName:"The Chainsomkers - Closer", filePath:"songs/2.mp3", coverPath:"covers/2.jpg"},
    {songName:"Alan Walker - Faded", filePath:"songs/3.mp3", coverPath:"covers/3.jpg"},
    {songName:"Apocalypse - Cigarettes After Sex", filePath:"songs/4.mp3", coverPath:"covers/4.jpg"},
    {songName:"Avicii - Waiting for Love", filePath:"songs/5.mp3", coverPath:"covers/5.jpg"},
    {songName:"One Direction - Perfect", filePath:"songs/6.mp3", coverPath:"covers/6.jpg"},
    {songName:"Steve Aoki & Louis Tomlinson - Just Hold On ", filePath:"songs/7.mp3", coverPath:"covers/7.jpg"},
    {songName:"Swedish House Mafia - Don't Worry Child", filepPth:"songs/8.mp3", coverPath:"covers/8.jpg"},
    {songName:"Stephen Sanchez - Until I Found You", filePath:"songs/9.mp3", coverPath:"covers/9.jpg"},
    {songName:"Dua Lipa - Levitating ", filePath:"songs/9.mp3", coverPath:"covers/10.jpg"},


]

songItems.forEach((element, i)=>{
    // console.log(element, i);
    element.getElementsByTagName("img").src = songs[i].coverPath;
    element.getElementsByClassName("songName").innerText = songs[i].coverPath;

})

// audioelement.play();

//Handle play/pause click
masterPlay.addEventListener('click', ()=>{
    if(audioElement.paused || audioElement.currentTime<=0){
        audioElement.play();
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause')
        gif.style.opacity = 1;
    }
    else{
        audioElement.pause();
        masterPlay.classList.remove('fa-circle-pause');
        masterPlay.classList.add('fa-circle-play');
        gif.style.opacity = 0;
    }
})
//Listen to events
audioElement.addEventListener('timeupdate', ()=>{
    // console.log('timeupdate');
    //Update Seekbar
    progress =parseInt((audioElement.currentTime/audioElement.duration) * 100);
    // console.log(progress);
    myprogressbar.value = progress;
})

myprogressbar.addEventListener('change', ()=>{
    audioElement.currentTime = myprogressbar.value * audioElement.duration/100;
})

const makeAllPlays = ()=>{
    Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.classList.remove('fa-circle-pause');
    element.classList.add('fa-circle-play');
    })
}
Array.from(document.getElementsByClassName('songItemPlay')).forEach((element)=>{
    element.addEventListener('click', (e)=>{
        console.log(e.target);
        makeAllPlays();
        songIndex = parseInt(e.target.id);
        e.target.classList.remove('fa-circle-play');
        e.target.classList.add('fa-circle-pause');
        audioElement.src = `songs/${songIndex+1}.mp3`;
        masterSongName.innerText = songs[songIndex].songName;
        audioElement.currentTime = 0; 
        audioElement.play();
        gif.style.opacity = 1;
        masterPlay.classList.remove('fa-circle-play');
        masterPlay.classList.add('fa-circle-pause');
    })
})

document.getElementById('next').addEventListener('click', ()=>{
    if(songIndex>=9){
        songIndex += 0;
    }
    else{
        songIndex += 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0; 
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})

document.getElementById('previous').addEventListener('click', ()=>{
    if(songIndex<=0){
        songIndex = 0;
    }
    else{
        songIndex -= 1;
    }
    audioElement.src = `songs/${songIndex+1}.mp3`;
    masterSongName.innerText = songs[songIndex].songName;
    audioElement.currentTime = 0; 
    audioElement.play();
    masterPlay.classList.remove('fa-circle-play');
    masterPlay.classList.add('fa-circle-pause');
})
