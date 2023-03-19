import BottomDirectory from "../BottomDirectory";
import ExploreList from "./ExploreList";
import {useSelector} from "react-redux";

const Explore = () => {
    const completed = useSelector(state => state.completed)
    return (
        <div>
            <BottomDirectory active="Explore"/>
            <ul className="list-group text-center">
                {
                    completed.map(item => {
                        return(<ExploreList item={item}/>);
                    })
                }
            </ul>
        </div>
    )
}
export default Explore