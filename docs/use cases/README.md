
# Модель прецедентів

## Загальна схема

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>

@startuml
skinparam actor "Гість" as Guest actor "Користувач" as User actor "Адміністратор" as Administrator

   usecase "<b>UserRegistration</b>\nРеєстрація користувача" as RegisterUser
   usecase "<b>PostViewing</b>\nПерегляд постів" as PostViewing

   usecase "<b>LogIn</b>\nВхід у систему" as LogIn
   usecase "<b>PostInteraction</b>\n Взаємодія з постами користувача" as PostInteraction
   usecase "<b>UserViewing</b>\n Перегляд інших користувачів" as UserViewing
   usecase "<b>ProfileInteraction</b>\n Взаємодія з профілем" as ProfileInteractiob

   usecase "<b>PostManagement</b>\nКерування постами" as PostManagement
   usecase "<b>UserManagement</b>\n Керування користувачами" as UserManagement

   User -u-|> Guest
   Administrator -u-|> User

   Guest -u-> RegisterUser
   Guest -u-> PostViewing

   User -u->  LogIn
   User -r->  PostInteraction
   User -l-> UserViewing
   User -u-> ProfileInteractiob

   Administrator -r-> PostManagement
   Administrator -l-> UserManagement
@enduml

</center>

## Гість

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>

@startuml
skinparam actor "Гість" as Guest 

   usecase "<b>UserRegistration</b>\nРеєстрація користувача" as RegisterUser
   usecase "<b>PostViewing</b>\nПерегляд постів" as PostViewing
   usecase "<b>ViewingSpecificPost</b>\n Перегляд конкретного поста" as SpecificPost

   SpecificPost .l.> PostViewing:extends
   Guest -u-> RegisterUser
   Guest -u-> PostViewing
@enduml

</center>

## Користувач

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>

@startuml
skinparam actor "Користувач" as User 

   usecase "<b>LogIn</b>\nВхід у систему" as LogIn
   usecase "<b>LogOut</b>\nВихід із систему" as LogOut
   LogIn<.r. LogOut:extends

   usecase "<b>PostInteraction</b>\n Взаємодія з постами користувача" as PostInteraction
   usecase "<b>CreatePost</b>\n Створення поста" as CreatePost
   PostInteraction<.u. CreatePost:extends
   usecase "<b>EditOwnPost</b>\n Редагування власного поста" as EditOwnPost
   PostInteraction<.u. EditOwnPost:extends
   usecase "<b>DeleteOwnPost</b>\n Видалення власного поста" as DeleteOwnPost
   PostInteraction<.l. DeleteOwnPost:extends

   usecase "<b>UserViewing</b>\n Перегляд інших користувачів" as UserViewing
   usecase "<b>ViewSpecificUser</b>\n Перегляд конкретного користувача" as ViewSpecificUser
   UserViewing <.d. ViewSpecificUser:extends

   usecase "<b>ProfileInteraction</b>\n Взаємодія з профілем" as ProfileInteractiob
   usecase "<b>EditOwnProfile</b>\n Редагування власного профілю" as EditOwnProfile
   ProfileInteractiob<.r. EditOwnProfile:extends
   usecase "<b>DeleteOwnProfile</b>\n Видалення власного профілю" as DeleteOwnProfile
   ProfileInteractiob<.u. DeleteOwnProfile:extends

   User -r->  LogIn
   User -u->  PostInteraction
   User -l-> UserViewing
   User -u-> ProfileInteractiob
@enduml

</center>

## Адміністратор

<center style="
   border-radius:4px;
   border: 1px solid #cfd7e6;
   box-shadow: 0 1px 3px 0 rgba(89,105,129,.05), 0 1px 1px 0 rgba(0,0,0,.025);
   padding: 1em;"
>

@startuml
   skinparam actor "Адміністратор" as Administrator

   usecase "<b>PostManagement</b>\nКерування постами" as PostManagement
   usecase "<b>DeleteAnyPost</b>\nВидалення будь-якого поста" as DeleteAnyPost
   PostManagement <.u. DeleteAnyPost:extends

   usecase "<b>UserManagement</b>\n Керування користувачами" as UserManagement
   usecase "<b>CreateUser</b>\nСтворення нового користувача" as CreateUser
   UserManagement<.u. CreateUser:extends
   usecase "<b>DeleteAnyUser</b>\nВидалення будь-якого користувача" as DeleteAnyUser
   UserManagement<.u. DeleteAnyUser:extends

   Administrator -r-> PostManagement
   Administrator -l-> UserManagement
