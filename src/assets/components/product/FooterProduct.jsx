import React from 'react';

const Footer = () => (
  <footer className="bg-gradient-to-r from-[#FFB6DA] via-[#A4E4EC] to-[#FEC86A] text-white pt-12">
    <div className="container mx-auto px-4">
      <div className="grid grid-cols-1 md:grid-cols-4 gap-8 text-center md:text-left">
        
        {/* Marca */}
        <div className="md:col-span-1 mb-6 md:mb-0">
          <h3 className="font-black text-3xl text-white tracking-wide mb-3 drop-shadow-md">
            Sugar Pop
          </h3>
          <p className="text-sm text-pink-50">
            Maquillaje que ilumina tu belleza natural
          </p>
        </div>

        {/* Sobre la marca */}
        <div>
          <h4 className="font-bold uppercase text-white mb-4 tracking-wide">Sobre Sugar Pop</h4>
          <a href="#" className="block mb-2 hover:text-[#FFD7E7] transition">Nosotros</a>
          <a href="#" className="block mb-2 hover:text-[#FFD7E7] transition">Colecciones</a>
          <a href="#" className="block mb-2 hover:text-[#FFD7E7] transition">Trabaja con nosotros</a>
        </div>

        {/* Ayuda */}
        <div>
          <h4 className="font-bold uppercase text-white mb-4 tracking-wide">Ayuda</h4>
          <a href="#" className="block mb-2 hover:text-[#FFD7E7] transition">Envíos</a>
          <a href="#" className="block mb-2 hover:text-[#FFD7E7] transition">Seguimiento</a>
          <a href="#" className="block mb-2 hover:text-[#FFD7E7] transition">Preguntas frecuentes</a>
        </div>

        {/* Contacto y redes */}
        <div>
          <h4 className="font-bold uppercase text-white mb-4 tracking-wide">Contáctanos</h4>
          <p className="mb-2 text-pink-50">Email: contacto@sugarpop.com</p>
          <p className="mb-2 text-pink-50">Teléfono: +57 315 690 7057</p>

          {/* Redes sociales */}
          <div className="flex gap-4 mt-4 justify-center md:justify-start">
            {/* Facebook */}
            <a href="#" className="hover:opacity-80 transition" aria-label="Facebook">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M9 8h-3v4h3v12h5v-12h3.642l.358-4h-4v-1.667c0-.955.192-1.333 1.115-1.333h2.885v-5h-3.808c-3.596 0-5.192 1.583-5.192 4.615v3.385z" />
              </svg>
            </a>

            {/* Instagram */}
            <a href="#" className="hover:opacity-80 transition" aria-label="Instagram">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.85s-.011 3.584-.069 4.85c-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07s-3.584-.012-4.85-.07c-3.252-.148-4.771-1.691-4.919-4.919-.058-1.265-.069-1.645-.069-4.85s.011-3.584.069-4.85c.149-3.225 1.664-4.771 4.919-4.919 1.266-.058 1.644-.07 4.85-.07zm0 5.838c-3.403 0-6.162 2.759-6.162 6.162s2.759 6.162 6.162 6.162 6.162-2.759 6.162-6.162-2.759-6.162-6.162-6.162z" />
              </svg>
            </a>

            {/* Twitter */}
            <a href="#" className="hover:opacity-80 transition" aria-label="Twitter">
              <svg className="w-6 h-6" fill="currentColor" viewBox="0 0 24 24">
                <path d="M24 4.557a9.93 9.93 0 01-2.828.775 4.932 4.932 0 002.165-2.724 9.864 9.864 0 01-3.127 1.195A4.924 4.924 0 0016.616 3c-2.717 0-4.924 2.206-4.924 4.923 0 .386.044.763.127 1.124A13.978 13.978 0 011.671 3.149a4.923 4.923 0 001.523 6.574 4.903 4.903 0 01-2.229-.616v.063c0 2.385 1.697 4.374 3.946 4.828a4.936 4.936 0 01-2.224.085 4.924 4.924 0 004.6 3.417A9.875 9.875 0 010 19.54a13.94 13.94 0 007.548 2.212c9.056 0 14.009-7.506 14.009-14.009 0-.213-.005-.425-.014-.637A10.025 10.025 0 0024 4.557z" />
              </svg>
            </a>
          </div>
        </div>
      </div>

      {/* Línea inferior */}
      <div className="mt-8 py-4 border-t border-white/30 text-center text-sm">
        <p className="mb-1">&copy; {new Date().getFullYear()} Sugar Pop. Todos los derechos reservados.</p>
        <a href="#" className="hover:text-[#FFD7E7]">Términos y Condiciones</a> |{" "}
        <a href="#" className="hover:text-[#FFD7E7]">Política de Privacidad</a>
      </div>
    </div>
  </footer>
);

export default Footer;



                   