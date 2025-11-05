
// Cout every servey and group them by their response

const serveyResponse = ["A", "C", "B", "D", "A", "A", "C", "B", "D", "C", "B", "A", "D", "C", "A", "B", "D", "B", "C", "A"];

const count = serveyResponse.reduce((table, response)=>{
    if(table[response]){
        table[response] += 1;

    }else{
        table[response] = 1;
    }
    return table;
},{})

console.log(count)

