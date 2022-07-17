import { useRouter } from 'next/router'
import '@fortawesome/fontawesome-free/css/all.css';

export default function Header() {
    return (
        <div>
            <a href='/' className={'link'}><h1><i className={"fa-solid fa-house"}></i> </h1></a>

            <style jsx>{
                `
                .link {
                    text-decoration: none;
                    color: black;
                }
                `
            }</style>

        </div >

    )
}

