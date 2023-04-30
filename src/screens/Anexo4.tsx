/* eslint-disable react-native/no-inline-styles */
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

const Anexo4 = () => {
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
      await AsyncStorage.setItem('@sAnexo4', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sAnexo4');
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
          onPress={() => navigate('Anexo3')}>
          <Text>{'👈 Anexo 3'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>Anexo 4</Headline>
        <Headline style={styles.bold}>
          Escala Geriátrica de Evaluación Funcional (EGEF)
        </Headline>
        <Headline> </Headline>
        <Text style={styles.italic}>
          Instrucciones: Defina el ítem por la respuesta del paciente, al que no
          coopera utilice la opinión del cuidador responsable. Ante la duda
          entre ítems, marque el inferior.
        </Text>

        <Text> </Text>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '30%', borderColor: colors.primary}]}>
            I Continencia
          </Text>
          <View
            style={[
              styles.td,
              {
                width: '70%',
                borderColor: colors.primary,
              },
            ]}>
            <Text style={{textAlign: 'left'}}>
              5- Perfectamente continente.
            </Text>
            <Text style={{textAlign: 'left'}}>
              4- Ha perdido ocasionalmente el control de la micción.
            </Text>
            <Text style={{textAlign: 'left'}}>
              3- Incontinencia urinaria, con limitaciones en su vida diaria.
            </Text>
            <Text style={{textAlign: 'left'}}>
              2- Incontinencia urinaria impide realizar su vida diaria o le
              obliga al sondaje.
            </Text>
            <Text style={{textAlign: 'left'}}>
              1- Doble incontinencia (urinaria y fecal) con pérdida de
              autonomía.
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '30%', borderColor: colors.primary}]}>
            II Movilidad
          </Text>
          <View
            style={[
              styles.td,
              {
                width: '70%',
                borderColor: colors.primary,
              },
            ]}>
            <Text style={{textAlign: 'left'}}>
              5- Se moviliza sin limitaciones, tanto fuera como dentro del
              hogar.
            </Text>
            <Text style={{textAlign: 'left'}}>
              4- Alguna limitación en la movilidad en particular con el
              transporte público.
            </Text>
            <Text style={{textAlign: 'left'}}>
              3- Dificultades en la movilidad que limitan satisfacer su vida
              diaria.
            </Text>
            <Text style={{textAlign: 'left'}}>
              2- Depende para movilizarse de la ayuda de otra persona.
            </Text>
            <Text style={{textAlign: 'left'}}>
              1- Se encuentra totalmente confinado a la cama o al sillón.
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '30%', borderColor: colors.primary}]}>
            III Equilibrio
          </Text>
          <View
            style={[
              styles.td,
              {
                width: '70%',
                borderColor: colors.primary,
              },
            ]}>
            <Text style={{textAlign: 'left'}}>
              5- No refiere trastorno del equilibrio.
            </Text>
            <Text style={{textAlign: 'left'}}>
              4- Refiere trastorno del equilibrio, pero no afecta su vida
              diaria.
            </Text>
            <Text style={{textAlign: 'left'}}>
              3- Trastorno del equilibrio, con caídas y limitación de la
              autonomía.
            </Text>
            <Text style={{textAlign: 'left'}}>
              2- Trastornos del equilibrio lo hacen dependiente de ayuda en su
              vida diaria.
            </Text>
            <Text style={{textAlign: 'left'}}>
              1- La falta de equilibrio lo mantienen totalmente incapacitado.
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '30%', borderColor: colors.primary}]}>
            IV Visión
          </Text>
          <View
            style={[
              styles.td,
              {
                width: '70%',
                borderColor: colors.primary,
              },
            ]}>
            <Text style={{textAlign: 'left'}}>
              5- Tiene visión normal (aunque para ello usa lentes).
            </Text>
            <Text style={{textAlign: 'left'}}>
              4- Refiere dificultad para ver, pero esto no limita en su vida
              cotidiana.
            </Text>
            <Text style={{textAlign: 'left'}}>
              3- Dificultad para ver, que limita sus actividades cotidianas.
            </Text>
            <Text style={{textAlign: 'left'}}>
              2- Problemas de la visión, lo obligan a depender de otras
              personas.
            </Text>
            <Text style={{textAlign: 'left'}}>
              1- Ciego o totalmente incapacitado por la falta de visión.
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '30%', borderColor: colors.primary}]}>
            V Audición
          </Text>
          <View
            style={[
              styles.td,
              {
                width: '70%',
                borderColor: colors.primary,
              },
            ]}>
            <Text style={{textAlign: 'left'}}>
              5- Tiene audición normal (aunque para ello use prótesis auditiva).
            </Text>
            <Text style={{textAlign: 'left'}}>
              4- Refiere dificultad para oír, pero esto no repercute en su vida
              diaria.
            </Text>
            <Text style={{textAlign: 'left'}}>
              3- Evidente dificultad para oír, con repercusión en su vida
              diaria.
            </Text>
            <Text style={{textAlign: 'left'}}>
              2- Severos problemas de audición, que le limitan la comunicación.
            </Text>
            <Text style={{textAlign: 'left'}}>
              1- Sordo o aislado por la falta de audición.
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '30%', borderColor: colors.primary}]}>
            VI Uso de Medicamentos
          </Text>
          <View
            style={[
              styles.td,
              {
                width: '70%',
                borderColor: colors.primary,
              },
            ]}>
            <Text style={{textAlign: 'left'}}>
              5- Sin medicamentos, (no incluyen vitaminas ni productos
              naturales).
            </Text>
            <Text style={{textAlign: 'left'}}>
              4- Usa menos de tres de forma habitual.
            </Text>
            <Text style={{textAlign: 'left'}}>
              3- Usa de 3 a 5 por más de un mes o indicados por varios médicos.
            </Text>
            <Text style={{textAlign: 'left'}}>
              2- Usa más de 6 medicamentos.
            </Text>
            <Text style={{textAlign: 'left'}}>
              1- Se automedica o no lleva control de los medicamentos que toma.
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '30%', borderColor: colors.primary}]}>
            VII Sueño
          </Text>
          <View
            style={[
              styles.td,
              {
                width: '70%',
                borderColor: colors.primary,
              },
            ]}>
            <Text style={{textAlign: 'left'}}>
              5- No refiere trastornos del sueño.
            </Text>
            <Text style={{textAlign: 'left'}}>
              4- Trastornos ocasionales del sueño, no tiene necesidad de
              somníferos.
            </Text>
            <Text style={{textAlign: 'left'}}>
              3- Debe usar somníferos para lograr un sueño que lo satisfaga.
            </Text>
            <Text style={{textAlign: 'left'}}>
              2- Pese al uso de psicofármacos mantiene trastornos del sueño.
            </Text>
            <Text style={{textAlign: 'left'}}>
              1- Trastornos severos del sueño que le impiden realizar su vida
              diaria.
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '30%', borderColor: colors.primary}]}>
            VIII Estado Emocional
          </Text>
          <View
            style={[
              styles.td,
              {
                width: '70%',
                borderColor: colors.primary,
              },
            ]}>
            <Text style={{textAlign: 'left'}}>
              5- Se mantiene usualmente con buen estado de ánimo.
            </Text>
            <Text style={{textAlign: 'left'}}>
              4- Trastornos emocionales que supera sin la ayuda profesional.
            </Text>
            <Text style={{textAlign: 'left'}}>
              3- Trastornos emocionales le obligan al uso de tratamiento.
            </Text>
            <Text style={{textAlign: 'left'}}>
              2- Mantienen trastornos emocionales que lo limitan, aún con
              tratamiento.
            </Text>
            <Text style={{textAlign: 'left'}}>
              1- Los trastornos emocionales lo incapacitan, intento o idea
              suicida.
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '30%', borderColor: colors.primary}]}>
            IX Memoria
          </Text>
          <View
            style={[
              styles.td,
              {
                width: '70%',
                borderColor: colors.primary,
              },
            ]}>
            <Text style={{textAlign: 'left'}}>
              5- Buena memoria. Niega trastornos de la misma.
            </Text>
            <Text style={{textAlign: 'left'}}>
              4- Refiere problemas de memoria, pro estos no limitan su vida
              diaria.
            </Text>
            <Text style={{textAlign: 'left'}}>
              3- Trastornos de memoria, que lo limitan para actividades de su
              vida diaria.
            </Text>
            <Text style={{textAlign: 'left'}}>
              2- Trastornos de la memoria que lo obligan a ser dependientes una
              parte del tiempo.
            </Text>
            <Text style={{textAlign: 'left'}}>
              1- La pérdida de memoria lo mantiene incapacitado y dependiente
              total.
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '30%', borderColor: colors.primary}]}>
            X Apoyo Familiar
          </Text>
          <View
            style={[
              styles.td,
              {
                width: '70%',
                borderColor: colors.primary,
              },
            ]}>
            <Text style={{textAlign: 'left'}}>
              5- Cuenta con todo el apoyo familiar que demandan sus necesidades.
            </Text>
            <Text style={{textAlign: 'left'}}>
              4- Existe apoyo familiar, pero puede tener limitaciones en
              ocasiones.
            </Text>
            <Text style={{textAlign: 'left'}}>
              3- Apoyo familiar restringido a cuando el anciano tiene situación
              de crisis.
            </Text>
            <Text style={{textAlign: 'left'}}>
              2- Apoyo familiar inseguro incluso en momentos de crisis para el
              anciano.
            </Text>
            <Text style={{textAlign: 'left'}}>
              1- Ausencia o abandono familiar total.
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '30%', borderColor: colors.primary}]}>
            XI Apoyo Social
          </Text>
          <View
            style={[
              styles.td,
              {
                width: '70%',
                borderColor: colors.primary,
              },
            ]}>
            <Text style={{textAlign: 'left'}}>
              5- Apoyo total e irrestricto por parte de los vecinos y amigos.
            </Text>
            <Text style={{textAlign: 'left'}}>
              4- Cuenta con apoyo de vecinos y amigos, pero este es limitado.
            </Text>
            <Text style={{textAlign: 'left'}}>
              3- Apoyo de vecinos y amigos se restringe a momentos de crisis.
            </Text>
            <Text style={{textAlign: 'left'}}>
              2- Apoyo de vecinos y amigos inseguro aún en momentos de crisis.
            </Text>
            <Text style={{textAlign: 'left'}}>
              1- Aislado. Ausencia total de apoyo por parte de vecinos y amigos.
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '30%', borderColor: colors.primary}]}>
            XII Situación Económica
          </Text>
          <View
            style={[
              styles.td,
              {
                width: '70%',
                borderColor: colors.primary,
              },
            ]}>
            <Text style={{textAlign: 'left'}}>
              5- Cubre todas sus necesidades económicas con ingresos propios.
            </Text>
            <Text style={{textAlign: 'left'}}>
              4- Cubre todas sus necesidades, pero lo logra con ayuda de otros.
            </Text>
            <Text style={{textAlign: 'left'}}>
              3- Cubre solo sus necesidades básicas, aún con la ayuda de otros.
            </Text>
            <Text style={{textAlign: 'left'}}>
              2- Tiene dificultades para cubrir todas sus necesidades básicas.
            </Text>
            <Text style={{textAlign: 'left'}}>
              1- Depende económicamente de la asistencia social.
            </Text>
          </View>
        </View>
        <View
          style={[
            styles.row,
            styles.tr,
            {
              width: '100%',
              flexWrap: 'nowrap',
              borderColor: colors.primary,
            },
          ]}>
          <Text style={[{width: '30%', borderColor: colors.primary}]}>
            Estado Funcional Global
          </Text>
          <View
            style={[
              styles.td,
              {
                width: '70%',
                borderColor: colors.primary,
              },
            ]}>
            <Text style={{textAlign: 'left'}}>
              5- Es totalmente independiente y activo en su vida diaria.
            </Text>
            <Text style={{textAlign: 'left'}}>
              4- Es independiente, pero necesita de ayuda no diaria para alguna
              AIVD.
            </Text>
            <Text style={{textAlign: 'left'}}>
              3- Tiene limitaciones que exigen ayuda diaria, pero puede pasar un
              día solo.
            </Text>
            <Text style={{textAlign: 'left'}}>
              2- Tiene limitaciones que impiden que permanezca más de 8 horas
              sólo.
            </Text>
            <Text style={{textAlign: 'left'}}>
              1- Está totalmente incapacitado y exige custodia permanente.
            </Text>
          </View>
        </View>
        <Text> </Text>
        <Text style={styles.bold}>
          CRITERIOS PARA VALORACIÓN POR ESPECIALISTAS DEL GRUPO BÁSICO DE
          TRABAJO PARA ACCIONES PREVENTIVAS A LA DISCAPACIDAD.
        </Text>
        <Text> </Text>
        <View style={styles.text}>
          <Text>
            Criterios básicos según EGEF para declarar un ANCIANO FRÁGIL.
          </Text>
          <Text> </Text>
          <Text> • Doble incontinencia.</Text>
          <Text>
            {' '}
            • Alteraciones de la movilidad y el equilibrio &lt; de 4 según EGEF.
          </Text>
          <Text> • Polifarmacia (Uso de medicamentos &lt; de 3).</Text>
          <Text> • Alteración de todos los items del EGEF en 4 o menos.</Text>
          <Text>
            {' '}
            • Antecedentes Patológicos Personales (APP) de Síndrome Demencial
            con: Alteraciones del estado emocional, del sueño, de la movilidad,
            del uso de medicamentos, deficiente apoyo familiar, deficiente apoyo
            social, mala situación económica.
          </Text>
          <Text>
            {' '}
            • Cualquier combinación de los problemas sociales (situación
            familiar, social y económica) menores de 4 según EGEF.
          </Text>
          <Text>
            {' '}
            • Alteraciones del estado funcional global menores de 4 según EGEF.
          </Text>
          <Text> • Mayor de 80 años con alguna alteración del EGEF.</Text>
          <Text> • Anciano solo con alguna alteración del EGEF.</Text>
          <Text> • Alteraciones de la memoria menor de 4 según EGEF.</Text>
          <Text> </Text>
          <Text>
            {' '}
            La ESCALA no sustituye el examen clínico que se recomienda realizar
            como parte del Examen Periódico de Salud al Adulto Mayor, solamente
            lo complementa
          </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('Anexo5')}>
          <Text>{'Anexo 5 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default Anexo4;
