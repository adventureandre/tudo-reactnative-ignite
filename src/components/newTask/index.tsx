import { TextInput, TouchableOpacity, View } from "react-native"
import { styles } from "./styles";
import Ionicons from '@expo/vector-icons/Ionicons';
import { useState } from "react";
interface NewTaskProps {
    addTask: (task: string) => void;
}

export const NewTask = ({ addTask }: NewTaskProps) => {
    const [newTask, setnewTask] = useState('')

    const handleAddTask = () => {
        if (newTask.trim() !== '') {
            addTask(newTask);
            setnewTask(''); 
        }
    };


    return (
        <View style={styles.form}>
            <TextInput
                style={styles.newTask}
                placeholder="Descrição da tarefa"
                placeholderTextColor="#fbfbfb"
                onChangeText={setnewTask}
                value={newTask}
            />


            <TouchableOpacity style={styles.button} onPress={handleAddTask} >
                <Ionicons name="add-circle-outline" size={23} color="#F2F2F2" />
            </TouchableOpacity>
        </View>
    )
}