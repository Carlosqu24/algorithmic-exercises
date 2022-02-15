
export const countStringChars = ( string, isStrict ) => {
                if ( isStrict) return string.trim().length
                
                return string.length;
}