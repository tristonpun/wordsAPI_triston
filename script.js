let word = document.querySelector("input")
let def = document.querySelector(".def")
let syn = document.querySelector(".synonyms")
let search = document.querySelector(".search")

async function definitions(){
    const url = `https://wordsapiv1.p.rapidapi.com/words/${word.value}/definitions`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '02d93d461emsh7d5cb160636c145p198a05jsnf1f6c07f9284',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    
try {
    const response = await fetch(url, options);
    const result = await response.text();
    let defs = JSON.parse(result).definitions;
    for(let i in defs){
        def.textContent += defs[i].definition + '\n'
    }
} catch (error) {
    console.error(error);
}}

async function synonyms(){
    const url = `https://wordsapiv1.p.rapidapi.com/words/${word.value}/synonyms`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '02d93d461emsh7d5cb160636c145p198a05jsnf1f6c07f9284',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    
try {
    const response = await fetch(url, options);
    const result = await response.text();
    let syns = JSON.parse(result).synonyms;
    for(let i in syns){
        syn.textContent += syns[i] + '\n'
    }
} catch (error) {
    console.error(error);
}}

async function searching(){
    const url = `https://wordsapiv1.p.rapidapi.com/words/?letterPattern=${word.value}`;
    const options = {
        method: 'GET',
        headers: {
            'X-RapidAPI-Key': '02d93d461emsh7d5cb160636c145p198a05jsnf1f6c07f9284',
            'X-RapidAPI-Host': 'wordsapiv1.p.rapidapi.com'
        }
    };
    
try {
    const response = await fetch(url, options);
    const result = await response.text();
    let s = JSON.parse(result).results.data;
    for(let i in s){
        search.textContent += s[i] + '\n'
    }
} catch (error) {
    console.error(error);
}}
function datas()
{
    def.textContent = ''
    syn.textContent = ''
    search.textContent = ''
    definitions()
    synonyms()
    searching()
}