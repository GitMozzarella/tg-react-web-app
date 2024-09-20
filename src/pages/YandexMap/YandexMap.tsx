import { useEffect } from 'react'

export const YandexMap = () => {
	useEffect(() => {
		const loadMap = () => {
			const map: any = new window.ymaps.Map('map', {
				center: [55.751574, 37.573856],
				zoom: 9
			})

			const clusterer: any = new window.ymaps.Clusterer({
				preset: 'islands#invertedVioletClusterIcons',
				groupByCoordinates: false
			})

			const points = [
				{
					coords: [55.754172, 37.623378],
					header: 'Метка 1',
					body: 'Столовая 57'
				},
				{
					coords: [55.753432, 37.621586],
					header: 'Метка 2',
					body: 'Красная площадь'
				},
				{
					coords: [55.752465, 37.62739],
					header: 'Метка 3',
					body: 'Церковь Максима Блаженного'
				}
			]

			const geoObjects = points.map(
				point =>
					new window.ymaps.Placemark(
						point.coords,
						{
							balloonContentHeader: point.header,
							balloonContentBody: point.body
						},
						{
							preset: 'islands#icon',
							iconColor: '#3b5998'
						}
					)
			)

			clusterer.add(geoObjects)

			map.geoObjects.add(clusterer)
		}

		window.ymaps.ready(loadMap)
	}, [])

	return <div id='map' style={{ width: '100%', height: '500px' }}></div>
}
