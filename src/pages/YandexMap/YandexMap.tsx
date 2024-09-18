import React, { useEffect, useState } from 'react'
import { initYMaps } from './../../lib/ymaps'
import './map.css'

export const YandexMap = () => {
	const [mapContainer, setMapContainer] = useState<HTMLElement | null>(null)

	useEffect(() => {
		async function initMap() {
			try {
				const { YMap, YMapDefaultSchemeLayer } = await initYMaps()

				const map = new YMap(mapContainer as HTMLElement, {
					location: {
						center: [55.751244, 37.618423],
						zoom: 9
					}
				})

				map.addChild(new YMapDefaultSchemeLayer({}))
			} catch (error) {
				console.error('Ошибка инициализации карты:', error)
			}
		}

		if (mapContainer) {
			initMap()
		}
	}, [mapContainer])

	return <div id='map' ref={setMapContainer} />
}
