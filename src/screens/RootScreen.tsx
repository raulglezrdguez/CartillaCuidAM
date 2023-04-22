/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {
  Image,
  ScrollView,
  View,
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {
  Headline,
  Subheading,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';

import {usePreferencesState} from '../context/preferences';
import {styles} from '../context/styles';

import AsyncStorage from '@react-native-async-storage/async-storage';
import {
  embajada,
  fortam,
  medicuba,
  minsap,
  mintss,
  suiza,
} from '../utils/images';

const RootScreen = () => {
  const {colors} = useTheme();
  const {height, width} = useWindowDimensions();
  const {navigate} = usePreferencesState();

  const scrollView = useRef<ScrollView>(null);

  let min = width;
  if (height < min) {
    min = height;
  }
  min = min / 2;

  const saveScrollPos = async (
    event: NativeSyntheticEvent<NativeScrollEvent>,
  ) => {
    const s = event.nativeEvent.contentOffset.y.toString();
    try {
      await AsyncStorage.setItem('@sInicio', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sInicio');
        if (s !== null && scrollView && scrollView.current) {
          scrollView.current.scrollTo({x: 0, y: parseFloat(s), animated: true});
        }
      } catch (e) {
        console.log(e);
      }
    };
    fetchScroll();
  }, []);

  return (
    <ScrollView
      ref={scrollView}
      onMomentumScrollEnd={saveScrollPos}
      contentContainerStyle={styles.scroll}>
      <View style={styles.container}>
        <Headline> </Headline>
        <Headline style={styles.bold}>
          Cartilla de la persona cuidadora
        </Headline>
        <Subheading style={styles.bold}>
          Asistentes sociales a domicilio y familiares
        </Subheading>

        <Headline> </Headline>
        <View style={styles.row}>
          <Image
            source={fortam}
            style={{width: min / 2, height: min / 2, margin: 5}}
            resizeMode="contain"
          />
          <Image
            source={medicuba}
            style={{width: min / 2, height: min / 2, margin: 5}}
            resizeMode="contain"
          />
          <Image
            source={suiza}
            style={{width: min / 2, height: min / 2, margin: 5}}
            resizeMode="contain"
          />
          <Image
            source={embajada}
            style={{width: min / 2, height: min / 2, margin: 5}}
            resizeMode="contain"
          />
          <Image
            source={minsap}
            style={{width: min / 2, height: min / 2, margin: 5}}
            resizeMode="contain"
          />
          <Image
            source={mintss}
            style={{width: min / 2, height: min / 2}}
            resizeMode="contain"
          />
        </View>
        <Headline> </Headline>
        <Text style={styles.bold}>
          Por un sistema de cuidados para adultos mayores dependientes
        </Text>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('Pensamientos')}>
          <Text>{'Pensamientos 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default RootScreen;
