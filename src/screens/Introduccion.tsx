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

const Introduccion = () => {
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
      await AsyncStorage.setItem('@sIntroduccion', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sIntroduccion');
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
          onPress={() => navigate('Preambulo')}>
          <Text>{'👈 Preambulo'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>A modo de introducción</Headline>
        <Headline> </Headline>
        <View style={styles.text}>
          <Text>
            Ser persona cuidadora requiere sensibilidad y una relación muy
            estrecha con la persona que hay que cuidar, ya que hay que compartir
            con ella aspectos muy íntimos relacionados con su propio cuerpo y
            con sus costumbres más arraigadas. Requiere también, buenas dosis de
            paciencia y una fortaleza emocional para asumir con entereza esa
            situación. Pero, además, ser persona cuidadora requiere
            conocimientos y habilidades específicas. Y no es fácil estar
            preparado para ello, por más que sepamos que antes o después,
            existen muchas posibilidades de que tengamos que ocuparnos del
            cuidado de alguno de nuestros seres queridos, padre o madre, esposo
            o esposa, algún tío o tía sin hijos, quizás, por qué no, de alguno
            de nuestros hijos, hermanos. Cuando llega ese momento, a veces de
            manera sorpresiva, otras veces como una situación que se va
            consolidando poco a poco, casi de forma imperceptible, nos podemos
            encontrar desbordados ante una situación que nos exige unos
            conocimientos y habilidades para la que nadie nos ha preparado.
            Porque ser persona cuidadora de una persona en situación de
            dependencia no solo nos exige saber cómo cuidar su cuerpo, sino que
            también nos enfrenta a decisiones sobre la organización de la casa;
            u otras de índole jurídico o social. De alguna manera, requiere
            saber un poco de medicina, de leyes, de psicología, de tecnología,
            de cuestiones sociales… Y ¿quién puede saber de todas esas cosas?
            Contaremos, por supuesto, con el apoyo de muchos profesionales.
            Pero, en determinados momentos, nos tendremos que enfrentar en
            soledad a actuaciones y a decisiones que serán nuestras y solo
            nuestras.
          </Text>

          <Text> </Text>
          <Text>
            Cuando una persona enferma y como consecuencia de ello se encuentra
            en situación de dependencia y necesita cuidados continuados, de
            alguna manera, enferma todo el núcleo familiar. En la mayoría de las
            ocasiones nos vemos envueltos en esa situación de la noche a la
            mañana, sin tiempo para prepararnos ni organizarnos, llegando a
            pensar que no vamos a poder ni saber sobrellevarla. Nos encontramos
            en un momento de gran vulnerabilidad familiar y necesariamente
            alguien deberá coger las riendas para organizar esa etapa de la vida
            de nuestra familia. Esto no quiere decir que la persona que organice
            sea la que lleve toda la carga que supone cuidar, pero sí la que
            coordine el momento para reunirnos y, juntos, poder compartir esa
            tarea.
          </Text>
          <Text> </Text>
          <Text>
            Al principio sentiremos que es como una carga, pero con toda
            seguridad, posteriormente se convertirá en el disfrute de «haber
            podido cuidar» a un ser querido.
          </Text>
          <Text> </Text>
          <Text>
            La función de la persona cuidadora debe incluir el autocuidado. Para
            ello es muy importante que disponga de un espacio de tiempo propio
            todos los días. Vivir esta experiencia casi siempre nos enseña a
            cuidarnos, descubriendo lo importante que es esto, no solo para
            poder cuidar a otros, sino para poder vivir. Los miedos que van a
            aparecer en la persona cuidadora son múltiples y variados, ya que se
            enfrenta a una situación quizá desconocida para él o ella, con la
            responsabilidad de sentir que de él o ella depende el bienestar del
            enfermo. Además, surge la inseguridad de saber si será capaz de
            cuidarlo, la duda de si lo hará bien, la preocupación de si va a
            reconocer los síntomas en la evolución de la enfermedad y sabiendo
            que, además de presenciar el deterioro progresivo del enfermo, se va
            a enfrentar, en muchos casos, a su muerte. Todos estos miedos son
            «humanos» y es normal que aparezcan, así como otros momentos
            difíciles, de alteración y enfados por ambas partes, enfermos y
            persona cuidadoras. Lo que estos nunca deben hacer es maltratarse
            por ello. Deben saber que cuentan con el apoyo total de los
            profesionales sanitarios y sociales, y que unos y otros van a
            aportar los recursos suficientes para formar un equipo y ayudarles a
            afrontar todo el proceso. El enfermo se cansa de su lucha y puede
            que lo manifieste enfrentándose a la persona cuidadora; ésta también
            está cansada, el camino a veces se hace difícil y muestra su enfado
            al enfermo, pero no debe culpabilizarse.
          </Text>
          <Text> </Text>
          <Text>
            Se debe reconducir la situación pensando no en lo que los separa
            sino en lo que los une, en las similitudes que conducen al
            acercamiento al enfermo, que se encuentra en situación de
            dependencia y que requiere cuidados continuados, y la persona
            cuidadora:
          </Text>
          <Text>• los dos son vulnerables y tienen miedo,</Text>
          <Text>
            • los dos necesitan de una comunicación emocional y pueden «perder
            los nervios» en un momento dado,
          </Text>
          <Text>• los dos necesitan llantos y risas,</Text>
          <Text>• los dos necesitan despedirse y encontrar la paz.</Text>
          <Text> </Text>
          <Text>
            Tal vez esta etapa sea necesaria para darnos cuenta de las pocas
            cosas que son imprescindibles, tanto para vivir como para morir «en
            paz».
          </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('SistemaCuidados')}>
          <Text>
            {'Hacia un sistema de cuidados en adultos mayores dependientes 👉'}
          </Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default Introduccion;
