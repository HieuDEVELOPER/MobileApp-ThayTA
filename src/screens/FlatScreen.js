import React from 'react';
import {FlatList, Image, Text, View} from 'react-native';
import BaseBtnOne from '../components/BaseBtn/BaseBtnOne';
import BaseBtnTwo from '../components/BaseBtn/BaseBtnTwo';
import Friends from '../data/Friends';
const FlatListScreen = () => {
  const renderItem = ({item}) => {
    return (
      <View
        style={[
          {width: '100%', flexDirection: 'row', left: 15, marginTop: 15},
        ]}>
        <Image
          style={[{width: 80, height: 80, borderRadius: 50}]}
          source={item.img}
        />

        <Text
          style={{
            fontSize: 20,
            fontWeight: '600',
            color: 'black',
            marginLeft: 10,
            width: 250,
          }}>
          {item.name}
        </Text>
        <Text style={{justifyContent: 'flex-start', marginTop: 5}}>
          {item.time}
        </Text>

        <View
          style={[
            {
              flexDirection: 'row',
              position: 'absolute',
              marginTop: 30,
              left: 90,
            },
          ]}>
          <BaseBtnOne />
          <BaseBtnTwo />
        </View>
      </View>
    );
  };

  return (
    <FlatList
      data={Friends}
      renderItem={renderItem}
      keyExtractor={item => item.name}
      contentContainerStyle={[
        {
          //   flexGrow: 1,
          //   justifyContent: 'center',
          //  alignSelf: 'center'
        },
      ]}
      ListHeaderComponent={() =>
        !this.Friends.length ? (
          <Text
            style={{
              textAlign: 'center',
              marginTop: '80%',
              fontSize: 20,
              color: 'red',
            }}>
            Không có dữ liệu!
          </Text>
        ) : null
      }
    />
  );
};
export default FlatListScreen;
