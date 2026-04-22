export type CardMode = 'question' | 'term';

export type RevealMode = 'toggle' | 'always-visible';

/**
 * StudyCard - Bir çalışma kartı için gereken tüm alanlar
 * 
 * Her alan neyin ne olduğu:
 * - id: Kartın benzersiz numarası (örnek: "card-1", "card-2")
 * - mode: Kartın türü - 'term' (tanım kartı) veya 'question' (soru kartı)
 * - badge: Kartın başında gösterilen etiket (TERIM veya SORU yazısı)
 * - shown: Kartın ön yüzünde gösterilen metin (tanım veya soru)
 * - answer: Kartın arka yüzünde gösterilen cevap (terim adı veya soru cevabı)
 * - reveal: Cevabın görünüş şekli
 *           - 'toggle': Gizli başlar, butona tıklanınca görülür
 *           - 'always-visible': Her zaman açıkta görülür
 * - original: Orijinal kaynağı saklamak için (back-up amaçlı, değiştirilmemeli)
 *             - sourceLeft: Orijinal sol sütun verisi
 *             - sourceRight: Orijinal sağ sütun verisi  
 *             - sourceType: 'plain' (tanım) veya 'question' (soru)
 */
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

// ALT NOTLAR:
// - Soru kartları (mode: 'question'): Kartta soru yazısı (shown) -> cevap (answer) şeklinde çalışır
// - Tanım kartları (mode: 'term'): Kartta tanım açıklaması (shown) -> terim adı (answer) şeklinde çalışır
// - original alanları: Başlangıç verilerini saklıyor, düzenleyiciler bunları DEĞIŞTİRMESİN
export const studyCards: StudyCard[] = [
  {
    // Eğer değiştiriyorsanız, bu alanları AYNI FORMATTA YAZILAR VE ÇEKMEMEYIN ÖNEMLİ!
    "id": "card-1",
    "mode": "term",                    // 'term' = tanım kartı | 'question' = soru kartı
    "badge": "TERIM",                  // Gösterilecek etiket
    "shown": "Bir kimseye bir eşya üzerinde doğrudan doğruya hâkimiyet sağlayan ve herkese karşı ileri sürülebilen haktır.",  // Kullanıcıya gösterilen metin
    "answer": "Aynî Hak",              // Cevap/Tanım adı
    "reveal": "toggle",                // 'toggle' = gizli başla | 'always-visible' = her zaman göster
    "original": {
      "sourceLeft": "Aynî Hak",
      "sourceRight": "Bir kimseye bir eşya üzerinde doğrudan doğruya hâkimiyet sağlayan ve herkese karşı ileri sürülebilen haktır.",
      "sourceType": "plain"            // Orijinal veri türü: 'plain' (tanım) veya 'question' (soru)
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
    "reveal": "toggle",
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
    "reveal": "toggle",
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
    "reveal": "toggle",
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
    "reveal": "toggle",
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
    "reveal": "toggle",
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
    "reveal": "toggle",
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
    "reveal": "toggle",
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
    "reveal": "toggle",
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
    "reveal": "toggle",
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
    "reveal": "toggle",
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
    "reveal": "toggle",
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
    "reveal": "toggle",
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
    "reveal": "toggle",
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
    "reveal": "toggle",
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
    "reveal": "toggle",
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
    "reveal": "toggle",
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
    "reveal": "toggle",
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
    "answer": "Hanefî Kadı Hükmü: Haramdır.\nGerekçe: Hanefîlerde illet Vezin (Ağırlık) + Cins Birliğidir. Her ikisi de bakırdır (cins birliği) ve tartıyla satılır (vezin). 5 kg ile 4 kg arasında 1 kg fazlalık olduğu için bu işlem \"Ribâ el-Fadl\" kapsamına girer. Eşitlik şarttır.\nŞâfiî Kadı Hükmü: Caizdir.\nGerekçe: Şâfiîlerde illet Semeniyet (Para olma) veya Ta'm (Gıda) olmasıdır. Bakır ne yenebilir bir gıdadır ne de altın/gümüş gibi yaratılıştan paradır. Bu yüzden miktar farkı faiz oluşturmaz.",
    "reveal": "toggle",
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
  },
  {
    "id": "card-43",
    "mode": "question",
    "badge": "SORU",
    "shown": "Mahmut, tapulu arsasında Osmanlı döneminden kalma bir kese altın bulur. Nurettin olaya şahit olur ve Kadı'ya ihbar eder. Mahmut altınları sahiplenmek ister. Hüküm nedir?",
    "answer": "Kadı Hükmü: Altınlar 'Yitik Mal' (Lukata) hükmündedir.\nGerekçe: Üzerinde İslam mührü (Osmanlı) olan defineler ganimet değil, lukata sayılır. Mahmut, bu altınların zincirdeki en eski sahibine ulaşmak için elinden geleni yapmalı ve ilan süresi dolana kadar beklemelidir. Sahibi bulunamazsa, Mahmut adına değil, asıl sahibi sevabına fakirlere tasadduk edilir.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Mahmut tapulu arsasında Osmanlı altını bulur, Nurettin şahit olur. Mahmut sahiplenmek ister.",
      "sourceRight": "Osmanlı mührü varsa 'Lukata'dır. Eski sahibine gidilir, bulunamazsa fakirlere hibe edilir.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-44",
    "mode": "question",
    "badge": "SORU",
    "shown": "Bir şahıs (gâsıp), komşusunun arazisini işgal edip üzerine kıymetli bir bina inşa eder. Arazi sahibi binanın yıkılmasını talep eder. Karar ne olur?",
    "answer": "Kadı Hükmü: Bina yıkılmaz, arazi sahibi binayı bedeliyle devralır.\nGerekçe: 'Zarar-ı eşed, zarar-ı ahaff ile izale olunur.' Bilirkişi binanın yıkılmasının araziye veya milli servete büyük zarar vereceğini (fuhş-i kadr) rapor ederse; arazi sahibi binanın sökülmüş haldeki (enkaz) değerini gâsıba öder ve mülkiyeti birleştirir.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Gâsıp başkasının yerine bina yapar. Arazi sahibi yıkım ister.",
      "sourceRight": "Yıkım büyük zararsa arazi sahibi enkaz bedelini ödeyip binayı alır. Değeri fazla olan az olanı satın alır.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-46",
    "mode": "question",
    "badge": "SORU",
    "shown": "Kıtlıkta aç kalan Yusuf, Hacı Ömer’in bahçesinden izinsiz meyve yiyerek çocuklarını doyurur. Hacı Ömer Yusuf'un cezalandırılmasını ister. Hüküm nedir?",
    "answer": "Kadı Hükmü: Ceza verilmez (Had düşer) ancak tazminat şarttır.\nGerekçe: 'Iztırar gayrın hakkını iptal etmez' (Mecelle 33). Hayat hakkı mülkiyetin önüne geçtiği için Yusuf günahkar sayılmaz; ancak yediği meyvelerin bedelini Hacı Ömer'e ödemekle (tazminle) yükümlüdür.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Aç kalan Yusuf, Hacı Ömer'in bahçesinden meyve yer. Ceza ve tazminat durumu nedir?",
      "sourceRight": "Zaruret günahı kaldırır ama kul hakkını yok etmez. Yusuf meyve bedelini tazmin eder.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-47",
    "mode": "question",
    "badge": "SORU",
    "shown": "Gümüşhane’de Hasan Efendi, mülk arazisinde gümüş madeni bulur. Maden nazırı el koymak ister. Kadı neye göre hüküm verir?",
    "answer": "Kadı Hükmü: Arazi Hasan Efendi'nin mülkü ise maden onundur.\nGerekçe: Madenler mülkiyet altına alınabilir ve bulundukları arazinin statüsüne tabidir. Defter-i Hakani (tapu) kayıtları incelenir; arazi mülk ise Hasan Efendi beşte bir ($1/5$) vergi (humus) ödemek şartıyla madeni işletir. Vakıf veya devlet arazisi ise mülkiyet o kurumlara aittir.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Hasan Efendi mülk arazisinde gümüş madeni bulur. Maden nazırı el koyar.",
      "sourceRight": "Maden arazinin statüsüne tabidir. Mülk ise beşte bir vergiyle şahsa aittir.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-48",
    "mode": "question",
    "badge": "SORU",
    "shown": "Kervancı Ali, 100 altın borcuna karşılık 150 altınlık atını Bekir’e rehin bırakır. At, Bekir’in kusuru olmadan yangında ölür. Borç ve fark ne olur?",
    "answer": "Kadı Hükmü: Borç silinir, fark tazmin edilmez.\nGerekçe: Rehin alacaklının elinde helak olursa, borç rehnin değeri kadar sakıt olur (silinir). Atın borçtan fazla olan 50 altınlık kısmı Bekir'in elinde 'emanet' hükmündedir. Kusur yoksa emanet tazmin edilmez; Ali 50 altınlık farkı talep edemez.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "150 altınlık at, 100 altınlık borç için rehin verildi. At kusursuz helak oldu.",
      "sourceRight": "Borç silinir. Fazla olan 50 altın emanet olduğu için ödenmez.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-49",
    "mode": "question",
    "badge": "SORU",
    "shown": "Heyelan sonucu yukarıdaki fındık bahçesi, aşağıdaki geniş ama işlenmemiş araziyle birleşip karışır. Ortaklık mı kurulur, yoksa mülkiyet el mi değiştirir?",
    "answer": "Kadı Hükmü: Ortaklık kurulmaz; değeri fazla olan az olanı satın alır.\nGerekçe: Gayrimenkul karışmalarında mülkiyeti parçalamamak esastır. Eğer alttaki geniş arazinin değeri, yukarıdan gelen topraktan fazlaysa; alt arazi sahibi, üstten gelen toprak ve ağaçların bedelini ödeyerek arazinin tamamına malik olur.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Toprak kayması ile iki arazi karıştı. Ortaklık mı mülkiyet birleşmesi mi olur?",
      "sourceRight": "Ortaklık olmaz. Kıymeti yüksek olan az olanın bedelini ödeyip mülkü alır.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-50",
    "mode": "question",
    "badge": "SORU",
    "shown": "İslam hukukunda yeni bir kişi veya eşyanın, haklar konusunda artık var olmayan diğerinin yerine geçmesine ne ad verilir?",
    "answer": "Cevap: Halefiyet.\nGerekçe: Bir hukuki sujenin veya objenin, başka bir sujenin veya objenin yerine geçerek onun hak ve borçlarını devralması durumudur. Mirasçının murisin yerine geçmesi veya sigortacının sigortalı yerine hak talep etmesi buna örnektir.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Haklar konusunda var olmayan birinin yerine başkasının geçmesi nedir?",
      "sourceRight": "Halefiyet",
      "sourceType": "question"
    }
  },
  {
    "id": "card-51",
    "mode": "question",
    "badge": "SORU",
    "shown": "1800’lerin başında kıtlık çeken Yusuf, çocuklarını doyurmak için Hacı Ömer’in bahçesinden izinsiz meyve alır. Bekçiler Yusuf'u yakalayıp Kadı'ya götürür. Hüküm nedir?",
    "answer": "Kadı Hükmü: Had cezası verilmez, ancak tazminat şarttır.\nGerekçe: Yusuf günahkar değildir; zira 'Hayat hakkı' mülkiyet hakkından önce gelir. Ancak Mecelle'deki 'Iztırar gayrın hakkını iptal etmez' (Madde 33) kaidesi uyarınca, Yusuf’un zaruret içinde olması ağanın malının değerini yok saymaz. Yusuf, yediği meyvelerin bedelini Hacı Ömer'e tazmin etmekle yükümlüdür.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Aç kalan Yusuf, Hacı Ömer'in bahçesinden meyve yer. Hayat hakkı mı mülkiyet mi üstündür?",
      "sourceRight": "Hayat hakkı üstündür, ceza verilmez. Ancak 'Iztırar gayrın hakkını iptal etmez' gereği mal bedeli tazmin edilir.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-52",
    "mode": "question",
    "badge": "SORU",
    "shown": "Mazhar, Bedirhan'a ait buğdayı izinsiz alıp un haline getirir. Bedirhan ‘Buğdayımı geri ver’ derken; Mazhar ‘Bu artık un oldu, senin buğdayın yok’ der. Kadı mülkiyeti kime verir?",
    "answer": "Kadı Hükmü: Mülkiyet Mazhar'a geçer ancak tazminat (bedel) şarttır.\nGerekçe: Buğdayın un olması ‘hukuki tağyir’dir; yani malın ismi ve kullanım amacı kökten değişmiştir. Mal artık eski halini (mânâsını) yitirdiği için Mazhar, Bedirhan'a buğdayın rayiç bedelini ödemek zorundadır. Mazhar bedeli ödediği veya Bekir onu ibra ettiği an mülkiyet meşru hale gelir; aksi halde Mazhar haram mal tüketmiş sayılır.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "İzinsiz alınan buğday un, iplik kumaş, kereste masa yapılırsa mülkiyet kime ait olur?",
      "sourceRight": "Malın ismi değiştiği (tağyir) ve eski işlevini (tohumluk vb.) yitirdiği için mülkiyet işleyene geçer. Ancak eski mal sahibine bedeli ödenmeden mülkiyet meşruiyet kazanmaz.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-53",
    "mode": "question",
    "badge": "SORU",
    "shown": "Milk ile mülkiyet arasındaki fark nedir?",
    "answer": "Cevap: Milk, mülkiyetten daha geniş bir kavram. Milk, mülkiyeti içine alır. Farkı, alacaklar mülkiyete dahil değildir. Ancak milke dahildir. Zira deyne (borç yani alacağa) milkü'd-deyn denir. Kişi ölse bile alacaklısının onun malı üzerinde borç miktarınca milk nitelikli yetkileri bulunmaktadır. Oysa mülkiyet, sadece kişinin zilyedinde bulunan mal varlığını kapsar. Alacakları kapsamaz. Her ikisi de ayn üzerindeki en güçlü yetkilerdir. Milk alacakları da içine alır.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Milk ile mülkiyet arasındaki fark nedir?",
      "sourceRight": "Milk, mülkiyetten daha geniş bir kavram. Milk, mülkiyeti içine alır. Farkı, alacaklar mülkiyete dahil değildir. Ancak milke dahildir. Zira deyne (borç yani alacağa) milkü'd-deyn denir. Kişi ölse bile alacaklısının onun malı üzerinde borç miktarınca milk nitelikli yetkileri bulunmaktadır. Oysa mülkiyet, sadece kişinin zilyedinde bulunan mal varlığını kapsar. Alacakları kapsamaz. Her ikisi de ayn üzerindeki en güçlü yetkilerdir. Milk alacakları da içine alır.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-54",
    "mode": "question",
    "badge": "SORU",
    "shown": "18. yüzyıl İstanbul sicillerinde, bir şahıs mahalle arasındaki kendi mülkü olan dükkânı 'baruthane' (patlayıcı deposu) olarak kiraya vermek ister. Komşular 'can güvenliğimiz tehlikede' diyerek Kadı'ya başvurur. Kadı bu mülkiyet tasarrufuna müdahale edebilir mi?",
    "answer": "Kadı Hükmü: Mülk sahibinin bu tasarrufu yasaklanır ve dükkânın baruthane olarak kullanılmasına izin verilmez.\nGerekçe: Şahsi mülkiyet hakkı esas olsa da, toplumun can güvenliği ve huzuru (Allah hakkı/Kamu hakkı) doğrudan tehdit altındadır. Toplum huzur ve düzeninin korunması, fertlerin bu haklara (can ve mal emniyeti) teker teker sahip çıkmasıyla mümkündür. Burada kamu yararı şahsi tasarruftan üstün tutulmuş ve ferdin mülkü üzerindeki yetkisi sınırlandırılmıştır.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "18. yüzyıl İstanbul sicillerinde baruthane davası ve mülkiyetin sınırlandırılması nasıldır?",
      "sourceRight": "Kamu güvenliği (Allah hakkı) sebebiyle şahsi mülkiyetin tehlikeli kullanımı yasaklanmıştır.",
      "sourceType": "question"
    }
  },
   {
    "id": "card-55",
    "mode": "question",
    "badge": "SORU",
    "shown": "Ahmet, husumetlisi Mehmet'in her gün geçtiği umumi bir yola çukur kazar ve üstünü dallarla kapatır. Ertesi gün Mehmet geçerken, hızla gelen bir çocuk Mehmet'e çarpar ve Mehmet kuyuya düşerek kolu kırılır. Tedavi masraflarını kim karşılar?",
    "answer": "1. Ahmet'in Durumu (Mütesebbib - Sebebi Hazırlayan): Ahmet, umumi bir yola (kamu malı) izinsiz çukur kazarak ve üzerini örterek 'Taaddî' (haddi aşma/haksız fiil) işlemiştir. Normal şartlarda, biri o kuyuya doğrudan düşseydi tüm sorumluluk Ahmet'e ait olurdu.\n\n2. Çocuğun Durumu (Mübaşir - Fiili İşleyen): Burada araya 'müstakil bir irade' girmiştir. Mehmet kuyuya kendi kendine veya Ahmet'in itmesiyle değil, çocuğun çarpmasıyla düşmüştür. İslam hukukundaki genel kaide şudur: Mübaşir ile mütesebbib bir arada olduğunda tazmin yükümlülüğü mübaşir'e (doğrudan çarpana) ait olur.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Umumi yola kuyu kazan Ahmet mi, yoksa Mehmet'i kuyuya iten çocuk mu tazminat öder?",
      "sourceRight": "Mübaşir (çocuk) ile mütesebbib (Ahmet) bir arada olduğunda sorumluluk mübaşire aittir.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-56",
    "mode": "question",
    "badge": "SORU",
    "shown": "Bahadır, Faik'ten 100 adet Bargello marka parfüm almak ister. Faik, bir deneme ürünü (tester) gönderir. Bahadır kokuyu beğenir ve 100 adet parfümü satın alır. Ancak ürünleri teslim aldığında, 20 tanesinin tester ile aynı olmadığını, different olduğunu fark eder. Bahadır bu parfümleri iade edebilir mi?",
    "answer": "Evet, iade edebilir.\n\nNeden?\nBahadır, İslam hukukundaki 'görme muhayyerliği' (veya numuneye uygunluk hakkı) ilkesini kullanarak ürünleri iade etme hakkına sahiptir. Alınan mallar, başlangıçta gösterilen örneğe veya üzerinde anlaşılan niteliklere uymadığı takdirde alıcı satışı iptal edebilir.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Bahadır, Faik'ten 100 adet Bargello marka parfüm almak ister. Faik, bir deneme ürünü (tester) gönderir. Bahadır kokuyu beğenir ve 100 adet parfümü satın alır. Ancak ürünleri teslim aldığında, 20 tanesinin tester ile aynı olmadığını, farklı olduğunu fark eder. Bahadır bu parfümleri iade edebilir mi?",
      "sourceRight": "Evet, iade edebilir. Neden? Bahadır, İslam hukukundaki 'görme muhayyerliği' (veya numuneye uygunluk hakkı) ilkesini kullanarak ürünleri iade etme hakkına sahiptir. Alınan mallar, başlangıçta gösterilen örneğe veya üzerinde anlaşılan niteliklere uymadığı takdirde alıcı satışı iptal edebilir.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-57",
    "mode": "question",
    "badge": "SORU",
    "shown": "Vosıd, satıcı Ali'den 1000 TL karşılığında bir ceket almak ister ve anlaşırlar. Ancak Ali, 'Bu ceketi başka bir müşteri daha istiyor; eğer iki gün içinde parayı getirmezsen ceketi senden geri alırım,' diyerek bir şart (hıyaru'ş-şart) koşar. Vosıd kabul eder. Ertesi gün parayı götürürken ceket bir şekilde zayi olur. Bu durumda ceketin rayiç bedeli mi yoksa anlaşılan satış bedeli mi ödenir?",
    "answer": "Rayiç bedel ödenir.\n\nNeden?\nBurada şartı koşan kişi satıcıdır. Satıcının şart koştuğu durumlarda mal, müşterinin elinde emanet hükmündedir ancak 'daman' (tazmin sorumluluğu) sorumluluğu devam eder. Bu sebeple Vosıd, kusuru olsun ya da olmasın, malın mülkiyetine değil piyasa değerine (kıymetine) göre tazminat ödemekle yükümlüdür.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Vosıd, satıcı Ali'den 1000 TL karşılığında bir ceket almak ister ve anlaşırlar. Ancak Ali, 'Bu ceketi başka bir müşteri daha istiyor; eğer iki gün içinde parayı getirmezsen ceketi senden geri alırım,' diyerek bir şart (hıyaru'ş-şart) koşar. Vosıd kabul eder. Ertesi gün parayı götürürken ceket bir şekilde zayi olur. Soru: Bu durumda ceketin rayiç bedeli mi yoksa anlaşılan satış bedeli mi ödenir?",
      "sourceRight": "Cevap: Rayiç bedel ödenir. Neden? Burada şartı koşan kişi satıcıdır. Satıcının şart koştuğu durumlarda mal, müşterinin elinde emanet hükmündedir ancak 'daman' (tazmin sorumluluğu) sorumluluğu devam eder. Bu sebeple Vosıd, kusuru olsun ya da olmasın, malın mülkiyetine değil piyasa değerine (kıymetine) göre tazminat ödemekle yükümlüdür.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-58",
    "mode": "question",
    "badge": "SORU",
    "shown": "Ayşe, bayram için kendisine bir elbise almak üzere çarşıya çıkar. Zübeyde Hanım'ın dükkanında 1000 TL değerinde bir elbise beğenir. Ancak Ayşe, 'Denemeden almam,' diyerek bir şart koşar. Elbiseyi denediği sırada elbise kazara yırtılır. Ayşe, elbisenin rayiç (piyasa) bedelini mi yoksa satıcının belirlediği satış fiyatını (semen) mı ödemelidir?",
    "answer": "Ayşe'nin, satıcıyla anlaştığı 1000 TL'yi (semeni) ödemesi gerekir.\n\nNeden?\nMüşteri (Ayşe) satın alma şartı koştuğu için, fıkhi açıdan mülkiyet satıcıdan çıkmış ve müşteriye geçmiştir. Bu nedenle malın zayi olması durumunda, anlaşılan bedelin ödenmesi gerekir. Ebu Hanife'ye göre mülkiyet henüz tam olarak el değiştirmediği için rayiç bedel ödenmelidir; ancak İmameyn'in (Ebu Yusuf ve İmam Muhammed) 'semen ödenir' görüşü uygulamada daha esas alınmıştır.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Ayşe, bayram için kendisine bir elbise almak üzere çarşıya çıkar. Zübeyde Hanım'ın dükkanında tam istediği gibi, 1000 TL değerinde bir elbise beğenir. Ancak Ayşe, 'Denemeden almam,' diyerek bir şart koşar. Elbiseyi denediği sırada elbise kazara yırtılır. Soru: Ayşe, elbisenin rayiç (piyasa) bedelini mi yoksa satıcının belirlediği satış fiyatını (semen) mı ödemelidir?",
      "sourceRight": "Cevap: Ayşe'nin, satıcıyla anlaştığı 1000 TL'yi (semeni) ödemesi gerekir. Neden? Müşteri (Ayşe) satın alma şartı koştuğu için, fıkhi açıdan mülkiyet satıcıdan çıkmış ve müşteriye geçmiştir. Bu nedenle malın zayi olması durumunda, anlaşılan bedelin ödenmesi gerekir. Ebu Hanife'ye göre mülkiyet henüz tam olarak el değiştirmediği için rayiç bedel ödenmelidir; ancak İmameyn'in (Ebu Yusuf ve İmam Muhammed) 'semen ödenir' görüşü uygulamada daha esas alınmıştır.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-60",
    "mode": "question",
    "badge": "TERIM",
    "shown": "İzale etme, ortadan kaldırma anlamına gelir. Mukaveleyi ve sözleşmeyi ortadan kaldırma, bozmak demektir. Bu kavram nedir?",
    "answer": "İkale",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "İzale etme, ortadan kaldırma anlamına gelir. Mukaveleyi ve sözleşmeyi ortadan kaldırma, bozmak demektir.",
      "sourceRight": "İkale",
      "sourceType": "plain"
    }
  },
  {
    "id": "card-59",
    "mode": "question",
    "badge": "SORU",
    "shown": "Tüccar Selim, toptancı Yakup'tan aldığı kumaşları terzi Rıfat'a satmıştır. Terzi kumaştaki üretim hatasını fark edip tüccara geri getirmiştir. Tüccar kumaşı kendi rızasıyla geri almış, sonra da toptancıya götürüp iade etmek istemiştir. Toptancı bu iadeyi kabul etmek zorunda mıdır?",
    "answer": "Hayır, bu malı geri almak zorunda değildir.\n\nNeden?\nEğer aracı müşteri (Tüccar), son müşteriden (Terzi) malı kendi rızasıyla (mahkeme kararı olmadan) geri almışsa, bu işlem tüccar ile terzi arasında yeni bir 'alım-satım' hükmündedir ve ilk satıcıyı (Toptancı) bağlamaz. Ancak terzi mahkemeye başvurup kadı kararıyla malı tüccara iade ettirseydi, tüccar da bu mahkeme kararıyla ilk satıcıya gidip malı iade etme hakkına sahip olurdu.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Tüccar Selim , toptancıdan Yakup'tan aldığı kumaşları bir terzi Rıfat'a satmıştır. Terzi kumaştaki üretim hatasını fark edip tüccara geri getirmiştir. Tüccar kumaşı kendi rızasıyla geri almış, sonra da ilk satıcıya (Toptancı) götürüp 'Bak, mal kusurluymuş, ben de geri aldım, şimdi sen de benden geri al' demiştir. Toptancı iadeyi kabul etmek zorunda mıdır?",
      "sourceRight": "Cevap: Hayır, bu malı geri almak zorunda değildir. Neden? Eğer aracı müşteri (Tüccar ), son müşteriden (Terzi ) malı kendi rızasıyla (mahkeme kararı olmadan) geri almışsa, bu işlem tüccar ile terzi arasında yeni bir 'alım-satım' hükmündedir. İlk satıcıyı (Toptancı) bağlamaz. Ancak terzi mahkemeye başvurup kadı kararıyla malı tüccara iade ettirseydi, tüccar da 'mahkeme kararı' belgesiyle ilk satıcıya gidip malı iade etme hakkına sahip olurdu.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-61",
    "mode": "question",
    "badge": "SORU",
    "shown": "Sarraf Kenan ile Tüccar İbrahim, 100 altın karşılığında 1000 dirhem gümüş takası (sarf akdi) yapmışlardır. Ertesi gün ticaretten vazgeçip işlemi karşılıklı bozmaya (ikâle) karar verirler. Kenan 1000 dirhem gümüşü hemen İbrahim'e iade eder. Ancak İbrahim kesesini açtığında yanında sadece 50 altın olduğunu fark eder. \"50 altını şimdi vereyim, kalan 50'yi yarın dükkânına getiririm\" der ve ayrılırlar. Bu ikâlenin fıkhi durumu nedir?",
    "answer": "İkâle sadece peşin iade edilen (kabz edilen) 50 altınlık kısım için geçerli (sahih) olur; yarına bırakılan 50 altınlık kısım için ise ikâle geçersizdir (bâtıldır).\n\nNeden?\nSarf akdinin ikâlesinde her iki bedelin aynı mecliste ve aynı anda el değiştirmesi şarttır. Geciken kısma vade (nesîe) faizi karışma ihtimali doğar. Bu yüzden Kadı, mecliste hazır bulunan miktar kadar işlemi bozar, kalan miktar için eski satış akdinin devam ettiğine hükmeder.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Sarraf Kenan ile Tüccar İbrahim, 100 altın karşılığında 1000 dirhem gümüş takası (sarf akdi) yapmışlardır. Ertesi gün ticaretten vazgeçip işlemi karşılıklı bozmaya (ikâle) karar verirler. Musa 1000 dirhem gümüşü hemen İbrahim'e iade eder. Ancak İbrahim kesesini açtığında yanında sadece 50 altın olduğunu fark eder. \"50 altını şimdi vereyim, kalan 50'yi yarın dükkânına getiririm\" der ve ayrılırlar. Bu ikâlenin fıkhi durumu nedir?",
      "sourceRight": "Cevap: İkâle sadece peşin iade edilen (kabz edilen) 50 altınlık kısım için geçerli (sahih) olur; yarına bırakılan 50 altınlık kısım için ise ikâle geçersizdir (bâtıldır). Neden? Sarf akdinin ikâlesinde her iki bedelin aynı mecliste ve aynı anda el değiştirmesi şarttır. Geciken kısma vade (nesîe) faizi karışma ihtimali doğar. Bu yüzden Kadı, mecliste hazır bulunan miktar kadar işlemi bozar, kalan miktar için eski satış akdinin devam ettiğine hükmeder.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-62",
    "mode": "question",
    "badge": "SORU",
    "shown": "Kumaş tüccarı Yakup, toptancıdan aldığı malları iade edip akdi bozmak ister. Toptancının dükkânına girip, 'Aramızdaki satışı ikâle edelim, malını geri al' der. Toptancı o an cevap vermez, dükkândan çıkıp depoya gider, malları sayar, bir saat sonra dükkâna dönüp 'Tamam, teklifini kabul ettim' der. Yakup ise bu arada beklemekten sıkılıp teklifinden vazgeçmiştir. Bu ikâle gerçekleşmiş sayılır mı?",
    "answer": "Hayır, ikâle gerçekleşmiş sayılmaz.\n\nNeden?\nİkâlenin rüknü icap ve kabuldür ve satım akdinde olduğu gibi burada da 'Meclis Birliği' şarttır. Yakup teklifi (icap) yaptıktan sonra toptancının dükkândan çıkıp başka işlerle meşgul olması (araya zaman ve mekan girmesi) meclisi değiştirmiştir. Meclis değiştiği için toptancının sonradan yaptığı kabul geçersizdir.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Soru (Vaka): Kumaş tüccarı Yakup, toptancıdan aldığı malları iade edip akdi bozmak ister. Toptancının dükkânına girip, 'Aramızdaki satışı ikâle edelim, malını geri al' der. Toptancı o an cevap vermez, dükkândan çıkıp depoya gider, malları sayar, bir saat sonra dükkâna dönüp 'Tamam, teklifini kabul ettim' der. Yakup ise bu arada beklemekten sıkılıp teklifinden vazgeçmiştir. Bu ikâle gerçekleşmiş sayılır mı?",
      "sourceRight": "Cevap: Hayır, ikâle gerçekleşmiş sayılmaz. Neden? İkâlenin rüknü icap ve kabuldür ve satım akdinde olduğu gibi burada da 'Meclis Birliği' şarttır. Yakup teklifi (icap) yaptıktan sonra toptancının dükkândan çıkıp başka işlerle meşgul olması (araya zaman ve mekan girmesi) meclisi değiştirmiştir. Meclis değiştiği için toptancının sonradan yaptığı kabul geçersizdir.",
      "sourceType": "question"
    }
  },
  {
    "id": "card-63",
    "mode": "question",
    "badge": "SORU",
    "shown": "Yahya'nın piyasaya 100 bin TL borcu var ancak işleri batmış. Üzerinde sadece başını soktuğu mütevazı bir evi ve günlük yaşantısını sürdürecek temel eşyaları var. Alacaklılar Yahya'yı mahkemeye verir. Bu durumda hapis ve haciz talepleri nasıl değerlendirilir?",
    "answer": "1. Hapis Talebi:\nKadı, Yahya'nın gerçekten ödeme gücü olmadığını tespit eder ve Yahya kesinlikle hapsedilmez. Gerekçe: İslam'da hapis, bedene eziyet için değil, gizlenen parayı ortaya çıkarmak içindir. Olmayan para hapiste de çıkmayacağı için Yahya'yı hapsetmek anlamsızdır ve zulümdür.\n\n2. Haciz Talebi:\nAlacaklılar evini ve eşyasını satmak isterse Kadı bunu da reddeder. Gerekçe: Borçlunun 'asli ihtiyaçları' haczedilemez.\n\nSonuç:\nYahya'ya malvarlığı edinebilmesi için mühlet (vade) verilir. Alacaklılar beklemek zorundadır.",
    "reveal": "toggle",
    "original": {
      "sourceLeft": "Yahya'nın piyasaya 100 bin TL borcu var ancak işleri batmış. Üzerinde sadece başını soktuğu mütevazı bir evi ve günlük yaşantısını sürdürecek temel eşyaları var. Alacaklılar Yahya'yı mahkemeye verir. Bu durumda ne yapılır?",
      "sourceRight": "Hapis talebi reddedilir (hapis eziyet için değil parayı çıkarmak içindir). Haciz talebi reddedilir (asli ihtiyaçlar haczedilemez). Yahya'ya mühlet verilir.",
      "sourceType": "question"
    }
  }
];

export default studyCards;
