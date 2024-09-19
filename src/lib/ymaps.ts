import React from 'react'
import ReactDOM from 'react-dom'

let reactify: any
let YMap: any,
	YMapDefaultSchemeLayer: any,
	YMapDefaultFeaturesLayer: any,
	YMapMarker: any

export const loadYMaps = async () => {
	try {
		if (!window.ymaps3) {
			throw new Error('ymaps3 не загружен')
		}

		const [ymaps3React] = await Promise.all([
			window.ymaps3.import('@yandex/ymaps3-reactify'),
			window.ymaps3.ready
		])

		reactify = ymaps3React.reactify.bindTo(React, ReactDOM)
		YMap = reactify.module(window.ymaps3).YMap
		YMapDefaultSchemeLayer = reactify.module(
			window.ymaps3
		).YMapDefaultSchemeLayer
		YMapDefaultFeaturesLayer = reactify.module(
			window.ymaps3
		).YMapDefaultFeaturesLayer
		YMapMarker = reactify.module(window.ymaps3).YMapMarker
	} catch (error) {
		console.error('Ошибка при загрузке Yandex.Maps:', error)
	}
}

export {
	reactify,
	YMap,
	YMapDefaultSchemeLayer,
	YMapDefaultFeaturesLayer,
	YMapMarker
}
