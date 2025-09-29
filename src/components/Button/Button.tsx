import classes from './Button.module.css'

type ButtonProps = React.ButtonHTMLAttributes<HTMLButtonElement> & {
    isActive?: boolean
}

function Button({isActive = false, ...props}: ButtonProps) {
    return (
        <button
            className={`${classes.button} ${isActive && classes.true}`}
            {...props}
        >
            {props.children}
        </button>
    )
}

export default Button