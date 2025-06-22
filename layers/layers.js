var wms_layers = [];


        var lyr_OSMStandard_0 = new ol.layer.Tile({
            'title': 'OSM Standard',
            'type':'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
            attributions: ' &nbsp &middot; <a href="https://www.openstreetmap.org/copyright">© OpenStreetMap contributors, CC-BY-SA</a>',
                url: 'http://tile.openstreetmap.org/{z}/{x}/{y}.png'
            })
        });
var format_Singida_Urban_1 = new ol.format.GeoJSON();
var features_Singida_Urban_1 = format_Singida_Urban_1.readFeatures(json_Singida_Urban_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Singida_Urban_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Singida_Urban_1.addFeatures(features_Singida_Urban_1);
var lyr_Singida_Urban_1 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Singida_Urban_1, 
                style: style_Singida_Urban_1,
                popuplayertitle: 'Singida_Urban',
                interactive: true,
                title: '<img src="styles/legend/Singida_Urban_1.png" /> Singida_Urban'
            });
var format_Clippedwards_2 = new ol.format.GeoJSON();
var features_Clippedwards_2 = format_Clippedwards_2.readFeatures(json_Clippedwards_2, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Clippedwards_2 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Clippedwards_2.addFeatures(features_Clippedwards_2);
var lyr_Clippedwards_2 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Clippedwards_2, 
                style: style_Clippedwards_2,
                popuplayertitle: 'Clipped wards',
                interactive: true,
                title: '<img src="styles/legend/Clippedwards_2.png" /> Clipped wards'
            });
var format_Hotel_3 = new ol.format.GeoJSON();
var features_Hotel_3 = format_Hotel_3.readFeatures(json_Hotel_3, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hotel_3 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hotel_3.addFeatures(features_Hotel_3);
var lyr_Hotel_3 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hotel_3, 
                style: style_Hotel_3,
                popuplayertitle: 'Hotel',
                interactive: true,
                title: '<img src="styles/legend/Hotel_3.png" /> Hotel'
            });
var format_Busstand_4 = new ol.format.GeoJSON();
var features_Busstand_4 = format_Busstand_4.readFeatures(json_Busstand_4, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Busstand_4 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Busstand_4.addFeatures(features_Busstand_4);
var lyr_Busstand_4 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Busstand_4, 
                style: style_Busstand_4,
                popuplayertitle: 'Bus stand',
                interactive: true,
                title: '<img src="styles/legend/Busstand_4.png" /> Bus stand'
            });
var format_DistHostels_5 = new ol.format.GeoJSON();
var features_DistHostels_5 = format_DistHostels_5.readFeatures(json_DistHostels_5, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistHostels_5 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistHostels_5.addFeatures(features_DistHostels_5);
var lyr_DistHostels_5 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistHostels_5, 
                style: style_DistHostels_5,
                popuplayertitle: 'Dist Hostels',
                interactive: true,
                title: '<img src="styles/legend/DistHostels_5.png" /> Dist Hostels'
            });
var format_DistHotels_6 = new ol.format.GeoJSON();
var features_DistHotels_6 = format_DistHotels_6.readFeatures(json_DistHotels_6, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistHotels_6 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistHotels_6.addFeatures(features_DistHotels_6);
var lyr_DistHotels_6 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistHotels_6, 
                style: style_DistHotels_6,
                popuplayertitle: 'Dist Hotels',
                interactive: true,
                title: '<img src="styles/legend/DistHotels_6.png" /> Dist Hotels'
            });
var format_DistMotels_7 = new ol.format.GeoJSON();
var features_DistMotels_7 = format_DistMotels_7.readFeatures(json_DistMotels_7, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_DistMotels_7 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_DistMotels_7.addFeatures(features_DistMotels_7);
var lyr_DistMotels_7 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_DistMotels_7, 
                style: style_DistMotels_7,
                popuplayertitle: 'Dist Motels',
                interactive: true,
                title: '<img src="styles/legend/DistMotels_7.png" /> Dist Motels'
            });
var format_Standguesthub_8 = new ol.format.GeoJSON();
var features_Standguesthub_8 = format_Standguesthub_8.readFeatures(json_Standguesthub_8, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Standguesthub_8 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Standguesthub_8.addFeatures(features_Standguesthub_8);
var lyr_Standguesthub_8 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Standguesthub_8, 
                style: style_Standguesthub_8,
                popuplayertitle: 'Stand guest hub',
                interactive: true,
                title: '<img src="styles/legend/Standguesthub_8.png" /> Stand guest hub'
            });
