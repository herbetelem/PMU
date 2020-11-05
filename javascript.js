$(document).ready(function () {
    // je definit mon paquet de carte
    var carte = ['♡', '♡', '♡', '♡', '♡', '♡', '♡', '♡', '♡', '♡', '♡', '♡', '♡',
        '♧', '♧', '♧', '♧', '♧', '♧', '♧', '♧', '♧', '♧', '♧', '♧', '♧',
        '♢', '♢', '♢', '♢', '♢', '♢', '♢', '♢', '♢', '♢', '♢', '♢', '♢',
        '♤', '♤', '♤', '♤', '♤', '♤', '♤', '♤', '♤', '♤', '♤', '♤', '♤'];
    // je definit le nombre de fois que chaque tete est sorti
    var coeur_status = 0;
    var pique_status = 0;
    var trefle_status = 0;
    var carreau_status = 0;
    // je definit les position des tete en %
    var position = [0, 21.6, 32, 42.5, 53.3, 63.8, 74.4, 85];
    // je definit mes carte piege
    var carte_trap = [0, 0, 0, 0, 0, 0, 0];
    // je definit une bool pour dire si la carte a été révélé ou pas
    var carte_reveal = [0, 0, 0, 0, 0, 0, 0];
    var nb_card_reveal = 1;
    var result = [];
    // je fait une boucle qui vas choisir un piege aleatoire
    for (var i = 0; i < carte_trap.length; i++) {
        tmp_nb = Math.floor((Math.random() * carte.length) + 1);
        carte_trap[i] = carte[tmp_nb];
        carte.splice(tmp_nb, 1);
    };

    // fonction pour faire reculer les cavalier
    function moove_back_horse(carte) {
        switch (carte) {
            case "♡":
                coeur_status--;
                $(".coeur").css("left", position[coeur_status] + "%");
                break;
            case "♧":
                trefle_status--;
                $(".trefle").css("left", position[trefle_status] + "%");
                break;
            case "♢":
                carreau_status--;
                $(".carreau").css("left", position[carreau_status] + "%");
                break;
            case "♤":
                pique_status--;
                $(".pique").css("left", position[pique_status] + "%");
                break;
        }
    }

    // si quelqu'un clique sur le paquet
    $(".paquet img").click(function () {
        // on tire une carte au hasard parmis celle qui reste
        tmp_nb = Math.floor((Math.random() * carte.length) + 1);
        // alert("une carte " + carte[tmp_nb] + " a été tiré, il reste " + carte.length + " cartes");
        // on verifie le type de la carte, ensuite on l'avance
        switch (carte[tmp_nb]) {
            case "♡":
                coeur_status++;
                $(".coeur").css("left", position[coeur_status] + "%");
                $("<img src='asset/coeur.png' class='card_showed'>").insertAfter(".target");
                break;
            case "♧":
                trefle_status++;
                $(".trefle").css("left", position[trefle_status] + "%");
                $("<img src='asset/trefle.png' class='card_showed'>").insertAfter(".target");
                break;
            case "♢":
                carreau_status++;
                $(".carreau").css("left", position[carreau_status] + "%");
                $("<img src='asset/carreau.png' class='card_showed'>").insertAfter(".target");
                break;
            case "♤":
                pique_status++;
                $(".pique").css("left", position[pique_status] + "%");
                $("<img src='asset/pique.png' class='card_showed'>").insertAfter(".target");
                break;
        }

        // et on retire la carte du paquet
        carte.splice(tmp_nb, 1);

        // si toute les cartes on depasser une carte caché
        if ((coeur_status >= nb_card_reveal) && (pique_status >= nb_card_reveal) && (trefle_status >= nb_card_reveal) && (carreau_status >= nb_card_reveal)) {
            
            // montrer la premiere carte
            if (nb_card_reveal == 1) {
                $("#card_1").css("transform", "rotateX(180deg)");

                // je remplace la carte par une carte avec le symbole
                switch (carte_trap[nb_card_reveal - 1]) {
                    case "♡":
                        $("#card_1").replaceWith("<div class='card' id='card_1'><img src='asset/dos_coeur.png'></div>");
                        break;
                    case "♧":
                        $("#card_1").replaceWith("<div class='card' id='card_1'><img src='asset/dos_trefle.png'></div>");
                        break;
                    case "♢":
                        $("#card_1").replaceWith("<div class='card' id='card_1'><img src='asset/dos_carreau.png'></div>");
                        break;
                    case "♤":
                        $("#card_1").replaceWith("<div class='card' id='card_1'><img src='asset/dos_pique.png'></div>");
                        break;
                }

                alert("Les joueurs ayant misée " + carte_trap[nb_card_reveal - 1] + " prennent 1 shot");

            }
            // montrer la deuxieme carte
            if (nb_card_reveal == 2) {
                $("#card_2").css("transform", "rotateX(180deg)");

                // je remplace la carte par une carte avec le symbole
                switch (carte_trap[nb_card_reveal - 1]) {
                    case "♡":
                        $("#card_2").replaceWith("<div class='card' id='card_2'><img src='asset/dos_coeur.png'></div>");
                        break;
                    case "♧":
                        $("#card_2").replaceWith("<div class='card' id='card_2'><img src='asset/dos_trefle.png'></div>");
                        break;
                    case "♢":
                        $("#card_2").replaceWith("<div class='card' id='card_2'><img src='asset/dos_carreau.png'></div>");
                        break;
                    case "♤":
                        $("#card_2").replaceWith("<div class='card' id='card_2'><img src='asset/dos_pique.png'></div>");
                        break;
                }
                
                alert("Les joueurs ayant misée " + carte_trap[nb_card_reveal - 1] + " prennent 2 shot");

            }
            // montrer la troisieme carte
            if (nb_card_reveal == 3) {
                $("#card_3").css("transform", "rotateX(180deg)");

                // je remplace la carte par une carte avec le symbole
                switch (carte_trap[nb_card_reveal - 1]) {
                    case "♡":
                        $("#card_3").replaceWith("<div class='card' id='card_3'><img src='asset/dos_coeur.png'></div>");
                        break;
                    case "♧":
                        $("#card_3").replaceWith("<div class='card' id='card_3'><img src='asset/dos_trefle.png'></div>");
                        break;
                    case "♢":
                        $("#card_3").replaceWith("<div class='card' id='card_3'><img src='asset/dos_carreau.png'></div>");
                        break;
                    case "♤":
                        $("#card_3").replaceWith("<div class='card' id='card_3'><img src='asset/dos_pique.png'></div>");
                        break;
                }
                
                alert("Les joueurs ayant misée " + carte_trap[nb_card_reveal - 1] + " prennent 3 shot");

            }
            // montrer la quatrieme carte
            if (nb_card_reveal == 4) {
                $("#card_4").css("transform", "rotateX(180deg)");

                // je remplace la carte par une carte avec le symbole
                switch (carte_trap[nb_card_reveal - 1]) {
                    case "♡":
                        $("#card_4").replaceWith("<div class='card' id='card_4'><img src='asset/dos_coeur.png'></div>");
                        break;
                    case "♧":
                        $("#card_4").replaceWith("<div class='card' id='card_4'><img src='asset/dos_trefle.png'></div>");
                        break;
                    case "♢":
                        $("#card_4").replaceWith("<div class='card' id='card_4'><img src='asset/dos_carreau.png'></div>");
                        break;
                    case "♤":
                        $("#card_4").replaceWith("<div class='card' id='card_4'><img src='asset/dos_pique.png'></div>");
                        break;
                }

                alert("Les joueurs ayant misée " + carte_trap[nb_card_reveal - 1] + " prennent 4 shot");

            }
            // montrer la cinqueme carte
            if (nb_card_reveal == 5) {
                $("#card_5").css("transform", "rotateX(180deg)");

                // je remplace la carte par une carte avec le symbole
                switch (carte_trap[nb_card_reveal - 1]) {
                    case "♡":
                        $("#card_5").replaceWith("<div class='card' id='card_5'><img src='asset/dos_coeur.png'></div>");
                        break;
                    case "♧":
                        $("#card_5").replaceWith("<div class='card' id='card_5'><img src='asset/dos_trefle.png'></div>");
                        break;
                    case "♢":
                        $("#card_5").replaceWith("<div class='card' id='card_5'><img src='asset/dos_carreau.png'></div>");
                        break;
                    case "♤":
                        $("#card_5").replaceWith("<div class='card' id='card_5'><img src='asset/dos_pique.png'></div>");
                        break;
                }
                
                alert("Les joueurs ayant misée " + carte_trap[nb_card_reveal - 1] + " prennent 5 shot");

            }
            // montrer la sixieme carte
            if (nb_card_reveal == 6) {
                $("#card_6").css("transform", "rotateX(180deg)");

                // je remplace la carte par une carte avec le symbole
                switch (carte_trap[nb_card_reveal - 1]) {
                    case "♡":
                        $("#card_6").replaceWith("<div class='card' id='card_6'><img src='asset/dos_coeur.png'></div>");
                        break;
                    case "♧":
                        $("#card_6").replaceWith("<div class='card' id='card_6'><img src='asset/dos_trefle.png'></div>");
                        break;
                    case "♢":
                        $("#card_6").replaceWith("<div class='card' id='card_6'><img src='asset/dos_carreau.png'></div>");
                        break;
                    case "♤":
                        $("#card_6").replaceWith("<div class='card' id='card_6'><img src='asset/dos_pique.png'></div>");
                        break;
                }
                
                alert("Les joueurs ayant misée " + carte_trap[nb_card_reveal - 1] + " prennent 6 shot");

            }
            // montrer la septieme carte
            if (nb_card_reveal == 7) {
                $("#card_7").css("transform", "rotateX(180deg)");

                // je remplace la carte par une carte avec le symbole
                switch (carte_trap[nb_card_reveal - 1]) {
                    case "♡":
                        $("#card_7").replaceWith("<div class='card' id='card_7'><img src='asset/dos_coeur.png'></div>");
                        break;
                    case "♧":
                        $("#card_7").replaceWith("<div class='card' id='card_7'><img src='asset/dos_trefle.png'></div>");
                        break;
                    case "♢":
                        $("#card_7").replaceWith("<div class='card' id='card_7'><img src='asset/dos_carreau.png'></div>");
                        break;
                    case "♤":
                        $("#card_7").replaceWith("<div class='card' id='card_7'><img src='asset/dos_pique.png'></div>");
                        break;
                }
                
                alert("Les joueurs ayant misée " + carte_trap[nb_card_reveal - 1] + " prennent 7 shot");

            }
            
            // JE VOUDRAIT FAIRE UNE PAUSE DE 1S AVANT DE POURSUIVRE LE CODE
            // je fait reculer la carte révélé
            moove_back_horse(carte_trap[nb_card_reveal - 1]);

            nb_card_reveal++;
        }

        // si coeur finit
        if (coeur_status >= 8) {
            if (coeur_status == 8) {
                alert("coeur viens de finir");
                result.push("coeur ♡");
            }
            coeur_status = 15;
        }

        // si carreau finit
        if (carreau_status >= 8) {
            if (carreau_status == 8) {
                alert("carreau viens de finir");
                result.push("carreau ♢");
            }
            carreau_status = 15;
        }

        // si pique finit
        if (pique_status >= 8) {
            if (pique_status == 8) {
                alert("pique viens de finir");
                result.push("pique ♤");
            }
            pique_status = 15;
        }

        // si trefle finit
        if (trefle_status >= 8) {
            if (trefle_status == 8) {
                alert("trefle viens de finir");
                result.push("trefle ♧");
            }
            trefle_status = 15;
        }

        // si au moins 3 carte on finit
        if (result.length == 3) {
            alert("La parti est finit. Voici les résultat de la parti.");
            alert("Les joueurs ayant misé " + result[0] + " on finit 1er et donne 2 fois leurs mise.");
            alert("Les joueurs ayant misé " + result[1] + " on finit 2eme et donne 1 fois leurs mise.");
            alert("Les joueurs ayant misé " + result[2] + " on finit 3eme et prenne 1 fois leurs mise.");
            alert("et enfin les derniers prennent 2 fois leurs mise");
            if (confirm("Santé a tous <3")) {
                document.location.reload();
            }
            
        }
    });
});