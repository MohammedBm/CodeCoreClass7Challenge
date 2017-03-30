# CodeCoreClass7Challenge

This website or application was given to the student of CodeCore 2017 March as a challenge and here is the qeustion

Build a page where the user enters a list of names separated by commas and then upon clicking submit it should select a name at random.

The functionality should be similar to this: http://sinatra-apps.herokuapp.com/pick_random (without the page reload)

Here is my page that i built https://mohammedbm.github.io/CodeCoreClass7Challenge/


Here is the javasciprt code i used

```

$(document).ready(function() {
    $(".button-1").click(function() {
        let name = $('.textArea').val()
        let names = name.split(",");
        $('.button-1').click(function() {
            $("h1").html(`The Winner is ${ randomNum(names)}.`)
        })

    });
});

function randomNum(arr) {
    var randomNumber = Math.floor(Math.random() * arr.length);
    return arr[randomNumber];
}
```

