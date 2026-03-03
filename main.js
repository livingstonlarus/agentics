// Basic Templating System
const elements = {
    header: `
    <header class="fixed top-0 left-0 w-full z-50 transition-all duration-300 bg-white/80 backdrop-blur-md border-b border-slate-100">
        <nav class="container mx-auto px-6 py-4 flex items-center justify-between">
            <a href="#" class="flex items-center space-x-2">
                <img src="/assets/agentics-logo.png" alt="Agentics" class="h-10 w-auto">
            </a>
            
            <div class="hidden md:flex items-center space-x-10">
                <a href="#expertise" class="text-sm font-semibold text-slate-600 hover:text-agentics-blue transition-colors">Expertise</a>
                <a href="#methode" class="text-sm font-semibold text-slate-600 hover:text-agentics-blue transition-colors">Méthode</a>
                <a href="#diagnostic" class="text-sm font-semibold text-slate-600 hover:text-agentics-blue transition-colors">Offre</a>
                <a href="#diagnostic" class="btn-primary py-2 px-6 text-sm">Réserver un Audit</a>
            </div>

            <!-- Mobile menu button (basic) -->
            <button class="md:hidden text-slate-600">
                <svg class="w-6 h-6" fill="none" stroke="currentColor" viewBox="0 0 24 24"><path stroke-linecap="round" stroke-linejoin="round" stroke-width="2" d="M4 6h16M4 12h16M4 18h16"/></svg>
            </button>
        </nav>
    </header>
  `,
    footer: `
    <footer class="bg-slate-900 text-white py-20 border-t border-slate-800">
        <div class="container mx-auto px-6">
            <div class="grid md:grid-cols-4 gap-12 mb-16">
                <div class="col-span-2">
                    <img src="/assets/agentics-logo-white-trans.png" alt="Agentics Logo" class="h-10 w-auto mb-8 opacity-90">
                    <p class="text-slate-400 max-w-sm text-lg leading-relaxed">
                        L’élite de l’automatisation IA pour les secteurs critiques. <br/>Fiabilité. Déterminisme. Excellence.
                    </p>
                </div>
                <div>
                    <h5 class="text-white font-bold mb-6 italic uppercase tracking-widest text-sm">Navigation</h5>
                    <ul class="space-y-4 text-slate-400">
                        <li><a href="#expertise" class="hover:text-white transition-colors">Expertise</a></li>
                        <li><a href="#methode" class="hover:text-white transition-colors">Méthode</a></li>
                        <li><a href="#diagnostic" class="hover:text-white transition-colors">Diagnostic</a></li>
                    </ul>
                </div>
                <div>
                    <h5 class="text-white font-bold mb-6 italic uppercase tracking-widest text-sm">Contact</h5>
                    <p class="text-slate-400">Basé à Lyon</p>
                    <p class="text-slate-400 mt-2">contact@agentics.fr</p>
                </div>
            </div>
            <div class="pt-8 border-t border-slate-800 flex flex-col md:flex-row justify-between items-center text-slate-500 text-sm">
                <p>&copy; ${new Date().getFullYear()} Agentics. Tous droits réservés.</p>
                <div class="flex space-x-6 mt-4 md:mt-0">
                    <a href="#" class="hover:text-white">Mentions Légales</a>
                    <a href="#" class="hover:text-white">Politique de Confidentialité</a>
                </div>
            </div>
        </div>
    </footer>
  `
};

// Initialize app
document.addEventListener('DOMContentLoaded', () => {
    // Inject Header and Footer
    const headerContainer = document.getElementById('header-container');
    const footerContainer = document.getElementById('footer-container');

    if (headerContainer) headerContainer.innerHTML = elements.header;
    if (footerContainer) footerContainer.innerHTML = elements.footer;

    // Header scroll effect
    const header = document.querySelector('header');
    window.addEventListener('scroll', () => {
        if (window.scrollY > 50) {
            header.classList.add('py-2', 'shadow-lg');
            header.classList.remove('py-4');
        } else {
            header.classList.remove('py-2', 'shadow-lg');
            header.classList.add('py-4');
        }
    });

    // Basic smooth parallax for float animation (optional adjustment)
    // document.querySelectorAll('.animate-float').forEach(el => { ... });
});
