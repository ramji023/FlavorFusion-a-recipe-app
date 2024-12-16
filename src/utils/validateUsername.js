function isValidUsername(username) {
    /**
     * Validates if the username contains only alphabets and a single space between words.
     * 
     * @param {string} username - The username to validate.
     * @returns {boolean} True if the username is valid, False otherwise.
     */
    
    // Regular expression to match only alphabets and a single space between words
    const regex = /^[A-Za-z]+( [A-Za-z]+)*$/;
    
    return regex.test(username);
}

export {isValidUsername}