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
import Fig1 from '../components/Fig1';
import Fig2 from '../components/Fig2';
import Fig3 from '../components/Fig3';
import Fig4 from '../components/Fig4';
import Fig5 from '../components/Fig5';
import Fig6 from '../components/Fig6';
import Fig7 from '../components/Fig7';
import Fig8 from '../components/Fig8';
import Fig9 from '../components/Fig9';
import Fig10 from '../components/Fig10';
import Fig11 from '../components/Fig11';

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
          <Text style={styles.bold}>
            Posiciones anatómicas básicas de una persona en la cama
          </Text>
          <Text> </Text>
          <Text>
            Decúbito supino (o boca arriba): acostado sobre su espalda, piernas
            extendidas y brazos alineados a lo largo del cuerpo.
          </Text>
          <Text> </Text>
          <Fig1
            width={min}
            height={(258 * min) / 1074}
            stroke={colors.secondary}
            strokeWidth={2}
          />
          <Text> </Text>
          <Text>
            Decúbito lateral izquierdo (o derecho): acostado sobre uno de los
            lados del cuerpo. Los brazos pueden quedar hacia delante o hacia
            arriba. El brazo del lado del apoyo del cuerpo no debe quedar
            aprisionado.
          </Text>
          <Text> </Text>
          <Fig2
            width={min}
            height={(298 * min) / 1160}
            stroke={colors.secondary}
            strokeWidth={2}
          />
          <Text> </Text>
          <Text>
            Decúbito prono (o boca abajo): acostado sobre su abdomen y pecho con
            la cabeza girada lateralmente, piernas extendidas y los brazos al
            lado del cuerpo o extendidos hacia delante.
          </Text>
          <Text> </Text>
          <Fig3
            width={min}
            height={(390 * min) / 1064}
            stroke={colors.secondary}
            strokeWidth={2}
          />
          <Text> </Text>
          <Text>
            Utilice las siguientes ilustraciones para aprender a mover y
            transferir, a las personas dependientes con alteraciones de la
            movilidad, de la cama a la silla:
          </Text>
          <Text> </Text>
          <Text>1. Coloque a la persona sobre uno de sus lados.</Text>
          <Text> </Text>
          <Fig4
            width={min}
            height={(560 * min) / 1094}
            stroke={colors.secondary}
            strokeWidth={2}
          />
          <Text> </Text>
          <Text>
            2. Movilice a la persona hasta el borde de la cama. Pida que
            flexione las piernas y que se apoye en el codo del lado sobre la
            superficie de la cama. Usted ayudará con un giro sobre la cadera
            apoyada, sujetándolo por detrás de las rodillas o muslos con una
            mano y por encima del hombro del codo apoyado, con la otra mano.
          </Text>
          <Text> </Text>
          <Fig5
            width={min}
            height={(504 * min) / 1028}
            stroke={colors.secondary}
            strokeWidth={2}
          />
          <Text> </Text>
          <Text>
            3. Mientras lo sujeta con una mano por un hombro del lado sin apoyo,
            colocará una mano en la región de la cadera para ayudarle a levantar
            los glúteos y sentarlo en el borde de la cama hasta que logre
            colocar los pies en el piso.
          </Text>
          <Text> </Text>
          <Fig6
            width={min}
            height={(640 * min) / 714}
            stroke={colors.secondary}
            strokeWidth={2}
          />
          <Text> </Text>
          <Text>
            4. Ubíquese frente a la persona y sosténgalo con posición de abrazo
            por debajo de sus axilas mientras ella realiza la misma acción
            alrededor de su cuello. Trate de que la misma mantenga los pies
            sobre el piso. Y usted podrá colocar una de sus piernas entre las
            rodillas de la persona que cuida.
          </Text>
          <Text> </Text>
          <Fig7
            width={min}
            height={(636 * min) / 754}
            stroke={colors.secondary}
            strokeWidth={2}
          />
          <Text> </Text>
          <Text>
            5. Ayude a la persona a levantar los glúteos y cámbiela hacia la
            silla fija o silla de ruedas u otro. Los brazos se mantendrán
            colocados en la posición de abrazo y su pierna entre las rodillas de
            la persona que cuida.
          </Text>
          <Text> </Text>
          <Text>
            6. El traslado de la persona de la cama a la silla debe realizarse
            de forma coordinada con los brazos.
          </Text>
          <Text> </Text>
          <Text>
            Una sábana doblada en dos colocada a lo ancho de la cama ayuda a
            mover a la persona dependiente cuando su estado es muy débil.
          </Text>
          <Text> </Text>
          <Fig8
            width={min}
            height={(838 * min) / 958}
            stroke={colors.secondary}
            strokeWidth={2}
          />
          <Text> </Text>
          <Text>
            La persona cuidadora agarrará la sábana por uno de sus extremos que
            sobresale por uno de los lados de la cama. Tirará de la sábana para
            acercar hacia ella a la persona dependiente acostada. Le flexionará
            la pierna contraria al lado del cuerpo que quedará apoyado en la
            cama. Le colocará los brazos sobre el pecho. Y levantará la sábana
            para que gentilmente la persona necesitada de sus cuidados esté
            acostada de lado. Luego le pondrá una almohada o una frazada
            enrollada a lo largo de la región de la columna vertebral (en su
            espalda). No debe olvidar ponerle una almohada también debajo de la
            rodilla flexionada.
          </Text>
          <Text> </Text>
          <Text>
            Las siguientes figuras muestran cómo posicionar a la persona, que
            necesitada de cuidados en la cama. El uso de almohadas y frazadas
            dobladas, ayudan a proporcionar soporte a la espalda y a las
            extremidades, le aportan comodidad, previenen los puntos de apoyo
            (unido a los cambios posturales a intervalos de 4 horas -pues
            diferentes estudios demuestran que ese tiempo es efectivo para
            prevenir las úlceras por presión y no crear complicaciones a la
            persona con estado crítico de salud- al realizarlos con menor
            intervalo de tiempo) (Monzón Ferrer, A. 2020).
          </Text>
          <Text> </Text>
          <Fig9
            width={min}
            height={(368 * min) / 1050}
            stroke={colors.secondary}
            strokeWidth={2}
          />
          <Text> </Text>
          <Fig10
            width={min}
            height={(414 * min) / 1184}
            stroke={colors.secondary}
            strokeWidth={2}
          />
          <Text> </Text>
          <Fig11
            width={min}
            height={(404 * min) / 1216}
            stroke={colors.secondary}
            strokeWidth={2}
          />

          <Text> </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('CuidadoresAutoayuda')}>
          <Text>{'Recomendaciones para los cuidadores y la autoayuda 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default AutonomiaPersonal;
