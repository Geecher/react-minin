function WayToTeach(props: { title?: string, description?: string }) {
    return (
        <li className='card'>
            <p>
                <strong>{props.title}</strong>
                {props.description}
            </p>
        </li>
    )
}

export default WayToTeach;