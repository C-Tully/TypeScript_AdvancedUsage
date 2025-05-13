
//Function Overloads.
//TS allows for multiple function signatures.
function getLength(val: any[]): number;
function getLength(val: string): string; 
function getLength(val: string | any[] ) {
    //type check the val 
    if(typeof val === 'string') {
        const numOfWords = val.split(' ').length;
        return `${numOfWords} words`;
    }

    return  val.length;
}

const numberOfWords = getLength('This is a test string');
const numItems = getLength(['lorem', 'ipsum']);

//Key benefit here allows for us to set the return type via the function overload
//process.