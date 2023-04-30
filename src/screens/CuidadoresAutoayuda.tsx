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

const CuidadoresAutoayuda = () => {
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
      await AsyncStorage.setItem('@sCuidadoresAutoayuda', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sCuidadoresAutoayuda');
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
          onPress={() => navigate('AutonomiaPersonal')}>
          <Text>{'👈 Promoción de la autonomía personal'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>
          Recomendaciones para los cuidadores y la autoayuda
        </Headline>
        <Headline> </Headline>
        <View style={styles.text}>
          <Text> </Text>
          <Text>
            Tu propia persona es el mayor instrumento del cuidado que realizas,
            debes por tanto cuidarlo y mantenerlo en buena forma donde se
            incorporan acciones de autoayuda de manera individual o en grupos.
            Para comenzar se ofrece el siguiente decálogo de consejos y
            recomendaciones:
          </Text>
          <Text> </Text>
          <Text>
            1. Hacer una lista de personas que me puedan cuidar y de las que
            pueda recibir energía, distracción, cariño, apoyo, humor... (no hace
            falta un gran número).
          </Text>
          <Text>
            2. Dedicar dos períodos de diez minutos a lo largo del día a hacer
            respiraciones y estiramientos sencillos, sobre todo si las personas
            dependientes exigen esfuerzo corporal.
          </Text>
          <Text>
            3. Buscar espacios de ocio a lo largo de la semana, aunque sean
            cortos. Puede ser beneficioso un paseo de treinta minutos, un café
            con familiar o amistad, ver una película, resolver un pasatiempo,
            etc.
          </Text>
          <Text>
            4. Alternar el rol de cuidador con otros roles a lo largo de la
            semana. Es decir, también ejercer de persona trabajadora, hija,
            amiga, vecina...
          </Text>
          <Text>
            5. No suprimir totalmente las vacaciones anuales. Aún en las
            situaciones más complejas hay que disfrutar al menos de una semana,
            o varios fines de semana espaciados, o de un puente. (Son ya varias
            las administraciones que ofrecen servicios llamados de «respiro» al
            cuidador/a, para atender a las personas en situación de dependencia
            en determinados momentos, días...).
          </Text>
          <Text>
            6. Planificar de vez en cuando un viaje, aunque sea corto. El
            contacto con la Naturaleza puede ser muy saludable. Hay que darse de
            vez en cuando un respiro.
          </Text>
          <Text>
            7. Cultivar la espiritualidad. A algunas personas les da fuerza su
            religión si es creyente, a otras puede servirles escuchar música, la
            lectura de un libro o contemplar una puesta de sol...Cada uno debe
            practicar aquello que le ayuda a conectar con su yo más profundo y
            le da paz y serenidad.
          </Text>
          <Text>
            8. Informarse y utilizar todos los recursos que existen para la
            situación específica de la dependencia que se está atendiendo.
          </Text>
          <Text>
            9. Acudir a un profesional y solicitar su ayuda ante situaciones de
            bloqueo, fatiga o falta de alternativas, que se prolonguen más de un
            mes.
          </Text>
          <Text>
            10. Animar y colaborar en el establecimiento de grupos de autoayuda
            en mi entorno próximo a partir de conocimientos y tecnologías
            adquiridas.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>¿Qué son los grupos de autoayuda?</Text>
          <Text> </Text>
          <Text>
            Un grupo de autoayuda es un foro en donde los individuos que
            comparten un problema o situación similar, ventilan emociones y
            sentimientos, intercambian experiencias y se brindan apoyo mutuo. A
            la persona directamente afectada, le brinda la oportunidad de
            compartir los sentimientos, problemas, ideas e información con otros
            individuos que están pasando por la misma experiencia. Los ayuda a
            tomar conciencia de su problema, atender sus propias necesidades y
            comenzar a cuidarse a sí mismos. También les proporciona la
            satisfacción que resulta de compartir y ayudar a otros, y descubrir
            que no se está solo. El grupo de autoayuda para los familiares,
            amigos o vecinos, es una reunión de personas que cuidan a un
            familiar de cualquier edad que presenta alguna discapacidad, reto o
            enfermedad.
          </Text>
          <Text> </Text>
          <Text>
            El propósito de este grupo es el de proporcionar apoyo a sus
            integrantes y de esta manera permitirles sobrellevar mejor la
            situación que les aqueja a través de:
          </Text>
          <Text> </Text>
          <Text> • Compartir sus sentimientos y experiencias.</Text>
          <Text>
            {' '}
            • Aprender más acerca de la discapacidad, reto o enfermedad y el
            cuidado que implica este problema o circunstancia, ofreciéndole al
            individuo la oportunidad de hablar sobre los problemas que le
            afectan o las decisiones que tiene que tomar.
          </Text>
          <Text>
            {' '}
            • Escuchar a otros para compartir sentimientos y experiencias
            similares.
          </Text>
          <Text>
            {' '}
            • Ayudar a otros, intercambiar ideas, información y brindar apoyo.
          </Text>
          <Text> • Aprender a resolver problemas.</Text>
          <Text>
            {' '}
            • Ofrecer al cuidador un descanso y una oportunidad de salir de la
            casa.
          </Text>
          <Text>
            {' '}
            • Fomentar en los familiares el cuidado personal, salvaguardando así
            su salud y bienestar.
          </Text>
          <Text>
            {' '}
            • Saber que no son los únicos y por lo tanto que no están solos.
          </Text>
          <Text> </Text>
          <Text>
            Un grupo de autoayuda no puede resolver todos los problemas, ni
            puede reemplazar los servicios de los profesionales de la salud. Es
            importante recordar que un grupo de autoayuda no siempre es útil
            para algunas personas pues se sienten incómodas compartiendo sus
            sentimientos personales con los demás. También es importante saber
            que los grupos de autoayuda no son grupos de psicoterapia y suelen
            funcionar sin una orientación profesional. Hay personas que tienen
            la necesidad especial de recurrir a una psicoterapia individual o
            grupal, de preferencia con un profesional que conozca la
            discapacidad, reto o enfermedad de manera profunda y para lo cual se
            recomienda pedir ayuda de profesionales de la salud según
            corresponda.
          </Text>
          <Text> </Text>
          <Text>
            Independientemente de que tú seas la persona afectada o el familiar
            de una persona, el grupo de autoayuda te permite:
          </Text>
          <Text> </Text>
          <Text> • Ventilar frustraciones.</Text>
          <Text>
            {' '}
            • Intercambiar técnicas para cuidar y resolver problemas.
          </Text>
          <Text> • Aprender a verbalizar y a pedir ayuda.</Text>
          <Text>
            {' '}
            • Aprender más sobre la discapacidad, reto o enfermedad, a partir de
            la experiencia personal, la espontaneidad, la intuición y el sentido
            común, entendido éste como la capacidad para resolver problemas.
          </Text>
          <Text> • Descubrir los recursos personales.</Text>
          <Text>
            {' '}
            • Mantener o incrementar los sentimientos de autoestima que permiten
            tener más control sobre la propia vida.
          </Text>
          <Text> • El desarrollo de actitudes nuevas y más positivas.</Text>
          <Text> • El poder encontrar nuevas relaciones.</Text>
          <Text> • Sentirse menos desvalidos.</Text>
          <Text> • Dar y recibir apoyo mutuo.</Text>
          <Text>
            {' '}
            • Contar con un espacio de franqueza y confidencialidad, en donde
            uno puede expresarse con libertad absoluta sin ser juzgado ni
            criticado.
          </Text>
          <Text>
            {' '}
            • Encontrar esperanza al ver que otros han podido con la difícil
            tarea de salir adelante.
          </Text>
          <Text> • Reforzar el valor y el apoyo moral.</Text>
          <Text> • Comprender mejor la propia experiencia.</Text>
          <Text> </Text>
          <Text>Se clasifican como:</Text>
          <Text> </Text>
          <Text>
            {' '}
            • Abiertos: existen mientras haya grupo. Si la asistencia se
            mantiene el grupo existirá.
          </Text>
          <Text>
            {' '}
            • Cerrados: con límite temporal, pueden reunirse una vez a la semana
            durante 8-10 semanas, principalmente con fines educativos.
          </Text>
          <Text>
            {' '}
            • Mixtos: en donde participan hombres y mujeres de todas las edades.
          </Text>
          <Text>
            {' '}
            • Específicos: exclusivamente para hombres o mujeres, cónyuges,
            hijos adultos, hijos adolescentes, nietos, familiares de pacientes
            jóvenes, familiares de personas en etapas iniciales de la
            enfermedad, deudos (familiares de alguien que ya murió o que acaba
            de morir) y sobrevivientes (familiares de alguien que murió hace
            tiempo, en el lapso de dos años), para personas recién
            diagnosticadas en fases iniciales de alguna enfermedad, para padres
            de hijos con discapacidad y para hermanos de personas con
            discapacidad.
          </Text>
          <Text> </Text>
          <Text>
            La presencia de la discapacidad es un evento que afecta tanto a toda
            la familia y a quien la presenta, y por ello es indispensable contar
            con el apoyo de un grupo. La discapacidad para ambos ofrece retos
            que librar, por lo que la necesidad de apoyo emocional, psicológico,
            médico, educativo y laboral es imprescindible para superarla física
            y socialmente hasta lograr una plenitud emocional y social que
            permita compartir con los demás y lograr una comunicación y
            confianza óptima.
          </Text>
          <Text> </Text>
          <Text>
            La creación de grupos de ayuda mutua o autoayuda son una estrategia
            muy acertada, ya que permite a los adultos mayores contar con un
            lugar de encuentro en donde no sólo se les enseñe a cuidar de su
            salud, sino también el propio grupo crea espacios para compartir su
            problemática en común, se fortalecen vínculos de afecto, amistades,
            al formar parte de este un grupo. (Godínez RMÁ, Solís CM, Cuevas GL,
            2020)
          </Text>
          <Text> </Text>
          <Text>
            «Los <Text style={styles.italic}>grupos de autoayuda</Text> son
            organizaciones de personas que comparten similares problemas
            psicológicos, físicos o existenciales. Constituyen un grupo de apoyo
            o autoayuda donde ayudando a los demás se ayuda a uno mismo». Los
            grupos de autoayuda pueden ser útiles para mejorar la motivación de
            una persona con algún problema en la búsqueda de una solución al
            mismo. En el grupo de personas que comparten un problema, algunos
            individuos sirven de estímulo positivo a otros, y todos se ven
            beneficiados por esta dinámica: tanto los que en un momento
            desempeñan un papel activo, didáctico, altruista, etc., con los
            otros, como los que reciben esa ayuda de sus compañeros. (Godínez
            RMÁ, Solís CM, Cuevas GL, 2020)
          </Text>
          <Text> </Text>
          <Text>
            Pero los grupos de autoayuda pueden ejercer el efecto contrario en
            un momento dado, si no hay un especialista: puede suceder, por
            ejemplo, que se desmoralicen muchos individuos del grupo tras una
            recaída sufrida por uno de los individuos. Los grupos de autoayuda
            pueden servir para trasmitir información, pero si no hay un
            especialista, el grupo de autoayuda puede trasmitir también
            información que no es correcta y que puede perjudicar a los miembros
            del grupo.
          </Text>
          <Text> </Text>
          <Text>
            Un especialista ha estudiado muchos años y no deja de hacerlo nunca.
            Los grupos de autoayuda pueden facilitar el que los individuos
            realicen exposición a situaciones temidas. Por último, los grupos de
            autoayuda pueden facilitar la disminución del malestar psicológico
            al compartir con otras personas las dificultades propias y tomar
            conciencia de que uno no es el único que sufre este trastorno, ni es
            tan raro. Esto por lo general es bueno, salvo que un individuo con
            un trastorno ligero entre a formar parte de un grupo con un
            trastorno grave.
          </Text>
          <Text> </Text>
          <Text>
            Los grupos son gratuitos y abiertos a todos aquellos interesados en
            participar, sean enfermos, familiares o amigos, que puedan ayudar a
            mejorar la calidad de vida de los pacientes. Los grupos se
            retroalimentan, la experiencia compartida ayuda a vencer temores,
            enseña a que cada uno se conozca y evalúe, promoviendo el
            autoestímulo y fortaleciendo la actividad grupal.
          </Text>
          <Text> </Text>
          <Text>
            Crear un ámbito para compartir experiencias y sacar provecho de las
            que aportan los demás. Quién mejor que otro paciente, con iguales
            problemas, para comprenderlos, u otra persona cuidadora, con
            similares problemas, para comprenderlas. Promover la discusión
            amplia de los problemas de los enfermos y sus familiares. Educar a
            los pacientes y familiares acerca de la enfermedad, ya que el
            conocimiento ayuda a disipar dudas e incertidumbres. Mantener un
            canal permanente de comunicación con profesionales especializados
            para contar con información actualizada.
          </Text>
          <Text> </Text>
          <Text>
            Mantener vínculos con entidades y fundaciones, a nivel nacional e
            internacional, destinadas ayudar a los pacientes. Dar a publicidad y
            promover el conocimiento acerca de las enfermedades específicas a
            toda la sociedad, para lograr de esta manera una actitud más
            comprensiva y activa. Lograr que el paciente adopte una actitud
            positiva y asuma un rol activo en el manejo de su enfermedad.
          </Text>
          <Text> </Text>
          <Text>
            La autoayuda implica asumir la responsabilidad personal en el
            cuidado de uno/a mismo/a y en las acciones y decisiones que hacemos
            para responder a las situaciones de la vida. Simultáneamente o
            complementariamente podemos ayudarnos unos a otros de forma
            recíproca e igualitaria, lo que serían procesos de ayuda mutua.
          </Text>
          <Text> </Text>
          <Text>
            En este modelo de FortAM se integra el libro impreso y la App para
            Android <Text style={styles.italic}>«Cuidémonos»</Text> el cual
            forma parte de este paquete tecnológico (en formato impreso, digital
            y como aplicación móvil en sistema operativo Android para móviles).
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            Propuesta de relajación para cuidadores.
          </Text>
          <Text> </Text>
          <Text>
            Practique la técnica de relajación que a continuación ofrecemos,
            durante 10 minutos diariamente y disminuirán las tensiones que le
            surjan en el cuidado diario.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            1. Recuéstese sobre su cama, sofá, piso, o siéntese en una silla
            cómoda con su cabeza bien firme. Las manos sueltas sobre sus piernas
            o a sus lados. Cierre sus ojos.
          </Text>
          <Text>
            {' '}
            2. Respire profundamente dos o tres veces sintiendo cómo sube y baja
            su abdomen. Después relájese con respiración suave y normal.
          </Text>
          <Text>
            {' '}
            3. Comenzando por sus pies, doble sus dedos con fuerza y sienta sus
            pies tensos y duros, después suavemente comience a soltar hasta que
            los sienta relajados y suaves. Apriete los músculos de la
            pantorrilla (aquellos en la parte baja de la pierna) y manténgalos
            por un momento, después, suéltelos.
          </Text>
          <Text>
            {' '}
            4. Siguiendo con la cadera y los muslos, apriete los músculos de sus
            muslos y suéltelos. Sume las áreas del estómago y nalgas, sostenga
            con fuerza por un momento y después suéltelas.
          </Text>
          <Text>
            {' '}
            5. Mantenga una respiración suave (inspire por la nariz y expire el
            aire por la boca). A veces ayuda repetirse a sí mismo “relájate” al
            expulsar el aire.
          </Text>
          <Text>
            {' '}
            6. Ahora, apriete sus puños muy fuertes, sosténgalos sintiendo como
            sus músculos del cuello se relajan y hale hacia abajo. Ahora apriete
            sus dientes y tuerza su boca. Aflójese y deje su boca abierta al
            mismo tiempo que su lengua encuentra un lugar para descansar detrás
            de sus dientes. Tuerza su nariz y ojos tan fuerte como le sea
            posible, mantenga y afloje. Ahora, frunza su frente y sienta todos
            los músculos de su cabeza apretarse y moverse hacia delante,
            mantenga y afloje.
          </Text>
          <Text>
            {' '}
            7. Siga respirando normalmente y con cada respiración hacia fuera
            siéntase más relajado, su cuerpo se calentará y usted se sentirá
            pesado como si estuviera hundiéndose en una cama, piso o silla.
          </Text>
          <Text>
            {' '}
            8. Ahora, para que su mente se beneficie de esta relajación total,
            piense en algún lugar muy agradable en donde le gustaría estar,
            pudiera ser la playa en donde usted esté tendido/a sobre la suave y
            agradable arena oyendo las olas. Pudiera ser su cuarto favorito con
            su música favorita.
          </Text>
          <Text>
            {' '}
            9. Cuando esté listo para acabar con su relajación, comience
            moviendo suavemente sus dedos de los pies y vaya moviendo cada uno
            de los grupos de músculos.
          </Text>
          <Text>
            {' '}
            10. Para terminar, abra sus ojos y trate de apegarse a ese
            sentimiento de paz y relajación que acaba de experimentar.
          </Text>

          <Text> </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('Tecnologias')}>
          <Text>{'Apoyo de tecnologías 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default CuidadoresAutoayuda;
