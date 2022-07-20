function help(){
    console.log(`
    These are some myCLI commands used in various situations:

        1. node main.js tree <path>
        2. node main.js organise <path>
        3. node main.js help
    
    `);
}

module.exports = {
    //key value pair
    //hathi : help
    help: help,

    // ghoda : abc,
    //aise hum export karte time kisi bhi naam se export kr skte hai jis naam se hamara function doosri file mei jana jayega
    //aise hum functions aur saath hi variables bhi import kar sakte hai
    
}