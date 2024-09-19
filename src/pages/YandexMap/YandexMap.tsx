import './map.css'
import { useEffect, useState } from 'react'
import {
	loadYMaps,
	YMap,
	YMapDefaultSchemeLayer,
	YMapDefaultFeaturesLayer,
	YMapMarker,
	reactify
} from './../../lib/ymaps'
import type { YMapLocationRequest } from 'ymaps3'

const LOCATION: YMapLocationRequest = {
	center: [37.588144, 55.733842],
	zoom: 9
}

export const YandexMap = () => {
	const [isMapReady, setIsMapReady] = useState(false)

	useEffect(() => {
		const initializeMap = async () => {
			await loadYMaps() // Загрузка API Яндекс.Карт
			setIsMapReady(true) // После загрузки отмечаем, что карта готова
		}

		initializeMap()
	}, [])

	if (!isMapReady) {
		return <p>Loading map...</p>
	}

	return (
		<div style={{ width: '600px', height: '400px' }}>
			{YMap && (
				<YMap location={reactify.useDefault(LOCATION)}>
					<YMapDefaultSchemeLayer />
					<YMapDefaultFeaturesLayer />

					<YMapMarker
						coordinates={reactify.useDefault([37.588144, 55.733842])}
						draggable={true}
					>
						<section>
							<h1>You can drag this header</h1>
						</section>
					</YMapMarker>
				</YMap>
			)}
		</div>
	)
}
