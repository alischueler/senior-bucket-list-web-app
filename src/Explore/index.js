import BottomDirectory from "../BottomDirectory";
import completed from "./completed.json"
import ExploreList from "./ExploreList";

const Explore = () => {
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