import styles from './Resume.module.css'

function Resume() {
  return (
    <div className={styles.resumeContainer}>
      <h2>Меня зовут Сарасов Матвей.</h2>

      <p>
        Я Middle PHP разработчик из Кыргызстана (🕓 GMT+6).<br />
        Опыт работы: 4 года.
      </p>

      <h3>👨‍🏭 Проекты в которых участвовал:</h3>

      <h4>➡️ <a href="https://crm.kg/" target="_blank" rel="noopener noreferrer">CRM Technologies</a></h4>
      <ul>
        <li>Разработка модулей Vtiger CRM</li>
        <li>Интеграции: Asterisk, Chat2Desk, SMPP, Whatsapp, Twitter</li>
        <li>Push-уведомления через Firebase</li>
        <li>Работа с Legacy кодом</li>
      </ul>

      <h4>➡️ <a href="https://vc.ru/" target="_blank" rel="noopener noreferrer">vc.ru</a></h4>
      <ul>
        <li>Работа с коллегами через Github</li>
        <li>Активное участие в Code Review</li>
        <li>Scrum + Jira</li>
        <li>Docker + CI/CD пайплайн</li>
        <li>Написание интеграционных тестов</li>
        <li>Немного взглянул на DDD</li>
      </ul>

      <h4>➡️ <a href="https://optimacros.ru/" target="_blank" rel="noopener noreferrer">Optimacros</a></h4>
      <ul>
        <li>Разработка OLAP системы</li>
        <li>Оптимизация MongoDB</li>
        <li>Архитектурный рефакторинг</li>
        <li>Написание юнит и функциональных тестов</li>
        <li>BDD</li>
        <li>Работа с контейнерами LXC</li>
        <li>Ведение документации</li>
      </ul>

      <p>➡️ В текущий момент работаю на фрилансе выполняя различные заказы</p>
      <p>… TO BE CONTINUED</p>

      <h3>🥷 Мои навыки:</h3>
      <ul>
        <li>PHP, Laravel</li>
        <li>React</li>
        <li>Linux, Docker, NGINX, Powershell</li>
        <li>MySQL, PostgreSQL, Mongo, Redis</li>
        <li>RabbitMQ</li>
        <li>Git, Github, Gitlab, CI/CD</li>
        <li>Golang</li>
        <li>Английский: B1</li>
      </ul>

      <h3>💼 Отношение к работе:</h3>
      <p>
        Считаю, что каждый человек должен стремиться делать хорошо то, что он делает. Думаю, это особенно важно в мире разработки, где все очень нестабильно. Ценю простоту, надежность и хорошую архитектуру. Держу фокус на потребностях заказчика.
      </p>

      <h3>🚴 Немного обо мне:</h3>
      <p>
        Люблю далеко ездить на велосипеде. Люблю восточную культуру. Играю в Го. Иногда пишу хайку.
      </p>

      <h3>☎️ Контакты:</h3>
      <ul>
        <li><a href="https://github.com/SarasovMatvey" target="_blank" rel="noopener noreferrer">Github</a></li>
        <li><a href="https://gitlab.com/SarasovMatvey" target="_blank" rel="noopener noreferrer">Gitlab</a></li>
        <li><a href="https://t.me/midia_212" target="_blank" rel="noopener noreferrer">Telegram</a></li>
      </ul>
    </div>
  )
}

export default Resume
