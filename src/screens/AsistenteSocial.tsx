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

const AsistenteSocial = () => {
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
      await AsyncStorage.setItem('@sAsistenteSocial', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sAsistenteSocial');
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
          onPress={() => navigate('SistemaCuidados')}>
          <Text>
            {'👈 Hacia un sistema de cuidados en adultos mayores dependientes'}
          </Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>
          Del asistente social a domicilio
        </Headline>
        <Headline> </Headline>
        <View style={styles.text}>
          <Text style={styles.bold}>Concepto:</Text>
          <Text> </Text>
          <Text>
            Consiste en atenciones y cuidados básicos de carácter personal,
            doméstico y social, que se dispensa en el domicilio del beneficiario
            y que procura además otros apoyos complementarios.
          </Text>
          <Text> </Text>
          <Text>
            El Asistente Social a Domicilio (ASD) es una persona con
            conocimientos básicos para asumir los cuidados en el hogar de
            personas cuya capacidad funcional le impidan un normal desempeño de
            sus Actividades de la Vida Diaria (AVD), que cumple determinados
            requisitos para ejercer la actividad y al que se le garantizan
            también los derechos laborales contenidos en la legislación vigente.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>Objetivos:</Text>
          <Text> </Text>
          <Text>
            ➢ Lograr que la persona se mantenga en el seno de su hogar logrando
            la satisfacción de sus principales necesidades biológicas,
            psicológicas y comunicativas.
          </Text>
          <Text>
            ➢ Mantener al máximo posible la calidad de vida de la persona que se
            atiende.
          </Text>
          <Text>
            ➢ Lograr una mejor ejecución de las AVD de la persona afectada
            buscando recuperar su independencia, si es posible.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>Principales funciones:</Text>
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

export default AsistenteSocial;
