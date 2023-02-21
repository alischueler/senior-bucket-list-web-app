import BottomDirectory from "../BottomDirectory";
import participants from "../participants.json";
import PeopleList from "./PeopleList";

const People = () => {
    return (
        <div className="container">
            <BottomDirectory active="People"/>
            <h2 className="text-center">Meet the Participants!</h2>
            <ul className="list-group">
                {
                    participants.map(one => {
                        return(<PeopleList person={one}/>);
                    })
                }
            </ul>
        </div>
    )
}
export default People