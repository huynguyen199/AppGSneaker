import React, {useEffect, useState} from 'react';
import {View, Text, Image, StyleSheet} from 'react-native';
import {Header} from 'react-native-elements';

const CircleHeader = props => {
  const cart = props.cart;
  console.log('🚀 ~ file: CircleHeader.js ~ line 7 ~ cart', cart);
  const [totalPrice, setTotalPrice] = useState(0);
  useEffect(() => {
    let total = 0;
    for (let i = 0; i < cart.length; i++) {
      const item = cart[i];
      total += item.price * item.amount;
    }
    setTotalPrice(total.toFixed(2));
  }, [cart]);

  return (
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
              {props.title}
            </Text>
          </View>
        )}
        rightComponent={() => (
          <View style={{width: 150}}>
            <Image
              style={{width: 60, height: 60, resizeMode: 'center', zIndex: 1}}
              source={null}
            />
            <Text
              style={{
                fontSize: 25,
                color: 'black',
                fontFamily: 'Rubik-Black',
                alignSelf: 'flex-end',
              }}>
              {'$' + totalPrice}
            </Text>
          </View>
        )}
        containerStyle={{
          backgroundColor: 'transparent',
          justifyContent: 'space-around',
        }}
        // centerComponent={{text: 'Header'}}
      />
      {props.children}
    </View>
  );
};

const styles = StyleSheet.create({
  circle: {
    width: 300,
    height: 300,
    borderRadius: 300 / 2,
    backgroundColor: 'white',
    position: 'absolute',
    marginLeft: -170,
    marginTop: -70,
    zIndex: 0,
  },
});
export default CircleHeader;
