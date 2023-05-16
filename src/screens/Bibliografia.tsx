import React, {useEffect, useRef} from 'react';
import {
  ScrollView,
  View,
  useWindowDimensions,
  NativeSyntheticEvent,
  NativeScrollEvent,
  Linking,
} from 'react-native';
import {Headline, Text, TouchableRipple, useTheme} from 'react-native-paper';

import {usePreferencesState} from '../context/preferences';
import {styles} from '../context/styles';

import AsyncStorage from '@react-native-async-storage/async-storage';

const Bibliografia = () => {
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
      await AsyncStorage.setItem('@sBibliografia', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sBibliografia');
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
          onPress={() => navigate('Tecnologias')}>
          <Text>{'👈 Apoyo de tecnologías'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>Bibliografía</Headline>
        <Headline> </Headline>
        <View style={styles.text}>
          <Text> </Text>
          <Text>
            {' '}
            • Alltag, S., Conrad, I., & Riedel-Heller, S. G. (2019). Caregiver
            burden among older informal caregivers of patients with dementia and
            its influence on quality of life: A systematic literature review.
            Zeitschrift fur Gerontologie und Geriatrie, 52(5), 477–486.
            https://bit.ly/3wZwqSi{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL('https://bit.ly/3wZwqSi').catch(err =>
                  console.error('Error al visitar link', err),
                );
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • American Occupational Therapy Association. (2020) Occupational
            therapy practice framework: Domain and process—fourth edition. Am J
            Occup Ther. 2020;74 (Supplement_2):7412410010p1
          </Text>
          <Text>
            {' '}
            • Arroyo Priego E, Arana Ruiz AI, Garrido Blanco R, Crespo Montero
            R, Arroyo Priego E, Arana Ruiz AI, et al. (2018). Análisis de la
            sobrecarga del cuidador del paciente en diálisis. Enfermería
            Nefrológica.21(3):213- 23.
          </Text>
          <Text>
            {' '}
            • Blanco Gutiérrez N.; García Román J. C. (2021). Nuevas tecnologías
            aplicadas a los cuidados del adulto mayor. Trabajo final de grado en
            Enfermería. Facultad de Enfermería Universidad de Cantabria.
            Disponible en:
            https://repositorio.unican.es/xmlui/handle/10902/22151{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'https://repositorio.unican.es/xmlui/handle/10902/22151',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Bramboeck, V., Moeller, K., Marksteiner, J. y Kaufmann, L. (2020).
            Loneliness and Burden Perceived by Family Caregivers of Patients
            With Alzheimer Disease. American Journal of Alzheimer’s Disease &
            Other Dementias, 35(1), 1-8 https://doi.org/10.1177/1533317520917788
            .{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'https://doi.org/10.1177/1533317520917788',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Brody EM. (1969). Assessment of older people: self-maintaining and
            instrumental activities of daily living. Gerontologist.
            1969;9(3):179–86.
          </Text>
          <Text>
            {' '}
            • Campos-Puente, A.M., Avargues-Navarro, M.L., Bor da-Mas, M.,
            Sánchez-Martín, M., Aguilar-Parra, J.M. y Trigueros, R. (2019).
            Emotional Exhaustion in House wives and Alzheimer Patients’
            Caregivers: Its Effects on Chronic Diseases, Somatic Symptoms and
            Social Dysfunction. International Journal of Environmental Research
            and Public Health, 16(18), 3250.
            https://doi.org/10.3390/ijerph16183250{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL('https://doi.org/10.3390/ijerph16183250').catch(
                  err => console.error('Error al visitar link', err),
                );
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Cheng, S.T., Chan, W.C. y Lam, L. (2019). Long-Term Outcomes of
            the Benefit-Finding Group Intervention for Alzheimer´S Family
            Caregivers: A Cluster-Randomized Double-Blind Controlled Trial. The
            American Journal of Geriatric Psychiatry, 27(9), 984-994
            https://doi.org/10.1016/j.jagp.2019.03.013{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'https://doi.org/10.1016/j.jagp.2019.03.013',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Durán-Gómez, N., Guerrero-Martín, J., Pérez-Civantos, D., López
            Jurado, C.F., Palomo-López, P. y Cáceres, M.C. (2020). Understanding
            Resilience Factors Among Caregivers of People with Alzheimer’s
            Disease in Spain. Psychology Research and Behavior Management, 13,
            1011-1025 https://doi.org/10.2147/PRBM.S274758{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL('https://doi.org/10.2147/PRBM.S274758').catch(
                  err => console.error('Error al visitar link', err),
                );
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Etcheverry Domeño, L., & Barros De Oliveira, A. (2022). Revisión
            sistemática de estrategias de afrontamiento en cuidadotres
            principales de personas con demencia. PSICOLOGÍA UNEMI, 6(11),
            258-272. En:
            https://ojs.unemi.edu.ec/index.php/faso-unemi/article/view/1593{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'https://ojs.unemi.edu.ec/index.php/faso-unemi/article/view/1593',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Edjolo A, Proust-Lima C, Delva F, Dartigues JF, Pérès K. (2016).
            Natural History of Dependency in the Elderly: A 24-Year
            Population-Based Study Using a Longitudinal Item Response Theory
            Model. Am J Epidemiol. 2016 Feb 15;183(4):277-85.
            doi:10.1093/aje/kwv223.
          </Text>
          <Text>
            {' '}
            • Echeverría A, Astorga C, Fernández C, Salgado M y Villalobos
            Dintrans P. (2022) Funcionalidad y personas mayores: ¿dónde estamos
            y hacia dónde ir? Rev Panam Salud Publica. 2022;46:e34.
            https://doi.org/10.26633/RPSP.2022.34{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL('https://doi.org/10.26633/RPSP.2022.34').catch(
                  err => console.error('Error al visitar link', err),
                );
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Fields, N.L., Xu, L., y Miller, V.J. (2019). Caregiver Burden and
            Desire for Institutional Placement - The Roles of Positive Aspects
            of Caregiving and Re ligious Coping. American Journal of Alzheimer’s
            Disease and Other Dementias, 34(3), 199-207
            https://doi.org/10.1177/1533317519826217{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'https://doi.org/10.1177/1533317519826217',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Godínez RMÁ, Solís CM, Cuevas GL, et al. (2020). Los grupos de
            autoayuda: una estrategia que favorece la satisfacción personal de
            los adultos mayores. CuidArte. 2020;9(18):6-13.
          </Text>
          <Text>
            {' '}
            • González-González C, Cafagna G, Hernández Ruiz MDC, Ibarrarán P,
            Stampini M. (2021). Dependencia funcional y apoyo para personas
            mayores de México, 2001-2026 [Functional dependence and support for
            the older persons in Mexico, 2001-2026Dependência funcional e apoio
            em idosos no México, 2001-2026]. Rev Panam Salud Publica. 2021 Sep
            1;45:e71. Spanish. doi: 10.26633/RPSP.2021.71 PMID: 34475881; PMCID:
            PMC8369130
          </Text>
          <Text>
            {' '}
            • GNUDS (Grupo de las Naciones Unidas para el Desarrollo
            Sostenible). (2022) No dejar a nadie atrás. Washington, DC: UNSDG;
            [consultado el 16 de julio del 2022]. Disponible en:
            https://unsdg.un.org/es/2030-agenda/universal-values/leave-no-one-behind{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'https://unsdg.un.org/es/2030-agenda/universal-values/leave-no-one-behind',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Mariezcurrena-Fernández, Aintzane, Lorea-González, Idoia,
            Remirez-de Ganuza, Ana, Ijalba-Pérez, Pablo, Barea-Ullate, Verónica,
            & Jiménez-Acosta, Azahara. (2022). Resiliencia y sobrecarga en
            cuidadores familiares de enfermos con demencias en Navarra.
            Gerokomos, 33(2), 88-94. Epub 24 de octubre de 2022. Recuperado en
            01 de marzo de 2023, de
            http://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1134-928X2022000200005&lng=es{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'http://scielo.isciii.es/scielo.php?script=sci_arttext&pid=S1134-928X2022000200005&lng=es',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Martínez-Cortés, L., Gonzalez-Moreno, J., & Cantero-García, M.
            (2021). Síndrome de sobrecarga en cuidadores de Alzheimer. Revisión
            sistemática. Apuntes De Psicología, 39(2), 75–85. Recuperado a
            partir de
            https://www.apuntesdepsicologia.es/index.php/revista/article/view/902{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'https://www.apuntesdepsicologia.es/index.php/revista/article/view/902',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Monzón Ferrer, A. (2020). Intervalo de tiempo óptimo en la
            realización de cambios posturales, independientemente de la
            superficie sobre la que descansa, para la prevención de úlceras por
            presión en el entorno asistencial. Universidad de Castilla-La
            Mancha. https://ruidera.uclm.es/xmlui/handle/10578/23401{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'https://ruidera.uclm.es/xmlui/handle/10578/23401',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Lawton MP, Hernández K, Neumann V. (2016) Análisis de instrumento
            para evaluación del desempeño en actividades de la vida diaria
            instrumentales Lawton y Brody. Rev Chil Ter Ocup. 2016;16(2):55.
          </Text>
          <Text>
            {' '}
            • Keating NC, Rodríguez Mañas L, De Francisco A. (2021). Hacia el
            envejecimiento saludable en América Latina y el Caribe: ¿no dejar a
            nadie atrás? Rev Panam Salud Publica. 2021;45:e120.
            https://doi.org/10.26633/RPSP.2021.12{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL('https://doi.org/10.26633/RPSP.2021.12').catch(
                  err => console.error('Error al visitar link', err),
                );
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Keating N, McGregor A, Yeandle S. (2021). Sustainable care:
            theorizing the wellbeing of caregivers to older persons. Int J Care
            Caring. 2021;5(2): 1–13.
            https://doi.org/10.1332/239788221X16208334299524{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'https://doi.org/10.1332/239788221X16208334299524',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • ONU Mujeres y CEPAL (2020). Cuidados en América Latina y el Caribe
            en tiempos de COVID-19. Hacia Sistemas Integrales para fortalecer la
            respuesta y la recuperación. En: es_cuidados covid.pdf (unwomen.org)
          </Text>
          <Text>
            {' '}
            • ONU Mujeres/CEPAL. (2022). Hacia la construcción de sistemas
            integrales de cuidados en América Latina y el Caribe: elementos para
            su implementación (LC/TS.2022/26), Santiago, 2022. En:
            https://lac.unwomen.org/es/digiteca/publicaciones/2021/11/hacia-la-construccion-de-sistemas-integrales-de-cuidados-en-america-latina-y-el-caribe{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'https://lac.unwomen.org/es/digiteca/publicaciones/2021/11/hacia-la-construccion-de-sistemas-integrales-de-cuidados-en-america-latina-y-el-caribe',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Organización Mundial de la Salud. (2015). Informe mundial sobre el
            envejecimiento y la salud. Ginebra: OMS; 2015 [consultado el 28 de
            julio del 2021]. Disponible en:
            https://apps.who.int/iris/bitstream/handle/10665/186466/9789240694873_spa.pdf{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'https://apps.who.int/iris/bitstream/handle/10665/186466/9789240694873_spa.pdf',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • OPS. (2019). El número de adultos mayores con necesidades de
            cuidado a largo plazo se triplicará para 2050 en las Américas,
            advirtió la OPS. Washington, DC, 1 de octubre de 2019 En :
            https://www3.paho.org/hq/index.php?option=com_content&view=article&id=15474:number-of-older-adults-with-long-term-care-needs-will-triple-by-2050-paho-warns&Itemid=1926&lang=es#gsc.tab=0{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'https://www3.paho.org/hq/index.php?option=com_content&view=article&id=15474:number-of-older-adults-with-long-term-care-needs-will-triple-by-2050-paho-warns&Itemid=1926&lang=es#gsc.tab=0',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Piñánez García MC, Re Domínguez ML, Núñez Cantero AM. Sobrecarga
            en cuidadores principales de Adultos Mayores: Overload in primary
            caregivers of Older adults. Rev. Salud Pública Parag. [Internet]. 19
            de mayo de 2022 [citado 25 de febrero de 2023];6(2):10-5. Disponible
            en: https://revistas.ins.gov.py/index.php/rspp/article/view/81{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'https://revistas.ins.gov.py/index.php/rspp/article/view/81',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Reyes, T.; Triana, E.A.; González, R. (2019). Apoyo de Tecnologías
            de la Información y la Comunicación al Examen Periódico de Salud. En
            Libro: Ciencia e Innovación tecnológica, Vol. VII. Cap.
            Envejecimiento y longevidad satisfactoria. Rev. Opuntia Brava.
            Editorial Académica Universitaria., Las Tunas, 2019, ISBN:
            978-959-7225-51-5
          </Text>
          <Text>
            {' '}
            • Roca A. Nivel de sobrecarga, depresión y ansiedad en cuidadores
            primarios informales de pacientes con adicción a drogas en una
            institución psiquiátrica durante la pandemia de Covid-19 en Lima -
            Perú. [Tesis de pregrado]. Lima: Universidad Nacional Mayor de San
            Marcos, Facultad de Medicina, Escuela Académico Profesional de
            Medicina Humana; 2022.
            https://renati.sunedu.gob.pe/handle/sunedu/3123172{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'https://renati.sunedu.gob.pe/handle/sunedu/3123172',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Rodríguez-Mañas L, Rodríguez-Sánchez I. (2021). Research on
            frailty: Where we stand and where we need to go. J Am Med Dir Assoc.
            2021;22(3):520–3. doi: 10.1016/j.jamda.2021.01.061
          </Text>
          <Text>
            {' '}
            • Ruiz-Fernández, M.D., Hernández-Padilla, J.M., Or tiz-Amo, R.,
            Fernández-Sola, C., Fernández-Medina, I.M. y Granero-Molina, J.
            (2019). Predictor Factors of Perceived Health in Family Caregivers
            of People Diagnosed with Mild or Moderate Alzheimer’s Disease.
            International Journal of Environmental Research and Public Health,
            16(19), 3762-3776 https://doi.org/10.3390/ijerph16193762{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL('https://doi.org/10.3390/ijerph16193762').catch(
                  err => console.error('Error al visitar link', err),
                );
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Salinas-Rodríguez A, Manrique-Espinoza BS, Montañez-Hernández JC.
            Efecto de la sobrecarga del cuidador en la asociación entre
            discapacidad y calidad de vida en adultos mayores. salud publica
            mex. 2022;64(5):507-514.
          </Text>
          <Text>
            {' '}
            • Schulz, R., Beach, S. R., Czaja, S. J., Martire, L. M., & Monin,
            J. K. (2020). Family Caregiving for Older Adults. Annual review of
            psychology, 71, 635–659. https://bit.ly/37bVavK{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL('https://bit.ly/37bVavK').catch(err =>
                  console.error('Error al visitar link', err),
                );
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Silveira Corrêa, M., Borba de Lima, D., Lima Giacobbo, B.,
            Vedovelli, K., de Lima Argimon, K.I. y Bromberg, . (2019). Mental
            health in familial caregivers of Alz heimer’s disease patients: are
            the effects of chronic stress on cognition inevitable? The
            International Journal on the Biology of Stress, 22(1), 83-92
            https://doi.org/10.1080/10253890.2018.1510485{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'https://doi.org/10.1080/10253890.2018.1510485',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>
          <Text>
            {' '}
            • Soriano-Ursúa IG, Castrejón-Salgado R, Ávila-Jiménez L, et al.
            Sobrecarga del cuidador primario de pacientes con cáncer terminal.
            Aten Fam. 2022;29(2):85-90.
          </Text>
          <Text>
            {' '}
            • Triana, E.; Hernández, A.; Triana, E.A. (2019) Mejora del Examen
            Periódico de Salud Basado en Procesos y Evaluación de tecnologías en
            Libro: Ciencia e innovación tecnológica. Vol. VII Capitulo:
            Innovación y calidad en sistemas y servicios de salud. Opuntia
            Brava. Editorial Académica Universitaria., Las Tunas, 2019. ISBN:
            ISBN 978-959-7225-51-5
          </Text>
          <Text>
            {' '}
            • Triana, E. et al. (2019) Mejora del examen periódico de salud.
            Basado en procesos y evaluación de tecnologías. Editorial Académica
            Española, 2020.ISBN: ISBN 978-620-0-39029-5
          </Text>
          <Text>
            {' '}
            • Vilches Leiva, C., Aracena Ávila, J., & Canales Canales , C.
            (2021). Estrategias de prevención en cuidadores de pacientes con
            dependencia: Revisión exploratoria. Revista Confluencia,4(1),71-77.
            https://revistas.udd.cl/index.php/confluencia/article/view/604{' '}
            <TouchableRipple
              style={[styles.link, {borderColor: colors.primary}]}
              onPress={() => {
                Linking.openURL(
                  'https://revistas.udd.cl/index.php/confluencia/article/view/604',
                ).catch(err => console.error('Error al visitar link', err));
              }}>
              <Text>{'Visitar link 👆'}</Text>
            </TouchableRipple>
          </Text>

          <Text> </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('Anexo1')}>
          <Text>{'Anexo 1 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default Bibliografia;
