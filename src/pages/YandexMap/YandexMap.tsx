import React, { useEffect, useState } from 'react'
import { initYMaps } from './../../lib/ymaps'
import './map.css'

export const YandexMap = () => {
	const [mapContainer, setMapContainer] = useState<HTMLElement | null>(null)

	useEffect(() => {
		async function initMap() {
			try {
				console.log('Начинаю инициализацию карты') // Лог
				const { YMap, YMapDefaultSchemeLayer } = await initYMaps() // Инициализация карты
				console.log('Компоненты карты загружены', YMap, YMapDefaultSchemeLayer) // Лог

				const map = new YMap(mapContainer as HTMLElement, {
					location: {
						center: [55.751244, 37.618423], // Координаты центра карты (Москва)
						zoom: 9
					}
				})
				console.log('Карта создана', map) // Лог

				map.addChild(new YMapDefaultSchemeLayer({}))
			} catch (error) {
				console.error('Ошибка инициализации карты:', error)
			}
		}

		if (mapContainer) {
			console.log('Контейнер карты готов') // Лог
			initMap() // Запуск инициализации только после готовности контейнера
		} else {
			console.log('Контейнер карты не готов') // Лог
		}
	}, [mapContainer])

	return <div id='map' ref={setMapContainer} />
}