@enduml

</center>


## Сценарції використання


| **ID:**                | **RegisterUser** |
|:-----------------------|:-------------|
| **НАЗВА:**             | Реєстрація у системі |
| **УЧАСНИКИ:**          | Гість, Система |
| **ПЕРЕДУМОВИ:**        | Гість не має облікового запису у системі |
| **РЕЗУЛЬТАТ:**         | Успішна реєстрація облікового запису гостем у системі |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | **UnfilledRequiredFields** – Обов'язкові поля незаповнені <br> **InvalidUsername** – Ім'я Гістьа вже зайняте |
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Гість відкриває сторінку реєстрації.  <br> 2. Вводить логін і пароль.  <br> 3. Система надсилає запит `POST /api/auth/register`.  <br> 4. Система перевіряє правильність введених даних.  <br> 5. Якщо дані вірні, система реєструє користувача.  |

@startuml

    |Гість|
    start;
    : Розпочинає взаємодію;
    : Вводить логін і пароль;
    : Надсилає запит `POST /api/auth/register`;


    |Система|
    : Перевіряє правильність введених даних;

    note right #FFB3B3
    <b> Можлива
    <b> "UnfilledRequiredFields" або "InvalidUsername"
    end note
    : Створює користувача;

    |Гість|
    : Має акаунт у який може авторизуватися;
    : Закінчує взаємодію;
    stop;

@enduml

| **ID:**                | **LoginUser** |
|:-----------------------|:-------------|
| **НАЗВА:**             | Вхід у систему |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач має обліковий запис |
| **РЕЗУЛЬТАТ:**         | Користувач отримує токен для доступу до системи |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | **InvalidCredentials** – Неправильний логін або пароль |
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Користувач відкриває сторінку авторизації.  <br> 2. Вводить логін і пароль.  <br> 3. Система надсилає запит `POST /api/auth/login`.  <br> 4. Система перевіряє правильність введених даних.  <br> 5. Якщо дані вірні, система генерує токен і відправляє його користувачеві.  <br> 6. Користувач отримує доступ до захищених функцій. |

@startuml

    |Гість|
    start;
    : Розпочинає взаємодію;
    : Вводить логін і пароль;
    : Надсилає запит `POST /api/auth/login`;


    |Система|
    : Перевіряє правильність введених даних;

    note right #FFB3B3
    <b> Можлива
    <b> InvalidCredentials
    end note
    : Генерує токен і відправляє його користувачеві;

    |Гість|
    : Отримує доступ до захищених функцій;
    : Закінчує взаємодію;
    stop;

@enduml

| **ID:**                | **LogoutUser** |
|:-----------------------|:------------------------|
| **НАЗВА:**             | Вихід із системи |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач автентифікований, токен збережено на пристрої користувача (наприклад у браузері) |
| **РЕЗУЛЬТАТ:**         | Токен видалено з пристрою користувача |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | **TokenNotFound** – токен не знайдено у сховищі |
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Користувач натискає кнопку "Вийти".  <br> 2. Система видаляє токен з пристрою користувача <br> 3. Інтерфейс застосунку оновлюється: користувача перенаправляють на сторінку входу або показують гостьовий режим. |

@startuml
    |Гість|
    start;
    : Розпочинає взаємодію;
    : Натискає кнопку "Вийти";
    : Токен авторизації видаляється з пристрою користувача;

    note right #FFB3B3
    <b> Можлива
    <b> TokenNotFound
    end note
    : Інтерфейс застосунку оновлюється;

    |                  Система                  |
    |Гість|
    : Закінчує взаємодію;
    stop;

@enduml

| **ID:**                | **CreatePost** |
|:-----------------------|:-------------|
| **НАЗВА:**             | Створення нового поста |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач авторизований у системі |
| **РЕЗУЛЬТАТ:**         | Новий пост створено та збережено у базі даних |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | **NotAuthenticated** – Користувач не авторизований  <br> **ValidationError** – Відсутні заголовок або зміст поста |
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Користувач натискає кнопку "Створити пост".<br>2. Користувач вводить заголовок і зміст поста.<br>3. Користувач надсилає запит `POST /api/post` з даними поста.<br>4. Система перевіряє, що користувач авторизований.<br>5. Система перевіряє валідність заголовка та змісту.<br>6. Система зберігає пост у базі даних.<br>7. Користувач отримує повідомлення про успішне створення поста. |