var format_Dist_Guesthouse_9 = new ol.format.GeoJSON();
var features_Dist_Guesthouse_9 = format_Dist_Guesthouse_9.readFeatures(json_Dist_Guesthouse_9, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Dist_Guesthouse_9 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Dist_Guesthouse_9.addFeatures(features_Dist_Guesthouse_9);
var lyr_Dist_Guesthouse_9 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Dist_Guesthouse_9, 
                style: style_Dist_Guesthouse_9,
                popuplayertitle: 'Dist_Guesthouse',
                interactive: true,
                title: '<img src="styles/legend/Dist_Guesthouse_9.png" /> Dist_Guesthouse'
            });
var format_GuestHouse_10 = new ol.format.GeoJSON();
var features_GuestHouse_10 = format_GuestHouse_10.readFeatures(json_GuestHouse_10, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_GuestHouse_10 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_GuestHouse_10.addFeatures(features_GuestHouse_10);
var lyr_GuestHouse_10 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_GuestHouse_10, 
                style: style_GuestHouse_10,
                popuplayertitle: 'Guest House',
                interactive: true,
                title: '<img src="styles/legend/GuestHouse_10.png" /> Guest House'
            });
var format_MotelSmc_11 = new ol.format.GeoJSON();
var features_MotelSmc_11 = format_MotelSmc_11.readFeatures(json_MotelSmc_11, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_MotelSmc_11 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_MotelSmc_11.addFeatures(features_MotelSmc_11);
var lyr_MotelSmc_11 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_MotelSmc_11, 
                style: style_MotelSmc_11,
                popuplayertitle: 'Motel Smc',
                interactive: true,
                title: '<img src="styles/legend/MotelSmc_11.png" /> Motel Smc'
            });
