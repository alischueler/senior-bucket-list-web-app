import {useEffect, useState} from "react";
import {findComepletedThunk} from "../services/completed-thunks";
import {useSelector, useDispatch} from "react-redux";
import {createDrinksThunk, findDrinksThunk} from "../services/drinks-thunks";

const CreateShot = () => {

    const [person, setPerson] = useState('Select one');
    const [left, setLeft] = useState(0);
    const [type, setType] = useState('');
    const [where, setWhere] = useState('');
    const [date, setDate] = useState('');

    const dispatch = useDispatch();

    const completedClickHandler = () => {
        const newCompleted = {
            person,
            type,
            where,
            date,
        }
        setPerson('Select one')
        setLeft(0)
        setType('')
        setWhere('')
        setDate('')
        dispatch(createDrinksThunk(newCompleted));
    }

    const { completed } = useSelector(state => state.completedData)
    const { drinks } = useSelector(state => state.drinksData)
    useEffect(() => {
        dispatch(findComepletedThunk())
        dispatch(findDrinksThunk()) //es-lint disable next line
    }, [])

    const handlePersonChange = (e) => {
        setPerson(e.target.value);
        const num = completed.filter(c => {
            return c.person === e.target.value}).length
        const numDrinks = drinks.filter(c => {
            return c.person === e.target.value}).length
        setLeft(50-num-numDrinks)
    }
    return <li className="list-group-item">
        <label htmlFor="item" className="form-label">Who Are You</label>
        <select name="people" id="people" className="form-select mb-2" onChange={handlePersonChange}>
            <option selected={person === 'Select one'}>Select one</option>
            <option value="Ali">Ali</option>
            <option value="Lindsay">Lindsay</option>
            <option value="Maddie">Maddie</option>
            <option value="Claire">Claire</option>
        </select>
        <div className="mt-3 mb-3">{person === 'Select one' ? 'Please tell us who you are to determine how many shots you have to take!' : <span>You have <b>{left}</b> Shots to Take</span>}</div>
        <label htmlFor="description" className="form-label">What shot did you take?</label>
        <input id="description" className="form-control mb-2" placeholder="tell me what type of shot you took"
               onChange={(event) => setType(event.target.value)} value={type}/>
        <label htmlFor="description" className="form-label">Where did you take this shot?</label>
        <input id="description" className="form-control mb-2" placeholder="where were you when you took the shot"
               onChange={(event) => setWhere(event.target.value)} value={where}/>
        <label htmlFor="date" className="form-label">Date you completed the shot</label>
        <input type="date" className="form-control mb-2" onChange={(event) => {
            setDate(event.target.value)
        }} value={date}/>
        <button className={date !== '' && left !== 0 && type !== '' && where !== '' ? "btn btn-primary" : "btn btn-primary disabled"} onClick={completedClickHandler}>Submit</button>
    </li>
}

export default CreateShot;