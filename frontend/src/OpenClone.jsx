import {useQuery} from "@tanstack/react-query"
import {GameOfTheDay, TopFiveGames, PopularGames} from "./components"
import './styles/openCloneStyle.css'

export default function OpenClone() {

    // const {data, isLoading} = useQuery({
    //     queryFn: () => {},
    //     queryKey: [""]
    // })

    // if (isLoading){
    //     return <div> Loading Games...</div>
    // }


    return(
        <>
            <div id="gotd-container">
                <GameOfTheDay/>
            </div>
            <hr/>
            <TopFiveGames/>
            <hr/>
            <PopularGames/>
        </>
    )
} 