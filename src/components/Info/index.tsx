import {Text, View } from "react-native"
import { styles } from "./styles"

interface StatusProps {
    tipo: string;
    quant: number;
    color?: string;
}

interface InfoProps {
    criadas: number;
    concluidas: number;
}

const Status = ({tipo,quant,color}:StatusProps) => {
    return (
        <View style={styles.status}>
            <Text style={{...styles.text, color: color }}>{tipo}</Text>
            <Text style={styles.quantidade}>{quant}</Text>
        </View>
    )
}

export const Info = ({criadas,concluidas}:InfoProps) => {
    return (
        <View style={styles.conteiner}>
            <Status tipo="Criadas" quant={criadas} color="#4EA8DE" />
            <Status tipo="Concluidas" quant={concluidas} color="#8284FA" />
        </View>
    )
}