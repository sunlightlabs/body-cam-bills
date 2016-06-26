var map = L.map('map').setView([37.8, -96], 4);
L.tileLayer('https://api.tiles.mapbox.com/v4/{id}/{z}/{x}/{y}.png?access_token=pk.eyJ1IjoibWFwYm94IiwiYSI6ImNpandmbXliNDBjZWd2M2x6bDk3c2ZtOTkifQ._QA7i5Mpkd_m30IGElHziw', {
	maxZoom: 18,
	attribution: 'Map data &copy; <a href="http://openstreetmap.org">OpenStreetMap</a> contributors, ' +
'<a href="http://creativecommons.org/licenses/by-sa/2.0/">CC-BY-SA</a>, ' +
'Imagery © <a href="http://mapbox.com">Mapbox</a>',
	id: 'mapbox.light'
}).addTo(map);
// control that shows state info on hover
var info = L.control();
info.onAdd = function (map) {
	this._div = L.DomUtil.create('div', 'info');
	this.update();
	return this._div;
};
info.update = function (props) {
	this._div.innerHTML = '<h4>State Body Cam Policy Comparison</h4>' +  (props ?
'<b>' + props.name + '</b><br />' + props.density + ' people / mi<sup>2</sup>'
: 'Hover over a state');
};
info.addTo(map);
// get color depending on population density value
function getColor(d) {
	return d > 1000 ? '#800026' :
	       d > 500  ? '#BD0026' :
	       d > 200  ? '#E31A1C' :
	       d > 100  ? '#FC4E2A' :
	       d > 50   ? '#FD8D3C' :
	       d > 20   ? '#FEB24C' :
	       d > 10   ? '#FED976' :
	                  '#FFEDA0';
}
function style(feature) {
	return {
		weight: 2,
		opacity: 1,
		color: 'white',
		dashArray: '3',
		fillOpacity: 0.7,
		fillColor: getColor(feature.properties.density)
	};
}
function highlightFeature(e) {
	var layer = e.target;
	layer.setStyle({
		weight: 5,
		color: '#666',
		dashArray: '',
		fillOpacity: 0.7
	});
	if (!L.Browser.ie && !L.Browser.opera) {
		layer.bringToFront();
	}
	info.update(layer.feature.properties);
}
var geojson;
function resetHighlight(e) {
	geojson.resetStyle(e.target);
	info.update();
}
function zoomToFeature(e) {
	map.fitBounds(e.target.getBounds());
}
function onEachFeature(feature, layer) {
	layer.on({
		mouseover: highlightFeature,
		mouseout: resetHighlight,
		click: zoomToFeature
	});
}
geojson = L.geoJson(statesData, {
	style: style,
	onEachFeature: onEachFeature
}).addTo(map);
map.attributionControl.addAttribution('Population data &copy; <a href="http://census.gov/">US Census Bureau</a>');
var legend = L.control({position: 'bottomright'});
legend.onAdd = function (map) {
	// var div = L.DomUtil.create('div', 'info legend'),
	var div = L.DomUtil.create('ol', 'info legend'),
	grades = [0, 10, 20, 50, 100, 200, 500, 1000],
	labels = [],
	from, to;
	for (var i = 0; i < grades.length; i++) {
		from = grades[i];
		to = grades[i + 1];
		labels.push(
			// '<i style="background:' + getColor(from + 1) + '"></i> ' +
			'<li><i class=\"legend-color\" style="background:' + getColor(from + 1) + '"></i> <b class=\"legend-range\">' +
			from + (to ? '&ndash;' + to : '+') + "</b></li>");
	}
	// need '' in below join function or output renders commas and appends to end of each line
	div.innerHTML = labels.join('');
	return div;
};
legend.addTo(map);