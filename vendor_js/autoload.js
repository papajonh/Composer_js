// chamar gerenciador de módulos
import { modules } from './modules/modules.js';

// Importa módulo único
export async function use(namespace) {
    if (!(namespace in modules)) throw new Error(`Módulo não encontrado: ${namespace}`);
    const mod = await modules[namespace]();
    return mod;
}

// Importa todos os módulos de um namespace
export async function useNamespace(ns) {
    const promises = Object.entries(modules)
        .filter(([key, loader]) => key.startsWith(ns + "."))
        .map(async ([key, loader]) => {
            const name = key.split(".")[1];
            const mod = await loader();
            const funcName = Object.keys(mod)[0];
            return [name, mod[funcName]];
        });
    const entries = await Promise.all(promises);
    return Object.fromEntries(entries);
}
// Importa todos os módulos de um namespace com multpiplas funções
export async function useNameSpaces(ns) {
    const promises = Object.entries(modules)
        .filter(([key, loader]) => key.startsWith(ns + "."))
        .map(async ([key, loader]) => {
            const name = key.split(".")[1];
            const mod = await loader();
            return [name, mod];
        });
    const entries = await Promise.all(promises);
    return Object.fromEntries(entries);
}