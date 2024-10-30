let col = 450;
let row = 452;

let ifColOdd = IfNumOdd(Math.floor(col / 45));
let ifRowOdd = IfNumOdd(Math.floor(row / 45));

let colCont = Math.floor(col / 45)
let rowCont = Math.floor(row / 45)

let colMore = Math.ceil(45 * (col / 45 - colCont))
let rowMore = Math.ceil(45 * (row / 45 - rowCont))

let result

if (ifColOdd == ifRowOdd) {
    if (colMore > 0) colCont++
    if (rowMore > 0) rowCont++
    result = colCont * rowCont
}
else {
    if (colMore + rowMore <= 45 && (colMore > 0 || rowMore > 0)) {
        colCont++
        result = colCont * rowCont
        if (colMore > 0 && rowMore > 0) result++
    }
    else {
        if (colMore > 0) colCont++
        if (rowMore > 0) rowCont++
        result = colCont * rowCont
    }
}


// Odd
p(`Odd ${"=".repeat(60)}`)
p(`ifColOdd: ${ifColOdd}`)
p(`ifRowOdd: ${ifRowOdd}`)

// Count
p(`Count ${"=".repeat(60)}`)
p(`colCont: ${colCont}`)
p(`rowCont: ${rowCont}`)

// More
p(`More ${"=".repeat(60)}`)
p(`colMore: ${colMore}`)
p(`rowMore: ${rowMore}`)

// Result
p(`Result ${"=".repeat(60)}`)
p(`result: ${result}`)

