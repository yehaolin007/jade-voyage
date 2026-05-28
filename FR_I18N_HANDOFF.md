# Jade Voyage 法语 i18n 补译交接

**最后更新**: 2026-05-26 by Claude (Opus 4.7)
**目标**: 把 `public/i18n.js` 里的 `frText` / `frHtml` 字典补全，让站点 FR 切换无遗漏

---

## 1. 背景（必读）

- 项目: Jade Voyage 外贸独立站（比赛单交付，深海军蓝 + 橙 CTA 方向）
- 三语切换: EN / CN / FR
- i18n 实现: `public/i18n.js`，包含 `text`/`html`（EN→CN 字典）和 `frText`/`frHtml`（EN→FR 字典）
- 切换逻辑: 页面上的英文文案做 key，运行时查表替换

**已修两个底层 bug（不要回退）**:
1. `syncToggle()` 改成 `querySelectorAll`，支持 Nav 里多节点切换标记（`public/i18n.js` line 1300-1308）
2. lang 下拉打开/关闭脚本已就位

---

## 2. 我做了什么（已完成）

### 2.1 第一波 frText 补译（line 1256-1329）
追加 75 条 UI 标签：Tours/About/Stories/Search/Language、Tour SOP、All Packages、TCM Wellness、Healing Travel、Across China、Adult/Senior/Family package、Nights、城市并置（"Hangzhou · West Lake" 等）、Service Categories、— Overview / — Our Team / — Day-By-Day 等章节标题、Day 01-09、SCROLL 等。

### 2.2 修了 escape bug（line 1293-1295）
上一轮加了 `"What\\'s included"` 等三条键，双引号字符串里写 `\\'` 让运行时 key 变成 `What\'s included`（带反斜杠），与 CN 字典的运行时 key `What's included` 不匹配。

**已改为**:
```js
"What's included": "Ce qui est inclus",
"What's included.": "Ce qui est inclus.",
"What's separate.": "Ce qui est séparé.",
```

> **规则**: `frText`/`frHtml` 用双引号包裹，撇号直接写 `'`，不要 `\\'`。

### 2.3 frHtml 全部补齐（line 1344-1358，15 条）
所有 Hero 标题、tour 预订横幅、tour 介绍段落都已译。`html` 字典 25 → `frHtml` 26（多一个不影响）。

### 2.4 辅助脚本
`scripts/diff-i18n.cjs` —— 跑 `node scripts/diff-i18n.cjs` 可列出 text/html 缺译。当前输出：
```
text: CN=665, FR=576
html: CN=25, FR=26
[text] Missing in FR: 166
[html] Missing in FR: 0
```

---

## 3. 剩余工作（166 条 frText）

剩余 166 条里有约 **20 条不需要翻译**（地名、人名、邮箱号），约 **146 条需要真翻**。

### 3.1 跳过列表（保持英文原文，等同 FR）
这些 key 在 FR 里照原样就行，**不要加进 frText**——会和 CN 字典里同名 key 冲突。或者加同样的 value 也可以：

```
Berlin / Boston / Chengdu / Beijing / Toronto / Hangzhou
Margaret K. / Hendrik & Eva / Dr. James A. Whitford
WhatsApp +86 (0) 138-0000-0000 · hello@harmonyretreats.com
— OR WHATSAPP +86 (0) 138-0000-0000 · HELLO@JADEVOYAGE.COM —
Hangzhou · Shanghai · Chengdu
```

### 3.2 价格行（翻 "nights"→"nuits", "From"→"À partir de"）
```js
"4 nights · From $3,150": "4 nuits · À partir de 3 150 $",
"5 nights · From $3,420": "5 nuits · À partir de 3 420 $",
"5 nights · From $4,920": "5 nuits · À partir de 4 920 $",
"6 nights · From $3,690": "6 nuits · À partir de 3 690 $",
"7 nights · From $4,280": "7 nuits · À partir de 4 280 $",
"9 nights · From $6,180": "9 nuits · À partir de 6 180 $",
```

