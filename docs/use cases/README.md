
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

@startuml

    |Гість|
    start;
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
    stop;

@enduml

| **ID:**                | **ViewPosts** |
|:-----------------------|:------------|
| **НАЗВА:**             | Перегляд списку постів |
| **УЧАСНИКИ:**          | Гість, Система |
| **ПЕРЕДУМОВИ:**        | Гість відкрив вебсайт |
| **РЕЗУЛЬТАТ:**         | Гість отримує список постів |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | **PostsNotAvailable** – В системі немає постів |

@startuml

    |Гість|
    start;
    : Заходить на вебсайт;
    : Надсилає запит `GET /api/post/` для отримання всіх постів;

    |Система|
    : Повертає список постів;

    note right #FFB3B3
    <b> Можлива
    <b> "PostsNotAvailable"
    end note

    |Гість|
    : Переглядає список постів;
    stop;

@enduml

| **ID:**                | **ViewPostById** |
|:-----------------------|:----------------|
| **НАЗВА:**             | Перегляд конкретного поста |
| **УЧАСНИКИ:**          | Гість, Система |
| **ПЕРЕДУМОВИ:**        | Гість відкрив сторінку конкретного поста |
| **РЕЗУЛЬТАТ:**         | Гість отримує інформацію про конкретний пост |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | **PostNotFound** – Пост із вказаним `id` не знайдено |

@startuml

    |Гість|
    start;
    : Відкриває сторінку конкретного поста;
    : Надсилає запит `GET /api/post/:id` для отримання даних поста;

    |Система|
    : Повертає інформацію про пост;

    note right #FFB3B3
    <b> Можлива
    <b> "PostNotFound"
    end note

    |Гість|
    : Переглядає список постів;
    stop;

@enduml

| **ID:**                | **LoginUser** |
|:-----------------------|:-------------|
| **НАЗВА:**             | Вхід у систему |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач має обліковий запис |
| **РЕЗУЛЬТАТ:**         | Користувач отримує токен для доступу до системи |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | **InvalidCredentials** – Неправильний логін або пароль |

@startuml

    |Гість|
    start;
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
    stop;

@enduml

| **ID:**                | **LogoutUser** |
|:-----------------------|:------------------------|
| **НАЗВА:**             | Вихід із системи |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач автентифікований, токен збережено на пристрої користувача (наприклад у браузері) |
| **РЕЗУЛЬТАТ:**         | Токен видалено з пристрою користувача |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | **TokenNotFound** – токен не знайдено у сховищі |

@startuml
    |Гість|
    start;
    : Натискає кнопку "Вийти";
    : Токен авторизації видаляється з пристрою користувача;

    note right #FFB3B3
    <b> Можлива
    <b> TokenNotFound
    end note
    : Інтерфейс застосунку оновлюється;

    |                  Система                  |
    |Гість|
    stop;

@enduml

| **ID:**                | **CreatePost** |
|:-----------------------|:-------------|
| **НАЗВА:**             | Створення нового поста |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач авторизований у системі |
| **РЕЗУЛЬТАТ:**         | Новий пост створено та збережено у базі даних |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | **NotAuthenticated** – Користувач не авторизований  <br> **ValidationError** – Відсутні заголовок або зміст поста |


@startuml

    |Гість|
    start;
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
    stop;

@enduml

| **ID:**                | **UpdatePost** |
|:-----------------------|:---------------|
| **НАЗВА:**             | Оновлення поста |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач авторизований у системі |
| **РЕЗУЛЬТАТ:**         | Пост оновлено у базі даних |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | **NotAuthenticated** – Користувач не авторизований <br> **ValidationError** – Відсутні заголовок або зміст <br> **PostNotFound** – Пост не існує <br> **Forbidden** – Користувач не є автором поста і не є адміністратором |


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

| **ID:**                | **ViewUsers** |
|:-----------------------|:--------------|
| **НАЗВА:**             | Перегляд списку користувачів |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач авторизований |
| **РЕЗУЛЬТАТ:**         | Користувач отримує список зареєстрованих користувачів |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | **UsersNotAvailable** – У базі немає користувачів |

@startuml

    |Користувач|
    start;
    : Відкриває сторінку списку користувачів;
    : Надсилає запит `GET /api/user`;

    |Система|
    : Повертає список користувачів;

    note right #FFB3B3
    <b> Можлива
    <b> "UsersNotAvailable"
    end note

    |Користувач|
    : Переглядає список користувачів;
    stop;

@enduml

| **ID:**                | **ViewUserById** |
|:-----------------------|:-----------------|
| **НАЗВА:**             | Перегляд конкретного користувача (в тому числі і свого профілю) |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач відкрив сторінку конкретного користувача |
| **РЕЗУЛЬТАТ:**         | Користувач отримує інформацію про конкретного користувача |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | **UserNotFound** – Користувача із вказаним `id` не знайдено |

@startuml

    |Користувач|
    start;
    : Відкриває сторінку конкретного користувача;
    : Надсилає запит `GET /api/user/:id`;

    |Система|
    : Повертає інформацію про користувача;

    note right #FFB3B3
    <b> Можлива
    <b> "UserNotFound"
    end note

    |Користувач|
    : Переглядає профіль іншого користувача;
    stop;

@enduml

| **ID:**                | **EditOwnProfile** |
|:-----------------------|:-------------------|
| **НАЗВА:**             | Редагування власного профілю |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач авторизований |
| **РЕЗУЛЬТАТ:**         | Дані користувача оновлено |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | **NotAuthenticated** – Користувач не авторизований <br> **UserNotFound** – Користувача з таким ID не знайдено <br> **NotAuthorized** – Користувач не може змінювати чужі дані |

@startuml
   
    |Користувач|
    start;
    : Відкриває форму редагування профілю;
    : Вносить зміни в дані;
    : Надсилає запит `PUT /api/user/:id`;

    |Система|
    : Перевіряє авторизацію;
    note right #FFB3B3
    <b> Можлива
    <b> "NotAuthenticated"
    end note

    : Перевіряє, чи існує такий користувач;
    note right #FFB3B3
    <b> Можлива
    <b> "UserNotFound"
    end note

    : Перевіряє, чи можна користувачу змінювати дані;
    note right #FFB3B3
    <b> Можлива
    <b> "NotAuthorized"
    end note

    : Оновлює дані користувача;

    |Користувач|
    : Отримує підтвердження про успішне оновлення;
    stop;

@enduml

| **ID:**                | **DeleteOwnProfile** |
|:-----------------------|:---------------------|
| **НАЗВА:**             | Видалення власного профілю |
| **УЧАСНИКИ:**          | Користувач, Система |
| **ПЕРЕДУМОВИ:**        | Користувач авторизований |
| **РЕЗУЛЬТАТ:**         | Обліковий запис видалено |
| **ВИКЛЮЧНІ СИТУАЦІЇ:** | **NotAuthenticated** – Користувач не авторизований <br> **UserNotFound** – Користувача з таким ID не знайдено |

@startuml
    |Користувач|
    start;
    : Натискає кнопку "Видалити акаунт";
    : Надсилає запит `DELETE /api/user/:id`;

    |Система|
    : Перевіряє авторизацію;
    note right #FFB3B3
    <b> Можлива
    <b> "NotAuthenticated"
    end note

    : Перевіряє, чи існує такий користувач;
    note right #FFB3B3
    <b> Можлива
    <b> "UserNotFound"
    end note

    : Видаляє користувача з бази;

    |Користувач|
    : Отримує повідомлення про успішне видалення;
    stop;

@enduml


