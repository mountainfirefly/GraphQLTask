import {StyleSheet} from 'react-native';

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 24,
    backgroundColor: '#eaeaea',
  },
  row: {
    flexDirection: 'row',
    alignItems: 'center',
  },
  fullWidth: {
    flex: 1,
  },
  item: {
    paddingVertical: 10,
  },
  alignRight: {
    textAlign: 'right',
  },
  spaceBetween: {
    justifyContent: 'space-between',
  },
  textInput: {
    height: 40,
    borderColor: 'gray',
    borderWidth: 1,
  },
  sortField: {
    height: 50,
    width: 150,
  },
  sortByField: {
    height: 50,
    width: 100,
  },
  spaceLeft: {
    paddingLeft: 10,
  },
});

export default styles;
