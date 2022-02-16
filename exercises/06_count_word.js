

export const countWord = (string, word) => {

                let regex = /mundo/ig
                let result = string.match(regex)

                return result.length
};