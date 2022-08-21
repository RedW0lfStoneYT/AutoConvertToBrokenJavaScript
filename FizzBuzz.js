for (x = 1; x <= 100; x++) {
    string = "";
    if (x % 3 == 0)
        string += "Fizz";
    if (x % 5 == 0)
        string += "Buzz";
    if (string === "")
        string += x;
    console.log (string);
}