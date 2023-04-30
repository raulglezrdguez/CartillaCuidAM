/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {
  Image,
  ScrollView,
  View,
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Linking,
} from 'react-native';
import {Headline, Text, TouchableRipple, useTheme} from 'react-native-paper';

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

const Ultima = () => {
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
      await AsyncStorage.setItem('@sUltima', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sUltima');
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
        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('Anexo5')}>
          <Text>{'👈 Anexo 5'}</Text>
        </TouchableRipple>
        <Headline> </Headline>

        <Image source={fortam} style={{width: min}} resizeMode="contain" />
        <Text style={styles.bold}>Unidos por un sueño</Text>
        <Text> </Text>
        <Text>https://www.facebook.com/fortamP/</Text>
        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => {
            Linking.openURL('https://www.facebook.com/fortamP/').catch(err =>
              console.error('Error al visitar link', err),
            );
          }}>
          <Text>{'Visitar link 👆'}</Text>
        </TouchableRipple>
        <Text> </Text>
        <Text>https://www.youtube.com/@eduardoalfredotrianaalvarez13 </Text>
        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => {
            Linking.openURL(
              'https://www.youtube.com/@eduardoalfredotrianaalvarez13 ',
            ).catch(err => console.error('Error al visitar link', err));
          }}>
          <Text>{'Visitar link 👆'}</Text>
        </TouchableRipple>
        <View style={styles.row}>
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

        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default Ultima;
