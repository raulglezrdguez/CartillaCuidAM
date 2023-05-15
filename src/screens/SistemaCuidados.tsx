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

const SistemaCuidados = () => {
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
      await AsyncStorage.setItem('@sSistemaCuidados', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sSistemaCuidados');
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
          onPress={() => navigate('Introduccion')}>
          <Text>{'👈 Introducción'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>
          Hacia un sistema de cuidados en adultos mayores dependientes
        </Headline>
        <Headline> </Headline>
        <View style={styles.text}>
          <Text>
            <Text style={styles.italic}>
              «Los cuidados son actividades que regeneran diaria y
              generacionalmente el bienestar físico y emocional de las personas.
              Incluye las tareas cotidianas de gestión y sostenimiento de la
              vida, como: el mantenimiento de los espacios y bienes domésticos,
              el cuidado de los cuerpos, la educación/formación de las personas,
              el mantenimiento de las relaciones sociales o el apoyo psicológico
              a los miembros de la familia»
            </Text>{' '}
            (ONU Mujeres y CEPAL, 2020). Hace por tanto referencia a un amplio
            conjunto de aspectos que abarcan: los cuidados en salud, el cuidado
            de los hogares, el cuidado a las personas dependientes y a las
            personas que cuidan o el propio autocuidado.
          </Text>

          <Text> </Text>
          <Text>
            <Text style={styles.italic}>
              «Un Sistema Integral de Cuidados puede definirse como el conjunto
              de políticas encaminadas a concretar una nueva organización social
              de los cuidados con la finalidad de cuidar, asistir y apoyar a las
              personas que lo requieren, así como reconocer, reducir y
              redistribuir el trabajo de cuidados -que hoy realizan
              mayoritariamente las mujeres, desde una perspectiva de derechos
              humanos, de género, interseccional e intercultural. Dichas
              políticas han de implementarse en base a la articulación
              interinstitucional desde un enfoque centrado en las personas,
              donde el Estado sea el garante del acceso al derecho al cuidado,
              sobre la base de un modelo de corresponsabilidad social, con la
              sociedad civil, el sector privado y las familias y de género.»
            </Text>{' '}
            (ONU Mujeres/CEPAL, 2022) La implementación del Sistema implica una
            gestión intersectorial para el desarrollo gradual de sus componentes
            -servicios, regulaciones, formación, gestión de la información y el
            conocimiento, y comunicación para la promoción del cambio cultural-
            que atienda a la diversidad cultural y territorial. La explicitación
            de los aspectos que estructuran un sistema de cuidados -desde su
            propia definición en adelante- no constituye un mero ejercicio
            teórico. Por el contrario, las opciones que se hagan en torno a la
            definición, principios y componentes que integran el sistema va a
            pautar la orientación que ha de tomar la política de cuidados y a
            condicionar el tipo de implementación que se haga de la misma. Por
            tanto, es importante que se expliciten estas opciones, que serán
            fruto del conjunto de decisiones políticas que al respecto tomen las
            autoridades en función de los procesos de cada país. Si bien es
            deseable que los países den pasos más significativos hacia la
            implementación de Sistemas de Cuidados, en muchos de ellos existen
            servicios, programas y/o políticas en marcha con características
            propias. Transformar esas acciones de forma tal que permita avanzar
            en la consolidación de sistemas supone un ejercicio de diseño,
            rediseño y articulación de política pública que implica, por
            ejemplo, en el caso de las personas mayores y con discapacidad,
            avanzar hacia un modelo sociosanitario.
          </Text>
          <Text> </Text>
          <Text>
            La construcción de Sistemas Integrales de Cuidados es un proceso de
            largo recorrido que requiere de múltiples voluntades políticas,
            articulación de diversos actores y niveles de gestión. Sin embargo,
            debe ser entendido como un proceso gradual donde lo importante es
            iniciar el camino y hacerlo progresar con el tiempo. A modo de
            síntesis, se incluyen a continuación algunas recomendaciones finales
            que pueden orientar el proceso: (ONU Mujeres/CEPAL, 2022)
          </Text>
          <Text>
            1. Es fundamental a nivel local realizar acciones de sensibilización
            sobre el derecho al cuidado y la corresponsabilidad social y de
            género, movilizando además de la sociedad en su conjunto en torno a
            la necesidad de contar con un Sistema Nacional de Cuidados a los
            actores locales de los sectores directamente involucrados en las
            políticas de cuidados, sociedad civil, personas académicas, empresas
            y personas trabajadoras del sector.
          </Text>
          <Text>
            2. A través de un adecuado manejo de las expectativas avanzar en
            diagnósticos de necesidades y posibles soluciones a los déficits de
            cuidados que tiene un territorio específico, teniendo en cuenta sus
            características y los diferentes puntos de partida.
          </Text>
          <Text>
            3. Generar espacios de articulación institucional entre actores
            locales con una coordinación política fuerte y representación de
            alto nivel que permita realizar acuerdos programáticos e
            implementarlos. La complejidad de esta estructura institucional será
            consecuencia de los niveles de descentralización y escala de cada
            territorio.
          </Text>
          <Text>
            4. Promover entre los actores institucionales involucrados una
            visión común compartida de lo que supone un Sistema de Cuidados.
          </Text>
          <Text>
            5. Realizar un análisis profundo en base a cada uno de los
            componentes del Sistema que permita establecer de acuerdo con las
            competencias de los diferentes ámbitos locales de gobierno, los
            recursos económicos y la escala de dimensión territorial, metas
            programáticas realizables y que sean plasmadas en la elaboración de
            los Planes Locales de Cuidados.
          </Text>
          <Text>
            6. Generar instrumentos para potenciar/empoderar a las
            organizaciones de la sociedad civil mediante la transferencia de
            recursos y de capacidad de iniciativa para resolver déficits de
            cuidados a nivel comunitario.
          </Text>
          <Text>
            7. Promover acuerdos con el sector académico a nivel territorial que
            potencien la generación de conocimiento sobre los cuidados,
            constituyéndose en un factor que coadyuve a colocar el tema en la
            agenda pública.
          </Text>
          <Text>
            8. Establecer un diálogo con el nivel nacional permanente que abone
            la construcción de un Sistema Integral de Cuidados, que sea sensible
            al territorio y que a su vez ese anclaje a nivel nacional le dé
            sustentabilidad a todas las acciones o políticas locales de cuidados
            que se desarrollen.
          </Text>
          <Text> </Text>
          <Text>
            La persona cuidadora tiene que conocer las capacidades, los
            intereses, las necesidades de la persona pues los requerimientos
            serán diferentes.
          </Text>
          <Text> </Text>
          <Text>
            En el caso de los servicios de salud los sistemas de cuidados a
            largo plazo comprenden a los familiares, amigos y voluntarios, a los
            equipos de persona cuidadoras remunerados y no remunerados, tanto
            los servicios basados en la comunidad y la atención institucional
            (OMS 2015). Los expertos en envejecimiento de la Organización
            Panamericana de la Salud (OPS) instan a los países a fortalecer sus
            sistemas de salud para poder responder a un cambio demográfico sin
            precedentes en la historia de la humanidad. La OPS declaró que el
            número de personas de 60 años o más que requieren atención a largo
            plazo se triplicará en las Américas en las próximas tres décadas, de
            alrededor de 8 millones a entre 27 millones y 30 millones para 2050.
            <Text style={styles.italic}>
              {' '}
              «Los servicios deben adaptarse a las necesidades de las personas
              mayores, quienes requieren un manejo mucho más eficaz, que no solo
              mejore su supervivencia, sino que maximice su capacidad funcional
              y reduzca los años de dependencia de otros».
            </Text>{' '}
            (OPS, 2019)
          </Text>
          <Text> </Text>
          <Text>
            La tendencia es el resultado de que las personas en toda la Región
            viven más tiempo. «El aumento en la expectativa de vida es una de
            las grandes ganancias de las últimas décadas», afirmó la directora
            de la OPS, Carissa F. Etienne. Sin embargo, agregó, «para
            muchos esto viene acompañado por enfermedades crónicas y
            discapacidad que, en muchos casos, afectan la capacidad de las
            personas de ser autosuficientes», explicó. La situación aumentará
            significativamente la demanda de atención y cuidados, que debería
            basarse en enfoques integrados que ayuden a los adultos mayores a
            mantener sus capacidades funcionales que contribuya a un
            envejecimiento saludable (OPS, 2019).
          </Text>
          <Text> </Text>
          <Text>
            Los sistemas de cuidado son actividades llevadas a cabo por otros,
            para que las personas que han tenido una pérdida de la capacidad
            funcional o corren riesgo de tenerla puedan mantener un nivel de
            vida lo más autónomo posible conforme con sus derechos básicos, sus
            libertades fundamentales y la dignidad humana (OMS 2015). Con el
            objetivo de favorecer la capacidad funcional y lograr el
            envejecimiento saludable las Naciones Unidas ha declarado el decenio
            hasta el 2030 «Década del envejecimiento saludable».
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            Envejecimiento saludable, la evaluación funcional y la dependencia.
          </Text>
          <Text> </Text>
          <Text>
            El marco de envejecimiento saludable ha creado una estructura para
            la investigación a través de la Década del «Envejecimiento Saludable
            de las Naciones Unidas (2021-2030), así como para la acción
            destinada a abordar la misión de los Objetivos de Desarrollo
            Sostenible de «no dejar a nadie atrás» (GNUDS, S/F). Se insta a los
            investigadores, los gobiernos y la sociedad civil a que, a lo largo
            de la década, elaboren estrategias que permitan detectar y abordar
            las desigualdades y fomentar el envejecimiento saludable». (Keating
            NC, Rodríguez L, De Francisco A, 2021)
          </Text>
          <Text> </Text>
          <Text>
            Este programa requiere el esfuerzo coordinado de los investigadores
            en gerontología y geriatría para afrontar la amplia variedad de
            problemas sociales y de salud que se producen en el envejecimiento,
            incluidos los que afectan la capacidad funcional, la participación
            social y las necesidades de las personas mayores en el contexto de
            los sistemas de atención social y de salud (Rodríguez-Mañas L,
            Rodríguez-Sánchez I, 2021).
          </Text>
          <Text> </Text>
          <Text>
            El envejecimiento saludable es dinámico. Refleja procesos que se
            producen a lo largo de la última parte del curso de la vida, y se ve
            influido por factores como las capacidades mentales y físicas, el
            entorno y las relaciones entre ellos. Si se da una «adaptación
            adecuada», el resultado es el bienestar (Keating N, McGregor A,
            Yeandle S, 2021) y oportunidades de que las personas mayores en
            todos los países y regiones sean y hagan aquello que tengan motivo
            para valorar (OMS,2015). El marco de envejecimiento saludable exige
            que realicemos un seguimiento de cómo evoluciona el estado de salud
            con el transcurso del tiempo y cómo pueden influir los sistemas de
            salud en las trayectorias de salud. Se hace necesario llenar las
            lagunas existentes en el conocimiento respecto del apoyo prestado
            por el entorno familiar y el grado en el que las comunidades
            disponen de recursos suficientes para facilitar la vida a las
            personas mayores. El fortalecimiento de la investigación sobre el
            envejecimiento saludable en América Latina y el Caribe nos
            aproximará, ciertamente, al objetivo de{' '}
            <Text style={styles.italic}>
              no dejar a ninguna persona mayor atrás.
            </Text>
          </Text>
          <Text> </Text>
          <Text>
            Las personas mayores son un grupo extremadamente heterogéneo. Si
            bien el aumento en la proporción de personas mayores se vincula a
            una mayor carga de enfermedad, al interior del grupo de personas
            mayores conviven individuos con condiciones de salud muy diversas
            (OMS, 2015). En esta línea, la funcionalidad o capacidad funcional,
            definida por la OMS como el resultado entre la interacción de la
            persona (con su capacidad intrínseca física y mental) y las
            características medioambientales, se convierte en el principal
            indicador del estado de salud de las personas mayores (OMS, 2015).
          </Text>
          <Text> </Text>
          <Text>
            Al comprender que la funcionalidad no radica en la capacidad física
            de la persona para desempeñar una determinada actividad o
            movimiento, sino en su vinculación con la comunidad a partir de la
            participación cotidiana, entonces la medición de esta se centra en
            las actividades de la vida diaria. En general, estas se han medido a
            través la identificación de problemas para realizar actividades de
            la vida diaria básicas (AVDB) como comer, vestirse y bañarse, entre
            otras
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => navigate('Anexo1')}>
              <Text>{'Anexo 1 👉'}</Text>
            </TouchableRipple>{' '}
            y{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => navigate('Anexo2')}>
              <Text>{'Anexo 2 👉'}</Text>
            </TouchableRipple>
            {'   '}y de actividades de la vida diaria instrumentales (AVDI), que
            se realizan en el hogar y la comunidad{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => navigate('Anexo3')}>
              <Text>{'Anexo 3 👉'}</Text>
            </TouchableRipple>{' '}
            (American Occupational Therapy Association, 2020). Estas últimas
            incluyen una mayor cantidad de tareas subyacentes y requieren de un
            funcionamiento cognitivo y físico más complejo (American
            Occupational Therapy Association, 2020).
          </Text>
          <Text> </Text>
          <Text>
            Dado el orden jerárquico en la adquisición de la autovalencia en la
            infancia, pasando primero por las AVDB para luego las AVDI, en la
            vejez el proceso es jerárquicamente inverso, es decir, primero se
            pierde la capacidad funcional de desempeñar las AVDI y por último
            las AVDB. De ahí que las AVDI han sido consideradas en la literatura
            científica como las predictoras de salud y funcionalidad en personas
            mayores, puesto que la pérdida en el desempeño autovalente de estas
            hace alusión a una pérdida en la funcionalidad (Edjolo A,
            Proust-Lima C, Delva F, Dartigues JF, Pérès K., 2016). En
            consecuencia, desde la perspectiva sociosanitaria, los instrumentos
            y las herramientas de evaluación que evalúan la capacidad funcional
            a partir de las AVDI han tomado especial protagonismo en los
            procesos de aplicación de la valoración geriátrica integral.
            Respecto a éstos, la Escala de Lawton y Brody (Lawton MP, Hernández
            K, Neumann V, 2016) es reconocida internacionalmente como el patrón
            de oro en la valoración de las AVDI, a pesar de sus críticas por
            tener sesgos de género, cultura y nivel socioeconómico (Hernández K,
            Neumann V, 2016) (González-González C, Cafagna G, Hernández Ruiz
            MDC, Ibarrarán P, Stampini M, 2021).{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => navigate('Anexo3')}>
              <Text>{'Anexo 3 👉'}</Text>
            </TouchableRipple>
          </Text>
          <Text> </Text>
          <Text>
            Considerando la realidad actual y futura del envejecimiento y el
            consecuente aumento esperado de problemas de funcionalidad, los
            países de la Región requieren priorizar el tema de la medición de la
            capacidad funcional en sus poblaciones. Ante esta necesidad de
            cambio, es necesario enfocarse en primer lugar, se requiere contar
            con herramientas que permitan una detección precoz de la pérdida de
            capacidad funcional y capacidad predictiva de la dependencia
            (Echeverría A, Astorga C, Fernández C, Salgado M y Villalobos
            Dintrans P, 2022). Esto es, avanzar en instrumentos que privilegien
            la capacidad proactiva más que reactiva del sistema sociosanitario
            en la línea de continuidad de cuidados y, desde ahí, la necesidad de
            focalizar la medición de AVDI como un primer signo de alerta para
            brindar intervenciones que busquen recuperar y prevenir la pérdida
            de funcionalidad oportunamente en el marco del Envejecimiento
            Saludable y la Década del Envejecimiento Saludable, recientemente
            lanzadas por la OMS y las Naciones Unidas (Echeverría A, Astorga C,
            Fernández C, Salgado M y Villalobos Dintrans P, 2022).
          </Text>
          <Text> </Text>
          <Text>
            <Text style={styles.bold}>
              ¿Qué es el Envejecimiento Saludable?
            </Text>{' '}
            No es la ausencia de enfermedades, el Envejecimiento Saludable es el{' '}
            <Text style={styles.italic}>proceso de fomentar y mantener</Text> la{' '}
            <Text style={styles.bold}>capacidad funcional</Text> que permite el
            <Text style={styles.bold}> bienestar</Text> en la vejez. La
            capacidad funcional consiste en tener los atributos que permiten a
            todas las personas ser y hacer lo que para ellas es importante. Por
            eso es tan importante.
          </Text>
          <Text> </Text>
          <Text>
            La <Text style={styles.bold}>capacidad funcional</Text> se compone
            de las{' '}
            <Text style={styles.bold}>capacidades físicas y mentales</Text> de
            la persona, de su entorno y de las interacciones entre la persona y
            su{' '}
            <Text style={styles.bold}>
              entorno en actividades importantes para la persona
            </Text>
            .
          </Text>
          <Text> </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('AsistenteSocial')}>
          <Text>{'Del asistente social a domicilio 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default SistemaCuidados;
