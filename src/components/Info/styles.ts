import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    conteiner:{
        flexDirection: 'row',
        justifyContent: 'space-between',
        marginBottom:10,

    },
    status:{
        flexDirection: 'row',
        gap: 15,
    },
    text:{
       fontSize:14,
       fontWeight: 'bold',
    },
    quantidade: {
        backgroundColor: '#333333',
        textAlign: 'center',
        color: '#FFFFFF',
        fontSize: 12,
        paddingHorizontal: 8, 
        paddingVertical: 2,  
        borderRadius: 8, 
        overflow: 'hidden',
      },
})