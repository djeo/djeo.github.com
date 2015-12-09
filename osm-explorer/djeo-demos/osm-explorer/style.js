define([], function(){

var nameOrId = function(feature) {
	var name = feature.get("name");
	return name ? ": " + name : "<br>OpenStreetMap id: "+feature.id;
};

return [
{
	fillOpacity: 0.8,
	strokeOpacity: 1,
	// size of bitmap icons
	size: [24, 24]
},
{
	id: "building",
	filter: "this.isArea() && ($building=='yes' || $building=='government')",
	fill: "#bca9a9",
	tooltip: function(feature) {
		var content = "Building",
			name = feature.get("name"),
			street = feature.get("addr:street"),
			housenumber = feature.get("addr:housenumber")
		;
		if (name) {
			content += ": " + name;
		}
		if (street && housenumber) {
			content += "<br>" + street + ", " + housenumber;
		}
		if (!(name||(street && housenumber))) {
			content += "<br>OpenStreetMap id: "+feature.id;
		}
		return content;
	}
},
{
	id: "primary",
	filter: "$highway=='primary'",
	stroke: "#8d4346",
	strokeWidth: 7.5,
	guiIcon: "gui/primary.png"
},
{
	id: "secondary",
	filter: "$highway=='secondary'",
	stroke: "#a37b48",
	strokeWidth: 8.5,
	guiIcon: "gui/secondary.png"
},
{
	id: "tertiary",
	filter: "$highway=='tertiary'",
	stroke: "#bbb",
	strokeWidth: 6,
	guiIcon: "gui/tertiary.png"
},
{
	id: "residential_unclassified",
	filter: "$highway=='residential' || $highway=='unclassified'",
	stroke: "#999",
	strokeWidth: 4,
	guiIcon: "gui/residential.png"
},
{
	id: "footway",
	filter: "$highway=='footway'",
	lines: [
		{
			stroke: "#fff",
			strokeWidth: 4
		},
		{
			stroke:"salmon",
			strokeWidth: 1.5
		}
	],
	guiIcon: "gui/footway.png"
},
{
	id: "water",
	filter: "$natural=='lake' || $natural=='water' || $landuse=='reservoir' || $waterway=='riverbank' || $landuse=='water'",
	fill: "#b5d0d0",
	strokeWidth: 0,
	tooltip: function(feature) {
		return "Water object" + nameOrId(feature);
	}
},
{
	id: "railway",
	filter: "$railway=='rail'",
	lines: [
		{
			stroke: "#999999",
			strokeWidth: 3
		},
		{
			stroke:"white",
			strokeWidth: 1
		}
	],
	guiIcon: "gui/railway.png"
},
{
	id: "park",
	filter: "$leisure=='park' || $leisure=='recreation_ground'",
	fill: "#b6fdb6",
	fillOpacity: 0.6,
	tooltip: function(feature) {
		return "Park" + nameOrId(feature);
	}
},
{
	id: "forest",
	filter: "$landuse=='forest'",
	fill: "#8dc56c",
	tooltip: function(feature) {
		return "Forest" + nameOrId(feature);
	}
},
{
	id: "wood",
	filter: "$natural=='wood' || $landuse == 'wood'",
	fill: "#aed1a0",
	tooltip: function(feature) {
		return "Wood" + nameOrId(feature);
	}
},
{
	id: "restaurant",
	filter: "$amenity=='restaurant'",
	img: "restaurant-24.png"
},
{
	id: "cafe",
	filter: "$amenity=='cafe'",
	img: "cafe-24.png"
},
{
	id: "fast_food",
	filter: "$amenity=='fast_food'",
	img: "fast-food-24.png"
},
{
	filter: "$amenity=='school'",
	img: "school-24.png"
},
{
	id: "shop",
	filter: "$shop",
	img: "shop-24.png"
},
{
	id: "hotel",
	filter: "$tourism=='hotel'",
	img: "lodging-24.png"
},
{
	id: "bank",
	filter: "$amenity=='bank'",
	img: "bank-24.png"
},
{
	id: "station",
	filter: "$railway=='station'",
	img: "rail-above-24.png"
},
{
	id: "bus_stop",
	filter: "$highway=='bus_stop'",
	img: "bus-24.png"
},
{
	id: "monument",
	filter: "$historic=='monument'",
	img: "monument-24.png"
}
];

});