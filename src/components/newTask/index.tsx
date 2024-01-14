import { TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';

export const NewTask = () => {
    return (
        <View style={styles.form}>
            <TextInput
                style={styles.newTask}
                placeholder="Descrição da tarefa"
                placeholderTextColor="#fbfbfb" />

            <TouchableOpacity style={styles.button} >
                <Ionicons name="add-circle-outline" size={23} color="#F2F2F2" />
            </TouchableOpacity>
        </View>
    )
}