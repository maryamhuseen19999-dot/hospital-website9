// لا يعتمد تشغيل صفحات المستشفى على تخزين المتصفح؛ لتوافق أفضل مع هواتف Android.

// بيانات الأقسام والأمراض للتوعية العامة. أسماء الأطباء الواردة تجريبية.
const departments = {
  "heart": {
    "name": "القلب",
    "image": "images/medical/inside/heart-inside.jpg",
    "description": "متابعة صحة القلب والأوعية الدموية وضغط الدم واضطرابات النبض.",
    "doctors": [
      "د. أحمد محمود",
      "د. محمد علي",
      "د. كريم حسن"
    ],
    "diseases": [
      {
        "name": "ارتفاع ضغط الدم",
        "image": "images/medical/heart.jpg",
        "overview": "ارتفاع مستمر في ضغط الدم وقد لا يسبب أعراضًا واضحة في البداية.",
        "causes": "قد يرتبط بالوراثة، وكثرة الملح، وقلة النشاط، وبعض الحالات الصحية.",
        "symptoms": "قد لا تظهر أعراض؛ وقد يحدث صداع أو دوخة، ولا يمكن التشخيص بالأعراض وحدها."
      },
      {
        "name": "مرض الشرايين التاجية",
        "image": "images/medical/heart.jpg",
        "overview": "يحدث عندما تضيق الشرايين التي تغذي عضلة القلب.",
        "causes": "قد يرتبط بتراكم الدهون داخل الشرايين والتدخين والسكري وارتفاع الضغط.",
        "symptoms": "قد يظهر كألم أو ضغط بالصدر أو ضيق نفس، ويحتاج ألم الصدر المفاجئ إلى تقييم عاجل."
      }
    ]
  },
  "eyes": {
    "name": "العيون",
    "image": "images/medical/inside/eyes-inside.jpg",
    "description": "فحص النظر ومتابعة صحة العين ومشكلاتها الشائعة.",
    "doctors": [
      "د. سارة إبراهيم",
      "د. منى حسن",
      "د. يوسف عادل"
    ],
    "diseases": [
      {
        "name": "جفاف العين",
        "image": "images/medical/eyes.jpg",
        "overview": "نقص ترطيب سطح العين أو سرعة تبخر الدموع.",
        "causes": "قد ينتج عن الشاشات لفترات طويلة أو الهواء الجاف أو بعض الأدوية.",
        "symptoms": "قد يسبب حرقانًا وإحساسًا بالرمل وتشوشًا متقطعًا في الرؤية."
      },
      {
        "name": "التهاب ملتحمة العين",
        "image": "images/medical/eyes.jpg",
        "overview": "التهاب الغشاء الرقيق الذي يغطي بياض العين والجفن من الداخل.",
        "causes": "قد تسببه عدوى فيروسية أو بكتيرية أو حساسية.",
        "symptoms": "قد يظهر احمرار ودموع أو إفرازات وحكة؛ ويجب فحص ألم العين أو تغير الرؤية."
      }
    ]
  },
  "children": {
    "name": "الأطفال",
    "image": "images/medical/inside/children-inside.jpg",
    "description": "متابعة نمو الأطفال وصحتهم والتطعيمات والأمراض الشائعة.",
    "doctors": [
      "د. هبة أحمد",
      "د. كريم مصطفى",
      "د. ندى سامح"
    ],
    "diseases": [
      {
        "name": "نزلات البرد",
        "image": "images/medical/children.jpg",
        "overview": "عدوى فيروسية شائعة تصيب الأنف والحلق.",
        "causes": "تنتقل غالبًا عبر الرذاذ أو ملامسة الأسطح ثم الوجه.",
        "symptoms": "قد تسبب رشحًا وعطسًا وسعالًا وارتفاعًا بسيطًا في الحرارة."
      },
      {
        "name": "التهاب الأذن الوسطى",
        "image": "images/medical/children.jpg",
        "overview": "التهاب أو تجمع سوائل خلف طبلة الأذن.",
        "causes": "قد يحدث بعد نزلة برد بسبب انسداد قناة استاكيوس، وهو شائع لدى الأطفال.",
        "symptoms": "قد يسبب ألم الأذن والحمى أو ضعف السمع المؤقت."
      }
    ]
  },
  "teeth": {
    "name": "الأسنان",
    "image": "images/medical/inside/teeth-inside.jpg",
    "description": "العناية بالأسنان واللثة والوقاية من مشكلات الفم.",
    "doctors": [
      "د. خالد سمير",
      "د. ندى محمد",
      "د. أحمد فوزي"
    ],
    "diseases": [
      {
        "name": "تسوس الأسنان",
        "image": "images/medical/teeth.jpg",
        "overview": "تلف تدريجي في طبقة السن بسبب الأحماض التي تنتجها البكتيريا.",
        "causes": "يرتبط بتكرار السكريات وعدم تنظيف الأسنان جيدًا.",
        "symptoms": "قد يبدأ ببقع أو حساسية ثم ألم عند تقدم التسوس."
      },
      {
        "name": "التهاب اللثة",
        "image": "images/medical/teeth.jpg",
        "overview": "التهاب الأنسجة المحيطة بالأسنان.",
        "causes": "غالبًا بسبب تراكم طبقة البلاك وعدم تنظيف ما بين الأسنان.",
        "symptoms": "قد يسبب احمرارًا أو تورمًا أو نزيفًا أثناء تنظيف الأسنان."
      }
    ]
  },
  "skin": {
    "name": "الجلدية",
    "image": "images/medical/inside/skin-inside.jpg",
    "description": "تشخيص مشكلات الجلد والشعر والأظافر والحساسية.",
    "doctors": [
      "د. ريم أشرف",
      "د. ياسمين عادل",
      "د. منة الله سمير"
    ],
    "diseases": [
      {
        "name": "حب الشباب",
        "image": "images/medical/skin.jpg",
        "overview": "حالة جلدية تحدث عند انسداد بصيلات الشعر بالدهون وخلايا الجلد.",
        "causes": "قد تتأثر بالهرمونات والوراثة وبعض المنتجات الدهنية.",
        "symptoms": "قد يظهر كرؤوس سوداء أو بيضاء أو حبوب ملتهبة."
      },
      {
        "name": "الإكزيما",
        "image": "images/medical/skin.jpg",
        "overview": "مجموعة حالات تسبب جفاف الجلد والتهابه والحكة.",
        "causes": "ترتبط بعوامل وراثية وحاجز جلدي حساس ومحفزات بيئية.",
        "symptoms": "قد تسبب جفافًا واحمرارًا وحكة؛ وتختلف المحفزات من شخص لآخر."
      }
    ]
  },
  "bones": {
    "name": "العظام",
    "image": "images/medical/inside/bones-inside.jpg",
    "description": "متابعة العظام والمفاصل والعضلات والإصابات.",
    "doctors": [
      "د. محمود حسن",
      "د. عمرو السيد",
      "د. ياسر علي"
    ],
    "diseases": [
      {
        "name": "خشونة المفاصل",
        "image": "images/medical/bones.jpg",
        "overview": "تغير تدريجي في الغضروف والأنسجة المحيطة بالمفصل.",
        "causes": "قد ترتبط بالتقدم في العمر أو إصابة سابقة أو عوامل وراثية.",
        "symptoms": "قد تسبب ألمًا وتيبسًا وصعوبة في الحركة."
      },
      {
        "name": "هشاشة العظام",
        "image": "images/medical/bones.jpg",
        "overview": "انخفاض كثافة العظام مما يجعلها أكثر عرضة للكسور.",
        "causes": "قد ترتبط بالعمر أو نقص بعض العناصر أو عوامل وراثية وأدوية معينة.",
        "symptoms": "غالبًا لا تسبب أعراضًا مبكرة، وقد تُكتشف بعد حدوث كسر."
      }
    ]
  },
  "brain": {
    "name": "المخ والأعصاب",
    "image": "images/medical/inside/brain-inside.jpg",
    "description": "متابعة الصداع والأعصاب والاتزان ووظائف الجهاز العصبي.",
    "doctors": [
      "د. أحمد سامح",
      "د. شريف عادل",
      "د. نهى محمود"
    ],
    "diseases": [
      {
        "name": "الصداع النصفي",
        "image": "images/medical/brain.jpg",
        "overview": "نوع من الصداع قد يتكرر ويؤثر في النشاط اليومي.",
        "causes": "قد تتداخل الوراثة مع محفزات مثل قلة النوم أو التوتر أو بعض الأطعمة.",
        "symptoms": "قد يصاحبه ألم نابض وغثيان وحساسية للضوء أو الصوت."
      },
      {
        "name": "اعتلال الأعصاب الطرفية",
        "image": "images/medical/brain.jpg",
        "overview": "تأثر الأعصاب المسؤولة عن الإحساس أو الحركة في الأطراف.",
        "causes": "قد يرتبط بالسكري أو نقص بعض الفيتامينات أو أسباب أخرى.",
        "symptoms": "قد يسبب تنميلًا أو وخزًا أو ضعفًا ويحتاج لتقييم السبب."
      }
    ]
  },
  "internal": {
    "name": "الباطنة",
    "image": "images/medical/inside/internal-inside.png",
    "description": "متابعة الأمراض العامة والحالات المزمنة وصحة أجهزة الجسم.",
    "doctors": [
      "د. محمد إبراهيم",
      "د. هاني مصطفى",
      "د. آية أحمد"
    ],
    "diseases": [
      {
        "name": "مرض السكري",
        "image": "images/medical/internal.jpg",
        "overview": "ارتفاع مستوى السكر في الدم بسبب مشكلة في إنتاج الإنسولين أو الاستجابة له.",
        "causes": "تختلف الأسباب حسب النوع، وقد تشمل عوامل مناعية أو وراثية أو نمط الحياة.",
        "symptoms": "قد تشمل العطش وكثرة التبول والتعب، وقد لا تظهر أعراض في البداية."
      },
      {
        "name": "فقر الدم",
        "image": "images/medical/internal.jpg",
        "overview": "انخفاض الهيموجلوبين أو عدد خلايا الدم الحمراء عن الطبيعي.",
        "causes": "قد ينتج عن نقص الحديد أو بعض الفيتامينات أو فقدان الدم أو أسباب أخرى.",
        "symptoms": "قد يسبب التعب والشحوب والدوخة وضيق النفس مع المجهود."
      }
    ]
  },
  "women": {
    "name": "النساء والتوليد",
    "image": "images/medical/inside/women-inside.jpg",
    "description": "رعاية صحة المرأة ومتابعة الحمل والصحة الإنجابية.",
    "doctors": [
      "د. منى أحمد",
      "د. سارة محمود",
      "د. إيمان حسن"
    ],
    "diseases": [
      {
        "name": "تكيس المبايض",
        "image": "images/medical/women.jpg",
        "overview": "اضطراب هرموني قد يؤثر في التبويض وانتظام الدورة.",
        "causes": "ترتبط عوامل وراثية ومقاومة الإنسولين بحدوثه لدى بعض الحالات.",
        "symptoms": "قد يسبب عدم انتظام الدورة أو حب الشباب أو زيادة نمو الشعر."
      },
      {
        "name": "فقر الدم أثناء الحمل",
        "image": "images/medical/women.jpg",
        "overview": "انخفاض الهيموجلوبين خلال الحمل، وغالبًا يرتبط بنقص الحديد.",
        "causes": "قد ينتج عن زيادة احتياج الجسم للحديد أو قلة تناوله أو أسباب أخرى.",
        "symptoms": "قد يسبب إرهاقًا ودوخة وشحوبًا، ويُحدد بالفحوصات."
      }
    ]
  },
  "ent": {
    "name": "الأنف والأذن والحنجرة",
    "image": "images/medical/inside/ent-inside.jpg",
    "description": "فحص مشكلات السمع والأنف والجيوب الأنفية والحلق.",
    "doctors": [
      "د. مصطفى علي",
      "د. آية حسن",
      "د. شادي محمود"
    ],
    "diseases": [
      {
        "name": "التهاب الجيوب الأنفية",
        "image": "images/medical/ent.jpg",
        "overview": "التهاب أو تورم في بطانة الجيوب الأنفية.",
        "causes": "قد يحدث بعد عدوى فيروسية أو بسبب الحساسية.",
        "symptoms": "قد يسبب انسداد الأنف وإفرازات وألمًا أو ضغطًا بالوجه."
      },
      {
        "name": "التهاب الأذن الخارجية",
        "image": "images/medical/ent.jpg",
        "overview": "التهاب قناة الأذن الخارجية.",
        "causes": "قد يحدث بسبب الرطوبة أو تهيج الجلد أو عدوى.",
        "symptoms": "قد يسبب ألمًا وحكة وإفرازات أو ألمًا عند لمس الأذن."
      }
    ]
  },
  "chest": {
    "name": "الصدر",
    "image": "images/medical/inside/chest-inside.jpg",
    "description": "متابعة أمراض الرئة والجهاز التنفسي والحساسية الصدرية.",
    "doctors": [
      "د. حسام الدين",
      "د. نهى سمير",
      "د. وليد عادل"
    ],
    "diseases": [
      {
        "name": "الربو",
        "image": "images/medical/chest.jpg",
        "overview": "حالة مزمنة يحدث فيها التهاب وتضيق متغير في الشعب الهوائية.",
        "causes": "قد تتداخل الوراثة مع محفزات مثل الغبار والدخان والهواء البارد.",
        "symptoms": "قد يسبب صفيرًا وسعالًا وضيقًا في التنفس."
      },
      {
        "name": "الالتهاب الرئوي",
        "image": "images/medical/chest.jpg",
        "overview": "عدوى تصيب أنسجة الرئة والحويصلات الهوائية.",
        "causes": "قد تسببه بكتيريا أو فيروسات أو كائنات دقيقة أخرى.",
        "symptoms": "قد يسبب سعالًا وحمى وألمًا بالصدر وضيق نفس."
      }
    ]
  },
  "kidney": {
    "name": "الكلى",
    "image": "images/medical/inside/kidney-inside.jpg",
    "description": "متابعة وظائف الكلى والأملاح وصحة الجهاز البولي العلوي.",
    "doctors": [
      "د. وليد أحمد",
      "د. مريم خالد",
      "د. سامح فؤاد"
    ],
    "diseases": [
      {
        "name": "حصوات الكلى",
        "image": "images/medical/kidney.jpg",
        "overview": "ترسبات صلبة تتكون من أملاح ومعادن داخل الكلى.",
        "causes": "قد ترتبط بقلة شرب السوائل أو عوامل غذائية أو وراثية أو صحية.",
        "symptoms": "قد تسبب ألمًا بالجنب أو دمًا في البول أو غثيانًا."
      },
      {
        "name": "مرض الكلى المزمن",
        "image": "images/medical/kidney.jpg",
        "overview": "انخفاض تدريجي في قدرة الكلى على أداء وظائفها لمدة طويلة.",
        "causes": "من أسبابه الشائعة السكري وارتفاع ضغط الدم وبعض الأمراض الأخرى.",
        "symptoms": "قد لا تظهر أعراض مبكرة؛ وتساعد تحاليل الدم والبول على اكتشافه."
      }
    ]
  },
  "urinary": {
    "name": "المسالك البولية",
    "image": "images/medical/inside/urinary-inside.jpg",
    "description": "متابعة مشكلات المثانة والمسالك البولية وصحة التبول.",
    "doctors": [
      "د. طارق محمود",
      "د. إسلام حسن",
      "د. رامي عادل"
    ],
    "diseases": [
      {
        "name": "التهاب المسالك البولية",
        "image": "images/medical/urinary.jpg",
        "overview": "عدوى قد تصيب المثانة أو أجزاء أخرى من الجهاز البولي.",
        "causes": "غالبًا تنتج عن دخول بكتيريا إلى مجرى البول.",
        "symptoms": "قد تسبب حرقانًا وكثرة التبول وألمًا أسفل البطن."
      },
      {
        "name": "فرط نشاط المثانة",
        "image": "images/medical/urinary.jpg",
        "overview": "حالة تسبب إلحاحًا متكررًا ومفاجئًا للتبول.",
        "causes": "قد ترتبط باضطراب عضلة المثانة أو حالات عصبية أو أسباب أخرى.",
        "symptoms": "قد تسبب تكرار التبول والاستيقاظ ليلًا لدخول الحمام."
      }
    ]
  },
  "digestive": {
    "name": "الجهاز الهضمي",
    "image": "images/medical/inside/digestive-inside.jpg",
    "description": "متابعة المعدة والأمعاء والكبد واضطرابات الهضم.",
    "doctors": [
      "د. أشرف محمد",
      "د. رانيا علي",
      "د. أحمد جلال"
    ],
    "diseases": [
      {
        "name": "ارتجاع المريء",
        "image": "images/medical/digestive.jpg",
        "overview": "رجوع محتويات المعدة إلى المريء بصورة متكررة.",
        "causes": "قد يرتبط بضعف الصمام بين المعدة والمريء وبعض العادات الغذائية.",
        "symptoms": "قد يسبب حرقة خلف الصدر أو طعمًا حامضًا بالفم."
      },
      {
        "name": "القولون العصبي",
        "image": "images/medical/digestive.jpg",
        "overview": "اضطراب وظيفي يؤثر في تفاعل الأمعاء ويسبب أعراضًا متكررة.",
        "causes": "تتداخل حساسية الأمعاء وطريقة عملها والتوتر وبعض الأطعمة.",
        "symptoms": "قد يسبب ألم البطن والانتفاخ وتغير نمط التبرز."
      }
    ]
  },
  "oncology": {
    "name": "الأورام",
    "image": "images/medical/inside/oncology-inside.jpg",
    "description": "التقييم والمتابعة الطبية المتخصصة ودعم المرضى خلال رحلة العلاج.",
    "doctors": [
      "د. نجلاء إبراهيم",
      "د. سامح فؤاد",
      "د. هالة محمود"
    ],
    "diseases": [
      {
        "name": "أورام الثدي",
        "image": "images/medical/oncology.jpg",
        "overview": "نمو غير طبيعي لبعض خلايا أنسجة الثدي.",
        "causes": "قد تتداخل عوامل العمر والوراثة والتغيرات الهرمونية وعوامل أخرى.",
        "symptoms": "قد تظهر كتلة أو تغيرات بالجلد أو الحلمة؛ وأي تغير جديد يستحق الفحص."
      },
      {
        "name": "أورام القولون",
        "image": "images/medical/oncology.jpg",
        "overview": "نمو غير طبيعي يبدأ غالبًا في بطانة القولون أو المستقيم.",
        "causes": "قد ترتبط عوامل العمر والوراثة وبعض الأمراض ونمط الحياة بزيادة الاحتمال.",
        "symptoms": "قد تشمل العلامات تغير التبرز أو وجود دم بالبراز أو نقص وزن غير مفسر؛ والفحص المبكر مهم."
      }
    ]
  },
  "emergency": {
    "name": "الطوارئ",
    "image": "images/medical/inside/emergency-inside.jpg",
    "description": "استقبال الحالات العاجلة وتقييمها وتوجيهها للرعاية المناسبة.",
    "doctors": [
      "د. أحمد عادل",
      "د. محمد سامي",
      "د. ياسر محمود"
    ],
    "diseases": [
      {
        "name": "الإغماء",
        "image": "images/medical/emergency.jpg",
        "overview": "فقدان مؤقت للوعي بسبب انخفاض عابر في تدفق الدم إلى الدماغ.",
        "causes": "قد يرتبط بالجفاف أو الوقوف الطويل أو اضطراب ضغط الدم أو القلب.",
        "symptoms": "قد يسبقه دوار أو تعرق؛ والإغماء المتكرر أو المصحوب بألم صدر يحتاج تقييمًا عاجلًا."
      },
      {
        "name": "الحساسية الشديدة",
        "image": "images/medical/emergency.jpg",
        "overview": "تفاعل تحسسي شديد وسريع قد يؤثر في التنفس والدورة الدموية.",
        "causes": "قد يحدث بعد طعام أو دواء أو لسعة حشرة لدى بعض الأشخاص.",
        "symptoms": "قد يظهر تورم وصعوبة تنفس ودوخة؛ وهي حالة طارئة تستلزم الإسعاف فورًا."
      }
    ]
  },
  "surgery": {
    "name": "الجراحة",
    "image": "images/medical/inside/surgery-inside.jpg",
    "description": "التقييم الجراحي والتحضير للعمليات والمتابعة بعدها.",
    "doctors": [
      "د. ياسر محمود",
      "د. كريم أحمد",
      "د. شريف حسن"
    ],
    "diseases": [
      {
        "name": "الفتق",
        "image": "images/medical/surgery.jpg",
        "overview": "بروز جزء من نسيج أو عضو عبر منطقة ضعيفة في العضلات.",
        "causes": "قد يرتبط بضعف جدار البطن أو زيادة الضغط داخله أو عوامل وراثية.",
        "symptoms": "قد يظهر كتورم يزداد مع الكحة أو الوقوف وقد يصاحبه ألم."
      },
      {
        "name": "الزائدة الدودية",
        "image": "images/medical/surgery.jpg",
        "overview": "التهاب يصيب الزائدة الدودية الصغيرة المتصلة بالأمعاء الغليظة.",
        "causes": "غالبًا يرتبط بانسداد داخل الزائدة ثم حدوث التهاب.",
        "symptoms": "قد يبدأ ألمًا حول السرة ثم ينتقل لأسفل يمين البطن مع غثيان أو حمى؛ ويحتاج تقييمًا عاجلًا."
      }
    ]
  },
  "physiotherapy": {
    "name": "العلاج الطبيعي",
    "image": "images/medical/inside/physiotherapy-inside.jpg",
    "description": "التأهيل الحركي وتحسين الحركة والمرونة بعد الإصابات وبعض الأمراض.",
    "doctors": [
      "د. نورهان علي",
      "د. عمر حسن",
      "د. هيثم سامح"
    ],
    "diseases": [
      {
        "name": "آلام أسفل الظهر",
        "image": "images/medical/physiotherapy.jpg",
        "overview": "ألم في المنطقة السفلية من الظهر وقد يكون عضليًا أو مرتبطًا بالعمود الفقري.",
        "causes": "قد ينتج عن إجهاد العضلات أو الجلوس الطويل أو بعض مشكلات الفقرات.",
        "symptoms": "قد يسبب ألمًا أو تيبسًا يزيد مع بعض الحركات."
      },
      {
        "name": "خشونة الركبة",
        "image": "images/medical/physiotherapy.jpg",
        "overview": "تغير تدريجي في غضروف مفصل الركبة.",
        "causes": "قد ترتبط بالعمر أو إصابة سابقة أو عوامل ميكانيكية ووراثية.",
        "symptoms": "قد تسبب ألمًا وتيبسًا وصعوبة صعود السلالم."
      }
    ]
  },
  "lab": {
    "name": "التحاليل",
    "image": "images/medical/inside/lab-inside.jpg",
    "description": "إجراء الفحوصات المخبرية التي تساعد الطبيب على تقييم الحالة الصحية.",
    "doctors": [
      "د. منال سمير",
      "د. شيماء أحمد",
      "د. هدى محمود"
    ],
    "diseases": [
      {
        "name": "فقر الدم",
        "image": "images/medical/lab.jpg",
        "overview": "يمكن أن تساعد صورة الدم الكاملة في الكشف عن انخفاض الهيموجلوبين.",
        "causes": "تختلف الأسباب وقد تشمل نقص الحديد أو الفيتامينات أو فقدان الدم.",
        "symptoms": "قد تظهر أعراض مثل التعب والدوخة، ويحدد الطبيب الفحوصات المطلوبة."
      },
      {
        "name": "اضطراب سكر الدم",
        "image": "images/medical/lab.jpg",
        "overview": "تساعد تحاليل السكر الصائم والتراكمي في تقييم مستوى الجلوكوز.",
        "causes": "قد يرتبط اضطراب السكر بعوامل وراثية أو هرمونية أو نمط الحياة.",
        "symptoms": "قد لا توجد أعراض واضحة؛ ويُفسر التحليل وفقًا للحالة الطبية."
      }
    ]
  },
  "radiology": {
    "name": "الأشعة",
    "image": "images/medical/inside/radiology-inside.jpg",
    "description": "خدمات التصوير الطبي للمساعدة في تشخيص ومتابعة بعض الحالات.",
    "doctors": [
      "د. مصطفى حسن",
      "د. سمر إبراهيم",
      "د. وليد عادل"
    ],
    "diseases": [
      {
        "name": "كسور العظام",
        "image": "images/medical/radiology.jpg",
        "overview": "انقطاع أو شرخ في استمرارية العظم.",
        "causes": "غالبًا يحدث بعد إصابة أو سقوط، وقد يرتبط بضعف العظام.",
        "symptoms": "قد يسبب ألمًا وتورمًا وصعوبة استخدام الجزء المصاب؛ وتحدد الأشعة نوع الكسر."
      },
      {
        "name": "حصوات المرارة",
        "image": "images/medical/radiology.jpg",
        "overview": "ترسبات صلبة تتكون داخل المرارة.",
        "causes": "قد تتأثر بعوامل مثل العمر والوراثة وبعض التغيرات الصحية.",
        "symptoms": "قد لا تسبب أعراضًا، أو تسبب ألمًا أعلى البطن؛ وتساعد الموجات فوق الصوتية في الكشف عنها."
      }
    ]
  },
  "nutrition": {
    "name": "التغذية",
    "image": "images/medical/inside/nutrition-inside.jpg",
    "description": "التوعية بالتغذية المتوازنة والعادات الغذائية المناسبة للصحة.",
    "doctors": [
      "د. دينا محمد",
      "د. آلاء محمود",
      "د. ريهام عادل"
    ],
    "diseases": [
      {
        "name": "نقص الحديد",
        "image": "images/medical/nutrition.jpg",
        "overview": "انخفاض مخزون الحديد الذي يحتاجه الجسم لتكوين الهيموجلوبين.",
        "causes": "قد ينتج عن قلة تناوله أو ضعف امتصاصه أو زيادة الاحتياج أو فقدان الدم.",
        "symptoms": "قد يسبب التعب والشحوب والدوخة، ويُؤكد بالفحوصات."
      },
      {
        "name": "سوء التغذية",
        "image": "images/medical/nutrition.jpg",
        "overview": "عدم حصول الجسم على الكميات أو الأنواع المناسبة من العناصر الغذائية.",
        "causes": "قد يرتبط بنمط غذائي غير متوازن أو صعوبات امتصاص أو ظروف صحية.",
        "symptoms": "قد يؤثر في الطاقة والنمو والمناعة؛ ويحتاج تقييمًا فرديًا متخصصًا."
      }
    ]
  }
};

