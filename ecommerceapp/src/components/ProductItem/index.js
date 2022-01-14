import React from 'react'
import { Image,View,Text} from 'react-native'
import FontAwesome from 'react-native-vector-icons/FontAwesome';
import styles from './styles';


const ProductItem = (props) => {
    const item =props.item;
    return(
        <View style = {styles.root}>
        <Image style={styles.image} source={{ uri: item.image }} />
        <View style={styles.rightContainer}>
            <Text style={styles.title} numberOfLines={2}> {item.title} </Text>
            {/* Ratings */}

            <View style={styles.ratingContainer}>
               { [0,0,0,0,0].map((el,i) =>
               <FontAwesome 
               key={'${item.id}- ${i}'}
                style={styles.star} 
                name={i< Math.floor (item.avgRating) ? 'star' : 'star-o'} 
                size={18} 
                color={'#e47911'}
                />)
                }

                <Text>{item.ratings}</Text>

            </View>
            <Text style={styles.price}>from {item.price}
           { item.oldPrice && (
                <Text style={styles.oldPrice}> Rs. {item.oldPrice} </Text> 
                )}
            </Text>
        </View>
    </View>
    )

}

export default ProductItem;

