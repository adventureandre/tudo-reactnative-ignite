import { FlatList, View,Alert } from "react-native"
import { styles } from "./styles"
import { NewTask } from "../../components/newTask";
import { Logo } from "../../components/Logo";
import { Info } from "../../components/Info";
import { Task } from "../../components/Task";
import { useState } from "react";
import { EmptyComponent } from "../../components/EmptyComponent";

export interface TaskProps {
    description: string;
    completed: boolean;
}

export function Home() {
    const [tasks, setTasks] = useState<TaskProps[]>([])

    const handleTaskAdd = (newTask: string) => {
        const newTaskItem = {description: newTask, completed: false };
        setTasks((prevTasks) => [...prevTasks, newTaskItem]);
    };

    const handleTaskRemove = (desc:string) => {

        Alert.alert("Remover", "Remover a task name?", [
            {
                text: 'Sim',
                onPress: () => {
                    setTasks((prevTasks) =>
                    prevTasks.filter((task) => task.description !== desc)
                );
                }
            },
            {
                text: 'Não',
                style: 'cancel',
            }

        ])

    }

    const handleTaskCompleted = (desc:string) =>{
        setTasks((prevTasks)=>
        prevTasks.map((task)=>
        task.description === desc ? {...task, completed: !task.completed}
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
                    keyExtractor={(item, index) => index.toString()}
                    renderItem={({ item, index }) => (
                        <Task key={index} task={item} deleteTask={handleTaskRemove} completeTask={handleTaskCompleted}/>
                    )}
                    ListEmptyComponent={() => (
                        <EmptyComponent />
                    )}
                />



            </View>
        </>

    )
}