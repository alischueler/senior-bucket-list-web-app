const ExploreList = ({item}) => {
    return (
        <li className="list-group-item">
            <img src={`/images/${item.image}`} width="150px" alt="an explore item"/><br/>
            <b>{item.person}</b> {item.description}<br/>
            On: <b>{item.date}</b><br/>
            Knocking off: <b>{item.item}</b>
        </li>
    )
}
export default ExploreList