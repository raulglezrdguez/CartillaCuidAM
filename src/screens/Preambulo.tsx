import React, {useEffect, useRef} from 'react';
import {
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

const URL1 =
  'https://www.paho.org/es/decada-envejecimiento-saludable-americas-2021-2030';

const Preambulo = () => {
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
      await AsyncStorage.setItem('@sPreambulo', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sPreambulo');
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
          onPress={() => navigate('Datos')}>
          <Text>{'👈 Datos'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>Preámbulo</Headline>
        <Headline> </Headline>
        <View style={styles.text}>
          <Text>
            La dependencia es una condición de la persona que interfiere en su
            capacidad para la realización de las actividades de la vida diaria
            instrumentadas o básicas. Es más frecuente en el grupo de las
            personas mayores y demanda los cuidados de otras personas:
            familiares o no. Tiene repercusiones negativas para el individuo, la
            familia, la comunidad y para la sociedad en general, tanto en al
            ámbito económico como en el de las relaciones interpersonales. Donde
            la relación entre la persona necesitada de cuidados y la persona
            cuidadora cobra especial interés, así como en el entorno donde se
            desarrollan los cuidados.
          </Text>
          <Text>
            <Text>La Década del Envejecimiento Saludable 2021-2030</Text>
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(URL1).catch(err =>
                  console.error('Error al visitar link', err),
                );
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
            <Text>
              , declarada por la Asamblea General de las Naciones Unidas en
              diciembre de 2020, es una iniciativa mundial y es la principal
              estrategia para lograr y apoyar acciones para construir una
              sociedad para todas las edades. Pretende añadir vida a los años.
              Es centrada en la persona sin dejar de tener en cuenta su pasado,
              su presente y sus expectativas futuras. Por lo tanto, incluye a la
              persona necesitada de cuidados como a la persona cuidadora.
            </Text>
          </Text>
          <Text>
            <Text>La </Text>
            <Text style={styles.italic}>
              Cartilla de la persona cuidadora. Asistentes sociales a domicilio
              y familiares,{' '}
            </Text>
            <Text>
              es un producto que educa y capacita ofreciendo conocimientos
              generales sobre competencias necesarias y soporte hacia un sistema
              de cuidados al adulto mayor dependiente y para la persona que
              cuida.
            </Text>
          </Text>
          <Text> </Text>
          <Text>
            Está organizada por acápites: 1) A modo de Introducción, 2) Hacia un
            sistema de cuidados en adultos mayores dependientes, 3)
            Envejecimiento saludable, la evaluación funcional y la dependencia,
            4) Del asistente social a domicilio como persona cuidadora, 5) ¿Qué
            hacer con la evaluación funcional? 6) Necesidades de la persona
            enferma dependiente, 7) Cambios en la estructura de la casa, 8)
            Cuidados personales, 9) Sobrecarga de la persona cuidadora, 10)
            Elementos de salud mental, 11) Promoción de la autonomía personal,
            12) Recomendaciones para los cuidadores y la autoayuda, 13) Apoyo de
            Tecnologías.
          </Text>
          <Text>
            El acápite 1) es una introducción para dar a conocer de cómo deben
            ser las características de las personas que brindan cuidados a
            personas dependientes, siendo o no familiar de la misma.
          </Text>
          <Text>
            El acápite 2) se centra en el contexto actual de las actividades de
            cuidados y los factores que intervienen para perseguir el logro de
            un Sistema Integral de Cuidados.{' '}
          </Text>
          <Text>
            El acápite 3) tiene como objetivo mostrar conceptos importantes como
            el de envejecimiento saludable y la relación de la funcionalidad
            para lograr realizar las actividades de la vida diaria con la mejor
            independencia posible.{' '}
          </Text>
          <Text>
            El acápite 4) muestra: concepto, objetivos, principales funciones,
            características de la persona cuidadora, cómo se clasifica el
            servicio que brinda, factores que influyen en su bienestar y la
            importancia de la comunicación.{' '}
          </Text>
          <Text>
            El acápite 5) transmite la forma tradicional y la forma innovadora
            con el uso de las TIC para apoyar la pesquisa del estado funcional
            de los adultos mayores según el sistema nacional de salud, en Cuba,
            favoreciendo también la autopesquisa; y recomienda alternativas de
            soluciones en el nivel primario de atención de salud a través del
            programa del médico y la enfermera de la familia que favorecen la
            calidad de la atención en el ámbito comunitario de este sector
            poblacional.{' '}
          </Text>
          <Text>
            Desde el acápite 6) al 8) se hace hincapié en las necesidades de la
            persona enferma dependiente, las condiciones de la vivienda, los
            cuidados personales.{' '}
          </Text>
          <Text>
            Con relación al acápite 9) se visualiza la importancia de determinar
            la carga del cuidador y forma de prevenirla.{' '}
          </Text>
          <Text>
            Mientras que en el acápite 10) se abordan elementos de salud mental
            resaltando la depresión como alteración del estado emocional y la
            demencia como alteración del estado cognitivo, y que ambas, como
            parte de los grandes síndromes geriátricos, afectan al individuo, a
            la familia y a la sociedad.{' '}
          </Text>
          <Text>
            Para el acápite 11) la promoción de la autonomía personal da una
            pauta integradora y optimista para mejorar la calidad de vida de las
            personas dependientes además de ofrecer soporte para las personas
            cuidadoras.{' '}
          </Text>
          <Text>
            El acápite 12) da a conocer los llamados grupos de autoayuda y cómo
            son importantes para el intercambio y el acompañamiento, y se brinda
            una propuesta de relajación para las personas cuidadoras que les
            permitirá aliviar las tensiones para así mantener una mejor
            condición de su salud al desarrollar su actividad de cuidados.{' '}
          </Text>
          <Text>
            Y el acápite 13) da a conocer que el apoyo de tecnologías ofrece
            ventajas y desventajas para la persona cuidadora y para el adulto
            mayor dependiente, y también sugiere tipos de tecnologías que pueden
            ser utilizada por el adulto mayor.
          </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('Introduccion')}>
          <Text>{'A modo de introducción 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default Preambulo;
