$("#create-burger-form").on("submit", (e) => {
    e.preventDefault();

    const burgerData = {
        burger_name: $('[name= "burger_name"]').val()
    };

    $.ajax({
        url:"/api/burgers",
        method : "POST",
        data : burgerData
    }).then(() => 
    {
        location.reload();
    });
});

$(".devour").on("click", function () {

    const burgerId = $(this).data("id");
    const updateRoute = "/api/burgers/" + burgerId;
    const burgerData = {
        devoured : 1
    }
    
    $.ajax({
        url : updateRoute,
        method : "PUT",
        data: burgerData
    }).then(()=> {
        location.reload();
    })
    
});
