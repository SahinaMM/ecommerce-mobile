import React, {useState} from 'react';
import {View, Text, ScrollView, Image} from 'react-native';
import styles from './styles';
import QuantitySelector from '../../components/QuantitySelector'
import product from '../../data/product'
import Button from '../../components/Button';

import ImageCarousel from '../../components/ImageCarousel';

const ProductScreen = () => {
    const {quantity, setQuantity} = useState(1);

    return(
        <ScrollView style={styles.root}>
            <Text style={styles.title}>{product.title}</Text>

        {/* image carousel */}
        <ImageCarousel images={product.images} />

        {/* price */}
        <Text style={styles.price}>from {product.price}
           { product.oldPrice && (
                <Text style={styles.oldPrice}> Rs. {product.oldPrice} </Text> 
                )}
            </Text>

        {/* description */}
        <Text style={styles.description} > {product.description} </Text>

        {/* quantity selector */}
        <QuantitySelector quantity={quantity} setQuantity={setQuantity} />
        

        {/* buttons */}
        <Button text = {'Add to cart'} 
        onpress={()  => {
            console.warn('Add to cart')
        }} 
        />
        <Button text = {'Buy Now'} 
        onpress={()  => {
            console.warn('Buy Now')
        }} 
        />
    </ScrollView>

        

    );
};

export default ProductScreen;