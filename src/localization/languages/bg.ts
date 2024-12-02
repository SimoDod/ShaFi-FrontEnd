export const bg = {
  translation: {
    buttons: {
      backButton: "Назад",
      save: "Запази",
      submit: "Изпрати",
      delete: "Изтрий",
      close: "Затвори",
      add: "Добави",
      edit: "Редактирай",
      create: "Създай",
      reset: "Нулирай",
      confirm: "Потвърди",
      logout: "Изход",
    },
    dialog: {
      confirmAction: "Моля, потвърдете вашето действие",
      confirmDelete: "Моля, потвърдете изтриването",
    },
    common: {
      new: "Ново",
      number: "Номер",
      text: "Текст",
      status: "Статус",
      name: "Име",
      yes: "Да",
      no: "Не",
      total: "Общо",
      title: "Заглавие",
      note: "Бележка",
      paid: "Платено",
      amount: "Сума",
      settings: "Настройки",
      email: "Имейл",
      role: "Роля",
      expense: "Разход",
      income: "Приход",
      balance: "Баланс",
      date: "Дата",
      actions: "Действия",
      reserved: "Резервирано",
      search: "Търсене",
    },
    navMenu: {
      dashboard: "Табло",
      reservations: "Резервации",
      ledgers: "Сметки",
    },
    login: {
      keyWord: "Вход",
      password: "Парола",
      email: "Имейл",
      link: "регистрирайте се сега тук.",
      now: "сега!",
      signUpLoginToggle: "Вече имате акаунт?",
      toContinueUsing: "За да продължите да използвате нашата платформа, моля",
      action: "влезте.",
      hasAccount: "Ако нямате акаунт,",
    },
    signUp: {
      keyWord: "Регистрация",
      password: "Парола",
      confirmPassword: "Потвърдете паролата",
      email: "Имейл",
      username: "Потребителско име",
      now: "сега!",
      link: "влезте сега тук.",
      toContinueUsing: "За да продължите да използвате нашата платформа, моля",
      action: "регистрирайте се.",
      hasAccount: "Ако вече имате акаунт,",
    },
    errorPage: {
      wrongPath: "404 Не е намерено!",
      errorMessage: "Упс! Нещо се обърка.",
    },
    errorValidation: {
      usernameAtleastTwoCharacters:
        "Потребителското име трябва да съдържа поне 2 символа",
      invalidEmail: "Трябва да е валиден имейл",
      passwordAtleastSixCharacters: "Паролата трябва да съдържа поне 6 символа",
      passwordShouldMatch: "Паролите не съвпадат",
      required: "Задължително",
    },
    apiError: {
      unknownError: "Неизвестна грешка.",
      invalidCredentials: "Невалидни идентификационни данни.",
      emailExists: "Имейлът вече съществува.",
    },
    notifications: {
      allFieldsMandatory: "Всички полета са задължителни",
      fillBeforeSubmit:
        "Моля попълнете всички задължителни полета преди да изпратите.",
      dateReserved:
        "Датата, която се опитвате да изберете, вече е резервирана.",
    },
    ledgersPage: {
      ledgers: "Сметки",
      createNewLedger: "Създайте нова сметка",
      selectLedgerColor: "Изберете цвят за сметката",
      expenses: "Разходи",
    },
    reservationsPage: {
      reservations: "Резервации",
      createNewReservation: "Създайте нова резервация",
      editReservation: "Редактирайте резервацията",
      reservationDate: "Дата на резервацията",
    },
    dashboard: {
      reservedDates: "Резервирани дати",
    },
    classColors: {
      default: "По подразбиране",
      primary: "Основен",
      secondary: "Вторичен",
      accent: "Акцент",
      success: "Успех",
      warning: "Предупреждение",
      info: "Информация",
      error: "Грешка",
    },
    settings: {
      selectTheme: "Изберете тема",
      pickTheme: "Изберете любимата си тема",
      selectLanguage: "Изберете език",
      userInfo: "Информация за потребителя",
    },
  },
} as const;