const currentDepartment = document.body.dataset.department;
if (currentDepartment && departments[currentDepartment]) {
  const department = departments[currentDepartment];
  document.title = `قسم ${department.name} | مستشفى طيبة`;
  document.getElementById("departmentTitle").textContent = `قسم ${department.name}`;
  document.getElementById("departmentImage").src = department.image;
  document.getElementById("departmentDescription").textContent = department.description;

  const diseaseContainer = document.getElementById("diseaseCards");
  department.diseases.forEach((disease) => {
    const card = document.createElement("article");
    card.className = "disease-card";
    const image = document.createElement("img");
    image.src = disease.image;
    image.alt = `صورة توضيحية عن ${disease.name}`;
    image.loading = "lazy";
    const content = document.createElement("div");
    content.className = "disease-card-body";
    const title = document.createElement("h3");
    title.textContent = disease.name;
    content.appendChild(title);
    [["ما هو؟", disease.overview], ["الأسباب المحتملة", disease.causes], ["الأعراض الشائعة", disease.symptoms]].forEach(([heading, value]) => {
      const h = document.createElement("h4"); h.textContent = heading;
      const p = document.createElement("p"); p.textContent = value;
      content.append(h, p);
    });
    card.append(image, content);
    diseaseContainer.appendChild(card);
  });

  const conditionsList = document.getElementById("conditionsList");
  department.diseases.forEach(disease => {
    const li = document.createElement("li"); li.textContent = disease.name;
    conditionsList.appendChild(li);
  });
  const doctorsList = document.getElementById("doctorsList");
  department.doctors.forEach(doctor => {
    const li = document.createElement("li"); li.textContent = doctor;
    doctorsList.appendChild(li);
  });
  document.getElementById("bookingButton").addEventListener("click", showBookingForm);
}

