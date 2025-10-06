import { router } from 'expo-router';
import * as React from 'react';
import { FlatList, Image, Pressable, StyleSheet, Text, View } from 'react-native';


// export type Props = {
//   name: string;
//   baseEnthusiasmLevel?: number;
// };

  // build a map of locations to display them in a flatlist
  let locationsMap = new Map();

  function generateLocationsInMap(locationCount: number) {
    for (let i = 0; i < locationCount; i++) {
      locationsMap.set(i, {name: "Location"+i, price: i*100});
    }
  }

function ListLocations() {

    // build an array of locations with name and price

    /*let locations = [{name: "location", price : 100},{name: "location2", price : 200},
      {name: "location3", price : 300}, {name: "location4", price : 400}, 
      {name: "location5", price : 500}, {name: "location6", price : 600}, 
      {name: "location7", price : 700}, {name: "location8", price : 800}, 
      {name: "location9", price : 900}, {name: "location10", price : 1000}, 
      {name: "location11", price : 1100}, {name: "location12", price : 1200}, 
      {name: "location13", price : 1300}, {name: "location14", price : 1400}, 
      {name: "location15", price : 1500}]*/

    generateLocationsInMap(1000);

  function showDetails(name: string, price: number, imageLink: string): void {
      // Navigate to location details page
      // router.push(`/list/location_details?name=${encodeURIComponent(name)}&price=${price}`);  
      router.push(
        {
          pathname: '/list/location_details',
          params: { name: name, price: price, image: imageLink}
        }
      )

  }

    return (
        
        <View style={styles.container}>
            
            {<FlatList

                data={Array.from(locationsMap.values())}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                  <Pressable onPress={() => showDetails(item.name, item.price, `https://picsum.photos/400/200?random=${item.price/100}`)} style={({pressed}) => [{backgroundColor: pressed ? 'rgb(210, 230, 255)' : 'white',}, styles.locationTile]}>
                    <View>
                      <Image source={{ uri: `https://picsum.photos/400/200?random=${item.price/100}` }} 
                          style={styles.locationImage} resizeMode="cover"/>
                        <View>
                          <Text style={styles.locationName}>{item.name}</Text>
                          <Text style={styles.locationPrice}>{item.price}€</Text>
                        </View>
                  </View>
                  </Pressable>
                )}
            /* <FlatList
                data={locations}
                keyExtractor={(item, index) => index.toString()}
                renderItem={({ item }) => (
                <View style={styles.locationTile}>
                    <Text style={styles.locationName}>{item.name}</Text>
                    <Text style={styles.locationPrice}>{item.price}€</Text>
                </View>
                )}*/

              /> 
              }
        </View>
        );
}

// function Hello({name, baseEnthusiasmLevel = 0}: Props) {
//   const [enthusiasmLevel, setEnthusiasmLevel] = useState(
//     baseEnthusiasmLevel,
//   );

//   const onIncrement = () =>
//     setEnthusiasmLevel(enthusiasmLevel + 1);
//   const onDecrement = () =>
//     setEnthusiasmLevel(
//       enthusiasmLevel > 0 ? enthusiasmLevel - 1 : 0,
//     );

//   const getExclamationMarks = (numChars: number) =>
//     numChars > 0 ? Array(numChars + 1).join('!') : '';

//   return (
//     <View style={styles.container}>
//       <Text style={styles.greeting}>
//         Hello {name}
//         {getExclamationMarks(enthusiasmLevel)}
//       </Text>
//       <View>
//         <Button
//           title="Increase enthusiasm"
//           accessibilityLabel="increment"
//           onPress={onIncrement}
//           color="blue"
//         />
//         <Button
//           title="Decrease enthusiasm"
//           accessibilityLabel="decrement"
//           onPress={onDecrement}
//           color="red"
//         />
//       </View>
//     </View>
//   );
// }

const styles = StyleSheet.create({
  container: {
    flex: 1,
    alignItems: 'flex-start',
    justifyContent: 'flex-start',
    marginHorizontal: 10,
    marginVertical: 10,
    paddingTop: 40,
  },
  
  greeting: {
    fontSize: 20,
    fontWeight: 'bold',
    margin: 16,
  },

  wrapperCustom: {
    borderRadius: 8,
    padding: 6,
  },

  locationTile: {
    borderWidth: 1,
    borderColor: 'lightgrey',
    flexDirection: 'row',
    borderRadius: 8,
    marginVertical: 8,
    padding: 8,
    minWidth: '100%',
  },

  locationName: {
    fontSize: 16,
    fontWeight: 'bold',
    alignContent: 'flex-start',
    color: 'black',
  },

  locationPrice: {
    fontSize: 12,
    marginBottom: 8,
    alignContent: 'flex-start',
    color: 'lightgrey',
  },

  locationImage: {
    width: 50,
    height: 50,
    marginRight: 8,
    alignContent: 'flex-start',
  },

});

export default ListLocations;