### 3.3 UI 标签 / 章节标题 / 按钮（建议译文）
```js
"— Why Harmony Retreats": "— Pourquoi Harmony Retreats",
"a single conversation.": "une seule conversation.",
"Reputable Travel Agency": "Agence de voyage réputée",
"— Signature Itineraries": "— Itinéraires signature",
"per person · twin share": "par personne · chambre double",
"Honesty about outcomes.": "Honnêteté sur les résultats.",
"Can't find your route?": "Vous ne trouvez pas votre itinéraire ?",
"Consent-first Data Flow": "Flux de données fondé sur le consentement",
"National network roadmap": "Feuille de route du réseau national",
"National Network Roadmap": "Feuille de route du réseau national",
"Your journey begins with": "Votre voyage commence par",
"West Lake · Headquarters": "Lac de l'Ouest · Siège",
"Jinjiang · Cultural team": "Jinjiang · Équipe culturelle",
"Request This Itinerary →": "Demander cet itinéraire →",
"Consent and data handling": "Consentement et traitement des données",
"Starting price per person": "Prix à partir de, par personne",
"— Can't find your route?": "— Vous ne trouvez pas votre itinéraire ?",
"A rhythm, not a schedule.": "Un rythme, pas un programme.",
"Pay Deposit with PayPal →": "Payer l'acompte avec PayPal →",
"Jing'an · Medical liaison": "Jing'an · Liaison médicale",
"Licensed heritage therapies": "Thérapies patrimoniales agréées",
"Chongqing wellness packages": "Formules bien-être à Chongqing",
"— Can't find your package?": "— Vous ne trouvez pas votre formule ?",
"Strict medical data security": "Sécurité stricte des données médicales",
"Ask the Concierge a Question": "Poser une question au concierge",
"Contact us to pay another way": "Contactez-nous pour un autre mode de paiement",
"Plan a calmer China journey with": "Planifiez un voyage plus serein en Chine avec",
"Gratuities and personal shopping": "Pourboires et achats personnels",
"International department partners": "Partenaires des départements internationaux",
"All-inclusive transparent pricing": "Tarification transparente tout compris",
"Professional medical interpreters": "Interprètes médicaux professionnels",
"packages · sorted by guest rating": "formules · triées par note des voyageurs",
"Built for guests who need clarity.": "Pensé pour les voyageurs en quête de clarté.",
"Checkup, TCM and travel in one plan": "Bilan, MTC et voyage en un seul plan",
"JCI · ISO 9001 · Accredited Partners": "JCI · ISO 9001 · Partenaires accrédités",
"\"It felt curated, but never staged.\"": "« C'était soigné, jamais mis en scène. »",
"Top-tier JCI accredited care partners": "Partenaires de soins JCI haut de gamme",
"6 nights · Anhui · Heritage · Apr – Oct": "6 nuits · Anhui · Patrimoine · Avr – Oct",
"Final quote confirmed by your concierge.": "Devis final confirmé par votre concierge.",
"\"The quiet moments stayed with me most.\"": "« Ce sont les moments calmes qui m'ont le plus marquée. »",
"Three more routes our guests return for.": "Trois autres itinéraires pour lesquels nos clients reviennent.",
"24-hour medical hotline during your stay": "Ligne médicale 24h/24 pendant votre séjour",
"All in-trip transfers in private vehicles": "Tous les transferts sur place en véhicule privé",
"Four credential entrances before booking.": "Quatre points d'accès aux références avant réservation.",
"Chongqing Checkup + TCM · 5 nights · 2026": "Bilan + MTC à Chongqing · 5 nuits · 2026",
"4 nights · Shanghai · Medical · Year-round": "4 nuits · Shanghai · Médical · Toute l'année",
"A complete journey, not just a destination.": "Un voyage complet, pas seulement une destination.",
"7 nights · Hangzhou · Wellness · Sept – Nov": "7 nuits · Hangzhou · Bien-être · Sept – Nov",
"9 nights · Yunnan · Tea Forests · Oct – Mar": "9 nuits · Yunnan · Forêts de thé · Oct – Mar",
"Of attentive concierge service across China": "De service concierge attentif à travers la Chine",
"Medical / TCM consultations as per category": "Consultations médicales / MTC selon la catégorie",
"Three clear steps from booking to follow-up.": "Trois étapes claires, de la réservation au suivi.",
"Boutique five-star or heritage accommodation": "Hébergement boutique cinq étoiles ou patrimonial",
"5 nights · Sichuan · Hot Springs · Year-round": "5 nuits · Sichuan · Sources chaudes · Toute l'année",
"Optional add-on experiences priced separately": "Expériences en option facturées séparément",
"Checkup, TCM heritage and travel in one plan.": "Bilan, patrimoine MTC et voyage en un seul plan.",
"Chongqing wellness packages with clear scope.": "Formules bien-être à Chongqing au périmètre clair.",
"5 nights · Jiangsu · Garden Cities · Mar – Jun": "5 nuits · Jiangsu · Cités-jardins · Mar – Juin",
"TCM Heritage + Mountain City · 6 nights · 2026": "Patrimoine MTC + Ville-montagne · 6 nuits · 2026",
"Entrance fees to all heritage and partner sites": "Droits d'entrée à tous les sites patrimoniaux et partenaires",
"Your journey begins with a single conversation.": "Votre voyage commence par une seule conversation.",
"We build custom Chongqing plans for each guest.": "Nous concevons des plans Chongqing sur mesure pour chaque voyageur.",
"Cross-border wellness travel, held by one team.": "Voyage bien-être transfrontalier, pris en main par une seule équipe.",
"International flights (we can arrange on request)": "Vols internationaux (organisés sur demande)",
"© 2026 Harmony Retreats Ltd. · All rights reserved.": "© 2026 Harmony Retreats Ltd. · Tous droits réservés.",
"Executive Checkup Journey · Repeat guest since 2024": "Bilan exécutif · Cliente fidèle depuis 2024",
"Premium travel care, planned with medical precision.": "Service voyage premium, planifié avec précision médicale.",
"No matches. Try \"Chongqing\", \"checkup\" or \"contact\".": "Aucun résultat. Essayez « Chongqing », « bilan » ou « contact ».",
"Looking for a specific document or partner standard?": "Vous cherchez un document précis ou une norme de partenaire ?",
"Daily breakfast + curated regional dining experiences": "Petit-déjeuner quotidien + expériences gastronomiques régionales sélectionnées",
"Visa application fees (we provide invitation letters)": "Frais de demande de visa (nous fournissons les lettres d'invitation)",
"Every package is backed by visible partner standards.": "Chaque formule est adossée à des normes partenaires visibles.",
"Buffer day for weather-dependent itinerary adjustments.": "Journée tampon pour les ajustements d'itinéraire liés à la météo.",
"Final reflection walk · transfer to next leg or airport.": "Promenade finale de réflexion · transfert vers l'étape suivante ou l'aéroport.",
"Crafts village stay · indigo dye / silver work workshop.": "Séjour en village artisanal · atelier teinture indigo / travail de l'argent.",
"Clear consent before any medical or travel data is shared.": "Consentement clair avant tout partage de données médicales ou de voyage.",
"No deposit required to enquire. Custom adjustments welcome.": "Aucun acompte requis pour se renseigner. Ajustements sur mesure bienvenus.",
"Museum & private gallery access · curator-led conversation.": "Accès musées et galeries privées · échange guidé par un curateur.",
"Locks every line of the itinerary at today's exchange rate.": "Verrouille chaque ligne de l'itinéraire au taux de change du jour.",
"Arrival · evening orientation walk · cultural curator briefing.": "Arrivée · marche d'orientation en soirée · briefing par un curateur culturel.",
"Slow morning · optional photography session · seasonal banquet.": "Matinée lente · séance photo en option · banquet saisonnier.",
"Day-trek with mule porters · highland picnic · stargazing camp.": "Randonnée d'une journée avec muletiers · pique-nique en altitude · campement d'observation des étoiles.",
"Off-the-grid village stay · twilight meditation by ancient pine.": "Séjour en village hors-réseau · méditation au crépuscule sous un pin ancien.",
"Personal travel insurance (mandatory; partner referral available)": "Assurance voyage personnelle (obligatoire ; orientation partenaire disponible)",
"Secured by PayPal · Buyer protection · No PayPal account required": "Sécurisé par PayPal · Protection acheteur · Sans compte PayPal requis",
"Private transfer · debrief & lifestyle continuation plan delivered.": "Transfert privé · débriefing et plan de continuation de vie remis.",
"Where ancient healing meets modern care — across the heart of China.": "Là où la guérison ancienne rencontre les soins modernes — au cœur de la Chine.",
"Stories from guests who combined checkups, TCM and Chongqing travel.": "Témoignages de voyageurs ayant combiné bilans, MTC et voyage à Chongqing.",
"Tea Horse Road segment · ancient post-station stay · regional cuisine.": "Tronçon de la route du thé et des chevaux · séjour dans un ancien relais · cuisine régionale.",
"Private transfer to airport · post-trip telehealth booked if requested.": "Transfert privé vers l'aéroport · télé-consultation post-voyage réservée sur demande.",
"Early sunrise expedition · heritage site tour · regional cuisine dinner.": "Sortie au lever du soleil · visite du site patrimonial · dîner de cuisine régionale.",
"Concluding wellness review · TCM prescription written for home practice.": "Bilan bien-être de clôture · prescription MTC rédigée pour la pratique à domicile.",
"Final consultation · take-home prescriptions translated · farewell dinner.": "Consultation finale · prescriptions à emporter traduites · dîner d'adieu.",
"High value, all-inclusive quotations and no hidden charges during the trip.": "Devis tout compris à forte valeur et aucun frais caché pendant le voyage.",
"\"I came for a check-up. I left with a practice I still keep every morning.\"": "« Je suis venue pour un bilan. Je suis repartie avec une pratique que je conserve chaque matin. »",
"Acupuncture session · guided Tai Chi at dawn · vegetarian cuisine workshop.": "Séance d'acupuncture · Tai Chi guidé à l'aube · atelier de cuisine végétarienne.",
"Arrival in private vehicle · meeting with route designer · welcome banquet.": "Arrivée en véhicule privé · rencontre avec le concepteur d'itinéraire · banquet de bienvenue.",
"Forest soak & herbalist consultation · slow afternoon among Pu-erh terraces.": "Bain en forêt et consultation d'herboriste · après-midi lent parmi les terrasses de Pu'er.",
"Crafts workshop · meet local artisan · afternoon hiking with bilingual guide.": "Atelier d'artisanat · rencontre avec un artisan local · randonnée l'après-midi avec un guide bilingue.",
"Full pre-screening intake · bloodwork · ECG · imaging at the partner hospital.": "Bilan pré-diagnostique complet · prise de sang · ECG · imagerie à l'hôpital partenaire.",
"Specialist consultations · results review · English-language report assembled.": "Consultations spécialisées · revue des résultats · rapport en anglais constitué.",
"Dr. James A. Whitford · Retired cardiologist · Boston · Repeat guest since 2022": "Dr. James A. Whitford · Cardiologue à la retraite · Boston · Client fidèle depuis 2022",
"Post-screening rest day · gentle excursion or in-house spa · concierge debrief.": "Journée de repos post-diagnostique · excursion douce ou spa intérieur · débriefing concierge.",
"Filter by package category, or speak with us about a fully custom Chongqing plan.": "Filtrez par catégorie de formule, ou échangez avec nous sur un plan Chongqing entièrement sur mesure.",
"Optional day-trip to a tea-mountain retreat · calligraphy or Guqin class on return.": "Excursion en option vers une retraite de montagne du thé · cours de calligraphie ou de Guqin au retour.",
"PayPal could not be loaded — please try again or use one of the alternatives below.": "PayPal n'a pas pu être chargé — veuillez réessayer ou utiliser l'une des alternatives ci-dessous.",
"Hot-spring half-day · meridian massage · afternoon at leisure in the garden pavilion.": "Demi-journée aux sources chaudes · massage des méridiens · après-midi libre dans le pavillon du jardin.",
"Arrival & airport meet-and-greet · check into JCI-accredited recovery hotel · light dinner.": "Arrivée et accueil à l'aéroport · installation dans un hôtel de récupération accrédité JCI · dîner léger.",
"Morning TCM diagnostic with a licensed physician · personal herbal formulation · lakeside walk.": "Diagnostic MTC matinal avec un médecin agréé · formulation personnelle de plantes · promenade au bord du lac.",
"Arrival & private transfer · welcome tea ceremony · light evening consultation with your concierge.": "Arrivée et transfert privé · cérémonie du thé de bienvenue · consultation légère en soirée avec votre concierge.",
"Your deposit has been received. A concierge will email you within four hours to confirm the next steps.": "Votre acompte a été reçu. Un concierge vous enverra un e-mail dans les quatre heures pour confirmer les étapes suivantes.",
"Checkup, TCM heritage therapies and culture travel in one standardized journey from inquiry to departure.": "Bilan, thérapies patrimoniales MTC et voyage culturel en un seul parcours standardisé, de la demande au départ.",
"Cooperation with Class III hospital international departments, efficient checkups and expert interpretation.": "Coopération avec les départements internationaux d'hôpitaux de classe III, bilans efficaces et interprétation experte.",
"Assisted return, one-on-one medical report interpretation, online archive access and ongoing wellness consultation.": "Retour accompagné, interprétation personnalisée du rapport médical, accès aux archives en ligne et suivi bien-être continu.",
"Tell us your dates, checkup needs, TCM interests and travel rhythm — we'll send a private proposal within 48 hours.": "Indiquez-nous vos dates, vos besoins de bilan, vos centres d'intérêt en MTC et votre rythme de voyage — nous vous envoyons une proposition privée sous 48 heures.",
"Reach a real concierge — not a chatbot. We respond in English, German, French or Mandarin, typically within four hours.": "Joignez un vrai concierge — pas un chatbot. Nous répondons en anglais, allemand, français ou mandarin, généralement dans les quatre heures.",
"Tell us your dates, your interests, and any medical or wellness goals — we'll send a private proposal within 48 hours.": "Indiquez-nous vos dates, vos centres d'intérêt et vos objectifs médicaux ou bien-être — nous vous envoyons une proposition privée sous 48 heures.",
"Consult on the official website, order your package, and let a dedicated advisor assist with your China visa preparation.": "Consultez le site officiel, commandez votre formule et laissez un conseiller dédié vous accompagner dans la préparation de votre visa pour la Chine.",
"We share medical and wellness results plainly. No promises of cures — only credentialed care and verifiable practitioners.": "Nous partageons clairement les résultats médicaux et bien-être. Aucune promesse de guérison — uniquement des soins accrédités et des praticiens vérifiables.",
"Clear package routes that combine checkups, TCM heritage therapies and mountain-city travel, all supported by one concierge.": "Des itinéraires de formule clairs combinant bilans, thérapies patrimoniales MTC et voyage en ville-montagne, soutenus par un seul concierge.",
"Hendrik and Eva travelled the Mist & Pine route in late spring — a small-group trek that turned out to be exactly their pace.": "Hendrik et Eva ont parcouru l'itinéraire Brume & pins à la fin du printemps — un trek en petit groupe qui s'est révélé être exactement leur rythme.",
"We partner only with JCI-accredited hospitals and Class III Tier-A facilities, paired with five-star recovery accommodations.": "Nous travaillons uniquement avec des hôpitaux accrédités JCI et des établissements de Classe III Tier-A, associés à des hébergements de récupération cinq étoiles.",
"Boutique hotels, small groups (under 8 guests), and itineraries that respect the slowness Chinese landscape was designed for.": "Hôtels boutique, petits groupes (moins de 8 voyageurs) et itinéraires qui respectent la lenteur pour laquelle le paysage chinois a été conçu.",
"Replace site.paypal.clientId in src/data/site.ts with your PayPal Developer Sandbox Client ID to enable a real test checkout.": "Remplacez site.paypal.clientId dans src/data/site.ts par votre Client ID PayPal Developer Sandbox pour activer un véritable paiement de test.",
"Multilingual airport pickup and check-in support, with full accompaniment for checkups, TCM wellness and cultural experiences.": "Accueil multilingue à l'aéroport et assistance à l'enregistrement, avec accompagnement complet pour les bilans, le bien-être MTC et les expériences culturelles.",
"Start with one conversation. We help match checkups, TCM heritage therapies and mountain-city experiences into one clear plan.": "Commencez par une conversation. Nous aidons à associer bilans, thérapies patrimoniales MTC et expériences en ville-montagne en un plan clair.",
"We work with screened hospitals, TCM wellness partners and licensed travel operators, with standards shown clearly before booking.": "Nous travaillons avec des hôpitaux sélectionnés, des partenaires bien-être MTC et des opérateurs de voyage agréés, dont les normes sont affichées clairement avant réservation.",
"Hendrik and Eva joined a TCM heritage route with slow city walks, hot-spring recovery and one concierge who kept every transfer easy.": "Hendrik et Eva ont rejoint un itinéraire patrimonial MTC avec des promenades urbaines lentes, une récupération aux sources chaudes et un concierge qui a facilité chaque transfert.",
"From your first inquiry to your return flight, a single bilingual concierge accompanies your file — no handoffs, no relayed questions.": "De votre première demande à votre vol retour, un seul concierge bilingue accompagne votre dossier — aucun transfert, aucune question relayée.",
"We partner only with institutions that meet international accreditation or top national tier — and we re-verify every relationship annually.": "Nous ne travaillons qu'avec des institutions répondant à une accréditation internationale ou au plus haut palier national — et nous re-vérifions chaque relation chaque année.",
"Every Harmony Retreats itinerary weaves three threads — medical precision, traditional restoration, and the slow rhythm of Chinese landscape.": "Chaque itinéraire Harmony Retreats tisse trois fils — précision médicale, restauration traditionnelle, et le rythme lent du paysage chinois.",
"From a two-day executive checkup to morning Tai Chi by the riverside, Margaret shares how the Chongqing rhythm made recovery feel practical and calm.": "D'un bilan exécutif de deux jours au Tai Chi matinal au bord du fleuve, Margaret raconte comment le rythme de Chongqing a rendu la récupération concrète et paisible.",
"From cardiac screening on day one to learning Tai Chi by the lake on day five — Margaret shares how the rhythm of the week reshaped her relationship with rest.": "D'un dépistage cardiaque le premier jour à l'apprentissage du Tai Chi au bord du lac le cinquième jour — Margaret raconte comment le rythme de la semaine a réinventé son rapport au repos.",
"The medical care was world-class, but the small moments — the herbalist explaining each leaf, the silent breakfast by the lotus pond — those stay with me most.": "Les soins médicaux étaient de classe mondiale, mais ce sont les petits moments — l'herboriste expliquant chaque feuille, le petit-déjeuner silencieux près du bassin aux lotus — qui me restent le plus.",
"Every Harmony Retreats package is built around a practical service flow: efficient health checks, licensed TCM wellness experiences and relaxed Chongqing travel.": "Chaque formule Harmony Retreats s'articule autour d'un flux de service pragmatique : bilans de santé efficaces, expériences de bien-être MTC agréées et voyage détendu à Chongqing.",
"The checkup was efficient, but the small moments stayed with me most: the careful report reading, the herbal consultation, and the quiet city walks after dinner.": "Le bilan a été efficace, mais ce sont les petits moments qui m'ont le plus marquée : la lecture attentive du rapport, la consultation d'herboriste et les promenades urbaines paisibles après le dîner.",
"Harmony Retreats coordinates checkups, TCM heritage therapies and Chongqing mountain-city experiences for international guests who want a clear, supported journey.": "Harmony Retreats coordonne bilans, thérapies patrimoniales MTC et expériences en ville-montagne à Chongqing pour des voyageurs internationaux en quête d'un parcours clair et accompagné.",
"We remain deliberately small. Each booking receives a named advisor, a clear package scope, visible partner standards and follow-up support after guests return home.": "Nous restons délibérément à taille humaine. Chaque réservation reçoit un conseiller nommé, un périmètre de formule clair, des normes partenaires visibles et un suivi après le retour des voyageurs.",
"Harmony Retreats is held by a tight group of medical, wellness and travel curators based in Hangzhou, Shanghai and Chengdu. We design and accompany every itinerary ourselves.": "Harmony Retreats est portée par un groupe restreint de curateurs médicaux, bien-être et voyage basés à Hangzhou, Shanghai et Chengdu. Nous concevons et accompagnons chaque itinéraire nous-mêmes.",
"Typically within four hours during China business hours (UTC+8), and within twenty-four hours otherwise. Every initial inquiry is answered by a real concierge, not a chatbot.": "Généralement dans les quatre heures pendant les heures ouvrées en Chine (UTC+8), et dans les vingt-quatre heures sinon. Chaque demande initiale est traitée par un vrai concierge, pas un chatbot.",
"Premium health check-ups, traditional wellness retreats and bespoke cultural itineraries — designed for discerning international travelers seeking restoration of body and spirit.": "Bilans de santé premium, retraites bien-être traditionnelles et itinéraires culturels sur mesure — pensés pour les voyageurs internationaux exigeants en quête de restauration du corps et de l'esprit.",
"Internal medicine specialist with twenty years at a JCI-accredited tertiary hospital. Dr. Chen oversees every hospital partnership and reviews each guest's diagnostic plan before arrival.": "Spécialiste de médecine interne avec vingt ans d'expérience dans un hôpital tertiaire accrédité JCI. Dr. Chen supervise chaque partenariat hospitalier et examine le plan diagnostique de chaque voyageur avant son arrivée.",
"The idea behind Harmony Retreats is simple: international guests should not have to coordinate medical appointments, TCM wellness experiences, transport, translation and travel planning through five disconnected channels.": "L'idée derrière Harmony Retreats est simple : les voyageurs internationaux ne devraient pas avoir à coordonner rendez-vous médicaux, expériences bien-être MTC, transport, traduction et planification de voyage à travers cinq canaux déconnectés.",
"We focus on Chongqing as a practical wellness base: strong hospital access, mountain-city culture, distinctive food, riverside movement and surrounding restorative routes. The concierge layer holds the plan together before, during and after the trip.": "Nous prenons Chongqing comme base bien-être pragmatique : accès hospitalier solide, culture de ville-montagne, gastronomie distinctive, mouvement au bord du fleuve et itinéraires restaurateurs alentour. La couche concierge tient le plan ensemble avant, pendant et après le voyage.",
"Fifteen years between hospital administration in Shanghai and bespoke travel design in Hangzhou. Lin started Harmony Retreats after her own family's search for English-language medical care turned into a study of every accredited centre in eastern China.": "Quinze ans entre administration hospitalière à Shanghai et conception de voyage sur mesure à Hangzhou. Lin a fondé Harmony Retreats après que la recherche de sa propre famille de soins médicaux en anglais s'est transformée en une étude de chaque centre accrédité de l'est de la Chine.",
```

