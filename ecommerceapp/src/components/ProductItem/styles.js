import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
    root:{
        flexDirection: 'row',
        margin: 10,
        borderWidth: 1,
        borderColor:'#cef2d8',
        borderRaduis: 10,
        backgroundColor: '#ffffff',
        marginVertical:5,
         },
    image:{ 
        flex: 2,
        height: 150,
        resizeMode: 'contain',
    },
    rightContainer:{
        padding: 10,
        flex: 3,
    },
    title:{
        fontSize:18, 
    },
    price: {
        fontSize:18,
        fontWeight: 'bold',
    },
    oldPrice:{
        fontSize:12,
        fontWeight:'normal',
        textDecorationLine:'line-through',
    },
    ratingContainer:{
        flexDirection: 'row',
        alignItems: 'center',
        marginVertical: 5,
    },
    star:{
        margin:2,
    }
});

export default styles;