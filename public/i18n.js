(function () {
  const KEY = 'jv-lang';
  const CN = 'CN';
  const EN = 'EN';

  const text = {
    'Services': '服务',
    'Tours': '行程',
    'Verified Partners': '认证伙伴',
    'Stories': '故事',
    'About': '关于',
    'Contact': '联系',
    'Book Consultation': '预约咨询',
    'Search': '搜索',
    'Language': '语言',
    'Home': '首页',
    'Itineraries': '行程',
    'Payment': '支付',
    'Email': '邮箱',
    'Hangzhou': '杭州',
    'Chengdu': '成都',
    'Beijing': '北京',
    'Hangzhou · Shanghai · Chengdu': '杭州 · 上海 · 成都',

    'Medical · Wellness · Culture': '医疗 · 康养 · 文化',
    'Serving Guests From 32 Countries': '服务来自32个国家的客人',
    'Healing Journeys': '疗愈之旅',
    'Across': '穿行',
    'Ancient China': '古老中国',
    'Premium health check-ups, traditional wellness retreats and bespoke cultural itineraries — designed for discerning international travelers seeking restoration of body and spirit.': '面向高净值国际旅客，提供高端健康体检、传统康养疗程与私人文化行程，让身体与精神在中国山水之间重新恢复秩序。',
    'Browse Itineraries': '浏览行程',
    'Speak with a Concierge': '联系专属顾问',
    'JCI · ISO 9001 · Accredited Partners': 'JCI · ISO 9001 · 认证合作伙伴',
    'SCROLL': '向下滚动',
    'Destination': '目的地',
    'Any Destination': '任意目的地',
    'Hangzhou · West Lake': '杭州 · 西湖',
    'Shanghai': '上海',
    'Sanya · Hainan': '三亚 · 海南',
    'Huangshan · Anhui': '黄山 · 安徽',
    'Emei · Sichuan': '峨眉 · 四川',
    'Suzhou · Jiangsu': '苏州 · 江苏',
    'Yunnan · Tea Forest': '云南 · 茶山',
    'Service Type': '服务类型',
    'MRI Precision Screening': '精准核磁体检',
    'Wellness Retreat': '中医康养',
    'Cultural Itinerary': '文化旅程',
    'Fully Bespoke Journey': '全定制行程',
    'Travel Month': '出行月份',
    'Any Month': '任意月份',
    'May 2026': '2026年5月',
    'Jun 2026': '2026年6月',
    'Jul 2026': '2026年7月',
    'Aug 2026': '2026年8月',
    'Sep 2026': '2026年9月',
    'Oct 2026': '2026年10月',
    'Nov 2026': '2026年11月',
    'Dec 2026': '2026年12月',
    'Inquire': '提交咨询',

    'Partner Hospitals': '合作医院',
    'Top-tier JCI Accredited': '顶级 JCI 认证',
    'Privacy Protection': '隐私保护',
    'Strict Medical Data Security': '严格医疗数据安全',
    'Translation Support': '翻译支持',
    'Professional Medical Interpreters': '专业医疗陪同翻译',
    'Cities Expansion': '城市网络',
    'National Network Roadmap': '全国目的地拓展',

    '— Our Three Pillars': '— 三大服务支柱',
    'A complete journey, not just a destination.': '完整旅程，不止抵达目的地。',
    'Every Jade Voyage itinerary weaves three threads — medical precision, traditional restoration, and the slow rhythm of Chinese landscape.': '每一条玉行路线，都把精准医疗、传统康养与中国山水的舒缓节奏编织在一起。',
    'Health Check-Ups': '高端健康体检',
    'Wellness Retreats': '中医康养疗程',
    'Cultural Itineraries': '文化深度旅程',
    'Full-body diagnostics at JCI-accredited tertiary hospitals — including cardiac, oncological screening and English-language consultation, completed in 2 days.': '在 JCI 认证三甲级合作医院完成全身体检，覆盖心脏、肿瘤等筛查，并提供英文问诊与报告解读，最快2天完成。',
    'Traditional Chinese Medicine consultations, acupuncture, herbal therapy and hot-spring soaks in mountain sanctuaries — guided by licensed practitioners.': '由持证中医师陪同，安排中医问诊、针灸、草本调理与山地温泉疗愈。',
    'From the gardens of Suzhou to the Yellow Mountains — small-group escorts or fully private tours led by bilingual cultural curators.': '从苏州园林到黄山松云，由双语文化策展人带领小团或全私人行程。',
    'Explore checkup packages': '查看体检方案',
    'Discover treatments': '了解康养疗程',
    'Browse all routes': '浏览全部路线',

    '— Signature Itineraries': '— 经典行程',
    'Routes our guests return for.': '让客人愿意再来的路线。',
    'View All Tours →': '查看全部行程 →',
    'PRECISION HEALTH': '精准医疗',
    'WELLNESS RETREAT': '康养疗愈',
    'CULTURAL HERITAGE': '文化遗产',
    'BESPOKE JOURNEY': '私人定制',
    'Most Loved': '最受喜爱',
    'New': '新路线',
    'Medical': '医疗',
    'Wellness': '康养',
    'Culture': '文化',
    'Bespoke': '定制',
    'All': '全部',
    'Hangzhou · Wellness': '杭州 · 康养',
    'Shanghai · Medical': '上海 · 医疗',
    'Anhui · Heritage': '安徽 · 人文',
    'Sichuan · Hot Springs': '四川 · 温泉',
    'Jiangsu · Garden Cities': '江苏 · 园林城市',
    'Yunnan · Tea Forests': '云南 · 茶山森林',
    '7 nights': '7晚',
    '6 nights': '6晚',
    '5 nights': '5晚',
    '4 nights': '4晚',
    '9 nights': '9晚',
    '7 nights · Hangzhou · Wellness · Sept – Nov': '7晚 · 杭州 · 康养 · 9月至11月',
    '4 nights · Shanghai · Medical · Year-round': '4晚 · 上海 · 医疗 · 全年',
    '6 nights · Anhui · Heritage · Apr – Oct': '6晚 · 安徽 · 人文 · 4月至10月',
    '5 nights · Sichuan · Hot Springs · Year-round': '5晚 · 四川 · 温泉 · 全年',
    '5 nights · Jiangsu · Garden Cities · Mar – Jun': '5晚 · 江苏 · 园林城市 · 3月至6月',
    '9 nights · Yunnan · Tea Forests · Oct – Mar': '9晚 · 云南 · 茶山森林 · 10月至3月',
    'Sept – Nov': '9月至11月',
    'Year-round': '全年',
    'Apr – Oct': '4月至10月',
    'Mar – Jun': '3月至6月',
    'Oct – Mar': '10月至3月',
    'Max 8 guests': '最多8位客人',
    'Max 6 guests': '最多6位客人',
    'JCI hospital': 'JCI 医院',
    'Private': '私人定制',
    'Small group': '小团',
    'Day 01': '第01天',
    'Day 02': '第02天',
    'Day 03': '第03天',
    'Day 04': '第04天',
    'Day 05': '第05天',
    'Day 06': '第06天',
    'Day 07': '第07天',
    'Day 08': '第08天',
    'Day 09': '第09天',
    'West Lake Restoration': '西湖疗愈修复',
    'A TCM Sanctuary Week': '中医康养一周',
    'Shanghai Executive': '上海高端体检',
    'Health Programme': '健康管理计划',
    'Mist & Pine': '松云之间',
    'Huangshan Cultural Trek': '黄山文化徒步',
    'Emei Hot-Spring &': '峨眉温泉与',
    'Buddhist Retreat': '禅修静养',
    'Suzhou Gardens &': '苏州园林与',
    'Silk Heritage Tour': '丝绸文化之旅',
    'Ancient Tea Horse Road': '古茶马道',
    'Lifestyle Reset': '生活方式重启',
    'Daily TCM Consultation': '每日中医问诊',
    'Acupuncture & Herbal Therapy': '针灸与草本调理',
    'Full Diagnostic Day': '完整体检日',
    'Full Body MRI Scan': '全身 MRI 筛查',
    'Cardiac & Oncology Panel': '心脏与肿瘤筛查',
    'English Medical Report': '英文医疗报告',
    'Sunrise Cloud Sea Viewing': '日出云海观景',
    'Tang-Dynasty Temple Stay': '唐风山寺住宿',
    'Local Tea Ceremony': '地方茶礼体验',
    'Mineral Hot-Spring Therapy': '矿物温泉疗法',
    'Monastery Meditation': '寺院冥想',
    'Vegetarian Wellness Cuisine': '素食康养餐',
    'Ming-Dynasty Garden Tours': '明式园林导览',
    'Silk Workshop Experience': '丝绸工坊体验',
    'Pingjiang Canal Walk': '平江运河漫步',
    'Ancient Tea Tree Forest': '古茶树森林',
    'Naxi Cultural Immersion': '纳西文化体验',
    'Lifestyle & Sleep Reset': '生活与睡眠重启',
    'Starting from': '起价',
    '/ person': ' / 人',
    'View Details →': '查看详情 →',
    '4 nights · From $3,150': '4晚 · 起价 $3,150',
    '5 nights · From $3,420': '5晚 · 起价 $3,420',
    '5 nights · From $4,920': '5晚 · 起价 $4,920',
    '6 nights · From $3,690': '6晚 · 起价 $3,690',
    '7 nights · From $4,280': '7晚 · 起价 $4,280',
    '9 nights · From $6,180': '9晚 · 起价 $6,180',

    '— Verified Partners': '— 认证合作伙伴',
    'Every journey is held to international standards.': '每一段旅程，都遵循国际标准。',
    'JCI Accredited': 'JCI 认证',
    'Joint Commission Intl.': '国际医疗质量认证',
    'Class III · Tier A': '三甲医院',
    'CNATCM Licensed': '中医药管理认证',
    'Chinese Medicine Board': '中医执业资质',
    'AAAAA Travel': 'AAAAA 旅行资源',
    'National Top-Rated': '国家级优质资源',
    'All medical, wellness and travel partners verified annually.': '所有医疗、康养与旅行合作伙伴均每年复核。',
    'View accreditation documents →': '查看资质文件 →',

    '— Real Voices': '— 真实客声',
    'Stories from guests who came for healing, and stayed for the landscape.': '他们为疗愈而来，也为山水停留。',
    'Margaret K.': 'Margaret K.',
    'Toronto': '多伦多',
    'West Lake Sanctuary · 7 nights · 2025': '西湖康养 · 7晚 · 2025',
    '"I came for a check-up. I left with a practice I still keep every morning."': '“我原本只是来体检，离开时却带走了一套每天清晨仍在坚持的练习。”',
    'From cardiac screening on day one to learning Tai Chi by the lake on day five — Margaret shares how the rhythm of the week reshaped her relationship with rest.': '从第一天的心脏筛查，到第五天在湖边学习太极，Margaret 讲述了这一周如何重新塑造她与休息的关系。',
    'Hendrik & Eva': 'Hendrik 与 Eva',
    'Berlin': '柏林',
    'Huangshan Trek · 6 nights · 2025': '黄山徒步 · 6晚 · 2025',
    '"It felt curated, but never staged."': '“它被精心安排，却从不显得刻意。”',
    'Hendrik and Eva travelled the Mist & Pine route in late spring — a small-group trek that turned out to be exactly their pace.': 'Hendrik 与 Eva 在晚春参加了“松云之间”路线，这段小团徒步刚好符合他们喜欢的节奏。',
    'Dr. James A. Whitford': 'James A. Whitford 医生',
    'Boston': '波士顿',
    'West Lake Sanctuary · Repeat guest since 2022': '西湖康养 · 2022年起复访客人',
    '"The quiet moments stayed with me most."': '“真正留在我心里的，是那些安静的片刻。”',
    'The medical care was world-class, but the small moments — the herbalist explaining each leaf, the silent breakfast by the lotus pond — those stay with me most.': '医疗服务当然是一流水准，但真正留在我心里的，是那些细小片刻：草药师解释每一片叶子的来处，清晨在荷塘边安静地吃早餐。',
    'Dr. James A. Whitford · Retired cardiologist · Boston · Repeat guest since 2022': 'James A. Whitford 医生 · 退休心脏科医师 · 波士顿 · 2022年起复访客人',

    '— Why Jade Voyage': '— 为什么选择玉行',
    'Built on fifteen years of careful relationships.': '建立在十五年的细致关系之上。',
    'One concierge, end to end.': '一位顾问，全程负责。',
    'From your first inquiry to your return flight, a single bilingual concierge accompanies your file — no handoffs, no relayed questions.': '从首次咨询到返程航班，同一位双语顾问全程跟进你的档案，避免交接、转述和信息遗漏。',
    'Hospital-grade, hospitality-led.': '医疗级标准，酒店式服务。',
    'We partner only with JCI-accredited hospitals and Class III Tier-A facilities, paired with five-star recovery accommodations.': '我们只与 JCI 认证医院和三甲机构合作，并搭配五星级康复住宿。',
    'Quietly luxurious, never loud.': '安静奢华，不喧哗。',
    'Boutique hotels, small groups (under 8 guests), and itineraries that respect the slowness Chinese landscape was designed for.': '精品酒店、8人以内小团，以及尊重中国山水慢节奏的行程安排。',
    'Honest about outcomes.': '如实说明结果。',
    'We share medical and wellness results plainly. No promises of cures — only credentialed care and verifiable practitioners.': '我们清楚说明医疗和康养结果。不承诺“治愈”，只提供有资质、可验证的照护与从业者。',
    '15+ Years': '15年以上',
    'Of attentive concierge service across China': '在中国提供细致顾问服务',

    '— How It Works': '— 服务流程',
    'Four quiet steps. No paperwork stress.': '四个清晰步骤，免去文书压力。',
    'Share Your Wishes': '告诉我们你的需求',
    'A short form or a 30-minute video call — tell us about your health goals, travel rhythm, and dates.': '通过简短表单或30分钟视频通话，告诉我们你的健康目标、旅行节奏与日期。',
    'Receive Your Plan': '收到专属方案',
    'Within 48 hours we send a tailored proposal — itinerary, hospitals, clinicians, accommodations, transparent pricing.': '48小时内发送定制方案，包含行程、医院、医生、住宿与透明报价。',
    'Travel Without Worry': '安心出行',
    'Visa support, English-speaking drivers, in-trip concierge on WhatsApp, 24-hour medical hotline.': '签证协助、英文司机、WhatsApp 行程顾问与24小时医疗热线全程支持。',
    'Continue at Home': '回家后继续跟进',
    'Post-trip follow-up: medical reports translated, TCM prescriptions explained, optional telehealth check-ins.': '行程后续跟进：医疗报告翻译、中医处方说明，以及可选远程复诊。',

    'Your journey begins with': '你的旅程始于',
    'a single conversation.': '一次真诚对话。',
    'Reach a real concierge — not a chatbot. We respond in English, German, French or Mandarin, typically within four hours.': '你联系到的是真实顾问，而不是聊天机器人。我们通常会在4小时内用英语、德语、法语或中文回复。',
    'Request a Custom Proposal →': '申请定制方案 →',
    '— OR WHATSAPP +86 (0) 138-0000-0000 · HELLO@JADEVOYAGE.COM —': '— 或通过 WhatsApp +86 (0) 138-0000-0000 · HELLO@JADEVOYAGE.COM 联系 —',

    'Journeys': '旅程',
    'Small Group Tours': '小团行程',
    'Private Custom Tours': '私人定制',
    'Health Check-ups': '健康体检',
    'All Itineraries': '全部行程',
    'Trust': '信任保障',
    'Accredited Hospitals': '认证医院',
    'Wellness Clinics': '康养机构',
    'Travel Partners': '旅行伙伴',
    'Privacy Policy': '隐私政策',
    'Refund Policy': '退款政策',
    'Company': '公司',
    'Why Choose Us': '为什么选择我们',
    'Our Team': '我们的团队',
    'Real Stories': '真实故事',
    'Press': '媒体',
    'Where ancient healing meets modern care — across the heart of China.': '让古老疗愈与现代照护，在中国腹地相遇。',
    '© 2026 Jade Voyage Ltd. · All rights reserved.': '© 2026 Jade Voyage Ltd. · 保留所有权利。',
    'SECURE PAYMENTS': '安全支付',

    'Chat with a Concierge': '联系专属顾问',
    'Open contact options': '打开联系方式',
    'Contact options': '联系方式',
    'Speak with us': '与我们沟通',
    'A real concierge replies — usually within 4 hours.': '真实顾问回复，通常4小时内响应。',
    'Close contact panel': '关闭联系方式面板',
    'Copy': '复制',
    'Copied': '已复制',
    'Copy WhatsApp number': '复制 WhatsApp 号码',
    'Copy email': '复制邮箱',
    'Or visit our offices': '也可联系我们的办公室',
    'West Lake · Headquarters': '西湖 · 总部',
    'Jing\'an · Medical liaison': '静安 · 医疗联络',
    'Jinjiang · Cultural team': '锦江 · 文化团队',
    'Send a detailed inquiry →': '发送详细咨询 →',
    'English · German · French · 中文 · Beijing hours UTC+8': '英语 · 德语 · 法语 · 中文 · 北京时间 UTC+8',

    'Signature Itineraries': '经典行程',
    'Routes shaped by fifteen years of careful relationships.': '由十五年深度关系打磨出的路线。',
    'Every itinerary is curated by a bilingual concierge. Filter by category, or speak with us about a fully bespoke route.': '每条路线均由双语顾问策划。你可以按类别筛选，也可以直接咨询全定制路线。',
    'Category': '类别',
    'curated journeys · sorted by guest rating': '条精选路线 · 按客人评分排序',
    '— Can\'t find your route?': '— 没找到理想路线？',
    'We design bespoke itineraries for every guest.': '我们为每位客人设计专属路线。',
    'Tell us your dates, your interests, and any medical or wellness goals — we\'ll send a private proposal within 48 hours.': '告诉我们你的日期、兴趣，以及任何医疗或康养目标，我们将在48小时内发送私人方案。',

    '— Overview': '— 概览',
    '— Day-By-Day': '— 每日安排',
    'A rhythm, not a schedule.': '这是一种节奏，而非排满的日程。',
    '— Inclusions': '— 已包含',
    'What\'s included.': '费用包含。',
    '— Not included': '— 未包含',
    'What\'s separate.': '需另行支付。',
    'From': '起价',
    'per person · twin share': '每人 · 双人入住',
    'Nights': '晚数',
    'Group': '团型',
    'Season': '季节',
    'Rating': '评分',
    'Request This Itinerary →': '咨询此行程 →',
    'Pay Deposit with PayPal →': '通过 PayPal 支付定金 →',
    'Ask the Concierge a Question': '向顾问提问',
    'No deposit required to enquire. Custom adjustments welcome.': '咨询无需支付定金，欢迎提出个性化调整。',
    '— You May Also Like': '— 你可能也喜欢',
    'Three more routes our guests return for.': '另外三条客人常常再选的路线。',
    'Bilingual concierge accompaniment throughout the journey': '全程双语顾问陪同与协调',
    'Boutique five-star or heritage accommodation': '精品五星或历史风格住宿',
    'All in-trip transfers in private vehicles': '行程内全程私人车辆接送',
    'Daily breakfast + curated regional dining experiences': '每日早餐与精选地方餐饮体验',
    'Entrance fees to all heritage and partner sites': '所有文化遗址与合作场所门票',
    'Medical / TCM consultations as per category': '按类别包含医疗或中医问诊',
    '24-hour medical hotline during your stay': '入住期间24小时医疗热线',
    'International flights (we can arrange on request)': '国际航班（可按需协助预订）',
    'Personal travel insurance (mandatory; partner referral available)': '个人旅行保险（必须购买，可推荐合作渠道）',
    'Visa application fees (we provide invitation letters)': '签证申请费用（我们可提供邀请函）',
    'Gratuities and personal shopping': '小费与个人购物',
    'Optional add-on experiences priced separately': '可选增值体验另行报价',

    'Arrival & private transfer · welcome tea ceremony · light evening consultation with your concierge.': '抵达与私人接送 · 欢迎茶礼 · 晚间轻量顾问沟通。',
    'Morning TCM diagnostic with a licensed physician · personal herbal formulation · lakeside walk.': '上午由持证中医师问诊 · 个性化草本调理 · 湖畔漫步。',
    'Acupuncture session · guided Tai Chi at dawn · vegetarian cuisine workshop.': '针灸疗程 · 清晨太极引导 · 素食康养工作坊。',
    'Hot-spring half-day · meridian massage · afternoon at leisure in the garden pavilion.': '半日温泉 · 经络按摩 · 下午在园林亭阁自由休息。',
    'Optional day-trip to a tea-mountain retreat · calligraphy or Guqin class on return.': '可选茶山一日静修 · 返回后书法或古琴课程。',
    'Final consultation · take-home prescriptions translated · farewell dinner.': '最终问诊 · 居家处方翻译 · 告别晚餐。',
    'Private transfer to airport · post-trip telehealth booked if requested.': '私人送机 · 如需可预约行程后远程复诊。',
    'Arrival & airport meet-and-greet · check into JCI-accredited recovery hotel · light dinner.': '抵达与机场迎接 · 入住 JCI 合作康复酒店 · 简餐休息。',
    'Full pre-screening intake · bloodwork · ECG · imaging at the partner hospital.': '完整筛查前评估 · 血液检查 · 心电图 · 合作医院影像检查。',
    'Specialist consultations · results review · English-language report assembled.': '专科问诊 · 结果解读 · 整理英文医疗报告。',
    'Post-screening rest day · gentle excursion or in-house spa · concierge debrief.': '筛查后休息日 · 轻松外出或酒店水疗 · 顾问复盘。',
    'Arrival · evening orientation walk · cultural curator briefing.': '抵达 · 傍晚熟悉环境步行 · 文化策展人说明。',
    'Early sunrise expedition · heritage site tour · regional cuisine dinner.': '清晨日出行程 · 遗产地导览 · 地方风味晚餐。',
    'Crafts workshop · meet local artisan · afternoon hiking with bilingual guide.': '手作工坊 · 拜访当地匠人 · 下午双语向导徒步。',
    'Off-the-grid village stay · twilight meditation by ancient pine.': '远离喧嚣的村落住宿 · 古松旁暮色冥想。',
    'Museum & private gallery access · curator-led conversation.': '博物馆与私人展馆参访 · 策展人深度交流。',
    'Slow morning · optional photography session · seasonal banquet.': '慢节奏清晨 · 可选摄影体验 · 季节宴席。',
    'Final reflection walk · transfer to next leg or airport.': '最终回顾漫步 · 转往下一站或机场。',
    'Arrival in private vehicle · meeting with route designer · welcome banquet.': '私人车辆抵达 · 与路线设计师会面 · 欢迎宴。',
    'Tea Horse Road segment · ancient post-station stay · regional cuisine.': '茶马古道段落 · 古驿站住宿 · 地方餐饮。',
    'Forest soak & herbalist consultation · slow afternoon among Pu-erh terraces.': '森林疗愈与草药师问诊 · 在普洱梯田间慢度下午。',
    'Optional Naxi music evening or sound-bath practice in a temple courtyard.': '可选纳西古乐夜晚或寺院声疗练习。',
    'Day-trek with mule porters · highland picnic · stargazing camp.': '骡队协助一日徒步 · 高地野餐 · 星空营地。',
    'Crafts village stay · indigo dye / silver work workshop.': '手作村落住宿 · 蓝染或银器工坊。',
    'Concluding wellness review · TCM prescription written for home practice.': '最终康养复盘 · 形成可带回家的中医生活处方。',
    'Buffer day for weather-dependent itinerary adjustments.': '预留机动日，应对天气相关调整。',
    'Private transfer · debrief & lifestyle continuation plan delivered.': '私人送达 · 行程复盘与生活方式延续计划交付。',

    'About Jade Voyage': '关于玉行',
    'A small team. Fifteen years of careful relationships.': '一个小团队，十五年深耕关系。',
    'Jade Voyage is held by a tight group of medical, wellness and travel curators based in Hangzhou, Shanghai and Chengdu. We design and accompany every itinerary ourselves.': '玉行由一支分布在杭州、上海和成都的医疗、康养与旅行策展团队共同运营。每条路线都由我们亲自设计并陪同落地。',
    '— Our Story': '— 我们的故事',
    'It started with a single phone call.': '一切始于一通电话。',
    'In 2011 our founder, Lin Yuwen, took a call from a family friend visiting Hangzhou — they needed a cardiac screening with English-language reporting and a quiet place to recover. What should have been straightforward took three weeks of phone calls, translations and apologies.': '2011年，创始人林语雯接到一位来杭州探亲的朋友电话：对方需要一次心脏筛查、英文报告，以及一个安静恢复的地方。原本应该很简单的事，却花了三周时间反复打电话、翻译和解释。',
    'That experience became Jade Voyage. We are now a team of fourteen — physicians, TCM practitioners, cultural curators and a small group of bilingual concierges — and our singular promise has not changed: a guest should arrive carrying nothing but their suitcase. Every detail is held.': '那次经历后来成为了玉行。如今我们有14位成员，包括医生、中医师、文化策展人和一小组双语顾问。我们的承诺始终未变：客人只需带着行李抵达，其他细节由我们托住。',
    'We remain deliberately small. We accept no more than thirty bookings a month, turn away high volume corporate referrals, and re-verify every hospital and clinic partnership annually. Our reputation is the only thing we cannot replace.': '我们刻意保持小规模。每月接待不超过30组客人，拒绝高流量企业转介，并每年重新核验医院与诊所合作关系。声誉是我们唯一无法替代的资产。',
    '— Four Principles': '— 四项原则',
    'What we will, and will not, do.': '我们会做什么，也不会做什么。',
    'Slowness is luxury.': '慢，就是奢华。',
    'We never overschedule. White space on the itinerary is intentional — it is where the journey actually happens.': '我们不会把行程排满。留白是刻意设计的，因为真正的旅程往往发生在留白里。',
    'Credentials, not claims.': '看资质，不靠口号。',
    'Every hospital, clinic and practitioner we work with holds national or international accreditation we can show you on request.': '我们合作的每家医院、诊所和从业者都具备国家或国际资质，并可按需出示。',
    'A single phone number.': '一个联系电话。',
    'One concierge from inquiry to return flight. No call-centre, no relayed messages, no surprises.': '从咨询到返程，同一位顾问负责。没有呼叫中心，没有层层转述，也没有意外。',
    'Honesty about outcomes.': '如实说明结果。',
    'We share results plainly. We will not promise cures — only credentialed care and verifiable practitioners.': '我们会清楚说明结果。不会承诺“治愈”，只提供有资质的照护与可验证的从业者。',
    '— Our Team': '— 我们的团队',
    'The people who actually answer your messages.': '真正回复你消息的人。',
    'Founder & Chief Concierge': '创始人兼首席顾问',
    'Medical Director': '医疗总监',
    'TCM & Wellness Curator': '中医与康养策展人',
    'European Liaison': '欧洲客户联络',
    'Fifteen years between hospital administration in Shanghai and bespoke travel design in Hangzhou. Lin started Jade Voyage after her own family\'s search for English-language medical care turned into a study of every accredited centre in eastern China.': '曾在上海医院管理与杭州定制旅行领域工作十五年。林语雯在为家人寻找英文医疗服务的过程中，系统研究了华东地区各类认证医疗中心，由此创办玉行。',
    'Internal medicine specialist with twenty years at a JCI-accredited tertiary hospital. Dr. Chen oversees every hospital partnership and reviews each guest\'s diagnostic plan before arrival.': '内科专家，曾在 JCI 认证三甲医院工作二十年。陈医生负责审核所有医院合作，并在客人抵达前审阅每份体检计划。',
    'CNATCM-licensed practitioner trained at the Zhejiang Academy of TCM. Designs every wellness retreat — from herbal compounding to morning Tai Chi rhythms — and personally meets guests on Wellness routes.': '中医药管理认证执业者，受训于浙江中医药体系。负责设计每条康养路线，从草本调理到清晨太极节奏，并亲自接待康养客人。',
    'Former luxury travel editor based in London. Sarah is the first voice many guests hear — speaking English, German and French, with a gift for translating wishes into concrete day-by-day plans.': '曾任伦敦奢华旅行编辑。Sarah 往往是客人听到的第一位顾问声音，能够用英语、德语和法语，把模糊愿望转化为可执行的每日计划。',

    'Speak with a Concierge': '联系专属顾问',
    'Your journey begins with a single conversation.': '你的旅程，始于一次真诚对话。',
    'Tell us what you have in mind — a date range, a health goal, or simply a region you have been curious about. We reply with a tailored proposal within forty-eight hours.': '告诉我们你的初步想法：日期范围、健康目标，或只是一个你一直好奇的地区。我们会在48小时内回复定制方案。',
    '— Inquiry Form': '— 咨询表单',
    'Send us your wishes.': '把你的需求告诉我们。',
    'Full name *': '姓名 *',
    'Email *': '邮箱 *',
    'Country': '国家/地区',
    'WhatsApp / phone': 'WhatsApp / 电话',
    'Interest *': '兴趣方向 *',
    'Select a category': '请选择类别',
    'Medical · Health Check-up': '医疗 · 健康体检',
    'Wellness · TCM Retreat': '康养 · 中医疗程',
    'Cultural Itinerary': '文化旅程',
    'Not sure yet — please advise': '暂不确定，请给我建议',
    'Preferred dates': '意向日期',
    'Travelling party': '出行人数',
    'Tell us more': '更多说明',
    'e.g. Oct 2026 · 7-10 nights': '例如：2026年10月 · 7-10晚',
    'e.g. couple, family of 4, solo': '例如：夫妻、四口之家、单人',
    'Goals, must-haves, any health considerations we should know about, languages preferred…': '请写下你的目标、必要条件、需要我们了解的健康情况、偏好语言等…',
    'I agree that Jade Voyage may contact me about my inquiry. We will never share your details.': '我同意玉行为本次咨询联系我。我们不会向第三方分享你的信息。',
    'Send Inquiry →': '提交咨询 →',
    'Or email us directly at': '也可以直接发送邮件至',
    '— Direct Lines': '— 直接联系方式',
    'Reach us, however you prefer.': '用你习惯的方式联系我们。',
    'Live Chat': '在线聊天',
    'Open chat widget →': '打开聊天窗口 →',
    'Response time': '响应时间',
    'Within 4 hours · Beijing hours': '4小时内 · 北京时间',
    '— Our Offices': '— 办公地点',
    'Three quiet bases.': '三个安静据点。',
    '— Frequently Asked': '— 常见问题',
    'What guests usually ask first.': '客人最常先问的问题。',
    'How quickly will I receive a response?': '我多久会收到回复？',
    'Typically within four hours during Beijing business hours (UTC+8), and within twenty-four hours otherwise. Every initial inquiry is answered by a real concierge, not a chatbot.': '北京时间工作时段通常4小时内回复，其他时段一般24小时内回复。每一条初次咨询都由真实顾问回复，而不是聊天机器人。',
    'Do I need to pay a deposit to enquire?': '咨询需要先付定金吗？',
    'No. The first proposal — including suggested hospitals, accommodations and a transparent quote — is delivered without any deposit. A 20% deposit only secures the booking once you have approved the plan.': '不需要。第一版方案，包括推荐医院、住宿和透明报价，均无需定金。只有当你确认方案后，20%定金才用于锁定预订。',
    'Which languages do you work in?': '你们支持哪些语言？',
    'English, German, French and Mandarin. We can also arrange interpretation for Spanish, Italian and Russian on request.': '英语、德语、法语和中文。也可按需安排西班牙语、意大利语和俄语口译。',
    'Are the medical reports translated?': '医疗报告会翻译吗？',
    'Yes. All diagnostic reports are issued in English (or your preferred language) and reviewed by our medical director before being shared.': '会。所有诊断报告均可提供英文或你偏好的语言版本，并在发送前由我们的医疗总监复核。',
    'How do you handle medical privacy?': '你们如何处理医疗隐私？',
    'We are GDPR-aligned and partner only with hospitals that meet Chinese national health-data regulations. No personal data is shared with third parties without your written consent.': '我们的流程对齐 GDPR，并只与符合中国国家健康数据规范的医院合作。未经你书面同意，不会向第三方共享个人数据。',
    'Can you adjust an itinerary for accessibility needs?': '可以根据无障碍需求调整行程吗？',
    'Yes. We have designed itineraries for guests with mobility aids, dietary restrictions and ongoing medical conditions. Please share your requirements with your concierge.': '可以。我们曾为使用助行设备、有饮食限制或持续医疗状况的客人设计行程。请把需求告诉你的顾问。',

    'Verified Partners': '认证伙伴',
    'Every route is held to international standards.': '每一条路线都遵循国际标准。',
    'We partner only with institutions that meet international accreditation or top national tier — and we re-verify every relationship annually.': '我们只与符合国际认证或国家顶级标准的机构合作，并每年重新核验每段合作关系。',
    'JCI-Accredited Hospitals': 'JCI 认证医院',
    'Class III Tier-A Facilities': '三甲医疗机构',
    'CNATCM-Licensed Clinics': '中医药管理认证机构',
    'Annually Re-Verified': '每年重新核验',
    'Accredited Medical Centres': '认证医疗中心',
    'Professional Wellness Clinics': '专业康养机构',
    'Top-Rated Travel Partners': '高口碑旅行伙伴',
    'Diagnostic precision, English-language care.': '精准诊断，英文照护。',
    'Practitioners with national licensure.': '具备国家资质的从业者。',
    'Operators that respect the slowness of the route.': '尊重路线慢节奏的旅行执行方。',
    'Executive screening · cardiac & oncological diagnostics': '高端体检 · 心脏与肿瘤筛查',
    'Bilingual specialists · post-screening rehabilitation': '双语专家 · 筛查后康复',
    'High-resolution imaging · sleep medicine': '高清影像 · 睡眠医学',
    'Concierge medicine · second-opinion programmes': '礼宾医疗 · 第二诊疗意见',
    'Acupuncture · herbal compounding · meditation': '针灸 · 草本调理 · 冥想',
    'Hot-spring therapy · Buddhist breathwork': '温泉疗法 · 禅修呼吸',
    'Herbalist consultation · forest soaking': '草药师问诊 · 森林疗愈',
    'Tai Chi master sessions · Daoist nutrition': '太极师课程 · 道家食养',
    'Small-group cultural escorts · museum access': '小团文化陪同 · 博物馆通道',
    'Private garden curators · craft-village circuits': '私人园林策展 · 工艺村路线',
    'Tea Horse Road expeditions · ethnographic guides': '茶马古道探行 · 民族志向导',
    'Imperial site access · master craftsperson visits': '皇家遗址通道 · 匠人大师拜访',
    'Looking for a specific accreditation document or certification?': '想查看某项具体资质或认证文件？',
    'Detailed privacy & data-handling practices are available in our': '详细隐私与数据处理说明可见于我们的',

    'Secure Payment': '安全支付',
    'Confirm your booking with PayPal.': '通过 PayPal 确认预订。',
    '— Order Summary': '— 订单摘要',
    'Region': '地区',
    'Length': '时长',
    'Total per person': '每人总价',
    'Before you pay': '支付前请确认',
    'This is a per-person reservation amount. Multi-guest bookings are confirmed via concierge once a deposit is received.': '这是按每人计算的预订金额。多人预订会在收到定金后由顾问确认。',
    'All amounts are charged in USD. PayPal converts from your home currency at checkout.': '所有金额均以美元计价。PayPal 会在结账时按你的本地货币换算。',
    'You will receive an email receipt and a concierge follow-up within four hours.': '你将收到邮件收据，顾问会在4小时内跟进。',
    'By paying you agree to the cancellation and refund policy linked at each tier below.': '完成支付即表示你同意下方对应档位的取消与退款政策。',
    '— Choose a Tier': '— 选择支付档位',
    'How much would you like to pay today?': '今天希望支付多少？',
    'Reserve': '预留',
    'Half pay': '支付一半',
    'Pay in full': '全额支付',
    'Refundable up to 30 days before arrival': '抵达前30天可退款',
    'Refundable up to 14 days before arrival': '抵达前14天可退款',
    'Refundable up to 7 days before arrival': '抵达前7天可退款',
    'Holds your dates while we finalise the full proposal.': '在我们完善完整方案期间为你保留日期。',
    'Most guests choose this — confirms hotels and partner bookings.': '多数客人选择此档，用于确认酒店与合作方预订。',
    'Locks every line of the itinerary at today\'s exchange rate.': '按当前汇率锁定行程中的每一项安排。',
    'Sandbox demo mode.': '沙盒演示模式。',
    'Replace site.paypal.clientId in src/data/site.ts with your PayPal Developer Sandbox Client ID to enable a real test checkout.': '请将 src/data/site.ts 中的 site.paypal.clientId 替换为 PayPal Developer Sandbox Client ID，以启用真实测试结账。',
    'PayPal could not be loaded — please try again or use one of the alternatives below.': 'PayPal 暂时无法加载，请重试或使用下方其他联系方式。',
    'Contact us to pay another way': '联系我们使用其他支付方式',
    'Secured by PayPal · Buyer protection · No PayPal account required': 'PayPal 安全保障 · 买家保护 · 无需 PayPal 账户',
    'Thank you,': '谢谢你，',
    'guest': '客人',
    'Your deposit has been received. A concierge will email you within four hours to confirm the next steps.': '你的定金已收到。顾问将在4小时内通过邮件确认下一步。',
    'Order reference:': '订单编号：'
  };

  const html = {
    'Healing JourneysAcross Ancient China.': '疗愈之旅<br>穿行<em>古老中国</em>。',
    'Your journey begins with a single conversation.': '你的旅程，<em>始于一次真诚对话。</em>',
    'West Lake Restoration — A TCM Sanctuary Week': '西湖疗愈修复 — 中医康养一周',
    'Shanghai Executive — Health Programme': '上海高端体检 — 健康管理计划',
    'Mist & Pine — Huangshan Cultural Trek': '松云之间 — 黄山文化徒步',
    'Emei Hot-Spring & — Buddhist Retreat': '峨眉温泉 — 禅修静养',
    'Suzhou Gardens & — Silk Heritage Tour': '苏州园林 — 丝绸文化之旅',
    'Ancient Tea Horse Road — Lifestyle Reset': '古茶马道 — 生活方式重启',
    'A 7-night curated journey through Hangzhou, designed for guests seeking restorative rhythms grounded in Traditional Chinese Medicine. Each day balances meaningful experience with generous rest — your concierge holds every detail so you simply arrive.': '这是一段7晚杭州康养旅程，为希望以中医节奏恢复身心的客人设计。每天都在有意义的体验与充足休息之间取得平衡，所有细节由顾问托住，你只需抵达。',
    'A 4-night curated journey through Shanghai, designed for guests seeking precise diagnostics paired with quiet recovery. Each day balances meaningful experience with generous rest — your concierge holds every detail so you simply arrive.': '这是一段4晚上海医疗旅程，为需要精准体检并安静恢复的客人设计。每天都兼顾高效诊断与舒适休息，所有细节由顾问托住，你只需抵达。',
    'A 6-night curated journey through Anhui, designed for guests seeking unhurried immersion in heritage landscapes and crafts. Each day balances meaningful experience with generous rest — your concierge holds every detail so you simply arrive.': '这是一段6晚安徽文化旅程，为希望慢慢进入遗产山水与地方工艺的客人设计。每天都兼顾深度体验与充足休息，所有细节由顾问托住，你只需抵达。',
    'A 5-night curated journey through Sichuan, designed for guests seeking restorative rhythms grounded in Traditional Chinese Medicine. Each day balances meaningful experience with generous rest — your concierge holds every detail so you simply arrive.': '这是一段5晚四川康养旅程，为希望在中医节奏中恢复身心的客人设计。每天都兼顾疗愈体验与充足休息，所有细节由顾问托住，你只需抵达。',
    'A 5-night curated journey through Jiangsu, designed for guests seeking unhurried immersion in heritage landscapes and crafts. Each day balances meaningful experience with generous rest — your concierge holds every detail so you simply arrive.': '这是一段5晚江苏文化旅程，为希望从容进入园林、丝绸与地方工艺的客人设计。每天都兼顾深度体验与充足休息，所有细节由顾问托住，你只需抵达。',
    'A 9-night curated journey through Yunnan, designed for guests seeking a fully private, slow-paced reset shaped to your life. Each day balances meaningful experience with generous rest — your concierge holds every detail so you simply arrive.': '这是一段9晚云南私人定制旅程，为希望用慢节奏重启生活方式的客人设计。每天都兼顾真实体验与充足休息，所有细节由顾问托住，你只需抵达。',
    'You are reserving the West Lake Restoration — A TCM Sanctuary Week itinerary (7 nights · Hangzhou · Wellness). Choose a deposit tier on the right.': '你正在预订“西湖疗愈修复 — 中医康养一周”（7晚 · 杭州 · 康养）。请在右侧选择今日支付的定金档位。',
    'You are reserving the Shanghai Executive — Health Programme itinerary (4 nights · Shanghai · Medical). Choose a deposit tier on the right.': '你正在预订“上海高端体检 — 健康管理计划”（4晚 · 上海 · 医疗）。请在右侧选择今日支付的定金档位。',
    'You are reserving the Mist & Pine — Huangshan Cultural Trek itinerary (6 nights · Anhui · Heritage). Choose a deposit tier on the right.': '你正在预订“松云之间 — 黄山文化徒步”（6晚 · 安徽 · 人文）。请在右侧选择今日支付的定金档位。',
    'You are reserving the Emei Hot-Spring & — Buddhist Retreat itinerary (5 nights · Sichuan · Hot Springs). Choose a deposit tier on the right.': '你正在预订“峨眉温泉 — 禅修静养”（5晚 · 四川 · 温泉）。请在右侧选择今日支付的定金档位。',
    'You are reserving the Suzhou Gardens & — Silk Heritage Tour itinerary (5 nights · Jiangsu · Garden Cities). Choose a deposit tier on the right.': '你正在预订“苏州园林 — 丝绸文化之旅”（5晚 · 江苏 · 园林城市）。请在右侧选择今日支付的定金档位。',
    'You are reserving the Ancient Tea Horse Road — Lifestyle Reset itinerary (9 nights · Yunnan · Tea Forests). Choose a deposit tier on the right.': '你正在预订“古茶马道 — 生活方式重启”（9晚 · 云南 · 茶山森林）。请在右侧选择今日支付的定金档位。'
  };

  const attrNames = ['placeholder', 'aria-label', 'title'];
  const originalText = new WeakMap();

  function normalize(value) {
    return String(value || '').replace(/\s+/g, ' ').trim();
  }

  function withSameSpace(source, replacement) {
    const leading = source.match(/^\s*/)?.[0] || '';
    const trailing = source.match(/\s*$/)?.[0] || '';
    return leading + replacement + trailing;
  }

  function currentLang() {
    return localStorage.getItem(KEY) === CN ? CN : EN;
  }

  function syncToggle(lang) {
    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      const en = btn.querySelector('[data-lang-en]');
      const cn = btn.querySelector('[data-lang-cn]');
      en?.classList.toggle('on', lang === EN);
      cn?.classList.toggle('on', lang === CN);
      btn.setAttribute('aria-pressed', String(lang === CN));
    });
  }

  function restoreHtml() {
    document.querySelectorAll('[data-i18n-original-html]').forEach((el) => {
      el.innerHTML = el.getAttribute('data-i18n-original-html') || '';
      el.removeAttribute('data-i18n-html-active');
    });
  }

  function applyHtml() {
    const selectors = 'h1,h2,h3,h4,h5,h6,p,.page-hero-sub,.lead-copy';
    document.querySelectorAll(selectors).forEach((el) => {
      if (el.closest('script,style,svg,textarea,input,code,pre,[data-i18n-skip]')) return;
      if (el.querySelector('form,input,select,textarea,svg,img')) return;
      const key = el.getAttribute('data-i18n-key') || normalize(el.textContent);
      const cn = html[key];
      if (!cn) return;
      if (!el.hasAttribute('data-i18n-original-html')) {
        el.setAttribute('data-i18n-original-html', el.innerHTML);
      }
      el.innerHTML = cn;
      el.setAttribute('data-i18n-html-active', 'true');
    });
  }

  function translateTextNodes(lang) {
    const walker = document.createTreeWalker(document.body, NodeFilter.SHOW_TEXT, {
      acceptNode(node) {
        const parent = node.parentElement;
        if (!parent) return NodeFilter.FILTER_REJECT;
        if (parent.closest('script,style,svg,textarea,input,code,pre,[data-i18n-skip],[data-i18n-html-active]')) {
          return NodeFilter.FILTER_REJECT;
        }
        if (!normalize(node.nodeValue)) return NodeFilter.FILTER_REJECT;
        return NodeFilter.FILTER_ACCEPT;
      },
    });

    const nodes = [];
    while (walker.nextNode()) nodes.push(walker.currentNode);

    nodes.forEach((node) => {
      if (!originalText.has(node)) originalText.set(node, node.nodeValue || '');
      const source = originalText.get(node) || '';
      if (lang === EN) {
        node.nodeValue = source;
        return;
      }
      const key = normalize(source);
      const cn = text[key];
      if (cn) node.nodeValue = withSameSpace(source, cn);
    });
  }

  function translateAttrs(lang) {
    document.querySelectorAll('*').forEach((el) => {
      attrNames.forEach((name) => {
        if (!el.hasAttribute(name)) return;
        const originalName = 'data-i18n-original-' + name;
        if (!el.hasAttribute(originalName)) el.setAttribute(originalName, el.getAttribute(name) || '');
        const source = el.getAttribute(originalName) || '';
        if (lang === EN) {
          el.setAttribute(name, source);
          return;
        }
        const cn = text[normalize(source)];
        if (cn) el.setAttribute(name, cn);
      });
    });
  }

  function applyLanguage(lang) {
    document.documentElement.setAttribute('data-lang', lang);
    document.documentElement.setAttribute('lang', lang === CN ? 'zh-CN' : 'en');
    if (lang === EN) {
      restoreHtml();
      translateTextNodes(lang);
      translateAttrs(lang);
    } else {
      applyHtml();
      translateTextNodes(lang);
      translateAttrs(lang);
    }
    syncToggle(lang);
    window.dispatchEvent(new CustomEvent('jade-language-change', { detail: { lang } }));
  }

  function bindToggles() {
    document.querySelectorAll('[data-lang-toggle]').forEach((btn) => {
      btn.addEventListener('click', (event) => {
        const target = event.target;
        const current = currentLang();
        const next = target && target.closest && target.closest('[data-lang-cn]')
          ? CN
          : target && target.closest && target.closest('[data-lang-en]')
            ? EN
            : current === EN
              ? CN
              : EN;
        localStorage.setItem(KEY, next);
        applyLanguage(next);
      });
    });
  }

  function init() {
    bindToggles();
    applyLanguage(currentLang());
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    init();
  }
})();
