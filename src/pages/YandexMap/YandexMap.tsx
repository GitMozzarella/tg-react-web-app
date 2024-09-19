import './map.css'
import { useEffect, useState } from 'react'
import {
	loadYMaps
	// YMap,
	// YMapDefaultSchemeLayer,
	// YMapDefaultFeaturesLayer,
	// YMapMarker,
	// reactify
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
			try {
				await new Promise(resolve => setTimeout(resolve, 1000))
				await loadYMaps()
				setIsMapReady(true)
			} catch (error) {
				console.error('Ошибка при инициализации карты:', error)
			}
		}

		initializeMap()
	}, [])

	if (!isMapReady) {
		return <p>Loading map...</p>
	}

	return (
		<div style={{ width: '600px', height: '400px' }}>
			<iframe
				src='https://mozzzarella.netlify.app/map'
				style={{ width: '100%', height: '100%', border: 'none' }}
				allowFullScreen
			></iframe>
		</div>
	)
}
