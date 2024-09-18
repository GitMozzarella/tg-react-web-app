import './button.css'

interface ButtonProps extends React.ButtonHTMLAttributes<HTMLButtonElement> {}

export const Button: React.FC<ButtonProps> = props => {
	return <button {...props} className={'button' + props.className}></button>
}
