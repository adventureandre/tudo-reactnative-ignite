import React from 'react';
import { View, Text} from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';
import { TaskProps } from '../../screens/Home';

interface TaskitemsProps {
    task: TaskProps;
    deleteTask: (desc: string)=>void;
}

export const Task = ({ task , deleteTask }: TaskitemsProps) => {



    return (
        <View style={styles.container}>
            <BouncyCheckbox
                style={styles.checkbox}
                isChecked={task.completed}
                size={18}
                fillColor="#5E60CE"
                unfillColor="#262626"
                text={task.description}
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 1 }}
                textStyle={{ fontSize: 16, color: "#F2F2F2" }}
                // onPress={() => }
            />
            <Text style={styles.trash} onPress={() => deleteTask(task.description)}>
  <Ionicons name="trash" size={18} color="#808080" />
</Text>
        </View>
    );
};