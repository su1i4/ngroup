import {useState, useRef} from 'react';
import {
  View,
  Text,
  StyleSheet,
  ScrollView,
  TouchableOpacity,
  Animated,
  Easing,
} from 'react-native';
import Background from '../../assets/svg/Background';
import Bloks from '../../assets/icons/Blocks';

export const DetailCompanies = () => {
  const [type, setType] = useState<boolean>(false);

  const rotateAnim = useRef(new Animated.Value(0)).current;

  const handlePress = () => {
    setType(prev => !prev);
    Animated.timing(rotateAnim, {
      toValue: type ? 0 : 1,
      duration: 300,
      easing: Easing.linear,
      useNativeDriver: true,
    }).start();
  };

  const spin = rotateAnim.interpolate({
    inputRange: [0, 1],
    outputRange: ['0deg', '180deg'],
  });

  return (
    <View style={styles.Main}>
      <View style={styles.Background}>
        <Background />
      </View>
      <ScrollView style={styles.Content}>
        <View
          style={{
            position: 'relative',
            marginLeft: 5,
            paddingBottom: 30,
            display: 'flex',
            flexDirection: 'row',
            justifyContent: 'space-between',
            alignItems: 'flex-start',
          }}>
          <Text style={[styles.logo, {color: '#e82721'}]}>
            N
            <Text style={[styles.logo, {color: '#FFFFFF', fontWeight: '700'}]}>
              GROUP
            </Text>
          </Text>
          <Text
            style={[
              styles.logo,
              {color: '#e82721', position: 'absolute', top: 10, left: -5},
            ]}>
            N
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '400',
              color: '#FFFFFF',
              position: 'absolute',
              top: 20,
              left: 15,
            }}>
            Строительная компания
          </Text>
          <TouchableOpacity
            style={{paddingTop: 10, marginRight: 5}}
            onPress={handlePress}>
            <Animated.View style={{transform: [{rotate: spin}]}}>
              <Bloks />
            </Animated.View>
          </TouchableOpacity>
        </View>
      </ScrollView>
    </View>
  );
};

export const styles = StyleSheet.create({
  Main: {
    flex: 1,
    backgroundColor: '#212436',
  },
  Background: {
    position: 'absolute',
    width: '100%',
    height: '100%',
  },
  Content: {
    flex: 1,
    padding: 20,
  },
  Row: {
    flexDirection: 'row',
    flexWrap: 'wrap',
    justifyContent: 'space-between',
    marginBottom: 50
  },
  CardWrapper: {
    width: '48%',
    marginBottom: 20,
  },
  logo: {fontSize: 20, fontWeight: '900'},
});
