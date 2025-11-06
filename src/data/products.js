import basecandyglow from '../assets/images/maquillaje/basecandyglow.png'
import paletaglow from '../assets/images/maquillaje/paletaglow.png'
import eyelinerpopwings from '../assets/images/maquillaje/eyelinerpopwings.png'
import flutterlash from '../assets/images/maquillaje/flutterlash.png'
import sugarkiss from '../assets/images/maquillaje/sugarkiss.png'
import dualblush from '../assets/images/maquillaje/dualblush.png'
import honeycover from '../assets/images/maquillaje/honeycover.png'
import candymist from '../assets/images/maquillaje/candymist.png'
import sunrisekiss from '../assets/images/maquillaje/sunrisekiss.png'
import shinnystar from '../assets/images/maquillaje/shinnystar.png'
import sugarsmoothprimer from '../assets/images/maquillaje/sugarsmoothprimer.png'
import velvettoastbase from '../assets/images/maquillaje/velvettoastbase.png'
import honeydropconcealer from '../assets/images/maquillaje/honeydropconcealer.png'
import cinamonswirlbronzer from '../assets/images/maquillaje/cinamonswirlbronzer.png'
import peachpopblush from '../assets/images/maquillaje/peachpopblush.png'
import glowlessgoldhighlighter from '../assets/images/maquillaje/glowleesgoldhighligther.png'
import cinnamonroast from '../assets/images/maquillaje/cinnamonroast.png'
import mokalashes from '../assets/images/maquillaje/mokalashes.png'
import toastednude from '../assets/images/maquillaje/toastednude.png'
import settingspray from '../assets/images/maquillaje/settingspray.png'
import gellimpiadorcoolcucumber from '../assets/images/skincare/gellimpiadorcoolcucumber.png'
import tonicohoneydewmist from '../assets/images/skincare/tonicohoneydewmist.png'
import serumbotanicaldrops from '../assets/images/skincare/serumbotanicaldrops.png'
import cremacocunutglow from '../assets/images/skincare/cremacocunutglow.png'
import sunkissshield from '../assets/images/skincare/sunkissshield.png'
import mascarillacucumberbliss from '../assets/images/skincare/mascarillacucumberbliss.png'
import exfoliantelemonsugar from '../assets/images/skincare/exfoliantelemonsugar.png'
import gelhidratanteaquapop from '../assets/images/skincare/gelhidratanteaquapop.png'
import hidratantesweetlipsbalm from '../assets/images/skincare/hidratantesweetlipsbalm.png'
import dewytoner from '../assets/images/skincare/dewytoner.png'
import sugarbrushes from '../assets/images/accesorios/sugarbrushes.png'
import sugarpuff from '../assets/images/accesorios/sugarpuff.png'
import sugarcleaner from '../assets/images/accesorios/sugarcleaner.png'
import sugarwashbag from '../assets/images/accesorios/sugarwashbag.png'
import sugareyelashcurler from '../assets/images/accesorios/sugareyelashcurler.png'
import sugarmirror from '../assets/images/accesorios/sugarmirror.png'
import sugareyelash from '../assets/images/accesorios/sugareyelashcurler.png'
import sugarlashseparator from '../assets/images/accesorios/sugarlashseparator.png'
import sugarbox from '../assets/images/accesorios/sugarbox.png'
import sugarset from '../assets/images/accesorios/sugarset.png'
// Base de datos corregida
export const allProducts = [
    // --- PRODUCTOS DE MAQUILLAJE ---
    { id: 1, name: 'Base Candy Glow', category: 'maquillaje', subCategory: 'Bases', color: '03', price: 35.000, imageUrl: basecandyglow, description: 'Base de cobertura ligera con acabado luminoso, pensada para lograr un aspecto natural.' },
    { id: 2, name: 'Paleta Glow', category: 'maquillaje', subCategory: 'Paletas', color: 'Multi-tono', price: 45.000, imageUrl: paletaglow, description: 'Incluye tonos pastel y colores intensos que permiten crear combinaciones variadas con enfoque creativo.' },
    { id: 3, name: 'Pop Wings', category: 'maquillaje', subCategory: 'Delineadores', color: 'Negro', price: 15.000, imageUrl: eyelinerpopwings, description: 'Fórmula de trazo preciso y fijación prolongada, diseñada para delineados definidos tipo "winged eyeliner".' },
    { id: 4, name: 'Flutter Lash', category: 'maquillaje', subCategory: 'Pestañina', color: 'Negro', price: 20.000, imageUrl: flutterlash, description: 'Añade volumen, alarga y separa las pestañas sin generar grumos' },
    { id: 5, name: 'Sugar Kiss', category: 'maquillaje', subCategory: 'Labiales', color: 'Rojo', price: 20.000, imageUrl: sugarkiss, description: 'Tinte labial con pigmento suave y acabado natural.' },
    {id:  6 , name:  'Dual Blush', category: 'maquillaje', subCategory: 'Rubores', color: 'Rosa Pastel', price: 30.000, imageUrl: dualblush, description: 'Producto dual que combina rubor e iluminador en un solo formato, pensado para dar brillo puntual en las mejillas.'},
    { id: 7, name: 'Honey Cover', category: 'maquillaje', subCategory: 'Correctores', color: '01,02,03,04,05', price: 30.000, imageUrl: honeycover, description: 'Corrector de cobertura media que deja un acabado glow en la piel y tiene un efecto hidratante' },
    { id: 8, name: 'Candy Mist', category: 'maquillaje', subCategory: 'Fijadores', color: 'Transparente', price: 35.000, imageUrl: candymist, description: ' Spray fijador con efecto refrescante, que ayuda a conservar el maquillaje durante más tiempo.' },
    { id: 9, name: 'Sunrise Kiss', category: 'maquillaje', subCategory: 'Bronzer', color: 'Marrón', price: 35.000, imageUrl: sunrisekiss, description: 'Bronzer  de tono calido para dar un efecto de bronceado perfecto para el verano' },
    { id: 10, name: 'Shiny Star', category: 'maquillaje', subCategory: 'Iluminador', color: 'Perlado', price: 25.000, imageUrl: shinnystar, description: 'Iluminador en polvo para dar luminosidad a la piel, con particula pequeña para aspecto natural y saludable' },
    { id: 11, name: 'Sugar Smooth Primer', category: 'maquillaje', subCategory: 'Primers', color: 'Transparente', price: 25.000, imageUrl: sugarsmoothprimer, description: 'Prepara la piel minimizando poros y textura; acabado mate, suave al tacto, ayuda a prolongar el maquillaje.' },
    { id: 12, name: 'Velvet Toast Base', category: 'maquillaje', subCategory: 'Bases', color: '01,02,03,04,05', price: 35.000 , imageUrl: velvettoastbase, description: 'Cobertura ligera-media, textura líquida, fórmula oil-free con control de brillo; SPF 30, iguala el tono sin verse pesada.' },
    { id: 13, name: 'Honey Drop Concealer', category: 'maquillaje', subCategory: 'Correctores', color: '01,02,03,04,05', price: 25.000, imageUrl: honeydropconcealer, description: 'Textura cremosa pero con acabado semi-mate para mayor duración; corrige ojeras o manchas sin resecar.' },
    { id: 14, name: 'Cinnamon Swirl Bronzer', category: 'maquillaje', subCategory: 'Bronzers', color: 'Marrón', price: 20.000, imageUrl: cinamonswirlbronzer, description: 'Polvo suave, color caramelo-marrón, sin brillo, ideal para contorno o calidez natural.' },
    { id: 15, name: 'Peach Pop Blush', category: 'maquillaje', subCategory: 'Rubores', color: 'Durazno', price: 20.000, imageUrl: peachpopblush, description: 'Fórmula tipo crema-a-polvo, se difumina fácilmente dejando un acabado mate y natural.' },
    { id: 16, name: 'Glowless Gold Highlighter', category: 'maquillaje', subCategory: 'Iluminadores', color: 'Oro', price: 20.000, imageUrl: glowlessgoldhighlighter, description: 'Iluminador con partícula gruesa y escarchada aporta dimensión con un efecto sutil, tipo "highlight sin brillo".' },
    { id: 17, name: 'Cinnamon Roast', category: 'maquillaje', subCategory: 'Paletas', color: 'Multi-tono', price: 25.000, imageUrl: cinnamonroast, description: 'Paleta de 9 sombras con 5 tonos tierras y cálidos totalmente matte y 4 tonos escarchados' },
    { id: 18, name: 'Moka Lashes', category: 'maquillaje', subCategory: 'Pestañina', color: 'Marrón', price: 20.000, imageUrl: mokalashes, description: 'Fórmula ligera, que alarga, da volumen y brinda un tono cálido y color chocolate a tus pestañas.' },
    {id:  19, name: 'Toasted Nude', category: 'maquillaje', subCategory: 'Labiales', color: 'Nude', price: 15.000, imageUrl: toastednude, description: 'Labial matte de consistencia suave e hidratante para tus labios, tono nude con subtono cálido que brinda una larga duración.' },
    {id:  20, name: 'Setting Spray', category: 'maquillaje', subCategory: 'Fijadores', color: 'Transparente', price: 28.000, imageUrl: settingspray, description: 'Fija tu maquillaje , dándole una larga duración y un acabado matte pero sin quitarle la hidratación a tu piel.' },

    // --- PRODUCTOS DE SKINCARE ---
    
    { id: 21, name: 'Gel Limpiador Cool Cucumber', category: 'skincare', subCategory: 'Limpiadores', color: 'Transparente', price: 15.000, imageUrl: gellimpiadorcoolcucumber, description: 'Formulado con extracto de pepino, miel orgánica y agua de rosas, este gel transforma tu rutina en un momento de frescura. Su espuma ligera elimina impurezas y exceso de grasa mientras mantiene el equilibrio natural de tu piel.Gel limpiador facial con extracto de pepino para una limpieza suave y refrescante.' },
    { id: 22, name: 'Tónico Honey Dew Mist', category: 'skincare', subCategory: 'Tónicos', color: 'Trasparente', price: 25.000, imageUrl: tonicohoneydewmist, description: 'Este tónico facial está enriquecido con agua de coco, aloe vera e ingredientes coreanos, para revitalizar la piel y prepararla para la hidratación. Su formato en spray lo hace perfecto para llevar contigo y refrescar el rostro en cualquier momento del día.' },
    { id: 23, name: 'Serum Botanical Drops', category: 'skincare', subCategory: 'Serums', color: 'Transparente', price: 40.000, imageUrl: serumbotanicaldrops, description: 'El poder del ácido hialurónico vegetal, té verde y extracto de flor de loto en unas gotas ligeras que se absorben al instante. Hidrata, calma y deja un acabado radiante.' },
    { id: 24, name: 'Crema Coconut Glow', category: 'skincare', subCategory: 'Hidratantes', color: 'Blanco', price: 27.000, imageUrl: cremacocunutglow, description: 'Con aceite de coco virgen, manteca de karité y ácido hialurónico natural, esta crema ligera se funde con la piel para dejar un acabado suave y luminoso sin sensación grasosa.' },
    { id: 25, name: 'Sunkiss Shield', category: 'skincare', subCategory: 'Protectores Solares', color: 'Blanco', price: 40.000, imageUrl: sunkissshield, description: 'Cuida tu piel del sol sin perder su brillo natural. Formulado con filtros minerales naturales, extracto de aloe vera y vitamina E, protege contra los rayos UVA/UVB mientras hidrata y deja un acabado suave y luminoso, sin residuo blanco ni sensación grasosa.' },
    { id: 26, name: 'Mascarilla Cucumber Bliss', category: 'skincare', subCategory: 'Mascarillas', color: 'Verde Claro', price: 30.000, imageUrl: mascarillacucumberbliss, description: 'Una mezcla antioxidante de kiwi, albahaca y té verde que elimina células muertas y deja una textura más suave y uniforme. Disfruta su aroma frutal mientras tu piel se renueva de manera natural.' },
    { id: 27, name: 'Gel Hidratante Aqua Pop', category: 'skincare', subCategory: 'Hidratantes', color: 'Azul Claro', price: 27.000, imageUrl: gelhidratanteaquapop, description: 'Es un gel hidratante ultraligero con una fórmula de rápida absorción que recarga tu piel de frescura y vitalidad. Enriquecido con extracto de pepino, ácido hialurónico vegetal y agua de coco, aportando un acabado natural y luminoso.' },
    {id: 28, name: 'Hidratante Sweet Lips Balm', category: 'skincare', subCategory: 'Bálsamos Labiales', color: 'Rosa Claro', price: 20.000, imageUrl: hidratantesweetlipsbalm, description: 'Es un bálsamo labial 100 % natural que nutre, hidrata y protege los labios con una textura cremosa y un delicioso toque de dulzura. Formulado con manteca de karité y aceite de coco repara la resequedad y deja un acabado suave y luminoso.' },
    {id: 29, name: 'Dewy Toner', category: 'skincare', subCategory: 'Tónicos', color: 'Transparente', price: 20.000, imageUrl: dewytoner, description: 'Este tónico facial está enriquecido con agua de coco, aloe vera y extracto de manzanilla, para revitalizar la piel y prepararla para la hidratación. Su formato en spray lo hace perfecto para llevar contigo y refrescar el rostro en cualquier momento del día.' },
    {id: 30, name: 'Exfoliante Lemon Sugar', category: 'skincare', subCategory: 'Exfoliantes', color: 'Amarillo Claro', price: 35.000, imageUrl: exfoliantelemonsugar, description: 'Es un exfoliante facial suave y revitalizante que combina azúcar de caña orgánica, extracto de limón y aceite de jojoba para eliminar impurezas y células muertas sin irritar. Su textura cremosa deja la piel suave, fresca y con un brillo natural.' },
    // --- PRODUCTOS DE ACCESORIOS ---
    { id: 31, name: 'Sugar Brushes', category: 'accesorios', subCategory: 'Brochas', color: 'Melocotón', price: 35.000, imageUrl: sugarbrushes, description: 'Un set completo con brochas suaves y profesionales para rostro y ojos. Incluye brochas para base, rubor, sombras y difuminado. ' },
    { id: 32, name: 'Sugar Puff', category: 'accesorios', subCategory: 'Esponjas', color: 'Rosa', price: 10.000, imageUrl: sugarpuff, description: 'Incluye dos borlas aterciopeladas para polvos y dos esponjas tipo beauty blender para base y dos esponjas planas para corrector.' },
    { id: 33, name: 'Sugar Cleaner', category: 'accesorios', subCategory: 'Limpiadores de Brochas', color: 'Morado', price: 10.000, imageUrl: sugarcleaner, description: 'Limpiador de brochas de silicona con textura para limpiar profundamente tus brochas ya sea en seco o con jabón.' },
    {id: 34, name: 'Sugar Wash Bag', category: 'accesorios', subCategory: 'Bolsa de maquillaje', color: 'Rosado', price: 20.000, imageUrl: sugarwashbag, description: 'Bolsa de aseo o maquillaje con diseño práctico, resistente al agua y cierre seguro. Ideal para llevar tus productos SugarPop a cualquier parte: viajes, colegio o gym.' }, 
    {id: 35, name: 'Sugar Eyelash Curler', category: 'accesorios', subCategory: 'Rizador de pestañas', color: 'Plateado', price: 15.000, imageUrl: sugareyelashcurler, description: 'Rizador ergonómico que curva las pestañas sin maltratarlas, dejando una mirada abierta y expresiva.' },
    {id: 36, name: 'Sugar Mirror', category: 'accesorios', subCategory: 'Espejo de maquillaje', color: 'Blanco', price: 15.000, imageUrl: sugarmirror, description: 'Espejo compacto con aumento, perfecto para maquillarte en cualquier lugar. Cabe en cualquier cosmetiquera o se puede poner en un tocador.' },
    {id: 37, name: 'Sugar Eyelash', category: 'accesorios', subCategory: 'Pestañas postizas', color: 'Negro', price: 15.000, imageUrl: sugareyelash, description: 'Set de pestañas postizas ligeras, reutilizables y con efecto natural o glam, con banda flexible que se adapta fácilmente al ojo.' },
    {id: 38, name: 'Sugar Lash Separator', category: 'accesorios' , subCategory: 'Separador de Pestañas', color: 'Rosado', price: 10.0000 , imageUrl:sugarlashseparator, description: 'Peine metálico fino que separa las pestañas después de aplicar el rímel, evitando grumos y dejando una mirada más definida'},
    {id :39, name: 'Sugar Box' , category: 'accesorios', subCategory: 'Caja acrílica', color: 'Transparente', price: 30.000 , imageUrl:sugarbox, description: 'Caja acrílica transparente y compacta para guardar brochas, labiales, bases o accesorios. Tiene compartimentos ajustables y diseño moderno.'},
    {id: 40, name: 'Sugar Set', category: 'accesorios', subCategory: ' Set para realizar tu skincare', color: 'Rosado', price: 20.000, imageUrl: sugarset, description: 'Incluye un gancho, una banda y una diadema para recoger el pelo y dos bandas para las muñecas para que el agua no caiga por tus brazos.' },
];