var xhr = new XMLHttpRequest();

function findBook(book) {
        clearData();
    $.ajax ({
        url: "https://www.anapioficeandfire.com/api/books/?name=" + book,
        type: "GET",
        dataType: "JSON",
        success: function(response){
            var result = response;
            console.log(result);
           $(".modal-title").append($(`<p class="navbar-brand">${result[0].name}</p>`))
            $(".modal-body").append($(`
            <p class="card-text"> <b>Number of Pages</b>: ${result[0].numberOfPages} </p>
            <p class="card-text"> <b>Authors</b>: ${result[0].authors[0]} </p>
            <p class="card-text"><b>Publisher</b>: ${result[0].publisher}</p>
            <p class="card-text"><b>Released</b>: ${result[0].released}</p>
            <p class="card-text"><b>Media Type</b>: ${result[0].mediaType}</p>
            `));
    }});
}
function clearData(){
    $(".modal-title").html("");
    $(".modal-body").html("");
}