import React from 'react';
import {View, Text} from 'react-native';
import get from 'lodash.get';
import {SvgCssUri} from 'react-native-svg';

import styles from '../styles';

const ItemView = ({item}) => {
  return (
    <View style={[styles.row, styles.item]}>
      <SvgCssUri
        width={30}
        height={30}
        uri={get(item, 'flag.svgFile', 'https://restcountries.eu/data/afg.svg')}
      />
      <View style={[styles.fullWidth, styles.spaceLeft]}>
        <Text style={styles.fullWidth} ellipsizeMode="tail" numberOfLines={1}>
          {item.name}, {item.capital}
        </Text>
        <Text>{get(item, 'subregion.name')}</Text>
      </View>
      <View>
        <Text style={styles.alignRight}>Area: {item.area}</Text>
        <Text style={styles.alignRight}>Pop: {item.population}</Text>
      </View>
    </View>
  );
};

export default ItemView;
