type WayToTeachProps = {
    title?: string;
    description?: string;
};

function WayToTeach(props: WayToTeachProps) {
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