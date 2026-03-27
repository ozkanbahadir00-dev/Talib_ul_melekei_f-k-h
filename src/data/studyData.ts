export type CardMode = 'question' | 'term';

export type RevealMode = 'toggle' | 'always-visible';

export interface StudyCard {
  id: string;
  mode: CardMode;
  badge: 'SORU' | 'TERIM';
  shown: string;
  answer: string;
  reveal: RevealMode;
  original: {
    sourceLeft: string;
    sourceRight: string;
    sourceType: 'question' | 'plain';
  };
}

// question: question shown + answer always visible | term: definition shown + term hidden
// original fields are preserved to avoid losing legacy source data
export const studyCards: StudyCard[] = [
  {
    "id": "card-1",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Bir kimseye bir eşya üzerinde doğrudan doğruya hâkimiyet sağlayan ve herkese karşı ileri sürülebilen haktır.",
    "answer": "Aynî Hak",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Aynî Hak",
      "sourceRight": "Bir kimseye bir eşya üzerinde doğrudan doğruya hâkimiyet sağlayan ve herkese karşı ileri sürülebilen haktır.",
      "sourceType": "plain"
    }
  },
  {
    "id": "card-2",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Yalnız belirli bir kişiden, yani şahıstan talep edilebilen haktır. Örneğin para alacağı gibi.",
    "answer": "Şahsî Hak",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Şahsî Hak",
      "sourceRight": "Yalnız belirli bir kişiden, yani şahıstan talep edilebilen haktır. Örneğin para alacağı gibi.",
      "sourceType": "plain"
    }
  },
  {
    "id": "card-3",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Rakabesi ve mülkiyeti bir arada bulunmayan haktır. (Örnek: Mükâtep köle)",
    "answer": "Yarı Aynî Hak",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Yarı Aynî Hak",
      "sourceRight": "Rakabesi ve mülkiyeti bir arada bulunmayan haktır. (Örnek: Mükâtep köle)",
      "sourceType": "plain"
    }
  },
  {
    "id": "card-4",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Aynî hak; bir şey üzerinde kullanma, yararlanma ve tasarruf etme yetkisi verir. Bu yetkilerden biri kullanılamıyorsa, söz konusu olan hak türü nedir?",
    "answer": "Sınırlı Aynî Hak",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Sınırlı Aynî Hak",
      "sourceRight": "Aynî hak; bir şey üzerinde kullanma, yararlanma ve tasarruf etme yetkisi verir. Bu yetkilerden biri kullanılamıyorsa, söz konusu olan hak türü nedir?",
      "sourceType": "plain"
    }
  },
  {
    "id": "card-5",
    "mode": "question",
    "badge": "SORU",
    "shown": "Allah Hakkının Temel Özellikleri Nedir?",
    "answer": "1) Af, sulh gibi bir yolla ıskatı caiz olmadığı gibi, bunları kaldırmak ve değiştirmek de kural olarak caiz görülmez.\n2) Toplumda bütün fertlerin ve kamu otoritesinin (onları temsil edenlerin) bu hakları koruma, kollama ve kovuşturma hak ve sorumluluğu vardır.",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Allah Hakkının Temel Özellikleri Nedir?",
      "sourceRight": "1) Af, sulh gibi bir yolla ıskatı caiz olmadığı gibi, bunları kaldırmak ve değiştirmek de kural olarak caiz görülmez.\n2) Toplumda bütün fertlerin ve kamu otoritesinin (onları temsil edenlerin) bu hakları koruma, kollama ve kovuşturma hak ve sorumluluğu vardır.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-6",
    "mode": "question",
    "badge": "SORU",
    "shown": "Dinin hükümlerine göre esasen mevcut olduğu halde mahkemede ispat edilemeyen hak türü nedir?",
    "answer": "dini hak",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Dinin hükümlerine göre esasen mevcut olduğu halde mahkemede ispat edilemeyen hak türü nedir?",
      "sourceRight": "dini hak",
      "sourceType": "question"
    }
  },
  {
    "id": "card-7",
    "mode": "question",
    "badge": "SORU",
    "shown": "Dinin hükümlerine göre mevcut olsun veya olmasın mahkemede ispatı mümkün olan hak türü nedir?",
    "answer": "kazai hak",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Dinin hükümlerine göre mevcut olsun veya olmasın mahkemede ispatı mümkün olan hak türü nedir",
      "sourceRight": "kazai hak",
      "sourceType": "question"
    }
  },
  {
    "id": "card-8",
    "mode": "question",
    "badge": "SORU",
    "shown": "Serdivan'da motorla kuryelik yapan Faik yanlışlıkla yola fırlayan gayrimüslim bir vatandaşın (zımminin) taşıdığı paketi ezdi. Paketin içindeki domuz etleri tamamen ziyan oldu. Adam \"Malımı telef ettin, parasını ödeyeceksin\" diye şikayetçi oldu.\nSen kadı olsan nasıl hüküm verirsin?",
    "answer": "Tazmin edeceksin \nNeden?\nÇünkü Hanefi fıkhına göre domuz eti ve şarap bir Müslüman için \"gayri mütekavvim\" (değersiz) olsa da, gayrimüslim (zımmi) için kendi inancında serbest olduğu için \"mütekavvim\" maldır. İslam hukuku onların mallarını koruma altına alır.\nKadı olarak hükmün şu olurdu: \"Bu mal senin için haram olabilir ama adamın kendi dininde hukuki bir değer taşıyor. Malını telef ettin, bedelini ödeyeceksin.\"",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Serdivan'da motorla kuryelik yapan Faik yanlışlıkla yola fırlayan gayrimüslim bir vatandaşın (zımminin) taşıdığı paketi ezdi. Paketin içindeki domuz etleri tamamen ziyan oldu. Adam \"Malımı telef ettin, parasını ödeyeceksin\" diye şikayetçi oldu.\nSen kadı olsan nasıl hüküm verirsin?",
      "sourceRight": "Tazmin edeceksin \nNeden?\nÇünkü Hanefi fıkhına göre domuz eti ve şarap bir Müslüman için \"gayri mütekavvim\" (değersiz) olsa da, gayrimüslim (zımmi) için kendi inancında serbest olduğu için \"mütekavvim\" maldır. İslam hukuku onların mallarını koruma altına alır.\nKadı olarak hükmün şu olurdu: \"Bu mal senin için haram olabilir ama adamın kendi dininde hukuki bir değer taşıyor. Malını telef ettin, bedelini ödeyeceksin.\"",
      "sourceType": "question"
    }
  },
  {
    "id": "card-9",
    "mode": "question",
    "badge": "SORU",
    "shown": "Güneşli bir Sakarya sabahında, kapının önüne her zamanki gibi park ettiğin ve gözün gibi baktığın o arabanın yerinde yeller esiyordu. Bir aylık telaş, karakol tutanakları ve \"Acaba parçaladılar mı?\" endişesiyle geçen günlerin ardından beklenen telefon geldi: \"Aracınız bulundu.\"\nHeyecanla emniyetin otoparkına gittiğinde gözlerine inanamadın. Hırsız, arabayı bir ay boyunca kendi malı gibi kullanmış ama adeta pamuklara sarmıştı. Kaportada tek bir göçük, motorda en ufak bir tekleme yoktu; araba çalındığı o ilk saniyedeki gibi sapağlam, hatta içi dışı pırıl pırıl yıkanmış bir halde karşında duruyordu.\nHaklı bir öfkeyle kadının (hakimin) karşısına çıktın:\n\"Bu şahıs bir ay boyunca benim malımı kendi keyfince kullandı! Gitsin bir araç kiralama şirketine, bir aylık araba kirası ne kadarsa o bedeli bana kuruşu kuruşuna ödesin!\" diyerek hakkını aradın. Siz kadı olsanız durumu nasıl değerlendirirdiniz",
    "answer": "Hayır, gerekmez. Çünkü Hanefi fıkhında menfaat, mütekavvim bir mal olarak kabul edilmez. Bir şeyin mal sayılabilmesi için depolanabilme ve elde tutulabilme (hiyazet/ihraz altına alınma) özelliğine sahip olması gerekir; oysa menfaat, kullanıldıkça tüketilen ve hiyazet altına alınamayan bir 'araz'dır. Bu yüzden tazmini şart değildir.",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Güneşli bir Sakarya sabahında, kapının önüne her zamanki gibi park ettiğin ve gözün gibi baktığın o arabanın yerinde yeller esiyordu. Bir aylık telaş, karakol tutanakları ve \"Acaba parçaladılar mı?\" endişesiyle geçen günlerin ardından beklenen telefon geldi: \"Aracınız bulundu.\"\nHeyecanla emniyetin otoparkına gittiğinde gözlerine inanamadın. Hırsız, arabayı bir ay boyunca kendi malı gibi kullanmış ama adeta pamuklara sarmıştı. Kaportada tek bir göçük, motorda en ufak bir tekleme yoktu; araba çalındığı o ilk saniyedeki gibi sapağlam, hatta içi dışı pırıl pırıl yıkanmış bir halde karşında duruyordu.\nHaklı bir öfkeyle kadının (hakimin) karşısına çıktın:\n\"Bu şahıs bir ay boyunca benim malımı kendi keyfince kullandı! Gitsin bir araç kiralama şirketine, bir aylık araba kirası ne kadarsa o bedeli bana kuruşu kuruşuna ödesin!\" diyerek hakkını aradın. Siz kadı olsanız durmu nasıl değerlendirirdiniz",
      "sourceRight": "Hayır, gerekmez. Çünkü Hanefi fıkhında menfaat, mütekavvim bir mal olarak kabul edilmez. Bir şeyin mal sayılabilmesi için depolanabilme ve elde tutulabilme (hiyazet/ihraz altına alınma) özelliğine sahip olması gerekir; oysa menfaat, kullanıldıkça tüketilen ve hiyazet altına alınamayan bir 'araz'dır. Bu yüzden tazmini şart değildir.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-10",
    "mode": "question",
    "badge": "SORU",
    "shown": "Şam'da ticaretle uğraşan Zeyd'in, son derece sağlıklı ve güçlü bir binek atı vardır. Bir gün komşusu Amr, Zeyd'den habersiz ve izinsiz bir şekilde (gasp yoluyla) bu atı alır ve üç günlük bir kervan yolculuğuna çıkar. Amr, üç gün boyunca atı kendi işleri için kullanır, üzerine yük vurur ve seyahat eder.\nDöndüğünde atı Zeyd'e teslim eder. Atın sağlığı yerindedir, zayıflamamış veya herhangi bir fiziksel zarara uğramamıştır. Ancak Zeyd duruma çok öfkelenir ve kadıya (hakime) başvurur:\n\"Amr benim atımı benden izinsiz aldı ve üç gün kullandı. Eğer bir at kiralasaydı şu kadar dirhem ödeyecekti. Atımın üç günlük kullanım bedelinin (menfaatinin) bana ödenmesini talep ediyorum. Derse tazmin gerekir mi?, siz kadı olsanız durumu nasıl değerlendirirsiniz?",
    "answer": "Tazmin gerekmez. Çünkü atın kendisi (ayn) sapağlam geri getirilmiştir. Hanefilere göre atın üç gün boyunca sağladığı binme faydası (menfaat), depolanabilen veya elde tutulabilen bir \"mal\" değildir; kullanıldıkça tüketilen bir arazdır. Atın fiziksel varlığında bir eksilme veya hasar olmadığı için, sırf bu kullanımından dolayı Amr'ın menfaat tazminatı ödemesi gerekmez.",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Şam'da ticaretle uğraşan Zeyd'in, son derece sağlıklı ve güçlü bir binek atı vardır. Bir gün komşusu Amr, Zeyd'den habersiz ve izinsiz bir şekilde (gasp yoluyla) bu atı alır ve üç günlük bir kervan yolculuğuna çıkar. Amr, üç gün boyunca atı kendi işleri için kullanır, üzerine yük vurur ve seyahat eder.\nDöndüğünde atı Zeyd'e teslim eder. Atın sağlığı yerindedir, zayıflamamış veya herhangi bir fiziksel zarara uğramamıştır. Ancak Zeyd duruma çok öfkelenir ve kadıya (hakime) başvurur:\n\"Amr benim atımı benden izinsiz aldı ve üç gün kullandı. Eğer bir at kiralasaydı şu kadar dirhem ödeyecekti. Atımın üç günlük kullanım bedelinin (menfaatinin) bana ödenmesini talep ediyorum. Derse tazmin gerekir mi?, siz kadı olsanız durumu nasıl değerlendirirsiniz?",
      "sourceRight": "Tazmin gerekmez. Çünkü atın kendisi (ayn) sapağlam geri getirilmiştir. Hanefilere göre atın üç gün boyunca sağladığı binme faydası (menfaat), depolanabilen veya elde tutulabilen bir \"mal\" değildir; kullanıldıkça tüketilen bir arazdır. Atın fiziksel varlığında bir eksilme veya hasar olmadığı için, sırf bu kullanımından dolayı Amr'ın menfaat tazminatı ödemesi gerekmez.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-11",
    "mode": "question",
    "badge": "SORU",
    "shown": "Gece yarısı, dört duvar arasında yankılanan öfkeli bir ses: \"Boş ol, boş ol, boş ol!\" Şahit yok, duyan yok, kameralar kapalı. O odada sadece iki kişi ve her şeyi işiten Allah var. Fakat ertesi gün adam, inatla inkar ediyor: \"Ben böyle bir şey söylemedim!\" Kadın ise duyduğundan emin, çaresizce kadının (hakimin) huzuruna çıkıyor ve gerçeği haykırıyor.\nSen kadı olsan, şahidi olmayan bu kadına mı inanırsın, inkar eden adama mı?",
    "answer": "İslam hukukunda kadı, kalpleri okuyamaz; somut delile ve şahide (zahire) göre karar vermek zorundadır. Ortada şahit olmadığı için kadı adama döner ve \"Böyle bir şey söylemediğine dair yemin et\" der. Adam yalan söyleyip yemin ederse, kadı davayı reddeder. Yani kağıt üzerinde, mahkeme kararıyla evlilik devam eder. Ama Allah katında evlilik zaten sonlanmıştır kadın Adama, adam da kadına haram olmuştur.",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Gece yarısı, dört duvar arasında yankılanan öfkeli bir ses: \"Boşol, boşol, boşol!\" Şahit yok, duyan yok, kameralar kapalı. O odada sadece iki kişi ve her şeyi işiten Allah var. Fakat ertesi gün adam, inatla inkar ediyor: \"Ben böyle bir şey söylemedim!\" Kadın ise duyduğundan emin, çaresizce kadının (hakimin) huzuruna çıkıyor ve gerçeği haykırıyor.\nSen kadı olsan, şahidi olmayan bu kadına mı inanırsın, inkar eden adama mı?",
      "sourceRight": "İslam hukukunda kadı, kalpleri okuyamaz; somut delile ve şahide (zahire) göre karar vermek zorundadır. Ortada şahit olmadığı için kadı adama döner ve \"Böyle bir şey söylemediğine dair yemin et\" der. Adam yalan söyleyip yemin ederse, kadı davayı reddeder. Yani kağıt üzerinde, mahkeme kararıyla evlilik devam eder. Ama Allah katında evlilik zaten sonlanmıştır kadın Adama, adam da kadına haram olmuştur.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-12",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Birimleri, Cüzleri arasında benzerlik bulunan ve arada fark gözetilmeyerek birbirlerinin yerine geçen mallardır.",
    "answer": "Misli mal",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Birimleri, Cüzleri arasında benzerlik bulunan ve arada fark gözetilmeyerek birbirlerinin yerine geçen mallardır.",
      "sourceRight": "Misli mal",
      "sourceType": "question"
    }
  },
  {
    "id": "card-13",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Bir kimsenin bir ayn veya menfaat üzerinde tasarruf yetkisinin bulunması",
    "answer": "mülkiyet",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Bir kimsenin bir ayn veya menfaat üzerinde tasarruf yetkisinin bulunması",
      "sourceRight": "mülkiyet",
      "sourceType": "question"
    }
  },
  {
    "id": "card-14",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Maliki olmayan mübah bir şeyi ele geçirme",
    "answer": "ihraz",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Maliki olmayan mübahbir şeyi elegeçirme",
      "sourceRight": "ihraz",
      "sourceType": "question"
    }
  },
  {
    "id": "card-15",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Bir malı o maldan tahsil edilmesi mümkün olan bir hak karşılığında hapsetmek ve alıkoymaktır",
    "answer": "rehin",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Bir malı o maldan tahsil edilmesi mümkün olan bir hak karşılığında hapsetmek ve alıkoymaktır",
      "sourceRight": "rehin",
      "sourceType": "question"
    }
  },
  {
    "id": "card-16",
    "mode": "question",
    "badge": "SORU",
    "shown": "Avcının teki yağmurda ıslanan ağını, kuruması için evinin bahçesine serip içeri giriyor. Tesadüf bu ya, ağın içine doğadan süzülen yaban bir kuş takılıyor. Yoldan geçen başka bir adam da kuşu görüp ağdan çıkarıyor ve alıp gidiyor. Avcı bunu fark edince adamı kadıya şikayet ediyor: \"Benim ağıma takıldı, kuş benimdi, bedelini ödesin! Siz kadı olsanız nasıl hüküm verirdiniz?",
    "answer": "Red! \nAvcı o ağı oraya avlanmak niyetiyle değil, kurutmak için serdi. Niyet olmadığı için ağa takılan kuş üzerinde \"ihraz\" (mülkiyet) gerçekleşmedi. Kuş hala doğanın malı (mubah) sayılıyordu. Yoldan geçen adam kuşu alarak onu ilk ihraz eden kişi oldu ve kuşun yasal sahibi o sayıldı.",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Avcının teki yağmurda ıslanan ağını, kuruması için evinin bahçesine serip içeri giriyor. Tesadüf bu ya, ağın içine doğadan süzülen yaban bir kuş takılıyor. Yoldan geçen başka bir adam da kuşu görüp ağdan çıkarıyor ve alıp gidiyor. Avcı bunu fark edince adamı kadıya şikayet ediyor: \"Benim ağıma takıldı, kuş benimdi, bedelini ödesin! Siz kadı olsanız nasıl hüküm verirdiniz?",
      "sourceRight": "Red! \nAvcı o ağı oraya avlanmak niyetiyle değil, kurutmak için serdi. Niyet olmadığı için ağa takılan kuş üzerinde \"ihraz\" (mülkiyet) gerçekleşmedi. Kuş hala doğanın malı (mubah) sayılıyordu. Yoldan geçen adam kuşu alarak onu ilk ihraz eden kişi oldu ve kuşun yasal sahibi o sayıldı.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-17",
    "mode": "question",
    "badge": "SORU",
    "shown": "Köylü Hasan (borçlu/râhin), tüccar Hüseyin'e (alacaklı/mürtehin) 500 akçe borçlanır. Teminat olarak da en güçlü öküzünü Hüseyin'e rehin bırakır.\nKural gereği Hüseyin'in tek hakkı o öküzü ahırında tutup borç ödenene kadar hapsetmektir (hapis hakkı). Ancak Hüseyin, \"Nasılsa mal bende duruyor, yattığı yerde ot yemesin\" diyerek Hasan'dan izinsiz öküzü tarlaya çifte koşar. Bütün gün ağır işte çalıştırılan öküz yorgunluktan çatlar ve ölür (itlaf).\nHasan durumu öğrenince küplere biner ve soluğu kadının huzurunda alır: \"Borcum borçtur ama rehin bıraktığım malımı izinsiz çalıştırdı ve telef etti, zararımı isterim!\" Der.\nSiz kadı olsanız nasıl hüküm verirdiniz?",
    "answer": "Mürtehin malı tazmin edecek.\nHanefi fıkhına göre mürtehin rehin aldığı malı izinsiz kullanamaz. Eğer kullanırsa \n1-Bu fazlalıktır ve faiz olur bu da haramdır.\n2-mürtehin emanetçi vasfını kaybedip, gaspeden durumuna düşmüştür. Bu durumda itlaf ettiği malı tazmin etmekle yükümlüdür.",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Köylü Hasan (borçlu/râhin), tüccar Hüseyin'e (alacaklı/mürtehin) 500 akçe borçlanır. Teminat olarak da en güçlü öküzünü Hüseyin'e rehin bırakır.\nKural gereği Hüseyin'in tek hakkı o öküzü ahırında tutup borç ödenene kadar hapsetmektir (hapis hakkı). Ancak Hüseyin, \"Nasılsa mal bende duruyor, yattığı yerde ot yemesin\" diyerek Hasan'dan izinsiz öküzü tarlaya çifte koşar. Bütün gün ağır işte çalıştırılan öküz yorgunluktan çatlar ve ölür (itlaf).\nHasan durumu öğrenince küplere biner ve soluğu kadının huzurunda alır: \"Borcum borçtur ama rehin bıraktığım malımı izinsiz çalıştırdı ve telef etti, zararımı isterim!\" Der.\nSiz kadı olsanız nasıl hüküm verirdiniz?",
      "sourceRight": "Mürtehin malı tazmin edecek.\nHanefi fıkhına göre mürtehin rehin aldığı malı izinsiz kullanamaz. Eğer kullanırsa \n1-Bu fazlalıktır ve faiz olur bu da haramdır.\n2-mürtehin emanetçi vasfını kaybedip, gaspeden durumuna düşmüştür. Bu durumda itlaf ettiği malı tazmin etmekle yükümlüdür.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-18",
    "mode": "question",
    "badge": "SORU",
    "shown": "Köylü Hasan(borçlu) öküzünü Komşusu Murat'a(alacaklı) rehin olarak verir. Ve der ki \"Murat abi bu öküzü sana rehin olarak veriyorum, öküzümü de tarla sürerken kullanabilirsin\" der.\nMurat öküzle tarlayı sürerken hayvan eceliyle ölür. Ve Hasan(borçlu) soluğu kadının yanında alır. \"Benim hayvanımı telef etti tazmin istiyorum\" der. Siz kadı olsanız nasıl bir sonuca varırdınız?",
    "answer": "Red! Tazmin edilmez.\nSen Osman oğlu Hasan alacaklıya \"malımı kullan\" diye izin verdiğin an, o öküz hukuken teminat sağlayan \"Rehin\" statüsünden çıkar, geçici olarak \"Âriyet\" (Ödünç/Emanet) statüsüne geçer. \nHanefi fıkhında da Âriyet alınan mal emanet hükmündedir; müsteîrin kullanım veya\nmuhafazada bir haksız fiili veya kusuru olmaksızın kısmen veya tamamen hasara uğraması\ndurumunda bir tazmin mükellefiyeti doğmaz.",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Köylü Hasan(borçlu) öküzünü Komşusu Murat'a(alacaklı) rehin olarak verir. Ve derki \"Murat abi bu öküzü sana rehin olarak veriyorum, öküzümü de tarla sürerken kullanabilirsin\" der.\nMurat öküzle tarlayı sürerken hayvan eceliyle ölür. Ve Hasan(borçlu) soluğu kadının yanında alır. \"Benim hayvanımı telef etti tazmin istiyorum\" der. Siz kadı olsanız nasıl bir sonuca varırdınız?",
      "sourceRight": "Red! Tazmin edilmez.\nSen Osman oğlu Hasan alacaklıya \"malımı kullan\" diye izin verdiğin an, o öküz hukuken teminat sağlayan \"Rehin\" statüsünden çıkar, gecici olarak \"Âriyet\" (Ödünç/Emanet) statüsüne geçer. \nHanefi fıkhında da Âriyet alınan mal emanet hükmündedir; müsteîrin kullanım veya\nmuhafazada bir haksız fiili veya kusuru olmaksızın kısmen veya tamamen hasara uğraması\ndurumunda bir tazmin mükellefiyeti doğmaz.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-19",
    "mode": "question",
    "badge": "SORU",
    "shown": "Bir şahsın fiili bazen doğrudan bir zarara sebebiyet verir ki buna (_____) denir. Fiili\nişleyen kimseye de (_____) denir.\nBoşluklara hangi terimler gelmeli?",
    "answer": "mübaşeret, mübaşir",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Bir şahsın fiili bazen doğrudan bir zarara sebebiyet verir ki buna…  denir. Fiili\nişleyen kimseye de… denir.\nNoktalı yerlere hangi terim gelmeli?",
      "sourceRight": "mübaşeret, mübaşir",
      "sourceType": "question"
    }
  },
  {
    "id": "card-20",
    "mode": "question",
    "badge": "SORU",
    "shown": "Bazen ilgili fiil doğrudan bir zarara sebebiyet vermemekle\nbirlikte, dolaylı olarak bir zarara sebebiyet verebilir ki buna (_____) denir. Böyle bir fiili\nyapan kimseye de (_____) denir.\nBoşluklara hangi kavramlar gelmeli?",
    "answer": "tesebbüb, mütesebbib",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Bazen ilgili fiil doğrudan bir zarara sebebiyet vermemekle\nbirtlikte, dolaylı olarak bir zarara sebebiyet verebilir ki buna …  denir. Böyle bir fiili\nyapan kimseye de … denir. \nİlgili boşluklara hangi kavramlar gelmeli?",
      "sourceRight": "tesebbüb, mütesebbib",
      "sourceType": "question"
    }
  },
  {
    "id": "card-21",
    "mode": "question",
    "badge": "SORU",
    "shown": "Hamalın biri sırtında ağır bir odun yüküyle dar bir çarşıdan geçerken, ayağı takılır ve yüküyle beraber dükkanın önünde duran içi dolu pekmez testisinin üzerine düşer. Testi kırılır, pekmez ziyan olur. Hamal, \"Kasten yapmadım, ayağım kaydı\" diye savunma yapar. Siz kadı olsanız hükmünüz ne olurdu?",
    "answer": "Tazmin edilecek!\nHamal burada mübaşirdir yani fiili bizzat bedeniyle işleyen kişidir. Hanefi fıkhındaki kaide şudur: \"Mübaşir müteammid olmasa da dâmin olur\"",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Hamalın biri sırtında ağır bir odun yüküyle dar bir çarşıdan geçerken, ayağı takılır ve yüküyle beraber dükkanın önünde duran içi dolu pekmez testisinin üzerine düşer. Testi kırılır, pekmez ziyan olur. Hamal, \"Kasten yapmadım, ayağım kaydı\" diye savunma yapar. Siz kadı olsanız hükmünüz ne olurdu?",
      "sourceRight": "Tazmin edilecek!\nHamal burada mübaşirdir yani fiili bizzat bedeniyle işleyen kişidir. Hanefi fıkhındaki kaide şudur: \"Mübaşir müteammid olmasa da dâmin olur\"",
      "sourceType": "question"
    }
  },
  {
    "id": "card-22",
    "mode": "question",
    "badge": "SORU",
    "shown": "Köylü Hasan, ormandan kestiği koca bir ağaç tomruğunu gece vakti herkesin geçtiği umumi yolun (tarik-i amm) ortasında bırakıp evine yatmaya gider. Gece yoldan atıyla geçen komşusu Veli, karanlıkta tomruğu görmez; atı tomruğa takılır, düşer ve bacağı kırılıp telef olur. Siz kadı olsanız buradaki hükmünüz ne olurdu?",
    "answer": "Tazmin şarttır!\nHasan bizzat atın ayağını kırıp onu telef etmemiş olabilir ama bu durumun mütesebbibidir ve tesebbübte taaddi varsa tazmin gerekir.",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Köylü Hasan, ormandan kestiği koca bir ağaç tomruğunu gece vakti herkesin geçtiği umumi yolun (tarik-i amm) ortasında bırakıp evine yatmaya gider. Gece yoldan atıyla geçen komşusu Veli, karanlıkta tomruğu görmez; atı tomruğa takılır, düşer ve bacağı kırılıp telef olur. Siz kadı olsanız buradaki hükmünüz ne olurdu?",
      "sourceRight": "Tazmin şarttır!\nHasan bizzat atın ayağını kırıp onu telef etmemiş olabilir ama bu durumun mütesebbibidir ve tesebbübte taaddi varsa tazmin gerekir.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-23",
    "mode": "question",
    "badge": "SORU",
    "shown": "Hasan, sokağın ortasına izinsiz derin bir kuyu kazar (Mütesebbib). O gece yoldan geçen kurnaz Veli, komşusunun ineğini görür ve gıcıklığına hayvanı tutup Hasan'ın kazdığı o kuyuya iter (Mübâşir). İnek düşüp ölür. İneğin sahibi size gelir ve der ki: \"Biri kuyu kazdı, öteki içine itti. Benim ineğimin parasını kim ödeyecek? Hükmünüz ne olurdu?",
    "answer": "Tazminatı kuyuyu kazan Hasan değil, Veli ödeyecek!\nMecelledeki kaide şudur; : \"Mübâşir ile mütesebbib içtima ettikte (bir araya geldiğinde), hüküm mübâşire eklenir.\" Yani doğrudan yapan varken sebep olan tazminat ödemez. Bu durumda fatura Veli'ye kesilir.",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Hasan, sokağın ortasına izinsiz derin bir kuyu kazar (Mütesebbib). O gece yoldan geçen kurnaz Veli, komşusunun ineğini görür ve gıcıklığına hayvanı tutup Hasan'ın kazdığı o kuyuya iter (Mübâşir). İnek düşüp ölür. İneğin sahibi size gelir ve derki: \"Biri kuyu kazdı, öteki içine itti. Benim ineğimin parasını kim ödeyecek? Hükmünüz ne olurdu?",
      "sourceRight": "Tazminatı kuyuyu kazan Hasan değil, Veli ödeyecek!\nMecelledeki kaide şudur; : \"Mübâşir ile mütesebbib içtima ettikte (bir araya geldiğinde), hüküm mübâşire eklenir.\" Yani doğrudan yapan varken sebep olan tazminat ödemez. Bu durumda fatura Veli'ye kesilir.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-24",
    "mode": "question",
    "badge": "SORU",
    "shown": "Ali, komşusu Veli'nin atının bağlı olduğu ipi çözer (tesebbüb eylemi). Ancak at hemen kaçmaz, olduğu yerde sakin sakin otlamaya devam eder. Aradan biraz zaman geçer, sokağa giren başka bir adam (veya havlayan bir köpek) atı fena halde ürkütür ve at o an kaçıp kaybolur. Siz kadı olsanız faturayı kime keserdiniz?",
    "answer": "Sonradan gelen adam atı tazmin edecek!\nAt Ali'nin ipi çözmesiyle değil başka bir adamın ürkütmesiyle kaçmıştır ve itlaf olmuştur. Bu durumda illiyet bağı kopmuştur. Bu durumda mütesebbibin kusuru olduğu için tazmin edilir",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Ali, komşusu Veli'nin atının bağlı olduğu ipi çözer (tesebbüb eylemi). Ancak at hemen kaçmaz, olduğu yerde sakin sakin otlamaya devam eder. Aradan biraz zaman geçer, sokağa giren başka bir adam (veya havlayan bir köpek) atı fena halde ürkütür ve at o an kaçıp kaybolur. Siz kadı olsanız faturayı kime keserdiniz?",
      "sourceRight": "Sonradan gelen adam atı tazmin edecek!\nAt Ali'nin ipi çözmesiyle değil başka bir adamın ürkütmesiyle kaçmıştır ve itlaf olmuştur. Bu durumda illieyet bağı kopmuştur. Bu durumda mütesebbibin kusuru olduğu için tazmin edilir",
      "sourceType": "question"
    }
  },
  {
    "id": "card-25",
    "mode": "question",
    "badge": "SORU",
    "shown": "Bir şahıs, ağaca sıkıca bağlı olan bir atın yularını (ipini) bıçakla keser. İpi kesilen at o an ürker, kaçıp dağa çıkar ve kaybolur (veya uçurumdan düşer). Bu durumda sizin vereceğiniz hüküm ne olurdu?",
    "answer": "Şahıs hem ipin hem de atın bedelini tazmin edecek.\nAdam atı kendi elleriyle uçurumdan atmamıştır ama ipi kesme fiili, atın kaçıp kaybolmasının kesin ve kaçınılmaz sebebi olmuştur. İlliyet bağı sapasağlamdır.",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Bir şahıs, ağaca sıkıca bağlı olan bir atın yularını (ipini) bıçakla keser. İpi kesilen at o an ürker, kaçıp dağa çıkar ve kaybolur (veya uçurumdan düşer). Bu durumda sizin vereceğiniz hüküm ne olurdu?",
      "sourceRight": "Şahış hem ipin hemde atın bedelini tazmin edecek.\nAdam atı kendi elleriyle uçurumdan atmamıştır ama ipi kesme fiili, atın kaçıp kaybolmasının kesin ve kaçınılmaz sebebi olmuştur. İlliyet bağı sapasağlamdır.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-26",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Ortaklıkta ön alım",
    "answer": "şuf'a",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Ortaklıkta ön alım",
      "sourceRight": "şuf'a",
      "sourceType": "question"
    }
  },
  {
    "id": "card-27",
    "mode": "question",
    "badge": "SORU",
    "shown": "Bir şahıs, emanet aldığı komşusunun atını dağ yolunda dikkatsizce sürerken at uçurumdan düşüp ölür. Adam kadıya gelir ve \"Suçluyum, pazara gidip ona başka bir at alıp vereyim\" der. Siz kadı olsanız nasıl bir hüküm verirdiniz?",
    "answer": "Red! Kıyemi mallar kıymetleriyle ödenir, yani parayla \nAt \"kıyemî\" maldır. Hiçbir at diğerinin birebir aynısı değildir; yaşı, huyu, gücü, sağlığı farklıdır. Çarşıdan rastgele bir at alıp veremezsin. Kadı, ehl-i vukufu (bilirkişiyi) çağırır, atın uçurumdan düşmeden önceki piyasa değerini (kıymetini) altın veya akçe olarak hesaplatır. Adam atın mislini değil, hesaplanan o parayı peşin olarak öder.",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Bir şahıs, emanet aldığı komşusunun atını dağ yolunda dikkatsizce sürerken at uçurumdan düşüp ölür. Adam kadıya gelir ve \"Suçluyum, pazara gidip ona başka bir at alıp vereyim\" der. Siz kadı olsanız nasıl bir hüküm verirdiniz?",
      "sourceRight": "Red! Kıyemi mallar kıymetleriyle ödenir, yani parayla \nAt \"kıyemî\" maldır. Hiçbir at diğerinin birebir aynısı değildir; yaşı, huyu, gücü, sağlığı farklıdır. Çarşıdan rastgele bir at alıp veremezsin. Kadı, ehl-i vukufu (bilirkişiyi) çağırır, atın uçurumdan düşmeden önceki piyasa değerini (kıymetini) altın veya akçe olarak hesaplatır. Adam atın mislini değil, hesaplanan o parayı peşin olarak öder.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-28",
    "mode": "question",
    "badge": "SORU",
    "shown": "Adamın biri, hamalın taşıdığı komşusuna ait bir çuval buğdaya yanlışlıkla çarpar. Çuval yırtılır, buğday çamura dökülür ve telef olur (itlaf). Siz kadı olsanız nasıl bir hüküm verirdiniz?",
    "answer": "Misliyle ödenecek!\nBuğday \"misli\" bir maldır; piyasada aynı kalitede tonlarcası bulunur. Kadı adama, \"Gidip adama para vermeyeceksin. Çarşıya inip bu dökülen buğdayın kalitesinden (örneğin birinci sınıf Konya buğdayı) bir çuval alıp aynen iade edeceksin\" der. Misli malın tazmini, kendi cinsiyle (misl-i makul) yapılır.",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Adamın biri, hamalın taşıdığı komşusuna ait bir çuval buğdaya yanlışlıkla çarpar. Çuval yırtılır, buğday çamura dökülür ve telef olur (itlaf). Siz kadı olsanız nasıl bir hüküm verirdiniz",
      "sourceRight": "Misliyle ödenecek!\nBuğday \"misli\" bir maldır; piyasada aynı kalitede tonlarcası bulunur. Kadı adama, \"Gidip adama para vermeyeceksin. Çarşıya inip bu dökülen buğdayın kalitesinden (örneğin birinci sınıf Konya buğdayı) bir çuval alıp aynen iade edeceksin\" der. Misli malın tazmini, kendi cinsiyle (misl-i makul) yapılır.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-29",
    "mode": "question",
    "badge": "SORU",
    "shown": "Köylü Hasan, köyün uzağında sahipsiz, çorak ve ölü bir arazi (mevât) bulur. \"Burayı ileride tarla yaparım\" diyerek etrafına taş dizip derme çatma bir çit çeker (Tahcîr). Ancak ne kuyu kazar ne de tohum eker.\nAradan 2 yıl geçer, arazi hala bomboştur. Köyün uyanıklarından Veli bu boşluğu görür, gelir Hasan'ın çitlerini söküp atar. Araziye zorla girer, ortasına derin bir kuyu kazar, toprağı sürüp meyve fidanlarını diker (İhya).\nHasan bunu görünce deliye döner ve soluğu kadıda alır: \"Kadı efendi, o arazinin etrafını ben çevirmiştim (tahcîr), öncelik benimdi. Veli malıma çöktü! Siz kadı olsanız hükmünüz ne olurdu?",
    "answer": "Veli tahcir edilen arsayı zorla ihya etse de oranın maliki olur fakat bu tahrîmen mekruhtur.",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Köylü Hasan, köyün uzağında sahipsiz, çorak ve ölü bir arazi (mevât) bulur. \"Burayı ileride tarla yaparım\" diyerek etrafına taş dizip derme çatma bir çit çeker (Tahcîr). Ancak ne kuyu kazar ne de tohum eker.\nAradan 2 yıl geçer, arazi hala bomboştur. Köyün uyanıklarından Veli bu boşluğu görür, gelir Hasan'ın çitlerini söküp atar. Araziye zorla girer, ortasına derin bir kuyu kazar, toprağı sürüp meyve fidanlarını diker (İhya).\nHasan bunu görünce deliye döner ve soluğu kadıda alır: \"Kadı efendi, o arazinin etrafını ben çevirmiştim (tahcîr), öncelik benimdi. Veli malıma çöktü! Siz kadı olsanız hükmünüz ne olurdu?",
      "sourceRight": "Veli tahcir edilen arsayı zorla ihya etse de oranın maliki olur fakat bu tahrimen mekruhtur.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-30",
    "mode": "term",
    "badge": "TERIM",
    "shown": "İcap ve kabulün mahallinde neticesi ortaya çıkacak meşru bir şekilde birbiriyle\nbağlanmasıdır.",
    "answer": "akid",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "İcap ve kabulün mahallinde neticesi ortaya çıkacak meşru bir şekilde birbiriyle\nbağlanmasıdır.",
      "sourceRight": "akid",
      "sourceType": "question"
    }
  },
  {
    "id": "card-31",
    "mode": "question",
    "badge": "SORU",
    "shown": "Köylü Hasan, uysal ve bugüne kadar hiç kimseye zarar vermemiş ineğini iple pazara götürmektedir. Hasan ipi sıkıca tutarken, aniden gök gürler (veya yoldan geçen bir at arabası büyük bir gürültü yapar). İnek korkudan panikler, Hasan'ın elinden ipi koparıp kaçar ve o panikle çarşıdaki çömlekçinin tezgahına dalıp bütün malları kırar döker. Çömlekçi, Hasan'ı kadıya şikayet eder.\nSiz kadı olsanız hükmünüz ne olurdu?",
    "answer": "tazmin gerekmez!\nÇünkü mecelledeki kaide şudur : Hayvanatın kendiliğinden\nolarak cinayet ve mazarratı hederdir. Ayrıca Hasan'ın burada bir ihmali,kusuru, kastı yoktur.",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Köylü Hasan, uysal ve bugüne kadar hiç kimseye zarar vermemiş ineğini iple pazara götürmektedir. Hasan ipi sıkıca tutarken, aniden gök gürler (veya yoldan geçen bir at arabası büyük bir gürültü yapar). İnek korkudan panikler, Hasan'ın elinden ipi koparıp kaçar ve o panikle çarşıdaki çömlekçinin tezgahına dalıp bütün malları kırar döker. Çömlekçi, Hasan'ı kadıya şikayet eder.\nSiz kadı olsanız hükmünüz ne olurdu?",
      "sourceRight": "tazmin gerekmez!\nÇünkü mecelledeki kaide şudur : Hayvanatın kendiliğinden\nolarak cinayet ve mazarratı hederdir. Ayrıca Hasan'ın burada bir ihmali,kusuru, kastı yoktur.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-32",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Kullanılacak temiz suları bir başkasının arazisinden geçirme hakkı",
    "answer": "hakku'l mecra",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Kullanılacak temiz suları bir başkasının arazisinden geçirme hakkı",
      "sourceRight": "hakku'l mecra",
      "sourceType": "question"
    }
  },
  {
    "id": "card-33",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Bir gayrimenkul malikinin bir başkasına veya\nbirden çok kişiye ait bir su kaynağından arazisini sulama, içme ve kullanma maksadıyla sürekli\nolarak su alma hakkıdır.",
    "answer": "Hakku'ş şirb",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Bir gayrimenkul malikinin bir başkasına veya\nbirden çok kişiye ait bir su kaynağından arazisini sulama, içme ve kullanma maksadıyla sürekli\nolarak su alma hakkıdır.",
      "sourceRight": "Hakku'ş şirb",
      "sourceType": "question"
    }
  },
  {
    "id": "card-34",
    "mode": "term",
    "badge": "TERIM",
    "shown": "İhtiyaç\nfazlası veya kullanıma elverişli olmayan suların bir başkasının akarı üzerinden geçirerek\nuzaklaştırma hakkı.",
    "answer": "Hakku'l mesîl",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "İhtiyaç\nfazlası veya kullanıma elverişli olmayan suların bir başkasının akarı üzerinden geçirerek\nuzaklaştırma hakkı.",
      "sourceRight": "Hakku'l mesîl",
      "sourceType": "question"
    }
  },
  {
    "id": "card-35",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Bir şahsın kendi mülküne ulaşabilmek için bir başkasına\nait bir akarın belirli bir yerinden geçme hakkı.",
    "answer": "Geçit hakkı(Hakku'l Murur)",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Bir şahsın kendi mülküne ulaşabilmek için bir başkasına\nait bir akarın belirli bir yerinden geçme hakkı.",
      "sourceRight": "Geçit hakkı(Hakku'l Murur)",
      "sourceType": "question"
    }
  },
  {
    "id": "card-36",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Başkasına ait mevcut bir yapı/bina üzerinde yeni bir yapı\ntesisini ifade eden bir irtifak hakkıdır",
    "answer": "Üst Hakkı(Hakku't-tealli)",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Başkasına ait mevcut bir yapı/bina üzerinde yeni bir yapı\ntesisini ifade eden bir irtifak hakkıdır",
      "sourceRight": "Üst Hakkı(Hakku't-tealli)",
      "sourceType": "question"
    }
  },
  {
    "id": "card-37",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Bir kişiye inşa ettiği yapısının kirişlerinin\nuçlarını bir başkasına ait duvar ya da direğe dayandırma yetkisi veren bir irtifaktır",
    "answer": "Kiriş koyma hakkı (hakku vad'i'l-ciz')",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Bir kişiye inşa ettiği yapısının kirişlerinin\nuçlarını bir başkasına ait duvar ya da direğe dayandırma yetkisi veren bir irtifaktır",
      "sourceRight": "Kiriş koyma hakkı (hakku vad'i'l-ciz')",
      "sourceType": "question"
    }
  },
  {
    "id": "card-38",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Ev türü bir yapının üzerindeki karları başkasının\narazisi üzerine atma hakkıdır.",
    "answer": "Kar atma hakkı (hakku ilkâi's-selc)",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Ev türü bir yapının üzerindeki karları başkasının\narazisi üzerine atma hakkıdır.",
      "sourceRight": "Kar atma hakkı (hakku ilkâi's-selc)",
      "sourceType": "question"
    }
  },
  {
    "id": "card-39",
    "mode": "term",
    "badge": "TERIM",
    "shown": "1. Şuf'a hakkının konusu olan mal (meşfûʿ) ve şufʿa hakkının sebebi olan mal (meşfû'un bih) gayrimenkul olmalıdır.\n2. Şufʿa hakkının konusu olan mal sahibinin mülkünden kesin bir şekilde mislî veya kıyemî bir bedel karşılığı ivazlı bir akitle çıkmış olmalıdır.\n3. Şufʿa hakkının doğumundan bu hakkın kullanımına kadar geçen süre içinde şufʿa hakkının sebebi olan akar, şefîin mülkünde bulunmuş olmalıdır.\n4. Şefî satıma razı olmamış olmalıdır. Şefîʿin bu satıma açıkça veya delaleten rıza göstermesi durumunda şufʿa hakkı düşer.",
    "answer": "Şuf'a Hakkının Kullanım Şartları",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Şuf'a Hakkının Kullanım Şartları",
      "sourceRight": "1. Şuf'a hakkının konusu olan mal (meşfûʿ) ve şufʿa hakkının sebebi olan mal (meşfû'un bih) gayrimenkul olmalıdır.\n2. Şufʿa hakkının konusu olan mal sahibinin mülkünden kesin bir şekilde mislî veya kıyemî bir bedel karşılığı ivazlı bir akitle çıkmış olmalıdır.\n3. Şufʿa hakkının doğumundan bu hakkın kullanımına kadar geçen süre içinde şufʿa hakkının sebebi olan akar, şefîin mülkünde bulunmuş olmalıdır.\n4. Şefî satıma razı olmamış olmalıdır. Şefîʿin bu satıma açıkça veya delaleten rıza göstermesi durumunda şufʿa hakkı düşer.",
      "sourceType": "plain"
    }
  },
  {
    "id": "card-40",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Ödenmesi taahhüt edilen ve zimmette sabit olan misli eşyayı, özellikle para borçlarını ifade eder.",
    "answer": "Deyn (Borç)",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Deyn (Borç)",
      "sourceRight": "Ödenmesi taahhüt edilen ve zimmette sabit olan misli eşyayı, özellikle para borçlarını ifade eder.",
      "sourceType": "plain"
    }
  },
  {
    "id": "card-41",
    "mode": "question",
    "badge": "SORU",
    "shown": "Bir bakırcı, elindeki 5 kg eski bakır kazanı, başka bir bakırcıdaki 4 kg yeni yapılmış bakır tencere ile başa baş takas etmek istiyor.\nHanefi ve Şafiilere göre bu faiz midir?",
    "answer": "Hanefî Kadı Hükmü: Haramdır.\nGerekçe: Şemanda belirttiğin gibi Hanefîlerde illet Vezin (Ağırlık) + Cins Birliğidir. Her ikisi de bakırdır (cins birliği) ve tartıyla satılır (vezin). 5 kg ile 4 kg arasında 1 kg fazlalık olduğu için bu işlem \"Ribâ el-Fadl\" kapsamına girer. Eşitlik şarttır.\nŞâfiî Kadı Hükmü: Caizdir.\nGerekçe: Şâfiîlerde illet Semeniyet (Para olma) veya Ta'm (Gıda) olmasıdır. Bakır ne yenebilir bir gıdadır ne de altın/gümüş gibi yaratılıştan paradır. Bu yüzden miktar farkı faiz oluşturmaz.",
    "reveal": "always-visible",
    "original": {
      "sourceLeft": "Bir bakırcı, elindeki 5 kg eski bakır kazanı, başka bir bakırcıdaki 4 kg yeni yapılmış bakır tencere ile başa baş takas etmek istiyor.\nHanefi ve Şaafilere göre bu faiz midir?",
      "sourceRight": "Hanefî Kadı Hükmü: Haramdır.\nGerekçe: Şemanda belirttiğin gibi Hanefîlerde illet Vezin (Ağırlık) + Cins Birliğidir. Her ikisi de bakırdır (cins birliği) ve tartıyla satılır (vezin). 5 kg ile 4 kg arasında 1 kg fazlalık olduğu için bu işlem \"Ribâ el-Fadl\" kapsamına girer. Eşitlik şarttır.\nŞâfiî Kadı Hükmü: Caizdir.\nGerekçe: Şâfiîlerde illet Semeniyet (Para olma) veya Ta'm (Gıda) olmasıdır. Bakır ne yenebilir bir gıdadır ne de altın/gümüş gibi yaratılıştan paradır. Bu yüzden miktar farkı faiz oluşturmaz.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-42",
    "mode": "term",
    "badge": "TERIM",
    "shown": "Rükünleri ve kuruluş şartlarını tam olarak taşıyan akittir",
    "answer": "Mün'akid Akit",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Rükünleri ve kuruluş şartlarını tam olarak taşıyan akittir",
      "sourceRight": "Mün'akid Akit",
      "sourceType": "question"
    }
  }
];

export default studyCards;
