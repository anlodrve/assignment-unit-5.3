console.log('***** Music Collection *****')
let collection = [];
function addToCollection(title, artist, yearPublished){
    let recordObject = {
        title,
        artist,
        yearPublished
    }
    collection.push(recordObject);
    return recordObject;
}
console.log(addToCollection("Blue", "Joni Mitchell", "1971"));
console.log(addToCollection("Trio", "Dolly Parton, Emmylous Harris, Linda Ronstadt", "1987"));
console.log(addToCollection("Heart Like A Wheel", "Linda Ronstadt", "1974"));
console.log(addToCollection("Court and Spark","Joni Mitchell", "1974"));
console.log(addToCollection("Renaissance", "Beyonce", "2022"));
console.log(addToCollection("Lemonade", "Beyonce", "2016"));
console.log(collection);


