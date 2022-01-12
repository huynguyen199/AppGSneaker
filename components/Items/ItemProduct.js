import React from 'react';
import {View, Text, Image, Dimensions, TouchableOpacity} from 'react-native';
import * as actions from '../../redux/action/cartAction';
import colors from '../../Common/color';

const {width, height} = Dimensions.get('window');

const ItemProduct = ({item, dispatch, cart}) => {
  return (
    <View
      style={{
        flex: 1,
        alignItems: 'center',
      }}>
      <View>
        <View
          style={{
            width: width - 80,
            height: 390,
            borderRadius: 30,
            backgroundColor: item.color,
            alignItems: 'center',
            alignContent: 'center',
            marginHorizontal: 10,
          }}>
          <Image
            style={{
              width: 300,
              height: 300,
              resizeMode: 'stretch',
              marginTop: 40,
              transform: [{rotate: '-25deg'}],
            }}
            source={{
              uri: item.image,
            }}
          />
        </View>
        <View
          style={{
            margin: 10,
            width: width - 80,
          }}>
          <Text
            style={{
              fontSize: 23,
              marginVertical: 10,
              fontFamily: 'Rubik-Black',
              color: 'black',
            }}>
            {item.name}
          </Text>
          <Text
            style={{
              lineHeight: 30,
              fontFamily: 'Rubik-Black',
            }}>
            {item.description}
          </Text>
          <View
            style={{
              flex: 1,
              flexDirection: 'row',
              justifyContent: 'space-between',
              alignItems: 'center',
            }}>
            <View
              style={{
                alignItems: 'center',
                alignContent: 'center',
              }}>
              <Text
                style={{
                  fontSize: 18,
                  color: 'black',
                  fontFamily: 'Rubik-Black',
                }}>
                {'$' + item.price}
              </Text>
            </View>
            <View style={{}}>
              {!cart.find(p => item.id == p.id) ? (
                <TouchableOpacity
                  onPress={() => {
                    console.log('hello');
                    dispatch(actions.addToCart({...item, amount: 1}));
                  }}>
                  <View
                    style={{
                      width: 150,
                      alignItems: 'center',
                      alignContent: 'center',
                      backgroundColor: 'orange',
                      borderRadius: 30,
                      padding: 10,
                    }}>
                    <Text
                      style={{
                        fontSize: 18,
                        color: 'black',
                        fontFamily: 'Rubik-Black',
                      }}>
                      ADD TO CART
                    </Text>
                  </View>
                </TouchableOpacity>
              ) : (
                <View
                  style={{
                    width: 60,
                    height: 60,
                    borderRadius: 40,
                    backgroundColor: colors.Yellow,
                  }}>
                  <Image
                    style={{
                      width: 60,
                      height: 60,
                      resizeMode: 'center',
                      zIndex: 1,
                    }}
                    source={require('./../../assets/check.png')}
                  />
                </View>
              )}
            </View>
          </View>
        </View>
      </View>
    </View>
  );
};

export default ItemProduct;
