// Fox Motors — Cars Inventory
const D = id => id ? `https://lh3.googleusercontent.com/d/${id}` : null;
const IMG = {
  suv:     'https://images.unsplash.com/photo-1512699355324-f07e3106dae5?auto=format&fit=crop&w=900&q=85',
  sedan:   'https://images.unsplash.com/photo-1580273916550-e323be2ae537?auto=format&fit=crop&w=900&q=85',
  ev:      'https://images.unsplash.com/photo-1593941707882-a5bba14938c7?auto=format&fit=crop&w=900&q=85',
  bmw:     'https://images.unsplash.com/photo-1555215695-3004980ad54e?auto=format&fit=crop&w=900&q=85',
  merz:    'https://images.unsplash.com/photo-1570733577524-3a047079e80d?auto=format&fit=crop&w=900&q=85',
  pickup:  'https://images.unsplash.com/photo-1558618047-3c8c76ca7d13?auto=format&fit=crop&w=900&q=85',
  compact: 'https://images.unsplash.com/photo-1533473359331-0135ef1b58bf?auto=format&fit=crop&w=900&q=85',
};

const CARS = [
  // ═══ BYD ═══
  { id:'byd-atto-2', make:'BYD', model:'Atto 2', nameHe:'ב.י.ד אטו 2',
    type:'electric', typeHe:'חשמלי', cat:'suv', catHe:'קרוסאובר', seats:5, year:2024,
    priceFrom:152300, monthlyFrom:1580, dpFrom:14900,
    img: D('1pvaXUiDTCWvaa8ApsZCKtz_O5ZgZsmBR') || IMG.ev,
    specs:{ battery:'64.8 קוט"ש', range:'430 ק"מ', power:'204 כ"ס', accel:'7.9 שנ׳', trunk:'450 ל׳', maxSpeed:'150 קמ"ש' },
    hi:['מסך 10.1″ מסתובב','מצלמת 360°','BYD DiLink 4.0','6 כריות אוויר','ADAS מתקדם'],
    variants:[
      { name:'Boost', eng:'חשמלי BEV', price:152300, m50:1852, m60:1580, fee:1000, dp:14900, colors:'לבן, שחור, אפור' }
    ]},
  { id:'byd-seal5', make:'BYD', model:'Seal 5 DM-i', nameHe:'ב.י.ד סיל 5 DM-i',
    type:'phev', typeHe:'פלאג-אין היברידי', cat:'suv', catHe:'קרוסאובר', seats:5, year:2024,
    priceFrom:177384, monthlyFrom:1803, dpFrom:6900,
    img: D('1kPkpEB30O8cROavJq5q3nL5Xbfuc8d8e') || IMG.suv,
    specs:{ engine:'1.5L DM-i + חשמלי', eRange:'100 ק"מ חשמלי', power:'218 כ"ס מערכת', accel:'7.9 שנ׳', trunk:'490 ל׳', fuel:'4.4 ל׳/100' },
    hi:['100 ק"מ בחשמל','טווח כולל 1200+ ק"מ','טעינה מהרשת','ADAS מתקדם'],
    variants:[
      { name:'Comfort FL', eng:'PHEV 1.5 DM-i', price:177384, m50:2157, m60:1803, fee:3000, dp:6900, colors:'לבן' }
    ]},
  { id:'byd-seal-u', make:'BYD', model:'Seal U', nameHe:'ב.י.ד סיל יו',
    type:'phev', typeHe:'פלאג-אין היברידי', cat:'suv', catHe:'SUV בינוני', seats:5, year:2024,
    priceFrom:202712, monthlyFrom:2074, dpFrom:14900,
    img: D('1UffWCax2sd8f_HMD7cThOocEm_byMAiU') || IMG.suv,
    specs:{ engine:'1.5L PHEV', eRange:'80-100 ק"מ חשמלי', power:'240 כ"ס מערכת', accel:'6.9 שנ׳', trunk:'425 ל׳', fuel:'5.0 ל׳/100' },
    hi:['AWD זמין בגרסת Design','טעינה מהרשת','מסך 15.6″','6 כריות אוויר'],
    variants:[
      { name:'DM-i Boost PHEV 1.5', eng:'PHEV 1.5', price:202712, m50:2465, m60:2074, fee:1500, dp:14900, colors:'לבן, בז׳ - ריפוד חום' },
      { name:'DM-I Comfort PHEV 1.6', eng:'PHEV 1.6', price:217712, m50:2647, m60:2235, fee:1500, dp:14900, colors:'לבדוק לפני סגירה' },
      { name:'Design 4x4 PHEV', eng:'PHEV 4x4', price:237712, m50:2891, m60:2450, fee:3000, dp:14900, colors:'בז׳ - ריפוד חום' }
    ]},
  { id:'byd-sealion5', make:'BYD', model:'Sealion 5', nameHe:'ב.י.ד סיליון 5',
    type:'phev', typeHe:'פלאג-אין היברידי', cat:'suv', catHe:'קרוסאובר', seats:5, year:2024,
    priceFrom:169384, monthlyFrom:1717, dpFrom:14900,
    img: D('13nsC9CglX6hatGuPkhmjjwwYAijoeCNy') || IMG.suv,
    specs:{ engine:'1.5L DM-i', eRange:'100 ק"מ חשמלי', power:'218 כ"ס מערכת', accel:'7.8 שנ׳', trunk:'455 ל׳', fuel:'4.5 ל׳/100' },
    hi:['100 ק"מ בחשמל','עיצוב ספורטיבי','ADAS מלא','טעינה מהרשת'],
    variants:[
      { name:'Comfort DM-i', eng:'PHEV 1.5', price:169384, m50:2060, m60:1717, fee:1000, dp:14900, colors:'לבן, שחור, אפור' },
      { name:'Design DM-i', eng:'PHEV 1.5', price:174384, m50:2120, m60:1770, fee:1000, dp:14900, colors:'לבן, שחור, אפור' }
    ]},

  // ═══ JAECOO ═══
  { id:'jaecoo-8', make:'Jaecoo', model:'8', nameHe:"ג'אקו 8",
    type:'phev', typeHe:'פלאג-אין היברידי', cat:'suv', catHe:'SUV גדול 7 מושבים', seats:7, year:2024,
    priceFrom:232712, monthlyFrom:2396, dpFrom:14900,
    img: D('1macap1OIkisgmtQAnxEo3GuL2U4M47-Y') || IMG.suv,
    specs:{ engine:'1.5T PHEV', eRange:'100 ק"מ חשמלי', power:'325 כ"ס מערכת', accel:'6.5 שנ׳', trunk:'255 ל׳ (3 שורות)', fuel:'5.5 ל׳/100' },
    hi:['7 מושבים','100 ק"מ בחשמל','מסך 14.6″ פנורמי','6 כריות אוויר + ADAS'],
    variants:[
      { name:'Luxury PHEV 1.5', eng:'PHEV 1.5T', price:232712, m50:2830, m60:2396, fee:1000, dp:14900, colors:'לבן, שחור, כסוף', seats:7 },
      { name:'Limited PHEV 1.5', eng:'PHEV 1.5T', price:258796, m50:3147, m60:2676, fee:1000, dp:14900, colors:'לבן, שחור, כסוף', seats:7 }
    ]},
  { id:'jaecoo-7', make:'Jaecoo', model:'7', nameHe:"ג'אקו 7",
    type:'phev', typeHe:'פלאג-אין היברידי', cat:'suv', catHe:'SUV בינוני', seats:5, year:2024,
    priceFrom:192712, monthlyFrom:1967, dpFrom:12900,
    img: D('1n4pQd3licD3sYORWPtcfh-MzMZRuTK-2') || IMG.suv,
    specs:{ engine:'1.5T PHEV', eRange:'100 ק"מ חשמלי', power:'290 כ"ס מערכת', accel:'6.9 שנ׳', trunk:'400 ל׳', fuel:'5.2 ל׳/100' },
    hi:['100 ק"מ בחשמל','מסך 14.6″','עיצוב ספורטיבי','ADAS מלא'],
    variants:[
      { name:'Premium PHEV 1.5', eng:'PHEV 1.5T', price:192712, m50:2343, m60:1967, fee:3000, dp:12900, colors:'לבן, שחור, כסוף' },
      { name:'Luxury PHEV 1.5', eng:'PHEV 1.5T', price:205712, m50:2501, m60:2107, fee:1500, dp:12900, colors:'לבן, שחור, כסוף' }
    ]},
  { id:'jaecoo-5', make:'Jaecoo', model:'5', nameHe:"ג'אקו 5 היברידי",
    type:'hybrid', typeHe:'היברידי', cat:'suv', catHe:'קרוסאובר', seats:5, year:2024,
    priceFrom:156930, monthlyFrom:1583, dpFrom:12900,
    img: D('1n4pQd3licD3sYORWPtcfh-MzMZRuTK-2') || IMG.suv,
    specs:{ engine:'1.5L HEV', power:'190 כ"ס מערכת', accel:'7.9 שנ׳', trunk:'420 ל׳', fuel:'5.5 ל׳/100', maxSpeed:'180 קמ"ש' },
    hi:['היברידי חסכוני','עיצוב מודרני','מסך 12.3″','6 כריות אוויר'],
    variants:[
      { name:'Premium HEV 1.5', eng:'HEV 1.5', price:156930, m50:1908, m60:1583, fee:1000, dp:12900, colors:'לבן, שחור, כסוף' },
      { name:'Luxury HEV 1.5', eng:'HEV 1.5', price:166294, m50:2022, m60:1684, fee:1000, dp:12900, colors:'לבן, שחור, כסוף' }
    ]},
  { id:'jaecoo-5-ev', make:'Jaecoo', model:'5 EV', nameHe:"ג'אקו 5 חשמלי",
    type:'electric', typeHe:'חשמלי', cat:'suv', catHe:'קרוסאובר', seats:5, year:2024,
    priceFrom:161796, monthlyFrom:1718, dpFrom:9900,
    img: D('1n4pQd3licD3sYORWPtcfh-MzMZRuTK-2') || IMG.ev,
    specs:{ battery:'62 קוט"ש', range:'400+ ק"מ', power:'204 כ"ס', accel:'7.5 שנ׳', trunk:'420 ל׳', maxSpeed:'160 קמ"ש' },
    hi:['400+ ק"מ טווח','עיצוב ספורטיבי','ADAS מלא','טעינה מהירה DC'],
    variants:[
      { name:'Luxury EV', eng:'חשמלי BEV', price:161796, m50:1967, m60:1718, fee:4000, dp:9900, colors:'שחור, אפור' }
    ]},

  // ═══ CHERY ═══
  { id:'chery-tiggo4', make:'Chery', model:'Tiggo 4', nameHe:"צ'רי טיגו 4",
    type:'hybrid', typeHe:'היברידי', cat:'suv', catHe:'קרוסאובר', seats:5, year:2024,
    priceFrom:138697, monthlyFrom:1388, dpFrom:13900,
    img: D('1KlZZHcEmQJptYgpCAo0LBy9D89_gFKCy') || IMG.compact,
    specs:{ engine:'1.5L HEV', power:'190 כ"ס מערכת', accel:'8.5 שנ׳', trunk:'385 ל׳', fuel:'5.5 ל׳/100', maxSpeed:'175 קמ"ש' },
    hi:['היברידי חסכוני','מסך 10.25″','6 כריות אוויר','ADAS'],
    variants:[
      { name:'Comfort HEV 1.5', eng:'HEV 1.5', price:138697, m50:1687, m60:1388, fee:1000, dp:13900, colors:'שחור, כסף קרח, אפור בטון, לבן' }
    ]},
  { id:'chery-tiggo7pro', make:'Chery', model:'Tiggo 7 Pro', nameHe:"צ'רי טיגו 7 פרו",
    type:'phev', typeHe:'פלאג-אין היברידי', cat:'suv', catHe:'SUV בינוני', seats:5, year:2024,
    priceFrom:182384, monthlyFrom:1856, dpFrom:14900,
    img: D('1pzM2zwt-FXsXQsBUmRzKLgkpmiypWk3D') || IMG.suv,
    specs:{ engine:'1.5T PHEV', eRange:'80 ק"מ חשמלי', power:'326 כ"ס מערכת', accel:'6.8 שנ׳', trunk:'432 ל׳', fuel:'5.0 ל׳/100' },
    hi:['80 ק"מ בחשמל','מסך 14.6″','עיצוב ספורטיבי','ADAS מלא'],
    variants:[
      { name:'PHEV Luxury 1.5', eng:'PHEV 1.5T', price:182384, m50:2218, m60:1856, fee:1000, dp:14900, colors:'לבן, שחור, כסוף, אפור בטון' }
    ]},
  { id:'chery-tiggo8pro', make:'Chery', model:'Tiggo 8 Pro', nameHe:"צ'רי טיגו 8 פרו",
    type:'phev', typeHe:'פלאג-אין היברידי', cat:'suv', catHe:'SUV גדול 7 מושבים', seats:7, year:2024,
    priceFrom:202712, monthlyFrom:2074, dpFrom:14900,
    img: D('1NXGiLo1IufJUxeye0dfPKYDS2RrapEgy') || IMG.suv,
    specs:{ engine:'1.5T PHEV', eRange:'80 ק"מ חשמלי', power:'326 כ"ס מערכת', accel:'7.0 שנ׳', trunk:'260 ל׳ (3 שורות)', fuel:'5.3 ל׳/100' },
    hi:['7 מושבים','80 ק"מ בחשמל','מסך 14.6″','ADAS מלא'],
    variants:[
      { name:'PHEV Noble 1.5', eng:'PHEV 1.5T', price:202712, m50:2465, m60:2074, fee:1000, dp:14900, colors:'שחור, אפור פנינה', seats:7 }
    ]},
  { id:'chery-tiggo9pro', make:'Chery', model:'Tiggo 9 Pro', nameHe:"צ'רי טיגו 9 פרו",
    type:'phev', typeHe:'פלאג-אין היברידי', cat:'suv', catHe:'SUV גדול 7 מושבים', seats:7, year:2024,
    priceFrom:220712, monthlyFrom:2400, dpFrom:14900,
    img: D('1MODonzGhx--aiMitKgQuXYs_QtjPKJbU') || IMG.suv,
    specs:{ engine:'1.5T PHEV', eRange:'100 ק"מ חשמלי', power:'340 כ"ס מערכת', accel:'6.5 שנ׳', trunk:'260 ל׳ (3 שורות)', fuel:'5.0 ל׳/100' },
    hi:['7 מושבים','100 ק"מ בחשמל','מסך 14.6″','עיצוב פרמיום'],
    variants:[
      { name:'PHEV LUX 1.5', eng:'PHEV 1.5T', price:220712, m50:2684, m60:2400, fee:1000, dp:14900, colors:'לבן, שחור', seats:7 },
      { name:'PHEV Noble 1.5', eng:'PHEV 1.5T', price:248796, m50:3025, m60:2569, fee:1000, dp:14900, colors:'לבן, שחור, כסוף כחול', seats:7 }
    ]},
  { id:'chery-fx-ev', make:'Chery', model:'FX EV', nameHe:"צ'רי FX EV",
    type:'electric', typeHe:'חשמלי', cat:'hatchback', catHe:'האצ׳בק', seats:5, year:2025,
    priceFrom:161066, monthlyFrom:1605, dpFrom:5900,
    img: D('1xrXln6FXv54PvroSJ_5Qmfdinu31dj3M') || IMG.ev,
    specs:{ battery:'60 קוט"ש', range:'400 ק"מ', power:'170 כ"ס', accel:'8.0 שנ׳', trunk:'310 ל׳', maxSpeed:'150 קמ"ש' },
    hi:['400 ק"מ טווח','עיצוב עירוני מודרני','ADAS','מסך 12.3″'],
    notes:'21 ימי עסקים',
    variants:[
      { name:'SENSE TT', eng:'חשמלי BEV', price:161066, m50:1959, m60:1605, fee:3000, dp:5900, colors:'לבן גג שחור, כסוף גג שחור', notes:'רישוי 26' }
    ]},
  { id:'chery-fx', make:'Chery', model:'FX', nameHe:"צ'רי FX",
    type:'hybrid', typeHe:'היברידי', cat:'hatchback', catHe:'האצ׳בק', seats:5, year:2024,
    priceFrom:155020, monthlyFrom:1563, dpFrom:13900,
    img: D('1VWfy9uJ72TytMzkkgKCTSW8BssersLfX') || IMG.compact,
    specs:{ engine:'1.5L HEV', power:'185 כ"ס מערכת', accel:'8.5 שנ׳', trunk:'310 ל׳', fuel:'4.8 ל׳/100', maxSpeed:'170 קמ"ש' },
    hi:['היברידי יעיל','מסך 10.25″','6 כריות אוויר','ADAS'],
    variants:[
      { name:'Comfort HEV', eng:'HEV 1.5', price:155020, m50:1885, m60:1563, fee:1000, dp:13900, colors:'אפור' }
    ]},

  // ═══ HYUNDAI ═══
  { id:'hyundai-tucson', make:'Hyundai', model:'Tucson', nameHe:'יונדאי טוסון',
    type:'hybrid', typeHe:'היברידי / בנזין', cat:'suv', catHe:'SUV בינוני', seats:5, year:2024,
    priceFrom:191316, monthlyFrom:1835, dpFrom:5900,
    img: D('1zt7VUL0q90e2JYtHlJhKlNznfe79d8Fg') || IMG.suv,
    specs:{ engine:'1.6T בנזין / 1.6T היברידי', power:'160-230 כ"ס', accel:'8.5 שנ׳', trunk:'620 ל׳', fuel:'6.0-14.5 קמ"ל', maxSpeed:'185 קמ"ש' },
    hi:['5 כוכבי EuroNCAP','מסך 10.25″','7 כריות אוויר','חבילת ADAS'],
    variants:[
      { name:'Premium 1.6 Turbo', eng:'בנזין 1.6T', price:191316, m50:2326, m60:1992, fee:1500, dp:5900, colors:'אפור, לבן', notes:'הזמנת יבואן' },
      { name:'Executive Hybrid 1.6', eng:'היברידי 1.6T', price:215622, m50:2622, m60:2213, fee:3000, dp:14900, colors:'שחור, שמפניה, כחול' }
    ]},
  { id:'hyundai-venue', make:'Hyundai', model:'Venue', nameHe:'יונדאי וניו',
    type:'benzin', typeHe:'בנזין', cat:'suv', catHe:'קרוסאובר קומפקטי', seats:5, year:2024,
    priceFrom:131697, monthlyFrom:1290, dpFrom:12900,
    img: D('1Le9rj_nfsaNGJdynBzFtFiKdRoqF1b0Z') || IMG.compact,
    specs:{ engine:'1.6L בנזין', power:'123 כ"ס', accel:'11.0 שנ׳', trunk:'355 ל׳', fuel:'13.0 קמ"ל', maxSpeed:'175 קמ"ש' },
    hi:['עיצוב עירוני','מסך 8.0″','6 כריות אוויר','חיסכון בדלק'],
    variants:[
      { name:'Prime 1.6', eng:'בנזין 1.6', price:131697, m50:1601, m60:1290, fee:1000, dp:12900, colors:'לבן, שחור, כסף, אפור' }
    ]},
  { id:'hyundai-sonata', make:'Hyundai', model:'Sonata', nameHe:'יונדאי סונטה',
    type:'hybrid', typeHe:'היברידי', cat:'sedan', catHe:'סדאן', seats:5, year:2024,
    priceFrom:222712, monthlyFrom:2289, dpFrom:9900,
    img: D('15I2W1amZ7shO_0O8R-c1fNQbTYui8YSk') || IMG.sedan,
    specs:{ engine:'2.0L היברידי', power:'192 כ"ס מערכת', accel:'8.2 שנ׳', trunk:'510 ל׳', fuel:'17.5 קמ"ל', maxSpeed:'180 קמ"ש' },
    hi:['סדאן פרמיום','מסך 10.25″ + HUD','5 כוכבי EuroNCAP','8 כריות אוויר'],
    variants:[
      { name:'Luxury FL Hybrid 2.0', eng:'הייבריד 2.0', price:222712, m50:2708, m60:2289, fee:1500, dp:9900, colors:'לבן - ריפוד כאמל' },
      { name:'Limited FL Hybrid 2.0', eng:'היברידי 2.0', price:237712, m50:2891, m60:2450, fee:1000, dp:16900, colors:'לבן פנינה', notes:'רכב אחרון' }
    ]},
  { id:'hyundai-elantra', make:'Hyundai', model:'Elantra', nameHe:'יונדאי אלנטרה',
    type:'hybrid', typeHe:'היברידי', cat:'sedan', catHe:'סדאן', seats:5, year:2024,
    priceFrom:180384, monthlyFrom:1835, dpFrom:9900,
    img: D('18mOwjvIw-ezVpL5tzjHfUs0TKQxGSvbb') || IMG.sedan,
    specs:{ engine:'1.6L היברידי', power:'141 כ"ס מערכת', accel:'9.3 שנ׳', trunk:'474 ל׳', fuel:'21.0 קמ"ל', maxSpeed:'175 קמ"ש' },
    hi:['היברידי יעיל מאוד','מסך 10.25″','5 כוכבי EuroNCAP','8 כריות אוויר'],
    variants:[
      { name:'Premium FL Hybrid 1.6', eng:'היברידי 1.6', price:180384, m50:2193, m60:1835, fee:1500, dp:9900, colors:'לבן, כחול מטאלי, אפור בהיר מטאלי' }
    ]},
  { id:'hyundai-kona', make:'Hyundai', model:'Kona', nameHe:'יונדאי קונה',
    type:'hybrid', typeHe:'היברידי', cat:'suv', catHe:'קרוסאובר', seats:5, year:2024,
    priceFrom:179384, monthlyFrom:1824, dpFrom:6900,
    img: D('1YDg8WmbqnVUFBNii2wkAalWmDwFJrmYu') || IMG.suv,
    specs:{ engine:'1.6T היברידי', power:'141 כ"ס מערכת', accel:'9.5 שנ׳', trunk:'374 ל׳', fuel:'18.0 קמ"ל', maxSpeed:'175 קמ"ש' },
    hi:['היברידי חסכוני','מסך 10.25″','עיצוב מודרני','ADAS מלא'],
    variants:[
      { name:'Premium Hybrid 1.6', eng:'היברידי 1.6T', price:179384, m50:2181, m60:1824, fee:3000, dp:6900, colors:'לבן, שחור, אפור בהיר מטאלי, אפור כהה, כחול כהה, כסף כחלחל, אדום' }
    ]},

  // ═══ TOYOTA ═══
  { id:'toyota-corolla-cross', make:'Toyota', model:'Corolla Cross', nameHe:'טויוטה קורולה קרוס',
    type:'hybrid', typeHe:'היברידי', cat:'suv', catHe:'קרוסאובר', seats:5, year:2024,
    priceFrom:182384, monthlyFrom:1856, dpFrom:12900,
    img: D('1VuA2tx9rTBzUR8ocSRt4BFAfTmYoiPSJ') || IMG.suv,
    specs:{ engine:'1.8L HSD היברידי', power:'122 כ"ס מערכת', accel:'10.0 שנ׳', trunk:'440 ל׳', fuel:'20+ קמ"ל', maxSpeed:'170 קמ"ש' },
    hi:['אמינות טויוטה','20+ קמ"ל','מסך 9.0″','7 כריות אוויר'],
    notes:'החכר',
    variants:[
      { name:'Active 1.8 HSD', eng:'היברידי 1.8', price:182384, m50:2218, m60:1856, fee:2000, dp:12900, colors:'לבן, אפור' }
    ]},
  { id:'toyota-yaris-cross', make:'Toyota', model:'Yaris Cross', nameHe:'טויוטה יאריס קרוס',
    type:'hybrid', typeHe:'היברידי', cat:'suv', catHe:'קרוסאובר קומפקטי', seats:5, year:2024,
    priceFrom:161020, monthlyFrom:1627, dpFrom:8900,
    img: D('1C4kby5N2P7-AW05m2sF7XhJVp5NTuoCV') || IMG.compact,
    specs:{ engine:'1.5L HSD היברידי', power:'116 כ"ס מערכת', accel:'11.0 שנ׳', trunk:'270 ל׳', fuel:'22+ קמ"ל', maxSpeed:'170 קמ"ש' },
    hi:['22+ קמ"ל','עיצוב ספורטיבי','מסך 9.0″','6 כריות אוויר'],
    variants:[
      { name:'ECO HSD 1.5', eng:'היברידי 1.5', price:161020, m50:1958, m60:1627, fee:1000, dp:8900, colors:'לבן, כסוף מטאלי, אפור כהה מטאלי', notes:'החכר' },
      { name:'Style 1.5', eng:'היברידי 1.5', price:171930, m50:2091, m60:1912, fee:2000, dp:6900, colors:'לבן' }
    ]},
  { id:'toyota-yaris', make:'Toyota', model:'Yaris', nameHe:'טויוטה יאריס',
    type:'hybrid', typeHe:'היברידי', cat:'hatchback', catHe:'האצ׳בק', seats:5, year:2024,
    priceFrom:151930, monthlyFrom:1530, dpFrom:6900,
    img: D('18FgUTgkADpr8KgmMWcuxSXCP9iUnXsF_') || IMG.compact,
    specs:{ engine:'1.5L HSD היברידי', power:'116 כ"ס מערכת', accel:'11.5 שנ׳', trunk:'286 ל׳', fuel:'22+ קמ"ל', maxSpeed:'165 קמ"ש' },
    hi:['22+ קמ"ל','רכב עירוני מושלם','אמינות טויוטה','מסך 9.0″'],
    notes:'יבוא מקביל',
    variants:[
      { name:'Comfort HSD', eng:'היברידי 1.5', price:151930, m50:1847, m60:1530, fee:2000, dp:6900, colors:'לבן' }
    ]},
  { id:'toyota-chr', make:'Toyota', model:'C-HR', nameHe:'טויוטה C-HR',
    type:'hybrid', typeHe:'היברידי', cat:'suv', catHe:'קרוסאובר קופה', seats:5, year:2024,
    priceFrom:196622, monthlyFrom:1952, dpFrom:6900,
    img: D('1-piDTKZKKy7nqVikFq3ZBLutZeZGhC7L') || IMG.suv,
    specs:{ engine:'2.0L HSD היברידי', power:'196 כ"ס מערכת', accel:'8.2 שנ׳', trunk:'388 ל׳', fuel:'19+ קמ"ל', maxSpeed:'180 קמ"ש' },
    hi:['עיצוב קופה ייחודי','19+ קמ"ל','מסך 12.3″','ADAS מלא'],
    variants:[
      { name:'Flow HSD 2.0', eng:'היברידי 2.0', price:196622, m50:2391, m60:1952, fee:2000, dp:6900, colors:'לבן' }
    ]},

  // ═══ LEAPMOTOR ═══
  { id:'leapmotor-c10', make:'Leapmotor', model:'C10', nameHe:'ליפמוטור C10',
    type:'phev', typeHe:'פלאג-אין היברידי', cat:'suv', catHe:'SUV בינוני', seats:5, year:2024,
    priceFrom:187622, monthlyFrom:1912, dpFrom:6900,
    img: D('1W02IVvJdTX8_6tvwMPveAPEwZ1MZGy6E') || IMG.ev,
    specs:{ engine:'1.5T PHEV', eRange:'120 ק"מ חשמלי', power:'326 כ"ס מערכת', accel:'6.5 שנ׳', trunk:'422 ל׳', fuel:'5.5 ל׳/100' },
    hi:['120 ק"מ בחשמל','מסך 14.6″','עיצוב מינימליסטי','ADAS מתקדם'],
    variants:[
      { name:'Life PHEV', eng:'PHEV 1.5T', price:187622, m50:2281, m60:1912, fee:3000, dp:6900, colors:'לבן פנינה, אפור בטון' },
      { name:'Design PHEV', eng:'PHEV 1.5T', price:192622, m50:2342, m60:1966, fee:2000, dp:6900, colors:'לבן פנינה, אפור בטון' }
    ]},

  // ═══ KIA ═══
  { id:'kia-seltos', make:'Kia', model:'Seltos', nameHe:'קיה סלטוס',
    type:'benzin', typeHe:'בנזין', cat:'suv', catHe:'קרוסאובר', seats:5, year:2024,
    priceFrom:167294, monthlyFrom:1694, dpFrom:5900,
    img: D('1Ianoo6tBprt8Diu9TvWV8pzezcRQtfbW') || IMG.suv,
    specs:{ engine:'2.0L MPI', power:'149 כ"ס', accel:'10.0 שנ׳', trunk:'433 ל׳', fuel:'12.5 קמ"ל', maxSpeed:'175 קמ"ש' },
    hi:['5 כוכבי NCAP','מסך 10.25″','6 כריות אוויר','בלימת חירום אוטונומית'],
    variants:[
      { name:'LX 2.0', eng:'בנזין 2.0', price:167294, m50:2034, m60:1694, fee:1500, dp:5900, colors:'לבן, שחור' }
    ]},
  { id:'kia-sportage', make:'Kia', model:'Sportage', nameHe:"קיה ספורטאז'",
    type:'benzin', typeHe:'בנזין', cat:'suv', catHe:'SUV בינוני', seats:5, year:2024,
    priceFrom:179900, salePrice:179900, monthlyFrom:1763, dpFrom:7900,
    img: D('1af6Z5bq9yGaP0DWoG69jNgCuf4oTNbiS') || IMG.suv,
    specs:{ engine:'1.6T בנזין', power:'180 כ"ס', accel:'8.5 שנ׳', trunk:'587 ל׳', fuel:'12.0 קמ"ל', maxSpeed:'185 קמ"ש' },
    hi:['5 כוכבי EuroNCAP','מסך 12.3″','8 כריות אוויר','ADAS מלא'],
    variants:[
      { name:'Urban 1.6T', eng:'בנזין 1.6T', price:187622, salePrice:179900, m50:2281, m60:1763, fee:3000, dp:7900, colors:'לבן, שחור, כסוף כהה' }
    ]},
  { id:'kia-picanto', make:'Kia', model:'Picanto', nameHe:'קיה פיקנטו',
    type:'benzin', typeHe:'בנזין', cat:'hatchback', catHe:'רכב עירוני', seats:5, year:2024,
    priceFrom:111272, monthlyFrom:1094, dpFrom:9900,
    img: D('1EfCLf6gc8-Df1y49jSbZfACoexKTOQ1W') || IMG.compact,
    specs:{ engine:'1.2L MPI', power:'84 כ"ס', accel:'12.5 שנ׳', trunk:'255 ל׳', fuel:'15.0 קמ"ל', maxSpeed:'160 קמ"ש' },
    hi:['רכב עירוני חסכוני','קל לחנייה','מסך 8.0″','6 כריות אוויר'],
    variants:[
      { name:'LX Plus 1.2', eng:'בנזין 1.2', price:111272, m50:1353, m60:1094, fee:1000, dp:9900, colors:'לבן, שחור, כסוף, אפור' }
    ]},
  { id:'kia-niro', make:'Kia', model:'Niro', nameHe:'קיה נירו',
    type:'hybrid', typeHe:'היברידי', cat:'suv', catHe:'קרוסאובר', seats:5, year:2024,
    priceFrom:181294, monthlyFrom:1845, dpFrom:14900,
    img: D('1myyM89Y1iuq8GaNdA1E1fZiy5E_mqGzD') || IMG.suv,
    specs:{ engine:'1.5L HEV', power:'141 כ"ס מערכת', accel:'9.8 שנ׳', trunk:'451 ל׳', fuel:'20+ קמ"ל', maxSpeed:'170 קמ"ש' },
    hi:['20+ קמ"ל','5 כוכבי EuroNCAP','מסך 10.25″','ADAS מלא'],
    variants:[
      { name:'HEV LX 1.5', eng:'היברידי 1.5', price:181294, m50:2205, m60:1845, fee:3000, dp:14900, colors:'לבן, שחור, אפור' }
    ]},

  // ═══ MITSUBISHI ═══
  { id:'mitsubishi-eclipse', make:'Mitsubishi', model:'Eclipse Cross', nameHe:'מיצובישי אקליפס קרוס',
    type:'benzin', typeHe:'בנזין', cat:'suv', catHe:'קרוסאובר קופה', seats:5, year:2024,
    priceFrom:167384, monthlyFrom:1695, dpFrom:14900,
    img: D('1iRGkK_AmdmUbZDTfZntb9mkjGAK5Y8eW') || IMG.suv,
    specs:{ engine:'1.5T בנזין', power:'163 כ"ס', accel:'9.5 שנ׳', trunk:'341 ל׳', fuel:'11.5 קמ"ל', maxSpeed:'185 קמ"ש' },
    hi:['עיצוב קופה ייחודי','מסך 10.8″ 2 חלקים','S-AWC 4x4 זמין','7 כריות אוויר'],
    variants:[
      { name:'Cross Intense 1.5', eng:'בנזין 1.5T', price:167384, m50:2035, m60:1695, fee:1000, dp:14900, colors:'לבן' }
    ]},
  { id:'mitsubishi-outlander', make:'Mitsubishi', model:'Outlander', nameHe:'מיצובישי אאוטלנדר',
    type:'benzin', typeHe:'בנזין', cat:'suv', catHe:'SUV גדול', seats:7, year:2024,
    priceFrom:207712, monthlyFrom:2128, dpFrom:16900,
    img: D('1QQLrQTp-uhGDqiSN2166RbM0PgRBsrH4') || IMG.suv,
    specs:{ engine:'2.5L MIVEC', power:'181 כ"ס', accel:'10.0 שנ׳', trunk:'310 ל׳ (3 שורות)', fuel:'10.5 קמ"ל', maxSpeed:'180 קמ"ש' },
    hi:['7 מושבים','S-AWC 4x4','מסך 12.3″','8 כריות אוויר'],
    variants:[
      { name:'Executive 2.5', eng:'בנזין 2.5', price:207712, m50:2526, m60:2128, fee:1500, dp:16900, colors:'לבן אפור כהה', seats:7 },
      { name:'InStyle FL 2.5', eng:'בנזין 2.5', price:213712, m50:2599, m60:2109, fee:1500, dp:16900, colors:'לבן אפור כהה', seats:7 }
    ]},

  // ═══ MG ═══
  { id:'mg-ehs', make:'MG', model:'EHS', nameHe:"אמ.ג'י EHS",
    type:'phev', typeHe:'פלאג-אין היברידי', cat:'suv', catHe:'SUV בינוני', seats:5, year:2024,
    priceFrom:191610, monthlyFrom:1955, dpFrom:9900,
    img: IMG.suv,
    specs:{ engine:'1.5T PHEV', eRange:'85 ק"מ חשמלי', power:'258 כ"ס מערכת', accel:'6.9 שנ׳', trunk:'448 ל׳', fuel:'6.0 ל׳/100' },
    hi:['85 ק"מ בחשמל','מסך 10.1″','8 כריות אוויר','ADAS מתקדם'],
    variants:[
      { name:'Luxury PHEV 1.5', eng:'PHEV 1.5T', price:191610, m50:2330, m60:1955, fee:5000, dp:9900, colors:'—' }
    ]},
  { id:'mg-hs', make:'MG', model:'HS', nameHe:"אמ.ג'י HS",
    type:'hybrid', typeHe:'היברידי', cat:'suv', catHe:'SUV בינוני', seats:5, year:2024,
    priceFrom:179610, monthlyFrom:1827, dpFrom:9900,
    img: IMG.suv,
    specs:{ engine:'1.5T Hybrid+', power:'230 כ"ס מערכת', accel:'7.5 שנ׳', trunk:'507 ל׳', fuel:'7.5 ל׳/100', maxSpeed:'185 קמ"ש' },
    hi:['מסך 12.3″','8 כריות אוויר','panoramic roof','ADAS מלא'],
    variants:[
      { name:'Hybrid+ Luxury 1.5', eng:'Hybrid 1.5T', price:179610, m50:2184, m60:1827, fee:5000, dp:9900, colors:'—' }
    ]},
  { id:'mg-zs', make:'MG', model:'ZS', nameHe:"אמ.ג'י ZS",
    type:'hybrid', typeHe:'היברידי', cat:'suv', catHe:'קרוסאובר', seats:5, year:2024,
    priceFrom:157918, monthlyFrom:1594, dpFrom:13900,
    img: D('1m2oTEU7x4bAwoJJnmjdg6Pk1NrEGLeQ7') || IMG.compact,
    specs:{ engine:'1.5L HEV', power:'190 כ"ס מערכת', accel:'8.5 שנ׳', trunk:'448 ל׳', fuel:'6.5 ל׳/100', maxSpeed:'175 קמ"ש' },
    hi:['היברידי חסכוני','מסך 10.1″','6 כריות אוויר','ADAS'],
    variants:[
      { name:'Luxury Hybrid 1.59', eng:'HEV 1.5', price:157918, m50:1920, m60:1594, fee:1000, dp:13900, colors:'לבן' }
    ]},
  { id:'mg-3', make:'MG', model:'3', nameHe:"אמ.ג'י 3",
    type:'hybrid', typeHe:'היברידי', cat:'hatchback', catHe:'האצ׳בק', seats:5, year:2024,
    priceFrom:129595, monthlyFrom:1290, dpFrom:12900,
    img: D('1Ianoo6tBprt8Diu9TvWV8pzezcRQtfbW') || IMG.compact,
    specs:{ engine:'1.5L HEV', power:'180 כ"ס מערכת', accel:'9.0 שנ׳', trunk:'293 ל׳', fuel:'6.0 ל׳/100', maxSpeed:'170 קמ"ש' },
    hi:['היברידי יעיל','רכב עירוני','מסך 10.25″','6 כריות אוויר'],
    variants:[
      { name:'Luxury Hybrid 1.5', eng:'HEV 1.5', price:129595, m50:1576, m60:1290, fee:1000, dp:12900, colors:'לבן, כסף, אפור כהה' }
    ]},
  { id:'mg-s9', make:'MG', model:'S9', nameHe:"אמ.ג'י S9",
    type:'phev', typeHe:'פלאג-אין היברידי', cat:'suv', catHe:'SUV גדול 7 מושבים', seats:7, year:2024,
    priceFrom:192610, monthlyFrom:1990, dpFrom:14900,
    img: IMG.suv,
    specs:{ engine:'1.5T PHEV', eRange:'100 ק"מ חשמלי', power:'350 כ"ס מערכת', accel:'6.5 שנ׳', trunk:'265 ל׳ (3 שורות)', fuel:'6.0 ל׳/100' },
    hi:['7 מושבים','100 ק"מ בחשמל','מסך 14.6″','ADAS מלא'],
    variants:[
      { name:'Comfort MG S9', eng:'PHEV 1.5T', price:192610, salePrice:203000, m50:2342, m60:1990, fee:3000, dp:14900, colors:'כסף', seats:7 }
    ]},

  // ═══ ŠKODA ═══
  { id:'skoda-superb', make:'Škoda', model:'Superb', nameHe:'סקודה סופרב',
    type:'benzin', typeHe:'בנזין', cat:'sedan', catHe:'סדאן/קומבי גדול', seats:5, year:2024,
    priceFrom:288296, monthlyFrom:2992, dpFrom:9900,
    img: IMG.sedan,
    specs:{ engine:'2.0T TSI', power:'265 כ"ס', accel:'6.5 שנ׳', trunk:'645 ל׳ (קומבי)', fuel:'8.5 ל׳/100', maxSpeed:'250 קמ"ש (מוגבל)' },
    hi:['4x4 4Motion','645 ל׳ תא מטען (קומבי)','מסך 12.9″ Cantate','8 כריות אוויר'],
    variants:[
      { name:"L&K 4x4 2.0T", eng:'בנזין 2.0T', price:288296, m50:3506, m60:2992, fee:1500, dp:9900, colors:'לבן, שחור' }
    ]},
  { id:'skoda-kamiq', make:'Škoda', model:'Kamiq', nameHe:'סקודה קאמיק',
    type:'benzin', typeHe:'בנזין', cat:'suv', catHe:'קרוסאובר קומפקטי', seats:5, year:2024,
    priceFrom:144520, monthlyFrom:1450, dpFrom:14900,
    img: D('1pGpZacpTkVE-bRrCb-l3cSdpvDBcC4KB') || IMG.compact,
    specs:{ engine:'1.0T TSI', power:'115 כ"ס', accel:'10.5 שנ׳', trunk:'400 ל׳', fuel:'13.0 קמ"ל', maxSpeed:'185 קמ"ש' },
    hi:['Simply Clever','מסך 9.2″','6 כריות אוויר','קל לנהיגה עירונית'],
    variants:[
      { name:'FL Selection 1.0', eng:'בנזין 1.0T', price:144520, m50:1757, m60:1450, fee:1000, dp:14900, colors:'לבן, שחור, כסף, אפור' }
    ]},
  { id:'skoda-octavia', make:'Škoda', model:'Octavia', nameHe:'סקודה אוקטביה',
    type:'benzin', typeHe:'בנזין', cat:'sedan', catHe:'סדאן', seats:5, year:2024,
    priceFrom:167316, monthlyFrom:1695, dpFrom:15900,
    img: D('1PTKBDtln1RtSN4xWp8LwYm_HPwIZHm5L') || IMG.sedan,
    specs:{ engine:'1.5T TSI', power:'150 כ"ס', accel:'8.6 שנ׳', trunk:'600 ל׳', fuel:'13.0 קמ"ל', maxSpeed:'220 קמ"ש' },
    hi:['600 ל׳ תא מטען','מסך 10.0″','6 כריות אוויר','Simply Clever'],
    variants:[
      { name:'FL Selection 1.5', eng:'בנזין 1.5T', price:167316, m50:2035, m60:1695, fee:1000, dp:15900, colors:'לבן, שחור, כסף, אפור' }
    ]},

  // ═══ KGM ═══
  { id:'kgm-rexton', make:'KGM', model:'Rexton', nameHe:'קיי.ג׳י.אם רקסטון',
    type:'diesel', typeHe:'דיזל', cat:'suv', catHe:'SUV גדול 7 מושבים', seats:7, year:2024,
    priceFrom:222712, monthlyFrom:2289, dpFrom:14900,
    img: D('1-ZNTuZw8TnbhUFrv_3cAdYgBmuQIUdw1') || IMG.suv,
    specs:{ engine:'2.2L Diesel', power:'181 כ"ס', accel:'10.5 שנ׳', trunk:'820 ל׳ (5 מושבים)', fuel:'10.5 קמ"ל', maxSpeed:'180 קמ"ש' },
    hi:['7 מושבים','AWD מלא','מסך 12.3″','820 ל׳ תא מטען'],
    variants:[
      { name:'Rexton EX 2.2 Diesel', eng:'דיזל 2.2', price:222712, m50:2708, m60:2289, fee:2000, dp:14900, colors:'לבן, שחור', seats:7 }
    ]},

  // ═══ AVATR ═══
  { id:'avatr-11', make:'Avatr', model:'11', nameHe:'אווטר 11',
    type:'electric', typeHe:'חשמלי', cat:'suv', catHe:'SUV פרמיום', seats:5, year:2024,
    priceFrom:293706, monthlyFrom:3050, dpFrom:9900,
    img: D('14v_XwL1uZl-oYaJ5IW0ct7lUsFD8Y4Gy') || IMG.ev,
    specs:{ battery:'90 קוט"ש', range:'600+ ק"מ', power:'578 כ"ס (Dual Motor)', accel:'3.98 שנ׳', trunk:'490 ל׳', maxSpeed:'200 קמ"ש' },
    hi:['Huawei Smart Tech','600+ ק"מ טווח','0-100 ב-3.98 שנ׳','Lidar מובנה'],
    variants:[
      { name:'Ultra RWD', eng:'חשמלי RWD', price:293706, m50:3571, m60:3050, fee:2000, dp:9900, colors:'שחור, לבן, אפור', notes:'1 ברשות' }
    ]},

  // ═══ NISSAN ═══
  { id:'nissan-juke', make:'Nissan', model:'Juke', nameHe:"ניסאן ג'וק",
    type:'hybrid', typeHe:'היברידי', cat:'suv', catHe:'קרוסאובר קומפקטי', seats:5, year:2024,
    priceFrom:163020, monthlyFrom:1649, dpFrom:14900,
    img: D('19io1cMbTiIPlRCyFWUf_Wtz3_K8of-NR') || IMG.compact,
    specs:{ engine:'1.0T Hybrid', power:'143 כ"ס מערכת', accel:'9.0 שנ׳', trunk:'422 ל׳', fuel:'17.5 קמ"ל', maxSpeed:'175 קמ"ש' },
    hi:['היברידי יעיל','עיצוב ייחודי','מסך 8.0″','6 כריות אוויר'],
    variants:[
      { name:'Acenta Tech 1.6 Hybrid', eng:'Hybrid 1.0T', price:163020, m50:1982, m60:1649, fee:1000, dp:14900, colors:'צבע מטאלי' }
    ]},
  { id:'nissan-qashqai', make:'Nissan', model:'Qashqai', nameHe:'ניסאן קשקאי',
    type:'hybrid', typeHe:'מיילד היברידי', cat:'suv', catHe:'SUV בינוני', seats:5, year:2024,
    priceFrom:183874, salePrice:183874, monthlyFrom:1890, dpFrom:0,
    img: IMG.suv,
    specs:{ engine:'1.3T Mild Hybrid', power:'158 כ"ס', accel:'9.0 שנ׳', trunk:'504 ל׳', fuel:'13.5 קמ"ל', maxSpeed:'190 קמ"ש' },
    hi:['ProPILOT נהיגה חצי-אוטונומית','מסך 12.3″','360° מצלמה','8 כריות אוויר'],
    variants:[
      { name:'Acenta Mild Hybrid', eng:'MHybrid 1.3T', price:183874, m50:2236, m60:1890, fee:7000, dp:0, colors:'לבן, שחור', notes:'מחיר מימון ישיר 189,000' }
    ]},

  // ═══ SEAT ═══
  { id:'seat-arona', make:'SEAT', model:'Arona', nameHe:'סיאט ארונה',
    type:'benzin', typeHe:'בנזין', cat:'suv', catHe:'קרוסאובר קומפקטי', seats:5, year:2024,
    priceFrom:134607, monthlyFrom:1344, dpFrom:9900,
    img: IMG.compact,
    specs:{ engine:'1.0T TSI', power:'115 כ"ס', accel:'10.5 שנ׳', trunk:'400 ל׳', fuel:'13.0 קמ"ל', maxSpeed:'185 קמ"ש' },
    hi:['עיצוב ספרדי','מסך 9.2″','6 כריות אוויר','Connectivity Plus'],
    variants:[
      { name:'Style 1.0T', eng:'בנזין 1.0T', price:134607, m50:1637, m60:1344, fee:1000, dp:9900, colors:'לבן' }
    ]},

  // ═══ CITROËN ═══
  { id:'citroen-berlingo', make:'Citroën', model:'Berlingo', nameHe:'סיטרואן ברלינגו',
    type:'diesel', typeHe:'דיזל', cat:'minivan', catHe:'מיניוואן', seats:5, year:2024,
    priceFrom:179384, monthlyFrom:1827, dpFrom:15900,
    img: D('1zl17AWHVllkNWWUvHM1n1Iiq02phoAcI') || IMG.suv,
    specs:{ engine:'1.5L BlueHDi Diesel', power:'130 כ"ס', accel:'11.0 שנ׳', trunk:'775 ל׳', fuel:'16.0 קמ"ל', maxSpeed:'185 קמ"ש' },
    hi:['775 ל׳ תא מטען','גג פנורמי','מסך 10.0″','נוחות משפחתית'],
    variants:[
      { name:'Shine Pack 1.5 Diesel', eng:'דיזל 1.5 BlueHDi', price:179384, m50:2181, m60:1827, fee:1000, dp:15900, colors:'לבן' }
    ]},

  // ═══ OMODA ═══
  { id:'omoda-7', make:'Omoda', model:'7', nameHe:'אומודה 7',
    type:'phev', typeHe:'פלאג-אין היברידי', cat:'suv', catHe:'SUV בינוני', seats:5, year:2024,
    priceFrom:192622, monthlyFrom:1990, dpFrom:14900,
    img: D('1JJu52X65dQOVa8O1zTZBd1Av8HPcf2_t') || IMG.suv,
    specs:{ engine:'1.5T PHEV', eRange:'100 ק"מ חשמלי', power:'326 כ"ס מערכת', accel:'6.8 שנ׳', trunk:'420 ל׳', fuel:'5.2 ל׳/100' },
    hi:['100 ק"מ בחשמל','עיצוב ספורטיבי','מסך 14.6″','ADAS מתקדם'],
    variants:[
      { name:'PHEV Harmony', eng:'PHEV 1.5T', price:192622, m50:2342, m60:1990, fee:1000, dp:14900, colors:'לבן, שחור' }
    ]},

  // ═══ CHEVROLET ═══
  { id:'chevrolet-silverado-ev', make:'Chevrolet', model:'Silverado EV', nameHe:'שברולט סילברדו EV',
    type:'electric', typeHe:'חשמלי', cat:'pickup', catHe:'פיקאפ חשמלי', seats:5, year:2024,
    priceFrom:320000, monthlyFrom:2138, dpFrom:24900,
    img: D('1qZXY8QskfqjyW--cLZ91UP_s1okvvWal') || IMG.pickup,
    specs:{ battery:'200 קוט"ש', range:'640 ק"מ', power:'664 כ"ס (WT)', accel:'4.5 שנ׳', payload:'1800 ק"ג', towing:'10,000 ק"ג' },
    hi:['640 ק"מ טווח','טעינה 19.2kW AC','Multi-Flex Midgate','Super Cruise'],
    notes:'מחיר לא כולל מע"מ',
    variants:[
      { name:'8WT', eng:'חשמלי', price:320000, m50:3891, m60:2138, fee:3000, dp:24900, colors:'אפור בטון, לבן' },
      { name:'LT', eng:'חשמלי', price:325000, m50:3952, m60:2405, fee:3000, dp:24900, colors:'לבן, שחור, אפור בטון' },
      { name:'LT Plus', eng:'חשמלי', price:335000, m50:4074, m60:2405, fee:3000, dp:24900, colors:'לבן, שחור, אפור בטון' },
      { name:'LT Premium', eng:'חשמלי', price:345000, m50:4195, m60:2791, fee:3000, dp:24900, colors:'לבן, אפור בטון, שחור' },
      { name:'Trail Boss', eng:'חשמלי', price:410000, m50:4100, m60:3460, fee:4000, dp:24900, colors:'שחור', salePrice:504000 }
    ]},

  // ═══ GMC ═══
  { id:'gmc-sierra-ev', make:'GMC', model:'Sierra EV', nameHe:"ג'י.אם.סי סיירה EV",
    type:'electric', typeHe:'חשמלי', cat:'pickup', catHe:'פיקאפ חשמלי פרמיום', seats:5, year:2024,
    priceFrom:410000, salePrice:410000, monthlyFrom:3710, dpFrom:24900,
    img: D('1nZFDcNl24MXdJFC5CHxDDUKym0cyCX-l') || IMG.pickup,
    specs:{ battery:'200 קוט"ש', range:'600 ק"מ', power:'835 כ"ס (Denali)', accel:'4.5 שנ׳', payload:'1800 ק"ג', towing:'10,000 ק"ג' },
    hi:['Ultra Cruise','MultiPro Tailgate','Air Suspension','Super Cruise'],
    notes:'מחיר לא כולל מע"מ',
    variants:[
      { name:'AT4', eng:'חשמלי', price:483800, salePrice:410000, m50:4490, m60:3710, fee:3000, dp:24900 },
      { name:'Denali', eng:'חשמלי', price:483800, salePrice:420000, m50:4690, m60:3710, fee:3000, dp:24900, colors:'—' }
    ]},

  // ═══ BMW ═══
  { id:'bmw-x1', make:'BMW', model:'X1', nameHe:'ב.מ.וו X1',
    type:'benzin', typeHe:'בנזין', cat:'suv', catHe:'SUV קומפקטי פרמיום', seats:5, year:2024,
    priceFrom:299900, salePrice:299900, monthlyFrom:2890, dpFrom:6900,
    img: IMG.bmw,
    specs:{ engine:'2.0T TwinPower', power:'204 כ"ס', accel:'7.4 שנ׳', trunk:'540 ל׳', fuel:'7.8 ל׳/100', maxSpeed:'230 קמ"ש (מוגבל)' },
    hi:['BMW iDrive 8','מסך 10.25″','5 כוכבי EuroNCAP','M אביזרי ספורט'],
    variants:[
      { name:'M Design 2.0T', eng:'בנזין 2.0T', price:325000, salePrice:299900, m50:3952, m60:2890, fee:7000, dp:6900, colors:'לבן' },
      { name:'M Sport 2.0T', eng:'בנזין 2.0T', price:335000, salePrice:309900, m50:4074, m60:3100, fee:7000, dp:6900, colors:'לבן, שחור' }
    ]},
  { id:'bmw-ix1', make:'BMW', model:'iX1', nameHe:'ב.מ.וו iX1',
    type:'electric', typeHe:'חשמלי', cat:'suv', catHe:'SUV קומפקטי חשמלי פרמיום', seats:5, year:2025,
    priceFrom:320000, salePrice:320000, monthlyFrom:2990, dpFrom:0,
    img: IMG.bmw,
    specs:{ battery:'66.5 קוט"ש', range:'440 ק"מ', power:'313 כ"ס', accel:'5.6 שנ׳', trunk:'490 ל׳', maxSpeed:'180 קמ"ש' },
    hi:['BMW iDrive 8','440 ק"מ טווח','xDrive חשמלי','BMW Curved Display'],
    variants:[
      { name:'X-LINE / M-SPORT 2025', eng:'חשמלי xDrive', price:375000, salePrice:320000, m50:3590, m60:2990, fee:10000, dp:0, colors:'לבן' }
    ]},
  { id:'bmw-x2', make:'BMW', model:'X2', nameHe:'ב.מ.וו X2',
    type:'benzin', typeHe:'בנזין', cat:'suv', catHe:'קרוסאובר קופה פרמיום', seats:5, year:2024,
    priceFrom:330000, monthlyFrom:3290, dpFrom:9900,
    img: IMG.bmw,
    specs:{ engine:'2.0T TwinPower', power:'204 כ"ס', accel:'7.3 שנ׳', trunk:'560 ל׳', fuel:'7.5 ל׳/100', maxSpeed:'230 קמ"ש (מוגבל)' },
    hi:['BMW Curved Display','M Sport חבילה','xDrive AWD','5 כוכבי EuroNCAP'],
    variants:[
      { name:'Style 2.0T', eng:'בנזין 2.0T', price:330000, m50:4013, m60:3290, fee:10000, dp:9900, colors:'לבן, אפור' }
    ]},
  { id:'bmw-x4', make:'BMW', model:'X4', nameHe:'ב.מ.וו X4',
    type:'benzin', typeHe:'בנזין', cat:'suv', catHe:'SUV קופה פרמיום', seats:5, year:2024,
    priceFrom:469000, salePrice:469000, monthlyFrom:4790, dpFrom:0,
    img: IMG.bmw,
    specs:{ engine:'2.0T TwinPower', power:'245 כ"ס', accel:'6.3 שנ׳', trunk:'525 ל׳', fuel:'8.0 ל׳/100', maxSpeed:'240 קמ"ש (מוגבל)' },
    hi:['BMW iDrive 8','M Sport Package','xDrive AWD','BMW Curved Display'],
    variants:[
      { name:'20i M-Sport xDrive', eng:'בנזין 2.0T', price:477000, salePrice:469000, m50:5800, m60:4790, fee:15000, dp:0, colors:'לבן, שחור, אפור חלל' }
    ]},
  { id:'bmw-x5', make:'BMW', model:'X5', nameHe:'ב.מ.וו X5',
    type:'diesel', typeHe:'דיזל', cat:'suv', catHe:'SUV גדול פרמיום', seats:5, year:2024,
    priceFrom:711000, monthlyFrom:7398, dpFrom:0,
    img: IMG.bmw,
    specs:{ engine:'3.0L Diesel TwinPower', power:'286 כ"ס', accel:'6.0 שנ׳', trunk:'650 ל׳', fuel:'10.0 קמ"ל', maxSpeed:'240 קמ"ש (מוגבל)' },
    hi:['BMW iDrive 8','xDrive AWD','Panoramic Sky Lounge','Air Suspension'],
    variants:[
      { name:'30d xDrive M Sport', eng:'דיזל 3.0', price:711000, m50:8646, m60:7398, fee:7000, dp:0, colors:'לבן, שחור בטון' }
    ]},
  { id:'bmw-216', make:'BMW', model:'216 Gran Coupé', nameHe:'ב.מ.וו 216',
    type:'benzin', typeHe:'בנזין', cat:'sedan', catHe:'סדאן קופה פרמיום', seats:5, year:2024,
    priceFrom:289900, salePrice:289900, monthlyFrom:2795, dpFrom:0,
    img: IMG.bmw,
    specs:{ engine:'1.5T TwinPower 3-שסתומים', power:'156 כ"ס', accel:'8.4 שנ׳', trunk:'430 ל׳', fuel:'8.0 ל׳/100', maxSpeed:'230 קמ"ש (מוגבל)' },
    hi:['4 דלתות Gran Coupé','BMW iDrive 8','M Design','Digital Cockpit'],
    variants:[
      { name:'Grande Coupé M Design', eng:'בנזין 1.5T', price:289900, salePrice:289900, m50:3525, m60:2795, fee:10000, dp:0, colors:'לבן, שחור' }
    ]},
  { id:'bmw-530e', make:'BMW', model:'530e', nameHe:'ב.מ.וו 530e',
    type:'phev', typeHe:'פלאג-אין היברידי', cat:'sedan', catHe:'סדאן פרמיום', seats:5, year:2024,
    priceFrom:525000, monthlyFrom:5531, dpFrom:9900,
    img: IMG.bmw,
    specs:{ engine:'2.0T PHEV + חשמלי', eRange:'60 ק"מ חשמלי', power:'299 כ"ס מערכת', accel:'5.6 שנ׳', trunk:'410 ל׳', fuel:'1.4 ל׳/100' },
    hi:['60 ק"מ בחשמל','BMW Curved Display 14.9″','xDrive זמין','M Sport חבילה'],
    variants:[
      { name:'M Sport 530e', eng:'PHEV 2.0T', price:525000, m50:6384, m60:5531, fee:5000, dp:9900, colors:'לבן, שחור, אפור בטון, לבן פנינה' },
      { name:'M Expressive 530e', eng:'PHEV 2.0T', price:570000, m50:6931, m60:6014, fee:5000, dp:0, colors:'לבן פנינה, אפור בטון' }
    ]},
  { id:'bmw-420i', make:'BMW', model:'420i', nameHe:'ב.מ.וו 420i',
    type:'benzin', typeHe:'בנזין', cat:'coupe', catHe:'קופה פרמיום', seats:4, year:2024,
    priceFrom:399000, salePrice:399000, monthlyFrom:3982, dpFrom:0,
    img: IMG.bmw,
    specs:{ engine:'2.0T TwinPower', power:'184 כ"ס', accel:'7.2 שנ׳', trunk:'385 ל׳', fuel:'7.7 ל׳/100', maxSpeed:'240 קמ"ש (מוגבל)' },
    hi:['4 סדרה קופה','BMW Curved Display','M Sport Package','5 כוכבי EuroNCAP'],
    variants:[
      { name:'Style 420i Coupé', eng:'בנזין 2.0T', price:422000, salePrice:399000, m50:5131, m60:3982, fee:8000, dp:0, colors:'אפור Skyscraper, לבן, שחור', seats:4 }
    ]},

  // ═══ MAZDA ═══
  { id:'mazda-cx5', make:'Mazda', model:'CX-5', nameHe:'מאזדה CX-5',
    type:'benzin', typeHe:'בנזין', cat:'suv', catHe:'SUV בינוני', seats:5, year:2024,
    priceFrom:197000, monthlyFrom:2013, dpFrom:9900,
    img: IMG.suv,
    specs:{ engine:'2.5L SkyActiv-G', power:'194 כ"ס', accel:'8.0 שנ׳', trunk:'442 ל׳', fuel:'11.0 קמ"ל', maxSpeed:'200 קמ"ש' },
    hi:['עיצוב Kodo יוקרתי','מסך 10.25″','i-Activsense ADAS','7 כריות אוויר'],
    variants:[
      { name:'Executive 2.5', eng:'בנזין 2.5', price:197000, m50:2396, m60:2013, fee:1000, dp:9900, colors:'לבן, שחור' }
    ]},

  // ═══ ZEEKR ═══
  { id:'zeekr-x', make:'ZEEKR', model:'X', nameHe:'זיקר X',
    type:'electric', typeHe:'חשמלי', cat:'suv', catHe:'קרוסאובר חשמלי', seats:5, year:2024,
    priceFrom:189384, monthlyFrom:1931, dpFrom:9900,
    img: IMG.ev,
    specs:{ battery:'66 קוט"ש', range:'440 ק"מ', power:'272 כ"ס', accel:'5.6 שנ׳', trunk:'362 ל׳', maxSpeed:'180 קמ"ש' },
    hi:['440 ק"מ טווח','Flyme Auto','Zeekr Care','800V חשמל מהיר'],
    variants:[
      { name:'Beyond', eng:'חשמלי AWD', price:189384, m50:2303, m60:1931, fee:1500, dp:9900, colors:'לבן, אפור, בז׳' }
    ]},
  { id:'zeekr-001', make:'ZEEKR', model:'001', nameHe:'זיקר 001',
    type:'electric', typeHe:'חשמלי', cat:'sedan', catHe:'לייפטבק חשמלי', seats:5, year:2024,
    priceFrom:294000, monthlyFrom:3054, dpFrom:9900,
    img: IMG.ev,
    specs:{ battery:'100 קוט"ש', range:'750 ק"מ (LR)', power:'544 כ"ס', accel:'3.8 שנ׳', trunk:'476 ל׳', maxSpeed:'200 קמ"ש' },
    hi:['750 ק"מ טווח (LR)','0-100 ב-3.8 שנ׳','800V טעינה מהירה','ריפוד Nappa'],
    variants:[
      { name:'Long Range', eng:'חשמלי RWD', price:294000, m50:3575, m60:3054, fee:1500, dp:9900, colors:'שחור, לבן' },
      { name:'Krypton', eng:'חשמלי AWD', price:355000, m50:4317, m60:3708, fee:1500, dp:9900, colors:'לבן' }
    ]},
  { id:'zeekr-7x', make:'ZEEKR', model:'7X', nameHe:'זיקר 7X',
    type:'electric', typeHe:'חשמלי', cat:'suv', catHe:'SUV חשמלי', seats:5, year:2024,
    priceFrom:237000, monthlyFrom:2442, dpFrom:14900,
    img: IMG.ev,
    specs:{ battery:'100 קוט"ש', range:'600+ ק"מ', power:'476 כ"ס (AWD)', accel:'3.8 שנ׳', trunk:'616 ל׳', maxSpeed:'200 קמ"ש' },
    hi:['600+ ק"מ טווח','0-100 ב-3.8 שנ׳','616 ל׳ תא מטען','800V טעינה מהירה'],
    variants:[
      { name:'Essence', eng:'חשמלי RWD', price:237000, m50:2882, m60:2442, fee:1500, dp:14900, colors:'לבן, אפור' },
      { name:'Long Range', eng:'חשמלי AWD', price:265000, m50:3222, m60:2742, fee:1500, dp:14900, colors:'שחור, לבן, אפור' },
      { name:'Krypton', eng:'חשמלי AWD', price:294000, m50:3575, m60:3054, fee:1500, dp:14900, colors:'לבן' }
    ]},

  // ═══ SUBARU ═══
  { id:'subaru-crosstrek', make:'Subaru', model:'Crosstrek', nameHe:'סובארו קרוסטרק',
    type:'benzin', typeHe:'בנזין + AWD', cat:'suv', catHe:'קרוסאובר AWD', seats:5, year:2024,
    priceFrom:179294, monthlyFrom:1823, dpFrom:9900,
    img: IMG.suv,
    specs:{ engine:'2.0L Boxer', power:'154 כ"ס', accel:'9.8 שנ׳', trunk:'385 ל׳', fuel:'11.5 קמ"ל', maxSpeed:'180 קמ"ש' },
    hi:['Symmetrical AWD קבוע','X-Mode שטח','EyeSight ADAS','כושר מעבר גבוה'],
    variants:[
      { name:'Crosstrek Luxury', eng:'בנזין 2.0 Boxer', price:179294, m50:2180, m60:1823, fee:1500, dp:9900, colors:'לבן, שחור' }
    ]},

  // ═══ MERCEDES ═══
  { id:'mercedes-gla200', make:'Mercedes', model:'GLA 200', nameHe:'מרצדס GLA 200',
    type:'benzin', typeHe:'בנזין', cat:'suv', catHe:'SUV קומפקטי פרמיום', seats:5, year:2024,
    priceFrom:365000, monthlyFrom:3699, dpFrom:0,
    img: 'https://images.unsplash.com/photo-1570733577524-3a047079e80d?auto=format&fit=crop&w=900&q=85',
    specs:{ engine:'1.3T M282', power:'163 כ"ס', accel:'8.7 שנ׳', trunk:'435 ל׳', fuel:'7.5 ל׳/100', maxSpeed:'230 קמ"ש (מוגבל)' },
    hi:['MBUX Voice Assistant','מסך 10.25″ + 10.25″','AMG Line זמין','5 כוכבי EuroNCAP'],
    variants:[
      { name:'GLA 200 ICON', eng:'בנזין 1.3T', price:365000, salePrice:385000, m50:4438, m60:3699, fee:7000, dp:0, colors:'לבן, שחור' }
    ]},
  { id:'mercedes-glc200', make:'Mercedes', model:'GLC 200', nameHe:'מרצדס GLC 200',
    type:'benzin', typeHe:'בנזין', cat:'suv', catHe:'SUV בינוני פרמיום', seats:5, year:2024,
    priceFrom:479000, salePrice:479000, monthlyFrom:4806, dpFrom:0,
    img: 'https://images.unsplash.com/photo-1616788494672-ec7ca25fdda9?auto=format&fit=crop&w=900&q=85',
    specs:{ engine:'2.0T M254', power:'204 כ"ס', accel:'7.5 שנ׳', trunk:'575 ל׳', fuel:'7.8 ל׳/100', maxSpeed:'234 קמ"ש (מוגבל)' },
    hi:['MBUX Superscreen','4MATIC AWD זמין','AMG Line','5 כוכבי EuroNCAP'],
    notes:'אספקה יוני-יולי',
    variants:[
      { name:'Coupe Sport 2.0T', eng:'בנזין 2.0T', price:506000, salePrice:479000, m50:6153, m60:4806, fee:10000, dp:0, colors:'—' }
    ]},
  { id:'mercedes-glc300-coupe', make:'Mercedes', model:'GLC 300 Coupé', nameHe:'מרצדס GLC 300 קופה',
    type:'benzin', typeHe:'בנזין', cat:'suv', catHe:'SUV קופה פרמיום', seats:5, year:2024,
    priceFrom:559000, monthlyFrom:5724, dpFrom:0,
    img: 'https://images.unsplash.com/photo-1553440569-bcc63803a83d?auto=format&fit=crop&w=900&q=85',
    specs:{ engine:'2.0T M254', power:'258 כ"ס', accel:'6.4 שנ׳', trunk:'510 ל׳', fuel:'8.5 ל׳/100', maxSpeed:'240 קמ"ש (מוגבל)' },
    hi:['AMG Line','MBUX 12.3″ Dual','4MATIC xDrive','Burmester Audio'],
    variants:[
      { name:'Coupé AMG Line', eng:'בנזין 2.0T', price:559000, m50:6797, m60:5724, fee:10000, dp:0, colors:'שחור - ריפוד בז׳' }
    ]},
  { id:'mercedes-cla200', make:'Mercedes', model:'CLA 200', nameHe:'מרצדס CLA 200',
    type:'benzin', typeHe:'בנזין', cat:'sedan', catHe:'סדאן קופה פרמיום', seats:5, year:2024,
    priceFrom:409900, salePrice:409900, monthlyFrom:3999, dpFrom:0,
    img: 'https://images.unsplash.com/photo-1618843479313-40f8afb4b4d8?auto=format&fit=crop&w=900&q=85',
    specs:{ engine:'1.3T M282', power:'163 כ"ס', accel:'8.2 שנ׳', trunk:'460 ל׳', fuel:'7.2 ל׳/100', maxSpeed:'234 קמ"ש (מוגבל)' },
    hi:['MBUX Superscreen 14.4″','AMG Line','Signature Edition','5 כוכבי EuroNCAP'],
    notes:'יד 2 ע"ש הלקוח',
    variants:[
      { name:'CLA 200 Signature AMG Line', eng:'בנזין 1.3T', price:425000, salePrice:409900, m50:5168, m60:3999, fee:15000, dp:0, colors:'שחור, לבן, כסוף מטאלי' }
    ]},

  // ═══ SMART ═══
  { id:'smart-5', make:'Smart', model:'#5', nameHe:'סמארט #5',
    type:'electric', typeHe:'חשמלי', cat:'suv', catHe:'SUV חשמלי', seats:5, year:2024,
    priceFrom:232712, monthlyFrom:2396, dpFrom:9900,
    img: IMG.ev,
    specs:{ battery:'100 קוט"ש', range:'500+ ק"מ', power:'340-585 כ"ס', accel:'3.7 שנ׳ (BRABUS)', trunk:'490 ל׳', maxSpeed:'200 קמ"ש' },
    hi:['BRABUS Edition זמין','OTA Updates','מסך 13.0″','8295 Snapdragon'],
    variants:[
      { name:'PRO', eng:'חשמלי RWD', price:232712, m50:2830, m60:2396, fee:1000, dp:9900 },
      { name:'PRO+', eng:'חשמלי AWD', price:263796, m50:3208, m60:2730, fee:1000, dp:9900 },
      { name:'PREMIUM', eng:'חשמלי AWD', price:283796, m50:3451, m60:2944, fee:1000, dp:9900 },
      { name:'BRABUS', eng:'חשמלי AWD', price:303796, m50:3694, m60:3159, fee:1000, dp:9900 }
    ]},

  // ═══ VOYA ═══
  { id:'voya-free', make:'VOYA', model:'Free', nameHe:'וויה פרי',
    type:'electric', typeHe:'חשמלי', cat:'suv', catHe:'SUV פרמיום', seats:5, year:2025,
    priceFrom:325000, salePrice:325000, monthlyFrom:2741, dpFrom:6900,
    img: IMG.ev,
    specs:{ battery:'120 קוט"ש', range:'620 ק"מ', power:'476 כ"ס', accel:'4.5 שנ׳', trunk:'550 ל׳', maxSpeed:'210 קמ"ש' },
    hi:['620 ק"מ טווח','מסירה מיידית','AWD מלא','מסך 15.6″'],
    notes:'מסירה מיידית',
    variants:[
      { name:'FREE EV', eng:'חשמלי AWD', price:400000, salePrice:325000, m50:4864, m60:2741, fee:8000, dp:6900, colors:'לבן, שחור, תכלת, ירוק', notes:'רישוי 25' }
    ]},

  // ═══ SKYWELL ═══
  { id:'skywell-progt', make:'SKYWELL', model:'PRO GT', nameHe:'סקיוואל PRO GT',
    type:'electric', typeHe:'חשמלי', cat:'suv', catHe:'SUV חשמלי', seats:5, year:2025,
    priceFrom:194900, salePrice:194900, monthlyFrom:1990, dpFrom:0,
    img: IMG.ev,
    specs:{ battery:'80 קוט"ש', range:'480 ק"מ', power:'218 כ"ס', accel:'7.5 שנ׳', trunk:'465 ל׳', maxSpeed:'170 קמ"ש' },
    hi:['480 ק"מ טווח','זמין במלאי','מסך 14.6″','ADAS מלא'],
    notes:'זמין במלאי',
    variants:[
      { name:'PRO GT 2025', eng:'חשמלי RWD', price:195000, salePrice:194900, m50:2724, m60:1990, fee:8000, dp:0, colors:'לבן, כחול כהה, שחור' }
    ]},

  // ═══ DONGFENG ═══
  { id:'dongfeng-box', make:'Dongfeng', model:'Box', nameHe:'דונפנג בוקס',
    type:'electric', typeHe:'חשמלי', cat:'hatchback', catHe:'האצ׳בק עירוני', seats:5, year:2025,
    priceFrom:117900, monthlyFrom:1290, dpFrom:4900,
    img: IMG.ev,
    specs:{ battery:'42.3 קוט"ש', range:'310 ק"מ', power:'95 כ"ס', accel:'11.0 שנ׳', trunk:'228 ל׳', maxSpeed:'140 קמ"ש' },
    hi:['רכב עירוני חסכוני','310 ק"מ טווח','מסך 10.25″','קל לחנייה'],
    variants:[
      { name:'S31 2025', eng:'חשמלי BEV', price:117900, m50:1427, m60:1290, fee:5000, dp:4900, colors:'לבן, כסף, כחול גג לבן', notes:'רישוי 25' }
    ]},

  // ═══ AUDI ═══
  { id:'audi-q3-sportback', make:'Audi', model:'Q3 Sportback 35 TFSI', nameHe:'אאודי Q3 ספורטבק',
    type:'benzin', typeHe:'בנזין', cat:'suv', catHe:'SUV קופה פרמיום', seats:5, year:2024,
    priceFrom:345000, monthlyFrom:3490, dpFrom:4000,
    img: D('1qJk-yxQRhtM7j0SBMcLfENDYkWMOi0Bu') || IMG.bmw,
    specs:{ engine:'1.5T TFSI', power:'150 כ"ס', accel:'9.2 שנ׳', trunk:'530 ל׳', fuel:'7.5 ל׳/100', maxSpeed:'224 קמ"ש' },
    hi:['Virtual Cockpit Plus','Audi MMI Plus','S-Line חבילה זמינה','5 כוכבי EuroNCAP'],
    variants:[
      { name:'Q3 SB 35 TFSI Design', eng:'בנזין 1.5T', price:345000, m50:4195, m60:3490, fee:4000, dp:4000, colors:'לבן, שחור' }
    ]},
  { id:'audi-a3-sportback', make:'Audi', model:'A3 Sportback S-LINE', nameHe:'אאודי A3 ספורטבק',
    type:'benzin', typeHe:'בנזין', cat:'hatchback', catHe:'האצ׳בק פרמיום', seats:5, year:2024,
    priceFrom:279900, salePrice:279900, monthlyFrom:2999, dpFrom:9900,
    img: D('1NO0-sJLKgX9v2EHsJWr6hSURJlmQSgTp') || IMG.bmw,
    specs:{ engine:'2.0T TFSI', power:'150 כ"ס', accel:'7.9 שנ׳', trunk:'380 ל׳', fuel:'7.5 ל׳/100', maxSpeed:'229 קמ"ש' },
    hi:['Virtual Cockpit Plus','S-LINE חבילת לוקשרי','Audi Pre Sense','6 כריות אוויר'],
    variants:[
      { name:'A3 Sportback S-LINE LUX', eng:'בנזין 2.0T', price:290000, salePrice:279900, m50:3526, m60:2999, fee:7000, dp:9900, colors:'לבן, אפור, שחור' }
    ]},
  { id:'audi-a3-sedan', make:'Audi', model:'A3 Sedan S-LINE', nameHe:'אאודי A3 סדאן',
    type:'benzin', typeHe:'בנזין', cat:'sedan', catHe:'סדאן פרמיום', seats:5, year:2024,
    priceFrom:279900, salePrice:279900, monthlyFrom:2999, dpFrom:9900,
    img: D('1NO0-sJLKgX9v2EHsJWr6hSURJlmQSgTp') || IMG.bmw,
    specs:{ engine:'2.0T TFSI', power:'150 כ"ס', accel:'7.9 שנ׳', trunk:'425 ל׳', fuel:'7.5 ל׳/100', maxSpeed:'229 קמ"ש' },
    hi:['Virtual Cockpit Plus','S-LINE חבילת לוקשרי','Audi Pre Sense','סדאן אלגנטי'],
    variants:[
      { name:'A3 Sedan S-LINE LUX', eng:'בנזין 2.0T', price:290000, salePrice:279900, m50:3526, m60:2999, fee:7000, dp:9900, colors:'לבן, אפור, שחור' }
    ]}
];

