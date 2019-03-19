var wms_layers = [];
var baseLayer = new ol.layer.Group({
    'title': '',
    layers: [
new ol.layer.Tile({
    'title': 'OSM',
    'type': 'base',
    source: new ol.source.OSM()
})
]
});
var format_parcours28022019_0 = new ol.format.GeoJSON();
var features_parcours28022019_0 = format_parcours28022019_0.readFeatures(json_parcours28022019_0, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_parcours28022019_0 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_parcours28022019_0.addFeatures(features_parcours28022019_0);var lyr_parcours28022019_0 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_parcours28022019_0, 
                style: style_parcours28022019_0,
                title: '<img src="styles/legend/parcours28022019_0.png" /> parcours 28-02-2019'
            });var format_pointscollects28022019_1 = new ol.format.GeoJSON();
var features_pointscollects28022019_1 = format_pointscollects28022019_1.readFeatures(json_pointscollects28022019_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:3857'});
var jsonSource_pointscollects28022019_1 = new ol.source.Vector({
    attributions: [new ol.Attribution({html: '<a href=""></a>'})],
});
jsonSource_pointscollects28022019_1.addFeatures(features_pointscollects28022019_1);var lyr_pointscollects28022019_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_pointscollects28022019_1, 
                style: style_pointscollects28022019_1,
    title: 'points collectés 28-02-2019<br />\
    <img src="styles/legend/pointscollects28022019_1_0.png" /> GP<br />\
    <img src="styles/legend/pointscollects28022019_1_1.png" /> Quai de transfert<br />'
        });

lyr_parcours28022019_0.setVisible(true);lyr_pointscollects28022019_1.setVisible(true);
var layersList = [baseLayer,lyr_parcours28022019_0,lyr_pointscollects28022019_1];
lyr_parcours28022019_0.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'begin': 'begin', 'end': 'end', 'altitudeMo': 'altitudeMo', 'tessellate': 'tessellate', 'extrude': 'extrude', 'visibility': 'visibility', 'drawOrder': 'drawOrder', 'icon': 'icon', });
lyr_pointscollects28022019_1.set('fieldAliases', {'Name': 'Name', 'descriptio': 'descriptio', 'timestamp': 'timestamp', 'LABEL': 'LABEL', 'X': 'X', 'Y': 'Y', 'TYPE': 'TYPE', });
lyr_parcours28022019_0.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'begin': 'TextEdit', 'end': 'TextEdit', 'altitudeMo': 'TextEdit', 'tessellate': 'TextEdit', 'extrude': 'TextEdit', 'visibility': 'TextEdit', 'drawOrder': 'TextEdit', 'icon': 'TextEdit', });
lyr_pointscollects28022019_1.set('fieldImages', {'Name': 'TextEdit', 'descriptio': 'TextEdit', 'timestamp': 'TextEdit', 'LABEL': 'TextEdit', 'X': 'TextEdit', 'Y': 'TextEdit', 'TYPE': 'TextEdit', });
lyr_parcours28022019_0.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'begin': 'no label', 'end': 'no label', 'altitudeMo': 'no label', 'tessellate': 'no label', 'extrude': 'no label', 'visibility': 'no label', 'drawOrder': 'no label', 'icon': 'no label', });
lyr_pointscollects28022019_1.set('fieldLabels', {'Name': 'no label', 'descriptio': 'no label', 'timestamp': 'no label', 'LABEL': 'no label', 'X': 'no label', 'Y': 'no label', 'TYPE': 'no label', });
lyr_pointscollects28022019_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});