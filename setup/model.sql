
create database web_laboratorya;

\c web_laboratorya;

create extension pgcrypto;

create table admins(
    admin_id serial primary key,
    admin_name varchar(30) not null,
    password varchar(60) not null,
 created_at timestamp default current_timestamp,
    updated_at timestamp,
    deleted_at timestamp,
    ip varchar not null

);

insert into admins(admin_name,password,ip) values ('woh',crypt('1234',gen_salt('bf')),'192.168.31.210');
insert into admins(admin_name,password,ip) values ('asad',crypt('1234',gen_salt('bf')),'192.168.31.210');






create table yangilik(
    yangilik_id serial primary key,
    yangilik_title varchar not null,
     yangilik_body varchar not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp,
    deleted_at timestamp
   
);

insert into yangilik (yangilik_title, yangilik_body) values 
(`uchun`,`Raqamlashtirishning jadal suratlari va zamonaviy axborot-kommunikatsiya texnologiyalarini hayotning ijtimoiy-iqtisodiy sohalariga joriy etilishi nafaqat yangi imkoniyatlarning yaratilishiga yordam beradi, balki xavfsizlikka doir yangi tahdidlarni ham o‘z ichiga oladi.Davlat organlari va boshqa tashkilotlar tomonidan kiberxavfsizlikni ta’minlash bo‘yicha ko‘rilayotgan tashkiliy-texnik chora-tadbirlarga qaramay,axborot tizimlari va resurslari faoliyatining buzilishiga, shuningdek, maxfiy ma’lumotlarning sizib chiqib ketishiga olib keladigan hodisalar soni ortib bormoqda.`);

insert into yangilik(yangilik_title,yangilik_body)values 
('Phishing veb-saytlardan ogoh boling!','Zamonaviy raqamli dunyoda plastik kartaning to‘lov tafsilotlari
bank foydalanuvchilarining login va parollari
foydalanuvchilarning malumotlari, bank hisob varaqlari, moliyaviy ma’lumotlar va shu turdagi ma’lumotlar firibgarlarda juda katta qiziqish uyg‘otadi. 
Ma’lumotlaringizni aniqlash uchun, firibgarlar turli xil usullardan foydalanishadi. Misol tariqasida, 
elektron pochta xabarlarini (spam) hamda phishing veb-saytlarni ommaviy ravishda tarqatish.');



create table maqola(
    maqola_id serial primary key,
    maqola_title varchar(60) not null,
    maqola_body varchar not null,
       created_at timestamp default current_timestamp,
    updated_at timestamp,
    deleted_at timestamp
   

);


insert into maqola(maqola_title,maqola_body)values 
('Turli axborot resurslariga tegishli bo‘lgan foydalanuvchilar ma’lumotlari e’lon qilinganligi aniqlandi.',
'“Kiberxavfsizlik markazi” DUK tomonidan olib boriladigan monitoring jarayonida 2023-yil 18-oktabr sanasida turli axborot resurslari, 
shu jumladan respublikamiz hududida joylashgan tizimlarga tegishli bo‘lgan foydalanuvchilar ma’lumotlari e’lon qilinganligi aniqlandi.
Xususan, “Telegram” ijtimoiy tarmog‘ida e’lon qilingan hamda buzilgan ma’lumotlar 
bazasini o‘rganish jarayonida mutaxassislar tomonidan 200 mingdan ortiq foyalanuvchi ma’lumotlari sizdirilganligi aniqlandi.
 Ularning aksariyati dolzarb ahamiyatga ega bo‘lib, davlat organlari va boshqa tashkilotlarning axborot tizimlari xavfsizligiga
  kibertahdidlarini keltirib chiqarmoqda. So‘nggi paytlarda foydalanuvchining oshkor qilingan ma’lumotlar bazasining bunday holatlari tez-tez uchrab turibdi. 
Ilgari bunday ma’lumotlar sizib chiqishi faqat yopiq forumlarda yoki Darknet-da uchrab turar edi.');

insert into maqola(maqola_title,maqola_body)values 
('Zararli dasturlar orqali amalga oshiriladigan zamonaviy kibertahdidlar.',
'Kibertahdid - kibermakonda shaxs, jamiyat va davlat manfaatlariga tahdid soluvchi shart-sharoitlar va omillar majmui.
Zararli dastur - kompyuter sistemasiga zarar yetkazish uchun yaratilgan dastur hisoblanadi. Mobil va planshet qurilmalarini, 
kompyuter tarmoqlarini ishdan chiqarish uchun yoki bir qancha jarayonlarning boshqaruvini qo’lga kiritish va tizimga zarar yetkazishga urunadi.');



create table ariza(
    ariza_id serial primary key,
    familyangiz varchar(60) not null,
    isminggiz varchar not null,
    telefon_raqam varchar not null,
    ariza_maqsadi varchar not null,
    created_at timestamp default current_timestamp,
    updated_at timestamp,
    deleted_at timestamp
   

);

insert into ariza(familyangiz,isminggiz,telefon_raqam,ariza_maqsadi)values 
('jumayev','suxrob','946922939','web sayt ariza');












