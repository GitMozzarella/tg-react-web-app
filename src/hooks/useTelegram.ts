import { useMemo } from 'react'

export function useTelegram() {
	const tg = useMemo(() => window.Telegram?.WebApp, [])

	return tg
}
