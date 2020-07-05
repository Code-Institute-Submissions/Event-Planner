var page = 0;

/*calls event calendar function*/
function getEvents(page) {

/*shows event-panel on events page*/
  $('#events-panel').show();
/*hides attraction-panel as not a service being utilised currently*/
  $('#attraction-panel').hide();

/*if page is less then 0 page returns to page 0*/
  if (page < 0) {
    page = 0;
    return;
  }
/*if page is greater than 0 json api data is utilised and data is shown*/
  if (page > 0) {
    if (page > getEvents.json.page.totalPages-1) {
      page=0;
    }
  }
  
/*GET function pulls JSON data from ticketmaster API with api key - 'k8iNAX9SE7TDn02RbQfflg1DikAwjRus'*/
  $.ajax({
    type:"GET",
    url:"https://app.ticketmaster.com/discovery/v2/events.json?apikey=k8iNAX9SE7TDn02RbQfflg1DikAwjRus&size=4&page="+page,
    async:true,
    dataType: "json",
/*success function upon successful api call*/
    success: function(json) {
          getEvents.json = json;
  			  showEvents(json);
             },
/*error function upon unsuccessful api call*/
    error: function(xhr, status, err) {
  			  console.log(err);
  		   }
  });
}
/*calls show events function*/
function showEvents(json) {
/*variable items as listed on events.html*/
  var items = $('#events .list-group-item');
/*hides variable items as json data utilised in display*/
  items.hide();
/*variable event = json data*/
  var events = json._embedded.events;
  var item = items.first();
/*for loop to iterate through json data using name, dates, start, localDate as parameters */
  for (var i=0;i<events.length;i++) {
/*div items as per events.html*/
    item.children('.list-group-item-heading').text(events[i].name);
    item.children('.list-group-item-text').text(events[i].dates.start.localDate);
    try {
      item.children('.venue').text(events[i]._embedded.venues[0].name + " in " + events[i]._embedded.venues[0].city.name);
/*error message log upon error*/
    } catch (err) {
      console.log(err);
    }
/*shows item*/
    item.show();

/*allows iteration to next item in data*/
    item=item.next();
  }
}
/*click function allowing previous page selection through data #prev as per events.html div*/
$('#prev').click(function() {
  getEvents(--page);
});
/*click function allowing next page selection through data #next as per events.html div*/
$('#next').click(function() {
  getEvents(++page);
});

getEvents(page);