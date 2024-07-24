function convert_to_roman_numerals(number) {
    switch (number) {
        case 1:
            roman_numeral = "I";
            break;
        case 5:
            roman_numeral = "V";
            break;
    }
    return roman_numeral;
}
module.exports = convert_to_roman_numerals;