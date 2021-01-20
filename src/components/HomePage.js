import React, {useState} from 'react';
import {useQuery} from '@apollo/client';
import get from 'lodash.get';
import {View, Text, TextInput, FlatList} from 'react-native';
import {Picker} from '@react-native-picker/picker';

import {GET_COUNTRIES} from '../queries';
import ItemView from './ItemView';

import styles from '../styles';

const HomePage = () => {
  const [searchText, setSearchText] = useState('');
  const [sortField, setSortField] = useState('name');
  const [sortBy, setSortBy] = useState('asc');

  const {error, data, refetch} = useQuery(GET_COUNTRIES, {
    variables: {order: `${sortField}_${sortBy}`, searchText},
  });

  if (error) {
    return <Text>Error, while loading the data</Text>;
  }

  return (
    <View style={styles.container}>
      <TextInput
        style={styles.textInput}
        placeholder={'Search'}
        onChangeText={(val) => setSearchText(val)}
        onEndEditing={() => {
          console.log('Calling this');
          refetch();
        }}
        value={searchText}
      />
      <View style={[styles.row, styles.spaceBetween]}>
        <Picker
          selectedValue={sortField}
          style={styles.sortField}
          onValueChange={(itemValue, itemIndex) => {
            setSortField(itemValue);
            refetch();
          }}>
          <Picker.Item label="Name" value="name" />
          <Picker.Item label="Population" value="population" />
          <Picker.Item label="area" value="area" />
        </Picker>
        <Picker
          selectedValue={sortBy}
          style={styles.sortByField}
          onValueChange={(itemValue, itemIndex) => {
            setSortBy(itemValue);
            refetch();
          }}>
          <Picker.Item label="Asc" value="asc" />
          <Picker.Item label="Desc" value="desc" />
        </Picker>
      </View>
      <FlatList
        data={get(data, 'Country', [])}
        ListEmptyComponent={() => {
          return <Text>Loading...</Text>;
        }}
        renderItem={ItemView}
        keyExtractor={(item, index) => `${index}_${item.area}`}
      />
    </View>
  );
};

export default HomePage;
