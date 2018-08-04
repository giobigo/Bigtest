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

    $('.edBtn').on('click', function(e){

      var number1 = $('.tdNumber').html();
      var firstname1 = $('.tdFirstame').html();
      var surname1 = $('.tdSurname').html();
alert(surname1);
      $('#modalNumber').val(number1);
      $('#modalFirstname').val(firstname1);
      $('#modalSurname').val(surname1);


    })






});
