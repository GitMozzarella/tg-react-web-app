import { useEffect } from 'react'

export const YandexMap = () => {
	useEffect(() => {
		const loadMap = () => {
			const map: any = new window.ymaps.Map('map', {
				center: [55.751574, 37.573856],
				zoom: 9
			})

			const clusterer: any = new window.ymaps.Clusterer({
				preset: 'islands#invertedVioletClusterIcons'
			})

			const points = [
				[55.751574, 37.573856],
				[55.761574, 37.573856]
			]

			const geoObjects = points.map(
				point =>
					new window.ymaps.Placemark(point, {
						balloonContentHeader: 'Метка',
						balloonContentBody: 'Описание метки'
					})
			)

			clusterer.add(geoObjects)
			map.geoObjects.add(clusterer)
		}

		window.ymaps.ready(loadMap)
	}, [])

	return <div id='map' style={{ width: '100%', height: '500px' }}></div>
}
