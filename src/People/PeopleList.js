const PeopleList = ({person}) => {
    return (
        <li className="list-group-item d-flex align-items-center">
            <img src={`/images/${person.profile}`} width="150px" className="rounded-circle" alt="a person item"/>
            {person.name} is a {person.major} major {person.minor ? `with a minor in ${person.minor}` : ''}
        </li>
    )
}
export default PeopleList