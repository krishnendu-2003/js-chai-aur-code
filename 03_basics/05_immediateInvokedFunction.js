// IMMEDIATE INVOKED FUNCTION EXPRESSIONS (IIFE)

(function code(){  //this is a named IIFE
    console.log(`DB CONNECTED`);
})();

/* ()() this means this (function)(function execution) */

(() => {
    console.log(`DB is connected `);
})();

((name) => {
    console.log(`DB is connected ${name}`);
})('Krishnendu');