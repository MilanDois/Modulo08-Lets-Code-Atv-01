//export 
class ArrayService {
    constructor() {}
  
    getSortedArray = (text, decrescent, noDupes) => {
        let preliminaryText = text
        if (noDupes) {
            preliminaryText = [...new Set(text)]
        }
        preliminaryText = preliminaryText.sort()
        
        if  (decrescent) {
            preliminaryText = preliminaryText.reverse()
        }
        return preliminaryText
    };
  }

 let bacon = new ArrayService()
 console.log(bacon.getSortedArray(['A', 'B', 'A', 'C', 'B'], false, false))