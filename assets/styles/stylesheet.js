import { StyleSheet } from "react-native";

const Styles = StyleSheet.create({
    h1: {
      color: '#FFFFFF',
      fontSize: 36,
      fontWeight: '700',
      paddingBottom: 10,
    },
    h2: {
        color: '#6B6C76',
        fontSize: 30,
        fontWeight: '700',
        paddingBottom: 10,
      },
    h3: {
        color: '#6B6C76',
        fontSize: 25,
        fontWeight: '700',
        paddingBottom: 10,
      },
    image: {
        width: 300,
        height: 300,
    },
    card: {
        marginRight: 25,
        padding: 20,
        width: 250,
        height: 375,
        borderRadius: 28,
        position: 'relative',
    },
    subCard: {
        width: 250,
        height: 100,
        padding: 15,
        borderRadius: 28,
        backgroundColor: '#FFFFFF',
        position: 'absolute',
        bottom: 0,
        borderWidth: 4,
    },
    buttonText: {
        color: '#AFE0FF',
        fontSize: 20,
        fontWeight: '600',
    },
    button: {
        borderColor: '#FFFFFF',
        backgroundColor: '#FFFFFF',
        marginTop: 100,
        paddingHorizontal: 30,
        paddingVertical: 10,
        borderRadius: 10,
    }
});

export default Styles;