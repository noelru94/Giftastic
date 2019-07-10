var animals = ['dog', 'cat', 'rabbit','hamster','turtle','frog'];

// each animal recieves its own button with value
function renderButton(){
    animals.forEach(animal =>{
        var newButton = $('<button type="button">');
        newButton.addClass('animal');
        newButton.attr('value',animal);
        newButton.text(animal);
        $('#buttons-container').append(newButton);
    })
}


// search form
$('#search').on('click',function(event){
    event.preventDefault();
    var search = $('#search-input').val();
    animals.push(search);
    $('#buttons-container').empty()
    renderButton();
})


function displayGiphy(){
    $('#giphy-display').empty();
    var animal = $(this).val();
    var apiKEY = 'ugy0m2ClxBHu79FwKgVHVTt0zub1WdlR';
    var queryURL= `https://api.giphy.com/v1/gifs/search?q=${animal}&api_key=${apiKEY}&limit=10`;

    $.ajax({
        url: queryURL,
        method: 'GET'
    }).then(function(response){
        var dataArr = response.data;
        dataArr.forEach(element => {
            var animate = element.images.fixed_height.webp;
            var still = element.images.original_still.url
            var rating = element.rating;
            var card = 
            $(`<div class="card" style="width: 19rem; display: inline-block">
            <img class="giphy card-img-top" style="width:100%" data-animate="${animate}" data-still="${still} data-state="still" src="${still}">
                <div class="card-body">
                    <h3 class="card-title"></h3>
                    <p class="card-text"> Rating: ${rating}</p>
                </div>
            </div>`);
            $('#giphy-display').append(card);
        });; 
    })
}


function animate(){
    var state = $(this).attr('data-state')
    if( state === 'still' ){
        $(this).attr('src',$(this).attr('data-animate'));
        $(this).attr('data-state','animate');
    }else{
        $(this).attr('src',$(this).attr('data-still'));
        $(this).attr('data-state','still');
    }
}

renderButton();
$(document).on('click','.animal',displayGiphy)
$(document).on('click','.giphy', animate)