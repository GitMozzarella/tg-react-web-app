import { useTelegram } from '../../hooks/useTelegram'
import { Button } from '../Button'
import styles from './header.module.scss'

export const Header = () => {
	const tg = useTelegram()

	return (
		<div className={styles.header}>
			<Button>Закрыть</Button>
			<span className={styles.username}>
				{tg.initDataUnsafe.user?.username}
			</span>
		</div>
	)
}
