import React from 'react'
import {View, Text, ScrollView} from 'react-native'

export const DetailScreen = ({route}) => {
  const { data } = route.params
  return (
   <ScrollView>
    <View>
      <ScrollView horizontal pagingEnabled>
        <Text>
          {data.content}
        </Text>     
      </ScrollView>      
    </View>
   </ScrollView>
  )
}

