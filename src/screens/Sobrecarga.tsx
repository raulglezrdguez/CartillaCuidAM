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

const Sobrecarga = () => {
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
      await AsyncStorage.setItem('@sSobrecarga', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sSobrecarga');
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
          onPress={() => navigate('CuidadosPersonales')}>
          <Text>{'👈 Cuidados Personales'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>
          Sobrecarga de la persona cuidadora
        </Headline>
        <Headline> </Headline>
        <View style={styles.text}>
          <Text> </Text>
          <Text>
            Debe ser principio en la persona cuidadora disponer de información
            suficiente para realizar el proceso de cuidados de manera óptima
            donde la formación en cuidados y la autoayuda tiene un valor
            especial en contribuir a evitar la percepción de sobrecarga. La
            insuficiente formación y acceso a información sobre el proceso de
            cuidados es desencadenante causa de la sobrecarga y otras
            consecuencias que se relacionan con el proceso de cuidados. Querer,
            poder y saber deben ser tres elementos claves para que el cuidado
            sea bueno. Tener en cuenta que hay que tener otra persona preparada
            para apoyar al cuidador principal o sustituirlo en caso de
            necesidad, es muy importante.
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>¿Qué es la sobrecarga?</Text>
          <Text> </Text>
          <Text>
            Según varios estudios el ejercer la función de cuidador por largo
            tiempo trae consecuencias perjudiciales en varios aspectos de su
            vida, que se conoce como "carga o sobrecarga" conocido también como
            síndrome de Burnout. Esta sobrecarga es la "percepción que el
            cuidador tiene acerca del impacto que conlleva la función de
            cuidador en diferentes esferas de su vida como son en el ámbito
            físico, mental y socioeconómico" (Roca A, 2022) (Alltag et al.,
            2019). Esta sobrecarga puede ser objetiva o subjetiva. La sobrecarga
            objetiva se refiere a las actividades objetivas que realiza la
            persona cuidadora: la carga física, el tiempo de dedicación y la
            exposición a situaciones estresantes en relación con los cuidados.
            En cambio, la sobrecarga subjetiva es la respuesta emocional que
            presenta el cuidador al ejercer esta función. (Arroyo Priego E,
            2018)
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>
            ¿Cómo saber si existe sobrecarga en la persona cuidadora?
          </Text>
          <Text> </Text>
          <Text>
            La sobrecarga en personas cuidadoras se identifica con diversos
            métodos y pruebas, pero es muy común el empleo en habla hispana de
            la “La escala de sobrecarga del Cuidador de Zarit”, la cual según
            sus resultados clasifica a la persona cuidadora en: sobrecarga,
            sobrecarga intensa o sin carga. (Anexo 5) (Mariezcurrena-Fernández
            A, 2022)
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>
            Algunos factores de riesgo de sobrecarga.
          </Text>
          <Text> </Text>
          <Text>
            Entre algunos factores de riesgo de sobrecarga (Schulz et al., 2020)
            enuncia varios: ingresos bajos, educación baja, mayor edad, género
            femenino, más de 100 horas de cuidado al mes, tener que hacer
            procedimientos médicos, alto nivel de sufrimiento percibido,
            sensación de falta de elección para asumir el rol, mala salud, apoyo
            social y profesional limitado. (Etcheverry Domeño, L, 2022). Los
            autores por su experiencia proponen la inclusión, como factor de
            riesgo, a la limitada capacidad funcional; especialmente por el gran
            número de personas adultas mayores cuidando a otros adultos mayores
            dependientes.
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>
            Consecuencias en la percepción de calidad de vida y salud.
          </Text>
          <Text> </Text>
          <Text>
            Es importante señalar algunas características predominantes a tener
            en cuenta en las personas cuidadoras con alto grado de sobrecarga
            del cuidador principal. Estos se caracterizan por el predominio del
            sexo femenino, edad de 40 años y más, casadas, con escolaridad
            secundaria, con nexo familiar y presencia de síntomas depresivos.
            (Piñánez García MC, 2022)
          </Text>
          <Text> </Text>
          <Text>
            Diferentes estudios apuntan a que un porcentaje significativo de
            personas cuidadoras experimentan un deterioro en su percepción de
            calidad de vida así como síntomas de ansiedad y depresión; y que
            esos sentimientos de agotamiento emocional están estrechamente
            relacionados con el desarrollo de algunas enfermedades crónicas o
            síntomas somáticos como el insomnio, la fatiga, el dolor crónico o
            disfunciones cognitivas como problemas de memoria o de atención
            (Durán-Gómez et al., 2020;) (Campos-Puente et al., 2019;) (Silveira
            Corrêa et al., 2019) (Salinas-Rodríguez A, 2022). Se ha comprobado
            que cuanto mayor es la percepción de carga subjetiva en las personas
            cuidadoras, mayor probabilidad tienen de desarrollar estos síntomas.
          </Text>
          <Text> </Text>
          <Text>
            Pese a que los estudios revelan que la gran mayoría de las personas
            cuidadoras experimentan altos niveles de sentimientos de carga,
            estos varían significativamente dependiendo de determinadas
            características del cuidador, observándose que los mayores
            sentimientos de carga los referían cuidadoras mujeres y
            particularmente aquellas con estudios superiores (Bramboeck et al.,
            2020). Otra de las posibles consecuencias que puede generar la
            sobrecarga en cuidadores, es el deseo de institucionalizar al
            enfermo tal y como se comprobó en el estudio realizado por Fields et
            al. (2019), en el cual se evidencia que diferentes indicadores de
            carga se relacionaron positivamente con el deseo de
            institucionalizar a su familiar.
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>
            Algunos factores que moderan la carga subjetiva de la persona
            cuidadora
          </Text>
          <Text> </Text>
          <Text>
            Existen una serie de factores o variables que son capaces de influir
            en estos sentimientos de carga, actuando como variables protectoras.
            (Martínez-Cortés, L, 2021) (Soriano-Ursúa IG, 2022)
          </Text>
          <Text> </Text>
          <Text>
            Los hallazgos en varias investigaciones muestran como los aspectos
            positivos relacionados con el cuidado{' '}
            <Text style={styles.italic}>
              satisfacción, positividad o recompensa subjetiva
            </Text>{' '}
            moderan la percepción de carga actuando como factor protector
            respecto al desarrollo de síntomas conductuales y psicológicos
            (Martínez-Cortés L, 2021).
          </Text>
          <Text> </Text>
          <Text>
            La <Text style={styles.italic}>religiosidad</Text> también se ha
            identificado que la fe actúa protegiendo a las personas cuidadoras
            frente a las molestias del cuidado diario y reduciendo el deseo de
            institucionalizar al enfermo (Fields et al., 2019).
          </Text>
          <Text> </Text>
          <Text>
            La <Text style={styles.italic}>resiliencia</Text> vista como los
            niveles altos de capacidad de adaptación de una persona frente a un
            estado o situación adverso, favorece que sea menos probable que
            experimenten sentimientos de carga y sus estrategias de
            afrontamiento son más adecuadas, lo que redujo su percepción de
            carga (Durán-Gómez et al., 2020).
          </Text>
          <Text> </Text>
          <Text>
            El <Text style={styles.italic}>apoyo social</Text> influye
            positivamente en la autopercepción de salud de las personas
            cuidadoras experimentando menor reactividad emocional, menos
            sobrecarga y mejor funcionamiento cognitivo (Ruiz-Fernández et al.,
            2019) (Durán-Gómez et al., 2020).
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>
            Intervenciones destinadas a personas cuidadoras.
          </Text>
          <Text> </Text>
          <Text>
            La estrategia de prevención con mayor reporte es la dirigida a la
            salud mental, especialmente las orientadas a formación en esta área,
            seguido de la salud social y por último la salud física. (Vilches
            Leiva, C, 2021) Esto se fundamenta en que las intervenciones se
            relacionan fundamentalmente con el proceso de la dependencia física
            y mental con énfasis en la inmovilidad y las demencias. Un buen
            ejemplo es la terapia de Búsqueda de Beneficios (BFT) donde a pesar
            que las acciones de ayuda a la persona cuidadora hasta el momento se
            han centrado en la formación. Siendo ésta una intervención destinada
            a las personas cuidadoras donde el equipo de Cheng et al., (2019)
            estudió la efectividad de la terapia de búsqueda de beneficios
            (reestructuración cognitiva + psicoeducación) en cuidadores de
            enfermos de Alzheimer, encontrando que ésta redujo los síntomas
            depresivos y la carga global a largo plazo de los cuidadores, además
            de aumentar los sentimientos de bienestar psicológico a mediano
            plazo, mostrando superioridad en su eficacia al compararla con otro
            tipo de programas únicamente psicoeducativos.
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>Estrategias de afrontamiento.</Text>
          <Text> </Text>
          <Text>
            Es muy común también ver como muchas personas cuidadoras sufren
            estrés debido a que están constantemente pendientes de cuidar,
            produciéndoles angustia, en muchas ocasiones, de gran intensidad.
            (Blanco Gutiérrez, 2021) La salud de las personas cuidadoras también
            se ve afectada mentalmente y muchos tienden a consumir muchos
            psicofármacos como ansiolíticos, antidepresivos, etc. Sin embargo,
            las estrategias para afrontar situaciones que nos plantea el cuidado
            de una persona no son universales. Lo ideal es pensar, con los
            profesionales y otras personas que han pasado por experiencias
            similares, cuál puede ser una herramienta útil. Las estrategias no
            funcionan una vez y para siempre, sino que tendremos que ir
            adaptándolas. No debemos olvidar que lo que funciona hoy, puede no
            funcionar mañana sin embargo hay sugerencias como:
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>
            ¿Cuáles son las señales de alerta del síndrome del cuidador?
          </Text>
          <Text> </Text>
          <Text>
            La presencia de algunos de estos síntomas puede ser indicio de
            sobrecarga:
          </Text>
          <Text> </Text>
          <Text> • Cansancio persistente.</Text>
          <Text> • Problemas de sueño.</Text>
          <Text> • Disminución o abandono de las aficiones.</Text>
          <Text> • Desinterés por vivir nuevas experiencias.</Text>
          <Text> • Elevada irritabilidad.</Text>
          <Text>
            {' '}
            • Dolores o molestias sin tener ningún problema de salud aparente.
          </Text>
          <Text> • Aislamiento social.</Text>
          <Text> • Consumo de ansiolíticos y/o antidepresivos.</Text>
          <Text> • Niveles de estrés y/o ansiedad elevados.</Text>
          <Text> </Text>
          <Text style={styles.italic}>
            ¿Qué podemos hacer para prevenir el síndrome del cuidador o persona
            cuidadora?
          </Text>
          <Text> </Text>
          <Text>
            Es importante detectar cuanto antes las manifestaciones del síndrome
            del cuidador para actuar y procurar reconducir la situación.
            Para prevenir y paliar la sobrecarga, las personas cuidadoras han de
            tener en cuenta que es importante:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            • Conocer bien la enfermedad y su evolución. Escuela de cuidadores y
            autoayuda.
          </Text>
          <Text>
            {' '}
            • Comprender sus síntomas y los cambios de conducta que generan en
            la persona afectada. Ayuda profesional y autoayuda.
          </Text>
          <Text>
            {' '}
            • Reconocer y saber gestionar las propias emociones y sentimientos.
          </Text>
          <Text>
            {' '}
            • Pedir ayuda cuando se necesita. Red de apoyo social y familiar.
          </Text>
          <Text>
            {' '}
            • Recuperar la propia identidad, más allá del rol de cuidador.
          </Text>
          <Text> • Buscar espacios para uno mismo.</Text>
          <Text>
            {' '}
            • Aprender a relajarse, en esta cartilla se incluye una propuesta de
            cómo realizarlo.
          </Text>
          <Text>
            {' '}
            • Ser positivos e intentar aliarse con el humor y a grupos de apoyo.
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>
            Estrategias para prevenir o enfrentar el síndrome de sobrecarga del
            cuidador.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            • Aprender a pedir ayuda.... cuidar a una persona, en la mayoría de
            los casos, no es una tarea ligera. Conlleva cansancio físico y una
            importante carga emocional.
          </Text>
          <Text>
            {' '}
            • Saca tiempo para ti.... hacer cosas que ofrecen placer.
          </Text>
          <Text> • Práctica ejercicio.... físico y mental.</Text>
          <Text>
            {' '}
            • Cuida tu vida social.... un tiempecito para amigos y familia.
          </Text>
          <Text> • Descansa y come bien. Cuidar el sueño y la nutrición.</Text>
          <Text>
            {' '}
            • Conocer la enfermedad ayuda a controlar mejor la situación....
          </Text>
          <Text> • Reconocer y expresar los sentimientos.</Text>
          <Text>
            {' '}
            • Aprender estrategias para <Text style={styles.bold}>
              manejar
            </Text>{' '}
            los síntomas asociados.
          </Text>
          <Text> • Dedicar tiempo al autocuidado.</Text>
          <Text> </Text>
          <Text style={styles.italic}>Consideraciones finales.</Text>
          <Text> </Text>
          <Text>
            El cuidado de un adulto mayor con dependencia funcional física o
            mental supone una tarea ardua y poco reconocida que genera una gran
            cantidad de carga y sufrimiento por lo que se hace necesario
            disponer de políticas públicas factibles y sostenibles que den
            soporte y protección a las familias que se encuentren en esta
            situación, así como desarrollar intervenciones destinadas a las
            personas cuidadoras y sus familias que les ayuden a paliar las
            consecuencias derivadas de la gran responsabilidad que recae sobre
            ellas. Especial atención requiere la impactante proporción de
            mujeres con respecto a la proporción de hombres que llevan a cabo
            las tareas de cuidados hoy en día, reflejo del arraigamiento de
            roles de género que siguen siendo fuente de desigualdad en la
            sociedad actual.
          </Text>

          <Text> </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('SaludMental')}>
          <Text>{'Elementos de Salud Mental 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default Sobrecarga;
