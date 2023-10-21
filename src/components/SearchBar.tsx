import {useState} from 'react';
import { shortener } from '../middleware/api';
import CopyAlert from './CopyAlert';

export default function SearchBar()
{
    const [url,setUrl] = useState<string>("");
    const [toggle,setToggle] = useState<boolean>(false);
    const [copied,setCopied] = useState<boolean>(false);

    const isValidURL = (url: string): boolean => {
        const urlPattern = /^(https?|http):\/\/\S+$/;
        return urlPattern.test(url);
    }
    const shorten = async () => {
        if(isValidURL(url))
        {
            const shortURL = await shortener(url);
            setUrl(shortURL.result_url);
            setToggle(true);
        }
        else
        {
            setUrl("You entered Invaild URL format.");
        }
    };
    const copy = () => {
        navigator.clipboard.writeText(url);
        setCopied(true);
    };
    const reset = () => {
        setToggle(false);
        setUrl("");
    };
    return(
        <>
            <div className="flex justify-center m-5 gap-3">
                <input className="w-full h-10 text-center border rounded border-blue-500 focus:border-red-300" placeholder="Enter the url for shortening it" value={url} onChange={(e) => {setUrl(e.target.value);}}/>
                <button className="w-50 border rounded border-red-500 pt-2 pb-2 pl-5 pr-5 hover:bg-red-500 hover:text-white" onClick={reset}>Reset</button>
                <button className="w-50 border rounded border-blue-500 pt-2 pb-2 pl-5 pr-5 hover:bg-blue-500 hover:text-white" onClick={toggle?copy:shorten}>{toggle?"Copy":"Shorten"}</button>
            </div>
            {copied?<CopyAlert isOpen={copied} setIsOpen={setCopied}/>:<></>}
        </>
    );
}