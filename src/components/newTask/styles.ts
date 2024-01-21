import { StyleSheet } from "react-native";

export const styles = StyleSheet.create({
    form: {
        width: "100%",
        flexDirection: "row",
        position: "absolute",
        bottom: -30,

        gap: 5,
        marginTop: 48,
        zIndex:1
    },

    newTask: {
        height: 56,
        width: 275,

        paddingLeft: 16,
        paddingVertical: 16,
        borderRadius: 6,
        color: '#fff',
        fontSize: 16,
        backgroundColor: '#262626',
        borderWidth: 1,
        borderColor: '#5E60CE',
    },
    button: {
        backgroundColor: '#1E6F9F',
        padding: 16,
        borderRadius: 6,
    }
})