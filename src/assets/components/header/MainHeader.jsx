// src/assets/components/header/MainHeader.jsx
import React, { useState } from 'react';
import MenuIcon from '../icons/MenuIcons.jsx';
import CartIcon from '../icons/CartIcon.jsx';
import CloseIcon from '../icons/CloseIcon.jsx';
import NavLinkHeader from './NavLinkHeader.jsx';

const LoginIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M11 16l-4-4m0 0l4-4m-4 4h14m-5 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg>
);

const LogoutIcon = () => (
    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
        <path strokeLinecap="round" strokeLinejoin="round" d="M17 16l4-4m0 0l-4-4m4 4H7m6 4v1a3 3 0 01-3 3H6a3 3 0 01-3-3V7a3 3 0 013-3h7a3 3 0 013 3v1" />
    </svg>
);

const MainHeader = ({ 
    navigateTo,
    currentUser,
    onLogout,
    onShowLogin,
    onShowProfilePhoto,
    onCartClick,
    cartItemCount
}) => {

    const COMPANY_NAME = "Sugar Pop";
    const [navClass, setnavClass] = useState("hidden font-bold md:mr-auto md:gap-4 md:flex md:flex-row top-0 left-0 p-8 md:static md:p-0 md:h-auto");
    const [showUserMenu, setShowUserMenu] = useState(false);

    const handleOpenMenu = () => {
        setnavClass("absolute w-4/5 font-bold flex flex-col md:mr-auto md:gap-4 md:flex md:flex-row top-0 left-0 bg-[#FFF7FC] h-full p-8 gap-y-[21px] md:static md:p-0 md:h-auto z-10 shadow-2xl border-r-4 border-[#FF6EBE]");
    };

    const handleClosedMenu = () => {
        setnavClass("hidden font-bold md:mr-auto md:gap-4 md:flex md:flex-row top-0 left-0 p-8 md:static md:p-0 md:h-auto");
    };

    return (
        <header className="container mx-auto flex items-center px-4 gap-8 bg-[#FCE7F3] h-20 border-b-2 border-[#FFC559] sticky top-0 z-40 shadow-sm backdrop-blur-md">

            {/* Menú móvil */}
            <button className="md:hidden hover:bg-[#FFD6EC] p-2 rounded-lg transition" onClick={handleOpenMenu}>
                <MenuIcon />
            </button>

            {/* LOGO */}
            <div
                onClick={() => navigateTo('home')}
                className="mr-auto md:mr-0 font-extrabold text-3xl tracking-wider cursor-pointer bg-gradient-to-r from-[#FF6EBE] via-[#D6A8FF] to-[#8DE7E0] text-transparent bg-clip-text hover:scale-105 transition-transform duration-200"
            >
                {COMPANY_NAME}
            </div>

            {/* NAV */}
            <nav className={navClass}>
                <button className="mb-12 md:hidden hover:bg-[#FFD6EC] p-2 rounded-lg transition" onClick={handleClosedMenu}>
                    <CloseIcon />
                </button>
                <NavLinkHeader text="Skincare" onClick={() => navigateTo('skincare')} />
                <NavLinkHeader text="Maquillaje" onClick={() => navigateTo('maquillaje')} />
                <NavLinkHeader text="Accesorios" onClick={() => navigateTo('accesorios')} />
            </nav>

            {/* ICONOS HEADER */}
            <div className="flex items-center gap-4 ml-auto">

                {/* CARRITO */}
                <button
                    onClick={onCartClick}
                    className="relative hover:scale-105 transition-all duration-300 group text-[#FF6EBE]"
                >
                    <CartIcon />

                    <span className="absolute -top-1 -right-1 bg-gradient-to-r from-[#FF6EBE] to-[#D6A8FF] text-white text-xs w-5 h-5 rounded-full flex items-center justify-center font-bold shadow-md group-hover:scale-110 transition-transform">
                        {cartItemCount}
                    </span>
                </button>

                {/* USUARIO */}
                {currentUser ? (
                    <div className="relative">
                        <button
                            onClick={() => setShowUserMenu(!showUserMenu)}
                            className="flex items-center gap-3 hover:bg-[#FFE8F6] px-3 py-2 rounded-full transition-all duration-200"
                        >
                            {currentUser.profilePhoto ? (
                                <img
                                    src={currentUser.profilePhoto}
                                    alt={currentUser.name}
                                    className="w-10 h-10 rounded-full object-cover border-2 border-[#FF6EBE] shadow-sm"
                                />
                            ) : (
                                <div className="w-10 h-10 bg-gradient-to-r from-[#FF6EBE] to-[#8DE7E0] rounded-full flex items-center justify-center text-white font-bold border-2 border-white shadow-sm">
                                    {currentUser.name.charAt(0).toUpperCase()}
                                </div>
                            )}

                            <span className="hidden sm:block font-semibold text-[#FF6EBE] text-sm">
                                Hola, {currentUser.name.split(' ')[0]}!
                            </span>
                        </button>

                        {showUserMenu && (
                            <div className="absolute right-0 mt-2 w-56 bg-white rounded-lg shadow-xl border border-[#FFD6EC] py-2 z-50">
                                <div className="px-4 py-3 border-b border-[#FFD6EC]">
                                    <p className="text-sm font-semibold text-[#FF6EBE]">{currentUser.name}</p>
                                    <p className="text-xs text-gray-500">{currentUser.email}</p>
                                </div>

                                <button
                                    onClick={() => {
                                        setShowUserMenu(false);
                                        onShowProfilePhoto();
                                    }}
                                    className="w-full px-4 py-2 text-left text-sm text-gray-700 hover:bg-[#FFF0FA] flex items-center gap-3 transition"
                                >
                                    Cambiar foto de perfil
                                </button>

                                <button
                                    onClick={() => {
                                        setShowUserMenu(false);
                                        onLogout();
                                    }}
                                    className="w-full px-4 py-2 text-left text-sm text-[#FF6EBE] hover:bg-[#FFF0FA] flex items-center gap-3 transition border-t border-[#FFD6EC] mt-2 pt-2"
                                >
                                    <LogoutIcon />
                                    Cerrar sesión
                                </button>
                            </div>
                        )}
                    </div>
                ) : (
                    <button
                        onClick={onShowLogin}
                        className="flex items-center gap-2 text-white font-semibold bg-gradient-to-r from-[#FF6EBE] via-[#D6A8FF] to-[#8DE7E0] hover:from-[#FF5FB4] hover:to-[#7BDDD4] px-5 py-2.5 rounded-lg transition-all duration-300 transform hover:scale-105 shadow-md hover:shadow-lg"
                    >
                        <LoginIcon />
                        <span className="hidden sm:inline">Iniciar Sesión</span>
                    </button>
                )}
            </div>
        </header>
    );
};

export default MainHeader;
