function sentence() { //WITH THIS EXAMPLE I HAVE USED THE CONCAT() METHOD,
    var part1 = "Today, I "; //TO CONCATENATE ALL OF THE PARTS OF THE SENTENCE TOGETHER AS ONE.
    var part2 = "have created ";
    var part3 = "a sentence ";
    var part4 = "using the ";
    var part5 = "concat() method!";
    var whole = part1.concat(part2, part3, part4, part5);
    document.getElementById("Concat").innerHTML = whole;    
}

function slice() { //WITH THIS EXAMPLE I USED THE SLICE() METHOD TO EXTRACT A SECTION OF A STRING, AND RETURN TTHE EXTRACTED SECTION IN A NEW STRING.
    var sentence = "Today I went to the store and bought a Playstation 5!";
    var section = sentence.slice(39,52);
    document.getElementById("Slice").innerHTML = section;
}

function uppercase() { //WITH THIS EXAMPLE I USED THE TOUPPERCASE() METHOD TO MAKE OUR SENTENCE UPPERCASE.
    var sentence = "Hello, World!";
    var section = sentence.toUpperCase();
    document.getElementById("World").innerHTML = section;    
}

function search() { //WITH THIS EXAMPLE I USED THE SEARCH() METHOD TO RETURN THE INDEX (POSITION) OF THE FIRST MATCH
    var sentence = "Mr. Morale & The Big Steppers."
    var section = sentence.search("Steppers");
    document.getElementById("Search").innerHTML = section;
}

function stringnum() { //WITH THIS EXAMPLE I USED THE TOSTRING() METHOD TO RETURN THE NUMBER VARIABLE AS A STRING.
    var G = 9645;
    document.getElementById("StringNumber").innerHTML = G.toString();
}

function precision() { //WITH THIS EXAMPLE I USED THE TOPRECISION() METHOD TO FORMAT MY NUMBER TO THE SPECIFIED LENGTH OF 10.
    var A = 8257582.4597937662829;
    document.getElementById("Precision").innerHTML = A.toPrecision(10);    
}

function fixed() { //WITH THIS EXAMPLE I USED THE TOFIXED() METHOD TO CONVERT MY NUMBER TO A STRING AS WELL AS ROUND MY STRING TO A SPECIFIED NUMBER OF DECIMALS OF 2.
    var M = 66.7837
    document.getElementById("Fixed").innerHTML = M.toFixed(2);
}