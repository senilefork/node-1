/** Textual markov chain generator */


class MarkovMachine {

  /** build markov machine; read in text.*/

  constructor(text) {
    let words = text.split(/[ \r\n]+/);
    this.words = words.filter(c => c !== "");
    this.makeChains();
  }

  /** set markov chains:
   *
   *  for text of "the cat in the hat", chains will be
   *  {"the": ["cat", "hat"], "cat": ["in"], "in": ["the"], "hat": [null]} */

  makeChains(txt) {
    let obj = {}

    for(let i = 0; i < txt.length; i++){
      let currentWord = txt[i]
      if(i === txt.length-1){
        if(!obj[currentWord]){
        obj[currentWord] = [null]
        break
      } else {
        obj[currentWord].push(null)
        break
      }
      }
      if(!obj[currentWord]){
        obj[currentWord] = [txt[i+1]]
      } else {
        obj[currentWord].push(txt[i+1])
      }
    }
    return obj
  }


  /** return random text from chains */

  makeText(numWords = 100) {
    
  }
}
