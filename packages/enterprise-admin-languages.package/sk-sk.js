module.exports = {
    
    /*
     * Common (menu, genral ui, etc...), loaded on all admin screens include login, register
     */
    common:{
        
        // common phrases
        'Remove':'Odstranit',
        'Close':'Zavriet',
        'Reset':'Zmenit',
        'Cancel':'Zrusit',
        'Delete':'Vymazat',
        'Create':'Vytvorit',
        'Update':'Ulozit',
        'Reload':'Obnovit',
        'Required':'Povinne',
        'Default':'Predvolene',
        'default':'predvolene',
        
        // forms and validation messages, e.g. "Value of "Name" is: Text"
        'Validation Failed':'Validation Failed',
        'Value of':'Value of',
        'must be':'must be',
        'required':'required',
        'isInteger': 'Number',
        'isString': 'Text',
        'isArray': 'List of Values',
        'isBoolean': 'True or False',
        'minLength': 'Value with Min. Length',
        'maxLength': 'Value with Max. Length',
        'isIn': 'In List of Values',
        'parseDate': 'Date',
        'toDate': 'Date',
        'date': 'Date',
        'toDateString': 'Date',
        'round': 'Number',
        'validate': 'Valid',
        'keyNames': 'Valid',
        'keys': 'Valid',
        'equals': 'is Valid',
        'contains': 'is Valid',
        'matches': 'Valid',
        'isEmail': 'Email',
        'isURL': 'URL',
        'isFQDN': 'FQDN',
        'isIP': 'IP address',
        'isAlpha': 'Letters (a-zA-Z) only',
        'isNumeric': 'Number',
        'isAlphanumeric': 'Alphanumeric',
        'isBase64': 'Base64',
        'isHexadecimal': 'Hexadecimal',
        'isHexColor': 'Hex Color',
        'isLowercase': 'Lowercase only',
        'isUppercase': 'Uppercase only',
        'isInt': 'Number',
        'isFloat': 'Number',
        'isDivisibleBy': 'Valid',
        'isLength': 'Valid',
        'isByteLength': 'Valid',
        'isUUID': 'UUID',
        'isDate': 'Date',
        'isAfter': 'Later',
        'isBefore': 'Sooner',
        'isCreditCard': 'Credit Card',
        'isISBN': 'ISBN',
        'isJSON': 'JSON',
        'isMultibyte': 'Multibyte',
        'isAscii': 'ASCII chars only',
        'isFullWidth': 'Valid',
        'isHalfWidth': 'Valid',
        'isVariableWidth': 'Valid',
        'isSurrogatePair': 'Surrogate Pair',

        // default menu items
        'My Account': 'Moj Ucet',
        'Profile':'Profil',
        'Change Password': 'Zmenit Heslo',
        'Logout': 'Odhlasit sa',
        'Application Configuration':'Konfiguracia Aplikacie',
        'Toogle Menu Position':'Prepnut Poziciu Menu',
        'User Management':'Manazment Uzivatelov',

        // grid
        'page':'stranka',
        'of':'z',
        'items':'poloziek',

        // notifications
        'Loading...':'Nacitava sa...',

        // query
        $equal:'=',
        $lt:'&lt;',
        $lte:'&lt;=',
        $gt:'&gt;',
        $gte:'&gt;=',
        $regex_exact:'presná zhoda',
        $regex_contains:'obsahuje',
        $regex_begins:'začína s',
        $regex_ends:'končí s',
        $in:'je v zozname',
        $ne:'nie je',
        $regex_ncontains:'neobsahuje',
        $regex_nbegins:'nezačína s',
        $regex_nends:'nekončí s',
        $nin:'nie je v zozname',
        $regex:'vlastný regex',
        $size:'veľkosť poľa',
        $exists:'existuje',
        $and:'a',
        $or:'alebo',
        OR:'ALEBO',
        AND:'A',
        choose:'(vyberte)',
        qtype_short_number:'0-9',
        qtype_short_date:'2014',
        qtype_short_boolean:'Á/N',
        qtype_short_string:'A-Z',
        qtype_short_array:'[A]',
        qtype_short_object:'{O}',
        qtype_number:'Číslo',
        qtype_date:'Dátum',
        qtype_boolean:'Logické áno/nie',
        qtype_string:'Text',
        qtype_array:'Pole',
        qtype_object:'Objekt',
        qvalue_true:'Áno',
        qvalue_false:'Nie',
        Search:'Hladat',
        
        // login
        'your@email.com':'vas@email.sk',
        'password':'heslo',
        'Wrong Email or Password':'Zle zadany email alebo heslo',
        'Log in':'Prihlasit sa',
        'Register':'Registrovat sa',
        'Forgot Password':'Zabudol som heslo',
        
        // register
        'Registration Successful':'Registracia prebehla uspesne',
        'Now, contact your administrator to setup account access permissions, please.':'prelozit text...',
        'This email is used by another user, please enter different':'prelozit text...',
        'repeat new password password (min. 5 letters)':'zopakovat nove heslo (min. 5 znakov)',
        
        // forgot password
        'Your Registered Email':'Vas Registrovany Email',
        'Send Password':'Zaslat Heslo',
        'Generate New Password':'Vygenerovat Nove Heslo',
        'New password was sent to your email':'Nove heslo bolo zaslane na Vas email',

        // forgot password email
        'Dear User':'Mily Uzivatel',
        'Your password was changed to':'Vase heslo bolo zmenene na',
        'We strongly recommend to change your password after login':'Odporucame si heslo po prihlaseni zmenit',
        'Thank you':'Dakujeme',
        
        // response error notifications
        'Access Denied':'Pristup Zamietnuty', 
        'Try logout and login again, or contact administrator':'prelozit...',
        'Document or his version not found':'prelozit...',
        'Try refresh page, please':'prelozit...',
        'Undocumented server error':'prelozit...',
        'Contact your administrator, please':'prelozit...',
        'Connection Failed':'Pripojenie na server zlyhalo', 
        'Try later, please':'Skuste neskor, prosim'
    },

    
    /*
     * Intro
     */
    '/intro':{
        'Presently Works in Browsers':'prelozit...',
        'Presently Works on Devices':'prelozit...'
    },
    
    /*
     * Config
     */
    '/config':{
        'Name & Details':'Nazov a Detaily',
        'Description':'Popis',
        'Language':'Jazyk',
        'Administration Area Language Settings':'Nastavenie Jazyka v Administracii',
        'Default Language':'Prednastaveny Jazyk',
        'Mailers':'Mail Servre',
        'Outgoing Mail Servers':'Nastavenia Odchadzajucej posty',
        'Host':'Server',
        'Port':'Port',
        'From Email':'Email Odosielatela',
        'From Name':'Meno Odosielatela',
        'Secure':'Zabezpecenie',
        'User':'Uzivatel',
        'user':'uzivatel',
        'Password':'Heslo',
        'password':'heslo',
        'Timeout in ms':'Max. Limit v ms',
        'unique mailer ID':'unikatne ID mail servera',
        'Add Mailer':'Pridat Mail Server',
        'Save Changes':'Ulozit Zmeny',
        'smtp.yourserver.com':'smtp.server.sk',
        'from@email.com':'odkoho@email.sk',
        'company name':'nazov spolocnosti',
        'Configuration Updated':'Konfiguracia Ulozena',
        
        // validation
        'host':'Server',
        'port':'Port',
        'from':'Odosielatel',
        
    },
    
    /*
     * Change Password
     */
    '/account/changepass':{
        'Change Your Password':'Zmenit Svoje Heslo',
        'Change':'Zmenit',
        'Old Password':'Stare Heslo',
        'New Password':'Nove Heslo',
        'Repeat New Password':'Zopakovat Nove heslo',
        'old password':'stare heslo',
        'new password':'nove haslo',
        'repeat new password':'zopakovat nove heslo',
        'Password Changed':'Heslo Zmenene'
    },
    
    /*
     * Profile
     */
    '/account/profile':{
        'Your User Profile':'Vas Uzivatelsky Profil',
        'Profile Updated':'Profil Zmeneny',
        'Profile':'Profil',
        'Nick Name':'Prezivka',
        'First Name':'Meno',
        'Last Name':'Priezvisko',
        'Language':'Jazyk',
    },
    
    /*
     * Users
     */
    '/users':{
        // profile
        'Profile':'Profil',
        'Nick Name':'Prezivka',
        'First Name':'Meno',
        'Last Name':'Priezvisko',
        'Language':'Jazyk',
        
        'Create User':'Vytvorit Uzivatela',
        'Email':'Email',
        'email@email.com':'email@email.sk',
        'Access':'Pristup',
        'Disabled':'Blokovany',
        'Reset Password':'Zmenit Heslo',
        'Roles':'Role',
        'Details':'Detaily',
        'Security':'Zabezpecenie',
        'ID':'ID',
        'API Key':'API Kluc',
        'Allowed API IPs':'Povolene API IP-adresy',
        'Created':'Vytvoreny',
        'Last Modified':'Posledna Zmena',
        'Last Login':'Posledne Prihlasenie',
        
        'This will permanently remove user, and may cause data integrity malfunction, if there are data associated with user. Are you sure ?':'Toto vymaze usera ... doplnit',
        'Remove User':'Vymazat Uzivatela',
        
        // resetpass modal
        'Reset User Password':'Zmenit Heslo Uzivatela',
        'New Password':'Nove Heslo',
        'new password':'nove haslo',
        'Repeat New Password':'Zopakovat Nove heslo',
        'repeat new password':'zopakovat nove heslo',
        
        // filter
        'email':'email',
        'roles':'rola',
        'nickname':'prezivka',
        'firstname':'meno',
        'lastname':'priezvisko',
        'disabled':'blokovany',
        'createdDT':'vytvoreny',
        'modifiedDT':'modifikovany',
        'lastLoginDT':'prihlaseny',
        
        // validations
        'selfDisable':'Not Yours',
        'selfRemove':'Not Yours'
    }
    
};