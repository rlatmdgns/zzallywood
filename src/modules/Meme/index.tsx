import getMemes from "@/services/getMemes/getMemes";
import MemeList from "./components/MemeItem/MemeItem";

const MemeModule = async () => {
    const memes = await getMemes()
    return <MemeList memes={memes} />
}

export default MemeModule
