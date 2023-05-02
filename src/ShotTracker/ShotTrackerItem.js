import {useSelector} from "react-redux";

const ShotTrackerItem = ({person}) => {
    const { completed } = useSelector(state => state.completedData)
    const { drinks } = useSelector(state => state.drinksData)
    const num = completed.filter(c => {
        return c.person === person.name}).length
    const numDrinks = drinks.filter(c => {
        return c.person === person.name}).length
    return (
        <li className="list-group-item d-flex align-items-center">
            <img src={`/images/${person.profile}`} width="150px" alt="shot item"/>
            <div className="align-middle ps-3">
                completed <b>{num}</b> bucket list items <br/>
                and needs to take <b>{50-num}</b> shots <br/>
                she has taken <b>{numDrinks}</b> shots <br/>
                and has <b>{50-num-numDrinks}</b> left to take
            </div>
        </li>
    )
}
export default ShotTrackerItem