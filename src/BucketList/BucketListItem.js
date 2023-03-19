import {useSelector} from "react-redux";
import "./BucketListItem.css"

const BucketListItem = ({item}) => {
    const completed = useSelector(state => state.completed)
    const newC = completed.filter(c => c.item === item.title)
    return (
        <li>
            {item.bonus && <b>BONUS </b>}
            {item.title}
            {newC.map(c => <span className={`${c.person === 'Ali' ? 'bg-primary d-inline-block' : ''}
             ${c.person === 'Lindsay' ? 'bg-warning d-inline-block' : ''}
             ${c.person === 'Maddie' ? 'bg-danger d-inline-block' : ''}
             ${c.person === 'Claire' ? 'bg d-inline-block' : ''} rounded-circle circle`}/>)}
        </li>
    )
}
export default BucketListItem