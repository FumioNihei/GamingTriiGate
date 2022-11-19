

function Change( color ) {
    console.log( color );

    const torii_parts = [
        "torii-head",
        "torii-body",
        "torii-foot",
    ];

    for (const torii_part of torii_parts) {

        // const torii = document.getElementById( "torii" );
        const part = document.getElementById( torii_part );
        // console.log( torii.className );
        
        // `[ "base", olor ];
        part.className = `parts ${color}`;
        
    }


    const torii_back_parts = [
        // "torii-head-back",
        "torii-body-back",
        // "torii-foot-back",
    ];

    for (const torii_back_part of torii_back_parts) {
        const back = document.getElementById( torii_back_part );
        back.className = `parts ${color}_back`;
        console.log( back.className );
        
    }
    
}