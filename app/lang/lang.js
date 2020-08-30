import lang_en from './en';
import lang_pt from './pt';
import lang_nl from './nl';
import lang_de from './de';
import lang_fr from './fr';
import lang_bg from './bg';
import lang_el from './el';
import lang_es from './es';
import lang_ko from './ko';
import lang_pl from './pl';
import lang_tr from './tr';
import lang_ru from './ru';
import lang_vn from './vn';
import lang_zh_hk from './zh_hk';
import lang_zh_cn from './zh_cn';
import lang_sl from './sl';

const settings = require('electron-settings');


export function traduction() {

	if (settings.has('settings.lang')) {
		var l = settings.get('settings.lang');
		if (l == "en") {
			return lang_en;
		} else if (l == "pt") {
			return lang_pt;
		} else if (l == "nl") {
			return lang_nl;
		} else if (l == "de") {
			return lang_de;
		} else if (l == "fr") {
			return lang_fr;
		} else if (l == "bg") {
			return lang_bg;
		} else if (l == "el") {
			return lang_el;
		} else if (l == "es") {
			return lang_es;
		} else if (l == "ko") {
			return lang_ko;
		} else if (l == "pl") {
			return lang_pl;
		} else if (l == "tr") {
			return lang_tr;
		} else if (l == "ru") {
			return lang_ru;
		} else if (l == "vn") {
			return lang_vn;
		}else if(l == "zh_hk"){
			return lang_zh_hk;
		}else if(l == "zh_cn"){
			return lang_zh_cn;
		}else if(l == "sl"){
			return lang_sl;
		}

	} else {
		settings.set("settings.lang", "en");
		return lang_en;
	}
}
