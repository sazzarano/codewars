function redacted(doc1, doc2) {
    if (doc1.length !== doc2.length) {
      return false;
    }
    for (let i = 0; i < doc1.length; i++) {
      if (doc1[i] !== doc2[i] && (doc1[i] !== 'X' || doc2[i] === "\n")) {
        return false;
      }
    }
    return true;
}

//Should be True
console.log(redacted("TOP SECRET:\nThe missile launch code for Sunday XXXXXXXXXX is:\nXXXXXXXXXXXXXXXXX", 
"TOP SECRET:\nThe missile launch code for Sunday 5th August is:\n7-ZERO-8X-ALPHA-1"));

//Should be False
console.log(redacted("The name of the mole is Professor XXXXX", 
"The name of the mole is Professor Dinglemouse"));

//Should be True
console.log(redacted("XXXXXXXX XXXXXXX XXXXXXXXXXXXXXXXXXX\nXXXX XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX XXXXXXXXX XXXXXXXXXXXXX XXXXX", 
"Area-51. Medical Report. 23/Oct/1969\nE.T. subject 4 was given an asprin after reporting sick for duty today"));

//Should be False
console.log(redacted("This is a XXXX. Will you pass it?", 
"This is a test. Will you fail it?"));

//Should be False
console.log(redacted("This is a XXXX. Will you XXXX it?", 
"This is a test. Did they pass it?"));