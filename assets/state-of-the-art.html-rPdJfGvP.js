import{_ as e}from"./plugin-vue_export-helper-DlAUqK2U.js";import{o as a,c as t,e as n}from"./app-DxrYHhSR.js";const r={},s=n('<h1 id="аналіз-предметноі-області" tabindex="-1"><a class="header-anchor" href="#аналіз-предметноі-області"><span>Аналіз предметної області</span></a></h1><h2 id="вступ" tabindex="-1"><a class="header-anchor" href="#вступ"><span>Вступ</span></a></h2><p>Сучасні системи управління відкритими даними широко застосовуються в державному управлінні, науці та бізнесі, проте часто мають низку обмежень: недостатню структурованість даних, обмежені можливості аналітики, проблеми з безпекою, інтеграцією з іншими інформаційними системами та забезпеченням актуальності інформації.</p><p>Нова система управління відкритими даними розробляється для підвищення ефективності роботи з інформацією, забезпечуючи зручні механізми збирання, обробки, зберігання та публікації даних. Вона дозволить оптимізувати процеси управління відкритими даними, усунути обмеження існуючих рішень і сприятиме прозорості та доступності інформації для суспільства.</p><h2 id="основні-визначення" tabindex="-1"><a class="header-anchor" href="#основні-визначення"><span>Основні визначення</span></a></h2><p><em>[Розділ містить визначення термінів та скорочень, які використовуються при аналізі предметної області.]</em></p><h2 id="підходи-та-способи-вирішення-завдання" tabindex="-1"><a class="header-anchor" href="#підходи-та-способи-вирішення-завдання"><span>Підходи та способи вирішення завдання</span></a></h2><h3 id="методи-отримання-даних" tabindex="-1"><a class="header-anchor" href="#методи-отримання-даних"><span><strong>Методи отримання даних</strong></span></a></h3><p>Отримання відкритих даних може здійснюватися кількома способами, залежно від джерела та формату інформації:</p><ul><li><p><strong>API</strong> – це сукупність методів і протоколів, які дають змогу інтегрувати функціонал однієї програми в іншу. Це зручно тоді коли нам не важлива реалізація, а важливий сам результат виконання команди. Використання API є досить простим, оскільки до них зазвичай існує детальна і зрозуміла документація і при цьому вони не потребують багато ресурсу, оскільки на виході ми вже маємо опрацьовані дані. Проте при цьому API є досить нестабільним джерелом інформації, оскільки треба слідкувати за його оновленнями, бо в ході одного з них вся ваша система може перестати працювати. До цього ж необхідно забезпечувати додатковий захист конфіденційних даних.</p></li><li><p><strong>Веб-скрапінг</strong> – метод збирання даних із веб-сайтів у разі відсутності офіційних API. Даний метод отримує інформацію з HTML коду сторінки, на якій ця інформація знаходиться. При цьому ми можемо отримати будь-які дані за короткий час, якщо вони взаємодіють зі сторінкою. Проте не всі власники сайтів дозволяють скрапінг своїх сторінок, що може призвести до юридичних проблем. Так само як і при використанні API треба слідкувати за оновленнями сайту, оскільки через зміну його структури ваш скрипт може перестати працювати. До того ж існує шанс того шо ваш скрипт &quot;витягне&quot; файли захищені авторським правом.</p></li><li><p><strong>Користувацький ввід і публікація контенту</strong> – вільний доступ для ручної публікації даних до бази данних. Єдиний неавтоматизований метод отримання даних оскільки всі дані вносяться людьми вручну і завантажуються в базу. Це одночасно і перевага і недолік даного методу. Перевага в тому що будь-хто може додати дані до системи, що дозволяє швидко зібрати великі обсяги даних, проте одночасно з тим ця інформація потребує обробки зі сторони системи, оскільки через різноманіття користувачів і їх записів серед них можуть бути і неточні і некоретні дані.</p></li></ul><h3 id="методи-зберігання-даних" tabindex="-1"><a class="header-anchor" href="#методи-зберігання-даних"><span><strong>Методи зберігання даних</strong></span></a></h3><h3 id="методи-аналізу-даних" tabindex="-1"><a class="header-anchor" href="#методи-аналізу-даних"><span><strong>Методи аналізу даних</strong></span></a></h3><p>Обробка та аналіз відкритих даних є ключовим етапом для підвищення їхньої цінності. Завдяки сучасним технологіям і методам аналізу, дані можуть бути використані для прийняття ефективних рішень, прогнозування тенденцій та автоматизації процесів.</p><p>Основні методи обробки та аналізу відкритих даних:</p><h4 id="машинне-навчання-та-штучнии-інтелект-–-застосовуються-для-аналізу-тенденціи-прогнозування-та-виявлення-аномаліи" tabindex="-1"><a class="header-anchor" href="#машинне-навчання-та-штучнии-інтелект-–-застосовуються-для-аналізу-тенденціи-прогнозування-та-виявлення-аномаліи"><span><strong>Машинне навчання та штучний інтелект</strong> – застосовуються для аналізу тенденцій, прогнозування та виявлення аномалій.</span></a></h4><ul><li><strong>Supervised Learning (контрольоване навчання)</strong> – використовується для класифікації та регресії. Наприклад, прогнозування попиту на товари або визначення шахрайських транзакцій у фінансовій сфері.</li><li><strong>Unsupervised Learning (неконтрольоване навчання)</strong> – допомагає знаходити закономірності у великих наборах даних, наприклад, для кластеризації клієнтів у маркетингових дослідженнях.</li><li><strong>Deep Learning (глибоке навчання)</strong> – використовується для складніших завдань, таких як розпізнавання образів та автоматичний переклад текстів.</li><li><strong>Обробка природної мови (NLP)</strong> – дозволяє аналізувати та розуміти текстові дані, що важливо для автоматизації обробки документів та роботи чат-ботів.</li></ul><h4 id="візуалізація-даних-d3-js-tableau-power-bi-–-сприяє-наочному-представленню-інформаціі-у-вигляді-графіків-карт-та-інтерактивних-панелеи" tabindex="-1"><a class="header-anchor" href="#візуалізація-даних-d3-js-tableau-power-bi-–-сприяє-наочному-представленню-інформаціі-у-вигляді-графіків-карт-та-інтерактивних-панелеи"><span><strong>Візуалізація даних</strong> (D3.js, Tableau, Power BI) – сприяє наочному представленню інформації у вигляді графіків, карт та інтерактивних панелей.</span></a></h4><ul><li><strong>D3.js</strong> – потужна бібліотека для створення інтерактивних веб-візуалізацій, що дозволяє динамічно змінювати відображення даних.</li><li><strong>Tableau</strong> – популярний інструмент для бізнес-аналітики, який підтримує інтерактивні дашборди та аналіз великих наборів даних без необхідності програмування.</li><li><strong>Power BI</strong> – рішення від Microsoft, що дозволяє швидко створювати звіти, інтегруючи дані з різних джерел та застосовуючи розширені аналітичні функції.</li></ul><h4 id="обробка-великих-даних-hadoop-spark-–-використовується-для-аналізу-масивних-обсягів-інформаціі-у-розподілених-середовищах" tabindex="-1"><a class="header-anchor" href="#обробка-великих-даних-hadoop-spark-–-використовується-для-аналізу-масивних-обсягів-інформаціі-у-розподілених-середовищах"><span><strong>Обробка великих даних</strong> (Hadoop, Spark) – використовується для аналізу масивних обсягів інформації у розподілених середовищах.</span></a></h4><ul><li><strong>Hadoop</strong> – екосистема для зберігання та обробки великих даних, що включає файлову систему HDFS і обчислювальний фреймворк MapReduce.</li><li><strong>Spark</strong> – більш продуктивна альтернатива Hadoop, що дозволяє обробляти дані в пам&#39;яті, що значно пришвидшує аналіз.</li><li><strong>Kafka</strong> – використовується для потокової обробки даних у реальному часі, наприклад, для аналізу поведінки користувачів на вебсайтах або обробки IoT-даних.</li></ul><p>Впровадження зазначених методів дозволяє суттєво підвищити ефективність роботи з відкритими даними, сприяючи розробці інноваційних рішень та оптимізації бізнес-процесів.</p><h3 id="методи-забезпечення-доступу-до-даних" tabindex="-1"><a class="header-anchor" href="#методи-забезпечення-доступу-до-даних"><span><strong>Методи забезпечення доступу до даних</strong></span></a></h3><p>Забезпечення доступу до відкритих даних потребує реалізації гнучких механізмів управління та контролю. Це дозволяє не лише забезпечити конфіденційність та безпеку інформації, а й гарантувати її доступність для відповідних категорій користувачів.</p><h4 id="рольова-модель-доступу-rbac-abac" tabindex="-1"><a class="header-anchor" href="#рольова-модель-доступу-rbac-abac"><span><strong>Рольова модель доступу (RBAC, ABAC)</strong></span></a></h4><ul><li><p><strong>Рольова модель доступу (Role-Based Access Control, RBAC)</strong> передбачає призначення користувачам певних ролей із визначеними дозволами. Це дозволяє централізовано керувати правами доступу, забезпечуючи лише необхідні привілеї для виконання певних завдань.</p></li><li><p><strong>Модель ABAC (Attribute-Based Access Control)</strong> є гнучкішим підходом і передбачає контроль доступу на основі атрибутів користувача, запитуваних даних та контексту запиту. Наприклад, система може надавати доступ до певної інформації лише в робочий час або лише з корпоративної мережі.</p></li></ul><h4 id="захист-даних-шифрування-аутентифікація-сесіі-та-jwt-токени" tabindex="-1"><a class="header-anchor" href="#захист-даних-шифрування-аутентифікація-сесіі-та-jwt-токени"><span><strong>Захист даних (шифрування, аутентифікація, сесії та JWT-токени)</strong></span></a></h4><p>Захист даних є критичним аспектом безпечного доступу. Основні механізми включають:</p><ul><li><strong>Шифрування</strong> – гарантує, що дані залишаються захищеними під час зберігання та передачі. Використовуються протоколи шифрування, такі як AES для збережених даних та TLS для переданих через мережу.</li><li><strong>Аутентифікація</strong> – дозволяє перевіряти особу користувача перед наданням доступу. Це може бути реалізовано через паролі або двофакторну аутентифікацію (2FA).</li><li><strong>Сесії</strong> – використовуються для збереження авторизаційного стану користувача після входу в систему. Сервер зберігає інформацію про сесію, зазвичай через ідентифікатор у cookie-файлі, що дозволяє користувачу залишатися авторизованим без повторного введення облікових даних.</li><li><strong>JWT-токени (JSON Web Token)</strong> – альтернативний спосіб управління аутентифікацією без необхідності зберігання сесій на сервері. Після успішного входу користувач отримує підписаний токен, який передається в заголовках запитів і підтверджує його автентичність. JWT широко використовується у веб-додатках через свою масштабованість.</li></ul><h4 id="ліцензування-та-відкриті-формати" tabindex="-1"><a class="header-anchor" href="#ліцензування-та-відкриті-формати"><span><strong>Ліцензування та відкриті формати</strong></span></a></h4><p>Щоб забезпечити юридичну прозорість та зрозумілість використання відкритих даних, застосовуються спеціальні ліцензії та стандарти форматів даних.</p><ul><li><strong>Ліцензії відкритих даних</strong> – регулюють права користувачів на використання та розповсюдження інформації. Популярними є ліцензії Creative Commons (CC BY, CC0), Open Data Commons (ODC-BY, ODbL), які визначають умови використання, обмеження та необхідність посилань на джерело.</li><li><strong>Відкриті формати</strong> – дозволяють зберігати та передавати дані у формах, доступних для обробки різними системами без необхідності використання пропрієтарного ПЗ. Наприклад, CSV, JSON, XML є популярними форматами для відкритих даних.</li></ul><h2 id="порівняльна-характеристика-існуючих-засобів-вирішення-завдання" tabindex="-1"><a class="header-anchor" href="#порівняльна-характеристика-існуючих-засобів-вирішення-завдання"><span>Порівняльна характеристика існуючих засобів вирішення завдання</span></a></h2><p><em>[Розділ містить опис існуючих програм, інформаційних систем, сервісів, тощо, призначених для вирішення завдання. Дається порівняльна характеристика властивостей FURPS:</em></p><ul><li><em>Functionality (функциональні вимоги)</em></li><li><em>Usability (вимоги до зручності роботи)</em></li><li><em>Reliability (вимоги до надійності)</em></li><li><em>Performance (вимоги до продуктивності)</em></li><li><em>Supportability (вимоги до підтримки)</em></li></ul><p><em>(у вигляді таблиці).]</em></p><h2 id="висновки" tabindex="-1"><a class="header-anchor" href="#висновки"><span>Висновки</span></a></h2><p><em>[Робляться висновки щодо доцільності розробки нової або модифікації існуючої інформаційної системи, необхідності та способів інтеграції з системами(сервісами) третіх сторін, тощо.]</em></p><h2 id="посилання" tabindex="-1"><a class="header-anchor" href="#посилання"><span>Посилання</span></a></h2><p><em>[Розділ містить повний список всіх документів, про які згадується.]</em></p>',39),l=[s];function i(o,p){return a(),t("div",null,l)}const d=e(r,[["render",i],["__file","state-of-the-art.html.vue"]]),g=JSON.parse('{"path":"/requirements/state-of-the-art.html","title":"Аналіз предметної області","lang":"en-US","frontmatter":{"description":"Аналіз предметної області Вступ Сучасні системи управління відкритими даними широко застосовуються в державному управлінні, науці та бізнесі, проте часто мають низку обмежень: н...","head":[["meta",{"property":"og:url","content":"https://vuepress-theme-hope-docs-demo.netlify.app/IO-33_DB_gr2/requirements/state-of-the-art.html"}],["meta",{"property":"og:site_name","content":"Назва проєкту"}],["meta",{"property":"og:title","content":"Аналіз предметної області"}],["meta",{"property":"og:description","content":"Аналіз предметної області Вступ Сучасні системи управління відкритими даними широко застосовуються в державному управлінні, науці та бізнесі, проте часто мають низку обмежень: н..."}],["meta",{"property":"og:type","content":"article"}],["meta",{"property":"og:locale","content":"en-US"}],["meta",{"property":"og:updated_time","content":"2025-03-13T14:59:51.000Z"}],["meta",{"property":"article:modified_time","content":"2025-03-13T14:59:51.000Z"}],["script",{"type":"application/ld+json"},"{\\"@context\\":\\"https://schema.org\\",\\"@type\\":\\"Article\\",\\"headline\\":\\"Аналіз предметної області\\",\\"image\\":[\\"\\"],\\"dateModified\\":\\"2025-03-13T14:59:51.000Z\\",\\"author\\":[]}"]]},"headers":[{"level":2,"title":"Вступ","slug":"вступ","link":"#вступ","children":[]},{"level":2,"title":"Основні визначення","slug":"основні-визначення","link":"#основні-визначення","children":[]},{"level":2,"title":"Підходи та способи вирішення завдання","slug":"підходи-та-способи-вирішення-завдання","link":"#підходи-та-способи-вирішення-завдання","children":[{"level":3,"title":"Методи отримання даних","slug":"методи-отримання-даних","link":"#методи-отримання-даних","children":[]},{"level":3,"title":"Методи зберігання даних","slug":"методи-зберігання-даних","link":"#методи-зберігання-даних","children":[]},{"level":3,"title":"Методи аналізу даних","slug":"методи-аналізу-даних","link":"#методи-аналізу-даних","children":[]},{"level":3,"title":"Методи забезпечення доступу до даних","slug":"методи-забезпечення-доступу-до-даних","link":"#методи-забезпечення-доступу-до-даних","children":[]}]},{"level":2,"title":"Порівняльна характеристика існуючих засобів вирішення завдання","slug":"порівняльна-характеристика-існуючих-засобів-вирішення-завдання","link":"#порівняльна-характеристика-існуючих-засобів-вирішення-завдання","children":[]},{"level":2,"title":"Висновки","slug":"висновки","link":"#висновки","children":[]},{"level":2,"title":"Посилання","slug":"посилання","link":"#посилання","children":[]}],"git":{"createdTime":1739633153000,"updatedTime":1741877991000,"contributors":[{"name":"vladyslav-savchenko-cs","email":"vladyslav.savchenko@corpsoft.io","commits":2},{"name":"T3gi","email":"tytok.volodymyr@lll.kpi.ua","commits":1},{"name":"den47k","email":"danyildanyilov@gmail.com","commits":1},{"name":"stercoreo ⠀","email":"tsiganenkoff@gmail.com","commits":1},{"name":"user","email":"pakulyak.sasha@lll.kpi.ua","commits":1}]},"readingTime":{"minutes":3.6,"words":1080},"filePathRelative":"requirements/state-of-the-art.md","localizedDate":"February 15, 2025","autoDesc":true}');export{d as comp,g as data};
