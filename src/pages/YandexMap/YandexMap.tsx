import { useEffect } from 'react'
import { loadYandexModules } from './../../ymapsLoader'

export const YandexMap = () => {
	useEffect(() => {
		const loadMap = async () => {
			if (window.myMap) {
				return
			}

			try {
				const [Map, Placemark, Clusterer, Heatmap] = await loadYandexModules()

				window.myMap = new Map('map', {
					center: [55.751574, 37.573856],
					zoom: 9
				})

				const clusterer = new Clusterer({
					preset: 'islands#invertedVioletClusterIcons',
					groupByCoordinates: false,
					clusterDisableClickZoom: true,
					clusterBalloonContentLayout: 'cluster#balloonCarousel',
					clusterIconPieChartRadius: 32,
					clusterIconPieChartCoreRadius: 8,
					clusterIconPieChartStrokeWidth: 2,
					gridSize: 100
				})
				const points = [
					// Локация 1
					{
						coords: [55.7558, 37.6173],
						header: 'Красная площадь',
						body: 'Центральная площадь Москвы.'
					},

					{
						coords: [55.7549, 37.6204],
						header: 'ГУМ',
						body: 'Главный универсальный магазин Москвы.'
					},

					{
						coords: [55.7588, 37.6187],
						header: 'Собор Василия Блаженного',
						body: 'Архитектурный символ России.'
					},

					// Локация 2
					{
						coords: [55.7517, 37.5783],
						header: 'Арбат',
						body: 'Историческая улица Москвы.'
					},
					{
						coords: [55.7501, 37.5805],
						header: 'Дом-музей Пушкина',
						body: 'Мемориальный дом-музей поэта.'
					},
					{
						coords: [55.7525, 37.5772],
						header: 'Смоленская площадь',
						body: 'Транспортная развязка.'
					},
					{
						coords: [55.7493, 37.5764],
						header: 'Здание МИД России',
						body: 'Министерство иностранных дел.'
					},
					{
						coords: [55.7532, 37.5819],
						header: 'Новоарбатский мост',
						body: 'Мост через Москву-реку.'
					},

					// Локация 3
					{
						coords: [55.7634, 37.62],
						header: 'Патриаршие пруды',
						body: 'Популярное место отдыха.'
					},
					{
						coords: [55.7645, 37.6174],
						header: 'Дом Булгакова',
						body: 'Музей Михаила Булгакова.'
					},
					{
						coords: [55.7658, 37.6219],
						header: 'Малая Бронная улица',
						body: 'Улица с театрами и кафе.'
					},
					{
						coords: [55.7622, 37.6197],
						header: 'Театр на Малой Бронной',
						body: 'Театр Москвы.'
					},
					{
						coords: [55.7667, 37.623],
						header: 'Ресторан "Максима"',
						body: 'Ресторан с видом на пруды.'
					}
				]

				const geoObjects = points.map(
					point =>
						new Placemark(
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
				window.myMap.geoObjects.add(clusterer)

				const heatmap = new Heatmap(
					points.map(point => point.coords),
					{
						radius: 40,
						opacity: 0.6,
						intensityOfMidpoint: 0.5,
						gradient: {
							0.1: 'rgba(128, 255, 0, 0.7)',
							0.2: 'rgba(255, 255, 0, 0.8)',
							0.7: 'rgba(234, 72, 58, 0.9)',
							1.0: 'rgba(162, 36, 25, 1)'
						}
					}
				)

				heatmap.setMap(window.myMap)
			} catch (error) {
				console.error('Ошибка загрузки модулей Yandex.Maps:', error)
			}
		}

		window.ymaps.ready(loadMap)
	}, [])

	return (
		<div
			id='map'
			style={{
				width: '800px',
				height: '500px',
				margin: '0 auto'
			}}
		></div>
	)
}
