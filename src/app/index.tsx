import { StatusBar } from 'expo-status-bar';
import { FlatList, StyleSheet, View } from 'react-native';
import DayListItem from '@components/core/DayListItem';


export default function HomePage() {


  const days = [...Array(31)].map((item, index) => index + 1)

  return (
    <View style={styles.container}>
      <FlatList
        contentContainerStyle={styles.listContainer}
        columnWrapperStyle={styles.listColumn}
        data={days}
        numColumns={2}
        renderItem={({ item }) => <DayListItem day={item} />}
      />
      <StatusBar style="auto" />
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#fff',
  },
  box: {
    flex: 1,
    aspectRatio: 1,
    backgroundColor: 'gold',
    // borderWidth: StyleSheet.hairlineWidth,
    borderWidth: 10,
    borderColor: 'black',
    borderRadius: 20,
    justifyContent: 'center',
    alignItems: 'center',
  },
  text: {
    color: 'black'
    , fontSize: 20,
  },
  listContainer: {
    // backgroundColor: 'red',
    rowGap: 20,
    columnGap: 20,
    padding: 10
  },
  listColumn: {
    columnGap: 20
  }
});
