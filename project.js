/* 
// Metacrafters - Beginning Javascript
//
// This is a javascript playground for testing your javascript code!
// When you are ready to test, simply right click and select "Run Code"
// to see the result print below. If you have more then one snippet of code,
// you can highlight the code you want to test, and then right click and select "Run Code"
*/

// Enter your code below this line

// Code example
/*
Assessment Requirements
1. Create a variable that can hold a number of NFT's. What type of variable might this be?
2. Create an object inside your mintNFT function that will hold the metadata for your NFTs. 
   The metadata values will be passed to the function as parameters. When the NFT is ready, 
   you will store it in the variable you created in step 1
3. Your listNFTs() function will print all of your NFTs metadata to the console (i.e. console.log("Name: " + someNFT.name))
4. For good measure, getTotalSupply() should return the number of NFT's you have created
*/

// create a variable to hold your NFT's
const NFT=[];

// this function will take in some values as parameters, create an
// NFT object using the parameters passed to it for its metadata, 
// and store it in the variable above.
function mintNFT (name, paintingtype,price,canvastype,_id) {
   const NFTobj= {
        "name": name,
        "paintingtype": paintingtype,
        "price": price,
        "cantype": canvastype,
        "paint_id": _id
    }
    NFT.push(NFTobj);
}

// create a "loop" that will go through an "array" of NFT's
// and print their metadata with console.log()
function listNFTs () {
    for(var i=0;i<NFT.length;i++){
        console.log("painting name: ",NFT[i].name);
        console.log("Painting type: ",NFT[i].paintingtype);
        console.log("Painting price: ",NFT[i].price);
        console.log("Painting canvas type: ",NFT[i].cantype);
        console.log("Painting id: ",NFT[i].paint_id,"\n");
    }
}

// print the total number of NFTs we have minted to the console
function getTotalSupply() {
    console.log("Total NFTs minted= ",NFT.length)
}

// call your functions below this line
mintNFT("Ocean in a bottle","Oil painting","10000 INR", "Oil canvas", 12200);
mintNFT("Ghost village birthday party","Tempera","5K INR", "Absorbent", 12201);
mintNFT("Life inside Indian ocean's hidden territory","Acrylic","50K INR","Universal", 12202);
listNFTs();
getTotalSupply();


