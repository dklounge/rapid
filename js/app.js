// obtain keys from Parse.com dashboard

var parseID = "nPohS4DhxXsHWMA9SuoQxFCrzxHJDJngATtJOA52";
var parseRestKey = "yd9TPmCIayqrStv7O45PzGKqu9a55zLqzLmcNu8V";

$(document).ready(function() {
  getMessages();
  $("#send").click(function(){
    var username = $('input[name=username]').attr('value');
    var message = $('input[name=message]').attr('value');
    console.log(username)
    console.log('!'')
    $.ajax({
      url: 'https://api.parse.com/1/classes/MessageBoard',
      headers: {
        'X-Parse-Application-ID': parseID,
        'X-Parse-REST-API-Key': parseRestKey
      },
      contentType: 'application/json',
      dataType: 'json',
      processData: false,
      data: JSON.stringify({
        'username': username,
        'message': message
      }),
      type: 'POST',
      succes: function() {
        console.log('sent');
        getMessages();
      },
      error: function() {
        console.log('error');
      }
    });
  });
});

function getMessages() {
  $.ajax({
    url: 'https://api.parse.com/1/classes/MessageBoard',
    headers: {
      'X-Parse-Application-ID': parseID,
      'X-Parse-REST-API-Key': parseRestKey
    },
    contentType: 'application/json',
    dataType: 'json',
    type: 'GET',
    
    succes: function(data) {
      console.log('get');
      updateView(data);
    },
    error: function() {
      console.log('error');
    }
  });
}

function updateView(messages) {
  var table=$('.table tbody');
  table.html('');
  $.each(messages.results, function(index, value) {
    var trEl = 
      $('<tr><td>'
        + value.username
        + '</td><td>'
        + value.message +
        '</td></tr>');
    table.append(trEl);
  });
  console.log(messages);
}