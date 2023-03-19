import BottomDirectory from "../BottomDirectory";
import BucketListItem from "./BucketListItem";
import items from "../data/items.json";

const BucketList = () => {
    return (
        <div className="container">
            <BottomDirectory active="BucketList"/>
            <div className="align-content-center">
                <ol>
                    {
                        items.map(item => {
                            return(<BucketListItem item={item}/>);
                        })
                    }
                </ol>
            </div>
        </div>
    )
}
export default BucketList