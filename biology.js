/* 
 * To change this license header, choose License Headers in Project Properties.
 * To change this template file, choose Tools | Templates
 * and open the template in the editor.
 */

$.fn.randomize = function(selector){
    (selector ? this.find(selector) : this).parent().each(function(){
        $(this).children(selector).sort(function(){
            return Math.random() - 0.5;
        }).detach().appendTo(this);
    });

    return this;
};

var currentOption = 0;

var currentAnimal;

var correctAnswers = [
    [ 0, 0, 2, 1, 3, 2, 2 ],
    [ 3, 0, 1, 3, 2, 2, 2 ],
    [ 0, 1, 3, 2, 0, 0, 0 ]
];

var classifications = [
    "Kingdom",
    "Phylum",
    "Class",
    "Order",
    "Family",
    "Genus",
    "Species"
];

var descriptions = [
    "This meat&#8209;eating organism spends a great deal of time alone on the ice. Its coat of white fur keeps it warm when it's in the water. Its length, measured from the tip of its nose, down its spine, and to the end of its short tail, is seven feet. It uses its five-digit, non-retractable claws to kill its prey.",
    "Each one of the small greenish&#8209;yellow flowers on this photosynthesizing organism has three sepals and three petals as well as a pistil and a single stamen that are fused together. One of three petals of each flower forms a wide lip. The veins in the two leaves that grow from the base run parallel to each other. This species is found in North America and Eurasia.",
    "This sea cucumber captures food on its 10 branching tentacles, which it then wipes off in its mouth. Waste is ejected from its anus. It has five-part symmetry, a flat underside, and three rows of tube feet. It does not have a backbone but it does have fleshy skin with low papillae (nipple-like projections) and embedded calcium carbonate crystals."
];
var options = [
    [
      "Animalia: Kingdom for heterotrophs (organisms that ingest others for food). They generally have multiple cells.",
      "Bacteria: Kingdom for organisms with a single cell that have no nucleus.",
      "Fungi: Kingdom for organisms that absorb nutrients for energy. They may have one or more cells.",
      "Plantae: Kingdom for autotrophs - organisms that use photosynthesis to make their own food. They usually have multiple cells.",
      "Protoctista: Kingdom for any organism that does not fit the other kingdoms."
    ],
    [
      [
        "Chordata: Phylum for animals with a notochord (a rodlike structure) at some stage of development that sometimes develops into a backbone.",
        "Echinodermata: Phylum for animals with five-part symmetry and an internal skeleton made from calcium carbonate.",
        "Arthropoda: Phylum for segmented animals consisting of a head, thorax, and abdomen. Their bodies are covered with an exoskeleton.",
        "Crustacea: Phylum for segmented animals with 18 to 20 segments, two pairs of antennae, and compound eyes that are usually on stalks."
      ],
      [
        "Magnoliophyta: Phylum for plants that produce flowers and seeds.",
        "Pinophyta: Phylum for cone-bearing plants, mostly trees.",
        "Lycopodiophyta: Phylum for evergreen plants that include club and spike mosses. These plants do not produce flowers.",
        "Equisetophyta: Phylum for plants that have hollow, jointed stems with rough ribs."
      ]
    ],
    [
      [
        "Ascidiaceae: Class for cold-blooded marine animals that have neither a brain nor a skull and live inside a sac.",
        "Aves: Class for warm-blooded animals with beaks and light bones that are hollow in areas.",
        "Mammalia: Class for warm-blooded animals covered with fur or skin that may grow hair. The females have mammary glands.",
        "Reptilia: Class for cold-blooded animals with scaly skin and either short legs or no legs at all."
      ],
      [
        "Magnoliopsida: Class for plants that sprout with two leaves. Veins in their leaves have a branching structure (dicots).",
        "Liliopsida: Class for plants that sprout with one leaf. Veins in their leaves are typically parallel to each other (monocots)."
      ],
      [
        "Asteroidea: Class for echinoderms that are often shaped like a star, though they can be nearly circular in shape.",
        "Crinoidea: Class for echinoderms that can have the appearance of a simple bush with a stalk that attaches to the seafloor.",
        "Echinoidea: Class for echinoderms with a hard shell covered by spines.",
        "Holothuroidea: Class for echinoderms that are shaped like a cylinder and have a mouth at one end and an anus at the other end. Their outer surface is soft."
      ]
    ],
    [
      [
        "Artiodactyla: Order for two or four toed mammals that are usually found in groups or herds.",
        "Carnivora: Order for meat-eating mammals. Some supplement their diet with fruits, plants, and insects.",
        "Diprotodonts: Order for mammals in which two of the four digits of their hind legs are fused together up to the base of their claws.",
        "Primates: Order for mammals with opposable thumbs and hands that are able to grasp."
      ],
      [
        "Alismatales: Order for Liliopsida plants that live submerged or mostly submerged in freshwater and marine environments. The flowers are pollinated by wind or water.",
        "Poales: Order for grass-like Liliopsida plants with green sepals and petals that are bract-like (look like leaves or scales).",
        "Liliales: Order for Liliopsida plants with flowers that have three sepals and three petals that are so similar that they cannot be distinguished from one another.",
        "Asparagales: Order for Liliopsida plants with flowers in which the sepals and petals are often distinguishable."
      ],
      [
        "Apodida: Order for worm-like sea cucumbers that lack tube feet and have a thin outer covering that is often transparent.",
        "Aspidochirotida: Order for sea cucumbers with 15 to 30 short tentacles that are shaped like shields or mops.",
        "Oendrochirotida: Order for sea cucumbers with 10 to 30 highly branched tentacles.",
        "Molpadiida: Order for sea cucumbers with 15 short, stubby tentacles and no tube feet. Bodies taper toward the anus, forming a tail."
      ]
    ],
    [
      [
        "Felidae: Family for carnivores that have retractable claws and can either purr or roar.",
        "Mustelidae: Family for carnivores that typically have long tails. All of them have especially well-developed anal glands.",
        "Procyonidae: Family for small to medium sized mammals with short to long tails. They are found only from Canada to Argentina.",
        "Ursidae: Family for small-to-large mammals with large ears and short tails."
      ],
      [
        "Alliaceae: Family for Asparagales plants with an onion-like odor, small flowers, and six stamens.",
        "Agavaceae: Family for Asparagales plants with large flowers and six stamens.",
        "Orchidaceae: Family for Asparagales plants with small to large flowers and one stamen.",
        "Iridaceae: Family for Asparagales plants with small to large flowers and three stamens."
      ],
      [
        "Cucumariidae: Family for sea cucumbers with 10 branching tentacles that are used to capture particles from the surrounding water.",
        "Phyllophoridae: Family for sea cucumbers with more than 10 branching tentacles. The shorter tentacles are used for cleaning.",
        "Psolidae: Family for sea cucumbers covered on the top side by plates made of calcium carbonate.",
        "Sclerodactylidae: Family for sea cucumbers with 10 to 20 tentacles and scattered tube feet."
      ]
    ],
    [
      [
        "Melursus: Genus for bears with long narrow snouts, which look similar to an anteater's snout. They have small teeth and no incisors.",
        "Helarctos: Genus for small bears that stand only about 30 inches to the shoulder.",
        "Ursus: Genus for bears whose fur is typically uniform in color.",
        "Tremarctos: Genus for large bears with white fur circling or almost circling their eyes. They feed mostly on fruit."
      ],
      [
        "Goodyera: Genus for long-stemmed orchids with small flowers. Within each flower's lip is a single patch of 'hair' (papillae).",
        "Platanthera: Genus for orchids with green, white, or yellow flowers that have a small lobed or fringed lip.",
        "Liparis: Genus for an orchid with one to a few leaves at its base and very small flowers. Each flower has a wide lip.",
        "Spathoglottis: Genus for flowers with a lip that has a callous-like growth near its base."
      ],
      [
        "Pentacta: Genus for sea cucumbers with a flat underside and three distinct rows of tube feet, a firm body wall, and low papillae on the dorsal side.",
        "Pseudocolochirus: Genus for sea cucumbers with three rows of tube feet on the bottom and large obvious papillae on the top.",
        "Stolus: Genus for small sea cucumbers with tube feet that are distributed throughout the body.",
        "Thyone: Genus for sea cucumbers with tube feet scattered equally over the body."
      ]
    ],
    [
      [
        "arctos: A large bear known for its brown coat. It eats mostly vegetation.",
        "americanus: A medium to large bear known for its typically black or dark brown coat.",
        "maritimus: A large, aquatic bear that has adapted to a cold climate.",
        "ursinus: A small to medium bear with black fur, though sometimes with gray and brown fur mixed in."
      ],
      [
        "hawaiensis: A species of wide-lipped orchid with green flowers that grows only in Hawaii.",
        "liliifolia: A species of wide-lipped orchid with brown flowers.",
        "loeselii: A species of wide-lipped orchid with green or greenish-yellow flowers.",
        "vexillifera: A species of wide-lipped orchid found in the Caribbean and Central and South America."
      ],
      [
        "anceps: A species of yellow and pink sea cucumbers, with stiff, fleshy skin, low papillae on the body, and prominent papillae near the anus.",
        "australis: A species of sea cucumbers with a squarish body that are grey to orange in color.",
        "crassa: A species of grey sea cucumbers with a pink underside that are typically found on mud.",
        "quadrangularis: A species for grey sea cucumbers with prominent tapering papillae along the corners of their squarish bodies."
      ]
    ]
];

