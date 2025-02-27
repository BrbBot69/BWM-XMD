const fs = require('fs-extra');
const { Sequelize } = require('sequelize');
if (fs.existsSync('config.env'))
    require('dotenv').config({ path: __dirname + '/config.env' });
const path = require("path");
const databasePath = path.join(__dirname, './database.db');
const DATABASE_URL = process.env.DATABASE_URL === undefined
    ? databasePath
    : process.env.DATABASE_URL;
module.exports = { session: process.env.SESSION_ID || 'BWM-XMD;;;H4sIAAAAAAAAA71W2Y6rSBL9l3y1b7NnYkslDYux8QbecY3mIYE0xmZzkmDjK//7iHKVqtTL7RqpNTwhSE6ciDgngp8gy+OSTEgD+j9BQeMaM9LesqYgoA/06nAgFHRBiBkGfWDrfjQxxUXGX/UGOqEPDWkt2pdotxF655U0W0zp0bGkU6a+gEcXFJWfxMEvAOsyzP25fhuOBG43u7gp1MjQ48rGXu6gxV2WvKx7gTO9D6IX8GgRcUzjLBoUR5ISipMJaVwc0+/Rd/QcaRPfSxTjEHQ2Skg0pvHH4WZ/tic1Xa5npqg0Ui2Ks+/R123s4lM8uiaxGs3vXnHZ2ZO7yW1UdTzWkqSBnfI6XA7rnf2kX8ZRRkI7JBmLWfPtuu/Mm2lGYuZNhcyKLXfB2fVJvHTGdQkXtX+ZHFzUc0YXtuW/R5xoMBpEgrxfzO0NVbfTKImTSbhj95mI7HhMrMHuckvlTZZ/Je7SD62c/5e6l6Mgel2fzc0ilYN7EN/pQhcsynmzjegq/vJWrZMrG9XhSP4efbcyuZObapbmWwOS3dPt0bCDoxscUGqUY65+nXrzKOtMDO2TPmYV/RVLRXd2tpyeTvprM79VibOTHeJ0jpFD5x2TS6+XHj98zZrcrS43u6noccgdg/XKkQ8dTowZF1V4eTf1+2KbZPPSv4Z3QYte3jI6k8YOQV94dAElUVwyilmcZ+0zUYJdgMN6RQJK2Ft5QdaTMm+/9U/TGaSolwVeR6YTTeb8peoUgocWo5Tq3vyQb15AFxQ0D0hZknAUlyynzYyUJY5ICfr/futUmzQlac7IOA5BH4hIFVRREkXY+1f52/WIWYmL4reMMNAFB5qnMwL6jFakC97OKwga0JR4aGqSKSBoibwgCbwA+YGqaYLeZpg+Y67jlJQMpwXoC0jmIVIVGT26/wiNgWHIhiCZCpI1RdEFXUFIRYYy4Hk44OHg/0RD0wUBygavaJqm9wTe4uHARJqJIDRkSUa/pqHw/xANXuE1izcFBfG6KfZk3tLgQLV0RbR6SLOMv6EhPP7TBRm5saenWyVKQhccYlqyTVYVSY7DD8N/vMRBkFcZWzVZYLQ3hIL+l8eEsTiLyjaxKsM0OMY1Mdo8QP+Ak5I8uiAkdRyQFg9YdUP8raQvttV9foJVxepXdG3VfMyz5xGkBEogH8IfMsbqD1ntwR++jKUfCh9CST2ECiI+aMvxHKftN3/p7sFsj+aTmk8ykaFkX8TbwLq6YnG3Nm8OfdqSUBJ+VNnHwbkq1vmZZL/AlSvucj2r5nW3MGVUQkXwrPFNkASd/4L7tDvo//xcYUYetnhwp+4VszcFbbfaOL8XQ1/+oxwy3J4F+zyKmjbIewfaz0PCcJyUoA8MezcS6vNoYE+nEZWHQ82ONCPSwGfHPqbic+ochz1Z8ZAXkLKaKZ638ALNX4kiKjjdMGIuOa225vk16N3Vlz8BAX2wTcfc2tiJSDwZFA2Pd7yZJ/yq5G9uZx4sfCLGC3S9KMvovOwsp9rJg3Opc+HgdTC5oMze+JLidkbQbtzMqWJLsUe2eX1poz2V8zUYd2jMYBifCMpc25/muKyFyU4eV4zpaoFt5DgqnnjX4SY2oUAHi/3apN4dBkVsdSDpzNcrVdlFco/POmMh0gqnhsb7vH7bF8n7no7fJ+lTZ4eYvK299x78Tac+Bc8/ul8Q3tfoX/1X7Jc1cbYdQRrR6cnZCrwlaUOesQoerosor5U9nyyUoecGHHi0Ti4SzA45Tdttm/oYdEGCS6Z9GvbPJqLSBWmjFcWKYfbhc6C112hFweO/drrh2h4KAAA=',
    PREFIXE: process.env.PREFIX || ".",
    OWNER_NAME: process.env.OWNER_NAME || "𝕬𝖛𝖊.𝕭☚⍢⃝☚",
    NUMERO_OWNER : process.env.NUMERO_OWNER || "27767494368",              
    AUTO_READ_STATUS: process.env.AUTO_READ_STATUS || "yes",
    AUTO_DOWNLOAD_STATUS: process.env.AUTO_DOWNLOAD_STATUS || 'no',
    BOT : process.env.BOT_NAME || '☚⍢⃝☚',
    URL : process.env.BOT_MENU_LINKS || 'https://files.catbox.moe/h2ydge.jpg',
    MODE: process.env.PUBLIC_MODE || "yes",
    PM_PERMIT: process.env.PM_PERMIT || 'no',
    HEROKU_APP_NAME : process.env.HEROKU_APP_NAME,
    HEROKU_APY_KEY : process.env.HEROKU_APY_KEY ,
    WARN_COUNT : process.env.WARN_COUNT || '3' ,
    ETAT : process.env.PRESENCE || '',
    CHATBOT : process.env.PM_CHATBOT || 'no',
    DP : process.env.STARTING_BOT_MESSAGE || "no",
    ANTIDELETE1 : process.env.ANTIDELETE1 || 'no',
    ANTIDELETE2 : process.env.ANTIDELETE2 || 'no',
    MENUTYPE : process.env.MENUTYPE || '',
    ANTICALL : process.env.ANTICALL || 'yes',
                  AUTO_REACT : process.env.AUTO_REACT || 'yes',
                  AUTO_REACT_STATUS : process.env.AUTO_REACT_STATUS || 'yes',
                  AUTO_REPLY : process.env.AUTO_REPLY || 'no',
                  AUTO_READ : process.env.AUTO_READ || 'yes',
                  AUTO_SAVE_CONTACTS : process.env.AUTO_SAVE_CONTACTS || 'yes',
                  AUTO_REJECT_CALL : process.env.AUTO_REJECT_CALL || 'yes',
                  AUTO_BIO : process.env.AUTO_BIO || 'yes',
                  AUDIO_REPLY : process.env.AUDIO_REPLY || 'no',
    DATABASE_URL,
    DATABASE: DATABASE_URL === databasePath
        ? "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway" : "postgresql://postgres:bKlIqoOUWFIHOAhKxRWQtGfKfhGKgmRX@viaduct.proxy.rlwy.net:47738/railway",
   
};
let fichier = require.resolve(__filename);
fs.watchFile(fichier, () => {
    fs.unwatchFile(fichier);
    console.log(`mise à jour ${__filename}`);
    delete require.cache[fichier];
    require(fichier);
});

