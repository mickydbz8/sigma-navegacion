import {View,Text,StyleSheet, Pressable} from 'react-native';
import { Link } from 'expo-router';
import { equipos } from '../data/equipos';

export default function Equipos() {
    return(
        <View style={styles.contenedor}>
            <Text style={styles.titulo}>Equipos</Text>
            {equipos.map((equipo) => (
                <Link key={equipo.id}
                 href={{ pathname: '/equipos/[id]',
                    params: { id: equipo.id }
                 }}
                 asChild
                 >
                 <Pressable style={styles.boton}>
                    <Text style={styles.texto}>{equipo.nombre}
                    </Text>
                 </Pressable>
                </Link>

            ))}
            
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
        textAlign: 'center',
        marginBottom: 20,
        
    },
    boton: {
        backgroundColor: '#102A43',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    texto: {
        color: '#ffffff',
        fontSize: 18,
        textAlign: 'center',
    },
});