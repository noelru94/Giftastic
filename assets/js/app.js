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



//


// each animal recieves its own button with value
function renderButton(){
    for( var i in animals ){
        var newButton = $('<button type="button">');
        newButton.addClass('animal');
        newButton.attr('value',animals[i]);
        newButton.text(animals[i]);
        $('#buttons-container').append(newButton);
    }
}

renderButton();



// ajax request
$('.animal').on('click',function(){
    var animal = $(this).val();
    var apiKEY = 'ugy0m2ClxBHu79FwKgVHVTt0zub1WdlR'
    var queryURL= `http://api.giphy.com/v1/gifs/search?q=${animal}&api_key=${apiKEY}&limit=10`
    console.log(animal);
    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        console.log(response)
    })
})