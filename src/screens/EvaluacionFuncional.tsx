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

const EvaluacionFuncional = () => {
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
      await AsyncStorage.setItem('@sEvaluacionFuncional', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sEvaluacionFuncional');
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
          onPress={() => navigate('AsistenteSocial')}>
          <Text>{'👈 Del asistente social a domicilio'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>
          ¿Qué hacer con la evaluación funcional?
        </Headline>
        <Headline> </Headline>
        <View style={styles.text}>
          <Text> </Text>
          <Text>
            Oferta de soluciones por servicios de Salud (MINSAP, Proyecto
            FortAM/Programa Nacional de Atención al Adulto Mayor/DMS Colón) que
            incluye{' '}
            <Text style={styles.bold}>Resolución 355 de 2018 del MINSAP</Text> y
            aporte de conocimientos mediante{' '}
            <Text style={styles.bold}>
              App Cuidándonos, Sitio Web CuidAM y Cartilla de la persona
              cuidadora
            </Text>
            , productos digitales e impresos, resultado de sinergias de trabajo
            entre{' '}
            <Text style={styles.italic}>
              proyecto PIES_PLAZA y proyecto FortAM unidos a JCCE
            </Text>
            .
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>
            Y soluciones según requisitos establecidos por Asistencia Social de
            la Dirección municipal de Trabajo y Seguridad Social (DMTSS).
          </Text>
          <Text> </Text>

          <Text>
            ➢ <Text style={styles.bold}>DMTSS Colón</Text> Teléfono de la
            Recepción: 45 31 2518.
          </Text>
          <Text>
            ➢ Pol "Francisco Figueroa" (Área de Salud Oeste){' '}
            <Text style={styles.bold}>CMF</Text> Desde el 1 hasta el 30.
            Teléfono Pizarra: 45 31 2732 y Extensión del Dpto. Trabajo Social:
            138.
          </Text>
          <Text>
            ➢ Pol "Carlos J. Finlay" (Área de Salud Este){' '}
            <Text style={styles.bold}>CMF</Text> Desde el 31 hasta el 62.
            Teléfono Pizarra: 45 31 2442 y Extensión del Dpto. Trabajo Social:
            133.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            Escala Geriátrica de Evaluación Funcional (EGEF) (Anexos 4 y 4a)
            Creada por el CITED
          </Text>
          <Text> </Text>
          <Text>
            Y ahora también se ofrece como herramienta de autoevaluación{' '}
            <Text style={styles.bold}>
              La App SharExam (dentro del paquete tecnológico FortAM/EPS en
              apoyo a la APS*) en sus diferentes versiones digitales creadas por
              el Proyecto FortAM** y JCCE***
            </Text>
            .
          </Text>
          <Text>* Atención Primaria de Salud.</Text>
          <Text>
            ** Fortalecimiento de capacidades locales en la prevención de la
            discapacidad del adulto mayor sobre todo en áreas rurales.
          </Text>
          <Text>*** Joven Club de Computación y Electrónica.</Text>
          <Text> </Text>
          <Text style={styles.bold}>Instrucciones:</Text>
          <Text> </Text>
          <Text style={styles.italic}>
            Defina el ítem por la respuesta del paciente, al que no coopera
            utilice la opinión del cuidador responsable. Ante la duda entre
            ítems, marque el inferior.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>I Continencia.</Text>
          <Text> </Text>
          <Text>5- Perfectamente continente.</Text>
          <Text>4- Ha perdido ocasionalmente el control de la micción. </Text>
          <Text>
            3- Incontinencia urinaria, con limitaciones en su vida diaria.
          </Text>
          <Text>
            2- Incontinencia urinaria impide realizar su vida diaria o le obliga
            al sondaje.{' '}
          </Text>
          <Text>
            1- Doble incontinencia (urinaria y fecal) con pérdida de autonomía.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            - <Text style={styles.italic}>Desde puntaje de 3 al 1</Text> ➢
            Evaluación por Médico y Enfermera de la Familia y remisión a:
            Clínico, Geriatra u otro especialista, si fuera necesario. Los
            mismos podrán entregar certificado diagnóstico médico y se
            inscribirán como persona incontinente (en condición de: postrada o
            encamada o que deambula) en el CMF y en departamento de Trabajo
            Social de su policlínico dándole así el derecho a recursos para la
            higiene (jabón, lona sanitaria, tela antiséptica, culeros
            desechables, cuando sea posible su entrega por MINCIN, MINSAP o el
            Gobierno), así como favorecer el control de su condición de salud
            mediante el seguimiento.{' '}
          </Text>
          <Text>
            {' '}
            - Podrá acceder a una prestación monetaria emergente tramitada por
            el trabajador social (DMTSS) si se evalúa que no posee solvencia
            económica para el pago de este beneficio (módulo para pacientes
            encamados o postrados).
          </Text>
          <Text>
            {' '}
            - Nota: La persona incontinente puede presentar una o doble
            incontinencia (-una del esfínter vesical ➢ urinaria- o –una del
            esfínter anal ➢ fecal-, o doble, de ambos esfínteres).
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ También desde el sector de la Salud se aportarán conocimientos
            generales a través de{' '}
            <Text style={styles.italic}>
              App Cuidándonos, Sitio Web CuidAM y Cartilla de la persona
              cuidadora
            </Text>
            , todos son resultados de sinergias de trabajo entre proyectos:
            PIES_PLAZA y FortAM unido a JCCE (todos esos productos se
            distribuirán a través de los servicios de Salud, de la DMTSS y de la
            Mochila de los JCCE)
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ Al Trabajador Social de la DMTSS se le solicitará algún otro
            recurso material que necesite y el servicio de Asistente Social a
            Domicilio (ASD=Persona Cuidadora). Le será/n otorgado/s si reúne los
            requisitos.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>II Movilidad.</Text>
          <Text> </Text>
          <Text>
            5- Se moviliza sin limitaciones, tanto fuera como dentro del hogar.
          </Text>
          <Text>
            4- Alguna limitación en la movilidad en particular con el transporte
            público.
          </Text>
          <Text>
            3- Dificultades en la movilidad que limitan satisfacer su vida
            diaria.
          </Text>
          <Text>2- Depende para movilizarse de la ayuda de otra persona.</Text>
          <Text>
            1- Se encuentra totalmente confinado a la cama o al sillón.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            - <Text style={styles.italic}>Desde puntaje de 3 al 1</Text> ➢
            Evaluación por Médico y Enfermera de la Familia y remisión a:
            Clínico, Geriatra, Fisiatra, Podólogo u otro especialista si fuera
            necesario. Los médicos podrán entregar: Receta médica o Certificado
            médico para comprar la ayuda técnica que necesite (Calzado
            ortopédico, prótesis de miembro, Bastón de un punto de apoyo o más,
            Muleta o bastón con apoyo de antebrazo, Andador, Silla de ruedas,
            Cama Fowler, Colchón antiescara y otros: incluye espejuelos, lupa,
            cuñas, patos, cojín de Kelly, etc.). Su seguimiento se realizará
            según el grupo de dispensarización que corresponda en la APS.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ Al Trabajador Social de la DMTSS se le solicitará algún otro
            recurso monetario que necesite para el transporte, mejorar la
            iluminación, eliminar barreras arquitectónicas o para adquirir
            alguna ayuda técnica, así como solicitud de servicio de ASD (persona
            cuidadora), la tramitación del servicio de atención a la familia
            (SAF) y de mensajería de los principales servicios de la comunidad.
            Le será/n otorgado/s si reúne los requisitos.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>III Equilibrio.</Text>
          <Text> </Text>
          <Text>5- No refiere trastorno del equilibrio.</Text>
          <Text>
            4- Refiere trastorno del equilibrio, pero no afecta su vida diaria.
          </Text>
          <Text>
            3- Trastorno del equilibrio, con caídas y limitación de la
            autonomía.
          </Text>
          <Text>
            2-Trastornos del equilibrio lo hacen dependiente de ayuda en su vida
            diaria.
          </Text>
          <Text>
            1- La falta de equilibrio lo mantienen totalmente incapacitado.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            - <Text style={styles.italic}>Desde puntaje de 3 al 1</Text> ➢
            Evaluación por Médico y Enfermera de la Familia y remisión a:
            Clínico, Geriatra, Fisiatra, Podólogo u otro especialista si fuera
            necesario. Los médicos podrán entregar: Receta médica o Certificado
            médico para comprar la ayuda técnica que necesite (Calzado
            ortopédico, prótesis de miembro, Bastón de un punto de apoyo o más,
            Muleta o bastón con apoyo de antebrazo, Andador, Silla de ruedas y
            otros: Incluye espejuelos, lupa y otros, así como necesidad de
            tratamiento para enfermedades del oído o prótesis auditiva). Su
            seguimiento se realizará según el grupo de dispensarización que
            corresponda.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ Al Trabajador Social de la DMTSS se le solicitará algún otro
            recurso monetario que necesite para el transporte, mejorar la
            iluminación, eliminar barreras arquitectónicas o para adquirir
            alguna ayuda técnica, así como solicitud de servicio de ASD (persona
            cuidadora, la tramitación del servicio de atención a la familia
            (SAF) y de mensajería de los principales servicios de la comunidad,
            que le será/n otorgado/s si reúne los requisitos.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>IV Visión.</Text>
          <Text> </Text>
          <Text>5- Tiene visión normal (aunque para ello usa lentes).</Text>
          <Text>
            4- Refiere dificultad para ver, pero esto no limita en su vida
            cotidiana.
          </Text>
          <Text>
            3- Dificultad para ver, que limita sus actividades cotidianas.
          </Text>
          <Text>
            2- Problemas de la visión, lo obligan a depender de otras personas.
          </Text>
          <Text>
            1- Ciego o totalmente incapacitado por la falta de visión.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            - <Text style={styles.italic}>Desde puntaje de 3 al 1</Text> ➢
            Evaluación por Médico y Enfermera de la Familia y remisión al
            Oftalmólogo, Clínico, Geriatra, u otro especialista si fuera
            necesario. Los médicos podrán entregar: Receta médica o Certificado
            médico tratamiento farmacológico o para la ayuda técnica que
            necesite (Espejuelos, Lentes de contacto, Lentes intraoculares,
            bastón para ciego, otros) y orientar la utilización de lupa. Su
            seguimiento se realizará según el grupo de dispensarización que
            corresponda.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ Al Trabajador Social de la DMTSS se le solicitará algún otro
            recurso monetario que necesite para el transporte, mejorar la
            iluminación, eliminar barreras arquitectónicas o para adquirir
            alguna ayuda técnica, así como solicitud de servicio de ASD (persona
            cuidadora), la tramitación del servicio de atención a la familia
            (SAF) y de mensajería de los principales servicios de la comunidad.
            Y le será/n otorgado/s si reúne los requisitos.{' '}
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>V Audición.</Text>
          <Text> </Text>
          <Text>
            5- Tiene audición normal (aunque para ello use prótesis auditiva.)
          </Text>
          <Text>
            4- Refiere dificultad para oír, pero esto no repercute en su vida
            diaria.
          </Text>
          <Text>
            3- Evidente dificultad para oír, con repercusión en su vida diaria.
          </Text>
          <Text>
            2- Severos problemas de audición, que le limitan la comunicación.
          </Text>
          <Text>1- Sordo o aislado por la falta de audición.</Text>
          <Text> </Text>
          <Text>
            {' '}
            - <Text style={styles.italic}>Desde puntaje de 4 al 1</Text> ➢
            Evaluación por Médico y Enfermera de la Familia y remisión a:
            Otorrinolaringólogo (ORL), Clínico, Geriatra u otro especialista si
            fuera necesario. Los médicos podrán entregar: Receta médica o
            Certificado médico para tratamiento farmacológico o para ayuda
            técnica que necesite (Lavado de oído, Tratamiento de enfermedad
            aguda o crónica del oído, Prótesis auditiva, además: Disminuir la
            distancia al hablarle y hacerlo cerca del oído que mejor escuche,
            enseñarles el lenguaje de señas o a leer los labios, ofrecerle lápiz
            y papel para facilitar la comunicación). Su seguimiento se realizará
            según el grupo de dispensarización que corresponda.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ Al Trabajador Social de la DMTSS se le solicitará algún otro
            recurso monetario que necesite para el transporte, eliminar barreras
            en la comunicación o para que pueda adquirir alguna ayuda técnica,
            en este caso: la prótesis auditiva, así como solicitud de servicio
            de ASD (persona cuidadora), la tramitación del servicio de atención
            a la familia (SAF) y de mensajería de los principales servicios de
            la comunidad; y le será/n otorgado/s si reúne los requisitos.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}> VI Uso de Medicamentos.</Text>
          <Text> </Text>
          <Text>
            5- Sin medicamentos, (no incluyen vitaminas ni productos naturales).
          </Text>
          <Text>4- Usa menos de tres de forma habitual.</Text>
          <Text>
            3- Usa de 3 a 5 por más de un mes o indicados por varios médicos.
          </Text>
          <Text>2- Usa más de 6 medicamentos.</Text>
          <Text>
            1- Se automedica o no lleva control de los medicamentos que toma.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            - <Text style={styles.italic}>Desde puntaje de 3 al 1</Text> ➢
            Evaluación por Médico y Enfermera de la Familia y remisión a:
            Geriatra de conjunto con el/los especialista/s que sea/n
            necesario/s. Orientación y organización del uso de sus medicamentos,
            según las necesidades por el estado de salud biológico y
            psicológico, fundamentalmente por su médico de familia en el CMF o
            en conjunto con Geriatra en el policlínico. Las personas podrán usar
            ayuda técnica que necesite como ejemplo: dispensador de medicamento
            en diversos formatos -como producto físico (de cualquier y material,
            con gusto estético o práctico en su formato)- o -en formato digital
            a través de App destinadas para este fin y que logren la
            optimización del uso de las alarmas de la telefonía móvil- y que
            alcancen ser productos con diseño para todos, es decir, inclusivos.
            Su seguimiento se realizará según el grupo de dispensarización que
            corresponda y podrá acudir al departamento de Trabajo Social de su
            policlínico si le fuera necesario obtener medicamentos exentos de
            pago por única vez o de forma temporal.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ Al Trabajador Social de la DMTSS se le solicitará alguna
            prestación monetaria o algún otro recurso material que necesite que
            apoye al cumplimiento del tratamiento indicado. Podrá solicitar
            también servicio de ASD (persona cuidadora), la tramitación del
            servicio de atención a la familia (SAF) y de mensajería de los
            principales servicios de la comunidad. Las diferentes solicitudes se
            analizan y se les otorga si reúne los requisitos, según corresponda.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>VII Sueño.</Text>
          <Text> </Text>
          <Text>5- No refiere trastornos del sueño.</Text>
          <Text>
            4- Trastornos ocasionales del sueño, no tiene necesidad de
            somníferos.
          </Text>
          <Text>
            3- Debe usar somníferos para lograr un sueño que lo satisfaga.
          </Text>
          <Text>
            2- Pese al uso de psicofármacos mantiene trastornos del sueño.
          </Text>
          <Text>
            1- Trastornos severos del sueño que le impiden realizar su vida
            diaria.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            - <Text style={styles.italic}>Desde puntaje de 3 al 1</Text> ➢
            Evaluación por Médico y Enfermera de la Familia y remisión a:
            Geriatra, Psicólogo, Psiquiatra de conjunto con el especialista que
            sea necesario. Los médicos orientarán, prescribirán u organizarán el
            uso de los medicamentos, según las necesidades para lograr un sueño
            satisfactorio. Podrán Indicar medicina verde o alternativa, así como
            bebidas calientes: como las infusiones y la leche, para lograr el
            sueño. Podrá usar como ayuda técnica: el dispensador de medicamento
            en cualquier formato (anteriormente explicado en la descripción de
            solución del ítem Vl) si presenta olvidos para recordar los
            horarios, por ejemplo. Su seguimiento se realizará según el grupo de
            dispensarización que corresponda y podrá acudir al departamento de
            Trabajo Social de su policlínico si necesitara obtener medicamentos
            exentos de pago por única vez o de forma temporal.{' '}
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ Al Trabajador Social de la DMTSS se le solicitará alguna
            prestación monetaria o algún otro recurso material que necesite y
            servicio de ASD (persona cuidadora); y se le otorgará si reúne los
            requisitos.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>VIII Estado Emocional</Text>
          <Text> </Text>
          <Text>5- Se mantiene usualmente con buen estado de ánimo.</Text>
          <Text>
            4- Trastornos emocionales que supera sin la ayuda profesional.
          </Text>
          <Text>
            3- Trastornos emocionales le obligan al uso de tratamiento.
          </Text>
          <Text>
            2- Mantienen trastornos emocionales que lo limitan, aún con
            tratamiento.
          </Text>
          <Text>
            1- Los trastornos emocionales lo incapacitan, intento o idea
            suicida. (Es una urgencia psiquiátrica).
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            - <Text style={styles.italic}>Desde puntaje de 3 al 1</Text> ➢
            Evaluación por Médico y Enfermera de la Familia y remisión a:
            Geriatra, Psicólogo, Psiquiatra de conjunto con el especialista que
            sea necesario. Los médicos orientarán, prescribirán u organizarán el
            uso de los medicamentos, según las necesidades para lograr el
            equilibrio del estado emocional. Podrán indicar medicina natural y
            tradicional (MNT) o alternativa u otras actividades (ejercicios
            aeróbicos o terapéuticos, universidad del adulto mayor (UAM),
            incorporación a proyectos de socialización, realización de trabajos
            socialmente útiles, entre otros) a favor del bienestar. Podrá usar
            ayuda técnica como, por ejemplo: el dispensador de medicamento en
            cualquier formato (anteriormente explicado en la descripción de
            solución del ítem Vl) si presenta olvidos para recordar los
            horarios. Su seguimiento se realizará según el grupo de
            dispensarización que corresponda y podrá acudirá al departamento de
            Trabajo Social de su policlínico si necesitara obtener medicamentos
            exentos de pago por única vez o de forma temporal.{' '}
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ Al Trabajador Social de la DMTSS se le solicitará alguna
            prestación monetaria o algún otro recurso material que necesite y
            servicio de ASD y se le otorgará si reúne los requisitos.
          </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text> </Text>
          <Text>
            ➢ Apoyo o mantenimiento de hábitos higiénicos y su capacidad
            funcional.
          </Text>
          <Text>➢ Elaboración de alimentos.</Text>
          <Text>➢ Mantenimiento de la higiene del hogar.</Text>
          <Text>
            ➢ Movilización y desplazamiento de la persona.Administración de
            medicamentos orales, previa prescripción médica.
          </Text>
          <Text>➢ Acompañamiento dentro o fuera del domicilio.</Text>
          <Text>
            ➢ Realización de gestiones que el beneficiario no puede hacer por sí
            mismo.
          </Text>
          <Text>
            ➢ Promueve acceso a los servicios sociales, visitas, consultas
            médicas, entre otras.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>¿Cómo se clasifica el servicio?</Text>
          <Text> </Text>
          <Text>
            De acuerdo con el nivel de necesidad de los servicios, se establecen
            dos categorías:
          </Text>
          <Text> </Text>
          <Text>
            <Text style={styles.italic}>Categoría I</Text>: Comprende a las
            personas con un elevado nivel de dependencia funcional para la
            realización de actividades normales y recurrentes de la vida
            cotidiana, lo cual requiere asistencia constante y para todas las
            actividades, que puede cubrir un período de no menos de 4 y hasta 8
            horas de trabajo.
          </Text>
          <Text> </Text>
          <Text>
            <Text style={styles.italic}>Categoría II</Text>: Comprende a las
            personas cuyo nivel de capacidad funcional le permite una
            realización parcial de las actividades normales y recurrentes de la
            vida cotidiana, por lo cual la asistencia requerida no necesita un
            apoyo completo no constante para estas actividades, las cuales
            podrían cubrirse en un período de no menos de 3 y hasta 4 horas de
            trabajo.
          </Text>
          <Text> </Text>
          <Text>
            El servicio de asistente social a domicilio está destinado
            principalmente a los adultos mayores que viven solos y que no
            cuentan con familiares obligados en condiciones de prestarles ayuda
            y requieren del cuidado de otras personas para las actividades
            cotidianas dentro y fuera del hogar, es solo una de las líneas de
            atención que se definen por constituir el adulto mayor una figura
            dentro de las prioridades de atención del trabajo social. Las
            situaciones de vulnerabilidad que puedan presentar tienen un enfoque
            multisectorial para su transformación en las evaluaciones de los
            grupos de prevención a nivel de comunidades. Donde se analizan la
            confluencia o no de las diferentes problemáticas:
          </Text>
          <Text> </Text>
          <Text>➢ Dependientes.</Text>
          <Text>➢ Viviendo solo.</Text>
          <Text>➢ Necesidades básicas no cubiertas.</Text>
          <Text>➢ Necesidad de atención especializada.</Text>
          <Text>➢ Víctimas de maltrato.</Text>
          <Text>➢ Desatendidos familiarmente.</Text>
          <Text>➢ Conducta deambulantes.</Text>
          <Text>➢ Alcohólicos.</Text>
          <Text> </Text>
          <Text style={styles.bold}>
            El bienestar de la persona cuidadora depende de:
          </Text>
          <Text>• La salud de la persona cuidadora.</Text>
          <Text>• La ayuda que recibe de otros familiares.</Text>
          <Text>• La ayuda que recibe de otras instituciones.</Text>
          <Text>
            • Apoyo emocional, agradecimiento y reconocimiento de otros
            familiares.
          </Text>
          <Text>
            • La información que tiene sobre cómo cuidar y resolver problemas de
            cuidado.
          </Text>
          <Text>
            • Capacidad para actuar frente a comportamientos difíciles
            (agitación, enfados, depresión, etc.).
          </Text>
          <Text>
            • Su forma de enfrentarse a la situación de cuidado y superar
            situaciones difíciles.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            Importancia de la comunicación en el cuidado del adulto mayor
          </Text>
          <Text> </Text>
          <Text>
            Existen una serie de factores que pueden entorpecer o limitar la
            comunicación con una persona anciana, algunos de ellos son:
          </Text>
          <Text> </Text>
          <Text>
            1. Los déficits en la audición y visión frecuentes en estas
            personas.
          </Text>
          <Text>
            2. La poca atención a los ancianos por la dedicación de la familia a
            múltiples tareas cotidianas.
          </Text>
          <Text>3. La diferencia intergeneracional de gustos e intereses.</Text>
          <Text>
            4. La presencia de trastornos de conducta en el anciano como
            agresividad, irritabilidad, etc. que provocan el alejamiento de los
            familiares y la persona cuidadora.
          </Text>
          <Text>
            5. La presencia de trastornos depresivos que provocan rechazo al
            contacto con las personas o aislamiento.
          </Text>
          <Text>
            6. Las dificultades que pueden tener los ancianos en la comprensión
            o en la fluidez del lenguaje debido a alguna afección del Sistema
            Nervioso.
          </Text>
          <Text>
            7. La sensación del anciano de que se burlan de él o de que dice las
            cosas mal provoca que no se comunique con los demás
          </Text>
          <Text> </Text>
          <Text>
            Con una comunicación adecuada se puede lograr un mejor manejo de los
            hábitos de vida del anciano y un cuidado con mayor calidad. Mantener
            una comunicación adecuada significa llevar a cabo las siguientes
            orientaciones:
          </Text>
          <Text> </Text>
          <Text>1. Escuchar pacientemente al anciano.</Text>
          <Text>
            2. Utilizar palabras y gestos que le brinden seguridad y confianza.
          </Text>
          <Text>
            3. Utilizar música suave y agradable con melodías favoritas del
            anciano.
          </Text>
          <Text>
            4. Mostrar fotografías de familiares y amigos, así como revistas,
            láminas atractivas que faciliten la expresión del anciano.
          </Text>
          <Text>
            5. Facilitar la relación del anciano con los niños y con animales
            domésticos.
          </Text>
          <Text>
            6. Utilizar el lenguaje extraverbal: sonreír, contacto físico,
            miradas, etc.
          </Text>
          <Text>7. No juzgar al anciano, no criticarlo.</Text>
          <Text>8. Aceptar la respuesta NO del anciano.</Text>
          <Text>9. Utilizar expresiones como: por favor, gracias.</Text>
          <Text>10. Hablar con serenidad, sin herir.</Text>
          <Text>
            11. No apresurarlo o interrumpirlo antes de que haya terminado de
            hablar respetando sus puntos de vista.
          </Text>
          <Text>
            12. Conversar con él mientras se satisfacen sus necesidades.
          </Text>
          <Text> </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('EvaluacionFuncional')}>
          <Text>{'¿Qué hacer con la evaluación funcional? 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default EvaluacionFuncional;
