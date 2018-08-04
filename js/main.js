$(document).ready(function(){


    $(document).on('click','.delBtn', function(e){
        $(this).parents("tr").hide();
    });


    $('.addBtn').on( 'click', function(e) {
      $('tbody').append("<tr><th scope='row'>"+ $($(this),'nNumber').val()+"</th><td>"+$($(this),'Firstname').val()+"</td><td>"+$($(this),'Surname').val()+"</td><td><button type='button' class='btn btn-danger delBtn' style='min-width:70%;'>Delete</button></td></tr>");
    });

});
