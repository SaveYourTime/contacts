export const isEmail = (email: string) => /^[\w-.]+@([\w-]+\.)+[\w-]{2,4}$/g.test(email);
export const isEmptyString = (...items: string[]) => items.some((item) => item === '');
