import { useState ,useEffect} from 'react';

const useAbbreviation = (str) => {
    const [data, setData] = useState('');

    //abbreviation function
    const abbreviateString = (s) => {
        if(s.length === 1) {
            return s;
        } else if(s.length > 1) {
            return s[0] + `${s.length - 2}` + s[s.length - 1];
        }  
    }

    // This will run whenever input string changes
    useEffect(() => {
        setData(abbreviateString(str))
    }, [str]);

    return data;
};

export default useAbbreviation;