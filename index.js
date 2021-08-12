function getResult(){
    let result = [];
    let multiples = [15,5,3];
    [ ...Array( 100 ).keys() ].forEach( el => {
        ++el;
        let valuesReplace = {
            0: el,
            3: "Music",
            5: "TI",
            15: "Musical",
        };
        
        multiples.forEach( multiple => {
            if( el % multiple == 0 )
                el = valuesReplace[ multiple ];
        });
        result.push( el );
    });
    return result;
}
// console.log( result );
module.exports = getResult;