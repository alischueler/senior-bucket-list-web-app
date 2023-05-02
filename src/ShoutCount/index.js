import BottomDirectory from "../BottomDirectory";
import CreateShot from "./createShot";
import Explore from "./explore";
import {useDispatch, useSelector} from "react-redux";
import {useEffect} from "react";
import {findComepletedThunk} from "../services/completed-thunks";

const ShoutCount = () => {
    const {drinks} = useSelector(state => state.drinksData)
    let newC = drinks;
    const reversedC = newC.slice().reverse();
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(findComepletedThunk()) // eslint-disable-next-line
    }, [])
    return (
        <div>
            <BottomDirectory active="ShotCounts"/>
            <CreateShot/>
            <Explore completed={reversedC}/>
        </div>
    )
}
export default ShoutCount