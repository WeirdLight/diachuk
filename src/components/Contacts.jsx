import Title from "./Title";

export default function Contacts(){
    return(
        <footer id='contacts'>
            <Title title='Contacts' />
            <span className='contacts'>
                <ul>
                    <li>Live in Kyiv, Ukraine</li>
                    <li>Email: <a href="mailto:diachukkateryna78@gmail.com">diachukkateryna78@gmail.com</a></li>
                    <li>Tel.: <a href="tel:+380960541425">+380960541425</a></li>
                </ul>
            </span>
        </footer>
    );
}