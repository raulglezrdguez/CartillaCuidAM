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

const EstructuraCasa = () => {
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
      await AsyncStorage.setItem('@sEstructuraCasa', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sEstructuraCasa');
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
          onPress={() => navigate('EnfermaDependiente')}>
          <Text>{'👈 Necesidades de la persona enferma dependiente'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>
          Cambios en la Estrutura de la Casa
        </Headline>
        <Headline> </Headline>
        <View style={styles.text}>
          <Text> </Text>
          <Text>
            La casa, es el espacio físico en el que se va a desarrollar la vida
            de la persona en situación de dependencia, es un factor de gran
            importancia para su calidad de vida y para facilitar la tarea de la
            persona cuidadora. Una buena organización del espacio puede ayudar a
            que los cuidados se realicen con menor esfuerzo, con menor riesgo y,
            en definitiva, en mejores condiciones tanto para quien los recibe
            como para quien los proporciona.
          </Text>
          <Text> </Text>
          <Text>
            Otro aspecto de suma importancia en relación con el cuidado del
            adulto mayor dependiente radica en la adecuación del hogar para las
            exigencias de su condición actual. Es por ello que nuestra prioridad
            será establecer un entorno adecuado donde la adaptación del entorno
            debe partir de tres aspectos fundamentales: comodidad, seguridad y
            movilidad. Es importante no pasar por alto que estas adaptaciones en
            el hogar respetarán las necesidades y motivaciones individuales del
            adulto mayor.
          </Text>
          <Text> </Text>
          <Text>
            Las modificaciones en las distintas habitaciones de la casa deben
            hacerse de acuerdo con la situación de cada adulto mayor y las
            características de su entorno, ya que éstas pueden variar
            considerablemente en cada caso y siempre tener la conformidad de la
            persona en proceso de cuidados. No obstante, en general:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            • Simplificaremos el ambiente al máximo para proteger al adulto
            mayor.
          </Text>
          <Text>
            {' '}
            • Muebles solo los necesarios, se deben eliminar muebles inestables,
            evitar tapetes sueltos y pisos encerados, muy lisos o resbalosos.
          </Text>
          <Text>
            {' '}
            • El desplazamiento libre del adulto mayor en las diferentes
            habitaciones de la casa le proporcionará movilidad y evitará
            accidentes.
          </Text>
          <Text>
            {' '}
            • Evitar la presencia de mascotas o animales domésticos y así
            prevenir las caídas con posibles consecuencias.
          </Text>
          <Text> </Text>
          <Text>
            En lo sucesivo algunas sugerencias para la modificación de la casa.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>La entrada.</Text>
          <Text> </Text>
          <Text>En cuanto a la entrada es pertinente pensar en:</Text>
          <Text> </Text>
          <Text>
            {' '}
            • Que siempre que sea posible que esté habilitada para usuarios en
            silla de ruedas (deberá contar con rampas y puertas anchas de más de
            90 cm).
          </Text>
          <Text>
            {' '}
            • Pasillos largos y escaleras con pasamanos en ambos lados. De ser
            posible evitar las escaleras.
          </Text>
          <Text>
            {' '}
            • Buena iluminación y una instalación eléctrica perfectamente
            distribuida (los interruptores situados de tal modo que el espacio
            oscuro pueda iluminarse antes de entrar).
          </Text>
          <Text>
            {' '}
            • Los pisos lisos, nivelados y en buen estado para transitar sin
            dificultad (no deben contar con superficies resbaladizas: las
            superficies más seguras son las baldosas sin esmaltar, las de vinilo
            y las de madera sin pulir).
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>La Sala.</Text>
          <Text> </Text>
          <Text>Debe estar provista de:</Text>
          <Text> </Text>
          <Text>
            {' '}
            • Mínimo, un sillón cómodo poco profundo, de poca altura para que
            los pies no queden colgando; con asientos y respaldos firmes, así
            como apoya-brazos largos.
          </Text>
          <Text>
            {' '}
            • Siempre que sea necesario y posible usar colores contrastantes y
            cálidos con el fin de diferenciar los objetos dentro del espacio.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>El Comedor.</Text>
          <Text> </Text>
          <Text>En el comedor, será necesario contar con:</Text>
          <Text> </Text>
          <Text> • Sillas livianas, seguras y estables.</Text>
          <Text>
            {' '}
            • No debe haber bordes filosos ni salientes puntiagudas en que se
            pueda atorar la ropa o que incluso sean capaces de lastimar a la
            persona.
          </Text>
          <Text>
            {' '}
            • La altura ideal de la mesa oscila entre los 70 y 80 centímetros,
            las patas deben ser rectas y sin sobresalir de la tabla. Las mesas
            deben constar de cuatro patas y no de una sola central.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>El dormitorio.</Text>
          <Text> </Text>
          <Text>En el caso del dormitorio será de gran utilidad:</Text>
          <Text> </Text>
          <Text>
            {' '}
            • Decorar con objetos del agrado del adulto mayor en cuestión:
            fotos, libros, pinturas, objetos personales, etc.
          </Text>
          <Text>
            {' '}
            • Timbre al alcance de la cama para que lo puedan accionar con
            facilidad en caso de ser necesario o botón de alarma para solicitar
            ayuda o auxilio.
          </Text>
          <Text>
            {' '}
            • La cama debe ser cómoda, de fácil entrada y salida, sin
            dificultades para ser tendida y alejada de la pared.
          </Text>
          <Text>
            {' '}
            • De preferencia deben usarse camas articuladas y de baja estatura
            por fines de comodidad.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>El cuarto de baño.</Text>
          <Text> </Text>
          <Text>
            A medida que el deterioro avanza, el adulto mayor puede presentar
            torpeza y confusión en el camino al baño; a veces es posible que se
            presente la necesidad de ayuda pero le da vergüenza pedirla; en
            otras ocasiones puede suceder que no encuentra el baño a tiempo, de
            modo que él no sabe qué hacer; puede aparecer dificultad para usar
            el equipo, como la ducha, el lavamanos, y le cueste trabajo llevar a
            cabo todos los mecanismos de rutina que son necesarios en el cuarto
            de baño, como bañarse, lavarse, y el debido uso del retrete.
          </Text>
          <Text> </Text>
          <Text>
            Las siguientes medidas pueden ser de utilidad según sean las
            necesidades particulares de cada adulto mayor:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            • Cerciórese de que el adulto mayor use ropa fácil de quitar, por
            ejemplo, pantalones con elástico en la cintura en vez de botones,
            broches o cremalleras. Preferentemente juegos de dos piezas como la
            ropa deportiva. O una sola pieza que el velcro (cinta textil
            adhesiva doble formada: una por ganchos y otra por bucles) ayude a
            cerrarla. Para la persona postrada: pieza única para vestir y se
            puede colocar en el cuerpo en dirección anteroposterior. Así será
            más fácil el cambio de ropa para la persona que necesita ser cuidada
            y para la persona cuidadora.
          </Text>
          <Text>
            {' '}
            • La puerta del baño se debe poder abrir desde y hacia afuera pues
            en caso de caída en el baño de la persona el proceso de abrir la
            puerta para ayudarla podrá traer consecuencias no deseadas.
          </Text>
          <Text>
            {' '}
            • La puerta del baño contará con un ancho de 90 centímetros como
            mínimo para posibilitar la entrada de sillas de ruedas. Asimismo, el
            espacio para moverse básicamente dentro del baño con la silla de
            ruedas debe ser de 1.50 metros por 1.50 metros.
          </Text>
          <Text>
            {' '}
            • Colocar barras de apoyo (asideros) donde se requieran, por
            ejemplo, en la ducha o en el inodoro si es que al adulto mayor se le
            dificulta sentarse o pararse de un asiento demasiado bajo y se
            incrementa 50 cm la altura del inodoro con una ayuda técnica.
          </Text>
          <Text> • Quitarle la tapa del asiento al inodoro.</Text>
          <Text> • Vigilar que haya buena iluminación y ventilación.</Text>
          <Text>
            {' '}
            • Se debe contar con un timbre para emergencias o botón de alarma o
            estar cerca que podamos oír cualquier llamado en ese preciso
            momento.
          </Text>
          <Text>
            {' '}
            • Finalmente, si contamos con todas estas adaptaciones en el hogar
            contribuiremos a que el adulto mayor se desenvuelva de manera plena
            y satisfactoria lo mismo para él como para la persona cuidadora.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>
            Consejos y recomendaciones generales sobre la organización de la
            casa.
          </Text>
          <Text> </Text>
          <Text>
            1. Compruebe si tiene derecho a alguna ayuda o subvención para
            adaptación de la vivienda, en el caso de que tenga que llevar a cabo
            obras para favorecer la accesibilidad de alguna persona enferma o en
            situación de dependencia. Puede informarse en los organismos de
            vivienda del Gobierno, a los Delegados del Gobierno, así como en los
            servicios de asistencia social de su pueblo o barrio. Se aconseja
            verificar los documentos legales.
          </Text>
          <Text>
            2. Elimine obstáculos por donde transite el enfermo o persona en
            situación de dependencia, incluidas las alfombras. Tenga cuidado con
            los suelos mojados (recién fregados, salida de la ducha...),
            deslizantes o resbaladizos por cualquier motivo (excesivamente
            pulidos...).
          </Text>
          <Text>
            3. Si tiene problema para que la persona entre con la silla de
            ruedas en una determinada habitación, porque no da giro suficiente,
            puede utilizar para ello una silla de oficina o silla adaptada con
            rueditas colocadas.
          </Text>
          <Text>
            4. Sustituya la bañera por la ducha y si es posible ponga suelo
            antideslizante en lugar de plato o bañera. Ello facilitará mucho los
            cuidados para la higiene y evitará accidentes y lesiones.
          </Text>
          <Text>5. Coloque pasamanos en las escaleras.</Text>
          <Text>
            6. Si es obligatorio que la persona tenga que estar mucho tiempo
            encamada, debe hacerlo en una habitación con luz natural y buena
            ventilación.
          </Text>
          <Text>
            7. La ropa personal y de cama debe ser de algodón. Procure que la
            ropa de abrigo en la cama no tenga excesivo peso.
          </Text>
          <Text>
            8. Tenga a mano, en lugar bien visible, el teléfono para contactar
            con los profesionales sanitarios y los servicios sociales en caso de
            necesidad.
          </Text>
          <Text>
            9. Utilice una libreta para anotar de manera sistemática todas las
            dudas que vayan surgiendo sobre los cuidados o atenciones a la
            persona en situación de dependencia, para comentarlas con el
            profesional sanitario o de los servicios sociales sin que se le
            olvide algo.
          </Text>
          <Text>
            10. Anote en lugar visible el nombre de los medicamentos, los
            momentos y la forma en que el enfermo deba tomarlos. Utilice un
            pastillero para organizar mejor esta administración.
          </Text>
          <Text> </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('CuidadosPersonales')}>
          <Text>{'Cuidados Personales 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default EstructuraCasa;
