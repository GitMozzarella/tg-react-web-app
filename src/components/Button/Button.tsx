import styles from './button.module.scss'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = props => {
	const { className, ...rest } = props

	return (
		<button
			{...rest}
			className={`${styles.button} ${className || ''}`}
		></button>
	)
}
