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

const SaludMental = () => {
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
      await AsyncStorage.setItem('@sSaludMental', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sSaludMental');
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
          onPress={() => navigate('Sobrecarga')}>
          <Text>{'👈 Sobrecarga de la persona cuidadora'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>Elementos de Salud Mental</Headline>
        <Headline> </Headline>
        <View style={styles.text}>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿Qué hacer ante una persona dependiente deprimida?
          </Text>
          <Text> </Text>
          <Text>
            La depresión es un estado emocional que limita a la persona en tres
            dimensiones: física, psíquica, social y repercute en su calidad de
            vida. Es una enfermedad molesta, difícil de diagnosticar y la
            sociedad no está preparada para enfrentarla.
          </Text>
          <Text> </Text>
          <Text>
            Existe un buen número de investigaciones que ponen de manifiesto que
            las tasas más altas de sintomatología asociada a la depresión se
            encuentran entre los adultos mayores, aunque muchas veces sin llegar
            a manifestarse como un trastorno completo de depresión.
          </Text>
          <Text> </Text>
          <Text>
            <Text style={styles.bold}>¿Qué es la depresión?</Text> Esta
            enfermedad se caracteriza por tristeza, percepción de vacío,
            rechazo, pérdida de autoestima, sentimientos de inutilidad,
            alteración del apetito y sueño y la apatía. Es de señalar que en
            ocasiones las depresiones en los ancianos no presentan todos los
            síntomas como en otras personas, lo que dificulta su diagnóstico y
            tratamiento, se asocia con el proceso del envejecimiento y se le
            resta importancia.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            <Text style={styles.bold}>¿Quiénes la padecen más?</Text> La
            frecuencia es mayor para las mujeres entre los 55 y 80 años, pero
            esta relación se invierte a partir de los 80 años, con mayor
            prevalencia en los hombres.
          </Text>
          <Text> </Text>
          <Text>
            <Text style={styles.bold}>
              ¿Qué caracteriza la depresión en los ancianos?
            </Text>{' '}
            La depresión en las personas mayores tiene como norma ser atípica y
            heterogénea. Es poco frecuente encontrar un síndrome depresivo
            completo, como en las personas más jóvenes. En ocasiones se
            manifiesta únicamente mediante síntomas somáticos (corporales) y se
            interpreta como un envejecimiento normal. Suele asociarse a
            enfermedades físicas intercurrentes, a déficit sensoriales, dolor
            crónico, al consumo de fármacos y a situaciones de soledad o
            pérdidas. Se observa menor presencia de síntomas psíquicos como la
            tristeza y mayores manifestaciones de síntomas corporales.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>¿Cómo se puede presentar?</Text>
          <Text> </Text>
          <Text> • Como indiferencia y retraimiento.</Text>
          <Text> • Deterioro de los hábitos higiénicos.</Text>
          <Text> • Lentitud de los movimientos.</Text>
          <Text> • Tono de voz bajo.</Text>
          <Text> • Facie triste o poco expresiva.</Text>
          <Text> • Llanto espontáneo.</Text>
          <Text> • Disminución de la concentración.</Text>
          <Text> • Ideaciones pesimistas.</Text>
          <Text> • Múltiples dolores o quejas.</Text>
          <Text> • Alteraciones en el ritmo del sueño.</Text>
          <Text> </Text>
          <Text>
            <Text style={styles.bold}>
              ¿Cómo se manifiesta en el dependiente deprimido?
            </Text>{' '}
            El dependiente deprimido no es ajeno a esta sintomatología
            depresiva, incluso la prevalencia de este problema puede ser mayor.
            Pero ella puede aparecer no tan evidente, y enmascarada por las
            afecciones físicas, pudiendo pasar inadvertido para un profesional
            no especializado. Otro aspecto a tener en cuenta es que estos
            síntomas pueden aparecer aislados, y asociada a la historia
            biográfica del paciente y sus rasgos individuales. De ahí que, pueda
            confundirse el síndrome depresivo de base.
          </Text>
          <Text> </Text>
          <Text>Usted debe saber que:</Text>
          <Text> </Text>
          <Text> • La peor consecuencia de la depresión es el suicidio.</Text>
          <Text>
            {' '}
            • Los adultos mayores son el grupo etario con mayor número de
            suicidios consumados.
          </Text>
          <Text>
            {' '}
            • Los suicidios se realizan con más premeditación y con métodos más
            letales.
          </Text>
          <Text>
            {' '}
            • La persona mayor que refiere ideas suicidas siempre debe ser
            atendida por su médico, aun cuando no existan otros síntomas de
            depresión, ya que es un paciente con riesgo para la pérdida de su
            funcionalidad y en muchos casos un candidato para el intento de
            suicidio.
          </Text>
          <Text>
            {' '}
            • Es falsa la creencia de que aquellas personas que anuncian el
            suicidio no lo acometen, las estadísticas demuestran lo contrario.
          </Text>
          <Text>
            {' '}
            • Todos estos factores son muy frecuentes en el anciano, lo que da
            una idea de su vulnerabilidad para los cuadros depresivos.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            Lo que Ud. debe saber del tratamiento del dependiente deprimido:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            • Atender al paciente con un profesional para valorar tipo de
            tratamiento.
          </Text>
          <Text>
            {' '}
            • Cumplimentar las dosis de los medicamentos indicados por el
            médico.
          </Text>
          <Text>
            {' '}
            • Indicar al médico si el paciente está tomando otros medicamentos.
          </Text>
          <Text> • Observar su conducta atentamente.</Text>
          <Text> </Text>
          <Text style={styles.bold}>¿Qué se debe hacer?</Text>
          <Text> </Text>
          <Text> • Individualizar el problema.</Text>
          <Text> • Brindar soporte emocional.</Text>
          <Text> • No culpar al paciente.</Text>
          <Text> • Mantenerse atento a los cambios de comportamiento.</Text>
          <Text> </Text>
          <Text style={styles.bold}>¿Cómo hacerlo?</Text>
          <Text> </Text>
          <Text>
            <Text style={styles.bold}>Brindar soporte emocional</Text>: Es
            importante, que, ante la persona dependiente deprimida, se
            establezca una buena relación emocional: esto es, mantener un tono
            de voz suave, comprensivo, ser paciente, aprender a escuchar lo que
            la persona nos dice de manera lenta y con pocas palabras. Muchas
            veces es necesario poner nuestra mano en su hombro, decirle: «te
            comprendo, quizás es como tú dices, pero piensa que no estás solo,
            estoy aquí para cuidarte, vas a contar conmigo, otras personas te
            están ayudando y entre todos vamos a tratar de que cada día te
            sientas mejor de ánimo».
          </Text>
          <Text> </Text>
          <Text>
            <Text style={styles.bold}>Individualizar el problema</Text>: Es
            importante conocer a la persona: saber si es abierta y comunicativa,
            decir: que nos habla fácilmente de su estado emocional y con la cual
            podemos establecer fácil comunicación o es de pocas palabras y no
            nos expresa abiertamente lo que siente, siendo más difícil la
            comunicación. A esto llamamos individualizar el problema. Si la
            persona es del primer tipo, entonces nos será muy fácil
            identificarla para poder apoyarla mejor y tratar con palabras
            sencillas de disminuirle su angustia. Por ejemplo: Una persona con
            déficit motor que refiere estar deprimida por no poder caminar como
            antes pudiéramos decirle con voz dulce pero segura: es verdad que no
            lo haces como antes, pero con apoyo puedes lograrlo.
          </Text>
          <Text> </Text>
          <Text>
            En el segundo caso será necesario trabajar en el soporte emocional,
            ir ganando la confianza del paciente hasta que el mismo poco a poco
            nos vaya expresando su estado.
          </Text>
          <Text> </Text>
          <Text>
            <Text style={styles.bold}>No culpar al paciente</Text>: Recordar que
            la persona no está así porque quiere sino porque está enfermo, por
            tanto, necesita de comprensión y paciencia.
          </Text>
          <Text> </Text>
          <Text>
            <Text style={styles.bold}>
              Mantenerse atento a los cambios de comportamiento
            </Text>
            : Las expresiones del rostro pueden orientarnos acerca del estado
            anímico del paciente, así como sus gestos, su postura, la velocidad
            de su lenguaje y movimientos. Por lo que es importante prestar
            atención a los mismos.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>¿Qué no hacer?</Text>
          <Text> </Text>
          <Text> • Pedirle que levante el ánimo.</Text>
          <Text> • Pedirle que ponga de su parte.</Text>
          <Text>
            {' '}
            • Decirle que se vaya de viaje para no pensar en su problema.
          </Text>
          <Text> • Dar esperanza donde no hay base para hacerlo.</Text>
          <Text> </Text>
          <Text style={styles.bold}>¿Qué es la Demencia?</Text>
          <Text> </Text>
          <Text>
            Es una Enfermedad del Sistema Nervioso Central que afecta los
            procesos mentales superiores del individuo, como la memoria, el
            lenguaje, el pensamiento, la conducta, etc. Es adquirida,
            generalmente es crónica o irreversible e invalida al que la padece
            para llevar a cabo una vida independiente.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿Existen diferentes tipos de demencia?
          </Text>
          <Text> </Text>
          <Text>
            Más del 50% de las demencias lo constituye la enfermedad de
            Alzheimer, pero existen otras como las Demencias Vasculares, la
            demencia por cuerpos de Lewys, la demencia por Parkinson, así como
            las llamadas demencias secundarias producidas por tumores,
            hidrocefalia, hipo e hipertiroidismo, traumatismos, alcoholismo,
            pugilística, etc., siendo estas últimas menos frecuentes. Las
            manifestaciones y síntomas de todas ellas son similares existiendo
            un cambio en el comportamiento habitual del individuo que
            generalmente ocurre de manera progresiva.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿Quiénes sufren la Enfermedad de Alzheimer?
          </Text>
          <Text> </Text>
          <Text>
            Si bien existe una forma de presentación de la enfermedad en edades
            más jóvenes, en la gran mayoría de los casos aparece después de los
            65 años. Afecta de un 7 a un 10% de la población a partir de esta
            edad, duplicándose los casos a medida que ésta se incrementa. La
            padecen igualmente mujeres que hombres, no existiendo diferencias
            significativas entre raza ni nivel educacional.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿Qué alteraciones presentan estos enfermos?
          </Text>
          <Text> </Text>
          <Text> 1. Pérdida de memoria para los hechos recientes.</Text>
          <Text> 2. Dificultades para razonar y comprender.</Text>
          <Text>
            {' '}
            3. Disminución del vocabulario lo cual empobrece su expresión oral.
          </Text>
          <Text> 4. Dificultad para nombrar los objetos.</Text>
          <Text> 5. Dificultades para reconocer a personas conocidas.</Text>
          <Text>
            {' '}
            6. Problemas para orientarse en lugares conocidos lo cual da lugar a
            que se extravíen.
          </Text>
          <Text>
            {' '}
            7. Incapacidad para ubicarse en el tiempo es decir de conocer la
            fecha en que estamos.
          </Text>
          <Text> 8. Incapacidad para aprender cosas nuevas.</Text>
          <Text>
            {' '}
            9. Dificultad para solucionar problemas de la vida cotidiana.
          </Text>
          <Text> 10. Pérdida de hábitos y habilidades.</Text>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿Puede la persona con demencia evitar la pérdida de memoria?
          </Text>
          <Text> </Text>
          <Text>
            Aunque al principio de la enfermedad el paciente tiene crítica de su
            pérdida de memoria es totalmente imposible controlarla, olvidando no
            sólo nombres y recados sino a medida que avanza su deterioro olvidad
            hechos o sucesos realizados incluso por la propia persona.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿Cómo evoluciona la persona que sufre esta enfermedad?
          </Text>
          <Text> </Text>
          <Text>
            La persona que padece la Enfermedad de Alzheimer puede vivir un
            promedio de 10 años. Esto depende de los cuidados que reciba y de su
            estado de salud general, si padece o no de otras enfermedades, ya
            que la persona no fallece de esta afección sino de otras posibles
            complicaciones. La enfermedad transcurre por 3 etapas: leve,
            moderada y severa, cuyas características son las siguientes:
          </Text>
          <Text> </Text>
          <Text>1ra fase:</Text>
          <Text> </Text>
          <Text> • Olvidos frecuentes.</Text>
          <Text> • Pérdida de vocabulario.</Text>
          <Text> • Pérdida de habilidades.</Text>
          <Text> • Disminución de autoestima.</Text>
          <Text> • Desorientación temporo-espacial.</Text>
          <Text> • Cambios de personalidad.</Text>
          <Text> </Text>
          <Text>2da fase:</Text>
          <Text> </Text>
          <Text> • Olvido de sucesos recientes.</Text>
          <Text> • Abandono de actividades habituales.</Text>
          <Text> • Pérdida de autonomía.</Text>
          <Text> • Mayor pérdida de vocabulario.</Text>
          <Text> • Se extravían en lugares conocidos.</Text>
          <Text> • Cambios de conducta.</Text>
          <Text> </Text>
          <Text> 3ra fase:</Text>
          <Text> </Text>
          <Text> • No reconoce a personas conocidas.</Text>
          <Text> • No puede comunicarse verbalmente.</Text>
          <Text> • Apatía extrema.</Text>
          <Text> • Inmovilidad.</Text>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿Esta enfermedad provoca cambios en la conducta?
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            1. Acusan a sus familiares y a otras personas de que les roban o les
            cogen sus cosas.
          </Text>
          <Text> 2. Manifiestan que desean irse para otra casa.</Text>
          <Text>
            {' '}
            3. Se tornan irritables y/o agresivos por cualquier motivo.
          </Text>
          <Text> 4. Repiten y preguntan lo mismo muchas veces.</Text>
          <Text> 5. Caminan de un lado hacia otro sin un fin determinado.</Text>
          <Text>
            {' '}
            6. En ocasiones no duermen bien de noche y se levantan a realizar
            cualquier actividad.
          </Text>
          <Text>
            {' '}
            7. Demandan mucha atención por parte de los familiares llamándolos
            constantemente.
          </Text>
          <Text> 8. A veces se quejan de que "no sirven para nada".</Text>
          <Text>
            {' '}
            9. Muestran desinterés por las actividades que antes realizaban como
            ver la televisión, leer, etc.
          </Text>
          <Text> 10. Pueden ver o escuchar cosas que no existen.</Text>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿Qué hacer ante estos comportamientos?
          </Text>
          <Text> </Text>
          <Text>
            Los cuidadores deben tener presente que estas conductas son
            producidas por esta enfermedad y son totalmente involuntarias siendo
            el individuo incapaz de controlarlas. Por tanto, debe:
          </Text>
          <Text> </Text>
          <Text> 1. Demostrar paciencia y tolerancia.</Text>
          <Text> 2. Culpar a la enfermedad y no al enfermo.</Text>
          <Text>
            {' '}
            3. Brindarle apoyo ayudándolo a resolver algún problema o a buscar
            algún objeto extraviado.
          </Text>
          <Text> 4. No contradecir al paciente.</Text>
          <Text> 5. No discutir con él.</Text>
          <Text>
            {' '}
            6. Utilizar trucos o “mentiras piadosas” para quitarle las ideas
            fijas.
          </Text>
          <Text> 7. Permitirle deambular en un lugar seguro.</Text>
          <Text>
            {' '}
            8. Propiciarle una atmósfera emocional y un ambiente tranquilo.
          </Text>
          <Text> 9. Evitarle noticias desagradables.</Text>
          <Text>
            {' '}
            10. Encubrir sus faltas y no señalarle sus errores ni sus olvidos.
          </Text>
          <Text>
            {' '}
            11. Cuando la conducta es totalmente incontrolable por parte de la
            persona cuidadora se debe acudir a un especialista para valorar un
            tratamiento.
          </Text>
          <Text> </Text>
          <Text>
            El deterioro que produce esta enfermedad incide en una pérdida de la
            capacidad de la persona para realizar las actividades de la vida
            diaria afectando su autonomía y sus relaciones, por lo que se torna
            cada vez más dependiente de los demás.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿Qué hacer para conservar en lo posible la autonomía del enfermo?
          </Text>
          <Text> </Text>
          <Text>
            Es importante conocer que es difícil aceptar la pérdida de capacidad
            y de autonomía que genera esta enfermedad y de la cual el individuo
            se da cuenta al inicio por lo cual frecuentemente se deprime. Sin
            embargo, la persona cuidadora puede llevar a cabo un aserie de
            medidas para preservar el mayor tiempo posible el validismo del
            enfermo.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            1. Demostrarle que hay cosas que él puede hacer bien y por sí mismo.
          </Text>
          <Text> 2. No sobreprotegerlo ni tratarlo como un niño.</Text>
          <Text>
            {' '}
            3. Brindarle ayuda, pero no hacer las cosas por él si aún puede.
          </Text>
          <Text>
            {' '}
            4. Tener paciencia y no apresurarlo en la realización de sus
            actividades.
          </Text>
          <Text> 5. Ofrecerle actividades en las cuales pueda colaborar.</Text>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿El enfermo de Alzheimer puede presentar incontinencia?
          </Text>
          <Text> </Text>
          <Text>
            Uno de los problemas que se le presenta frecuentemente a los
            enfermos y que más carga provoca a los cuidadores es la
            incontinencia urinaria.
          </Text>
          <Text> </Text>
          <Text>
            Cumpliendo una serie de medidas se puede retardar la aparición de
            este problema.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            1. Identificar y tratar por un especialista alguna causa orgánica
            que pudiera provocarla.
          </Text>
          <Text> 2. Inducir al enfermo a que acuda al baño o llevarlo.</Text>
          <Text>
            {' '}
            3. Eliminar barreras arquitectónicas en el horario nocturno que
            dificulte el acceso al baño.
          </Text>
          <Text>
            {' '}
            4. Señalizar el baño para facilitar el acceso a él por parte del
            enfermo.
          </Text>
          <Text>
            {' '}
            5. Eliminar la ingestión de líquidos en el horario nocturno.
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>
            En caso que el enfermo presente ya incontinencia es conveniente
            cumplir las medidas anteriores y, además:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            1. Evitar los regaños por esta causa y menos delante de otras
            personas.
          </Text>
          <Text> 2. Culpar a la enfermedad y no al enfermo.</Text>
          <Text>
            {' '}
            3. Usar sonda vesical sólo en caso extremo para evitar posibles
            infecciones.
          </Text>
          <Text>
            {' '}
            4. Utilizar en lo posible culeros o pañales manteniendo una higiene
            adecuada.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿Qué hacer si el enfermo se niega a comer, a bañarse o a realizar
            alguna otra actividad?
          </Text>
          <Text> </Text>
          <Text> 1. No imponerle o darle órdenes.</Text>
          <Text>
            {' '}
            2. Persuadirlo con métodos indirectos y atractivos para él.
          </Text>
          <Text>
            {' '}
            3. No insistir en ese momento y esperar un tiempo antes de insistir.
          </Text>
          <Text> 4. No utilizar la lógica ni discursos.</Text>
          <Text> 5. Establecer rutinas y horarios para las actividades.</Text>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿Qué medidas tomar para evitar que se extravíe?
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            1. Poner alguna identificación en la ropa del enfermo por si sale de
            casa y se pierde.
          </Text>
          <Text> 2. Acompañarle siempre que salga de casa.</Text>
          <Text>
            {' '}
            3. Poner cierres en las puertas que eviten que el enfermo salga.
          </Text>
          <Text> 4. No dejarlo sólo en casa.</Text>
          <Text> 5. Mantenerlo ocupado o entretenido en alguna actividad.</Text>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿Cuáles son las complicaciones más frecuentes en estos enfermos?
          </Text>
          <Text> </Text>
          <Text>
            Las complicaciones son frecuentes en el estadio severo de la
            enfermedad y se producen por el propio incremento del deterioro del
            paciente que lo lleva a la dependencia y a la inmovilidad. Estos
            son:
          </Text>
          <Text> </Text>
          <Text> 1. Problemas respiratorios.</Text>
          <Text> 2. Problemas nutricionales.</Text>
          <Text> 3. Problemas de eliminación intestinal y urinaria.</Text>
          <Text> 4. Problemas circulatorios, musculares y articulares.</Text>
          <Text> 5. Problemas en la piel.</Text>
          <Text> </Text>
          <Text style={styles.bold}>
            ¿Existe un tratamiento efectivo para esta enfermedad?
          </Text>
          <Text> </Text>
          <Text>
            Si bien es importante atender y tratar por parte de un médico los
            problemas conductuales y los síntomas psiquiátricos que pueden
            presentar como son los delirios, las alucinaciones, la depresión,
            etc., no existe un tratamiento medicamentoso para la enfermedad.
          </Text>
          <Text> </Text>
          <Text>
            Diferentes laboratorios han propuesto algunos medicamentos como son
            la Tacrina, la Rivastigmina, el Donepezilo, la Galantamina, algunos
            de los cuales provocan reacciones adversas. Si bien mejoran la
            función cognitiva al inicio, ninguno de éstos impide el progreso de
            la enfermedad por lo que hasta el momento no existe un tratamiento
            que la cure. En Cuba se realiza ensayo clínico fase III promovido
            por el Centro de Inmunología Molecular (CIM) para la evaluación de
            la eficacia y seguridad del fármaco neuroprotector NeuralCIM (nombre
            comercial de la molécula NeuroEPO) en pacientes con Alzheimer leve o
            moderado.
          </Text>
          <Text> </Text>
          <Text>
            Las llamadas «terapias blandas» que se basan en la estimulación
            cognitiva de los procesos mentales y en particular de la memoria,
            permiten mejorar el estado mental del enfermo en los inicios de la
            enfermedad.
          </Text>
          <Text> </Text>
          <Text>
            Actualmente el tratamiento más eficaz es la preparación y educación
            a la persona cuidadora, la cual debe ante todo informarse acerca de
            la enfermedad y buscar orientaciones acerca del manejo y cuidado del
            enfermo. Y sobre todas las cosas tratar al enfermo con cariño
            expresándole satisfacción por tener la oportunidad de cuidarlo.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>Para recordar.</Text>
          <Text> </Text>
          <Text>
            {' '}
            • La Enfermedad de Alzheimer no la padecen todos los ancianos.
          </Text>
          <Text>
            {' '}
            • Esta afección provoca pérdida de memoria y de otras funciones
            mentales además de cambios en la conducta.
          </Text>
          <Text>
            {' '}
            • La fórmula más adecuada para el manejo de la enfermedad es la
            paciencia y el afecto.
          </Text>

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

export default SaludMental;
