import {useSelector} from "react-redux";

const ShotTrackerItem = ({person}) => {
    const { completed } = useSelector(state => state.completedData)
    const num = completed.filter(c => {
        console.log(c.person)
        console.log(person.name)
        return c.person === person.name}).length
    return (
        <li className="list-group-item d-flex align-items-center">
            <img src={`/images/${person.profile}`} width="150px" alt="shot item"/>
            <div className="align-middle ps-3">
                completed <b>{num}</b> bucket list items <br/>
                has <b>{50-num}</b> shots to take
            </div>
        </li>
    )
}
export default ShotTrackerItem