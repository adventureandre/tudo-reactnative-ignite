import { View } from "react-native"
import { styles } from "./styles"
import { NewTask } from "../../components/newTask";
import { Logo } from "../../components/Logo";

export function Home() {
    return (
        <>
            <View style={styles.conteiner}>
                <Logo />
                <NewTask />
            </View>

            <View style={styles.main}>
            </View>
        </>

    )
}