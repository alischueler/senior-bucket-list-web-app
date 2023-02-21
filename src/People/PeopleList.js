const PeopleList = ({person}) => {
    return (
        <li className="list-group-item">
            <img src={`/images/${person.profile}`} width="150px" className="rounded-circle"/>
            {person.name} is a {person.major} major {person.minor ? `with a minor in ${person.minor}` : ''}
        </li>
    )
}
export default PeopleList