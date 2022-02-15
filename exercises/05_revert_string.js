

export const revertString = (string) => {

                let response = '';

                for (let i = string.length - 1; i >= 0; i--) {
                                response += string[i]
                                
                }

                return response
};