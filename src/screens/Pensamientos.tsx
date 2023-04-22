/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {
  ScrollView,
  View,
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Linking,
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

const URL1 =
  'https://www.cepal.org/es/noticias/onu-mujeres-cepal-promueven-la-construccion-sistemas-integrales-cuidados-america-latina#:~:text=Los%20principios%20que%20propone%20el,la%20Solidaridad%20en%20el%20Financiamiento';
const URL2 =
  'http://www.cubadebate.cu/noticias/2022/01/20/diaz-canel-estamos-desafiados-a-innovar/';

const Pensamientos = () => {
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
      await AsyncStorage.setItem('@sPensamientos', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sPensamientos');
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
          onPress={() => navigate('Inicio')}>
          <Text>{'👈 Presentación'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>Pensamientos</Headline>
        <Headline> </Headline>
        <Subheading style={styles.bold}>
          Avanzar hacia una sociedad del cuidado implica un cambio de paradigma
          que coloque en el centro del cuidado de las personas, de quienes
          cuidan, el autocuidado y el cuidado del planeta.
        </Subheading>
        <Headline style={{alignSelf: 'flex-end'}}>Alicia Bárcena.</Headline>
        <Text style={styles.bold}>
          ONU Mujeres y CEPAL promueven la construcción de Sistemas Integrales
          de Cuidados en América Latina y el Caribe.
        </Text>
        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => {
            Linking.openURL(URL1).catch(err =>
              console.error('Error al visitar link', err),
            );
          }}>
          <Text>{'Visitar link 👆'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Subheading style={styles.bold}>
          «Nosotros estamos desafiados a innovar constantemente», expresó el
          jefe de Estado durante su amplia intervención que versó sobre
          prioridades a tener en cuenta para el trabajo del año 2022, y sobre
          las problemáticas que Cuba debe asumir hoy, entre las cuales mencionó
          … y la no menos desafiante dinámica demográfica que ya no es cosa del
          futuro sino un reto del presente.
        </Subheading>
        <Headline style={{alignSelf: 'flex-end'}}>Miguel Díaz-Canel.</Headline>
        <Text style={styles.bold}>
          Miguel Díaz-Canel Bermúdez. Videoconferencia con gobernadores e
          intendentes del país. 19/01/2022.
        </Text>
        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => {
            Linking.openURL(URL2).catch(err =>
              console.error('Error al visitar link', err),
            );
          }}>
          <Text>{'Visitar link 👆'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('Datos')}>
          <Text>{'Datos 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default Pensamientos;
