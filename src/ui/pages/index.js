import { useIndex } from "../../data/hooks/pages/useIndex.page";
import styles from "../styles/pages/index.module.css";
import TextInput from "../components/inputs/TextInput/TextInput";
import Tweet from "../components/data-display/Tweet/Tweet";

const tweet = {
    date: "há 5 dias",
    text: "Meu primeiro tweet",
    user: {
        name: "Ig0or",
        username: "Ig0or",
        picture: "https://github.com/Ig0or.png",
    },
};

export default function Index() {
    return (
        <div>
            <TextInput />
            <Tweet tweet={tweet} />
        </div>
    );
}
