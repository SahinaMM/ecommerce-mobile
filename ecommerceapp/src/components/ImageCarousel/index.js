import React, { useState } from 'react';
import {View, 
  Text, 
  FlatList, 
  StyleSheet, 
  useWindowDimensions} 
  from 'react-native';
import styles from '../../screens/ProductScreen/styles';

const ImageCarousel = ({images}) => {
  const[activeIndex, setActiveIndex] = useState (0)
  const windowWidth = useWindowDimensions().width;
  return (
    <View style={styles.root}>
      <FlatList
        data={images}
        renderItem={({item}) => {
          <Image style={[styles.image, {width: windowWidth - 40}]} 
          source={{uri: item}} />;
        }}
        horizontal
        showsHorizontalScrollIndicator={false}
        snapToInterval={windowWidth - 20}
        snapToAlignment={'center'}
        decelerationRate={'fast'}
        viewabilityConfig={{
          viewAreaCoveragePercentThreshold: 50,
        }}
        onViewableItemsChanged={({viewableItems}) => {
          console.log(viewableItems)
        }}
      />
      <View styles={newstyles.dots}>

      </View>
      {images.map((image,index) => (
        <View style={[newstyles.dot, {
          backgroundColor:index == activeIndex ? '#c9c9c9' : '#ededed' 
        }
       ]}
         />
      )
      )}
    </View>
  );
};
const newstyles= StyleSheet.create({
  root:{

  },
  image:{
    margin: 10,
    height: 250,
    resizeMode: 'contain',
  },
  dots:{
    flexDirection:'row',
    justifyContent: 'center'

  },
  dot:{
    width: 10,
    height:10,
    borderRadius:25,
    borderWidth:1,
    backgroundColor:'#ededed',
    borderColor:'#c9c9c9',
    margin: 5
  }
})

export default ImageCarousel;