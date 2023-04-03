import BottomDirectory from "../BottomDirectory";
import participants from "../participants.json";
import ShotTrackerItem from "./ShotTrackerItem";

const ShotTracker = () => {
    const now = Date.now();
    const target = 1682913599000;
    const diff = target - now;
    const days = Math.floor(diff / 86400000);
    const hours = Math.floor((diff - (days * 86400000)) / 3600000);
    const mins = Math.floor((diff - (days * 86400000) - (hours * 3600000)) / 60000);
    const secs = Math.floor((diff - (days * 86400000) - (hours * 3600000) - (mins * 60000)) / 1000);
    return (
        <div className="container">
            <BottomDirectory active="Shots"/>
            <div className="text-center">
                <h1>Shot Tracker</h1>
                <h2>{days >= 1 ? `${days} days` : ''}
                    {hours >= 1 ? ` ${hours} hours` : ''}
                    {mins >= 1 ? ` ${mins} minutes` : ''}
                    {secs >= 1 ? ` ${secs} seconds` : ''} to go!</h2>
                <h5>Deadline: Sunday, April 30th at 11:59:59pm</h5>
            </div>
            <ul className="list-group">
                {
                    participants.map(one => {
                        return(<ShotTrackerItem person={one}/>);
                    })
                }
            </ul>
        </div>
    )
}
export default ShotTracker