import React, {useEffect, useRef} from 'react';
import {
  ScrollView,
  View,
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
} from 'react-native';
import {
  Headline,
  Subheading,
  Text,
  TouchableRipple,
  useTheme,
} from 'react-native-paper';

import {usePreferencesState} from '../context/preferences';
import {styles} from '../context/styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Datos = () => {
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
      await AsyncStorage.setItem('@sDatos', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sDatos');
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
          onPress={() => navigate('Pensamientos')}>
          <Text>{'👈 Pensamientos'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>Datos</Headline>
        <Headline> </Headline>
        <View style={styles.text}>
          <Text>
            <Text style={styles.bold}>Cartilla de la persona cuidadora. </Text>
            <Text>Asistentes sociales a domicilio y familiares.</Text>
          </Text>
          <Text>
            <Text>Una herramienta para ayudar los</Text>{' '}
            <Text style={styles.bold}>
              cuidados generales al adulto mayor dependiente.
            </Text>
          </Text>
          <Text>
            <Text>Un aporte: </Text>
            <Text style={styles.italic}>
              Hacia un sistema de cuidados al adulto mayor dependiente.
            </Text>
          </Text>
          <Text> </Text>
          <Text>
            Esta cartilla se integra al sitio WEB CuidAM, audiovisuales y las
            apps de evaluación SharExam.EPS/FotAM y libro digital de autoayuda
            «Cuidándonos». Éstas son herramientas que incluimos y ofrecemos en
            el desarrollo de los cursos, y algunas tienen enlaces en INTERNET.
            Los contenidos de esta cartilla son responsabilidad de los autores y
            se modificarán en la medida de las necesidades que sean
            identificadas en los territorios durante los cursos impartidos en
            las escuelas de personas cuidadoras donde se tendrán un lugar a
            partir de la identificación de nuevas necesidades de aprendizaje.
          </Text>
          <Text> </Text>
          <Subheading style={[styles.bold, styles.text]}>IMPRESION</Subheading>
          <Text>
            <Text>
              Proyecto: «Fortalecimiento de las capacidades locales en la
              prevención de la discapacidad del adulto mayor en áreas rurales».
            </Text>
            <Text style={styles.bold}>(FORTAM)</Text>
          </Text>
          <Text> </Text>
          <Subheading style={[styles.bold, styles.text]}>PORTADA</Subheading>
          <Text>
            <Text>
              Proyecto: «Fortalecimiento de las capacidades locales en la
              prevención de la discapacidad del adulto mayor en áreas rurales».
            </Text>
            <Text style={styles.bold}>(FORTAM)</Text>
          </Text>
          <Text> </Text>
          <Subheading style={styles.bold}>AGRADECIMIENTOS</Subheading>
          <Text>
            • A mediCuba Suiza por el financiamiento y apoyo técnico en el
            proyecto de colaboración internacional «Fortalecimiento de las
            capacidades locales en la prevención de la discapacidad del adulto
            mayor en áreas rurales». (FORTAM) Mención especial a Manuel Vanegas
            y Beatrice Mazenauer.
          </Text>
          <Text>
            • A COSUDE mediCuba Suiza por el financiamiento en el proyecto de
            colaboración internacional FORTAM.
          </Text>
          <Text>
            • A la Asociación de Amistad Italia-Cuba por el apoyo con donativo
            puntual al proyecto de investigación institucional «Intervención
            socio sanitaria intersectorial en instituciones sociales que
            atienden adultos mayores frágiles y en estado de necesidad en el
            territorio de Colón» (CEGER-AMAM) orientado al apoyo de las
            instituciones sociales de atención al adulto mayor.
          </Text>
          <Text>
            • A la Comunidad Europea por el financiamiento al proyecto Programa
            Integral de Envejecimiento Saludable Plaza (PIES Plaza) y sus
            sinergias en el tema de las tecnologías de la información y las
            comunicaciones con el proyecto FortAM.
          </Text>
          <Text>
            • Al Ministerio de Salud Pública (MINSAP) y al Ministerio de Trabajo
            y Seguridad Social (MTSS), de Cuba, por brindar los procedimientos y
            bases legales para desarrollar, dentro del sistema de cuidados, esta
            Cartilla de la persona cuidadora como aporte tangible del proyecto
            FortAM.
          </Text>
          <Text> </Text>
          <Text>
            Los autores ceden los derechos de autor a los Joven Club de
            Computación y Electrónica para que lo pueda difundir a través de sus
            servicios de información por sus instituciones en Cuba.
          </Text>
          <Text> </Text>
          <Subheading style={styles.bold}>AUTORES</Subheading>
          <Text>• MsC. Eduardo Alfredo Triana Alvarez. *</Text>
          <Text>• MsC. Teresa Reyes Camejo. **</Text>
          <Text>• Lic. Edelma Pérez Reyes. ***</Text>
          <Text> </Text>
          <Text>
            * Psicólogo, profesor auxiliar, Máster en Longevidad Satisfactoria y
            en Nuevas Tecnologías para la Educación. Director del proyecto
            FortAM.
          </Text>
          <Text>
            ** Médica, profesora auxiliar, Especialista de primer grado en
            Medicina General Integral, Máster en Longevidad Satisfactoria y en
            Contaminación Ambiental.
          </Text>
          <Text>
            *** Psicóloga, Trabajadora Social, Directora Municipal de Trabajo y
            Seguridad Social de Colón.
          </Text>
          <Text> </Text>
          <Subheading style={styles.bold}>COAUTORES</Subheading>
          <Text>• Lic. Yisel Hernández Tamayo. ****</Text>
          <Text>• Lic. Leonela M. Paneque Rosales. ****</Text>
          <Text>• Lic. Irsia Herrera Valdés. *****</Text>
          <Text> </Text>
          <Text>
            **** Licenciada(s) en Enfermería del hogar de ancianos “Gilberto
            Espiñeiras” de Colón.
          </Text>
          <Text>
            ***** Licenciada en Enfermería del hogar de ancianos Evangélico
            “Daddy John” de Colón.
          </Text>
          <Text> </Text>
          <Subheading style={styles.bold}>ASESORA MEDICUBA SUIZA</Subheading>
          <Text>
            • Dr. iur. Beatrice Mazenauer. Miembro de la junta ejecutiva
            mediCuba Suiza.
          </Text>
          <Text> </Text>
          <Subheading style={styles.bold}>EDITORA</Subheading>
          <Text>
            • MSc. Yolagny Díaz Bermúdez. Directora de la revista Tino y del
            sello editorial de Joven Club.
          </Text>
          <Text> </Text>
          <Subheading style={styles.bold}>
            Equipo de desarrollo para dispositivos móviles Android.
          </Subheading>
          <Text>
            • Raúl González Rodríguez. Ingeniero Físico Nuclear. Master en
            informática aplicada.
          </Text>
          <Text>
            • Eduardo Alfredo Triana Alvarez MSc. Licenciado en psicología.
            Master en nuevas tecnologías para la educación y longevidad
            satisfactoria.
          </Text>
          <Text>
            • Teresa Reyes Camejo. Médico especialista en Medicina General
            Integral. Master en nuevas tecnologías para la educación y
            longevidad satisfactoria.
          </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('Preambulo')}>
          <Text>{'Preámbulo 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default Datos;
