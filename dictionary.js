let dictionary = [200000], positie = 0;
function data_base_dictionary() {
    let word = document.getElementById("word_input").value;
    dictionary[positie] = word;
    ++positie;
    console.log(dictionary);
    document.getElementById("word_input").value =" ";
}

function searchWord() {
    let word = document.getElementById("search_Word").value;
     let exist = dictionary.includes(word) ? alert("The word is here :" + " " + word): alert("The word is not in the dictionary!" + " " + ":(");
     document.getElementById("demo").textContent = exist;   
}
