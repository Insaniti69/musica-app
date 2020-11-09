const fs = require('fs')

const addSong = (song) => {
	const songs = readSongs()
	index = songs.findIndex(elem => elem['title'].toLowerCase() === song['title'].toLowerCase() && elem['artist'].toLowerCase() === song['artist'].toLowerCase() && elem['year'] === song['year'])
	if(index >= 0) console.log('The song already exists')
	else{
		songs.push(song)
		fs.writeFile('canciones.json',JSON.stringify(songs),(error,songs)=>{
			if(error) console.log(error)
			else console.log('song added')
		})
	}
}

const readSong = (title) => {
	try{
		const songs = JSON.parse(fs.readFileSync('canciones.json').toString())
		index = songs.findIndex(elem => elem['title'].toLowerCase() === title.toLowerCase())
		if(index >= 0) console.log(songs[index])
		else console.log('Song not found')
	}catch(error){
		console.log(error)
	}
}

const deleteSong = (title) => {
	const songs = readSongs()
	index = songs.findIndex(elem => elem['title'].toLowerCase() === title.toLowerCase())
	if(index >= 0){
		songs.splice(index,1)
		fs.writeFile('canciones.json',JSON.stringify(songs),(error,songs)=>{
			if(error) console.log(error)
			else console.log('Song deleted')
		})
	}else{
		console.log('Song not found')
	}
}

const updateSong = (title,newTitle) => {
	const songs = readSongs()
	index = songs.findIndex(elem => elem['title'].toLowerCase() === title.toLowerCase())
	if(index >= 0){
		songs[index]['title'] = newTitle
		fs.writeFile('canciones.json',JSON.stringify(songs),(error,songs)=>{
			if(error) console.log(error)
			else console.log('Song updated')
		})
	}else{
		console.log('Song not found')
	}
}

const readSongs = () => {
	try{
		return fs.readFileSync('canciones.json').toString() === '' ? [] : JSON.parse(fs.readFileSync('canciones.json').toString())
	}catch(error){
		console.log(error)
		return []
	}
}

const orderSongs = (option) => {
	const songs = readSongs()
	return songs.sort((a,b) => {
		if(option === 'year'){
			if(a[option] < b[option]){
				return -1;
			}else if(a[option] > b[option]){
				return 1;
			}else{
				return 0;
			}
		}
		else{
			if(a[option].toLowerCase() < b[option].toLowerCase()){
				return -1;
			}else if(a[option].toLowerCase() > b[option].toLowerCase()){
				return 1;
			}else{
				return 0;
			}
		}
	});
}

module.exports = {
	addSong,readSong,readSongs,deleteSong,updateSong,orderSongs
}