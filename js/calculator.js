
var cena;
var i = 0;
$('#magento').hide();
$('#magento_opis').hide();
//$('#choose').hide();
$("#status").val('landing');
$(document).ready( function() {
if ($('#status').val() === 'landing') {
          $('#choose').show();
            $('.store_type').hide("fast");
          $('#magento_opis').hide("fast");
          $('#magento').hide("fast");
              if (i === 0){
                      cena = 200;}
                    else if (i === 1){
                        cena = 200;
                      cena= cena*1.5;
                    }
              $("#cena").empty();
              $("#cena").append(cena);
        }
});


$(document).ready(function () {
     $('#status').bind('change', function (e){ 
        if( $('#status').val() === 'landing') {
          $('#choose').show();
            $('.store_type').hide("fast");
          $('#magento_opis').hide("fast");
          $('#magento').hide("fast");
              if (i === 0){
                      cena = 200;}
                    else if (i === 1){
                        cena = 200;
                      cena= cena*1.5;
                    }
              $("#cena").empty();
              $("#cena").append(cena);
        }
        else if( $('#status').val() === 'sklep') {
          $('#choose').show();
            $('.store_type').show("fast");
          $('#magento').show();
          $('#magento_opis').show("fast");
          $('#magento').val('silver');
            $(document).ready( function() { 
                  if( $('#magento').val() === 'silver') {
                     if (i === 0){
                      cena = 2500;}
                    else if (i === 1){
                      cena=2500;
                      cena= cena*1.5;
                    }
                      $("#cena").empty();
                      $("#cena").append(cena);
                    }
            }); 
          $(document).ready( function() {
               $('#magento').bind('change', function (e) { 
                
                   if( $('#magento').val() === 'silver') {
                    console.log("jestem w pętli");
                  
                        if (i === 0){
                      cena=2500;}
                    else if (i === 1){
                        cena = 2500;
                      cena= cena*1.5;
                    }
                        $("#cena").empty();
                        $("#cena").append(cena);
                  }
                 
                 else if( $('#magento').val() === 'gold') {
                    console.log("jestem w pętli");
                        if (i === 0){
                      cena=3300;}
                    else if (i === 1){
                        cena = 3300;
                      cena= cena*1.5;
                    }
                        $("#cena").empty();
                        $("#cena").append(cena);
                  }
                 else if( $('#magento').val() === 'platinum') {
                      if (i === 0){
                      cena=4900;}
                    else if (i === 1){
                        cena = 4900;
                      cena= cena*1.5;
                    }
                      $("#cena").empty();
                      $("#cena").append(cena); 
                 }
                });
                });
                 
               
          
              $("#cena").empty();
              $("#cena").append(cena);

        }
        else if( $('#status').val() === 'firmowa') {
          $('#choose').show();
            $('.store_type').hide("fast");
          $('#magento_opis').hide("fast");
          $('#magento').hide("fast");
          if (i === 0){
                      cena = 500;}
                    else if (i === 1){
                        cena = 500;
                      cena= cena*1.5;
                    }
              $("#cena").empty();
              $("#cena").append(cena);
        }
      });
  });
$(document).ready( function() {          
$("#radio_button").click(function(){
$(function(){
    $("#cena").each(function() {
      
        if(i === 0) {
          
          cena = cena * 1.5;
          $("#cena").empty();
          $("#cena").append(cena);
          $('#radio_button').css("background","black");
          i = i +1;
        }
      else {
        cena = cena / 1.5;
          $("#cena").empty();
          $("#cena").append(cena);
        $('#radio_button').css("background","none");
        i = i - 1;
      }
});
});
});
    
                });