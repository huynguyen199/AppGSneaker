import React from 'react';
import {
  View,
  Text,
  Image,
  StyleSheet,
  FlatList,
  Dimensions,
  TouchableOpacity,
} from 'react-native';
import {Header} from 'react-native-elements';
import shoes from '../data/shoes.json';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../redux/action/cartAction';
import colors from '../Common/color';
import ItemProduct from '../components/Items/ItemProduct';
import {useNavigation} from '@react-navigation/native';

const {width, height} = Dimensions.get('window');

const DATA = shoes.shoes;

// const ItemProduct = ({item, dispatch, cart}) => (
//   <View
//     style={{
//       flex: 1,
//       alignItems: 'center',
//     }}>
//     <View>
//       <View
//         style={{
//           width: width - 80,
//           height: 390,
//           borderRadius: 30,
//           backgroundColor: item.color,
//           alignItems: 'center',
//           alignContent: 'center',
//           marginHorizontal: 10,
//         }}>
//         <Image
//           style={{
//             width: 300,
//             height: 300,
//             resizeMode: 'stretch',
//             marginTop: 40,
//             transform: [{rotate: '-25deg'}],
//           }}
//           source={{
//             uri: item.image,
//           }}
//         />
//       </View>
//       <View
//         style={{
//           margin: 10,
//           width: width - 80,
//         }}>
//         <Text
//           style={{
//             fontSize: 23,
//             marginVertical: 10,
//             fontFamily: 'Rubik-Black',
//             color: 'black',
//           }}>
//           {item.name}
//         </Text>
//         <Text
//           style={{
//             lineHeight: 30,
//             fontFamily: 'Rubik-Black',
//           }}>
//           {item.description}
//         </Text>
//         <View
//           style={{
//             flex: 1,
//             flexDirection: 'row',
//             justifyContent: 'space-between',
//             alignItems: 'center',
//           }}>
//           <View
//             style={{
//               alignItems: 'center',
//               alignContent: 'center',
//             }}>
//             <Text
//               style={{
//                 fontSize: 18,
//                 color: 'black',
//                 fontFamily: 'Rubik-Black',
//               }}>
//               {'$' + item.price}
//             </Text>
//           </View>
//           <View style={{}}>
//             {!cart.find(p => item.id == p.id) ? (
//               <TouchableOpacity
//                 onPress={() => {
//                   console.log('hello');
//                   dispatch(actions.addToCart({...item, amount: 1}));
//                 }}>
//                 <View
//                   style={{
//                     width: 150,
//                     alignItems: 'center',
//                     alignContent: 'center',
//                     backgroundColor: 'orange',
//                     borderRadius: 30,
//                     padding: 10,
//                   }}>
//                   <Text
//                     style={{
//                       fontSize: 18,
//                       color: 'black',
//                       fontFamily: 'Rubik-Black',
//                     }}>
//                     ADD TO CART
//                   </Text>
//                 </View>
//               </TouchableOpacity>
//             ) : (
//               <View
//                 style={{
//                   width: 60,
//                   height: 60,
//                   borderRadius: 40,
//                   backgroundColor: colors.Yellow,
//                 }}>
//                 <Image
//                   style={{
//                     width: 60,
//                     height: 60,
//                     resizeMode: 'center',
//                     zIndex: 1,
//                   }}
//                   source={require('./../assets/check.png')}
//                 />
//               </View>
//             )}
//           </View>
//         </View>
//       </View>
//     </View>
//   </View>
// );

const ProductScreen = () => {
  const dispatch = useDispatch();
  const navigation = useNavigation();
  const cart = useSelector(state => state.cartItems);
  console.log(
    '🚀 ~ file: ProductScreen.js ~ line 125 ~ ProductScreen ~ cart',
    cart,
  );

  const renderItem = ({item}) => (
    <ItemProduct item={item} dispatch={dispatch} cart={cart} />
  );
  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.White,
      }}>
      <View style={{flex: 1, zIndex: 1}}>
        <View style={styles.circle} />
        <Header
          leftComponent={() => (
            <View style={{width: 200}}>
              <Image
                style={{width: 60, height: 60, resizeMode: 'center', zIndex: 1}}
                source={require('./../assets/nike.png')}
              />
              <Text
                style={{
                  fontSize: 25,
                  color: 'black',
                  fontFamily: 'Rubik-Black',
                }}>
                Our Products
              </Text>
            </View>
          )}
          containerStyle={{
            backgroundColor: 'transparent',
            justifyContent: 'space-around',
          }}
          rightComponent={() => (
            <TouchableOpacity onPress={() => navigation.navigate('Cart')}>
              <View>
                <Image
                  style={{
                    width: 60,
                    height: 60,
                    resizeMode: 'center',
                    zIndex: 1,
                  }}
                  source={require('./../assets/cart.png')}
                />
              </View>
            </TouchableOpacity>
          )}
          // centerComponent={{text: 'Header'}}
        />
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
          }}>
          <FlatList
            data={DATA}
            renderItem={renderItem}
            keyExtractor={item => item.id}
          />
        </View>
      </View>
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    backgroundColor: colors.Yellow,
    position: 'absolute',
    marginLeft: -170,
    marginTop: -70,
    zIndex: 0,
  },
  item: {
    backgroundColor: '#f9c2ff',
    padding: 20,
    marginVertical: 8,
    marginHorizontal: 16,
  },
  title: {
    fontSize: 32,
  },
});
export default ProductScreen;
