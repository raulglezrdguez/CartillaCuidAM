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

const Tecnologias = () => {
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
      await AsyncStorage.setItem('@sTecnologias', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sTecnologias');
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
          onPress={() => navigate('CuidadoresAutoayuda')}>
          <Text>{'👈 Recomendaciones para los cuidadores y la autoayuda'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>Apoyo de tecnologías</Headline>
        <Headline> </Headline>
        <View style={styles.text}>
          <Text> </Text>
          <Text>
            Actualmente las necesidades y demandas de los adultos mayores y su
            atención asumen categorías superiores y las respuestas tradicionales
            resultan insuficientes, donde el proceso de informatización social
            hace aportes con productos gerontotecnológicos a favor de apoyar el
            envejecimiento saludable. (Reyes T, 2019; Triana E A, 2019; Triana E
            A, 2019)
          </Text>
          <Text> </Text>
          <Text>
            El empleo de las tecnologías actualmente está favorecido por el uso
            masivo de dispositivos móviles y a pesar de las brechas existentes
            el empleo de teléfonos móviles se multiplica cada año al convertirse
            en herramienta no solo de apoyo a la comunicación sino a la
            satisfacción de otras necesidades como es el caso de las plataformas
            de pago, el empleo de redes sociales, entre otros.
          </Text>
          <Text> </Text>
          <Text>
            Es importante recordar que en todos los Joven Club de Computación y
            Electrónica del país está abierto el servicio de los GeroClub donde
            sus miembros pueden obtener información sobre servicios generales
            que se ofertan con cursos que contribuyen al manejo de las
            tecnologías, la búsqueda de información confiable y la Mochila con:
            materiales audiovisuales, juegos, libros, entre otros contenidos que
            favorecen el desarrollo integral o el entretenimiento.
          </Text>
          <Text> </Text>
          <Text>
            Previo a comenzar a enunciar algunas ventajas que pudieran apoyar a
            personas cuidadoras y adultos mayores es importante tener en cuenta
            que para lograr disfrutar de servicios con teléfonos inteligentes y
            otras tecnologías se debe considerar básicamente tres elementos:
            (Reyes T, 2019; Triana E A, 2019; Triana E A, 2019)
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            • El acceso: La posibilidad de poder tener acceso a la tecnología y
            conexión si es necesario.
          </Text>
          <Text>
            {' '}
            • Competencia: Saber cómo funciona, poseer las capacidades físicas y
            mentales necesarias, y tener los conocimientos que permitan usar la
            tecnología.
          </Text>
          <Text>
            {' '}
            • Motivación: Que existan los servicios y/o contenidos necesarios
            que logren movilizar a la persona a satisfacer alguna(s)
            necesidad(es).
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>Ventajas para la persona cuidadora.</Text>
          <Text> </Text>
          <Text>
            {' '}
            • Las TIC pueden ser muy útiles para ayudar a la persona cuidadora a
            realizar ciertos cuidados, en especial para acceder a información
            pues facilitan el acceso a información sanitaria muy valiosa para
            los cuidadores, sobre todo para aquellos que están emocional y/o
            geográficamente aislados. Además, estos cuidados, gracias a las TIC,
            se pueden realizar en tiempos más reducidos permitiendo así que los
            cuidadores puedan pasar más tiempo de ocio.
          </Text>
          <Text>
            {' '}
            • También sirven para poder cuidar a personas que viven alejadas de
            sus propios cuidadores facilitando la comunicación entre cuidador y
            paciente o persona dependiente.
          </Text>
          <Text>
            {' '}
            • Otra ventaja del uso de las TIC es la posible reducción de las
            consecuencias del cuidar, como la sobrecarga y el aislamiento, ya
            que la persona cuidadora se sentirá algo más protegida, con más
            confianza y seguridad; se verá reducida su ansiedad, depresión y
            estrés; les aumentará la autoestima consiguiendo también un aumento
            y fortalecimiento del vínculo de la unidad familiar.
          </Text>
          <Text>
            {' '}
            • Por último, gracias a avances disponibles, el cuidador podrá
            comunicarse con la persona mayor en la distancia, en cualquier
            momento y rápidamente, siendo muy útil por ejemplo con alguna
            urgencia como las caídas.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>Ventajas para el adulto mayor. </Text>
          <Text> </Text>
          <Text>
            Son varios los beneficios que tiene el uso de las TIC para las
            personas mayores y algunas de ellas son:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            • Mejora la integración y participación social, ya que van a estar
            en todo momento “conectados”, siendo esto beneficioso para reducir
            la soledad y el aislamiento social. Al tener esta conexión, las
            personas mayores pueden solicitar ayuda más rápido y fácilmente
            produciendo en ellos una mayor seguridad. Gracias a los sistemas
            inteligentes como pueden ser cámaras de seguridad o alarmas, se
            verán reducidos los robos y asaltos que vemos en los medios de
            comunicación a diario.
          </Text>
          <Text>
            {' '}
            • La introducción de las TIC puede mejorar también la concentración,
            la atención, el lenguaje, la creatividad, la forma de aprender y la
            memoria. Aumenta en general el ocio de estas personas u actividades
            que pueden seguir realizando desde su casa.
          </Text>
          <Text>
            {' '}
            • Puede mejorar también las capacidades físicas y cognitivas.
          </Text>
          <Text>
            {' '}
            • Los avances tecnológicos pueden producir un mayor control de sus
            enfermedades e incluso también ha aumentado la facilidad del
            contacto entre los profesionales sanitarios-paciente consiguiendo
            así un aumento de la calidad de vida.
          </Text>
          <Text>
            {' '}
            • Su estado de ánimo y autoestima se puede ver aumentada, reduciendo
            así conductas como la agresividad o la ansiedad.
          </Text>
          <Text>
            {' '}
            • Otra ventaja puede ser la posibilidad de la persona mayor en
            seguir viviendo en su domicilio generando en ellos más libertad.
          </Text>
          <Text>
            {' '}
            • El ahorro energético es otro aspecto el cual las personas mayores
            se pueden beneficiar con los avances como la gestión de encendido y
            apagado de luces, control de temperatura de la calefacción o aire
            acondicionado.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            Desventajas para la persona mayor y la persona cuidadora.
          </Text>
          <Text> </Text>
          <Text>
            Los avances tecnológicos, también pueden tener desventajas:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            • Estrés por desconocimiento al utilizar estos aparatos ya que,
            aunque cada vez son más los que comienzan a utilizarlos, hay muchas
            personas que sienten o piensan que no van a ser capaces de utilizar
            las TIC simplemente por su avanzada edad.
          </Text>
          <Text>
            {' '}
            • Grado de acceso a estas tecnologías, inalcanzable debido a su
            poder adquisitivo medio-bajo y, además, estos productos tan
            "novedosos" y "modernos" tienen un alto precio que muchos no se lo
            puedan permitir.
          </Text>
          <Text>
            {' '}
            • En el caso en que la persona mayor disponga de muchos de los
            avances mencionados, incluyendo cámaras, los sensores que siguen su
            rutina, etc., la persona podría sentir invadida su privacidad dentro
            de su propia casa, llegando en alguna ocasión a deshumanizar un poco
            los cuidados. Aunque anteriormente fue nombrado, como una ventaja,
            la reducción de los timos (engaños) presenciales, gracias al uso de
            cámaras, en caso contrario podrían aumentar los timos virtuales,
            debido a su poca experiencia en su uso lo que implica su alta
            vulnerabilidad.
          </Text>
          <Text>
            {' '}
            • En referencia a los robots que serían capaces de reducir la
            soledad en muchas personas, un problema que podría aparecer sería la
            reducción de la interacción humana, y aunque la tecnología nos puede
            ayudar mucho en los cuidados de las personas mayores, no deberían
            ser utilizados para sustituir “nuestras funciones” sino como un
            complemento o como una ayuda más.
          </Text>
          <Text>
            {' '}
            • Por último, el aumento del sedentarismo debido a que la persona
            dejaría de realizar actividades que ahora lo llevan a cabo las
            máquinas.
          </Text>
          <Text> </Text>
          <Text>
            Actualmente son muchas las herramientas que están en nuestro
            alcance, ya no solo para mejorar la salud de la persona sino para
            mejorar la comunicación, teniendo siempre en cuenta que el objetivo
            de la utilización de estos avances es la mejora de la calidad de
            vida de la persona o de la salud en general. (Blanco Gutiérrez N,
            2021)
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿Qué tecnologías puede utilizar un Adulto Mayor?
          </Text>
          <Text> </Text>
          <Text>
            ✓ Mensajería instantánea: A través de las diferentes aplicaciones
            pueden sentirse más cerca de sus amigos y familiares. Mediante ellas
            consiguen enviar mensajes escritos, fotos y videos de momentos
            precisos o realizar llamadas y videollamadas.
          </Text>
          <Text>
            ✓ Correo electrónico: Poder comunicarse más formalmente utilizando
            esta vía al ser muy importante en la vida social cotidiana.
          </Text>
          <Text>✓ Redes Sociales:</Text>
          <Text>
            {'   '}• Facebook® pueden encontrar familiares, amigos de la
            infancia, adolescencia, compañeros del colegio a través de la
            búsqueda, publicar pensamientos, fotos o vídeos.
          </Text>
          <Text>
            {'   '}• Instagram® pueden seguir a conocidos y también a famosos,
            políticos, programas de tv, cocina, deportes, etc.
          </Text>
          <Text>
            {'   '}• Twitter®: Si se consideran ser una persona que le gusta
            expresar sus opiniones.
          </Text>
          <Text>✓ Instalar y usar aplicaciones interesantes:</Text>
          <Text> • Ubicación: uso del GPS.</Text>
          <Text>
            {'   '}• Búsqueda de información en los buscadores. Recreación:
            visitas a museos, lectura de libros y audiolibros.
          </Text>
          <Text>
            {'   '}• YouTube®: ver videos de todo tipo: tutoriales, películas,
            etc.
          </Text>
          <Text>
            {'   '}• Juegos mentales (estimulación cognitiva: cartas, truco,
            palabras cruzadas, etc.)
          </Text>
          <Text>✓ Trámites por Internet:</Text>
          <Text>
            {'   '}• Gestiones comerciales: mediante app bancos ver o realizar
            transferencias, pagos de servicios.
          </Text>
          <Text>{'   '}• Tele-salud: para la atención médica/enfermería.</Text>
          <Text>
            {'   '}• Tomar clases o cursos por Internet de cómo realizar
            ejercicios físicos, cocina, manualidades, etc. (Blanco Gutiérrez N.
            2021)
          </Text>
          <Text> </Text>

          <Text> </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('Bibliografia')}>
          <Text>{'Bibliografía 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default Tecnologias;