function showBookingForm() {
  const department = departments[currentDepartment];
  const container = document.getElementById("bookingFormContainer");
  container.innerHTML = `
    <form class="booking-form" id="bookingForm">
      <h2>حجز موعد تجريبي</h2>
      <label for="patientName">اسم المريض</label>
      <input id="patientName" type="text" required maxlength="70" placeholder="اكتبي الاسم">
      <label for="patientPhone">رقم الهاتف</label>
      <input id="patientPhone" type="tel" required pattern="[0-9+\\s-]{8,18}" placeholder="اكتبي رقم الهاتف">
      <label for="doctorName">اختاري الطبيب</label>
      <select id="doctorName" required>
        <option value="">اختاري الطبيب</option>
        ${department.doctors.map(doctor => `<option value="${doctor}">${doctor}</option>`).join("")}
      </select>
      <label for="appointmentDate">تاريخ الموعد</label>
      <input id="appointmentDate" type="date" required>
      <label for="appointmentTime">وقت الموعد</label>
      <select id="appointmentTime" required>
        <option value="">اختاري الوقت</option>
        <option>09:00 صباحاً</option><option>10:00 صباحاً</option>
        <option>11:00 صباحاً</option><option>12:00 ظهراً</option>
        <option>01:00 مساءً</option><option>02:00 مساءً</option>
      </select>
      <button class="btn" type="submit">تأكيد الحجز التجريبي</button>
      <p class="small-note">هذا نموذج تجريبي لمشروع تعليمي ولا يرسل بياناتك إلى أي جهة. أسماء الأطباء والمواعيد افتراضية.</p>
    </form>
    <div id="bookingResult"></div>
  `;
  document.getElementById("bookingForm").addEventListener("submit", function(event) {
    event.preventDefault();
    const name = document.getElementById("patientName").value.trim();
    const phone = document.getElementById("patientPhone").value.trim();
    const doctor = document.getElementById("doctorName").value;
    const date = document.getElementById("appointmentDate").value;
    const time = document.getElementById("appointmentTime").value;
    const number = Math.floor(1000 + Math.random() * 9000);
    const result = document.getElementById("bookingResult");
    result.className = "booking-result";
    result.textContent = `تم إنشاء حجز تجريبي باسم ${name}، رقم الهاتف ${phone}، مع ${doctor}، رقم الحجز ${number}، الموعد ${date} الساعة ${time}.`;
  });
}

