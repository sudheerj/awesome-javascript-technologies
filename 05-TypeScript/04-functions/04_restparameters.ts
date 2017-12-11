function namesList(firstName: string, ...remainingNames: string[]) {
    return firstName + " " + remainingNames.join(" ");
}