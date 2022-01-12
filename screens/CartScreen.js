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
import CircleHeader from '../components/CircleHeader';
import shoes from '../data/shoes.json';
import {Icon} from 'react-native-elements';
import {useDispatch, useSelector} from 'react-redux';
import * as actions from '../redux/action/cartAction';
import colors from '../Common/color';
import {color} from 'react-native-elements/dist/helpers';
import ItemCart from '../components/Items/ItemCart';

const {width, height} = Dimensions.get('window');
const DATA = shoes.shoes;

// const ItemCart = ({item, dispatch}) => (
//   <View style={{margin: 5}}>
//     <View style={{flexDirection: 'row', alignItems: 'center'}}>
//       <View
//         style={{
//           width: 160,
//           height: 160,
//           justifyContent: 'center',
//           alignItems: 'center',
//         }}>
//         <View
//           style={{
//             width: 120,
//             height: 120,
//             borderRadius: 120 / 2,
//             backgroundColor: item.color,
//           }}
//         />
//         <Image
//           style={{
//             width: 170,
//             height: 210,
//             resizeMode: 'stretch',
//             position: 'absolute',
//             transform: [{rotate: '-25deg'}],
//           }}
//           source={{
//             uri: item.image,
//           }}
//         />
//       </View>
//       <View
//         style={{
//           flex: 1,
//           height: 160,
//           marginLeft: 10,
//         }}>
//         <Text
//           style={{
//             marginTop: 15,
//             fontSize: 20,
//             fontFamily: 'Rubik-Black',
//             color: 'black',
//           }}>
//           Nike
//         </Text>
//         <Text
//           style={{
//             marginTop: 10,
//             fontSize: 25,
//             fontFamily: 'Rubik-Black',
//             color: 'black',
//           }}>
//           $70
//         </Text>

//         <View
//           style={{
//             flexDirection: 'row',
//             alignItems: 'center',
//             marginTop: 30,
//           }}>
//           <TouchableOpacity
//             onPress={() => {
//               dispatch(actions.decrementCart(item));
//             }}>
//             <View
//               style={{
//                 backgroundColor: '#e1e7ed',
//                 width: 40,
//                 height: 40,
//                 borderRadius: 40 / 2,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 marginHorizontal: 10,
//               }}>
//               <Icon name="remove" />
//             </View>
//           </TouchableOpacity>
//           <Text
//             style={{
//               fontFamily: 'Rubik-Black',
//               color: 'black',
//             }}>
//             {item.amount}
//           </Text>
//           <TouchableOpacity
//             onPress={() => {
//               dispatch(actions.incrementCart(item));
//             }}>
//             <View
//               style={{
//                 backgroundColor: '#e1e7ed',
//                 width: 40,
//                 height: 40,
//                 borderRadius: 40 / 2,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 marginHorizontal: 10,
//               }}>
//               <Icon name="add" />
//             </View>
//           </TouchableOpacity>
//           <TouchableOpacity
//             onPress={() => {
//               dispatch(actions.removeFromCart(item));
//             }}>
//             <View
//               style={{
//                 backgroundColor: '#e1e7ed',
//                 width: 40,
//                 height: 40,
//                 borderRadius: 40 / 2,
//                 alignItems: 'center',
//                 justifyContent: 'center',
//                 marginLeft: width / 40 + 50,
//               }}>
//               <Image
//                 source={require('./../assets/trash.png')}
//                 style={{width: 30, height: 30}}
//               />
//             </View>
//           </TouchableOpacity>
//         </View>
//       </View>
//     </View>
//   </View>
// );

const CartScreen = () => {
  const dispatch = useDispatch();

  const renderItem = ({item}) => <ItemCart item={item} dispatch={dispatch} />;
  const cart = useSelector(state => state.cartItems);

  return (
    <View
      style={{
        flex: 1,
        backgroundColor: colors.White,
      }}>
      <CircleHeader cart={cart} title={'Your cart'}>
        <View
          style={{
            flex: 1,
            backgroundColor: 'transparent',
          }}>
          {cart.length > 0 ? (
            <FlatList
              data={cart}
              renderItem={renderItem}
              keyExtractor={item => item.id}
            />
          ) : (
            <Text style={{marginLeft: 10, fontSize: 20}}>
              Your cart is empty
            </Text>
          )}
        </View>
      </CircleHeader>
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
export default CartScreen;
