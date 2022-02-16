

export const isPalindrome = (text) => {

                let reverseText = text.split('').reverse().join('')

                if (reverseText == text) {
                                                return true
                } else {
                                return false
                }
}