const searchInput = document.getElementById("searchInput");
if (searchInput) {
  searchInput.addEventListener("input", function() {
    const value = this.value.trim().toLowerCase();
    document.querySelectorAll(".department-card").forEach(card => {
      const title = card.querySelector("h3").textContent.toLowerCase();
      const description = card.querySelector("p").textContent.toLowerCase();
      card.style.display = title.includes(value) || description.includes(value) ? "" : "none";
    });
  });
}
const topButton = document.getElementById("topButton");
if (topButton) {
  window.addEventListener("scroll", () => { topButton.style.display = window.scrollY > 300 ? "block" : "none"; });
  topButton.addEventListener("click", () => window.scrollTo({top: 0, behavior: "smooth"}));
}

// خلفية متحركة بعناصر طبية خفيفة تُنشأ بواسطة JavaScript
(function createMotionBackground(){
 const bg=document.querySelector('.ambient-bg'); if(!bg) return;
 const symbols=['✚','＋','♡','✧','⚕'];
 for(let i=0;i<18;i++){
  const item=document.createElement('span'); item.className='floating-medical'; item.textContent=symbols[i%symbols.length];
  item.style.cssText=`position:absolute;left:${(i*37)%97}%;top:${(i*23)%95}%;font-size:${18+(i%4)*9}px;color:#087f8c;opacity:.10;animation:floatIcon ${8+(i%6)}s ease-in-out ${-(i%7)}s infinite;`;
  bg.appendChild(item);
 }
 const style=document.createElement('style');style.textContent='@keyframes floatIcon{0%,100%{transform:translateY(0) rotate(0)}50%{transform:translateY(-35px) rotate(20deg)}}';document.head.appendChild(style);
})();


