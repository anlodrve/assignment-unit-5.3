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
console.log(addToCollection("Blue", "Joni Mitchell", "1971"));
console.log(addToCollection("Trio", "Dolly Parton, Emmylou Harris, Linda Ronstadt", "1987"));
console.log(addToCollection("Heart Like A Wheel", "Linda Ronstadt", "1974"));
console.log(addToCollection("Court and Spark","Joni Mitchell", "1974"));
console.log(addToCollection("Renaissance", "Beyonce", "2022"));
console.log(addToCollection("Lemonade", "Beyonce", "2016"));
console.log(collection);

function showCollection(array){
        console.log(array.length); 
        for (recordObject of collection){
            console.log(recordObject.title, 'by', recordObject.artist, 'published in', recordObject.yearPublished );
        }
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



function search(searchObject, array){
    console.log('in search function, searching for:', searchObject , 'in our collection');
    if(Object.keys(searchObject).length === 0){
        return collection 
    }
    let newArray = []
    for(let recordObject of collection){
        if(searchObject.artist === recordObject.artist && searchObject.year === recordObject.yearPublished){
            newArray.push(recordObject)
            } //end if statement
        } //end for loop 
        return newArray
    }
   
let searchObject = {
    artist: 'Joni Mitchell',
    year: '1971'
}
console.log(search(searchObject, collection));

searchObject = {

}
console.log(search(searchObject, collection))

searchObject = {
    artist: 'Joni Mitchell',
    year: '1978'
}
console.log(search(searchObject, collection))

searchObject = {
    artist: 'Linda Ronstadt',
    year: '1974'
}
console.log(search(searchObject, collection));

//output needs -a new array of item in collection matching all of the search criteria 
//             -if no results, return empty
//             -
