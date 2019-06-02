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
      "Animalia: Heterotrophs (organisms that ingest others for food). Generally have multiple cells.",
      "Bacteria: Organisms with a single cell that have no nucleus.",
      "Fungi: Organisms that absorb nutrients for energy. May have one or more cells.",
      "Plantae: Autotrophs - organisms that use photosynthesis to make their own food. Usually have multiple cells.",
      "Protoctista: Any organism that does not fit the above kingdoms."
    ],
    [
      [
        "Chordata: Animals with a notochord (a rodlike structure) at some stage of development that sometimes develops into a backbone.",
        "Echinodermata: Animals with five-part symmetry and an internal skeleton made from calcium carbonate.",
        "Arthropoda: Segmented animals consisting of a head, thorax, and abdomen. Bodies are covered with an exoskeleton.",
        "Crustacea: Segmented animals with 18 to 20 segments, two pairs of antennae, and compound eyes that are usually on stalks."
      ],
      [
        "Magnoliophyta: Plants that produce flowers and seeds.",
        "Pinophyta: Cone-bearing plants, mostly trees.",
        "Lycopodiophyta: Evergreen plants that include club and spike mosses. These plants do not produce flowers.",
        "Equisetophyta: Plants that have hollow, jointed stems with rough ribs."
      ]
    ],
    [
      [
        "Ascidiaceae: Cold-blooded marine animals that have neither a brain nor a skull and live inside a sac.",
        "Aves: Warm-blooded animals with beaks and light bones that are hollow in areas.",
        "Mammalia: Warm-blooded animals covered with fur or skin that may grow hair. Females have mammary glands.",
        "Reptilia: Cold-blooded animals with scaly skin and either short legs or no legs at all."
      ],
      [
        "Magnoliopsida: Plants that sprout with two leaves. Veins in leaves have a branching structure (dicots).",
        "Liliopsida: Plants that sprout with one leaf. Veins in leaves are typically parallel to each other (monocots)."
      ],
      [
        "Asteroidea: Echinoderms that are often shaped like a star, though they can be nearly circular in shape.",
        "Crinoidea: Echinoderms that can have the appearance of a simple bush with a stalk that attaches to the seafloor.",
        "Echinoidea: Echinoderms with a hard shell covered by spines.",
        "Holothuroidea: Echinoderms that are shaped like a cylinder and have a mouth at one end and an anus at the other end. Outer surface is soft."
      ]
    ],
    [
      [
        "Artiodactyla: Two or four toed mammals that are usually found in groups or herds.",
        "Carnivora: Meat-eating mammals, though some supplement their diet with fruits, plants, and insects.",
        "Diprotodonts: Mammals in which two of the four digits of their hind legs are fused together up to the base of their claws.",
        "Primates: Mammals with opposable thumbs and hands that are able to grasp."
      ],
      [
        "Alismatales: Liliopsida plants that live submerged or mostly submerged in freshwater and marine environments. Flowers are pollinated by wind or water.",
        "Poales: Grass-like Liliopsida plants with green sepals and petals that are bract-like (look like leaves or scales).",
        "Liliales: Liliopsida plants with flowers that have three sepals and three petals that are so similar that they cannot be distinguished from one another.",
        "Asparagales: Liliopsida plants with flowers in which the sepals and petals are often distinguishable."
      ],
      [
        "Apodida: Worm-like sea cucumbers that lack tube feet and have a thin outer covering that is often transparent.",
        "Aspidochirotida: Sea cucumbers with 15 to 30 short tentacles that are shaped like shields or mops.",
        "Oendrochirotida: Sea cucumbers with 10 to 30 highly branched tentacles.",
        "Molpadiida: Sea cucumbers with 15 short, stubby tentacles and no tube feet. Bodies taper toward the anus, forming a tail."
      ]
    ],
    [
      [
        "Felidae: Carnivores that have retractable claws and can either purr or roar.",
        "Mustelidae: Carnivores that typically have long tails. All have especially well-developed anal glands.",
        "Procyonidae: Small- to medium-sized mammals with short to long tails. Found only from Canada to Argentina.",
        "Ursidae: Small-to-large mammals with large ears and short tails."
      ],
      [
        "Alliaceae: Asparagales plants with an onion-like odor, small flowers, and six stamens.",
        "Agavaceae: Asparagales plants with large flowers and six stamens.",
        "Orchidaceae: Asparagales plants with small to large flowers and one stamen.",
        "Iridaceae: Asparagales plants with small to large flowers and three stamens."
      ],
      [
        "Cucumariidae: Sea cucumbers with 10 branching tentacles that are used to capture particles from the surrounding water.",
        "Phyllophoridae: Sea cucumbers with more than 10 branching tentacles. The shorter tentacles are used for cleaning.",
        "Psolidae: Sea cucumbers covered on the top side by plates made of calcium carbonate.",
        "Sclerodactylidae: Sea cucumbers with 10 to 20 tentacles and scattered tube feet."
      ]
    ],
    [
      [
        "Melursus: Bears with long narrow snouts, which look similar to an anteater's snout. They have small teeth and no incisors.",
        "Helarctos: Small bears that stand only about 30 inches to the shoulder.",
        "Ursus: Bears whose fur is typically uniform in color.",
        "Tremarctos: Large bears with white fur circling or almost circling its eyes. Feeds mostly on fruit."
      ],
      [
        "Goodyera: Long-stemmed orchids with small flowers. Within each flower's lip is a single patch of 'hair' (papillae).",
        "Platanthera: Orchids with green, white, or yellow flowers that have a small lobed or fringed lip.",
        "Liparis: An orchid with one to a few leaves at its base and very small flowers. Each flower has a wide lip.",
        "Spathoglottis: The flower's lip has a callous-like growth near its base."
      ],
      [
        "Pentacta: Sea cucumbers with a flat underside and three distinct rows of tube feet, a firm body wall, and low papillae on the dorsal side.",
        "Pseudocolochirus: Sea cucumbers with three rows of tube feet on the bottom and large obvious papillae on the top.",
        "Stolus: Small sea cucumbers with tube feet that are distributed throughout the body.",
        "Thyone: Sea cucumbers with tube feet scattered equally over the body."
      ]
    ],
    [
      [
        "arctos: Large bear known for its brown coat. Eats mostly vegetation.",
        "americanus: Medium to large bear known for its typically black or dark brown coat.",
        "maritimus: Large, aquatic bear adapted to a cold climate.",
        "ursinus: Small to medium bear with black fur, though sometimes with gray and brown fur mixed in."
      ],
      [
        "hawaiensis: A species of wide-lipped orchid with green flowers that grows only in Hawaii.",
        "liliifolia: A species of wide-lipped orchid with brown flowers.",
        "loeselii: A species of wide-lipped orchid with green or greenish-yellow flowers.",
        "vexillifera: A species of wide-lipped orchid found in the Caribbean and Central and South America."
      ],
      [
        "anceps: Yellow and pink sea cucumbers, with stiff, fleshy skin, low papillae on the body, and prominent papillae near the anus.",
        "australis: Sea cucumbers with a squarish body that are grey to orange in color.",
        "crassa: Grey sea cucumbers with a pink underside that are typically found on mud.",
        "quadrangularis: Grey sea cucumbers with prominent tapering papillae along the corners of their squarish bodies."
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