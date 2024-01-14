import { FlatList, Image, View } from "react-native"
import { styles } from "./styles"
import { NewTask } from "../../components/newTask";
import { Logo } from "../../components/Logo";
import { Info } from "../../components/Info";
import { Task } from "../../components/Task";
import { useState } from "react";
import { Text } from "react-native";
import { EmptyComponent } from "../../components/EmptyComponent";

export interface TaskProps {
    description: string;
    completed: boolean;
}

export function Home() {
 const [tasks, setTasks] = useState<TaskProps[]>([])


 const handleTaskAdd = (newTask: string) => {
    const newTaskItem = { description: newTask, completed: false };
    setTasks((prevTasks) => [...prevTasks, newTaskItem]);
};

 

    return (
        <>
            <View style={styles.conteiner}>
                <Logo />
                <NewTask  addTask={handleTaskAdd}  />
            </View>
            <View style={styles.Tasks}>
                <Info criadas={0} concluidas={0} />

                <FlatList
                    data={tasks}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item }) => (
                        <Task key={item.description} task={item.description} />
                    )}

                    ListEmptyComponent={() => (
                        <EmptyComponent/>
                    )}
                />

            </View>
        </>

    )
}