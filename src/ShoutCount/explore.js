import ExploreList from "./ExploreList";

const Explore = ({completed}) => {
    return (<>
            {
                completed.map(item => {
                    return(<ExploreList item={item}/>);
                })
            }
        </>
    )
}
export default Explore