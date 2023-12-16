
import { createI18n } from 'vue-i18n';


const messages = {
  en: {
    appView: {
      home: 'Home',
      about: 'About Me',
      resume: 'Resume'
    },
    p1: {
      title: 'Connect Four 🔴 Web Board Game 🟡',
      description: 'Game logic for the board game "Connect 4". Try to play against this AI and beat it!'
    },
    p2: {
      title: 'Schedule Generator 📅 | Java, Prolog & SQLite',
      description: 'Desktop app to combinations of university schedules considering professors, subjects taught by professors, classrooms, and availability schedules of both professors and classrooms.'
    },
    p3: {
      title: 'Face recognition - Classroom Attendance',
      description: 'Face recognition application in Python. https://colab.research.google.com/drive/1QBLXJ011o6r_0F7gbYSMAaoJUelF3eeg?usp=sharing',
    }
  },
  sp: {
    appView: {
      home: 'Principal',
      about: 'Sobre mí',
      resume: 'Curriculum'
    },
    p1: {
      title: 'Cuatro en línea 🔴 Juego de mesa en la web 🟡',
      description: 'Lógica de juego para el juego de mesa "Cuatro en línea". ¡Intenta jugar contra esta inteligencia artificial y supérala!',
    },
    p2: {
      title: 'Generador de Horarios 📅 | Java, Prolog y SQLite',
      description: 'Aplicación de escritorio para generar combinaciones de horarios universitarios considerando profesores, asignaturas impartidas por profesores, aulas y horarios de disponibilidad tanto de profesores como de aulas.',
    },
    p3: {
      title: 'Reconocimiento Facial - Asistencia a Clases',
      description: 'Aplicación de reconocimiento facial en Python. [Enlace al Colab](https://colab.research.google.com/drive/1QBLXJ011o6r_0F7gbYSMAaoJUelF3eeg?usp=sharing)',
    }
  },
  ja: {
    appView: {
      home: 'ホーム',
      about: '私について',
      resume: '履歴書'
    },
    p1: {
      title: '四子棋 🔴 网络棋盘游戏 🟡',
      description: '针对“四子棋”棋盘游戏的游戏逻辑。尝试与这个人工智能对战并战胜它！',
    },
    p2: {
      title: '课程表生成器 📅 | Java、Prolog 和 SQLite',
      description: '桌面应用程序，用于考虑教授、由教授授课的科目、教室以及教授和教室的可用时间表的大学课程表组合。',
    },
    p3: {
      title: '人脸识别 - 课堂考勤',
      description: 'Python中的人脸识别应用程序。[Colab链接](https://colab.research.google.com/drive/1QBLXJ011o6r_0F7gbYSMAaoJUelF3eeg?usp=sharing)',
    }
  }
}

// 2. Create i18n instance with options
const i18n = createI18n({
  locale: 'en', // set locale
  fallbackLocale: 'en', // set fallback locale
  messages, // set locale messages
  // If you need to specify other options, you can set other options
  // ...
})

export default i18n;
