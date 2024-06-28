import { StyleSheet, Image } from 'react-native';
import  products  from '../../../assets/data/products'
import { Text, View } from '@/src/components/Themed';

const product = products[1]
export default function TabOneScreen() {
  return (
    <View style={styles.container}>
     <Image source={{ uri: product.image }} style={{ width: 200, height: 200 }} />
     <Text style={styles.title}>{product.name}</Text>
     <Text style={styles.price}>${product.price}</Text>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: 'white',
    padding: 10,
    borderRadius: 10,
  },
  title: {
    fontSize: 20,
    fontWeight: 'bold',
  },
  image: {
    width: '100%',
    aspectRatio: 1,
  },
  price: {
    fontSize: 35,
    fontWeight: 800,
  }
});
