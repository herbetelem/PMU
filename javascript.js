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
                break;
            case "♧":
                trefle_status++;
                $(".trefle").css("left", position[trefle_status] + "%");
                break;
            case "♢":
                carreau_status++;
                $(".carreau").css("left", position[carreau_status] + "%");
                break;
            case "♤":
                pique_status++;
                $(".pique").css("left", position[pique_status] + "%");
                break;
        }

        // et on retire la carte du paquet
        carte.splice(tmp_nb, 1);

        // si toute les cartes on depasser une carte caché
        if ((coeur_status >= nb_card_reveal) && (pique_status >= nb_card_reveal) && (trefle_status >= nb_card_reveal) && (carreau_status >= nb_card_reveal)) {
            // montrer la premiere carte
            if (nb_card_reveal == 1) {
                $("#card_1").css("transform", "rotateX(180deg)");

                // je fait reculer la carte révélé
                moove_back_horse(carte_trap[nb_card_reveal - 1]);

                // je remplace la carte par une carte avec le symbole
                if (carte_trap[nb_card_reveal - 1] == "♡") {
                    $("#card_1").replaceWith("<div class='card' id='card_1'><img src='asset/dos_coeur.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♧") {
                    $("#card_1").replaceWith("<div class='card' id='card_1'><img src='asset/dos_trefle.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♢") {
                    $("#card_1").replaceWith("<div class='card' id='card_1'><img src='asset/dos_carreau.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♤") {
                    $("#card_1").replaceWith("<div class='card' id='card_1'><img src='asset/dos_pique.png'></div>");
                }

            }
            // montrer la deuxieme carte
            if (nb_card_reveal == 2) {
                $("#card_2").css("transform", "rotateX(180deg)");

                // je fait reculer la carte révélé
                moove_back_horse(carte_trap[nb_card_reveal - 1]);

                // je remplace la carte par une carte avec le symbole
                if (carte_trap[nb_card_reveal - 1] == "♡") {
                    $("#card_2").replaceWith("<div class='card' id='card_2'><img src='asset/dos_coeur.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♧") {
                    $("#card_2").replaceWith("<div class='card' id='card_2'><img src='asset/dos_trefle.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♢") {
                    $("#card_2").replaceWith("<div class='card' id='card_2'><img src='asset/dos_carreau.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♤") {
                    $("#card_2").replaceWith("<div class='card' id='card_2'><img src='asset/dos_pique.png'></div>");
                }

            }
            // montrer la troisieme carte
            if (nb_card_reveal == 3) {
                $("#card_3").css("transform", "rotateX(180deg)");

                // je fait reculer la carte révélé
                moove_back_horse(carte_trap[nb_card_reveal - 1]);

                // je remplace la carte par une carte avec le symbole
                if (carte_trap[nb_card_reveal - 1] == "♡") {
                    $("#card_3").replaceWith("<div class='card' id='card_3'><img src='asset/dos_coeur.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♧") {
                    $("#card_3").replaceWith("<div class='card' id='card_3'><img src='asset/dos_trefle.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♢") {
                    $("#card_3").replaceWith("<div class='card' id='card_3'><img src='asset/dos_carreau.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♤") {
                    $("#card_3").replaceWith("<div class='card' id='card_3'><img src='asset/dos_pique.png'></div>");
                }

            }
            // montrer la quatrieme carte
            if (nb_card_reveal == 4) {
                $("#card_4").css("transform", "rotateX(180deg)");

                // je fait reculer la carte révélé
                moove_back_horse(carte_trap[nb_card_reveal - 1]);

                // je remplace la carte par une carte avec le symbole
                if (carte_trap[nb_card_reveal - 1] == "♡") {
                    $("#card_4").replaceWith("<div class='card' id='card_4'><img src='asset/dos_coeur.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♧") {
                    $("#card_4").replaceWith("<div class='card' id='card_4'><img src='asset/dos_trefle.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♢") {
                    $("#card_4").replaceWith("<div class='card' id='card_4'><img src='asset/dos_carreau.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♤") {
                    $("#card_4").replaceWith("<div class='card' id='card_4'><img src='asset/dos_pique.png'></div>");
                }

            }
            // montrer la cinqueme carte
            if (nb_card_reveal == 5) {
                $("#card_5").css("transform", "rotateX(180deg)");

                // je fait reculer la carte révélé
                moove_back_horse(carte_trap[nb_card_reveal - 1]);

                // je remplace la carte par une carte avec le symbole
                if (carte_trap[nb_card_reveal - 1] == "♡") {
                    $("#card_5").replaceWith("<div class='card' id='card_5'><img src='asset/dos_coeur.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♧") {
                    $("#card_5").replaceWith("<div class='card' id='card_5'><img src='asset/dos_trefle.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♢") {
                    $("#card_5").replaceWith("<div class='card' id='card_5'><img src='asset/dos_carreau.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♤") {
                    $("#card_5").replaceWith("<div class='card' id='card_5'><img src='asset/dos_pique.png'></div>");
                }

            }
            // montrer la sixieme carte
            if (nb_card_reveal == 6) {
                $("#card_6").css("transform", "rotateX(180deg)");

                // je fait reculer la carte révélé
                moove_back_horse(carte_trap[nb_card_reveal - 1]);

                // je remplace la carte par une carte avec le symbole
                if (carte_trap[nb_card_reveal - 1] == "♡") {
                    $("#card_6").replaceWith("<div class='card' id='card_6'><img src='asset/dos_coeur.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♧") {
                    $("#card_6").replaceWith("<div class='card' id='card_6'><img src='asset/dos_trefle.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♢") {
                    $("#card_6").replaceWith("<div class='card' id='card_6'><img src='asset/dos_carreau.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♤") {
                    $("#card_6").replaceWith("<div class='card' id='card_6'><img src='asset/dos_pique.png'></div>");
                }

            }
            // montrer la septieme carte
            if (nb_card_reveal == 7) {
                $("#card_7").css("transform", "rotateX(180deg)");

                // je fait reculer la carte révélé
                moove_back_horse(carte_trap[nb_card_reveal - 1]);

                // je remplace la carte par une carte avec le symbole
                if (carte_trap[nb_card_reveal - 1] == "♡") {
                    $("#card_7").replaceWith("<div class='card' id='card_7'><img src='asset/dos_coeur.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♧") {
                    $("#card_7").replaceWith("<div class='card' id='card_7'><img src='asset/dos_trefle.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♢") {
                    $("#card_7").replaceWith("<div class='card' id='card_7'><img src='asset/dos_carreau.png'></div>");
                }

                if (carte_trap[nb_card_reveal - 1] == "♤") {
                    $("#card_7").replaceWith("<div class='card' id='card_7'><img src='asset/dos_pique.png'></div>");
                }

            }

            nb_card_reveal++;
        }
    });
});