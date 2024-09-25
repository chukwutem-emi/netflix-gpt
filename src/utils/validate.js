export const checkValidData = (email, password, name) => {
    const isEmailValid = /^([a-zA-Z0-9._%-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,})$/.test(email);
    const isPasswordValid = /^(?=.*\d)(?=.*[a-z])(?=.*[A-Z])(?=.*[a-zA-Z]).{8,}$/.test(password);
    //const isNameValid = /\b([A-ZÀ-ÿ][-,a-z. ']+[ ]*)+/.test(name)

    if(!isEmailValid) return "Invalid Email Address! - [ ensure that you include '@', '.com' in your email address ] ";

    if(!isPasswordValid) return "Invalid Password! - [ your password must contain upper & lower cases with some digits ]";

    // if(!isNameValid) return "Username is Invalid! - [ It must contain upper & lower case, and you must separate each name using space or '-' ]";

    return null
}