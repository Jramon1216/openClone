import {useQuery} from "@tanstack/react-query"
import GameOfTheDay from "./components/GameOfTheDay"

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
        </>
    )
} 