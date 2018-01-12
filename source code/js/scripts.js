$(document).ready(function(){
  $("#all").click(function(){
  let channels = ["ESL_SC2","OgamingSC2","cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  let d = [];
  let html ="";
  for (let i = 0; i<channels.length; i++){
    let urltis = "https://wind-bow.glitch.me/twitch-api/streams/"+channels[i]+ '?callback=?';
    d[i] = urltis;
    $.getJSON(d[i],function(donnes){
      if(donnes.stream){
        html += "<div class='row'><div class='col-sm-4 col-xs-4 align-self-center'><img class='imagen' src='"+donnes.stream.channel.logo+
        "' alt=''></div> <div class='col-xs-5 col-sm-5 align-self-center'> <a href='"+donnes.stream.channel.url+"'class='texti' target='_blank'> "+donnes.stream.channel.display_name+
        "</a><p class='status'>"+donnes.stream.channel.status+"</p></div><div class='col-xs-2 align-self-center'><i class='fa fa-circle check' style='font-size:24px;color:green'></i></div></div>"
          }
      else{
        $.getJSON("https://wind-bow.glitch.me/twitch-api/channels/"+channels[i],function(data){
          html += "<div class='row'><div class='col-sm-4 col-xs-4 align-self-center'><img class='imagen' src='"+data.logo+
          "' alt=''></div> <div class='col-xs-5 col-sm-5 align-self-center'> <a href='https://www.twitch.tv/"+channels[i]+"'class='texti' target='_blank'> "+data.display_name+
          "</a><p class='status'>This channel is currently offline</p></div><div class='col-xs-2 align-self-center'><i class='fa fa-circle' style='font-size:24px;color:red'></i></div></div>"
          $("#channels").html(html);
          });
        }
      });
    }
  });
  $("#all").click();
});

$("#online").click(function(){
  let channels = ["ESL_SC2","OgamingSC2","cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  let d = [];
  let html ="";
  for (let i = 0; i<channels.length; i++){
    let urltis = "https://wind-bow.glitch.me/twitch-api/streams/"+channels[i]+ '?callback=?';
    d[i] = urltis;
    $.getJSON(d[i],function(donnes){
      if(donnes.stream){
        html += "<div class='row'><div class='col-sm-4 align-self-center'><img class='imagen' src='"+donnes.stream.channel.logo+
        "' alt=''></div> <div class='col-sm-5 align-self-center'> <a href='"+donnes.stream.channel.url+"'class='texti' target='_blank'> "+donnes.stream.channel.display_name+
        "</a><p class='status'>"+donnes.stream.channel.status+"</p></div><div class='col-sm-2 align-self-center'><i class='fa fa-circle check' style='font-size:24px;color:green'></i></div></div>"
        $("#channels").html(html);
      }
    });
  }
      
});

$("#offline").click(function(){let channels = ["ESL_SC2","OgamingSC2","cretetion", "freecodecamp", "storbeck", "habathcx", "RobotCaleb", "noobs2ninjas"];
  let d = [];
  let html ="";
  for (let i = 0; i<channels.length; i++){
    let urltis = "https://wind-bow.glitch.me/twitch-api/streams/"+channels[i]+ '?callback=?';
    d[i] = urltis;

    $.getJSON(d[i],function(donnes){
      if(donnes.stream == null){
        $.getJSON("https://wind-bow.glitch.me/twitch-api/channels/"+channels[i],function(data){
          html += "<div class='row'><div class='col-sm-4 align-self-center'><img class='imagen' src='"+data.logo+
          "' alt=''></div> <div class='col-sm-5 align-self-center'> <a href='https://www.twitch.tv/"+channels[i]+"'class='texti' target='_blank'> "+data.display_name+
          "</a><p class='status'>This channel is currently offline</p></div><div class='col-sm-2 align-self-center'><i class='fa fa-circle' style='font-size:24px;color:red'></i></div></div>"
          $("#channels").html(html);
          });
        }
      });
    }
  $("#channels").html(html);      
      
    
  });