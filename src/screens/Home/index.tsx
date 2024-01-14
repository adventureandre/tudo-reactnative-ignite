import { View } from "react-native"
import { styles } from "./styles"
import { NewTask } from "../../components/newTask";
import { Logo } from "../../components/Logo";
import { Info } from "../../components/Info";

export function Home() {
    return (
        <>
            <View style={styles.conteiner}>
                <Logo />
                <NewTask />
            </View>
            <View style={styles.Tasks}>
                <Info criadas={0} concluidas={0}/>
            </View>
        </>

    )
}