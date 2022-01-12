import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import {Icon} from 'react-native-elements';
import * as actions from '../../redux/action/cartAction';
const {width, height} = Dimensions.get('window');

const ItemCart = ({item, dispatch}) => {
  return (
    <View style={{margin: 5}}>
      <View style={{flexDirection: 'row', alignItems: 'center'}}>
        <View
          style={{
            width: 160,
            height: 160,
            justifyContent: 'center',
            alignItems: 'center',
          }}>
          <View
            style={{
              width: 120,
              height: 120,
              borderRadius: 120 / 2,
              backgroundColor: item.color,
            }}
          />
          <Image
            style={{
              width: 170,
              height: 210,
              resizeMode: 'stretch',
              position: 'absolute',
              transform: [{rotate: '-25deg'}],
            }}
            source={{
              uri: item.image,
            }}
          />
        </View>
        <View
          style={{
            flex: 1,
            height: 160,
            marginLeft: 10,
          }}>
          <Text
            style={{
              marginTop: 15,
              fontSize: 20,
              fontFamily: 'Rubik-Black',
              color: 'black',
            }}>
            Nike
          </Text>
          <Text
            style={{
              marginTop: 10,
              fontSize: 25,
              fontFamily: 'Rubik-Black',
              color: 'black',
            }}>
            $70
          </Text>

          <View
            style={{
              flexDirection: 'row',
              alignItems: 'center',
              marginTop: 30,
            }}>
            <TouchableOpacity
              onPress={() => {
                dispatch(actions.decrementCart(item));
              }}>
              <View
                style={{
                  backgroundColor: '#e1e7ed',
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 10,
                }}>
                <Icon name="remove" />
              </View>
            </TouchableOpacity>
            <Text
              style={{
                fontFamily: 'Rubik-Black',
                color: 'black',
              }}>
              {item.amount}
            </Text>
            <TouchableOpacity
              onPress={() => {
                dispatch(actions.incrementCart(item));
              }}>
              <View
                style={{
                  backgroundColor: '#e1e7ed',
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginHorizontal: 10,
                }}>
                <Icon name="add" />
              </View>
            </TouchableOpacity>
            <TouchableOpacity
              onPress={() => {
                dispatch(actions.removeFromCart(item));
              }}>
              <View
                style={{
                  backgroundColor: '#e1e7ed',
                  width: 40,
                  height: 40,
                  borderRadius: 40 / 2,
                  alignItems: 'center',
                  justifyContent: 'center',
                  marginLeft: width / 40 + 30,
                }}>
                <Image
                  source={require('./../../assets/trash.png')}
                  style={{width: 30, height: 30}}
                />
              </View>
            </TouchableOpacity>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemCart;
