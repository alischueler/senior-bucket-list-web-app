import ExploreList from "./ExploreList";

const Explore = ({completed}, {loading}) => {
    return (<>
            {/*{*/}
            {/*    loading &&*/}
            {/*    <li className="list-group-item">*/}
            {/*        Loading...*/}
            {/*    </li>*/}
            {/*}*/}
            {
                completed.map(item => {
                    return(<ExploreList item={item}/>);
                })
            }
        </>
    )
}
export default Explore