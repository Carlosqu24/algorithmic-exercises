

export const trimString = (string, startIndex) => {
                let newString = '';

                for (let i = 0; i <= startIndex; i++) {
                                const char = string[i]
                                newString += char;
                };

                return newString;
}