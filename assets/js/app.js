// array to store topics
// each topic recieves its own button
// each button has its own value('topic')
// the value is stored in variable, when a button is clicked.
// the variable is used as a parameter in the url
// when a button is clicked an ajax request is sent to the  giphy api 
// once the ajax request is complete a function is ran to display the giphys
// the giphy display show only one topic at a time
// the value of the seach input is pushed into the topics array


var animals = ['dog', 'cat', 'rabbit','hamster','turtle','frog'];
console.log(animals);

function renderButton(){
    for( var i in animals ){
        var newButton = $('<button type="button">');
        newButton.attr('value',animals[i]);
        newButton.text(animals[i]);
        $('#buttons-display').append(newButton);
        console.log(newButton.val)
    }
}

renderButton();
