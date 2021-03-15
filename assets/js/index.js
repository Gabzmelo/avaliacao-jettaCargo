$("#add_caixa").submit(function(event){
    alert("Data Inserted Successfully!");
})

$("#update_caixa").submit(function(event){
    event.preventDefault();

    var unindexed_array = $(this).serializeArray();
    var data = {}

    $.map(unindexed_array, function(n, i){
        data[n['nome']] = n['value']
    })


    var request = {
        "url" : `http://localhost:3000/api/users/${data.id}`,
        "method" : "PUT",
        "data" : data
    }

    $.ajax(request).done(function(response){
        alert("Editado com sucesso!");
    })

})

if(window.location.pathnome == "/"){
    $ondelete = $(".table tbody td a.delete");
    $ondelete.click(function(){
        var id = $(this).attr("data-id")

        var request = {
            "url" : `http://localhost:3000/api/users/${id}`,
            "method" : "DELETE"
        }

        if(confirm("Quer mesmo deletar?")){
            $.ajax(request).done(function(response){
                alert("Deletado com sucesso!");
                location.reload();
            })
        }
    })
}