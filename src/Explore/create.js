import {useState} from "react";
import {createCompletedThunk} from "../services/completed-thunks";
import {useSelector, useDispatch} from "react-redux";

const Create = ({completed}) => {
    const items = useSelector(state => state.item)

    const [person, setPerson] = useState('Select one');
    const [item, setItem] = useState([]);
    const [uncompleted, setUncompleted] = useState([]);
    const [description, setDescription] = useState('');
    const [date, setDate] = useState('');
    const [file, setFile] = useState('');
    const [fileType, setFileType] = useState('');

    const dispatch = useDispatch();

    const completedClickHandler = () => {
        const newCompleted = {
            item,
            person,
            description,
            date,
        }
        setItem([]);
        setDescription('')
        setDate('')
        dispatch(createCompletedThunk(newCompleted));
    }

    const findUncompleted = (val) => {
        let itemCompleted = []
        completed.filter(c => c.person === val).map(c => c.item.map(it => itemCompleted.push(it)))
        const personNotCompleted = items.filter(it => {
            return !itemCompleted.includes(it.title)
        })
        return personNotCompleted;
    }

    const handlePersonChange = (e) => {
        setPerson(e.target.value);
        setUncompleted(() => findUncompleted(e.target.value))
    }
    const handleItemChange = (e) => {
        const p = [];
        p.push(e.target.value)
        setItem(p);
    }
    return <li className="list-group-item">
        <label htmlFor="item" className="form-label">Who Are You</label>
        <select name="people" id="people" className="form-select mb-2" onChange={handlePersonChange}>
            <option defaultValue="default">Select one</option>
            <option value="Ali">Ali</option>
            <option value="Lindsay">Lindsay</option>
            <option value="Maddie">Maddie</option>
            <option value="Claire">Claire</option>
        </select>
        <label htmlFor="item" className="form-label">BucketList Item You Completed</label>
        <select name="people" id="people" className="form-select mb-2" onChange={handleItemChange}>
            <option defaultValue>{person !== 'Select one' ? 'Select one' : 'Tell us who you are before selecting the item'}</option>
            {person !== 'Select one' && uncompleted.map(u => <option value={u.title}>{u.title}</option>)}
        </select>
        <label htmlFor="description" className="form-label">Description of your event</label>
        <input id="description" className="form-control mb-2" placeholder="tell me about your event"
               onChange={(event) => setDescription(event.target.value)}/>
        <label htmlFor="image" className="form-label">The accompanying file</label>
        <input type="file" className="form-control mb-2"/>
        <label htmlFor="label" className="form-label">This is a ...</label>
        <select className="form-control mb-2">
            <option defaultValue="image">Image</option>
            <option defaultValue="audio">Audio</option>
            <option defaultValue="video">Video</option>
        </select>
        <label htmlFor="date" className="form-label">Date you completed this</label>
        <input type="date" className="form-control mb-2" onChange={(event) => {
            setDate(event.target.value)
        }}/>
        <button className="btn btn-primary" onClick={completedClickHandler}>Submit</button>
    </li>
}

export default Create;