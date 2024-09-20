export const loadYandexModules = () => {
	return window.ymaps.modules.require([
		'Map',
		'Placemark',
		'Clusterer',
		'Heatmap'
	])
}
