import {useDispatch} from "react-redux";
import {deleteCompletedThunk} from "../services/completed-thunks";

const ExploreList = ({item}) => {
    const l = item.item.length -1
    const dispatch = useDispatch();
    const deleteCompletedHandler = (id) => {
        dispatch(deleteCompletedThunk(id));
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
            <b>{item.person}</b> {item.description}<br/>
            On: <b>{item.date}</b><br/>
            Knocking off: {item.item.map(i => {
                return<><b>
                    {i}
                </b>{item.item.findIndex(it => it === i) < l && ` and `}</>
        })}
        </li>
    )
}
export default ExploreList