var xhr = new XMLHttpRequest();

function findHouse(house) {
        $('#exampleModalCenter').on('shown.bs.modal', function () {
          $('#myInput').trigger('focus')
        });
        clearData();
    $.ajax ({
        url: "https://www.anapioficeandfire.com/api/houses/?name=" + house,
        type: "GET",
        dataType: "JSON",
        success: function(response){
            var result = response;

            $(".modal-title").append($(`<p class="navbar-brand">${result[0].name}</p>`))
            $(".modal-body").append($(`
            <p class="card-text"> <b>Founded</b>: ${result[0].founded} </p>
            <p class="card-text"> <b>Region</b>: ${result[0].region} </p>
            <p class="card-text"><b>Coat of Arms</b>: ${result[0].coatOfArms}</p>
            <p class="card-text"> <b>Titles</b>:</p>
            <ul class="card-text">
            <li> ${result[0].titles[0]}</li>
            <li> ${result[0].titles[1]}</li>
            <li> ${result[0].titles[2]}</li>
            <li> ${result[0].titles[3]}</li>
            </ul>
            <p class="card-text"><b>Seats</b></p>
            <ul class="card-text">
            <li> ${result[0].seats[0]}</li>
            <li> ${result[0].seats[1]}</li>
            </ul>
          
            `));
    }});
}
function clearData(){
    $(".modal-title").html("");
    $(".modal-body").html("");
}