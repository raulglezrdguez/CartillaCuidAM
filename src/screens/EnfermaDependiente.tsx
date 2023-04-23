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

const EnfermaDependiente = () => {
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
      await AsyncStorage.setItem('@sEnfermaDependiente', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sEnfermaDependiente');
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
          onPress={() => navigate('EvaluacionFuncional')}>
          <Text>{'👈 ¿Qué hacer con la evaluación funcional?'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>
          Necesidades de la persona enferma dependiente
        </Headline>
        <Headline> </Headline>
        <View style={styles.text}>
          <Text> </Text>
          <Text>
            <Text style={styles.bold}>Higiene</Text>: Es muy importante que la
            persona enferma que requiere cuidados o las que se encuentran en
            situación de dependencia mantengan una correcta higiene personal.
            Muchos problemas y molestias pueden derivarse de la falta de
            higiene. Por eso es necesario procurar un lavado diario. Mejor si se
            puede realizar en el baño. Siempre con la persona a cuidar sentada,
            y mejor en ducha que en bañera, como ya hemos aconsejado. Solo si no
            es posible trasladar a la persona al baño, el lavado corporal deberá
            realizarse en la cama. Tras el lavado, es muy importante secar todo
            el cuerpo con esmero, intentando no frotar, sino con pequeños toques
            y aprovechar para llevar a cabo una buena hidratación de la piel,
            utilizando cremas adecuadas. Es imprescindible una buena higiene
            diaria, que debe incluir lavado corporal, secado, hidratación y
            cuidados de la piel, limpieza de la boca y cambio de ropa, que
            siempre debe ser cómoda y de algodón. Si el enfermo mantiene el
            control de esfínteres, pero tiene dificultad para ir al baño, es
            conveniente tener siempre a mano un -pato- o una botella para la
            orina y disponer también de una cuña o silla de baño para las
            deposiciones. Si presenta incontinencia de esfínteres, lo
            aconsejable es utilizar pañales o culeros desechables que
            cambiaremos a menudo, lona sanitaria y recursos para el aseo (jabón,
            detergentes, desinfectantes). Se sugiere consultar al profesional
            sanitario ante cualquier necesidad para evaluar si tiene derecho a
            que el sistema sanitario se los proporcione de manera gratuita. Más
            adelante se incluyen instrucciones concretas para realizar las
            tareas propias del aseo a la persona dependiente además de lo que
            aprendió en el proceso de formación.
          </Text>
          <Text> </Text>
          <Text>
            <Text style={styles.bold}>Movilización</Text>: Cuando una persona
            necesita ayuda de otros para moverse y ello le obliga a estar
            constantemente en una misma posición, es necesario movilizarla
            varias veces al día. Es imprescindible cambiar de posición con
            frecuencia a una persona que debe pasar muchas horas encamada y no
            puede moverse sola. No hacerlo puede ser causa de graves problemas,
            como la aparición de úlceras por presión o escaras como se les
            nombra. Además de cambiarle de posición, es muy útil enseñarle
            algunos ejercicios fáciles para que mueva, en la medida de sus
            posibilidades, tanto las de extremidades superiores como las
            inferiores. Si puede caminar, aunque sea con ayuda de otra persona o
            con andador, le estimularemos para que lo haga; lo apropiado es que
            camine poco rato y que repita el paseo muchas veces al día. En todo
            caso, el ejercicio dependerá de la situación en la que se encuentre;
            si es terminal solo se deben realizar cambios posturales en la cama
            para que se encuentre mejor. Poner cojines entre las rodillas evita
            el roce entre ellas, que puede ser causa de molestias. De la misma
            manera, una almohada en la espalda nos puede servir para ponerlo de
            lado y mantenerlo en esa posición.
          </Text>
          <Text> </Text>
          <Text>
            <Text style={styles.bold}>Alimentación e Hidratación</Text>: Si una
            persona puede permanecer sentada, lo ideal sería que hiciera las
            comidas principales en la mesa, con la familia. Es conveniente
            ofrecerle pocas cantidades y a menudo, y darle cosas que le
            apetezcan. Las comidas han de estar bien presentadas. Frutas,
            verduras y proteínas deben formar parte de su dieta. Siempre que sea
            posible, la persona debe hacer las comidas principales en la mesa y
            con la familia. No es conveniente forzarle a comer ni criticarle o
            amenazarle con el empeoramiento de su estado si no come. Cuando nos
            encontremos con una persona enferma a la que le cueste comer, nunca
            deberemos decir cosas como «¡Cómo te vas a curar si no comes!», «Si
            no comes cada día estarás peor». Tampoco deberemos ser continuamente
            repetitivos con «¡Come, come!». No es conveniente forzarle a comer
            ni criticarle por no comer, está en su derecho. De hacerlo, solo
            conseguiremos aumentar su malestar y crear tensiones innecesarias.
            Así mismo, si se produce una significativa pérdida de peso y el
            consecuente cambio de talla en la ropa, deberemos darle la menor
            importancia posible, sin dejar de preocuparnos. En todo caso, si el
            apetito es escaso conviene consultar con el profesional sanitario la
            posibilidad de ofrecerle un preparado de proteínas en forma de
            batido o compota y que se presenta en distintos sabores: vainilla,
            fresa, chocolate, café, caramelo... (según posibilidades). Otro
            aspecto de extraordinaria importancia es que la persona esté en todo
            momento bien hidratada. El cuerpo está formado por un ochenta por
            ciento de agua aproximadamente que se distribuye entre el interior
            de las células (un sesenta y tres por ciento), los tejidos (un
            treinta por ciento) y la sangre (un siete por ciento, unos cuatro
            litros). Si no aportamos líquido suficiente puede producirse una
            hipotensión, disminución de la tensión arterial, por falta del mismo
            en el torrente circulatorio. Si además se añade la edad avanzada,
            que las venas y arterias están endurecidas y con poca elasticidad,
            la situación se complica, de ahí que la hidratación sea de
            extraordinaria importancia. Las gelatinas son útiles para favorecer
            la necesaria hidratación de aquellas personas que no toman
            suficientes líquidos (agua, jugos, infusiones…) en la cantidad
            aconsejable (litro y medio diario) y suelen ser fáciles de dar y
            bien aceptadas por la mayoría de las personas. Se debe beber un
            litro y medio de líquidos al día para evitar los síntomas derivados
            de la deshidratación: insuficiencia renal aguda, somnolencia,
            cansancio, dolor de cabeza… (siempre que su condición de salud
            biológica lo permita). Para ello se aconseja que se tome cada
            pastilla con medio vaso de agua. Aparte se recomiendan dos vasos de
            agua o jugos por la mañana y otros dos por la tarde, antes de la
            cena, para evitar levantarse por la noche. No hay que olvidar que
            los líquidos son más difíciles de tragar que los alimentos blandos
            y, por tanto, en personas con dificultades, podría ser causa de
            atragantamiento. Con estas medidas también se mantendrá una correcta
            hidratación de la piel, evitando las úlceras por presión (escaras) y
            descamaciones.
          </Text>

          <Text> </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('EstructuraCasa')}>
          <Text>{'Cambios en la Estrutura de la Casa 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default EnfermaDependiente;
