


export function transformPhonePattern(phone: string): string {
    const formatNumber = phone.replace(/\D/g, "").trim();
    const regexNumber = formatNumber.replace(/^(\d{2})(\d{4,5})(\d{4})$/, '($1) $2$3');

    return regexNumber
};

export function transformNumber(phone: string): string {
    const numberFormated = phone.replace(/\D/g, "");
    return numberFormated;
}