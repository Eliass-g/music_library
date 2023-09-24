const library = {
  tracks: { t01: { id: "t01",
                   name: "Code Monkey",
                   artist: "Jonathan Coulton",
                   album: "Thing a Week Three" },
            t02: { id: "t02",
                   name: "Model View Controller",
                   artist: "James Dempsey",
                   album: "WWDC 2003"},
            t03: { id: "t03",
                   name: "Four Thirty-Three",
                   artist: "John Cage",
                   album: "Woodstock 1952"}
          },
  playlists: { p01: { id: "p01",
                      name: "Coding Music",
                      tracks: ["t01", "t02"]
                    },
               p02: { id: "p02",
                      name: "Other Playlist",
                      tracks: ["t03"]
                    }
             }
};

/////////////////////////////
// FUNCTIONS TO IMPLEMENT:
/////////////////////////////

// prints a list of all playlists, in the form:
// p01: Coding Music - 2 tracks
// p02: Other Playlist - 1 tracks
const printPlaylists = function() {
  for (let key in library.playlists) {
    console.log(`${key}: ${library.playlists[key].name} - ${library.playlists[key].tracks.length} tracks`);
  }
};

//printPlaylists();

// prints a list of all tracks, using the following format:
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
// t03: Four Thirty-Three by John Cage (Woodstock 1952)
const printTracks = function() {
  for (let key in library.tracks) {
    console.log(`${key}: ${library.tracks[key].name} by ${library.tracks[key].artist} (${library.tracks[key].album})`);
  }
};

//printTracks();

// prints a list of tracks for a given playlist, using the following format:
// p01: Coding Music - 2 tracks
// t01: Code Monkey by Jonathan Coulton (Thing a Week Three)
// t02: Model View Controller by James Dempsey (WWDC 2003)
const printPlaylist = function(playlistId) {
  let tracks1 = library.playlists[playlistId].tracks;
  console.log(`${playlistId}: ${library.playlists[playlistId].name}: - ${tracks1.length} tracks`);
  for (let key1 of tracks1) {
    console.log(`${key1}: ${library.tracks[key1].name} by ${library.tracks[key1].artist} (${library.tracks[key1].album})`);
  }
};

//printPlaylist('p01');

// adds an existing track to an existing playlist
const addTrackToPlaylist = function(trackId, playlistId) {
  library.playlists[playlistId].tracks.push(trackId);
};

//addTrackToPlaylist('t03', 'p01');
//console.log(library.playlists.p01.tracks);


// generates a unique id
// (already implemented: use this for addTrack and addPlaylist)
const generateUid = function() {
  return Math.floor((1 + Math.random()) * 0x10000).toString(16).substring(1);
};


// adds a track to the library
const addTrack = function(name, artist, album) {
  const idTrack = generateUid();
  library.tracks[idTrack] = {};
  library.tracks[idTrack].id = idTrack;
  library.tracks[idTrack].name = name;
  library.tracks[idTrack].artist = artist;
  library.tracks[idTrack].album = album;
};

//addTrack('qwesss', 'asdssssss', 'zxcssssss');
//console.log(library);

// adds a playlist to the library
const addPlaylist = function(name) {
  const idPlaylist = generateUid();
  library.playlists[idPlaylist] = {};
  library.playlists[idPlaylist].id = idPlaylist;
  library.playlists[idPlaylist].name = name;
  library.playlists[idPlaylist].tracks = [];
};

//addPlaylist("asdfgfhh");
//console.log(library);


// STRETCH:
// given a query string string, prints a list of tracks
// where the name, artist or album contains the query string (case insensitive)
// tip: use "string".search("tri")
// https://developer.mozilla.org/en-US/docs/Web/JavaScript/Reference/Global_Objects/String/search
const printSearchResults = function(query) {
  let result = [];
  let query2 = query.toLowerCase();
  for (let key in library.tracks) {
    if (library.tracks[key].name.toLowerCase().search(query2) !== -1) {
      result.push(key);
    } else if (library.tracks[key].artist.toLowerCase().search(query2) !== -1) {
      result.push(key);
    } else if (library.tracks[key].album.toLowerCase().search(query2) !== -1) {
      result.push(key);
    }
  }
  console.log(result);
};

//printSearchResults('model');