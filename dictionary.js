var dictionary = [200000], position = 1;
function data_base_dictionary() {
    let word = document.getElementById("word_input").value;
    dictionary[position] = word;
    ++position;
    console.log(dictionary);
    document.getElementById("word_input").value =" ";
}

function searchWord() {
    let word = document.getElementById("search_Word").value;
    let x = 0, poz = position;
     while(poz >= 1){
        if(dictionary[poz] == word){
            alert("Here is the word : " + word);
            ++x;
        }
        --poz;
     }
     if(x == 0){
        alert("The word is not in dictionary "  + " :(");
     } 
}