---

## 4. 操作步骤（接手 AI 执行）

### Step 1: 插入位置
在 `public/i18n.js` 找到 frText 末尾（约 line 1329）：
```js
    "Across": "À travers"   ← 给这行加逗号
  };                         ← 在此行前插入新条目
```

### Step 2: 插入策略
用 `Edit` 工具，`old_string` 用 `"Across": "À travers"\n  };`（注意原文最后一条没逗号），`new_string` 改成 `"Across": "À travers",` + 上面 §3.2 + §3.3 的所有条目 + 闭合 `  };`。

**注意行数**: 上面约 130 条，一次 Edit 完全 OK（文件总共才 124KB，远低于 32MB）。如果担心可以分两批：第一批 UI 标签（§3.2 + §3.3 前 50 条），第二批长段落（§3.3 后 ~80 条）。

### Step 3: 验证
```bash
cd C:/Users/apex/Desktop/700/jade-voyage
node scripts/diff-i18n.cjs
```
期望输出：
```
text: CN=665, FR=~700
html: CN=25, FR=26
[text] Missing in FR: ~20 （都是地名/人名/邮箱号，可不译）
[html] Missing in FR: 0
```

### Step 4: 浏览器实测
```bash
npm run dev
```
**注意环境坑**: 系统代理可能拦 `localhost:4321`，要 curl 测试用 `curl --noproxy "localhost,127.0.0.1,::1" -6 http://[::1]:4321/`。浏览器打开不受影响。

