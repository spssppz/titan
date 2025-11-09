const apikey = '51092280-e018-4241-bc97-180570de25d4'

function initMaps() {
	const maps = document.querySelectorAll('[id^="map-"]')

	maps.forEach(mapElement => {
		const lat = parseFloat(mapElement.dataset.lat)
		const lng = parseFloat(mapElement.dataset.lng)

		if (!lat || !lng) return

		const map = new ymaps.Map(mapElement.id, {
			center: [lat, lng],
			zoom: 15,
			controls: ['zoomControl'],
		})

		const placemark = new ymaps.Placemark([lat, lng], {}, {
			preset: 'islands#redDotIcon',
		})

		map.geoObjects.add(placemark)
	})
}

window.addEventListener('load', () => {
	const maps = document.querySelectorAll('[id^="map-"]')
	if (!maps.length) return

	const script = document.createElement('script')
	script.src = `https://api-maps.yandex.ru/2.1/?load=package.standard&apikey=${apikey}&lang=ru_RU`
	document.body.appendChild(script)

	script.onload = () => ymaps.ready(initMaps)
})
