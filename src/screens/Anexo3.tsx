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

const Anexo3 = () => {
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
      await AsyncStorage.setItem('@sAnexo3', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sAnexo3');
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
          onPress={() => navigate('Anexo2')}>
          <Text>{'👈 Anexo 2'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>Anexo 3</Headline>
        <Headline style={styles.bold}>Escala de Lawton y Brody</Headline>
        <Headline> </Headline>
        <Text style={styles.bold}>
          Escala de actividades instrumentales de la vida diaria. (AIVD)
        </Text>

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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            ASPECTO A EVALUAR
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            Puntuación
          </Text>
        </View>
        <Text style={styles.bold}>CAPACIDAD PARA USAR EL TELÉFONO:</Text>
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Utiliza el teléfono por iniciativa propia{' '}
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Es capaz de marcar bien algunos números familiares
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Es capaz de contestar al teléfono, pero no de marcar
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - No es capaz de usar el teléfono
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            0
          </Text>
        </View>
        <Text style={styles.bold}>HACER COMPRAS:</Text>
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Realiza todas las compras necesarias independientemente
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Realiza independientemente pequeñas compras
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            0
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Necesita ir acompañado para hacer cualquier compra
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            0
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Totalmente incapaz de comprar
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            0
          </Text>
        </View>
        <Text style={styles.bold}>PREPARACIÓN DE LA COMIDA:</Text>
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Organiza, prepara y sirve las comidas por sí solo adecuadamente
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Prepara adecuadamente las comidas si se le proporcionan los
            ingredientes
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            0
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Prepara, calienta y sirve las comidas, pero no sigue una dieta
            adecuada
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            0
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Necesita que le preparen y sirvan las comidas
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            0
          </Text>
        </View>
        <Text style={styles.bold}>CUIDADO DE LA CASA:</Text>
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Mantiene la casa solo o con ayuda ocasional (para trabajos
            pesados)
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Realiza tareas ligeras, como lavar los platos o hacer las camas
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Realiza tareas ligeras, pero no puede mantener un adecuado nivel
            de limpieza
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Necesita ayuda en todas las labores de la casa
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - No participa en ninguna labor de la casa
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            0
          </Text>
        </View>
        <Text style={styles.bold}>LAVADO DE LA ROPA:</Text>
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Lava por sí solo toda su ropa
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Lava por sí solo pequeñas prendas
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Todo el lavado de ropa debe ser realizado por otro
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            0
          </Text>
        </View>
        <Text style={styles.bold}>USO DE MEDIOS DE TRANSPORTE:</Text>
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Viaja solo en transporte público o conduce su propio coche
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Es capaz de coger un taxi, pero no usa otro medio de transporte
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Viaja en transporte público cuando va acompañado por otra persona
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Sólo utiliza el taxi o el automóvil con ayuda de otros
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            0
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - No viaja
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            0
          </Text>
        </View>
        <Text style={styles.bold}>
          RESPONSABILIDAD RESPECTO A SU MEDICACIÓN:
        </Text>
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Es capaz de tomar su medicación a la hora y con la dosis correcta
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Toma su medicación si la dosis le es preparada previamente
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            0
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - No es capaz de administrarse su medicación
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            0
          </Text>
        </View>
        <Text style={styles.bold}>MANEJO DE SUS ASUNTOS ECONÓMICOS:</Text>
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Se encarga de sus asuntos económicos por sí solo
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Realiza las compras de cada día, pero necesita ayuda en las
            grandes compras, bancos...
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            1
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            - Incapaz de manejar dinero
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            0
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
          <Text style={[{width: '70%', borderColor: colors.primary}]}>
            Puntuación total:
          </Text>
          <Text
            style={[
              styles.td,
              {
                width: '30%',
                borderColor: colors.primary,
                textAlign: 'center',
                height: '100%',
              },
            ]}>
            {' '}
          </Text>
        </View>
        <Text> </Text>

        <Text>
          La información se obtendrá de un cuidador fidedigno. Se puntúa cada
          área conforme a la descripción que mejor se corresponda con el sujeto.
          Por tanto, cada área puntúa un máximo de{' '}
          <Text style={styles.bold}>1 punto</Text> y un mínimo de{' '}
          <Text style={styles.bold}>0 puntos</Text>. La máxima dependencia
          estaría marcada por la obtención de{' '}
          <Text style={styles.bold}>0 puntos</Text>, mientras que una suma de{' '}
          <Text style={styles.bold}>8 puntos</Text> expresaría una independencia
          total.
        </Text>
        <Text> </Text>
        <Text>
          Esta escala es más útil en mujeres, ya que muchos varones nunca han
          realizado algunas de las actividades que se evalúan.
        </Text>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('Anexo4')}>
          <Text>{'Anexo 4 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default Anexo3;
