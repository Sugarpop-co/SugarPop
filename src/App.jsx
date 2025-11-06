// src/App.jsx
import React, { useState, useEffect } from "react";

// COMPONENTES
import MainHeader from "./assets/components/header/MainHeader.jsx";
import CategoryPage from "./assets/components/pages/CategoryPage.jsx";
import CartPage from "./assets/components/pages/CartPage.jsx";
import MainProduct from "./assets/components/product/MainProduct.jsx";
import PromocionBanner from "./assets/components/product/PromocionBanner.jsx";
import FeaturedProducts from "./assets/components/product/FeaturedProducts.jsx";
import FooterProduct from "./assets/components/product/FooterProduct.jsx";
import LoginModal from "./assets/components/modals/LoginModal.jsx";
import ProfilePhotoModal from "./assets/components/modals/ProfilePhotoModal.jsx";

// USUARIOS
import { users } from "./data/user.js";


// ✅ HOME PAGE
const HomePage = () => (
    <>
        <MainProduct />
        <PromocionBanner />
        <FeaturedProducts />
        <FooterProduct />
    </>
);


const App = () => {

    // ===== ESTADOS GENERALES =====
    const [currentPage, setCurrentPage] = useState("home");
    const [currentUser, setCurrentUser] = useState(null);
    const [cart, setCart] = useState([]);

    const [isLoginModalOpen, setIsLoginModalOpen] = useState(false);
    const [isProfilePhotoModalOpen, setIsProfilePhotoModalOpen] = useState(false);
    const [isLoading, setIsLoading] = useState(true);


    // ===== RESTAURAR SESIÓN Y CARRITO =====
    useEffect(() => {
        try {
            const savedUser = localStorage.getItem("currentUser");

            if (savedUser) {
                const userData = JSON.parse(savedUser);

                const savedPhoto = localStorage.getItem(`profilePhoto_${userData.username}`);

                setCurrentUser({
                    ...userData,
                    profilePhoto: savedPhoto || null,
                });

                // cargar carrito
                const savedCart = localStorage.getItem(`cart_${userData.username}`);
                if (savedCart) {
                    setCart(JSON.parse(savedCart));
                }

                console.log("✅ Sesión restaurada:", userData.name);
            }
        } catch (err) {
            console.error("❌ Error restaurando sesión:", err);
            localStorage.removeItem("currentUser");
        } finally {
            setIsLoading(false);
        }
    }, []);


    // ===== GUARDAR SESIÓN =====
    useEffect(() => {
        if (currentUser) {
            const userToSave = {
                username: currentUser.username,
                name: currentUser.name,
                email: currentUser.email || `${currentUser.username}@shoreline.com`,
            };
            localStorage.setItem("currentUser", JSON.stringify(userToSave));
        } else {
            localStorage.removeItem("currentUser");
        }
    }, [currentUser]);


    // ===== GUARDAR CARRITO =====
    useEffect(() => {
        if (currentUser) {
            localStorage.setItem(
                `cart_${currentUser.username}`,
                JSON.stringify(cart)
            );
        }
    }, [cart, currentUser]);


    // ===== LOGIN =====
    const login = (username, password) => {
        const foundUser = users.find(
            (u) => u.username === username && u.password === password
        );

        if (!foundUser) return false;

        const savedPhoto = localStorage.getItem(`profilePhoto_${username}`);

        const userWithPhoto = {
            ...foundUser,
            email: foundUser.email || `${username}@shoreline.com`,
            profilePhoto: savedPhoto || null,
        };

        setCurrentUser(userWithPhoto);

        // carrito
        const savedCart = localStorage.getItem(`cart_${username}`);
        if (savedCart) {
            setCart(JSON.parse(savedCart));
        }

        console.log("✅ Login:", userWithPhoto.name);
        return true;
    };


    // ===== LOGOUT =====
    const logout = () => {
        localStorage.removeItem("currentUser");

        console.log("🔴 Logout");

        setCurrentUser(null);
        setCart([]);
        navigateTo("home");
    };


    // ===== CAMBIO DE FOTO =====
    const updateProfilePhoto = (photoURL) => {
        if (!currentUser) return;

        if (photoURL) {
            localStorage.setItem(`profilePhoto_${currentUser.username}`, photoURL);
        } else {
            localStorage.removeItem(`profilePhoto_${currentUser.username}`);
        }

        setCurrentUser((prev) => ({
            ...prev,
            profilePhoto: photoURL,
        }));
    };


    // ===== CARRITO =====
    const addToCart = (product) => {
        if (!currentUser) {
            setIsLoginModalOpen(true);
            return;
        }

        setCart((prev) => {
            const existing = prev.find((p) => p.id === product.id);

            if (existing) {
                return prev.map((p) =>
                    p.id === product.id
                        ? { ...p, quantity: p.quantity + 1 }
                        : p
                );
            }

            return [...prev, { ...product, quantity: 1 }];
        });
    };

    const updateQuantity = (productId, newQuantity) => {
        if (newQuantity <= 0) return removeFromCart(productId);

        setCart((prev) =>
            prev.map((p) =>
                p.id === productId ? { ...p, quantity: newQuantity } : p
            )
        );
    };

    const removeFromCart = (productId) => {
        setCart((prev) => prev.filter((p) => p.id !== productId));
    };


    // ===== NAVEGACIÓN =====
    const navigateTo = (page) => setCurrentPage(page);

    const handleCartClick = () => {
        if (!currentUser) setIsLoginModalOpen(true);
        else navigateTo("cart");
    };


    // ===== RENDERIZADO DE PÁGINAS =====
    const renderPage = () => {
        switch (currentPage) {
            case "skincare":
                return (
                    <CategoryPage
                        title="Colección Skincare"  // Cambiado de "SkinCare" a "Maquillaje"
                        category="skincare"          // Cambiado de "Ojos" a "Maquillaje"
                        onAddToCart={addToCart}
                    />
                );
            case "maquillaje":
                return (
                    <CategoryPage
                        title="Colección Maquillaje"
                        category="maquillaje"
                        onAddToCart={addToCart}
                    />
                );
            case "accesorios":
                return (
                    <CategoryPage
                        title="Colección Accesorios"  // Cambiado de "SkinCare" a "Maquillaje"
                        category="accesorios"          // Cambiado de "Ojos" a "Maquillaje"
                        onAddToCart={addToCart}
                    />
                );
            case "cart":
                return (
                    <CartPage
                        cart={cart}
                        onUpdateQuantity={updateQuantity}
                        onRemoveItem={removeFromCart}
                        currentUser={currentUser}
                    />
                );
            case "about":
                return (
                    <div className="container mx-auto py-20 px-4">
                        <h1 className="text-4xl font-bold">Acerca de Nosotros</h1>
                    </div>
                );
            default:
                return <HomePage />;
        }
    };


    // ===== MODALES =====
    const openLoginModal = () => setIsLoginModalOpen(true);
    const closeLoginModal = () => setIsLoginModalOpen(false);
    const openProfilePhotoModal = () => setIsProfilePhotoModalOpen(true);
    const closeProfilePhotoModal = () => setIsProfilePhotoModalOpen(false);


    // ===== LOADING =====
    if (isLoading) {
        return (
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <div className="text-center">
                    <div className="inline-block animate-spin rounded-full h-12 w-12 border-b-2 border-orange-500 mb-4"></div>
                    <p className="text-gray-600 font-semibold">Cargando...</p>
                </div>
            </div>
        );
    }


    // ===== APP RENDER =====
    return (
        <div>
            <MainHeader
                navigateTo={navigateTo}
                currentUser={currentUser}
                onLogout={logout}
                onShowLogin={openLoginModal}
                onShowProfilePhoto={openProfilePhotoModal}
                cartItemCount={cart.reduce((acc, item) => acc + item.quantity, 0)}
                onCartClick={handleCartClick}
            />

            {renderPage()}

            {isLoginModalOpen && (
                <LoginModal onLogin={login} onClose={closeLoginModal} />
            )}

            {isProfilePhotoModalOpen && currentUser && (
                <ProfilePhotoModal
                    currentUser={currentUser}
                    onUpdatePhoto={updateProfilePhoto}
                    onClose={closeProfilePhotoModal}
                />
            )}
        </div>
    );
};

export default App;
