

export const repeatString = (string, repeatTimes) => {
                let responseString = '';

                for (let i = 0; i < repeatTimes; i++) {
                                responseString += `${string} `;
                };
                
                return responseString.trimEnd().length;
};