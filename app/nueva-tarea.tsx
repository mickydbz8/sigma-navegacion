import {View,Text,StyleSheet} from 'react-native';

export default function NuevaTarea() {
    return(
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Nueva Tarea</Text>
            <Text style={styles.descripcion}>Seccion para registrar nuevas tareas de Mantenimiento </Text>
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
    },
    descripcion: {
        fontSize: 16,
        color: '#555555',
    },
});