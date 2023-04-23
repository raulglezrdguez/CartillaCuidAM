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

const CuidadosPersonales = () => {
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
      await AsyncStorage.setItem('@sCuidadosPersonales', s);
    } catch (e) {
      console.log(e);
    }
  };

  useEffect(() => {
    const fetchScroll = async () => {
      try {
        const s = await AsyncStorage.getItem('@sCuidadosPersonales');
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
          onPress={() => navigate('EstructuraCasa')}>
          <Text>{'👈 Cambios en la Estrutura de la Casa'}</Text>
        </TouchableRipple>

        <Headline> </Headline>
        <Headline style={styles.bold}>Cuidados Personales</Headline>
        <Headline> </Headline>
        <View style={styles.text}>
          <Text> </Text>
          <Text>
            Los cuidados personales para el adulto mayor son muy importantes
            para su desarrollo cotidiano, es por ello que debemos someter
            regularmente al adulto mayor a un chequeo médico y nunca permitir
            que asista a consulta solo; revisar y vigilar qué tipo de medicinas
            toma y dárselas personalmente; analizar en forma detallada lo que le
            está sucediendo día tras día para informarle a su médico tratante;
            buscar signos de fiebre, enfriamiento o infección. Así mismo
            debemos:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            • Motivarlo a que haga una rutina sencilla de ejercicios
            diariamente, si se encuentra en condiciones médicas para hacerlo.
          </Text>
          <Text>
            {' '}
            • Si el caso lo amerita, podemos poner una señal que ubique el baño,
            para que el adulto mayor lo pueda encontrar; llevarlo al baño en un
            horario establecido, cada dos o tres horas; si el adulto mayor no
            orina cuando esté en el baño, podemos darle agua o abrir la llave
            del lavabo para que lo asocie con el deseo de orinar.
          </Text>
          <Text>
            {' '}
            • Si es el caso ponerle calzones y pañales desechables y proteger la
            piel del adulto mayor con vaselina y talco.
          </Text>
          <Text>
            {' '}
            • Reducir el número de prendas de vestir; buscar ropa que sea
            lavable y que no requiera planchado.
          </Text>
          <Text>
            {' '}
            • Revisar la temperatura de los alimentos para el adulto mayor; en
            caso de asistir a restaurantes, escoger aquellos de servicio rápido,
            donde haya tranquilidad y gran variedad de alimentos, explicarle al
            mesero la enfermedad de su familiar si se cree necesario, esto
            facilita mucho las cosas.
          </Text>
          <Text>
            {' '}
            • Si el adulto mayor ya no come debe apoyársele en la alimentación
            con biberón o por sonda; esto queda a decisión de la familia o
            persona cuidadora y desde luego con asesoría profesional.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>Aseo personal.</Text>
          <Text> </Text>
          <Text>
            El cuidado personal relacionado con el maquillaje para las mujeres,
            cepillado del cabello, la higiene bucal, el cuidado de las uñas y la
            acción de afeitarse, en algunos casos requerirá de la ayuda de la
            persona cuidadora, ya que el adulto mayor quizá carece de las
            habilidades motoras o de memoria para hacerlas por sí mismo, o tenga
            confusión en cuanto a los pasos a seguir. Por ello:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            • Mantendremos el baño ordenado y con el menor número de objetos
            posible.
          </Text>
          <Text>
            {' '}
            • Colocaremos los artículos en secuencia, por ejemplo: junto al
            espejo el peine, sobre el lavabo el cepillo de dientes, la pasta
            dental y el vaso, etcétera.
          </Text>
          <Text>
            {' '}
            • Así mismo, en algunos casos colocaremos instrucciones sencillas
            junto al espejo del baño que describan los pasos a seguir, ya sea
            por escrito o con dibujos, donde se represente una persona
            peinándose o afeitándose, o con una foto de alguien cepillándose los
            dientes.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>Problemas al vestirse y desvestirse.</Text>
          <Text> </Text>
          <Text>
            Es probable que el adulto mayor haya perdido o esté perdiendo
            gradualmente habilidades motoras y de coordinación, olvide la manera
            de vestirse y desvestirse y pierda paulatinamente su autoestima. En
            ocasiones también insiste siempre en ponerse la misma ropa o se la
            pone al revés por ello:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            • Verificaremos con ayuda del médico, que el adulto mayor no padece
            un estado depresivo.
          </Text>
          <Text>
            {' '}
            • Nos cercioraremos de que su ropa sea la adecuada según el clima, a
            veces los adultos mayores se ponen ropa ligera en invierno y se
            abrigan cuando hace calor; es por eso que deben ser muy vigilados
            cuando esto suceda.
          </Text>
          <Text>
            {' '}
            • Si hace falta le mostraremos la ropa y cómo vestirse; podemos
            recurrir a la mímica.
          </Text>
          <Text> • Podemos mostrarle su ropa en orden y secuencia.</Text>
          <Text>
            {' '}
            • Comprarle ropa holgada y zapatos de cordones un medio número mayor
            de los que usa.
          </Text>
          <Text>
            {' '}
            • De preferencia utilizaremos broches adhesivos en ropa y zapatos;
            la ropa deportiva y los conjuntos de dos piezas facilitan las
            maniobras, como se mencionó con anterioridad.
          </Text>
          <Text>
            {' '}
            • Le permitiremos que usen joyería de fantasía no valiosa, con la
            finalidad de no exponerlo a riesgos en la calle.
          </Text>
          <Text>
            {' '}
            • Si la persona insiste en ponerse siempre lo mismo, compraremos dos
            juegos de ropa o bien por la noche se lavará la ropa usada.
          </Text>
          <Text>
            {' '}
            • Si se desviste en lugares o en momentos inapropiados, tal vez
            tiene calor o necesita ir al baño o está cansado y quiere ir a la
            cama.
          </Text>
          <Text>
            {' '}
            • Póngale perfume y maquillaje discreto si es mujer, o rasúrelo con
            frecuencia si es hombre.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>Renuencia a bañarse.</Text>
          <Text> </Text>
          <Text>
            El adulto mayor puede dejar de bañarse porque ha perdido el interés
            por su higiene personal o porque se han incrementado sus miedos o
            fobias al agua y a las actividades relacionadas con el baño diario.
            También puede deberse a la vergüenza que siente el adulto mayor al
            ser asistido o vigilado, o al temor a meterse y salirse de la tina
            debido a la dificultad para recordar cuándo se bañó la última vez, a
            la apatía, a la depresión o al miedo a caerse. Por ello
            recomendamos:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            • Poner en orden secuencial los objetos necesarios para bañarse:
            jabón, gel de baño, esponja para enjabonarse, toalla para secarse,
            ropa limpia, etcétera.
          </Text>
          <Text>
            {' '}
            • Regular la temperatura del agua y el chorro de la regadera o
            ducha, o el nivel de la tina o cubo.
          </Text>
          <Text>
            {' '}
            • Colocar barras de apoyo (asideros) y tapetes de hule
            antideslizante o en su defecto: una frazada para pisos o toalla en
            el piso de la tina o de la regadera o ducha, pues tenemos que
            asegurarnos de que el piso no sea resbaloso.
          </Text>
          <Text>
            {' '}
            • Colocar una silla dentro de la tina o de la ducha si se le
            dificulta al adulto mayor movilizarse o crear una estructura de
            hormigón recubierta por azulejos o pulir bien la superficie que
            después permita una adecuada higienización. Instalar, de preferencia
            y si los recursos lo permiten, una regadera flexible de mano; esto
            facilita mucho ya sea bañar al adulto mayor o que lo haga él mismo
            cómodamente sentado.
          </Text>
          <Text>
            {' '}
            • Colgar el jabón y la esponja de un cordón de la regadera de la
            ducha para facilitar su uso.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>El cuidado del pelo.</Text>
          <Text> </Text>
          <Text>
            El pelo necesita que se cepille diariamente para que esté sano. Esta
            operación cumple tres funciones principales: estimula la circulación
            sanguínea del cuero cabelludo, distribuye el aceite a lo largo de la
            fibra del pelo y ayuda a asearlo, la mayoría de las personas emplea
            un cepillo para esto. El cabello largo es un problema para los
            pacientes cuando no pueden ir a la peluquería o barbería durante un
            tiempo prolongado. Para evitar que se enrede tienen que peinarse al
            menos una vez al día. La limpieza y aseo del pelo, tanto en los
            hombres como en las mujeres se relaciona estrechamente con el
            sentido de bienestar. A menudo, cuando los pacientes comienzan a
            sentirse mejor, el arreglarse el pelo es un estímulo para la moral y
            los sentimientos positivos sobre su apariencia. No está prohibido
            teñirse el cabello si la persona lo desea, si su salud se lo permite
            y si económicamente puede efectuar el pago del servicio.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>Hábitos intestinales.</Text>
          <Text> </Text>
          <Text>
            Las horas de la defecación y la cantidad de heces expulsadas son
            aspectos tan individuales como la frecuencia de la defecación.
            Algunas personas defecan normalmente una vez al día. Otras defecan
            de 3 a 4 veces por semana. Los patrones que suelen seguir los
            individuos dependen enormemente de la educación temprana y de la
            conveniencia. La mayoría de las personas desarrollan hábitos de
            defecación después del desayuno, cuando los reflejos gastrocólico y
            duodenocólico producen los movimientos de masa (contenido sólido) en
            el intestino grueso. La cantidad de heces depende de la cantidad de
            alimento ingerido, en particular de la cantidad de masa y de líquido
            que haya en la dieta. El estreñimiento se refiere al paso de heces
            pequeñas, secas y duras o a la ausencia de heces durante un cierto
            tiempo. Es importante definir el estreñimiento en relación con el
            patrón de eliminación regular de la persona.
          </Text>
          <Text> </Text>
          <Text>Causas del estreñimiento:</Text>
          <Text> </Text>
          <Text> • Hábitos intestinales irregulares.</Text>
          <Text> • Abuso de laxantes.</Text>
          <Text> • Aumento del estrés psicológico.</Text>
          <Text> • Dieta inapropiada.</Text>
          <Text> • Medicaciones.</Text>
          <Text> • Ejercicio insuficiente.</Text>
          <Text> • Procesos de enfermedad.</Text>
          <Text> </Text>
          <Text>Consejos para combatir el estreñimiento:</Text>
          <Text> </Text>
          <Text>
            {' '}
            • Establecer una hora fija durante 15 minutos diariamente.
          </Text>
          <Text> • Aumento de la ingesta de líquidos.</Text>
          <Text>
            {' '}
            • Aumento de la ingesta de fibra (salvado de trigo, cereal, frutas,
            verduras).
          </Text>
          <Text> • Aumento del ejercicio físico en lo posible.</Text>
          <Text> </Text>
          <Text>
            Ocasionalmente el paciente geriátrico puede necesitar laxantes para
            compensar la flacidez de su musculatura abdominal y rectal, lo que
            ralentiza la expulsión de las heces. Esta dificultad para mantener
            un buen control muscular, se ve favorecida por la falta de actividad
            propia de los ancianos. Se deben utilizar los laxantes sólo cuando
            se hayan demostrado inoperantes otras medidas alternativas, como por
            ejemplo aumentar la ingesta de líquidos y la fibra. Los laxantes los
            debe ordenar el médico. Nunca se debe administrar laxantes a un
            paciente con dolor abdominal que no tenga valoración profesional del
            personal sanitario.
          </Text>
          <Text> </Text>
          <Text>
            Es importante una evaluación por especialista en nutrición para
            contribuir a la correcta selección de los alimentos.
          </Text>
          <Text> </Text>
          <Text style={styles.bold}>Alimentación en el adulto mayor.</Text>
          <Text> </Text>
          <Text>
            En la cuestión alimenticia la recomendación es que si el adulto
            mayor tiene una dieta sugerida por el médico la sigamos
            puntualmente. Por lo tanto, la labor de la persona cuidadora
            consistirá en una serie de acciones que favorezcan al adulto mayor
            el apego a la dieta. Por ejemplo:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            • Arreglar la mesa en forma atractiva para quienes puedan acudir a
            ella.
          </Text>
          <Text>
            {' '}
            • Usar manteles, platos y vasos de plástico de colores vivos
            (fáciles de distinguir) para evitar que se rompan y el adulto mayor
            no se lastime.
          </Text>
          <Text>
            {' '}
            • Verificar la temperatura adecuada de los alimentos para que no
            estén demasiado calientes o muy fríos.
          </Text>
          <Text>
            {' '}
            • Preparar platillos que sean del gusto del paciente. Los olores de
            la comida pueden avivar el interés por comer.
          </Text>
          <Text>
            {' '}
            • Servir un guisado a la vez y en cantidades pequeñas. De
            preferencia bocadillos que el adulto mayor pueda comer solo; es
            importante mantener su autosuficiencia el mayor tiempo posible.
          </Text>
          <Text>
            {' '}
            • No darle de comer en la boca mientras pueda hacerlo por sí mismo.
          </Text>
          <Text>
            {' '}
            • Recordarle el uso de cubiertos cuando tome los alimentos con las
            manos.
          </Text>
          <Text>
            {' '}
            • Tener paciencia ante los incidentes en la mesa y pedir que su
            familia también la tenga.
          </Text>
          <Text>
            {' '}
            • La alimentación de la persona que se cuida en la cama debe ser más
            cuidadosa.
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>
            Algunos puntos a destacar al ingerir los alimentos, son:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            a. Tomar 8 raciones (vasos) o más de agua o equivalentes de líquidos
            (sopas, jugos). Es decir, 1,5 litros. Tome en cuenta la ingesta
            diaria de líquidos suficientes. Es importante mantener una toma
            constante de agua en el día, y sobre todo en aquellas personas que
            tienen más de 85 años de edad, problemas de memoria, dificultad para
            realizar sus actividades de la vida diaria básica, algún grado de
            dependencia funcional, Alzheimer, cuatro o más enfermedades crónicas
            (diabetes, hipertensión arterial, bronquitis, infección de vías
            urinarias, etc.), toma más de cuatro medicamentos, fiebre, bajas
            oportunidades de ingestión de líquidos y/o dificultades en la
            comunicación.
          </Text>
          <Text>
            {' '}
            b. Procure que coma 6 raciones o más del grupo de cereales y
            derivados: pan, cereales, arroz, pasta, tortillas y frijoles. En
            caso de tener problemas de masticación, se puede preparar papillas o
            purés. Si los platos de pasta y arroz resultan un poco secos, se les
            puede acompañar con caldos, lo que ayuda a aumentar la toma de agua.
          </Text>
          <Text>
            {' '}
            c. Dos raciones o más del grupo de verduras y hortalizas. De las 2
            raciones diarias, al menos una de ellas en crudo, en forma de
            ensalada. Los vegetales serán preferentemente cocidos o en forma de
            purés, cremas o sopas. El caldo donde se cocinan las verduras debe
            de agregarse a la preparación de sopas, para aprovechar los
            nutrientes que se quedaron allí. Cuando existen problemas de
            masticación, también puede ser interesante el consumo de jugos de
            varios vegetales.
          </Text>
          <Text>
            {' '}
            d. Tres raciones o más del grupo de frutas. Muchas veces son
            rechazadas por su dureza. Para evitarlo, se recomienda consumirlas
            en forma de jugos, purés, asadas o fruta fresca en trozos. Deben
            lavarse bien y consumirse maduras y peladas. Las frutas en almíbar y
            las mermeladas deben consumirse moderadamente ya que aportan gran
            cantidad de azúcares simples, aunque pueden ser de utilidad en el
            caso de personas con inapetencia.
          </Text>
          <Text>
            {' '}
            e. Tres raciones o más del grupo de lácteos: Leche, yogur, queso,
            etc. Los lácteos son imprescindibles para asegurar un aporte
            adecuado de calcio, pero además son fáciles de masticar y conservar
            y con un elevado contenido en agua y proteínas. Los yogures son, en
            general, mejor tolerados que la leche y ayudan a superar la
            deficiencia en lactasa gracias al proceso de fermentación. Los
            quesos que se recomiendan son los frescos debido a su consistencia y
            bajo aporte de grasas. Los postres lácteos dulces (flanes, natillas,
            etc), deberán consumirse de forma moderada por el aporte de azúcares
            simples y grasas.
          </Text>
          <Text>
            {' '}
            f. Dos raciones del grupo de alimentos proteicos: carne, pollo,
            pescado, frijoles, huevos. Las carnes deben ser preferentemente sin
            grasa y consumirse unas 3 ó 4 veces por semana, siendo menor el
            consumo de carnes rojas y los embutidos. Los platillos que facilitan
            su masticación son las albóndigas o la carne picada. El cocido o
            hervido de la carne consigue ablandarla por lo que es más fácil de
            comer. Los pescados también se consumirán 3 ó 4 veces a la semana.
            Es un tipo de alimento muy bien aceptado por las personas mayores,
            ya que tiene una buena digestibilidad y es muy fácil de masticar.
            Con respecto a los huevos no se deben superar las 3-4 unidades a la
            semana. La preparación culinaria más adecuada es en forma de
            tortilla, cuya textura y digestión es excelente y además su
            elaboración permite la incorporación de todo tipo de alimentos como
            verduras, carnes picadas, pescado, patatas, etc., que enriquecen el
            aporte de nutrientes.
          </Text>
          <Text>
            {' '}
            g. Aceites Preferir los aceites de cártamo, oliva, maíz o girasol.
          </Text>
          <Text>
            {' '}
            h. Condimentos: Se utilizarán al gusto de la persona, excepto la
            sal, cuyo uso deberá consultarse con el médico.
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>Nutrición en el adulto mayor.</Text>
          <Text> </Text>
          <Text>
            Es muy importante tomar en cuenta la nutrición del adulto mayor, ya
            que ésta interactúa con el envejecimiento en varias formas:
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            1. La nutrición y formas de estilo de vida contribuyen a acelerar o
            disminuir la pérdida de tejidos y funciones del cuerpo.
          </Text>
          <Text>
            {' '}
            2. Una mala alimentación es uno de los factores que determinan la
            presencia de enfermedades crónicas degenerativas las cuales son
            frecuentes al incrementarse la edad.
          </Text>
          <Text>
            {' '}
            3. La mayoría de las personas comen menos a medida que la edad
            avanza debido a una reducción tanto en su dieta como en su apetito.
            La pérdida importante del hambre debe ser evaluada por un médico o
            nutriólogo.
          </Text>
          <Text>
            {' '}
            4. Es importante distinguir entre la persona mayor sana y la persona
            mayor enferma. En la sana, la alimentación equilibrada debe ser
            suficiente para prevenir la falta de sustancias nutritivas, mientras
            que la persona enferma puede tener una mayor necesidad de alimento
            el cual no se evalúa adecuadamente debido a la pérdida del apetito
            que acompaña a la enfermedad.
          </Text>
          <Text> </Text>
          <Text>
            Por todo esto, es necesario llevar a cabo una alimentación
            saludable, comiendo la cantidad y calidad de alimentos que nuestro
            cuerpo necesita, ya que una adecuada nutrición influye directamente
            en la salud, y, por lo tanto, en la calidad de vida. Una
            alimentación se considera sana cuando es: Variada + Equilibrada +
            Agradable + Repartida.
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>Dificultades a la hora de comer.</Text>
          <Text> </Text>
          <Text>
            Como ya hemos mencionado, con el paso del tiempo, la alimentación en
            el adulto mayor puede convertirse en un problema debido a la
            disminución del rendimiento físico, así como también a la pérdida
            paulatina de ciertas habilidades. Por ello es necesario que se tomen
            ciertas precauciones a la hora de comer. A continuación, se
            presentan algunos de los casos más típicos con los que podría
            enfrentarse la persona cuidadora:
          </Text>
          <Text> </Text>
          <Text>Falta de piezas dentales o placas dentales mal adaptadas:</Text>
          <Text> </Text>
          <Text>
            {' '}
            1. Fomentar la higiene bucal y la revisión por parte del dentista
            (estomatólogo) para procurar la limpieza dental, la atención a las
            caries, inflamación de encías y el ajuste de placas dentales.
          </Text>
          <Text> 2. Proporcionar preparaciones fraccionadas y trituradas.</Text>
          <Text>
            {' '}
            3. No apresurar las comidas, procurar una masticación adecuada.
          </Text>
          <Text>
            {' '}
            4. Evitar alimentos duros o fibrosos (ejemplo carne en trozos
            grandes, tacos dorados, tostadas, etc.)
          </Text>
          <Text>
            {' '}
            5. Preparar alimentos con carne molida o deshebrada, o alimentos de
            consistencia suave bien cocidos.
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>
            Problemas en la fuerza, control y movilidad de los brazos.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            1. Adaptación en los platos (de preferencia usar platos hondos),
            vasos y cubiertos que faciliten la alimentación.
          </Text>
          <Text>
            {' '}
            2. Es importante adaptarse a la velocidad de alimentación de las
            personas mayores.
          </Text>
          <Text>
            {' '}
            3. La consistencia del alimento variará de acuerdo a la capacidad de
            deglución del adulto mayor.
          </Text>
          <Text>
            {' '}
            4. Es de suma importancia establecer un espacio propio en la mesa
            para la persona, esto se logra utilizando mantelitos.
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>Alteraciones en la visión.</Text>
          <Text> </Text>
          <Text>
            {' '}
            1. Presentar los alimentos en forma atractiva en cuanto el color y
            variedad de los alimentos.
          </Text>
          <Text>
            {' '}
            2. Proporcionar espacio suficiente para el acomodo del adulto mayor
            en la mesa, que esté bien iluminado y decorado en forma agradable.
          </Text>
          <Text> 3. Servir las preparaciones en utensilios de colores.</Text>
          <Text> </Text>
          <Text style={styles.bold}>Incontinencias fecal y urinaria.</Text>
          <Text> </Text>
          <Text>
            La <Text style={styles.italic}>incontinencia fecal</Text> se refiere
            a la pérdida de la capacidad voluntaria para controlar las descargas
            fecales y gaseosas a través del esfínter anal. La incontinencia
            puede ocurrir en momentos específicos, como después de las comidas o
            irregularmente. La incontinencia fecal se asocia con funcionamiento
            deteriorado del esfínter, traumas de la médula espinal, o tumores.
          </Text>
          <Text> </Text>
          <Text>
            A muchos pacientes incontinentes se les puede ayudar a recuperar el
            control intestinal con un programa planificado de reeducación
            intestinal, estableciendo un horario regular siempre que sea
            posible.
          </Text>
          <Text> </Text>
          <Text>
            {' '}
            • Cuidado meticuloso de la piel para reducir el riesgo de úlceras
            por decúbito y excoriaciones.
          </Text>
          <Text>
            {' '}
            • Lavado de la zona perianal con agua templada y jabón cuando sea
            necesario y tras secado escrupuloso, aplicación de pomadas de óxido
            de zinc.
          </Text>
          <Text>
            {' '}
            • Prevenir el estreñimiento y la formación de fecalomas mediante la
            administración de fibra en la dieta.
          </Text>
          <Text>
            {' '}
            • A menos que esté contraindicado, procurar que beba de 1.000 a
            1.500 ml (1 litro o 1,5 litros) de líquidos al día.
          </Text>
          <Text>
            {' '}
            • Aumentar el grado de actividad, en la medida de lo posible.
          </Text>
          <Text>
            {' '}
            • Revisar los medicamentos que toma y consultar por si alguno de
            ellos es la causa.
          </Text>
          <Text>
            {' '}
            • Sugerir el uso de culeros y pañales desechables y en su defecto
            utilizar culeros y pañales de tela antiséptica o sábanas y pañales
            de tela de algodón.
          </Text>
          <Text> </Text>
          <Text>
            La <Text style={styles.italic}>incontinencia urinaria</Text> es la
            incapacidad temporal o permanente de los músculos del esfínter
            externo para controlar el flujo de orina desde la vejiga. Causas:
            edad avanzada, hipertrofia prostática, múltiples partos con
            debilitamiento del suelo pélvico, lesiones de la médula espinal,
            etc.
          </Text>
          <Text> </Text>
          <Text style={styles.italic}>Programa de Educación Vesical.</Text>
          <Text> </Text>
          <Text>
            {' '}
            • Establecer un horario de evacuación regular. Por ej. cada una o
            dos horas, haya o no sensación de urgencia.
          </Text>
          <Text>
            {' '}
            • Es esencial una ingesta líquida diaria suficiente (al menos 1 500
            ml).
          </Text>
          <Text>
            {' '}
            • Para evitar la nicturia restringir la ingesta de líquidos antes de
            acostarse. Pero no olvidarlo en el horario de la comida o de la
            cena.
          </Text>
          <Text>
            {' '}
            • Aumentar la actividad física para mejorar el tono muscular y la
            circulación sanguínea, ayudando así al paciente a controlar la
            evacuación.
          </Text>
          <Text>
            {' '}
            • Asegurarse de que el orinal o silla sanitaria esté a su alcance.
          </Text>
          <Text>
            {' '}
            • Estimular los ejercicios perineales, para aumentar el tono de los
            músculos concernientes a la micción, en particular de los músculos
            perineales y abdominales.
          </Text>
          <Text>
            {' '}
            • Las contracciones periódicas de los músculos perineales y el paro
            intencionado y la vuelta a orinar pueden ayudar al paciente a lograr
            el control de la evacuación (Ejercicios de Kegel). (Tantas veces
            como pueda)
          </Text>
          <Text>
            {' '}
            • Como medida de protección, aplicar cobertores protectores para
            mantener las sábanas secas y proporcionar también fundas
            impermeables para el colchón.
          </Text>
          <Text>
            {' '}
            • Se debe cambiar a los pacientes siempre que estén mojados para
            mantener la piel seca.
          </Text>
          <Text>
            {' '}
            • Limpiar y secar la piel al mismo tiempo de cambiar las sábanas
            para prevenir la caída de la piel.
          </Text>
          <Text>
            {' '}
            • En los pacientes encamados cuya incontinencia no se pueda
            controlar, será necesario la aplicación de pañales para
            incontinencia y, en algunos casos, la de una sonda vesical o de un
            colector de orina en los hombres.
          </Text>

          <Text> </Text>
        </View>

        <Headline> </Headline>
        <Headline> </Headline>

        <TouchableRipple
          style={[styles.link, {borderColor: colors.primary}]}
          onPress={() => navigate('Sobrecarga')}>
          <Text>{'Sobrecarga de la persona cuidadora 👉'}</Text>
        </TouchableRipple>
        <Headline> </Headline>
        <Headline> </Headline>
      </View>
    </ScrollView>
  );
};

export default CuidadosPersonales;
