const inStock = ['pizza', 'cookies', 'eggs', 'apples', 'milk', 'cheese', 'bread', 'lettuce', 'carrots', 'broccoli', 'potatoes', 'crackers', 'onions', 'tofu', 'limes', 'cucumbers'];
const search = prompt('Search for a product.');
let message;
//If the user clicks the "Cancel" button in the prompt dialogue, the variable searchText would point to null
if(!search){
        message = alert(`Please select the producte from the list: ${inStock.join(', ')}`);
}

else if(inStock.includes(search).toLowercase()){
    message = alert(`Yes, we have ${search}. It is ${inStock.indexOf(search).toLowercase() +1} on the list`);
}else{
 message = (`Sorry, we do not have have  ${search}`);

}





