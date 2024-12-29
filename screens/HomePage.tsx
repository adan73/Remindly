import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const BOX_HEIGHT = 300;
const MAX_HEIGHT = SCREEN_HEIGHT * 0.8; 
const MIN_HEIGHT = 300; 

const Home: React.FC = () => {
  const [boxHeight, setBoxHeight] = useState(BOX_HEIGHT); 
  const [icon, setIcon] = useState('^'); 
  const heightAnim = useRef(new Animated.Value(BOX_HEIGHT)).current; 

  const toggleHeight = () => {
    if (icon === '^') {
      const newHeight = boxHeight < MAX_HEIGHT ? boxHeight + 500 : MAX_HEIGHT;
      setBoxHeight(newHeight);
      setIcon('v');

      Animated.timing(heightAnim, {
        toValue: newHeight,
        duration: 300,
        useNativeDriver: false, 
      }).start();
    } else {
      const newHeight = boxHeight > MIN_HEIGHT ? boxHeight - 500 : MIN_HEIGHT;
      setBoxHeight(newHeight);
      setIcon('^');

      Animated.timing(heightAnim, {
        toValue: newHeight,
        duration: 300,
        useNativeDriver: false, 
      }).start();
    }
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>

      <Animated.View
        style={[
          styles.slideUpBox,
          {
            height: heightAnim, 
          },
        ]}
      >
        <TouchableOpacity onPress={toggleHeight} style={styles.iconContainer}>
        <View style={styles.handle} />
        </TouchableOpacity>

        <Text style={styles.slideUpText}>go up go down thing</Text>
      </Animated.View>
    </View>
  );
};

const styles = StyleSheet.create({
  container: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#F5F5F5',
  },
  title: {
    fontSize: 24,
    fontWeight: 'bold',
    marginBottom: 20,
  },
  slideUpBox: {
    position: 'absolute',  
    left: 0,
    right: 0,
    bottom: 0, 
    backgroundColor: '#FF9A5B',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    padding: 20,
    elevation: 0,
    justifyContent: 'center',
    alignItems: 'center',
  },
  slideUpText: {
    fontSize: 18,
    fontWeight: 'bold',
    textAlign: 'center',
    marginVertical: 0,
  },
  iconContainer: {
    position: 'absolute',
    top: 10,
    transform: [{ translateX: -20 }],
  },
  handle: {
    width: 50,
    height: 5,
    backgroundColor: '#fff',
    borderRadius: 2.5,
    alignSelf: 'center',
    left: '36%',
    marginVertical: 10,
  },
});

export default Home;
