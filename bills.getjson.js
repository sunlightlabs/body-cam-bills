    $(document).ready(function(){
      // url to get geoJSON from
      // var jsonURL = "https://raw.githubusercontent.com/sunlightpolicy/opendata/master/USlocalpolicylocations.geoJSON";
      // get the getJSON from url
            var urlJSON = "billdetails.json";
      $.getJSON(urlJSON, function (data) {
        // gets the locations in the geoJSON that have a city property
        // var locations = [];
              var billsVar = [];
        $.each(data['items'], function(key, val) {
          // if (val['properties'].hasOwnProperty('City') && val['properties']['City'] != '') {
          //   locations.push(val);
          // }
          billsVar.push(val);
        });

        for (var i = 0; i < billsVar.length; i++) {
          // determine which icon to use based on property in geoJSON using ternary operator (shorthand if/else)
          var createdAt = "<li><strong>Bill Created At</strong>: " + billsVar[i]['created_at'] + "</li>";
          // console.log(createdAt);
          // var votes = response.items[0].votes;
          // console.log(votes);
          // var documentsURL = response.items[0].documents[0].url;
          // var documentsURL = "<li><strong>Documents URL</strong>: " + billsVar[i].documents['url'] + "</li>";
          var documentsURL = "<li><strong>Documents URL</strong>: " + billsVar[i]['documents']['url'] + "</li>";
          // response.items[0].documents[0].url;
          // var documentsMimeType = response.items[0].documents[0].mimetype;
          // console.log(documentsMimeType);
          // var documentsDocID = response.items[0].documents[0].doc_id;
          // console.log(documentsDocID);
          var title = "<li><strong>Title</strong>: " + billsVar[i]['title'] + "</li>";
          // var title = response.items[0].title;
          // console.log(title);

          var updatedAt = "<li><strong>Updated At</strong>: " + billsVar[i]['updated_at'] + "</li>";
          var state = "<li><strong>State</strong>: <abbr>" + billsVar[i]['state'] + "</abbr></li>";
          var session = "<li><strong>Session</strong>: " + billsVar[i]['session'] + "</li>";
          var id = "<li><strong>ID</strong>: " + billsVar[i]['id'] + "</li>";
          var billID = "<li><strong>Bill ID</strong>: " + billsVar[i]['bill_id'] + "</li>";

          //  vars not implemented yet!!!

                    // var alternateTitles = response.items[0].alternate_titles;
          // console.log(alternateTitles);
          // var scrapedSubjects = response.items[0].scraped_subjects[0];
          // console.log(scrapedSubjects);
          // var companions = response.items[0].companions;
          // console.log(companions);
          // var allIDs = response.items[0].all_ids
          // console.log(allIDs);
          // var actionsDate = response.items[0].actions[0].date;
          // console.log(actionsDate);
          // var actionsAction = response.items[0].actions[0].action;
          // console.log(actionsAction);
          // var = response.items[0].actions[0].type[0].bill;
          // var actionsRelatedEntitiesType = response.items[0].actions[0].related_entities[0].type;
          // console.log(actionsRelatedEntitiesType);
          // var actionsRelatedEntitiesName = response.items[0].actions[0].related_entities[0].name;
          // console.log(actionsRelatedEntitiesName)
          // var actionsRelatedEntitiesID = response.items[0].actions[0].related_entities[0].id;
          // console.log(actionsRelatedEntitiesID);
          // var actionsActor = response.items[0].actions[0].actor;
          // console.log(actionsActor);
          // var actionsDate1 = response.items[0].actions[1].date;
          // console.log(actionsDate1);
          // var actionsAction1 = response.items[0].actions[1].action;
          // console.log(actionsAction1);
          // var actionsType1 = response.items[0].actions[1].type;
          // console.log(actionsType1);
          // var actionsRelatedEntities1 = response.items[0].actions[1].related_entities[0];
          // console.log(actionsRelatedEntities1);
          // var actionsActor1 = response.items[0].actions[1].actor;
          // console.log(actionsActor1);
          // var actionsDate2 = response.items[0].actions[2].date;
          // console.log(actionsDate2);
          // var actionsAction2 = response.items[0].actions[2].action;
          // console.log(actionsAction2);
          // var actionsType2 = response.items[0].actions[2].type;
          // console.log(actionsType2);
          // var actionsRelatedEntities2 = response.items[0].actions[2].related_entities[0];
          // console.log(actionsRelatedEntities2);
          // var actionsActor2 = response.items[0].actions[2].actor;
          // console.log(actionsActor2);
          // var actionsDate3 = response.items[0].actions[3].date;
          // console.log(actionsDate3);
          // var actionsAction3 = response.items[0].actions[3].action;
          // console.log(actionsAction3);
          // var actionsType3 = response.items[0].actions[3].type;
          // console.log(actionsType3);
          // var actionsRelatedEntities3 = response.items[0].actions[3].related_entities[0];
          // console.log(actionsRelatedEntities3);
          // var actionsActor3 = response.items[0].actions[3].actor;
          // console.log(actionsActor3);
          // var actionsDate4 = response.items[0].actions[4].date;
          // console.log(actionsDate4);
          // var actionsAction4 = response.items[0].actions[4].action;
          // console.log(actionsAction4);
          // var actionsType4 = response.items[0].actions[4].type;
          // console.log(actionsType4);
          // var actionsRelatedEntities4 = response.items[0].actions[4].related_entities[0];
          // console.log(actionsRelatedEntities4);
          // var actionsActor4 = response.items[0].actions[4].actor;
          // console.log(actionsActor4);
          // var actionsDate5 = response.items[0].actions[5].date;
          // console.log(actionsDate5);
          // var actionsAction5 = response.items[0].actions[5].action;
          // console.log(actionsAction5);
          // var actionsType5 = response.items[0].actions[5].type;
          // console.log(actionsType5);
          // var actionsRelatedEntities5 = response.items[0].actions[5].related_entities[0];
          // console.log(actionsRelatedEntities5);
          // var actionsActor5 = response.items[0].actions[5].actor;
          // console.log(actionsActor5);
          // var sponsorsLegID = response.items[0].sponsors[0].leg_id;
          // console.log(sponsorsLegID);
          // var sponsorsType = response.items[0].sponsors[0].type;
          // console.log(sponsorsType);
          // var sponsorsName = response.items[0].sponsors[0].name;
          // console.log(sponsorsName);
          // var updatedAt = response.items[0].updated_at;
          // console.log(updatedAt);
          // var sources = response.items[0].sources[0].url;
          // console.log(sources);
          // var state = response.items[0].state;
          // console.log(state);
          // var session = response.items[0].session;
          // console.log(session);
          // var actionDatesPassedUpper = response.items[0].action_dates.passed_upper;
          // console.log(actionDatesPassedUpper);
          // var actionDatesPassedLower = response.items[0].action_dates.passed_lower;
          // console.log(actionDatesPassedLower);
          // var actionDatesLast = response.items[0].action_dates.last;
          // console.log(actionDatesLast);
          // var actionDatesSigned = response.items[0].action_dates.signed;
          // console.log(actionDatesSigned);
          // var actionDatesFirst = response.items[0].action_dates.first;
          // console.log(actionDatesFirst);
          // var chamber = response.items[0].chamber;
          // console.log(chamber);
          // var versionsURL = response.items[0].versions[0].url;
          // console.log(versionsURL);
          // var versionsMimeType = response.items[0].versions[0].mimetype;
          // console.log(versionsMimeType);
          // var versionsDocID = response.items[0].versions[0].doc_id;
          // console.log(versionsDocID);
          // var versionsName = response.items[0].versions[0].name;
          // console.log(versionsName);
          // var subjects1 = response.items[0].subjects[0];
          // console.log(subjects1);
          // var subjects2 = response.items[0].subjects[1];
          // console.log(subjects2);
          // var subjects3 = response.items[0].subjects[2];
          // console.log(subjects3);
          // var typeArray = response.items[0].type[0];
          // console.log(typeArray);
          // var id = response.items[0].id;
          // console.log(id);
          // var billID = response.items[0].bill_id;
          // console.log(billID);





          
          // concatenate string vars for output:
          var shittiestOutput = "<li><ol class=\"ol-sub\">" + createdAt + documentsURL + title + updatedAt + state + session + id + billID + "</ol></li>";
          // console.log(createdAt);
          // var icon = locations[i]['properties']['WWC'] == 'True' ? wwcIcon : odpIcon;
          // get coordinates of location.
          // var coords = locations[i]['geometry']['coordinates'];
          // var mapPinDate = "<time class=\"leaflet-map-date\" datatime=\"" + locations[i]['properties']['Date'] + "\">" + locations[i]['properties']['Date'] + "</time>"; 
          // var mapPinLinkPolicyURL = "<a class=\"ref-map\" target=\"_blank\" href=\"" + locations[i]['properties']['Policy URL'] + "\">" + locations[i]['properties']['Legal Means'] + " <img class=\"ref-map-link\" src=\"../img/arrow-right-redx020.png\" alt=\"Go to WWC Reference Document\" /></a>";
          // var mapPinH1 = "<h1 class=\"map-pin-h1\">" + locations[i]['properties']['City'] + "</h1>";
          // var mapPinList01 = "<ul class\"xoxo map-pin-list\">";
          // var mapPinList01 = "<ul class=\"xoxo map-pin-list\">";
          // var mapPinList02 = "<li>" + mapPinH1 + "</li>";
          // var mapPinList03 = "<li>" + mapPinDate + "</li>";
          // var mapPinList04 = "<li>" + mapPinLinkPolicyURL + "</li>";
          // var mapPinList05 = "<li><b>Legal Means</b>: " + locations[i]['properties']['Legal Means'] + "</li>";
          // var mapPinListClose = "</ul>";
          // var mapPinListContent = mapPinList01 + mapPinList02 + mapPinList03 + mapPinList04 + mapPinListClose;
          // var mapPinContent = "<div class=\"map-pin-content\">" + mapPinListContent + "</div>";
          
          // create marker at specified coordinates (swapped to convert lat/lng to x/y) and add popup on click.
          // var marker = L.marker([coords[1], coords[0]], {icon: icon}).bindPopup('<a href="' + locations[i]['properties']['Policy URL'] + '">Policy Link</a>').addTo(map);
          // var marker = L.marker([coords[1], coords[0]], {icon: icon}).bindPopup(mapPinContent).addTo(map);
          $("#shittyorderedjsonlist").append(shittiestOutput);
        }
        // $("#shittyorderedjsonlist").append(shittiestOutput);
      });
    });