import { useLocalSearchParams } from 'expo-router/build/hooks';
import { Image, StyleSheet, Text, View } from 'react-native';

export default function locationDetails() {

    const params = useLocalSearchParams();
    
    console.log(params);
    return (
        <View style={styles.body}>
            <Text style={styles.title}>Détails de la location</Text>
            <Image source={{ uri: params.image as string }} style={styles.locationImage} resizeMode="cover"/>
            <Text>Nom : {params.name}</Text>
            <Text>Prix: {params.price}</Text>
        </View>
    );

}

const styles = StyleSheet.create({
    body: {
        flex: 1,
        padding: 10,
        paddingVertical: 40,
        alignItems: 'center',
    },

    title: 
    {
        fontSize: 20,
        fontWeight: 'bold',
        marginBottom: 10,
    },

    locationImage: {
        width: 100,
        height: 100,
        marginVertical: 8,
        alignContent: 'flex-start',
      },

});