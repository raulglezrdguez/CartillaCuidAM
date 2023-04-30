/* eslint-disable react-native/no-inline-styles */
import React, {useEffect, useRef} from 'react';
import {
  ScrollView,
  View,
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {Headline, Text, TouchableRipple, useTheme} from 'react-native-paper';

import {usePreferencesState} from '../context/preferences';
import {styles} from '../context/styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Anexo2 = () => {
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
      await AsyncStorage.setItem('@sAnexo2', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sAnexo2');
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
          onPress={() => navigate('Anexo1')}>
          <Text>{'👈 Anexo 1'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>Anexo 2</Headline>
        <Headline style={styles.bold}>Índice de Barthel</Headline>
        <Text>La información se obtiene del cuidador principal</Text>
        <Headline> </Headline>
        <Text style={styles.bold}>Actividades básicas de la vida diaria</Text>
        <Text> </Text>

        <View style={[styles.row, styles.tr, {borderColor: colors.primary}]}>
          <Text style={[{width: '25%'}]}>Parámetro</Text>
          <Text
            style={[styles.td, {width: '50%', borderColor: colors.primary}]}>
            Situación del paciente
          </Text>
          <Text
            style={[styles.td, {width: '25%', borderColor: colors.primary}]}>
            Puntuación
          </Text>
        </View>

        <View style={[styles.row, styles.tr, {borderColor: colors.primary}]}>
          <Text style={[{width: '75%'}]}>Total</Text>
          <Text
            style={[styles.td, {width: '25%', borderColor: colors.primary}]}>
            {' '}
          </Text>
        </View>
        <View style={[styles.row, {flexWrap: 'nowrap'}]}>
          <View
            style={[
              styles.td,
              {
                width: '25%',
                height: '100%',
                borderColor: colors.primary,
              },
            ]}>
            <Text
              style={{
                paddingHorizontal: 5,
                paddingVertical: 10,
              }}>
              Comer
            </Text>
          </View>

          <View
            style={[
              styles.col,
              {
                width: '75%',
              },
            ]}>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Totalmente independiente
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                10
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Necesita ayuda para cortar carne, el pan, etc.
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                5
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Dependiente
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                0
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.row, {flexWrap: 'nowrap'}]}>
          <View
            style={[
              styles.td,
              {
                width: '25%',
                height: '100%',
                borderColor: colors.primary,
                borderTopWidth: 1,
              },
            ]}>
            <Text
              style={{
                paddingHorizontal: 5,
                paddingVertical: 10,
              }}>
              Lavarse
            </Text>
          </View>

          <View
            style={[
              styles.col,
              {
                width: '75%',
              },
            ]}>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                {' '}
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                {' '}
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Independiente: entra y sale solo del baño
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                5
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Dependiente
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                0
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.row, {flexWrap: 'nowrap'}]}>
          <View
            style={[
              styles.td,
              {
                width: '25%',
                height: '100%',
                borderColor: colors.primary,
                borderTopWidth: 1,
              },
            ]}>
            <Text
              style={{
                paddingHorizontal: 5,
                paddingVertical: 10,
              }}>
              Vestirse
            </Text>
          </View>

          <View
            style={[
              styles.col,
              {
                width: '75%',
              },
            ]}>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Independiente: capaz de ponerse y de quitarse la ropa,
                abotonarse, atarse los zapatos
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                10
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Necesita ayuda
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                5
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Dependiente
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                0
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.row, {flexWrap: 'nowrap'}]}>
          <View
            style={[
              styles.td,
              {
                width: '25%',
                height: '100%',
                borderColor: colors.primary,
                borderTopWidth: 1,
              },
            ]}>
            <Text
              style={{
                paddingHorizontal: 5,
                paddingVertical: 10,
              }}>
              Arreglarse
            </Text>
          </View>

          <View
            style={[
              styles.col,
              {
                width: '75%',
              },
            ]}>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                {' '}
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                {' '}
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Independiente para lavarse la cara, las manos, peinarse,
                afeitarse, maquillarse, etc.
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                5
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Dependiente
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                0
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.row, {flexWrap: 'nowrap'}]}>
          <View
            style={[
              styles.td,
              {
                width: '25%',
                height: '100%',
                borderColor: colors.primary,
                borderTopWidth: 1,
              },
            ]}>
            <Text
              style={{
                paddingHorizontal: 5,
                paddingVertical: 10,
              }}>
              Deposiciones (valórese la semana previa)
            </Text>
          </View>

          <View
            style={[
              styles.col,
              {
                width: '75%',
              },
            ]}>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Continencia normal
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                10
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Ocasionalmente algún episodio de incontinencia, o necesita
                ayuda para administrarse supositorios o lavativas
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                5
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Incontinencia
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                0
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.row, {flexWrap: 'nowrap'}]}>
          <View
            style={[
              styles.td,
              {
                width: '25%',
                height: '100%',
                borderColor: colors.primary,
                borderTopWidth: 1,
              },
            ]}>
            <Text
              style={{
                paddingHorizontal: 5,
                paddingVertical: 10,
              }}>
              Micción (valórese la semana previa)
            </Text>
          </View>

          <View
            style={[
              styles.col,
              {
                width: '75%',
              },
            ]}>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Continencia normal, o es capaz de cuidarse de la sonda si
                tiene una puesta
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                10
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Un episodio diario como máximo de incontinencia, o necesita
                ayuda para cuidar de la sonda
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                5
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Incontinencia
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                0
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.row, {flexWrap: 'nowrap'}]}>
          <View
            style={[
              styles.td,
              {
                width: '25%',
                height: '100%',
                borderColor: colors.primary,
                borderTopWidth: 1,
              },
            ]}>
            <Text
              style={{
                paddingHorizontal: 5,
                paddingVertical: 10,
              }}>
              Usar el retrete
            </Text>
          </View>

          <View
            style={[
              styles.col,
              {
                width: '75%',
              },
            ]}>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Independiente para ir al cuarto de aseo, quitarse y ponerse la
                ropa...
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                10
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Necesita ayuda para ir al retrete, pero se limpia solo
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                5
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Dependiente
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                0
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.row, {flexWrap: 'nowrap'}]}>
          <View
            style={[
              styles.td,
              {
                width: '25%',
                height: '100%',
                borderColor: colors.primary,
                borderTopWidth: 1,
              },
            ]}>
            <Text
              style={{
                paddingHorizontal: 5,
                paddingVertical: 10,
              }}>
              Trasladarse
            </Text>
          </View>

          <View
            style={[
              styles.col,
              {
                width: '75%',
              },
            ]}>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Independiente para ir del sillón a la cama
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                15
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Mínima ayuda física o supervisión para hacerlo
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                10
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Necesita gran ayuda, pero es capaz de mantenerse sentado solo
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                5
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Dependiente
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                0
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.row, {flexWrap: 'nowrap'}]}>
          <View
            style={[
              styles.td,
              {
                width: '25%',
                height: '100%',
                borderColor: colors.primary,
                borderTopWidth: 1,
              },
            ]}>
            <Text
              style={{
                paddingHorizontal: 5,
                paddingVertical: 10,
              }}>
              Deambular
            </Text>
          </View>
          <View
            style={[
              styles.col,
              {
                width: '75%',
              },
            ]}>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Independiente, camina solo 50 metros
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                15
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Necesita ayuda física o supervisión para caminar 50 metros
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                10
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Independiente en silla de ruedas sin ayuda
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                5
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Dependiente
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                0
              </Text>
            </View>
          </View>
        </View>
        <View style={[styles.row, {flexWrap: 'nowrap'}]}>
          <View
            style={[
              styles.td,
              {
                width: '25%',
                height: '100%',
                borderBottomWidth: 1,
                borderTopWidth: 1,
                borderColor: colors.primary,
              },
            ]}>
            <Text
              style={{
                paddingHorizontal: 5,
                paddingVertical: 10,
              }}>
              Escalones
            </Text>
          </View>
          <View
            style={[
              styles.col,
              {
                width: '75%',
              },
            ]}>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Independiente para bajar y subir escaleras
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                10
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Necesita ayuda física o supervisión para hacerlo
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                5
              </Text>
            </View>
            <View
              style={[
                styles.row,
                styles.tr,
                {
                  width: '100%',
                  flexWrap: 'nowrap',
                  borderColor: colors.primary,
                },
              ]}>
              <Text style={[{width: '67%', borderColor: colors.primary}]}>
                - Dependiente
              </Text>
              <Text
                style={[
                  styles.td,
                  {
                    width: '33%',
                    borderColor: colors.primary,
                    textAlign: 'center',
                    height: '100%',
                  },
                ]}>
                0
              </Text>
            </View>
          </View>
        </View>

        <Text> </Text>
        <Text>Máxima puntuación: 100 puntos (90 si va en silla de ruedas)</Text>
        <Text> </Text>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '40%', borderColor: colors.primary}]}>
            Resultado
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '60%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            Grado de independencia
          </Text>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '40%', borderColor: colors.primary}]}>
            &lt; 20
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '60%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            Total
          </Text>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '40%', borderColor: colors.primary}]}>
            20 - 35
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '60%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            Grave
          </Text>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '40%', borderColor: colors.primary}]}>
            40 - 55
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '60%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            Moderado
          </Text>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '40%', borderColor: colors.primary}]}>
            &ge; 60
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '60%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            Leve
          </Text>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '40%', borderColor: colors.primary}]}>100</Text>
          <Text
            style={[
              styles.td,
              {
                width: '60%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            Independiente
          </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('Anexo3')}>
          <Text>{'Anexo 3 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default Anexo2;
