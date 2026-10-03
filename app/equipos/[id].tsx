import { View, Text, StyleSheet } from 'react-native'
import { useLocalSearchParams } from 'expo-router'
import { equipos} from '../../data/equipos'

export default function DetalleEquipo() {
    const { id } = useLocalSearchParams<{ id: string }>();
    const equipo = equipos.find((e) => e.id === id);

    if (!equipo) {
        return (
            <View style={styles.contenedor}>
                <Text>Equipo no encontrado</Text>
            </View>
        );
    }

    return (
         <View style={styles.contenedor}>
        <Text style={styles.titulo}>Detalle del equipo</Text>
        
            <Text>Nombre: {equipo.nombre}</Text>
            <Text>Ubicación: {equipo.ubicacion}</Text>
            <Text>Estado: {equipo.estado}</Text>
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
});
