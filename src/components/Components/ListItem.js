import { Pressable, Text, StyleSheet, View, Image } from 'react-native';
import images from '../../../assets/testimages/ImageIndex';
import { Surface } from 'react-native-paper';
import { memo } from 'react';

export const ListItem = memo(function ListItem({ item, overlay = false }) {
  const exp = new Date(item.expiration);
  const cur = new Date();
  const duration = parseInt((exp - cur) / 86400000);

  let bgStyle =
    item.itemstatus === 'Available' ? styles.item : styles.itemreserved;
  if (overlay) {
    bgStyle = styles.pendingdelete;
  }
  return (
    <Surface style={bgStyle} elevation={4}>
      {/* <Text>{item.itemstatus}</Text> */}
      {item.itemstatus != 'Available' ? (
        <View
          style={{
            position: 'absolute',
            top: 0,
            left: 0,
            right: 0,
            bottom: 0,
            justifyContent: 'center',
            alignItems: 'center',
            zIndex: 1,
          }}
        >
          <Image
            source={require('../../../assets/Reserved.png')}
            style={{ resizeMode: 'contain', height: 150, width: 150 }}
          />
        </View>
      ) : (
        ''
      )}
      <View style={styles.imgview}>
        <View>
          <Image
            source={require('../../../assets/testimages/0.png')}
            style={styles.underimg}
          />
          <Image source={images[item.img]} style={styles.img} />

          <Text style={duration > 3 ? styles.explong : styles.expshort}>
            {duration + 1} Days!
          </Text>
        </View>
      </View>
      <View style={styles.middlebox}>
        <View>
          <Text style={styles.title}>{item.name}</Text>
        </View>

        <View style={styles.descview}>
          <View>
            <Text style={styles.description}>
              {item.description.length > 55
                ? item.description.slice(0, 55) + '...'
                : item.description}
            </Text>
          </View>
          <View style={styles.loccatrow}>
            <Text style={styles.location}>{item.location}</Text>
            <Text style={styles.category}>{item.category} </Text>
          </View>
        </View>
      </View>

      <View style={styles.priceview}>
        <View>
          <Text style={styles.msrp}>
            MSRP {'\n'}${item.msrp}
          </Text>
        </View>

        <View>
          <Text style={styles.price}>
            Price{'\n'}
            {item.price}
          </Text>
        </View>
      </View>
    </Surface>
  );
});

const styles = StyleSheet.create({
  item: {
    flex: 1,
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 100,
    width: 360,
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    // alignItems: 'center',
    borderWidth: 2.5,
    borderRadius: 20,
    backgroundColor: '#fca503',
  },
  itemreserved: {
    flex: 1,
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 100,
    width: 360,
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#fc7f03',
    borderWidth: 2.5,
    borderRadius: 20,
  },
  pendingdelete: {
    flex: 1,
    padding: 5,
    marginVertical: 8,
    marginHorizontal: 16,
    height: 100,
    width: 360,
    flexDirection: 'row',
    // justifyContent: 'flex-end',
    alignItems: 'center',
    backgroundColor: '#93856c',
    borderWidth: 2.5,
    borderRadius: 20,
  },
  middlebox: { flex: 1 },
  imgview: {
    flex: 0.3,
    alignContent: 'center',
    alignSelf: 'center',
  },
  titleview: {
    flex: 0.8,
    // borderColor: 'black',
    // borderWidth: 1,
    alignContent: 'center',
  },
  descview: {
    flex: 1,
    alignContent: 'center',
  },
  priceview: {
    flex: 0.3,
    alignContent: 'center',

    paddingRight: 5,
  },

  img: {
    width: 50,
    height: 50,
    zIndex: 1,
  },
  underimg: {
    width: 50,
    height: 50,
    position: 'absolute',
    zIndex: 0,
  },
  explong: {
    textAlign: 'center',
    // flexBasis: 120,
    flexGrow: 1,

    textDecorationStyle: 'solid',
    fontWeight: 'bold',
    color: 'green',
  },
  expshort: {
    textAlign: 'center',
    // flexBasis: 120,
    flexGrow: 1,
    textDecorationStyle: 'solid',
    fontWeight: 'bold',
    color: 'red',
  },
  title: {
    textAlign: 'center',
    // flexBasis: 120,
    flexGrow: 1,
    fontWeight: 'bold',
    fontSize: 20,
    color: 'black',
  },
  description: {
    paddingLeft: 10,
    textAlign: 'left',
    // flexBasis: 120,
    flexGrow: 1,
    color: 'black',
  },
  location: {
    textAlign: 'left',
    justifyContent: 'flex-end',
    // flexBasis: 120,
    flexGrow: 0.3,
    fontWeight: 'bold',
    color: 'black',
  },
  category: {
    textAlign: 'right',
    justifyContent: 'flex-end',
    // flexBasis: 120,
    flexGrow: 0.3,
    fontWeight: 'bold',
    color: 'black',
  },
  // instance: {
  //   textAlign: 'auto',
  //   flexBasis: 120,
  //   flexGrow: 1,
  //   fontWeight: 'bold',
  // },
  msrp: {
    textAlign: 'right',
    fontWeight: '800',
    flexGrow: 1,
    textDecorationLine: 'line-through',
    textDecorationStyle: 'solid',
    color: 'red',
    margin: 4,
    marginRight: 0,
  },
  price: {
    textAlign: 'right',
    flexGrow: 1,
    fontWeight: '800',
    fontSize: 17,
    color: 'black',
    margin: 4,
    marginRight: 0,
  },
  loccatrow: {
    flex: 1,
    alignItems: 'flex-end',
    justifyContent: 'space-around',

    flexDirection: 'row',
  },
});

export default memo(ListItem);
// export default ListItem;
