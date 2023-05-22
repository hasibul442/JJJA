import React from "react";
import { FcServices } from "react-icons/fc";
import { DiMaterializecss } from "react-icons/di";
import { MdPrecisionManufacturing } from "react-icons/md";
export default [
  {
    id: 1,
    title_en: "Technical Service",
    title_pt: "Serviço Técnico",
    description_en:
      "If you do not have anything to send us no worries, just send us your idea with some inspiration, our design team will give you a perfect solution and proper design, We have our own design department to create your tech pack, size chart and sewing pattern.",
    description_pt:
      "Se você não tem nada para nos enviar, não se preocupe, basta nos enviar sua ideia com alguma inspiração, nossa equipe de design lhe dará uma solução perfeita e um design adequado, temos nosso próprio departamento de design para criar seu pacote técnico, tabela de tamanhos e padrão de costura.",
    icon : <FcServices size={40}/>
  },
  {
    id: 2,
    title_en: "Fabric & Materials Sourcing",
    title_pt: "Fonte de tecidos e materiais",
    description_en:
      "Our source capacity is very strong we can source any kind of fabric or materials from our local or foreign markets, our marketing team will observe your order requirement and will suggest for best things, once you will choose the materials we will source that as per your approval.",
    description_pt: "Nossa capacidade de fonte é muito forte, podemos fonte qualquer tipo de tecido ou material de nossos mercados locais ou estrangeiros, nossa equipe de marketing irá observar o seu requisito de pedido e irá sugerir para as melhores coisas, uma vez que você vai escolher os materiais que iremos fonte que de acordo com a sua aprovação." ,
    icon : <DiMaterializecss size={40}/>
  },
  {
    id: 3,
    title_en: "Manufacturing",
    title_pt: "Fabricação",
    description_en:
      "JJJA ltd. is a one-stop apparel manufacturing company, you no need to go anywhere for anything to get your final product, we have in-house every department from design, development, sourcing, and manufacturing, so, From us you can get your final product from just your idea.",
    description_pt:
      "JJJA ltd. é uma empresa de fabricação de vestuário de balcão único, você não precisa ir a nenhum lugar para obter seu produto final, temos em casa todos os departamentos de design, desenvolvimento, sourcing e fabricação, então, de nós você pode obter seu produto final de apenas sua ideia.",
    icon : <MdPrecisionManufacturing size={40}/>
  },
 

];
