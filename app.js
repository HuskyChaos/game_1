function checkResize() {
  // if ( $(document).innerWidth() < $(document).innerHeight() ) {
  //   alert("Rotate Your Mobile Screen To Play This Game!");
  //   location.reload();
  // }
  if ( innerWidth < innerHeight || innerWidth < 400 ) {

    alert("Not Ready For Mobile Yet!");
    var objWindow = window.open(location.href, "_self");
    objWindow.close();

  }
}

$(document).ready(function () {

  if ( innerWidth < innerHeight || innerWidth < 400 ) {
    
    alert("Not Ready For Mobile Yet!");
    var objWindow = window.open(location.href, "_self");
        objWindow.close();

  }

  else {
    
    let player_1 = prompt('Name Of Player 1:');
    let player_2 = prompt('Name Of Player 2:');

    let score_p1 = 0;
    let score_p2 = 0;

    if (player_1 == '' || player_1 === null) {
      player_1 = 'Player 1'
    }

    if (player_2 == '' || player_2 === null) {
      player_2 = 'Player 2'
    }

    if (player_1.toLowerCase() === player_2.toLowerCase()) {
      alert("Choose Diffrent Names!");
      location.reload();
    }

    else {

      
      $('.p1name').append(player_1.toUpperCase());
      $('#score_p1').append(score_p1);
      $('.p2name').append(player_2.toUpperCase());
      $('#score_p2').append(score_p2);

      let will_increase = true;
      
      
      let current_width_p1;
      let current_width_p2;
      
      function reset() {

        current_width_p1 = '50%';
        current_width_p2 = '50%';

        will_increase = true;

        $('.player1').css('width', current_width_p1);
        $('.player1 h1').text('');
        $('.player2').css('width', current_width_p2);
        $('.player2 h1').text('');
      }

      $('.player1').click(function () {

        current_width_p1 = $('.player1').width();
        current_width_p2 = $('.player2').width();

        if (current_width_p1 <= 2) {
          $('.player2 h1').text(`${player_2} Won!`);
        }
        else if (current_width_p2 <= 2) {
          $('.player1 h1').text(`${player_1} Won!`);
        }

        else {
          current_width_p1+=10;
          current_width_p2-=10;
                        
          $('.player1').css('width', current_width_p1);
          $('.player2').css('width', current_width_p2);
        }
      });

      $('.player2').click(function () {

        current_width_p1 = $('.player1').width();
        current_width_p2 = $('.player2').width();

        if (current_width_p1 <= 2) {
          if (will_increase) {
            $('.player2 h1').text(`${player_2} Won!`);
            score_p2 += 1;
            $('#score_p2').text(score_p2);
            will_increase = false;
          }
          else {
            setTimeout(reset,2000);
          }
        }
        else if (current_width_p2 <= 2) {
          if (will_increase) {
            $('.player1 h1').text(`${player_1} Won!`);
            score_p1 += 1;
            $('#score_p1').text(score_p1);
            will_increase = false;
          }
          else {
            setTimeout(reset,2000);
          }
        }
        else {
          current_width_p2+=10;
          current_width_p1-=10;
    
          $('.player2').css('width', current_width_p2);
          $('.player1').css('width', current_width_p1);
        }
      });

      
      $(document).keydown(function (e) {


        current_width_p1 = $('.player1').width();
        current_width_p2 = $('.player2').width();

        if (current_width_p1 <= 2) {
          if (will_increase) {
            $('.player2 h1').text(`${player_2} Won!`);
            score_p2 += 1;
            $('#score_p2').text(score_p2);
            will_increase = false;
          }
          else {
            setTimeout(reset,2000);
          }
        }
        else if (current_width_p2 <= 2) {
          if (will_increase) {
            $('.player1 h1').text(`${player_1} Won!`);
            score_p1 += 1;
            $('#score_p1').text(score_p1);
            will_increase = false;
          }
          else {
            setTimeout(reset,2000);
          }
        }

        else {

          if (e.code == 'KeyS') {
  
            current_width_p1+=10;
            current_width_p2-=10;
                      
            $('.player1').css('width', current_width_p1);
            $('.player2').css('width', current_width_p2);
  
          }
  
          else if (e.code == 'KeyK') {
  
            current_width_p2+=10;
            current_width_p1-=10;
  
            $('.player2').css('width', current_width_p2);
            $('.player1').css('width', current_width_p1);
  
          }
        }
      });
    }
  }
  


});