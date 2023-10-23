
function verKey(obj, cheie) {
    return cheie in obj;
}

const obiect = { nume: 'John', varsta: 30, oras: 'New York' };
const cheie = 'varsta';

const existaCheie = verKey(obiect, cheie);
console.log(existaCheie);

//
const vowels = ["a", "e", "i", "o", "u"]

function countVowel(str) {
    let count = 0;

    for (let letter of str.toLowerCase()) {
        if (vowels.includes(letter)) {
            count++;
        }
    }

    return count
}

const string = ('Salut, ma numesc Maria: ');

const result = countVowel(string);

console.log(result);

//
function clasificareStudenti(obiectNote) {
    const rezultat = {};
  
    for (const numeStudent in obiectNote) {
      const note = obiectNote[numeStudent];
      const sumaNote = note.reduce((a, b) => a + b, 0);
      const media = sumaNote / note.length;
      rezultat[numeStudent] = `Medie: ${media.toFixed(2)}`;
    }
  
    return rezultat;
  }
  
  const noteStudenti = {
    John: [8, 7, 9],
    Mary: [9, 9, 10],
    Alex: [6, 8, 7]
  };
  
  const rezultatClasificare = clasificareStudenti(noteStudenti);
  console.log(rezultatClasificare);

  //
  function inverseazaSir(sir) {
    let sirInversat = '';
  
    for (let i = sir.length - 1; i >= 0; i--) {
      sirInversat += sir[i];
    }
  
    return sirInversat;
  }
  

  const input = 'Hello, World!';
  const output = inverseazaSir(input);
  console.log(output);
  
  
  //
  function verificaPalindrom(string2) {
   const len = string.length;

   for(let i=0; i <len/2; i++){
    if (string2[i] !== string2[len - 1-i]){
        return true;
    }
   }
   return false;
  }
  
  const string2 = 'level';
  const value = verificaPalindrom(string2);
  console.log(value);

  //
  const k = 8;

  const arr = [1, 10, 6, 2, 7, 4, 78, 91].reduce((a, b) => {
      return Math.abs(b - k) < Math.abs(a - k) ? b : a;
  });
  
  console.log(arr);


//

function sortNumbers(arr) {
    const cifreImpare = arr.filter(num => num % 2 !== 0);
    const cifrePare = arr.filter(num => num % 2 === 0);
  
    const cifreImpareSortate = cifreImpare.sort((a, b) => a - b);
    const cifrePareSortate = cifrePare.sort((a, b) => b - a);
  
    return cifreImpareSortate.concat(cifrePareSortate);
  }
  
  const input2 = [4, 3, 5, 6, 1, 8, 2, 9];
  const output2 = sortNumbers(input2);
  console.log(output2); 
  