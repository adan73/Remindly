import React, { useRef, useState } from 'react';
import {
  View,
  Text,
  StyleSheet,
  Animated,
  TouchableOpacity,
  Dimensions,
  ScrollView, // Import ScrollView for scrollable content
} from 'react-native';

const SCREEN_HEIGHT = Dimensions.get('window').height;
const BOX_HEIGHT = 300;
const MAX_HEIGHT = SCREEN_HEIGHT * 0.8; 
const MIN_HEIGHT = 300; 
const boxesNumber = 4; // Number of boxes to display

const Home: React.FC = () => {
  const [boxHeight, setBoxHeight] = useState(BOX_HEIGHT); 
  const [icon, setIcon] = useState('^'); 
  const heightAnim = useRef(new Animated.Value(BOX_HEIGHT)).current; 

  // Function to toggle height of the slide box
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

  // Function to render boxes dynamically based on boxesNumber
  const renderBoxes = () => {
    return Array.from({ length: boxesNumber }, (_, index) => (
      <View key={index} style={styles.box}>
        <Text style={styles.boxText}>Box {index + 1}</Text>
      </View>
    ));
  };

  return (
    <View style={styles.container}>
      <Text style={styles.title}>Home Page</Text>

      {/* Animated sliding box */}
      <Animated.View
        style={[
          styles.slideUpBox,
          {
            height: heightAnim, 
          },
        ]}
      >
        <TouchableOpacity onPress={toggleHeight}>
          <View style={styles.handle} />
        </TouchableOpacity>
        <Text style={styles.reminderText}>All Remainders</Text>
        {/* Render boxes dynamically inside the slide box */}
        <ScrollView contentContainerStyle={styles.boxesContainer}>
          {renderBoxes()}
        </ScrollView>
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
    backgroundColor: '#fff',
    borderTopLeftRadius: 20,
    borderTopRightRadius: 20,
    borderWidth: 1,  // Add border width
    borderColor: '#D3D3D3',  // Set border color to gray (light gray)
    padding: 20,
    elevation: 0,
    justifyContent: 'center',
    alignItems: 'center',
    overflow: 'hidden', // Prevents overflow of boxes outside the slide box
  },
  handle: {
    width: 50,
    height: 5,
    backgroundColor: '#DF6316',
    borderRadius: 2.5,
    alignSelf: 'center',
    left:0,
    marginVertical: 10,
  },
  boxesContainer: {
    marginTop: 10, 
    width: 360, 
    alignItems: 'center', 
  },
  box: {
    width: 380,
    height: 50,
    backgroundColor: '#fff',
    borderWidth: 1, 
    borderColor: '#D3D3D3', 
    margin: 10,
    justifyContent: 'center',
    alignItems: 'center',
    borderRadius: 10,
  },
  boxText: {
    color: '#000',
    fontWeight: 'bold',
  },
  reminderText: {
    fontSize: 22,
    alignItems: 'flex-end',
    left:-99,
    position:'relative',
    color: '#DF6316',
  }
});

export default Home;
