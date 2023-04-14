// Подключение функционала "Чертогов Фрилансера"
import { dataMediaQueries, isMobile } from "./functions.js";
// Подключение списка активных модулей
import { flsModules } from "./modules.js";

let intervalId;
/*
document.querySelectorAll('.menu-header__dropdown-toggle').forEach(e => {
    e.addEventListener('click', e => {
        const menu = e.currentTarget.dataset.path;
        document.querySelectorAll('.menu-header__dropdown-menu').forEach(e =>{
            if (!document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                e.classList.remove('menu-header__menu-active');
                e.classList.remove('open');
                document.querySelector(`[data-target=${menu}]`).classList.add('menu-header__menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.add('open')
                }, 0);
            };
            if (document.querySelector(`[data-target=${menu}]`).classList.contains('open')) {
                clearTimeout(intervalId);
                document.querySelector(`[data-target=${menu}]`).classList.remove('menu-header__menu-active');
                intervalId = setTimeout(() => {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open')
                }, 0);
            }

            window.onclick = e => {
                if(e.target == document.querySelector(`[data-target=${menu}]`) || e.target == document.querySelector(`[data-path=${menu}]`)) {
                    return;
                } else {
                    document.querySelector(`[data-target=${menu}]`).classList.remove('menu-header__menu-active');
                    document.querySelector(`[data-target=${menu}]`).classList.remove('open');
                };
            };
        });
    });
});
*/
