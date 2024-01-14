import {Text, View } from "react-native"
import { styles } from "./styles"

interface StatusProps {
    tipo: string;
    quant: number;
    color?: string;
}

const Status = ({tipo,quant,color}:StatusProps) => {
    return (
        <View>
            <Text style={{ color: color }}>{tipo}</Text>
            <Text>{quant}</Text>
        </View>
    )
}

export const Info = () => {
    return (
        <View style={styles.conteiner}>
            <Status tipo="Criadas" quant={0} color="#4EA8DE" />
            <Status tipo="Concluidas" quant={2} color="#8284FA" />
        </View>
    )
}