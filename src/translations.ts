
import { createI18n } from 'vue-i18n';


const messages = {
  en: {
    appView: {
      home: 'Home',
      projects: 'Projects',
      resume: 'Resume'
    },
    homeTab: {
      projects: [
        {
          title: 'Cultour Costa Rica - Under development',
          description: 'Freelance project for Cultour CR, focused on modernizing its website and highlighting its services, ranging from traditional farming practices to engaging in typical activities in Costa Rica, for potential clientsfreelance project for Cultour CR, focused on modernizing its website and highlighting its services, ranging from traditional farming practices to engaging in typical activities in Costa Rica.'
        },
        {
          title: 'Connect Four 🔴 Web Board Game 🟡',
          description: 'Game logic for the board game "Connect 4". Try to play against this AI and beat it!'
        },
        {
          title: 'Schedule Generator 📅 | Java, Prolog & SQLite',
          description: 'Desktop app to combinations of university schedules considering professors, subjects taught by professors, classrooms, and availability schedules of both professors and classrooms.'
        },
        {
          title: 'Face recognition - Classroom Attendance',
          description: 'Face recognition application in Python. https://colab.research.google.com/drive/1QBLXJ011o6r_0F7gbYSMAaoJUelF3eeg?usp=sharing',
        }
      ]
    },
    aboutMeView: {
      title: 'Software Engineer - Full Stack Web Developer',
      p1: "+2 years of experience in IT industry. Specially focused in Frontend development. Actively learning and implementing new technologies to create my own solutions.",
      p2: "Graduated from Instituto Tecnológico de Costa Rica in 2022, initiating work experience at Intel in 2021 as a student worker, driven by a passion for web development.",
      skills: [
        { title: '🧠 Analytical Thinking', description: 'Equipped with robust analytical skills, I tackle complex problems with precision and efficiency.' },
        { title: '📚 Self-learning', description: 'Demonstrating a commitment to continuous improvement, I excel in independent learning, adapting seamlessly to new challenges.' },
        { title: '🦁 Fearlessness', description: 'I approach tasks and challenges fearlessly, maintaining a confident mindset that drives success.' },
        { title: '🚀 Best Practices Advocate', description: 'Enthusiastic about following coding standards, I create clean and maintainable code, adhering to industry best practices.' },
        { title: '🔧 Problem-solving Expertise', description: 'I possess strong problem-solving skills, breaking down intricate issues into manageable components and delivering effective solutions.' },
        { title: '🤝 Agile Development Experience', description: 'With hands-on experience in agile development methodologies, I foster flexibility and collaboration in project execution, ensuring adaptability and success.' },
        { title: '💻 Programming Proficiency', description: 'Proficient in object-oriented programming, I am well-versed in logic-based paradigms (e.g., Prolog) and bring experience in functional programming with Racket.' }
      ]
    }
  },
  sp: {
    appView: {
      home: 'Principal',
      projects: 'Proyectos',
      resume: 'Curriculum'
    },
    homeTab: {
      projects: [
        {
          title: 'Cultour Costa Rica - En desarrollo',
          description: 'Proyecto freelance para la empresa Cultour CR hecho para modernizar su sitio web y destacar sus servicios, desde prácticas agrícolas tradicionales hasta participar en actividades típicas de Costa Rica.'
        },
        {
          title: 'Cuatro en línea 🔴 Juego de mesa en la web 🟡',
          description: 'Lógica de juego para el juego de mesa "Cuatro en línea". ¡Intenta jugar contra esta inteligencia artificial y supérala!',
        },
        {
          title: 'Generador de Horarios 📅 | Java, Prolog y SQLite',
          description: 'Aplicación de escritorio para generar combinaciones de horarios universitarios considerando profesores, asignaturas impartidas por profesores, aulas y horarios de disponibilidad tanto de profesores como de aulas.',
        },
        {
          title: 'Reconocimiento Facial - Asistencia a Clases',
          description: 'Aplicación de reconocimiento facial en Python. [Enlace al Colab](https://colab.research.google.com/drive/1QBLXJ011o6r_0F7gbYSMAaoJUelF3eeg?usp=sharing)',
        }
      ]
    },
    aboutMeView: {
      title: 'Ing. en Computación Desarrollador Web Full Stack',
      p1: '+2 años de experiencia en la industria IT. Especializado especialmente en desarrollo Frontend. Aprendiendo activamente e implementando nuevas tecnologías para crear mis propias soluciones.',
      p2: 'Graduado del Instituto Tecnológico de Costa Rica en 2022, inicié mi experiencia laboral en Intel en 2021 como estudiante trabajador, impulsado por una pasión por el desarrollo web.',
      skills: [
        { title: '🧠 Pensamiento Analítico', description: 'Equipado con habilidades analíticas sólidas, abordo problemas complejos con precisión y eficiencia.' },
        { title: '📚 Autoaprendizaje', description: 'Demostrando un compromiso con la mejora continua, sobresalgo en el aprendizaje independiente, adaptándome sin problemas a nuevos desafíos.' },
        { title: '🦁 Sin Miedo', description: 'Abordo tareas y desafíos sin miedo, manteniendo una mentalidad segura que impulsa el éxito.' },
        { title: '🚀 Defensor de las Mejores Prácticas', description: 'Entusiasta de seguir estándares de codificación, creo código limpio y mantenible, adhiriéndome a las mejores prácticas de la industria.' },
        { title: '🔧 Experiencia en Resolución de Problemas', description: 'Poseo fuertes habilidades para resolver problemas, descomponiendo problemas intrincados en componentes manejables y entregando soluciones efectivas.' },
        { title: '🤝 Experiencia en Desarrollo Ágil', description: 'Con experiencia práctica en metodologías de desarrollo ágil, fomento la flexibilidad y la colaboración en la ejecución de proyectos, garantizando adaptabilidad y éxito.' },
        { title: '💻 Competencia en Programación', description: 'Competente en programación orientada a objetos, estoy bien versado en paradigmas basados en lógica (por ejemplo, Prolog) y tengo experiencia en programación funcional con Racket.' }
      ]
    }
  },
  ja: {
    appView: {
      home: 'ホーム',
      projects: '项目',
      resume: '履歴書'
    },
    homeTab: {
      projects: [
        
        {
          title: 'Cultour Costa Rica - 正在开发中',
          description: '这是为Cultour CR公司进行的自由职业项目，旨在现代化其网站并展示其服务，从传统的农业实践到参与典型的哥斯达黎加活动，面向潜在客户。',
        },
        {
          title: '四子棋 🔴 网络棋盘游戏 🟡',
          description: '针对“四子棋”棋盘游戏的游戏逻辑。尝试与这个人工智能对战并战胜它！',
        },
        {
          title: '课程表生成器 📅 | Java、Prolog 和 SQLite',
          description: '桌面应用程序，用于考虑教授、由教授授课的科目、教室以及教授和教室的可用时间表的大学课程表组合。',
        },
        {
          title: '人脸识别 - 课堂考勤',
          description: 'Python中的人脸识别应用程序。[Colab链接](https://colab.research.google.com/drive/1QBLXJ011o6r_0F7gbYSMAaoJUelF3eeg?usp=sharing)',
        }
      ]
    },
    aboutMeView: {
      title: '软件工程师 - 全栈Web开发者',
      p1: '在IT行业有2年以上的经验。专注于前端开发。积极学习和应用新技术，创造自己的解决方案。',
      p2: '于2022年毕业于哥斯达黎加理工学院，于2021年以学生工作者身份开始在英特尔的工作经历，出于对Web开发的热情。',
      skills: [
        { title: '🧠 分析的思考', description: '堅牢な分析力を備え、複雑な問題に精度と効率で対処します。' },
        { title: '📚 自己学習', description: '継続的な向上心を示し、独立した学習で優れた成果を上げ、新しい課題にシームレスに適応します。' },
        { title: '🦁 無敵の意志', description: '恐れずにタスクや課題に取り組み、自信に満ちたマインドセットを保ちながら成功をもたらします。' },
        { title: '🚀 ベストプラクティスの提唱者', description: 'コーディングスタンダードに熱心で、クリーンで保守可能なコードを作成し、業界のベストプラクティスに従います。' },
        { title: '🔧 問題解決の専門知識', description: '強力な問題解決能力を備え、入り組んだ問題を管理可能なコンポーネントに分解し、効果的な解決策を提供します。' },
        { title: '🤝 アジャイル開発の経験', description: 'アジャイル開発手法において実践的な経験を持ち、プロジェクトの実行において柔軟性と協力を育み、適応性と成功を確保します。' },
        { title: '💻 プログラミングの熟練度', description: 'オブジェクト指向プログラミングに精通し、論理ベースのパラダイム（例：Prolog）に精通しており、Racketを使用した関数型プログラミングの経験があります。' }
      ]
    }

  }
}

export default createI18n({
  locale: 'en',
  fallbackLocale: 'en',
  messages
})