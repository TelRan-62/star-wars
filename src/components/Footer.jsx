import Button from "./ui/Button.jsx";

const Footer = () => {
    return (
        <footer className="clear-both rounded-b-3xl bg-grey h-20 grid grid-cols-8 items-center">
            <Button className={'col-start-3'}>Send me email</Button>
        </footer>
    )
}

export default Footer;