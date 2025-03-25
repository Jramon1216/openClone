import {useQuery} from "@tanstack/react-query"
import {GameOfTheDay, TopFiveGames, PopularGames} from "./components"


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
            <GameOfTheDay/>
            <hr/>
            <TopFiveGames/>
            <hr/>
            <PopularGames/>
        </>
    )
} 