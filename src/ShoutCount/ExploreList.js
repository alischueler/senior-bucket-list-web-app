import {useDispatch} from "react-redux";
import {deleteDrinksThunk} from "../services/drinks-thunks";

const ExploreList = ({item}) => {
    const dispatch = useDispatch();
    const deleteCompletedHandler = (id) => {
        dispatch(deleteDrinksThunk(id));
    }
    return (
        <li className="list-group-item">
            <button className="float-end btn btn-danger" onClick={() => deleteCompletedHandler(item._id)}>X</button>
            {item.image && <img src={`/images/${item.image}`} width="150px" alt="an explore item"/>}
            {item.file &&
            <audio controls>
                <source src={`/images/${item.file}`}/>
            </audio> }
            {item.video &&
            <video width="320" height="240" controls>
                <source src={`/images/${item.video}`} type="video/mp4"/>
            </video>}
            <br/>
            <b>{item.person}</b> took a shot of {item.type}, at {item.where}<br/>
            On: <b>{item.date}</b><br/>
        </li>
    )
}
export default ExploreList