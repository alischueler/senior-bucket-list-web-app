const ShotTrackerItem = ({person}) => {
    return (
        <li className="list-group-item d-flex align-items-center">
            <img src={`/images/${person.profile}`} width="150px" alt="shot item"/>
            <div className="align-middle ps-3">
                completed <b>{person.completed}</b> bucket list item <br/>
                has <b>{person.left}</b> shots to take
            </div>
        </li>
    )
}
export default ShotTrackerItem