//chama os módulos dos diretorios com base no namespace "namespace"."objeto da função" 
export const modules = {
    "Util.add": () => import("../../public/js/MathTools/add.js"),
    "Util.divide": () => import("../../public/js/MathTools/divide.js"),
    "Util.multiply": () => import("../../public/js/MathTools/multiply.js"),
    "Util.subtract": () => import("../../public/js/MathTools/subtract.js"),

    "Util.title": () => import("../../public/js/RenderViews/renderTitle.js"),
    "Util.paragraph": () => import("../../public/js/RenderViews/renderParagraph.js"),



};