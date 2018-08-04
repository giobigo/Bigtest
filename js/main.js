$(document).ready(function(){


    $(document).on('click','.delBtn', function(e){
        $(this).parents("tr").hide(1000);

    });


    $('.addBtn').on( 'click', function(e) {
      var number = $('#Number').val();
      var firstname = $('#Firstname').val();
      var surname = $('#Lastname').val();

alert(surname);
     $('tbody').append("<tr><th scope='row'>"+ number +"</th><td>"+firstname+"</td><td>"+surname+"</td><td><button type='button' class='btn btn-danger delBtn' style='min-width:70%;'>Delete</button></td></tr>");
    });

});
