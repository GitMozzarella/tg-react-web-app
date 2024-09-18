import { useTelegram } from '../../hooks/useTelegram'
import { Button } from '../Button'
import styles from './header.module.scss'

export const Header = () => {
	const { user, onClose } = useTelegram()

	return (
		<div className={styles.header}>
			<Button onClick={onClose}>Закрыть</Button>
			<span className={styles.username}>{user?.username}</span>
		</div>
	)
}
