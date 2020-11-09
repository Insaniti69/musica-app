const {addSong,readSong,readSongs,deleteSong,updateSong,orderSongs} = require('./canciones')
const yargs = require('yargs')

yargs.command({
	command: 'add',
	describe: 'add song to file json',
	builder: {
		title: {
			describe: 'title',
			demandOption: true,
			type: 'string'
		},
		artist: {
			describe: 'artist',
			demandOption: true,
			type: 'string'
		},
		year: {
			describe: 'year',
			demandOption: true,
			type: 'number'
		}
	},
	handler(argv) {
		addSong({title:argv.title,artist:argv.artist,year:argv.year})
	}
})

yargs.command({
	command: 'readSong',
	describe: 'read song passing the title',
	builder: {
		title: {
			describe: 'title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		readSong(argv.title)
	}
})

yargs.command({
	command: 'readSongs',
	describe: 'read all songs',
	builder: {
	},
	handler(argv) {
		console.log(readSongs())
	}
})

yargs.command({
	command: 'deleteSong',
	describe: 'delete song passing the title',
	builder: {
		title: {
			describe: 'title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		deleteSong(argv.title)
	}
})

yargs.command({
	command: 'updateSong',
	describe: 'update song passing the title',
	builder: {
		title: {
			describe: 'title',
			demandOption: true,
			type: 'string'
		},
		newTitle: {
			describe: 'new title',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		updateSong(argv.title,argv.newTitle)
	}
})


yargs.command({
	command: 'orderSongs',
	describe: 'order songs by artist or year',
	builder: {
		option: {
			describe: 'artist or year',
			demandOption: true,
			type: 'string'
		}
	},
	handler(argv) {
		console.log(orderSongs(argv.option))
	}
})

yargs.parse()