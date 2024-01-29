import { FlatList, View,Alert } from "react-native"
import { styles } from "./styles"
import { NewTask } from "../../components/newTask";
import { Logo } from "../../components/Logo";
import { Info } from "../../components/Info";
import { Task } from "../../components/Task";
import { useState } from "react";
import uuid from 'react-native-uuid'
import { EmptyComponent } from "../../components/EmptyComponent";

export interface TaskProps {
    id: string;
    description: string;
    completed: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<TaskProps[]>([])

    const handleTaskAdd = (newTask: string) => {
        const newTaskItem = { id: uuid.v4() as string, description: newTask, completed: false };
        setTasks((prevTasks) => [...prevTasks, newTaskItem]);
    };

    const handleTaskRemove = (taskId:string) => {

        Alert.alert("Remover", "Remover a task name?", [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks((prevTasks) =>
                    prevTasks.filter((task) => task.id !== taskId)
                );
                }
            },
            {
                text: 'Não',
                style: 'cancel',
            }

        ])

    }

    const handleTaskCompleted = (taskId:string) =>{
        setTasks((prevTasks)=>
        prevTasks.map((task)=>
        task.id === taskId ? {...task, completed: !task.completed}
        : task
        )
        )
    }

    const tasksCriadas =  tasks.length;
const tasksCompleted =  tasks.filter((task)=> task.completed ).length

    return (
        <>
            <View style={styles.conteiner}>
                <Logo />
                <NewTask addTask={handleTaskAdd} />
            </View>
            <View style={styles.Tasks}>
                <Info criadas={tasksCriadas} concluidas={tasksCompleted} />

                <FlatList
                    data={tasks}
                    showsVerticalScrollIndicator={false}
                    keyExtractor={(item) => item.id}
                    renderItem={({ item }) => (
                        <Task key={item.id} task={item} deleteTask={handleTaskRemove} completeTask={handleTaskCompleted}/>
                    )}
                    ListEmptyComponent={() => (
                        <EmptyComponent />
                    )}
                />



            </View>
        </>

    )
}