import {View,Text,StyleSheet} from 'react-native';

export default function Tareas() {
    return(
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Tareas de Mantenimiento</Text>
            <Text style={styles.tareas}>Tarea 1: Revisar Laptop</Text>
            <Text style={styles.tareas}>Tarea 2: Reparar Impresora</Text>
            <Text style={styles.tareas}>Tarea 3: Configurar Router</Text>
        </View>
    );
}  

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    titulo: {
        fontSize: 24,
        fontWeight: 'bold',
        marginBottom: 20,
        textAlign: 'center',
    },
    tareas: {
        fontSize: 16,
        padding: 15,
        backgroundColor: '#e0e0e0',
        borderRadius: 8,
        marginBottom: 10,
    },
});
