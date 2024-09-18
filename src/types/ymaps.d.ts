interface YMaps3 {
	import: (module: string) => Promise<any>
	ready: Promise<void>
}

declare global {
	interface Window {
		ymaps3: YMaps3
	}
}

export {}
