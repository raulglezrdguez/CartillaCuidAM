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

const Anexo1 = () => {
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
      await AsyncStorage.setItem('@sAnexo1', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sAnexo1');
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
          onPress={() => navigate('Bibliografia')}>
          <Text>{'👈 Bibliografía'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>Anexo 1</Headline>
        <Headline style={styles.bold}>
          ÍNDICE DE KATZ DE ACTIVIDADES BÁSICAS DE LA VIDA DIARIA. (ABVD)
        </Headline>
        <Headline> </Headline>
        <View style={styles.text}>
          <Text> </Text>
          <Text style={styles.bold}>BAÑO/LAVADO:</Text>
          <Text> </Text>
          <Text>
            Independiente. Necesita ayuda sólo para lavarse una parte del cuerpo
            o lo hace solo.
          </Text>
          <Text>
            Dependiente. Requiere ayuda al menos para lavarse más partes del
            cuerpo o para entrar y salid de la bañera.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>VESTIDO:</Text>
          <Text> </Text>
          <Text>
            Independiente. Se viste sin ayuda (incluye coger las cosas del
            armario). Excluye el atado de los cordones de los zapatos.
          </Text>
          <Text>
            Dependiente. No se viste solo o lo hace de forma incompleta.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>USO DEL RETRETE:</Text>
          <Text> </Text>
          <Text>
            Independiente. No precisa ningún tipo de ayuda para entrar y salir
            del cuarto de aseo. Usa el retrete, se limpia y se viste
            adecuadamente. Puede usar un orinal por la noche.
          </Text>
          <Text>
            Dependiente. Precisa ayuda para llegar hasta el retrete y para
            utilizarlo adecuadamente. Incluye el uso del orinal y de la cuña.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>MOVILIZACIÓN (CAMA/SILLÓN)</Text>
          <Text> </Text>
          <Text>
            Independiente. No requiere ayuda para sentarse o levantarse de una
            silla ni para entrar o salir de la cama (puede utilizar ayudas
            mecánicas, como un bastón).
          </Text>
          <Text>
            Dependiente. Requiere alguna ayuda para una u otra acción.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>CONTINENCIA:</Text>
          <Text> </Text>
          <Text>
            Independiente. Control completo de la micción y de la defecación.
          </Text>
          <Text>
            Dependiente. Incontinencia total o parcial. Incluye el control total
            de los esfínteres mediante enemas, sonda o el empleo reglado de
            orinal y/o cuña.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>ALIMENTACIÓN: </Text>
          <Text> </Text>
          <Text>
            Independiente. Lleva la comida del plato a la boca sin ayuda.
          </Text>
          <Text>
            Dependiente. Es ayudado a llevar la comida del plato a la boca.
            Incluye no comer y alimentación parenteral o a través de una sonda.
          </Text>
          <Text>
            Debe recogerse lo que el paciente hace realmente, no lo que es capaz
            de hacer.
          </Text>
          <Text>Clasificación:</Text>
          <Text>A. Independiente en todas las actividades.</Text>
          <Text>B. Independiente en todas las actividades, salvo en una.</Text>
          <Text>
            C. Independiente en todas las actividades, salvo en el baño y otra
            más.
          </Text>
          <Text>
            D. Independiente en todas las actividades, salvo en el baño, el
            vestido y otra más.
          </Text>
          <Text>
            E. Independiente en todas las actividades, salvo en el baño, el
            vestido, el uso del retrete y otra más.
          </Text>
          <Text>
            F. Independiente en todas las actividades, salvo en el baño, el
            vestido, el uso del retrete, en la transferencia y otra más.
          </Text>
          <Text>G. Dependiente en todas las actividades.</Text>
          <Text> </Text>

          <Text> </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('Anexo2')}>
          <Text>{'Anexo 2 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default Anexo1;
