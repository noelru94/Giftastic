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

// each animal recieves its own button with value
function renderButton(){
    console.log(animals)
    animals.forEach(animal =>{
        var newButton = $('<button type="button">');
        newButton.addClass('animal');
        newButton.attr('value',animal);
        newButton.text(animal);
        $('#buttons-container').append(newButton);
    })
}
renderButton();


// user search
$('#search').on('click',function(event){
    event.preventDefault();
    var search = $('#search-input').val();
    animals.push(search);
    console.log(animals);

    $('#buttons-container').empty()
    renderButton();
})


// ajax request
$('.animal').on('click',function(){
    $('#giphy-display').empty();
    var animal = $(this).val();
    var apiKEY = 'ugy0m2ClxBHu79FwKgVHVTt0zub1WdlR'
    var queryURL= `https://api.giphy.com/v1/gifs/search?q=${animal}&api_key=${apiKEY}&limit=10`
    console.log(animal);
    $.ajax({
        url: queryURL,
        method: 'GET'
        // display giphy
    }).then(function(response){
        var dataArr = response.data;
        dataArr.forEach(element => {
            var newImage = $('<img>');
            var giphy = newImage.attr('src',element.images.fixed_height.webp);
            $('#giphy-display').append(giphy);
        });;   
    })
})