import BottomDirectory from "../BottomDirectory";
import {useSelector, useDispatch} from "react-redux";
import "../BucketList/BucketListItem.css"
import {useEffect} from "react";
import {findComepletedThunk} from "../services/completed-thunks";
import Create from "./create";
import Explore from "./explore";

const ExploreScreen = () => {
    const {completed, loading} = useSelector(state => state.completedData)
    let newC = completed;
    const reversedC = newC.slice().reverse();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findComepletedThunk()) // eslint-disable-next-line
    }, [])
    return (
        <div>
            <BottomDirectory active="Explore"/>
            <ul className="list-group text-center">
                {/*<Create completed={completed}/>*/}
                <Explore completed={reversedC} loading={loading}/>
            </ul>
        </div>
    )
}
export default ExploreScreen