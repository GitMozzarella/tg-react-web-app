import React, { useEffect, useState } from 'react'
import { initYMaps } from './../../lib/ymaps'
export const YandexMap: React.FC = () => {
	const [mapContainer, setMapContainer] = useState<HTMLElement | null>(null)
	const [YMapComponents, setYMapComponents] = useState<any>(null)

	useEffect(() => {
		const loadMap = async () => {
			try {
				const { YMap, YMapDefaultSchemeLayer } = await initYMaps()
				setYMapComponents({ YMap, YMapDefaultSchemeLayer })
			} catch (error) {
				console.error('Ошибка инициализации карты:', error)
			}
		}
		loadMap()
	}, [])

	useEffect(() => {
		if (mapContainer && YMapComponents) {
			const { YMap, YMapDefaultSchemeLayer } = YMapComponents
			const map = new YMap(mapContainer, {
				location: {
					center: [55.751244, 37.618423],
					zoom: 10
				}
			})

			const layer = new YMapDefaultSchemeLayer()
			map.addChild(layer)
		}
	}, [mapContainer, YMapComponents])

	return (
		<div
			id='map'
			ref={setMapContainer}
			style={{ width: '100%', height: '400px' }}
		/>
	)
}
