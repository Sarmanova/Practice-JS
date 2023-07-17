const playlist = [
['Hello', 'So What', '9:00'],
['So What','Respect', '8:20'],
['What a Wonderful World','At Last','2:30' ],
['Three Little Birds', 'The Way You Look Tonight', '6:30']
];
  
// const myArtists = `${playlist[0][1]}`;
// console.log(myArtists);

function myArtists(arg1){
  let song = '';  
 
for(let i = 0; i < arg1.length; i++){
  
     song += `${arg1[i][0]}, by ${arg1[i][1]} - ${arg1[i][2]} `;

}

return song;
}
console.log(myArtists(playlist));