var format_Hostels_12 = new ol.format.GeoJSON();
var features_Hostels_12 = format_Hostels_12.readFeatures(json_Hostels_12, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_Hostels_12 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_Hostels_12.addFeatures(features_Hostels_12);
var lyr_Hostels_12 = new ol.layer.Vector({
                declutter: false,
                source:jsonSource_Hostels_12, 
                style: style_Hostels_12,
                popuplayertitle: 'Hostels',
                interactive: true,
                title: '<img src="styles/legend/Hostels_12.png" /> Hostels'
            });

lyr_OSMStandard_0.setVisible(true);lyr_Singida_Urban_1.setVisible(true);lyr_Clippedwards_2.setVisible(true);lyr_Hotel_3.setVisible(true);lyr_Busstand_4.setVisible(true);lyr_DistHostels_5.setVisible(true);lyr_DistHotels_6.setVisible(true);lyr_DistMotels_7.setVisible(true);lyr_Standguesthub_8.setVisible(true);lyr_Dist_Guesthouse_9.setVisible(true);lyr_GuestHouse_10.setVisible(true);lyr_MotelSmc_11.setVisible(true);lyr_Hostels_12.setVisible(true);
var layersList = [lyr_OSMStandard_0,lyr_Singida_Urban_1,lyr_Clippedwards_2,lyr_Hotel_3,lyr_Busstand_4,lyr_DistHostels_5,lyr_DistHotels_6,lyr_DistMotels_7,lyr_Standguesthub_8,lyr_Dist_Guesthouse_9,lyr_GuestHouse_10,lyr_MotelSmc_11,lyr_Hostels_12];
lyr_Singida_Urban_1.set('fieldAliases', {'District_C': 'District_C', 'District_N': 'District_N', 'Area': 'Area', 'DD': 'DD', });
lyr_Clippedwards_2.set('fieldAliases', {'OBJECTID_1': 'OBJECTID_1', 'OBJECTID': 'OBJECTID', 'reg_code': 'reg_code', 'reg_name': 'reg_name', 'dist_code': 'dist_code', 'dist_name': 'dist_name', 'counc_code': 'counc_code', 'counc_name': 'counc_name', 'const_code': 'const_code', 'const_name': 'const_name', 'div_code': 'div_code', 'div_name': 'div_name', 'ward_code': 'ward_code', 'ward_name': 'ward_name', 'Shape_Leng': 'Shape_Leng', 'Shape_Le_1': 'Shape_Le_1', 'Shape_Area': 'Shape_Area', });
lyr_Hotel_3.set('fieldAliases', {'fid': 'fid', 'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'amenity': 'amenity', 'internet_a': 'internet_a', 'name_en': 'name_en', 'impromptu': 'impromptu', 'camp_type': 'camp_type', 'name': 'name', });
lyr_Busstand_4.set('fieldAliases', {'id': 'id', });
lyr_DistHostels_5.set('fieldAliases', {'id': 'id', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_DistHotels_6.set('fieldAliases', {'id': 'id', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_DistMotels_7.set('fieldAliases', {'id': 'id', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_Standguesthub_8.set('fieldAliases', {'id': 'id', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_Dist_Guesthouse_9.set('fieldAliases', {'id': 'id', 'HubName': 'HubName', 'HubDist': 'HubDist', });
lyr_GuestHouse_10.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'addr_stree': 'addr_stree', 'name_en': 'name_en', 'name': 'name', });
lyr_MotelSmc_11.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'name': 'name', });
lyr_Hostels_12.set('fieldAliases', {'full_id': 'full_id', 'osm_id': 'osm_id', 'osm_type': 'osm_type', 'tourism': 'tourism', 'name': 'name', });
lyr_Singida_Urban_1.set('fieldImages', {'District_C': 'TextEdit', 'District_N': 'TextEdit', 'Area': 'TextEdit', 'DD': 'TextEdit', });
lyr_Clippedwards_2.set('fieldImages', {'OBJECTID_1': 'TextEdit', 'OBJECTID': 'TextEdit', 'reg_code': 'TextEdit', 'reg_name': 'TextEdit', 'dist_code': 'TextEdit', 'dist_name': 'TextEdit', 'counc_code': 'TextEdit', 'counc_name': 'TextEdit', 'const_code': 'TextEdit', 'const_name': 'TextEdit', 'div_code': 'TextEdit', 'div_name': 'TextEdit', 'ward_code': 'TextEdit', 'ward_name': 'TextEdit', 'Shape_Leng': 'TextEdit', 'Shape_Le_1': 'TextEdit', 'Shape_Area': 'TextEdit', });
lyr_Hotel_3.set('fieldImages', {'fid': '', 'full_id': '', 'osm_id': '', 'osm_type': '', 'tourism': '', 'amenity': '', 'internet_a': '', 'name_en': '', 'impromptu': '', 'camp_type': '', 'name': '', });
lyr_Busstand_4.set('fieldImages', {'id': 'TextEdit', });
lyr_DistHostels_5.set('fieldImages', {'id': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_DistHotels_6.set('fieldImages', {'id': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_DistMotels_7.set('fieldImages', {'id': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_Standguesthub_8.set('fieldImages', {'id': '', 'HubName': '', 'HubDist': '', });
lyr_Dist_Guesthouse_9.set('fieldImages', {'id': 'TextEdit', 'HubName': 'TextEdit', 'HubDist': 'TextEdit', });
lyr_GuestHouse_10.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'tourism': '', 'addr_stree': '', 'name_en': '', 'name': '', });
lyr_MotelSmc_11.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'tourism': '', 'name': '', });
lyr_Hostels_12.set('fieldImages', {'full_id': '', 'osm_id': '', 'osm_type': '', 'tourism': '', 'name': '', });
lyr_Singida_Urban_1.set('fieldLabels', {'District_C': 'no label', 'District_N': 'no label', 'Area': 'no label', 'DD': 'no label', });
lyr_Clippedwards_2.set('fieldLabels', {'OBJECTID_1': 'no label', 'OBJECTID': 'no label', 'reg_code': 'no label', 'reg_name': 'no label', 'dist_code': 'no label', 'dist_name': 'no label', 'counc_code': 'no label', 'counc_name': 'no label', 'const_code': 'no label', 'const_name': 'no label', 'div_code': 'no label', 'div_name': 'no label', 'ward_code': 'no label', 'ward_name': 'no label', 'Shape_Leng': 'no label', 'Shape_Le_1': 'no label', 'Shape_Area': 'no label', });
lyr_Hotel_3.set('fieldLabels', {'fid': 'no label', 'full_id': 'no label', 'osm_id': 'no label', 'osm_type': 'no label', 'tourism': 'no label', 'amenity': 'no label', 'internet_a': 'no label', 'name_en': 'no label', 'impromptu': 'no label', 'camp_type': 'no label', 'name': 'no label', });
lyr_Busstand_4.set('fieldLabels', {'id': 'no label', });
lyr_DistHostels_5.set('fieldLabels', {'id': 'no label', 'HubName': 'no label', 'HubDist': 'no label', });
lyr_DistHotels_6.set('fieldLabels', {'id': 'no label', 'HubName': 'no label', 'HubDist': 'no label', });
lyr_DistMotels_7.set('fieldLabels', {'id': 'no label', 'HubName': 'no label', 'HubDist': 'no label', });
lyr_Standguesthub_8.set('fieldLabels', {'id': 'no label', 'HubName': 'no label', 'HubDist': 'no label', });
lyr_Dist_Guesthouse_9.set('fieldLabels', {'id': 'no label', 'HubName': 'no label', 'HubDist': 'no label', });
lyr_GuestHouse_10.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'no label', 'tourism': 'hidden field', 'addr_stree': 'hidden field', 'name_en': 'inline label - visible with data', 'name': 'inline label - visible with data', });
lyr_MotelSmc_11.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'tourism': 'hidden field', 'name': 'inline label - visible with data', });
lyr_Hostels_12.set('fieldLabels', {'full_id': 'hidden field', 'osm_id': 'hidden field', 'osm_type': 'hidden field', 'tourism': 'hidden field', 'name': 'inline label - visible with data', });
lyr_Hostels_12.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});