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
          <Text style={styles.bold}>IX Memoria</Text>
          <Text> </Text>
          <Text>5- Buena memoria. Niega trastornos de la misma.</Text>
          <Text>
            4- Refiere problemas de memoria, pro estos no limitan su vida
            diaria.
          </Text>
          <Text>
            3- Trastornos de memoria, que lo limitan para actividades de su vida
            diaria.
          </Text>
          <Text>
            2- Trastornos de la memoria que lo obligan a ser dependientes una
            parte del tiempo.
          </Text>
          <Text>
            1- La pérdida de memoria lo mantiene incapacitado y dependiente
            total.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            - <Text style={styles.italic}>Desde puntaje de 4 al 1</Text> ➢
            Evaluación por Médico y Enfermera de la Familia y remisión a la
            Consulta de Memoria o a: Geriatra, Clínico, Psicólogo, Psiquiatra,
            Neurólogo, Fisiatra, Endocrinólogo, Epidemiólogo de conjunto con
            otros especialistas que sean necesarios.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ <Text style={styles.italic}>Puntaje del 4 al 2</Text>: Orientación
            y tratamiento fundamentalmente por su médico de familia en el CMF y
            Geriatra que trabajarán con soporte de un equipo multidisciplinario
            e interdisciplinario, según corresponda. El tratamiento
            farmacológico y por MNT, y otras alternativas se utilizarán
            debidamente según las necesidades del adulto mayor. La
            rehabilitación cognitiva (mejorar o mantener la memoria) será el
            objetivo primario, sin dejar de atender otros síntomas que se puedan
            manifestar. Dicha rehabilitación cognitiva se realizará en forma de
            Talleres de Memoria (comunitarios o institucionales) o como
            Rehabilitación cognitiva a través de computadora (con el software
            GRADIOR de la Fundación INTRAS de España) en la casa de abuelos para
            discapacidad cognitiva (CEGER) o en el área de salud que se decida.{' '}
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ <Text style={styles.italic}>Puntaje 1</Text>: Se darán
            orientaciones a la familia o a la persona cuidadora. Su seguimiento
            se realizará según el grupo de dispensarización que corresponda y
            podrá acudir al departamento de Trabajo Social de su policlínico si
            necesitara obtener medicamentos exentos de pago por única vez o de
            forma temporal. La persona cuidadora podrá solicitar su matrícula en
            la Escuela de Cuidadores si lo necesitara o si va a optar por
            aspirar a ser cuidador remunerado.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ Al Trabajador Social de la DMTSS se le solicitará alguna
            prestación monetaria o algún otro recurso material que necesite y
            servicio de ASD (persona cuidadora), la tramitación del servicio de
            atención a la familia (SAF) y de mensajería de los principales
            servicios de la comunidad. Las diferentes necesidades se evaluarán y
            se le otorgará si reúne los requisitos.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>X Apoyo Familiar</Text>
          <Text> </Text>
          <Text>
            5- Cuenta con todo el apoyo familiar que demandan sus necesidades.
          </Text>
          <Text>
            4- Existe apoyo familiar, pero puede tener limitaciones en
            ocasiones.
          </Text>
          <Text>
            3- Apoyo familiar restringido a cuando el anciano tiene situación de
            crisis.
          </Text>
          <Text>
            2- Apoyo familiar inseguro incluso en momentos de crisis para el
            anciano.
          </Text>
          <Text>1- Ausencia o abandono familiar total.</Text>
          <Text> </Text>
          <Text style={styles.bold}>XI Apoyo Social.</Text>
          <Text> </Text>
          <Text>
            5- Apoyo total e irrestricto por parte de los vecinos y amigos.
          </Text>
          <Text>
            4- Cuenta con apoyo de vecinos y amigos, pero este es limitado.
          </Text>
          <Text>
            3- Apoyo de vecinos y amigos se restringe a momentos de crisis.
          </Text>
          <Text>
            2- Apoyo de vecinos y amigos inseguro aún en momentos de crisis.
          </Text>
          <Text>
            1- Aislado. Ausencia total de apoyo por parte de vecinos y amigos.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>XII Situación económica</Text>
          <Text> </Text>
          <Text>
            5- Cubre todas sus necesidades económicas con ingresos propios.
          </Text>
          <Text>
            4- Cubre todas sus necesidades, pero lo logra con ayuda de otros.
          </Text>
          <Text>
            3- Cubre solo sus necesidades básicas, aún con la ayuda de otros.
          </Text>
          <Text>
            2- Tiene dificultades para cubrir todas sus necesidades básicas.
          </Text>
          <Text>1- Depende económicamente de la asistencia social.</Text>
          <Text> </Text>
          <Text style={styles.italic}>
            Acciones comunes para los casos X, XI y XII.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            - <Text style={styles.italic}>Desde puntaje de 4 al 1</Text> ➢
            Evaluación por Médico y Enfermera de la Familia y remisión a:
            Trabajador Social, Geriatra, Psicólogo, Psiquiatra, de conjunto con
            otros especialistas que sean necesarios.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ Puntaje del 3 al 1 Orientación fundamentalmente por su médico de
            familia en el CMF de conjunto con el Trabajador Social y el
            Psicólogo, de su Grupo Básico de Trabajo del área de salud a la que
            pertenece, sobre su posible incorporación a grupos sociales de la
            comunidad (Ejemplos: Grupos de autoayuda, Círculos de Abuelos,
            Grupos de Orientación y Recreación, incorporación a Proyectos de
            Socialización liderados por adultos mayores y otras personas de la
            comunidad con motivación por el tema del envejecimiento, Universidad
            del Adulto Mayor y otros) u otros servicios como: Servicios de
            Respiro o Incorporación a una institución social.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ El médico de familia de su CMF le entregará resumen de historia
            clínica y se remitirá al departamento de Trabajo Social de su
            policlínico para su inscripción y apertura de expediente social y
            poder solicitar servicios de instituciones sociales con régimen
            seminterno (Casa de abuelos) o con régimen interno (Hogar de
            ancianos); se orientará consulta de Geriatría para su evaluación
            integral. Además, se necesita de la valoración por Psicología y por
            Psiquiatría para determinar si está apto el adulto mayor apto para
            vivir en colectividad en caso de solicitud de ingreso en hogar de
            ancianos. La valoración por otros especialistas se realizará según
            sea necesario.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ El Trabajador Social de su área de salud, una vez inscrita la
            persona adulta mayor que solicita por escrito servicio de alguna
            institución social, conformará el expediente: para solicitar a la
            Dirección Municipal de Salud la incorporación del adulto mayor a la
            Casa de Abuelos o para solicitar a la Dirección Provincial de Salud
            la incorporación al Hogar de Ancianos, según corresponda.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ Al Trabajador Social de la DMTSS se le solicitará la tramitación
            de prestación monetaria si necesitara ayuda el adulto mayor para
            efectuar el pago del servicio por su incorporación a instituciones
            sociales o algún otro recurso material que necesite y servicio de
            ASD (persona cuidadora). Y se le otorgará si reúne los requisitos.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ También se ofrecerán oportunidades de empleo para mejorar la
            solvencia económica a los adultos mayores que lo soliciten y siempre
            que exista la necesidad de recursos humanos y que le adulto mayor
            pueda responder por la actividad laboral a realizar. Y se le
            otorgará el o los recursos si cumple con los requisitos.
          </Text>
          <Text> </Text>
          <Text>
            <Text style={styles.bold}>Nota</Text>: Es válido conocer de forma
            general que se priorizan a los adultos mayores solos (1 solo, 2
            solos, 3 solos…. o aquel que convive con un menor o un discapacitado
            o paciente psiquiátrico o un alcohólico), o que tenga edad de 80
            años y más con algún tipo de alteración que atente contra su salud.
          </Text>
          <Text> </Text>
          <Text>
            <Text style={styles.bold}>Recordar</Text>: Que el envejecimiento es
            un tema que necesita del accionar de todos los sectores de la
            sociedad en alguna medida. Por lo tanto, la intersectorialidad en el
            medio local ha mostrado aportar beneficios a las personas adultas
            mayores.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>Estado Funcional Global.</Text>
          <Text> </Text>
          <Text>
            5- Es totalmente independiente y activo en su vida diaria.
          </Text>
          <Text>
            4- Es independiente, pero necesita de ayuda no diaria para alguna
            AIVD.
          </Text>
          <Text>
            3- Tiene limitaciones que exigen ayuda diaria, pero puede pasar un
            día solo.
          </Text>
          <Text>
            2- Tiene limitaciones que impiden que permanezca más de 8 horas
            sólo.
          </Text>
          <Text>
            1- Está totalmente incapacitado y exige custodia permanente.{' '}
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            - <Text style={styles.italic}>Desde puntaje de 3 al 1</Text> ➢
            Evaluación por Médico y Enfermera de la Familia y remisión al
            Geriatra, Psicólogo, Psiquiatra, de conjunto con otros especialistas
            que sean necesarios.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ <Text style={styles.italic}>Puntaje 2 y 1</Text> El médico de
            familia en el CMF le entregará certificado diagnóstico al adulto
            mayor o a su representante de su estado funcional en relación al
            nivel de dependencia para realizar las Actividades de la Vida Diaria
            (AVD) (AVDB: Básicas y AVDI: Instrumentadas) como encamado o
            postrado y si presenta deterioro cognitivo se evaluará según lo
            descrito en el ítem lX. Y se remitirá al departamento de Trabajo
            Social de su policlínico para su inscripción como persona postrada.
            Además, podrá solicitar los servicios de Asistente Social a
            Domicilio (ASD=Persona Cuidadora) y se confeccionará informe social
            y se le orientará dirigir la solicitud al:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ Al Trabajador Social de la DMTSS al que se le solicitará el
            servicio de ASD (persona cuidadora), y se le comunicará si procede o
            no en función de reunir los requisitos,
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ Se tramitará por el trabajador social de DMTSS los servicios (ASD
            y SAF) y prestaciones (monetarias y en especies) que le correspondan
            según la evaluación requerida.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            ➢ La evaluación integral por los distintos factores del grupo de
            prevención y atención social a nivel de consejo popular amplia las
            ofertas de soluciones, dentro de las que destacan:
          </Text>
          <Text>
            {' '}
            • La incorporación a proyectos, grupos y otros con distintos fines
            (deportivos, culturales, artesanales etc.)
          </Text>
          <Text>
            {' '}
            • La tramitación de otros servicios y prestaciones (subsidios para
            la reparación de sus viviendas, asesoría legal y otras).
          </Text>
          <Text> </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('EnfermaDependiente')}>
          <Text>{'Necesidades de la persona enferma dependiente 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default EvaluacionFuncional;
