const regex = /\S+@\S+\.\S+/;

export const validateEmail = (email) => {
    return regex.test(email.toLowerCase())
}