import classes from './Button.module.css'

type ButtonProps = {
    children: React.ReactNode,
    onClick?: () => void,
    isActive?: boolean
    type?: "button" | "submit" | "reset"
}

function Button({children, onClick, isActive = false, type}: ButtonProps) {
    return (
        <button
            className={`${classes.button} ${isActive && classes.true}`}
            onClick={onClick}
            type={type}>
            {children}
        </button>
    )
}

export default Button