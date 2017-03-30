//
// $(document).ready(function(){
//   $(".btnLoc").click(function(){
//     var name = $('.textArea').val()
//     alert(name);
//   });
// });
//
// $('.button-1').click(function(){
// 	$('.button-1').attr("value","hello");
// });
//
//
// $(".butßton-1").click(function(){
//   let name = document.getElementsByClassName('textArea')
//   let s =name.value;
//   console.log(s)
// })

// $(document).ready(function(){
//   $(".button-1").click(function(){
//     var name = $('.textArea').val()
// 	  name.split(",");
//     let ranName = names[Math.floor(Math.random()*items.length)];
//
//   });
// });
//names
//Taylor,Jonathan,Kayla,Christopher,Eva,Jace,Brianna,Riley,Ruby,Xavier,Laure,Hudson,Alice,Adrian,Violel,Cole,Kendal,Brody,Morgan,Leo,Caroline,Jake,Piper,Bentley,Brooke,Sean,Elise,Jeremiah,Alexa,Asher,Sienna,Rees,Nathaniel,Micah,Clara,Jason,Paige,Kate,Ryder,Declan,Hayden,Nevaeh,Sadie,Brandon,Quinn,Easton,Lincoln,Isla,Eleanor,Harrison
//i split the name using jquery let str = "Taylor Jonathan Kayla Christopher Eva Jace Brianna Riley Ruby Xavier Laure Hudson Alice Adrian Violel Cole Kendal Brody Morgan Leo Caroline Jake Piper Bentley Brooke Sean Elise Jeremiah Alexa Asher Sienna Rees Nathaniel Micah Clara Jason Paige Kate Ryder Declan Hayden Nevaeh Sadie Brandon Quinn Easton Lincoln Isla Eleanor Harrison"
//str.split(/[ ,]+/).join(',')


$(document).ready(function() {
    $(".button-1").click(function() {
        let name = $('.textArea').val()
        let names = name.split(",");
         $("h1").html(`The Winner is ${ randomNum(names)}.`)
    });
});

function randomNum(arr) {
    var randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
}
