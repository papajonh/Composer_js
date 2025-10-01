import { useNameSpaces } from '../../../vendor_js/autoload.js';

//chama a funcão com a constante util."nome do módulo"."nome da função"
const util = await useNameSpaces('Util');
document.getElementById("title").innerHTML = util.title.title();
document.getElementById("title1").innerHTML = util.title.titleController();
document.getElementById("paragraph").innerHTML = util.paragraph.paragraph();