@startuml

    |Гість|
    start;
    : Розпочинає взаємодію;
    : Натискає кнопку "Створити пост";
    : Вводить заголовок і зміст поста;
    : Надсилає запит `POST /api/post` з даними поста;


    |Система|
    : Перевіряє, що користувач авторизований;

    note right #FFB3B3
    <b> Можлива
    <b> NotAuthenticated
    end note

    : Зберігає пост у базі даних і повертає підтвердження;

    note right #FFB3B3
    <b> Можлива
    <b> ValidationError
    end note

    |Гість|
    : Отримує повідомлення про успішне створення поста;
    : Закінчує взаємодію;
    stop;

@enduml

| **ID:**                | **UpdatePost** |
|:-----------------------|:---------------|
| **НАЗВА:**             | Оновлення поста |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач авторизований у системі |
| **РЕЗУЛЬТАТ:**         | Пост оновлено у базі даних |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | **NotAuthenticated** – Користувач не авторизований <br> **ValidationError** – Відсутні заголовок або зміст <br> **PostNotFound** – Пост не існує <br> **Forbidden** – Користувач не є автором поста і не є адміністратором |
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Користувач натискає кнопку "Редагувати пост".<br>2. Користувач вводить новий заголовок і зміст.<br>3. Користувач надсилає запит `PUT /api/post/:id`.<br>4. Система перевіряє, що користувач авторизований.<br>5. Система перевіряє наявність поста.<br>6. Система перевіряє права користувача (автор або адмін).<br>7. Система перевіряє валідність заголовка та змісту.<br>8. Система оновлює пост.<br>9. Користувач отримує повідомлення про успішне оновлення. |


@startuml
  |Користувач|
  start
  :Натискає "Редагувати пост";
  :Вводить новий заголовок і зміст;
  :Надсилає PUT /api/post/:id;

  |Система|
  :Перевіряє авторизацію;
  note right #FFB3B3
  <b>Можлива:</b>
  NotAuthenticated
  end note

  :Перевіряє, чи існує пост;
  note right #FFB3B3
  <b>Можлива:</b>
  PostNotFound
  end note

  :Перевіряє, чи користувач є автором або адміністратором;
  note right #FFB3B3
  <b>Можлива:</b>
  Forbidden
  end note

  :Перевіряє заголовок і зміст;
  note right #FFB3B3
  <b>Можлива:</b>
  ValidationError
  end note

  :Оновлює пост;

  |Користувач|
  :Отримує повідомлення про успішне оновлення;
  stop
@enduml

| **ID:**                | **DeletePost** |
|:-----------------------|:---------------|
| **НАЗВА:**             | Видалення поста |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач авторизований |
| **РЕЗУЛЬТАТ:**         | Пост видалено з бази даних |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | **NotAuthenticated** – Користувач не авторизований <br> **PostNotFound** – Пост не існує <br> **Forbidden** – Користувач не має прав на видалення |
| **ОСНОВНИЙ СЦЕНАРІЙ:** | 1. Користувач натискає кнопку "Видалити пост".<br>2. Користувач надсилає запит `DELETE /api/post/:id`.<br>3. Система перевіряє, що користувач авторизований.<br>4. Система перевіряє, чи існує пост.<br>5. Система перевіряє права доступу (автор або адмін).<br>6. Система видаляє пост.<br>7. Користувач отримує повідомлення про успішне видалення. |

@startuml
  |Користувач|
  start
  :Натискає "Видалити пост";
  :Надсилає DELETE /api/post/:id;

  |Система|
  :Перевіряє авторизацію;
  note right #FFB3B3
  <b>Можлива:</b>
  NotAuthenticated
  end note

  :Перевіряє, чи існує пост;
  note right #FFB3B3
  <b>Можлива:</b>
  PostNotFound
  end note

  :Перевіряє, чи користувач є автором або адміністратором;
  note right #FFB3B3
  <b>Можлива:</b>
  Forbidden
  end note

  :Видаляє пост;

  |Користувач|
  :Отримує повідомлення про успішне видалення;
  stop
@enduml
