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

const Anexo5 = () => {
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
      await AsyncStorage.setItem('@sAnexo5', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sAnexo5');
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
          onPress={() => navigate('Anexo4')}>
          <Text>{'👈 Anexo 4'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>Anexo 5</Headline>
        <Headline style={styles.bold}>
          Escala de carga del cuidador de Zarit (Caregiver Burden Interview)
        </Headline>
        <Headline> </Headline>

        <Text> </Text>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>Item</Text>
          <Text style={{width: '65%'}}>Pregunta a realizar</Text>
          <Text style={{width: '25%'}}>N CN AV CS S</Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>1</Text>
          <Text style={{width: '65%'}}>
            ¿Siente que su familiar solicita más ayuda de la que realmente
            necesita?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>2</Text>
          <Text style={{width: '65%'}}>
            ¿Siente que debido al tiempo que dedica a su familiar ya no dispone
            de tiempo suficiente para usted?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>3</Text>
          <Text style={{width: '65%'}}>
            ¿Se siente tenso cuando tiene que cuidar a su familiar y atender
            además otras responsabilidades?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>4</Text>
          <Text style={{width: '65%'}}>
            ¿Se siente avergonzado por la conducta de su familiar?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>5</Text>
          <Text style={{width: '65%'}}>
            ¿Se siente enfadado cuando está cerca de su familiar?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>6</Text>
          <Text style={{width: '65%'}}>
            ¿Cree que la situación actual afecta de manera negativa a su
            relación con amigos y otros miembros de su familia?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>7</Text>
          <Text style={{width: '65%'}}>
            ¿Siente temor por el futuro que le espera a su familiar?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>8</Text>
          <Text style={{width: '65%'}}>
            ¿Siente que su familiar depende de usted?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>9</Text>
          <Text style={{width: '65%'}}>
            ¿Se siente agobiado cuando tiene que estar junto a su familiar?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>10</Text>
          <Text style={{width: '65%'}}>
            ¿Siente que su salud se ha resentido por cuidar a su familiar?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>11</Text>
          <Text style={{width: '65%'}}>
            ¿Siente que no tiene la vida privada que desearía debido a su
            familiar?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>12</Text>
          <Text style={{width: '65%'}}>
            ¿Cree que su vida social se ha visto afectada por tener que cuidar
            de su familiar?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>13</Text>
          <Text style={{width: '65%'}}>
            ¿Se siente incómodo para invitar amigos a casa, a causa de su
            familiar?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>14</Text>
          <Text style={{width: '65%'}}>
            ¿Cree que su familiar espera que usted le cuide, como si fuera la
            única persona con la que puede contar?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>15</Text>
          <Text style={{width: '65%'}}>
            ¿Cree que no dispone de dinero suficiente para cuidar a su familiar
            además de sus otros gastos?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>16</Text>
          <Text style={{width: '65%'}}>
            ¿Siente que será incapaz de cuidar a su familiar por mucho más
            tiempo?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>17</Text>
          <Text style={{width: '65%'}}>
            ¿Siente que ha perdido el control sobre su vida desde que la
            enfermedad de su familiar se manifestó?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>18</Text>
          <Text style={{width: '65%'}}>
            ¿Desearía poder encargar el cuidado de su familiar a otras personas?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>19</Text>
          <Text style={{width: '65%'}}>
            ¿Se siente inseguro acerca de lo que debe hacer con su familiar?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>20</Text>
          <Text style={{width: '65%'}}>
            ¿Siente que debería hacer más de lo que hace por su familiar?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>21</Text>
          <Text style={{width: '65%'}}>
            ¿Cree que podría cuidar de su familiar mejor de lo que lo hace?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>
        <View
          style={[
            styles.row,
            {
              width: '100%',
              flexWrap: 'nowrap',
            },
          ]}>
          <Text style={{width: '10%'}}>22</Text>
          <Text style={{width: '65%'}}>
            En general: ¿Se siente muy sobrecargado por tener que cuidar de su
            familiar?
          </Text>
          <Text style={{width: '25%'}}> </Text>
        </View>

        <Text> </Text>
        <Text>
          <Text style={styles.bold}>Escala de Zarit</Text> (Todos los ítems):
          Cada respuesta obtiene una puntuación de 1 a 5 de izquierda a derecha:
          1 ➢ Nunca, 2 ➢ Casi nunca, 3 ➢ A veces, 4 ➢ Casi siempre y 5 ➢
          Siempre. Luego se suma el puntaje obteniendo un resultado entre 22 y
          110 puntos. Este resultado clasifica al cuidador en: “ausencia de
          sobrecarga” (≤46), “sobrecarga ligera” (47-55) y “sobrecarga intensa”
          (≥56).
        </Text>
        <Text> </Text>
        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('Ultima')}>
          <Text>{'Última página 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default Anexo5;
