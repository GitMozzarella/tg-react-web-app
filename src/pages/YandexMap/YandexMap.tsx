import './map.css'
import {
	YMap,
	YMapDefaultSchemeLayer,
	YMapDefaultFeaturesLayer,
	YMapMarker,
	reactify
} from './../../lib/ymaps'
import type { YMapLocationRequest } from 'ymaps3'

const LOCATION: YMapLocationRequest = {
	center: [37.588144, 55.733842], // Центр карты
	zoom: 9 // Масштаб карты
}

export const YandexMap = () => {
	return (
		<div style={{ width: '600px', height: '400px' }}>
			<YMap location={reactify.useDefault(LOCATION)}>
				<YMapDefaultSchemeLayer />
				<YMapDefaultFeaturesLayer />

				<YMapMarker
					coordinates={reactify.useDefault([37.588144, 55.733842])}
					draggable={false}
				>
					<section>
						<h1>Метка 1</h1>
					</section>
				</YMapMarker>

				<YMapMarker
					coordinates={reactify.useDefault([37.6, 55.733842])}
					draggable={false}
				>
					<section>
						<h1>Метка 2</h1>
					</section>
				</YMapMarker>

				<YMapMarker
					coordinates={reactify.useDefault([37.61, 55.74])}
					draggable={false}
				>
					<section>
						<h1>Метка 3</h1>
					</section>
				</YMapMarker>
			</YMap>
		</div>
	)
}
