// @ts-nocheck
import { useEffect } from 'react'

export const YandexMap = () => {
	useEffect(() => {
		const loadMap = () => {
			// Инициализация карты
			const map = new window.ymaps.Map('map', {
				center: [55.751574, 37.573856], // Москва
				zoom: 9
			})

			// Используем any, чтобы избежать проблем с типами
			const clusterer: any = new window.ymaps.Clusterer({
				preset: 'islands#invertedVioletClusterIcons',
				groupByCoordinates: false,
				clusterDisableClickZoom: false,
				clusterOpenBalloonOnClick: true,
				clusterBalloonContentLayout: 'cluster#balloonCarousel',
				clusterIconLayout: 'default#pieChart',
				clusterIconPieChartRadius: 30,
				clusterIconPieChartCoreRadius: 10,
				clusterIconPieChartStrokeWidth: 3
			})

			// Массив с координатами для меток
			const points = [
				[55.751574, 37.573856],
				[55.761574, 37.573856],
				[55.771574, 37.583856],
				[55.781574, 37.593856]
			]

			// Создание меток на основе массива координат
			const geoObjects = points.map(
				point =>
					new window.ymaps.Placemark(
						point,
						{
							balloonContentHeader: 'Заголовок',
							balloonContentBody: 'Описание метки'
						},
						{
							preset: 'islands#icon',
							iconColor: '#3b5998'
						}
					)
			)

			// Добавление меток в кластеризатор
			clusterer.add(geoObjects)
			// Добавление кластеризатора на карту
			map.geoObjects.add(clusterer)
		}

		window.ymaps.ready(loadMap)
	}, [])

	return <div id='map' style={{ width: '100%', height: '500px' }}></div>
}
