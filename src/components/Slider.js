import { View, Text,FlatList, Animated } from 'react-native'
import React, {useRef,useState} from 'react'
import Images from '../contants/Images'
import General from '../contants/General'
import Slideitem from './Slideitem'
import Pagination from './Pagination'



const Slider = () => {
    const [ index,setIndex] = useState(0);
    const scrollx = useRef( new Animated.Value(0)).current
    const handleOneScroll = event => {
        Animated.event([
            {
                nativeEvent: {
                    contentOffset:{
                        x:scrollx,

                    },
                },
            },
        ],
        {
            useNativeDriver:false,
        }
        )(event);

    };
     const handleOnViewableItemsChanged = useRef(({viewableItems}) => {
       setIndex(viewableItems[0].index)
     }).current;
  return (
    <View>
      <FlatList data={General.SLIDING_CONTENTS}
      renderItem={({item}) => <Slideitem/>}
      horizontal
      pagingEnabled
      snapToAlignment='center'
      showsHorizontalScrollIndicator={false}
      onScroll={handleOneScroll}
      onViewableItemsChanged = {handleOnViewableItemsChanged}
     
      />
     <Pagination data = {General.SLIDING_CONTENTS} scrollx={scrollx} />
    </View>
  )
}


export default Slider;