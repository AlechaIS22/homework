# Домашняя работа Задание номер 3

## Команды git

### __help__

Команда _help_ служит для вывод информации о возможностях той или иной команды, а так же список общих команд

![Пример работы команды _help_](https://github.com/AlechaIS22/homework/blob/main/Painting/help.png?raw=true)

Как видно можно получить подробную информацию о нужной команде

### __init__

Команда _init_ нужна для инициализации нового репозитория, при ее вызове создаться директория __.git__  
В данной папке будет хранится вся информация о проекте, а так же будут отслеживаться изменения, так же локальный 
репозиторий можно связать с сервером. Пример синтаксиса:

`git init`

### __add__

Команда _add_ необходима для отслеживания изменений в проекте, с помощью нее мы начинаем отслеживать какой либо файл, но стоит
отметить что данная команда не видит что находится в папках и не видит пустые папки (в случае чего можно создать файл .gitkeep).  
Для того что бы не видеть полностью файлы или директории надо их названия внести в файл ___.gitignore___. Добавляются файлы следующим образом:

- `git add .` Служит для добавление в репозиторий всех файлов
- `git add <Имя файла>` Служит для добавление в репозиторий конкретного файла
- `git add -A` Добавление всех файлов
- `git add -p <Имя файла>` Позволяет добавить только некоторые изменения в файле

### __config__

Позволяет устанавливать параметры Git, на различных уровнях, примеры

1. Разные уровни
    - `git config --system <Настройка>` Настройки применяются ко всем пользователям
    - `git config --global <Настройка>` Настройки применяются ко всем проектам пользователям
    - `git config --local <Настройка>` Настройки применяются к данному проекту
2. Разные настройки
    - `git config user.name "Имя"` Устанавливает  <a id = 'name'> имя </a> пользователя, которое указывает автора изменений
    - `git config user.email "email"` Устанавливает email пользователя
    - `git config alias.<Сокращение> <Команда или "! команда1; команда2; ...">` Устанавливает сокращения для команды или команд
    - `git config --list` Просмотр текущих настроек
    -  `git config core.editor "Имя редактора"` Изменяет <a id = "editor"> редактор </a> по умолчанию

### __commit__

Позволяет сохранять изменения в файлах, создавая так же им дополнительное описание, кто изменил (по [имени пользователя](#name)),  
когда изменил, а самое главное дает возможность посмотреть описание что изменил и увидеть это в самом коде.

При вводе `git commit`, сначала откроется редактор выбранный по умолчанию, в котором можно будет записать изменения

![Открытие редактора](https://github.com/AlechaIS22/homework/blob/main/Painting/commit.png?raw=true)

Так же можно использовать `git commit -m "Текст который нужно ввести"`. Тогда можно записать commit без открытия текстового редактора по умолчанию, [eго изменение было описано выше](#editor).

Так же можно закоммитить только что созданные изменения, с помощью `git commit -am "Текст для commit"`. Но если файл не отслеживается изменений не будет.
Или задать путь `git commit "Имя файла" "путь из папки проекта"`, но также нужно что бы файл отслеживался.
При создании commit пишется его хеш-сумма, сколько файлов создано, а также его права доступа.

### __status__

Показывает изменения в отслеживаемых файлах, отсутствие изменений, а так же файлы которые не отслеживаются `git status`

### __show__

Выводит информацию о последнем или заданном commit (по хеш-сумме), при вводе команды `git show --pretty=fuller` получим следующую информацию:

- Полный идентификатор commit
- Автора и дату изменений в файле
- Коммитера и дату коммитера
- Различные изменения (создание, удаление, редактирование и тд.))

### __rm__

Данная команда служит для удаления файлов, она заменяет прямое удаление файла из папки и добавления изменения с помощью `git add .`, так же есть следующие возможности:

- `git rm -r <Имя директории>` для удаления директории
- `git rm --cashed <Имя файла>` для удаления только из индекса, если после добавить файл, то изменений не будет
- `git rm -f <Имя файла>` удаление не смотря на ошибки (например удаление файла изменения в котором не сохранены)

### __mv__

Эта команда служит для переименования файла, если изменить имя файла напрямую то `git status` выдаст сообщение о том что файл удален и появился новый,  
и если после этого добавить файл `git add` и после `git status` то будет получено сообщение о переименование файла. Для замены данного пути существует команда  
`git mv <Старое имя> <Новое имя>`.

## __remote add__

Эта команда служит для подключения к удаленному репозиторию, например `git remote add <Имя удаленного репозитория> <Ссылка на удаленный репозиторий>`, после этого  
мы сможем отправлять изменения на данный сервер.

## __push__

Данная команда служит для отправки изменений с локального репозитория на удаленный, на пример таким образом происходит отправка изменений в коде на гит хаб  
`git push -u <Имя удаленного репозитория> <Имя локальной ветки>`, после наш commit загрузится на сервер.

## [Подробная информация о всех командах](https://git-scm.com/docs/git-help)