console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished, tracks){
    let recordObject = {
        title,
        artist,
        yearPublished,
        tracks
    }
    collection.push(recordObject);
    return recordObject;
}
console.log(addToCollection("Blue", "Joni Mitchell", "1971", [["All I Want", "3:34"], ["River", "4:05"], ["A Case of You", "4:23"] ]));
console.log(addToCollection("Trio", "Dolly Parton, Emmylou Harris, Linda Ronstadt", "1987", [["Wildflowers", "3:36"], ["Those Memories of You", "4:01"], ["The Pain of Loving You", "2:34"]]));
console.log(addToCollection("Heart Like A Wheel", "Linda Ronstadt", "1974", [["Willin'", "3:02"], ["You're No Good", "3:43"], ["When Will I Be Loved", "2:09"]]));
console.log(addToCollection("Court and Spark","Joni Mitchell", "1974", [["People's Parties", "2:15"], ["Help Me", "3:22"], ["Same Situation", "2:57"]]));
console.log(addToCollection("Renaissance", "Beyonce", "2022", [["ENERGY", "1:56"], ["ALIEN SUPERSTAR", "3:35"], ["PLASTIC OFF THE SOFA", "4:14"]]));
console.log(addToCollection("Lemonade", "Beyonce", "2016", [["Freedom", "4:50"], ["Pray You Catch Me", "3:16"], ["Daddy Lessons", "4:48"]]));
console.log(collection);

function showCollection(array){
        console.log(array.length); 
        for (recordObject of collection){
            console.log(
            `${recordObject.title} by ${recordObject.artist} published in ${recordObject.yearPublished}: 
            1. ${recordObject.tracks[0][0]}: ${recordObject.tracks[0][1]}
            2. ${recordObject.tracks[1][0]}: ${recordObject.tracks[1][1]}
            3. ${recordObject.tracks[2][0]}: ${recordObject.tracks[2][1]}`
            )//end console log
        }//end for loop 
}
console.log(showCollection(collection));

function findByArtist(artist){
    let artistArray = [];
    for(recordObject of collection){
        if(recordObject.artist === artist){
            artistArray.push(recordObject);
        } //end if true 
    } //end for loop
    return artistArray;
} //end findByArtist

console.log(findByArtist("Joni Mitchell"));
console.log(findByArtist("Beyonce"));
console.log(findByArtist("The Beatles"));
console.log(findByArtist("Linda Ronstadt"));

//Stretch goals

function trackExists(tracksOnAlbum, tracksToSearch){
    if(tracksOnAlbum.indexOf(tracksToSearch) <= 0){
        return true;
    }
    else {
        return false
    }
}

function search(searchObject, array){
    console.log('in search function, searching for:', searchObject , 'in our collection');
    if(Object.keys(searchObject).length === 0){
        return collection 
    }
    let newArray = []
    for(let recordObject of collection){
        if(searchObject.artist === recordObject.artist && searchObject.year === recordObject.yearPublished && (trackExists(recordObject.tracks, searchObject.tracks) === true)){
            newArray.push(recordObject)
            } //end if statement
        } //end for loop 
        return newArray
    }
   
let searchObject = {
    artist: 'Joni Mitchell',
    year: '1971',
    tracks: [['All I Want',"3:34"]]
}
console.log(search(searchObject, collection));

searchObject = {

}
console.log(search(searchObject, collection));

searchObject = {
    artist: 'Joni Mitchell',
    year: '1978'
}
console.log(search(searchObject, collection));

searchObject = {
    artist: 'Linda Ronstadt',
    year: '1974'
}
console.log(search(searchObject, collection));

searchObject = {
    artist: 'Beyonce',
    year: '2022',
    tracks: [['Break My Soul','4:46']]
}
console.log(search(searchObject, collection));

//output needs -a new array of item in collection matching all of the search criteria 
//             -if no results, return empty
//             -
