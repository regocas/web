---
layout: page.njk
title: "Aviso legal"
description: "Aviso legal do sitio web da Fundación Martina: titularidade, condicións de uso e responsabilidade."
translationKey: legal
updated: 2026-11-22
permalink: /gl/aviso-legal/
---
*Esta é unha tradución ao galego. En caso de discrepancia, prevalece a [versión en castelán]({{ ('legal' | translatedUrl('es', collections)) | url }}).*

## 1. Identificación do titular

En cumprimento do artigo 10 da Lei 34/2002, de servizos da sociedade da información e de comercio electrónico (LSSICE), infórmase de que o titular deste sitio web é {{ site.legal.fullName }} (en diante, «a Fundación»), con domicilio social na rúa Río Ulla, nº 10, 15179 Oleiros (A Coruña), NIF {{ site.legal.taxId }}, inscrita no Rexistro de Fundacións de Interese Galego co número {{ site.legal.registry }}, constituída mediante escritura pública do {{ site.legal.deedDate | dateLong(page.lang) }} ante o notario {{ site.legal.notary }}, número de protocolo {{ site.legal.protocol }}. Contacto: {{ site.email }}.

## 2. Obxecto e finalidade

Este sitio web ten por obxecto informar sobre os fins, actividades, órganos de goberno e vías de colaboración da Fundación, así como facilitar a relación con pacientes, familias, profesionais, entidades colaboradoras e público en xeral interesado nas ataxias e enfermidades raras.

## 3. Condicións de uso

O acceso e uso deste sitio web atribúe a condición de usuario e implica a aceptación plena das condicións incluídas neste Aviso Legal. O usuario comprométese a facer un uso axeitado dos contidos e servizos ofrecidos, a facilitar información veraz nos formularios que cubra, e a non empregalos para incorrer en actividades ilícitas, contrarias á boa fe ou á orde pública. Queda prohibida a utilización de técnicas de *framing* ou outras que permitan presentar este sitio web, o seu contido, ou o nome, logotipo e demais signos distintivos da Fundación, como propios dun terceiro ou de forma que induza a confusión.

## 4. Propiedade intelectual e industrial

Todos os contidos do sitio web (textos, imaxes, logotipos, deseño gráfico, código fonte e demais elementos) son titularidade da Fundación ou de terceiros que autorizaron o seu uso, e están protexidos pola normativa de propiedade intelectual e industrial. Queda prohibida a súa reprodución, distribución ou comunicación pública, total ou parcial, sen autorización expresa.

## 5. Exclusión de responsabilidade

**a) Información.** A Fundación non garante a ausencia de erros no acceso ao sitio web nin no seu contido, nin que este se atope actualizado en todo momento. A información publicada ten carácter divulgativo e non substitúe o asesoramento médico, legal ou profesional individualizado; a Fundación non se responsabiliza das decisións que o usuario adopte a partir da devandita información.

**b) Calidade e dispoñibilidade do servizo.** A Fundación non garante a dispoñibilidade, continuidade nin infalibilidade do sitio web, cuxo acceso poderá ser suspendido, interrompido ou cancelado, total ou parcialmente, por razóns técnicas ou de mantemento, sen que iso xere dereito a indemnización ningunha. Tampouco garante a ausencia de virus ou outros elementos nocivos, se ben aplicará as medidas razoables para evitalos.

**c) Contidos ligados.** Cando o sitio web actúe como simple intermediario respecto de contidos aloxados por terceiros, a Fundación unicamente responderá deles nos termos do artigo 17 LSSICE, isto é, cando teña coñecemento efectivo da súa ilicitude e non actúe con dilixencia para retiralos.

## 6. Ligazóns a terceiros

O sitio web pode conter ligazóns a páxinas de terceiros. A Fundación non asume responsabilidade ningunha sobre os contidos ou o funcionamento dos devanditos sitios.

## 7. Protección de datos persoais

O tratamento dos datos persoais facilitados a través deste sitio web rexese polo disposto na [Política de privacidade]({{ ('privacy' | translatedUrl(page.lang, collections)) | url }}).

## 8. Lexislación aplicable e foro

As presentes condicións réxense pola lexislación española. Para a resolución de calquera controversia, as partes sométense aos xulgados e tribunais {% if site.legal.courts.startsWith("A ") %}da {{ site.legal.courts.slice(2) }}{% else %}de {{ site.legal.courts }}{% endif %}, salvo que a normativa de consumidores e usuarios determine outro foro imperativo.
