//Declaring all of the variables being used.
var year = prompt('Pick any year in time');
var areacode = prompt('Pick an area code');
var store = prompt('Pick a store');
var item = prompt('Pick an item in the store');
var item2 = prompt('Pick an item you dont have');
var bodymotion = prompt('Pick a body motion. Like "wave"');
var aorp = prompt('Choose an animal or a person');
var actionverb = prompt('Pick an action verb.');
var city = prompt('Pick any city.');

//Function to validate that the area code is a real area code
function areacodevalidator (ac,areac){
    if(ac.length = 0){
        var areac = prompt('Please enter a valid areac ode');
        areac = areaccode;
    }else if (ac.length > 3) {
        areac = prompt('Please enter a valid area code.');
        areac = areacode;
    }
};
//Validating user inputs so they are valid
while (isNaN(year) || year === ""){
    year = prompt('Please enter a valid year.');
};
while (isNaN(areacode)|| areacode === ""){
    areacodevalidator();
};
while (store ===""|| store.isInteger){
    store = prompt('Please enter a valid store name.');
};
while (item ===""|| item.isInteger){
    item = prompt('Please enter a valid store name.');
};
while (item2 ===""|| item2.isInteger){
    item2 = prompt('Please enter a valid store name.');
};
while (bodymotion ===""|| bodymotion.isInteger){
    bodymotion = prompt('Please enter a valid store name.');
};
while (aorp ===""|| aorp.isInteger){
    aorp = prompt('Please enter a valid store name.');
};
while (actionverb ===""|| actionverb.isInteger){
    actionverb = prompt('Please enter a valid store name.');
};
while (city ===""|| city.isInteger){
    city = prompt('Please enter a valid store name.');
};


console.log('In the year of ' + year + ' and in the most hood part of the ' + areacode +'. I went down to the '+ store +' to get '+ item +'. Only to realize that I had no ' + item2 + ' so, I decided to '+ bodymotion +'voilently. I turn around to go back to my house to see (a) '  + aorp +' '+ actionverb + ' in my kitchen. After that I knew I needed to sell my house and go live in '+ city +' to avoid this again.');

var useritemsarray = [year,areacode,store,item,item2,bodymotion,aorp,actionverb,city];
for(i=0; i < useritemsarray.length; i++){
    console.log('Here is what you entered: ' + useritemsarray[i]);
}
