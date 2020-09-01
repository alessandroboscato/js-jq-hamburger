// Hamburger menu:
// mostrare / nascondere il menu principale
// (ricordate che per vedere l’hamburger in alto a destra dovete scendere a risoluzioni tipo tablet o mobile).
// Partite come base del vostro esercizio scaricando questa repo:
// https://bitbucket.org/booleancareers/ex-hamburger-menu-base/downloads
// Ricordate di scrivere solo il codice JavaScript con jQuery e non modificare HTML e CSS
// Consiglio del giorno:
// Partite dal comprendere bene come è fatto il DOM e il CSS, potete usarli a nostro vantaggio!

//SHOW E HIDE
// $(".header-right > a").click(function() {
//   $(".hamburger-menu").show();
// });
//
// $(".hamburger-menu .close").click(function() {
//   $(".hamburger-menu").hide();
// });

//ADD CLASS
// l'errore che fai è che stai aggiungendo una classe che si chiama "hamburger-menu.active" quando in realtà devi aggiungere solo la classe "active"
// Il puntino non serve perchè addClass funziona che dentro alle tonde devi solo mettere il nome della classe, il fatto che sia una classe lo si da per scontato
$(".header-right > a").click(function() {
  $("div.hamburger-menu").addClass("active");
});

$(".hamburger-menu .close").click(function() {
  $(".hamburger-menu").removeClass("active");
});

// TENTATIVO VAR NON FUNZIONA
// var visible = false;
// $(".header-right > a").click(function() {
//   if (visible == false) {
//     $("div.hamburger-menu").addClass(".hamburger-menu.active");
//     visible = true;
//   } else {
//     $("div.hamburger-menu").removeClass(".hamburger-menu.active");
//     visible = false;
//   };
// });
