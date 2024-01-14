import { Image, Text, View } from "react-native"
import { styles } from "./styles"

export const EmptyComponent = () => {
    return (
        <View style={styles.container}>
            <Image style={styles.img} source={require('../../../assets/Clipboard.png')} />
            <Text style={styles.text1}>
                Você ainda não tem tarefas cadastradas
            </Text>
            <Text style={styles.text2}>
                Crie tarefas e organize seus itens a fazer
            </Text>
        </View>
    )
}