import {StyleSheet, Text, View, Image, TouchableOpacity} from 'react-native';
import Geo from '../../../../assets/svg/Geo';
import {useNavigation} from '@react-navigation/native';

export const CompanyCard = ({item}: any) => {
  const navigation: any = useNavigation();
  return (
    <TouchableOpacity onPress={() => navigation.navigate('DetailCompanies')} style={styles.card}>
      <Image style={styles.img} source={item.imagePath} />
      <View style={styles.footer}>
        <Text style={styles.name}>{item.name}</Text>
        <View style={styles.iconWrap}>
          <Geo />
          <Text style={styles.address}>{item.address}</Text>
        </View>
      </View>
    </TouchableOpacity>
  );
};

export const styles = StyleSheet.create({
  card: {
    display: 'flex',
    flexDirection: 'column',
    width: '100%',
    borderRadius: 20,
    overflow: 'hidden',
    shadowColor: 'black',
    shadowOffset: {
      width: 0,
      height: 10,
    },
    shadowOpacity: 0.1,
    shadowRadius: 6,
    elevation: 14,
  },
  img: {
    width: '100%',
    height: 170,
  },
  footer: {
    display: 'flex',
    flexDirection: 'column',
    paddingHorizontal: 15,
    paddingVertical: 10,
    backgroundColor: '#2A3547',
    height: 60,
  },
  name: {
    color: '#FFFFFF',
  },
  address: {
    color: '#FFFFFF',
    fontSize: 8,
  },
  iconWrap: {
    display: 'flex',
    flexDirection: 'row',
    gap: 5,
    marginTop: 5,
  },
});
