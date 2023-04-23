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

const AutonomiaPersonal = () => {
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
      await AsyncStorage.setItem('@sAutonomiaPersonal', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sAutonomiaPersonal');
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
          onPress={() => navigate('SaludMental')}>
          <Text>{'👈 Elementos de Salud Mental'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>
          Promoción de la autonomía personal
        </Headline>
        <Headline> </Headline>
        <View style={styles.text}>
          <Text> </Text>
          <Text>
            La enfermedad o los distintos tipos de discapacidades (físicas,
            psíquicas o sensoriales) pueden producir situaciones de dependencia,
            en las cuales una persona no tiene autonomía para llevar a cabo por
            sí misma lo que denominamos Actividades Básicas e Instrumentales de
            la Vida Diaria (AVDB y AVDI). Limitaciones que afectan al propio
            cuidado personal (higiene, alimentación, vestirse, cuidados
            personales…), a la vida en el hogar (limpieza de la casa, lavado y
            planchado de la ropa, realizar la compra y la comida…) o a sus
            relaciones con el entorno. El objetivo de esta sección es dar una
            serie de consejos para promover esa autonomía cuando sea posible y
            educar a los familiares en el cuidado domiciliario de personas
            dependientes. Esta sección se complementa con las anteriores. Sería
            pretencioso dar respuesta a la gran variedad de situaciones
            individuales que generan dependencia o discapacidad y esto excede,
            con mucho, el objetivo de esta cartilla de ayuda, así que daremos
            una serie de indicaciones generales que sería necesario precisar en
            cada caso concreto. Por esto, ante la duda de si el familiar o la
            persona en situación de dependencia pueden desarrollar una actividad
            u otra con seguridad debe preguntarse al médico de atención primaria
            y, en el caso de que él lo estime oportuno, se podrá enviar a la
            persona a un servicio o unidad de Rehabilitación de los existentes
            en algunos centros de salud o en los hospitales generales. Sería de
            esperar que en un futuro próximo esa asistencia también se realice
            en el domicilio, especialmente en enfermos que no puedan desplazarse
            o cuando interese valorar la accesibilidad del domicilio. Si se
            llevara a cabo la necesaria coordinación de los servicios sanitarios
            y de los sociales en materia de apoyo domiciliario, tal y como la
            legislación sanitaria y social, establecen, se avanzaría mucho en la
            calidad de vida de las personas en situación de dependencia, bien
            sea por discapacidad o por enfermedad, y la de sus familiares y
            personas que conviven con ellos y personas cuidadoras.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            Recomendaciones de carácter general para promocionar la autonomía.
          </Text>
          <Text> </Text>
          <Text>
            Para promocionar la autonomía de una persona en situación de
            dependencia es conveniente saber que:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            • La persona debe hacer todo lo que sea posible por sí misma.
          </Text>
          <Text>
            {' '}
            • En las actividades para las que requiera ayuda de otra persona no
            hay que hacerle todo, sino intentar que la propia persona participe
            en lo posible y se deje ayudar solo en lo imprescindible.
          </Text>
          <Text>
            {' '}
            • No hay nada más perjudicial para la evolución y la autoestima de
            una persona en situación de dependencia que la sobreprotección. Es
            decir, hacer por ella más de lo que realmente necesita.
          </Text>
          <Text>
            {' '}
            • En la realización de todas las tareas y actividades debe tenerse
            en cuenta de manera prioritaria que tienen que realizarse con
            SEGURIDAD.
          </Text>
          <Text>
            {' '}
            • Existen ayudas técnicas para facilitar la autonomía y evitar la
            necesidad de apoyo de otra persona.
          </Text>
          <Text>
            {' '}
            • Hay que hacer todo lo posible para mantener el contacto con
            familiares y amigos.
          </Text>
          <Text>
            {' '}
            • En los servicios médicos del territorio se les podrá dar respuesta
            y consejo para las cuestiones que precise, ofrecen respuestas a
            todas estas cuestiones y contempla como prioridad la promoción de la
            autonomía personal. Por su parte, los profesionales sanitarios y los
            sociales podrán informar en cada momento del desarrollo de estos
            marcos de promoción de la autonomía personal y, en su caso, orientar
            en la forma en que la persona dependiente puede beneficiarse de los
            servicios y prestaciones que se vayan poniendo en marcha, siempre en
            función de su específica situación.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            Ayudas para la movilización y transferencias a personas
            dependientes.
          </Text>
          <Text> </Text>
          <Text>
            Para una adecuada salud se debe tratar de mantener la habilidad de
            cada persona de caminar y de mantenerse de pie y así mantenga su
            independencia con relación a la movilidad. Pero existen condiciones
            que limitan esa condición en algunas personas por diferentes causas.
          </Text>
          <Text> </Text>
          <Text>
            Para ayudar correctamente a una persona a moverse cuando ésta no
            puede hacerlo de manera independiente es importante aprender sobre:
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿Cómo ayudar a realizar movilizaciones?
          </Text>
          <Text> </Text>
          <Text>
            Estas son acciones de movimientos que se realizan sobre una misma
            superficie, que implican cambios de posición o de situación (ej.
            Cambiar de posición en la cama, corregir la postura cuando la
            persona está sentada, etc.)
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿Cómo ayudar a realizar transferencias?
          </Text>
          <Text> </Text>
          <Text>
            Estas son acciones de movimientos que implican pasar de una
            superficie a otra, de un mueble a otro (ej. Pasar de la cama a la
            silla de ruedas o viceversa)
          </Text>
          <Text> </Text>
          <Text>
            Para que esas acciones resulten más fáciles y se eviten lesiones hay
            que tener en cuenta lo siguiente:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            • Antes de realizar la movilización o transferencia se confirmará
            que es la adecuada y no está contraindicada.
          </Text>
          <Text>
            {' '}
            • Debe conocer las capacidades y el grado de colaboración de la
            persona que vamos a movilizar o transferir…
          </Text>
          <Text>
            {' '}
            • Tiene que existir comunicación entre la persona a movilizar y la
            persona cuidadora, logrando así que la acción sea coordinada. Se
            necesita <Text style={styles.bold}>informar</Text> a la persona de
            la maniobra que se va a realizar y{' '}
            <Text style={styles.bold}>pedir su colaboración activa</Text>. Ya
            que esto evitará en muchos casos que se resistan.
          </Text>
          <Text>
            {' '}
            • Frenar la cama o la silla de ruedas antes de realizar la
            movilización o transferencia.
          </Text>
          <Text>
            {' '}
            • A la hora de realizar transferencias en las que movamos el tronco
            de la persona con dependencia, tendremos en cuenta que mire hacia el
            pecho, con el fin de flexionar el cuello y no provocar ninguna
            lesión.
          </Text>
          <Text>
            {' '}
            • En los agarres debemos buscar el mayor contacto de la palma de la
            mano evitando hacer demasiada presión con nuestros dedos (no deben
            estar en garra) y hacerle daño.
          </Text>
          <Text>
            {' '}
            • Realizar las maniobras a una velocidad adecuada, evitando
            realizarlas de forma brusca.
          </Text>
          <Text>
            {' '}
            • Existen ayudas técnicas para hacer que las transferencias sean más
            cómodas: tablas, disco giratorio, diferentes tipos de grúa... En
            muchos casos, el uso de una ayuda técnica disminuye
            considerablemente el esfuerzo de la persona cuidadora, mejorando así
            la transferencia y no perjudicando la salud de la persona cuidadora
            ni de la persona con necesidad de cuidados.
          </Text>
          <Text> </Text>
          <Text>
            Preservar el mayor nivel de autonomía es muy importante. La persona
            cuidadora podrá supervisar la movilización o transferencia que
            realice la persona dependiente bajo su responsabilidad en relación a
            sus cuidados, aunque para lograrlo ocupe mayor período de tiempo.
            También la persona cuidadora podrá brindar ayuda parcial (porque
            requiere ayuda física puntual para completarla); o ayuda total o con
            sustitución máxima, (porque requiere de ayuda para realizar la
            maniobra. En función de la complejidad o esfuerzo que requiera) que
            puede llegar a necesitar cooperación de otra persona que se sume a
            los cuidados de forma puntual o permanente al mismo tiempo, en
            función de la complejidad o esfuerzo que requiera.
          </Text>
          <Text> </Text>
          <Text>
            Un andador de dos ruedas, ayudará con los que tengan alteraciones
            del equilibrio y para personas dependientes con mayores alteraciones
            de la movilidad. Las personas dependientes más fuertes pueden usar
            un bastón y otras podrán utilizar una silla como soporte para
            mantenerse de pie y así se logrará que la fuerza muscular, con
            apoyo, la ayude a sostenerse en pie. Y de esta manera se ayudará a
            transferir de la cama a la silla, silla de ruedas o sillón y
            viceversa y el traslado hacia el cuarto de baño, siempre que las
            condiciones de la salud lo permitan.
          </Text>
          <Text> </Text>
          <Text>
            Conversar con la persona que usted cuida, crea una buena relación
            interpersonal que da confianza. Les gusta conversar sobre sus
            recuerdos del tiempo pasado y escuchar sobre nuevas noticias sobre
            la familia y lo que acontece en la comunidad y en la sociedad en
            general.
          </Text>
          <Text> </Text>
          <Text> • </Text>
          <Text> • </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>

          <Text> </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('AutonomiaPersonal')}>
          <Text>{'Promoción de la autonomía personal 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default AutonomiaPersonal;
