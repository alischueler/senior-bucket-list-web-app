const ExploreList = ({item}) => {
    return (
        <li className="list-group-item">
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
            Knocking off: <b>{item.item}</b>
        </li>
    )
}
export default ExploreList