function setOptions(i, k) {
    if(k === undefined)
        k = 0;
    if(i > 6)
        throw "We use the six-kingdom system here";
    $("#classifying").text(classifications[i]);
    for(var j = 1; j < 6; j++) {
        var option;
        if(i < 1)
            option = options[i][j-1];
        else {
            if(k === 2 && i === 1)
                k = 0;
            option = options[i][k][j-1];
        }
        if(option === undefined) {
            $("#option-" + j).hide();
        } else {
            $("#option-" + j).show();
            $("#label-" + j).text(option);
        }
        
    }
    $("#sets")[0].scrollTop = 0;
    $("#sets").randomize("label");
    $("input[name=set]:checked").removeProp("checked");
}

function goBack() {
    $("#content").hide();
    $("#animal-selector").show();
    $("#toolbar").hide();
}
$(window).load(function() {
    goBack();
    $("#check-button").click(function() {
        var id = parseInt($("input[name=set]:checked").val());
        if(isNaN(id) || id > 5 || id < 1)
            return;
        id--;
        console.log("Current animal: " + currentAnimal + " option: " + currentOption);
        console.log("Id: " + id);
        console.log("Cid: " + correctAnswers[currentAnimal][currentOption]);
        if(correctAnswers[currentAnimal][currentOption] !== id) {
            $("#wrong-dialog").dialog({ modal: true });
            console.log("NO!");
            return;
        } else {
            $("#correct-dialog").dialog({ modal: true });
        }
        ++currentOption;
        if(currentOption <= 6)
            setOptions(currentOption, currentAnimal);
        else {
            goBack();
        }
    });
    $("#select-button").click(function() {
        var $selected = $("input[name=animal]:checked");
        currentAnimal = parseInt($selected.val());
        if(isNaN(currentAnimal) || currentAnimal > 5 || currentAnimal < 0)
            return;
        $("#animal").attr("src", $selected.parent().find("img").attr("src"));
        
        
       
        $("#animal-selector").hide();
        $(".description").html(descriptions[currentAnimal]);
        currentOption = 0;
        setOptions(currentOption, currentAnimal);
        $("#content").show();
        $("#toolbar").show();
    });
});