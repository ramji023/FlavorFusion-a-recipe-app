function passwordChecker(password) {
    // Regular expression for strong password validation:
    // Minimum 8 characters, at least one uppercase, one lowercase, one number, and one special character
    const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])(?=.*\d)(?=.*[@$!%*?&])[A-Za-z\d@$!%*?&]{8,}$/;
    return passwordRegex.test(password);
}

export default passwordChecker