// حركات الصور: تظهر بسلاسة عند الوصول إليها، وتتحرك حركة هادئة بالتتابع
document.addEventListener('DOMContentLoaded', () => {
  const animatedImages = document.querySelectorAll('.department-card, .department-content > img');
  if ('IntersectionObserver' in window) {
    const observer = new IntersectionObserver(entries => {
      entries.forEach(entry => {
        if (entry.isIntersecting) { entry.target.classList.add('image-visible'); observer.unobserve(entry.target); }
      });
    }, {threshold: 0.18});
    animatedImages.forEach((el, i) => { el.style.transitionDelay = `${(i % 4) * 90}ms`; observer.observe(el); });
  } else { animatedImages.forEach(el => el.classList.add('image-visible')); }
  // نقاط ضوئية متحركة بالخلفية يتم إنشاؤها بواسطة JavaScript
  const bg = document.querySelector('.ambient-bg');
  if (bg && !window.matchMedia('(prefers-reduced-motion: reduce)').matches) {
    const layer = document.createElement('div'); layer.className = 'js-particles'; layer.setAttribute('aria-hidden','true');
    for (let i=0;i<12;i++){ const dot=document.createElement('span'); dot.className='js-particle'; dot.style.left=(5+(i*37)%90)+'%'; dot.style.top=(8+(i*53)%84)+'%'; dot.style.animationDelay=(-i*.7)+'s'; dot.style.animationDuration=(7+(i%5)*2)+'s'; layer.appendChild(dot); }
    bg.appendChild(layer);
  }
});

// حركة JavaScript لصورة الواجهة الرئيسية
document.addEventListener('DOMContentLoaded',()=>{
 const mainImage=document.querySelector('.hero-image-wrap');
 if(mainImage){
  if('IntersectionObserver' in window){
   const imageObserver=new IntersectionObserver(entries=>entries.forEach(entry=>{if(entry.isIntersecting){entry.target.classList.add('hero-image-active');imageObserver.unobserve(entry.target)}}),{threshold:.2});
   imageObserver.observe(mainImage);
  }else{mainImage.classList.add('hero-image-active')}
  mainImage.addEventListener('pointermove',event=>{const r=mainImage.getBoundingClientRect();const x=(event.clientX-r.left)/r.width-.5;const y=(event.clientY-r.top)/r.height-.5;mainImage.style.transform=`perspective(900px) rotateY(${x*5}deg) rotateX(${-y*5}deg)`});
  mainImage.addEventListener('pointerleave',()=>{mainImage.style.transform=''})
 }
});