切到 FR，过一遍这些页面：
- `/` 首页 Hero / Stats / Tour cards / CTA / Footer
- `/tours/west-lake-restoration` 详情页 Hero / Day-by-day / Inclusions / FAQ
- `/payment/west-lake-restoration` 预订页 Banner / Deposit tiers
- `/about` / `/promise` / `/standards`

Console 不应有 i18n warning。

---

## 5. 翻译风格约定

- **MTC** = Médecine Traditionnelle Chinoise（不直译 TCM）
- **JCI / Class III Tier-A**: 保留缩写，前后语境用法语解释
- **Harmony Retreats**: 品牌名不译
- **法语引号**: 用 `«` `»`（不是英文 `""`），中间加 nbsp 但代码里直接空格也能接受
- **温度引号 / 撇号**: 法语正字法用 `'` 不用 `'`，但代码里 `'` 都可（看现有 frText 大部分用 `'`）
- **数字千位分隔**: 法语用空格（`3 150`）不用逗号

---

## 6. 已知陷阱（不要踩）

1. **escape**: frText 是双引号字典，撇号直接写 `'`，**不要** 写 `\\'` 或 `\'`。
2. **html vs text**: `frHtml` 里的值可以含 `<br>` `<em>` HTML 标签，`frText` 不要含 HTML。
3. **key 必须和 CN 字典逐字一致**（包括标点、撇号、大小写、空格）。复制英文原文 key 时直接从 diff 脚本输出取，但**注意脚本输出里的 `\'` 是源码表示**——你在双引号字典里写 key 时直接写 `'`。
4. **html 字典里的 key 可能包含 `<br>` 等标签**（看 `Healing JourneysAcross China` 这种合并 key），frHtml 也要照原样匹配。
5. **不要碰其他 dict**（`text`/`html`/`cnHtml`），只在 frText/frHtml 加条目。
6. **不要重命名 i18n.js 里的现有 key**，那是页面源码里硬编码的英文文案。

---

## 7. 相关文件

| 文件 | 说明 |
|---|---|
| `public/i18n.js` | i18n 字典 + 切换逻辑（1500+ 行） |
| `scripts/diff-i18n.cjs` | 缺译检查脚本（运行 `node scripts/diff-i18n.cjs`） |
| `src/components/Nav.astro` | 语言切换 UI（已修 dropdown） |
| `BUILD_PLAN.md` | 项目主方案 |
| `JADE_VOYAGE_CHANGELOG_AND_NEXT_STEPS.md` | 之前 Codex 的交接手册 |

---

## 8. 验收标准

- [ ] `node scripts/diff-i18n.cjs` 显示 text 缺译 ≤ 20（剩余都是地名/人名/邮箱号）
- [ ] 切到 FR 后首页 Hero、Tour cards、Footer 全法语，无英文残留
- [ ] Tour 详情页 Day 01-09 行程、Inclusions、FAQ 全法语
- [ ] Payment 页预订横幅显示法语
- [ ] Console 无 i18n warning
- [ ] EN/CN 切回去仍正常（不要改动 text/html 字典）
