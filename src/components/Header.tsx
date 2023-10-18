import Logo from '../assets/letty-icon.svg';

export const Header = () => {
    return (
        <header className="h-28 w-screen fixed top-0">
            <img
                className="fixed left-[125px] w-[150px] h-[125px]"
                src={Logo}
                alt="Letty Logo"
            />
        </header>
    );
};
