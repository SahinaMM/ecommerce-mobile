import React from 'react';
import {View, StyleSheet, FlatList, Image, Text} from 'react-native';
import CartProductItem from '../../data/cart';

import products from '../../data/cart';

const ShoppingCartScreen = ()=> {

    const totalPrice = products.reduce((summedPrice, products) => (
        summedPrice + product.item.price * product.quantity),
         0);
    return(
        <View style = {styles.page}>
            <View>
                <Text style={{fontSize:18, fontWeight: 'bold'}}> 
                    Subtotal ({products.length} items): {' '}
                <Text style={{color: '#e47911'}}> {totalPrice.toFixed(2)} </Text>
                </Text>
            </View>


            {/* Render product component */}
           
            <FlatList
            data={products}
           renderItem={({item}) => <ProductItem item ={item.item} />}
           //* Render quantity selector*/
           showsVerticalScrollIndicator={false}
           />
    
            </View>
    );
    };
    const styles = StyleSheet.create({
        page: {
            padding:10,
        },
    });

export default ShoppingCartScreen;