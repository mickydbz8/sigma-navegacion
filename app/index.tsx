import { View,Text,Pressable,StyleSheet} from 'react-native';
import{Link} from 'expo-router';

export default function Inicio() {
    return(
        <View style={styles.contenedor}>

         <Text style={styles.titulo}>Bienvenido a Sigma</Text>

         <Text style={styles.subtitulo}>Sistema Gestion de Mantenimiento</Text>

         <Link href="/equipos" asChild>
         <Pressable style={styles.boton}>
            <Text style={styles.textoBoton}>Ir a Equipos</Text>
         </Pressable>
         </Link>
        
        
         <Link href="/tareas" asChild>
         <Pressable style={styles.boton}>
            <Text style={styles.textoBoton}>Ir a Tareas</Text>
         </Pressable>
         </Link>

         
         <Link href="/nueva-tarea" asChild>
         <Pressable style={styles.boton}>
            <Text style={styles.textoBoton}>Ir a Nueva Tarea</Text>
         </Pressable>
         </Link>

         </View>
);
}

const styles = StyleSheet.create({
    contenedor: {
        flex: 1,
        justifyContent: 'center',
        padding: 20,
        backgroundColor: '#f5f5f5',
    },
    titulo: {
        fontSize: 32,
        fontWeight: 'bold',
        textAlign: 'center',
        color: '102A43',
    },
    subtitulo: {
        fontSize: 18,
        textAlign: 'center',
        marginBottom: 30,
    },
    boton: {
        backgroundColor: '#102A43',
        padding: 15,
        borderRadius: 10,
        marginBottom: 15,
    },
    textoBoton: {
        color: '#fff',
        textAlign: 'center',
        fontSize: 18,
    },
});