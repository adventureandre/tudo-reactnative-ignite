import React, { useState } from 'react';
import { View, Text, Alert } from "react-native"
import BouncyCheckbox from "react-native-bouncy-checkbox";
import { styles } from './styles';
import Ionicons from '@expo/vector-icons/Ionicons';

export const Task = ({ task }) => {

    const [checked, setChecked] = React.useState(true);
    const toggleCheckbox = () => setChecked(!checked);

    const handleTaskRemove = () => {

        Alert.alert("Remover", "Remover a task name?", [
            {
                text: 'Sim',
                onPress: () => {
                    console.log('Ponto de remoção');
                }
            },
            {
                text: 'Não',
                style: 'cancel',
            }

        ])

    }

 
    return (
        <View style={styles.container}>
            <BouncyCheckbox
            style={styles.checkbox}
                size={18}
                fillColor="#5E60CE"
                unfillColor="#262626"
                text={task}
                iconStyle={{ borderColor: "red" }}
                innerIconStyle={{ borderWidth: 1}}
                textStyle={{ fontSize: 16, color: "#F2F2F2" }}
                onPress={(isChecked: boolean) => { }}
            />
            <Text style={styles.trash} onPress={handleTaskRemove}><Ionicons name="trash" size={18} color="#808080"/></Text>
        </View>
    );
};